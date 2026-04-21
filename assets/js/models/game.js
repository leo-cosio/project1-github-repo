class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById("main-canvas");
    this.ctx = this.canvas.getContext("2d");

    this.drawIntervalId = undefined;
    this.fps = FPS;
  }

  start() {
    if (!this.drawIntervalId) {
      this.drawIntervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw();
      }, this.FPS);
    }
  }

  clear() {}
  move() {}
  draw() {}
}
