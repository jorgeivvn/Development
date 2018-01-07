let canvas;
let canvasContext;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 10;
let ballSpeedY = 5;

let paddle1Y = 250;
let paddleHeight = 100;

function calculateMousePos(evt) {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;
  let mouseX = evt.clientX - rect.left - root.scrollLeft;
  let mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
          x:mouseX,
          y:mouseY
  };
};


window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  let framesPerSecond = 30;
  setInterval(function() {
    moveEverything();
    drawEverything();
  }, 1000/framesPerSecond);

  canvas.addEventListener('mousemove',
          function(evt) {
            let mousePos = calculateMousePos(evt);
            paddle1Y = mousePos.y - (paddleHeight/2);
          });
  };

  function ballReset() {
    ballSpeedX = -ballSpeedX;
    ballX = canvas.width/2;
    ballY = canvas.height/2;
  };

function moveEverything() {
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;
  if(ballX < 0) {
    if(ballY > paddle1Y &&
      ballY < paddle1Y+paddleHeight) {
      ballSpeedX = -ballSpeedX;
    } else {
          ballReset();
    }
  }
  if(ballX > canvas.width) {
    ballSpeedX = -ballSpeedX;
  }
  if(ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }
  if(ballY > canvas.height) {
    ballSpeedY = -ballSpeedY;
  }
};

function drawEverything() {
  //next line blanks out the screen with black
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  //this is left player paddle
  colorRect(5, paddle1Y, 10, paddleHeight, 'white');
  //this draws the ball
  colorCircle(ballX, ballY, 10, 'red');
};

function colorCircle(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
  canvasContext.fill();
};

function colorRect(leftX,topY, width,height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX,topY, width,height);
};
