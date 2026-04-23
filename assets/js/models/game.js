class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById("main-canvas");
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.getContext("2d");

    this.drawIntervalId = undefined;
    this.fps = FPS;

    this.snake = new Snake(this.ctx);
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

  checkBounds() {
    switch (this.snake.x) {
      case CANVAS_WIDTH:
        this.snake.x -= SNAKE_W;
        this.stop();
        break;
      case -SNAKE_W:
        this.snake.x += SNAKE_W;
        this.stop();
        break;
    }
    switch (this.snake.y) {
      case CANVAS_HEIGHT:
        this.snake.y -= SNAKE_H;
        this.stop();
        break;
      case -SNAKE_H:
        this.snake.y += SNAKE_H;
        this.stop();
        break;
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  move() {
    this.snake.move();
    this.checkBounds();
  }
  draw() {
    this.snake.draw();
  }
}
