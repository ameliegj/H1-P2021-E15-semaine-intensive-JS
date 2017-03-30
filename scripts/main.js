//$(document).ready(function () {

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
    gravity = 0.3,
    deplacement = 0,
    middle = window.innerWidth/2,
    boxes = [];

/** generate boxes : **/
createBoxes();

  canvas.width = width;
  canvas.height = height;


  /**************************************/



  
/* sert à */
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


    /** blocs color : **/

    ctx.fillStyle = "red";
    ctx.beginPath();


    /** gestion des collisions : */
    
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


    /** aspect perso **/
    ctx.fill();
    ctx.fillStyle = "green";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    requestAnimationFrame(update);
  }



/** détection des touches **/
  document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
  });

  document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
  });


  window.addEventListener("load", function () {
    update();
  });



//});