class Snake {
  constructor(ctx, x = SNAKE_START_X, y = SNAKE_START_Y, direction = "down") {
    this.ctx = ctx;

    this.x = x;
    this.y = y;
    this.direction = direction;

    this.w = SNAKE_W;
    this.h = SNAKE_H;

    this.drawCount = 0;
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.drawCount++;
  }

  move() {
    switch (this.direction) {
      case "right":
        if (this.drawCount >= SNAKE_MOVE_FREQ && this.direction != "left") {
          this.x += 25;
          this.drawCount = 0;
        }
        break;
      case "left":
        if (this.drawCount >= SNAKE_MOVE_FREQ && this.direction != "right") {
          this.x -= 25;
          this.drawCount = 0;
        }
        break;
      case "up":
        if (this.drawCount >= SNAKE_MOVE_FREQ && this.direction != "down") {
          this.y -= 25;
          this.drawCount = 0;
        }
        break;
      case "down":
        if (this.drawCount >= SNAKE_MOVE_FREQ && this.direction != "up") {
          this.y += 25;
          this.drawCount = 0;
        }
        break;
    }
  }
}
