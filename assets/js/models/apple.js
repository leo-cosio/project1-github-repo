class Apple {
  constructor(ctx) {
    this.ctx = ctx;

    this.x = 0;
    this.y = 0;

    this.gridWidth = CANVAS_WIDTH / SNAKE_W;
    this.gridHeight = CANVAS_HEIGHT / SNAKE_H;

    this.newApplePos();
  }

  newApplePos() {
    this.x = Math.floor(Math.random() * this.gridWidth + 1) * SNAKE_W;
    this.y = Math.floor(Math.random() * this.gridHeight + 1) * SNAKE_H;
  }

  draw() {
    this.ctx.fillStyle = "#B85B5B";
    this.ctx.fillRect(this.x, this.y, SNAKE_W, SNAKE_H);
  }
}
