class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.getContext("2d");

    this.drawIntervalId = undefined;
    this.fps = FPS;

    this.snake = new Snake(this.ctx);

    this.apple = new Apple(this.ctx);

    this.score = 0;

    this.setupListeners();
  }

  start() {
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
      console.log(this.score);
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
        this.stop();
      }
    }

    switch (this.snake.body[0][0]) {
      case CANVAS_WIDTH:
        this.snake.body = snakePreviousState;
        this.stop();
        break;
      case -SNAKE_W:
        this.snake.body = snakePreviousState;
        this.stop();
        break;
    }
    switch (this.snake.body[0][1]) {
      case CANVAS_HEIGHT:
        this.snake.body = snakePreviousState;
        this.stop();
        break;
      case -SNAKE_H:
        this.snake.body = snakePreviousState;
        this.stop();
        break;
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
