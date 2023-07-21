const canvasEl = document.querySelector("canvas"),
  canvasCtx = canvasEl.getContext("2d"),
  gapX = 10;
const field = {
  w: window.innerWidth,
  h: window.innerHeight,
  draw: function () {
    canvasCtx.fillStyle = "#286047";
    canvasCtx.fillRect(0, 0, this.w, this.h);
  },
};

const line = {
  w: 15,
  h: field.h,
  draw: function () {
    canvasCtx.fillStyle = "#FFF";
    canvasCtx.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h);
  },
};

function setup() {
  canvasEl.width = canvasCtx.width = field.w;
  canvasEl.height = canvasCtx.height = field.h;
}

const leftPaddle = {
  x: gapX,
  y: 100,
  w: line.w,
  h: 200,
  draw: function () {
    canvasCtx.fillStyle = "#FFF";
    canvasCtx.fillRect(this.x, this.y, this.w, this.h);
  },
};

const rigthPaddle = {
  x: field.w - line.w - gapX,
  y: 100,
  w: line.w,
  h: 200,
  draw: function () {
    canvasCtx.fillStyle = "#FFF";
    canvasCtx.fillRect(this.x, this.y, this.w, this.h);
  },
};

const score = {
  human: 1,
  computer: 2,
  draw: function () {
    canvasCtx.font = "bold 72px Arial";
    canvasCtx.textAlign = "center";
    canvasCtx.textBaseline = "top";
    canvasCtx.fillStyle = "#01341d";
    canvasCtx.fillText(this.human, field.w / 4, 50);
    canvasCtx.fillText(this.computer, field.w / 4 + field.w / 2, 50);
  },
};

const ball = {
  x: 320,
  y: 110,
  r: 20,
  speed: 5,
  _move: function () {
    this.x += 1 * this.speed;
    this.y += 1 * this.speed;
  },
  draw: function () {
    canvasCtx.fillStyle = "#FFF";
    canvasCtx.beginPath();
    canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    canvasCtx.fill();
    this._move();
  },
};

function draw() {
  field.draw();

  line.draw();

  leftPaddle.draw();

  rigthPaddle.draw();
  score.draw();
  ball.draw();
}

setup();
draw();

window.setInterval(draw, 1000 / 60);
