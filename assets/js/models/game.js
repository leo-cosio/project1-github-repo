class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.game = document.getElementById("game");
    this.gameMenu = document.getElementById("game-menu");

    this.drawIntervalId = undefined;
    this.fps = FPS;

    this.scoreHtml = document.getElementById("score");
    this.score = 0;
    this.highScore = this.loadHighScore();

    this.setupListeners();
  }

  start(difficulty) {
    switch (difficulty) {
      case "easy":
        this.canvas.width = DIFFICULTIES.easy.canvasWidth;
        this.canvas.height = DIFFICULTIES.easy.canvasHeight;
        CANVAS_WIDTH = DIFFICULTIES.easy.canvasWidth;
        CANVAS_HEIGHT = DIFFICULTIES.easy.canvasHeight;
        SNAKE_MOVE_FREQ = DIFFICULTIES.easy.snakeSpeed;
        break;
      case "normal":
        this.canvas.width = DIFFICULTIES.normal.canvasWidth;
        this.canvas.height = DIFFICULTIES.normal.canvasHeight;
        CANVAS_WIDTH = DIFFICULTIES.normal.canvasWidth;
        CANVAS_HEIGHT = DIFFICULTIES.normal.canvasHeight;
        SNAKE_MOVE_FREQ = DIFFICULTIES.normal.snakeSpeed;
        break;
      case "hard":
        this.canvas.width = DIFFICULTIES.hard.canvasWidth;
        this.canvas.height = DIFFICULTIES.hard.canvasHeight;
        CANVAS_WIDTH = DIFFICULTIES.hard.canvasWidth;
        CANVAS_HEIGHT = DIFFICULTIES.hard.canvasHeight;
        SNAKE_MOVE_FREQ = DIFFICULTIES.hard.snakeSpeed;
        break;
    }

    SNAKE_START_X = CANVAS_WIDTH / 2;
    SNAKE_START_Y = CANVAS_HEIGHT / 2;

    this.snake = new Snake(this.ctx);

    this.apple = new Apple(this.ctx);

    this.gameMenu.style.display = "none";
    this.game.style.display = "flex";
    if (!this.drawIntervalId) {
      this.drawIntervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw();
      }, this.fps);
    }
  }
  stop() {
    clearInterval(this.drawIntervalId);
    this.drawIntervalId = undefined;
  }

  setupListeners() {
    addEventListener("keydown", (event) => this.snake.onKeyEvent(event));
  }

  checkBounds(snakePreviousState) {
    // Check if apple is eaten
    if (
      this.snake.body[0][0] === this.apple.x &&
      this.snake.body[0][1] === this.apple.y
    ) {
      this.apple.newApplePos();
      this.snake.body.push([
        snakePreviousState[snakePreviousState.length - 1][0],
        snakePreviousState[snakePreviousState.length - 1][1],
      ]);
      this.score++;
      this.scoreHtml.innerText = `Score: ${this.score}`;
    }

    if (this.apple.x === CANVAS_WIDTH || this.apple.y === CANVAS_HEIGHT) {
      this.apple.newApplePos();
    }

    for (let i = 1; i < this.snake.body.length; i++) {
      const block = this.snake.body[i];

      // Check if apple spawns in body
      if (block[0] === this.apple.x && block[1] === this.apple.y) {
        this.apple.newApplePos();
      }

      // Check if snake collides with itself, it doesn't go through it before game over
      if (
        this.snake.body[0][0] === block[0] &&
        this.snake.body[0][1] === block[1]
      ) {
        this.snake.body = snakePreviousState;
        this.gameOver();
      }
    }

    switch (this.snake.body[0][0]) {
      case CANVAS_WIDTH:
        this.snake.body = snakePreviousState;
        this.gameOver();
        break;
      case -SNAKE_W:
        this.snake.body = snakePreviousState;
        this.gameOver();
        break;
    }
    switch (this.snake.body[0][1]) {
      case CANVAS_HEIGHT:
        this.snake.body = snakePreviousState;
        this.gameOver();
        break;
      case -SNAKE_H:
        this.snake.body = snakePreviousState;
        this.gameOver();
        break;
    }
  }

  loadHighScore() {
    const stored = localStorage.getItem("high-score");
    const highScoreDom = document.getElementById("high-score");

    if (stored === null) {
      highScoreDom.innerText = "High Score: 0";
      return 0;
    }

    highScoreDom.innerText = `High Score: ${Number(stored)}`;
    return Number(stored);
  }

  gameOver() {
    this.stop();
    const highScoreDom = document.getElementById("high-score");

    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem("high-score", this.score);
      highScoreDom.innerText = `High Score: ${this.highScore}`;
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  move() {
    const snakePreviousState = this.snake.body.map((block) => block.slice());

    this.snake.move();
    this.checkBounds(snakePreviousState);
  }
  draw() {
    this.apple.draw();
    this.snake.draw();
  }
}
