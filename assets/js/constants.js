const FPS = 1000 / 60;

const DIFFICULTIES = {
  easy: { canvasWidth: 500, canvasHeight: 250 },
  normal: { canvasWidth: 750, canvasHeight: 500 },
  hard: { canvasWidth: 1000, canvasHeight: 750 },
};

let CANVAS_WIDTH;
let CANVAS_HEIGHT;

const SNAKE_W = 25;
const SNAKE_H = 25;
const SNAKE_START_X = CANVAS_WIDTH / 2;
const SNAKE_START_Y = CANVAS_HEIGHT / 2;
const SNAKE_MOVE_FREQ = 10;

const GRID_WIDTH = CANVAS_WIDTH / SNAKE_W;
const GRID_HEIGHT = CANVAS_HEIGHT / SNAKE_H;
