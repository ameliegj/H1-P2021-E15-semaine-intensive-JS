/*function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    update(dt);
    render();

    lastTime = now;
    requestAnimFrame(main);
};*/




(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 21000,
    height = 600,
    player = {
      x: 10,
      y: height - 5,
      width: 48,
      height: 48,
      speed: 4,
      velX: 0,
      velY: 0,
      jumping: false
    },
    keys = [],
    friction = 0.8,
    gravity = 0.3;

canvas.width = width;
canvas.height = height;

function update() {
  // check keys
  if (keys[38]) {
    // up arrow
    if (!player.jumping) {
      player.jumping = true;
      player.velY = -player.speed * 2;
    }
  }
  if (keys[39]) {
    /* right arrow*/
    goRight();
  }
  if (keys[37]) {
    // left arrow
    goLeft();
  }

  player.velX *= friction;

  player.velY += gravity;

  player.x += player.velX;
  player.y += player.velY;

  if (player.x >= width - player.width) {
    player.x = width - player.width;
  } else if (player.x <= 0) {
    player.x = 0;
  }

  if (player.y >= height - player.height) {
    player.y = height - player.height;
    player.jumping = false;
  }

  ctx.clearRect(0, 0, width, height);


  /** aspects des blocs **/

  ctx.fillStyle = "green";
  ctx.beginPath();

  for (var ii = 0; ii < boxes.length; ii++) {
    ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
  }

  ctx.fill();

  /** aspect perso **/

  ctx.fillStyle = "green";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  requestAnimationFrame(update);
}

document.body.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});


window.addEventListener("load", function () {
  update();
});


function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;
 
    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {         // figures out on which side we are colliding (top, bottom, left, or right)         var oX = hWidths - Math.abs(vX),             oY = hHeights - Math.abs(vY);         if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}