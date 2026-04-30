const FPS = 1000 / 60;

const DIFFICULTIES = {
  easy: { canvasWidth: 500, canvasHeight: 250, snakeSpeed: 15 },
  normal: { canvasWidth: 750, canvasHeight: 500, snakeSpeed: 10 },
  hard: { canvasWidth: 1000, canvasHeight: 750, snakeSpeed: 5 },
};

let CANVAS_WIDTH;
let CANVAS_HEIGHT;

const SNAKE_W = 25;
const SNAKE_H = 25;
let SNAKE_START_X;
let SNAKE_START_Y;
let SNAKE_MOVE_FREQ;
