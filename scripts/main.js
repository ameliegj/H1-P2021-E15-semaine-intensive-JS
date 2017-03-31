
(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 21619,
    height = 600,
    player = {
      x: 20,
      y: 20,
      width: 15,
      height: 48,
      speed: 4,
      velX: 0,
      velY: 0,
      jumping: false
    },
    keys = [],
    friction = 0.8,
    gravity = 0.4,
    deplacement = 0,
    middle = window.innerWidth/2,
    boxes = [],
    //fight :
    slashLimiter = 0,

    isRight =1;

/* gifs perso : */
/* index page responsive (for height only) 
 make the header smaller to let enough place for the game on the page */
if (window.innerHeight < 700) {
  document.getElementById("logo").style.height = "40px";
  document.getElementById("logo").style.transform = "translateY(17px)";
}
/* end responsive */


var  walkRight = new Image();   // Crée un nouvel objet Image

//var WRTimeVar = 0;
//function Time() {
//  if (WRTimeVar<3) {
//    WRTimeVar++;
//  } else {
//    WRTimeVar = 0;
//  }
//  console.log(WRTimeVar);
//
//}

walkRight.src = 'images/walkRight.gif';

// Définit le chemin vers sa source


/* image slash */
var slashRight = new Image();
slashRight.src = 'images/slashRight.png';
var slashLeft = new Image();
slashRight.src = 'images/slashLeft.png';

/** generate boxes : **/
createBoxes();

canvas.width = width;
canvas.height = height;


/**************************************/


/* main function */
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
/* player movement coefficient*/
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


  /** blocs color : **/

  ctx.fillStyle = "green"; //rgba(0,0,0,0)
  ctx.beginPath();

  /** collisions management : */

  player.grounded = false;
  for (var i = 0; i < boxes.length; i++) {
    ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);

    var dir = colCheck(player, boxes[i]);

    if (dir === "l" || dir === "r") {
      player.velX = 0;
      player.jumping = false;
    } else if (dir === "b") {
      player.grounded = true;
      player.jumping = false;
    } else if (dir === "t") {
      player.velY *= -1;
    }
  }

  if (player.grounded) {
    player.velY = 0;
  }


  //walkRight.onload = function(){
  // instructions appelant drawImage ici
  ctx.drawImage(walkRight, (player.x-(player.height/2)), (player.y-(player.height/2)));


  //}

  // ANIMATION DU PERSONNAGE :
  //setInterval("Time()", 1000);

  //switch(WRTimeVar) {
  //  case 0:
  //    walkRight.src = 'images/walkRight.gif';
  //    break;
  //  case 1:
  //    walkRight.src = 'images/walkRight.gif';
  //    break;
  //  case 2:
  //    walkRight.src = 'images/walkRight.gif';
  //    break;
  //  case 3:
  //    walkRight.src = 'images/walkRight.gif';
  //    break;
  //  default:
  //    walkRight.src = 'images/walkRight.gif';
  //}


  requestAnimationFrame(update);
}

/* détection des touches : */

document.body.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});


window.addEventListener("load", function () {
  update();
});


