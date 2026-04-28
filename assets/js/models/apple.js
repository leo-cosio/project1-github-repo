class Apple {
  constructor(ctx, x, y) {
    this.ctx = ctx;

    this.x = Math.floor(Math.random() * GRID_WIDTH + 1) * SNAKE_W;
    this.y = Math.floor(Math.random() * GRID_HEIGHT + 1) * SNAKE_H;
  }

  newApplePos() {
    this.x = Math.floor(Math.random() * GRID_WIDTH + 1) * SNAKE_W;
    this.y = Math.floor(Math.random() * GRID_HEIGHT + 1) * SNAKE_H;
  }

  draw() {
    this.ctx.fillStyle = "#B85B5B";
    this.ctx.fillRect(this.x, this.y, SNAKE_W, SNAKE_H);
  }
}
