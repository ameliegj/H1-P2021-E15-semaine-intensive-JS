$(document).ready(function () {

  /*********  HOME PAGE *********/
  $("button").click(function () {
    $(".startPage").css("display", "none");
    $(".game").css("display", "block");
  });

  /********* JEU **********/

  
var bottomInitial = 0; // hauteur du sol de base
var currentBottom = bottomInitial;

$("#character").css("bottom", currentBottom + "px") ;
$(".ground").css("bottom", currentBottom + "px"  );



  
  var key = []
  document.body.addEventListener("keydown", function (e) {
    key[e.keyCode] = true;
  });
  document.body.addEventListener("keyup", function (e) {
    key[e.keyCode] = false;
  });
  document.body.addEventListener("keypress", function (e) {
    key[e.keyCode] = false;
  });

  /*********   KEY FUNCTIONS **********/
  function keyPress() {
    window.requestAnimationFrame(keyPress);
    /*** KEY RIGHT ***/
    if (key[39]) {
      goRight();
    }
    /*** KEY LEFT ***/
    if (key[37]) {
      goLeft();
    }
    /*** KEY UP ***/
            for(var i=0; i<1;i++){

      if (key[38]) {
        
        jump();
          
          }
      }
  };

  keyPress();



  /*****  character position *****/













});