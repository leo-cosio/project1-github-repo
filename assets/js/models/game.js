class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById("main-canvas");
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.getContext("2d");

    this.drawIntervalId = undefined;
    this.fps = FPS;

    this.snake = new Snake(this.ctx);

    this.apple = new Apple(this.ctx);
  }

  start() {
    if (!this.drawIntervalId) {
      this.setupListeners();
      this.drawIntervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw();
      }, this.fps);
    }
  }

  setupListeners() {
    addEventListener("keydown", (event) => this.snake.onKeyEvent(event));
  }

  stop() {
    clearInterval(this.drawIntervalId);
    this.drawIntervalId = undefined;
  }

  checkBounds(snakePreviousState) {
    for (let i = 1; i < this.snake.body.length; i++) {
      const block = this.snake.body[i];

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
