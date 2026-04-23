addEventListener("DOMContentLoaded", () => {
  const game = new Game("main-canvas");
  game.start();

  window.game = game; //debug
});
