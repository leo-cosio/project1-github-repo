class Snake {
  constructor(ctx, x = 500, y = 375, direction = "r") {
    this.ctx = ctx;

    this.x = x;
    this.y = y;
    this.direction = direction;

    this.w = SNAKE_W;
    this.h = SNAKE_H;
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
