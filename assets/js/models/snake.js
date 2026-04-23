class Snake {
  constructor(ctx, x = SNAKE_START_X, y = SNAKE_START_Y, direction = "left") {
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

  // Change Direction
  onKeyEvent(event) {
    switch (event.key) {
      case "ArrowUp":
      case "w":
        if (this.direction !== "down") {
          this.direction = "up";
        }
        break;

      case "ArrowLeft":
      case "a":
        if (this.direction !== "right") {
          this.direction = "left";
        }
        break;

      case "ArrowDown":
      case "s":
        if (this.direction !== "up") {
          this.direction = "down";
        }
        break;

      case "ArrowRight":
      case "d":
        if (this.direction !== "left") {
          this.direction = "right";
        }
        break;
    }
  }

  move() {
    switch (this.direction) {
      case "right":
        if (this.drawCount >= SNAKE_MOVE_FREQ) {
          this.x += 25;
          this.drawCount = 0;
        }
        break;
      case "left":
        if (this.drawCount >= SNAKE_MOVE_FREQ) {
          this.x -= 25;
          this.drawCount = 0;
        }
        break;
      case "up":
        if (this.drawCount >= SNAKE_MOVE_FREQ) {
          this.y -= 25;
          this.drawCount = 0;
        }
        break;
      case "down":
        if (this.drawCount >= SNAKE_MOVE_FREQ) {
          this.y += 25;
          this.drawCount = 0;
        }
        break;
    }
  }
}
