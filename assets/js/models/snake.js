class Snake {
  constructor(ctx, x = SNAKE_START_X, y = SNAKE_START_Y, direction = "down") {
    this.ctx = ctx;

    this.x = x;
    this.y = y;

    this.direction = direction;

    this.w = SNAKE_W;
    this.h = SNAKE_H;

    this.body = [
      [x, y],
      [x, y - SNAKE_H],
      [x, y - SNAKE_H * 2],
      [x, y - SNAKE_H * 3],
    ];

    this.drawCount = 0;
  }
  /* 
  eatApple() {
    this.body.push(
      new SnakeBlock(
        this.ctx,
        this.body[body.length - 1][0],
        this.body[body.length - 1][1],
      ),
    );
  }
 */
  draw() {
    this.body.forEach((block) => {
      this.ctx.fillStyle = "#454040";
      this.ctx.fillRect(block[0], block[1], this.w, this.h);
    });
    this.drawCount++;
  }

  onKeyEvent(event) {
    switch (event.key) {
      case "ArrowUp":
      case "W":
      case "w":
        if (this.direction !== "down") {
          this.direction = "up";
        }
        break;

      case "ArrowLeft":
      case "A":
      case "a":
        if (this.direction !== "right") {
          this.direction = "left";
        }
        break;

      case "ArrowDown":
      case "S":
      case "s":
        if (this.direction !== "up") {
          this.direction = "down";
        }
        break;

      case "ArrowRight":
      case "D":
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
          for (let i = this.body.length - 1; i >= 1; i--) {
            const block = this.body[i];
            this.body[i][0] = this.body[i - 1][0];
            this.body[i][1] = this.body[i - 1][1];
          }
          this.body[0][0] += 25;
          this.drawCount = 0;
        }
        break;
      case "left":
        if (this.drawCount >= SNAKE_MOVE_FREQ) {
          for (let i = this.body.length - 1; i >= 1; i--) {
            const block = this.body[i];
            this.body[i][0] = this.body[i - 1][0];
            this.body[i][1] = this.body[i - 1][1];
          }
          this.body[0][0] -= 25;
          this.drawCount = 0;
        }
        break;
      case "up":
        if (this.drawCount >= SNAKE_MOVE_FREQ) {
          for (let i = this.body.length - 1; i >= 1; i--) {
            const block = this.body[i];
            this.body[i][0] = this.body[i - 1][0];
            this.body[i][1] = this.body[i - 1][1];
          }
          this.body[0][1] -= 25;
          this.drawCount = 0;
        }
        break;
      case "down":
        if (this.drawCount >= SNAKE_MOVE_FREQ) {
          for (let i = this.body.length - 1; i >= 1; i--) {
            const block = this.body[i];
            this.body[i][0] = this.body[i - 1][0];
            this.body[i][1] = this.body[i - 1][1];
          }
          this.body[0][1] += 25;
          this.drawCount = 0;
        }
        break;
    }
  }
}
