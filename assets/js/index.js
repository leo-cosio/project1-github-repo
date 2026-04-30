addEventListener("DOMContentLoaded", () => {
  const game = new Game("main-canvas");

  const easyButton = document.getElementById("easy");
  const normalButton = document.getElementById("normal");
  const hardButton = document.getElementById("hard");

  easyButton.onclick = () => {
    game.start("easy");
  };
  normalButton.onclick = () => {
    game.start("normal");
  };
  hardButton.onclick = () => {
    game.start("hard");
  };

  window.game = game; //debug
});
