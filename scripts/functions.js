// position displayed level
var scroll_x = 0;
// scroll position at the beginning of the game loop
var scroll_x_start = 0;
// 5 free lines on top, 13 lines of level content




function goRight() {
    if (player.velX < player.speed) {
      player.velX++;
    }
  
}

function goLeft() {
    if (player.velX > -player.speed) {
      player.velX--;
    }
  
}
/****  Platformes and obstacles ****/
var boxes = []
 
// dimensions
boxes.push({
    x: 0,
    y: 0,
    width: 10,
    height: height
});
boxes.push({
    x: 0,
    y: height - 2,
    width: width,
    height: 50
});
boxes.push({
    x: width - 10,
    y: 0,
    width: 50,
    height: height
});