$(document).ready(function () {

  /*********  HOME PAGE *********/
  $("button").click(function () {
    $(".startPage").css("display", "none");
    $(".game").css("display", "block");
  });

  /********* JEU **********/

  /*
  var currentBackgroundPos = $(".extendedGameZone").css("left");  //background current position


  var background = {
    goingLeft: false,
    goingRight: false,
    leftSpeed: 0,
    rightSpeed: 0,
    maxSpeed: 5
  };

  var $background = $('#gameBackground');


  (function movement() {
    if ($background.goingLeft) {
      background.lspeed = Math.min(background.lspeed *1.1 || 1, background.maxSpeed);
    } else {
      background.lspeed = Math.max(background.lspeed - 0.5, 0);
    }
    if (background.goingRight) {
      background.rspeed = Math.min(background.rspeed *1.1 || 1, background.maxSpeed);
    } else {
      background.rspeed = Math.max(background.rspeed - 0.5, 0);
    }
    background.position = background.position + (background.rspeed - background.lspeed);
    $background.css('left', background.position);
    requestAnimationFrame(movement);
  }());

  $(document).keydown(function(e){
    switch(e.which){
      case 37://left
        background.goingLeft= true;                    
        break;
      case 39://right
        background.goingRight= true;  
      default: return;	
        e.preventDefault();//not sure if needed
    }
  }).keyup(function(e){
    switch(e.which){
      case 37://left
        background.goingLeft= false;                    
        break;
      case 39://right
        background.goingRight= false;  
      default: return;	
        e.preventDefault();//not sure if needed
    }
  });



  */
  /*


  var fps = 15;
  function draw() {
    setTimeout(function() {
      requestAnimationFrame(draw);
      // Drawing code goes here
    }, 1000 / fps);
  }



  $(document).keydown(function(e) {
    switch (e.which) {
      case 37:
        $('#gameBackground').stop().animate({
          left: '+=100',
          easing: 'linear',
        }); //left arrow key
        break;

      case 39:
        $('#gameBackground').stop().animate({
          left: '-=100',
          easing: 'linear',
        }); //right arrow key
        break;
    }
  })



  /*

  $(function () {
   // while (($(".extendedGameZone").css("left")) > "-5px") {
      console.log("ca marche");
      $(document).on('keydown keyup keypress', function (event) {
        switch (event.keyCode) {
        case 39: // if the |->| key is pressed
          console.log("|->| key pressed");
          $("#gameBackground").css("left", "-=10px");
          break;

        }
      });
   // }


    //while ( ($(".extendedGameZone").css("left")) > ($(".extendedGameZone").css("left", "0px")) ) {
      $(document).on('keydown keyup keypress', function (event) {
        switch (event.keyCode) {
          case 37: // if the |<-| key is pressed
            console.log("|<-| key pressed");
            $("#gameBackground").css("left", "+=10px");
          break;
          default:
        }
      });
   // }

  });

*/
  /*************************************/
  /*

  //Variables
  var screenWidth = $(window).width();//Screen width
  var screenHeight = $(window).height();//Screen height
  var gameBgWidth = $("#gameBackground").width();//Ship width
  var y = 0;//Background y position
  var currentGameBgPos;//ship current position

  var gameBg = {
    goingLeft: false,
    goingRight: false,
    lspeed: 0,
    rspeed: 0,
    maxSpeed: 5
  };
  var $gameBg = $('#gameBackground');

  setGameBgPosition(/* paramètres de la fonction);


  //Game background starting position
  function setGameBgPosition(posX, posY) {
    $("#gameBackground").css("left", posX);
    $("#gameBackground").css("top", posY);
    currentGameBgPos = posX;
    gameBg.position = posX;
  }

  function gameBgLoop() {

    if (gameBg.goingLeft) {
      gameBg.lspeed = Math.min(gameBg.lspeed *1.1 || 1, gameBg.maxSpeed);
    } else {
      gameBg.lspeed = Math.max(gameBg.lspeed - 1, 0);
    }
    if (gameBg.goingRight) {
      gameBg.rspeed = Math.min(gameBg.rspeed *1.1 || 1, gameBg.maxSpeed);
    } else {
      gameBg.rspeed = Math.max(gameBg.rspeed - 1, 0);
    }
    gameBg.position = gameBg.position + (gameBg.rspeed - gameBg.lspeed);
    $gameBg.css('left', gameBg.position);

    requestAnimationFrame(gameBgLoop);

  };



  //Move background
  $(document).keydown(function(e){
    switch(e.which){
      case 37://left
        gameBg.goingLeft= true; 
        console.log("|<-| key pressed");
        break;
      case 39://right
        gameBg.goingRight= true; 
        console.log("|->| key pressed");
        break;
      default: return;	
        e.preventDefault();//not sure if needed
    }
  }).keyup(function(e){
    switch(e.which){
      case 37://left
        gameBg.goingLeft= false;                    
        break;
      case 39://right
        gameBg.goingRight= false; 
        break;
      default: return;	
        e.preventDefault();//not sure if needed
    }
  });*/
  var fps = 60;
  function draw() {
    setTimeout(function() {
      requestAnimationFrame(keyPress);
      // Drawing code goes here
    }, 1000 / fps);
  }

  var touches = []
  document.body.addEventListener("keydown", function(e){
    touches[e.keyCode] = true;
  });
  document.body.addEventListener("keyup", function(e){
    touches[e.keyCode] = false;
  });


  function keyPress(){
    window.requestAnimationFrame(keyPress);

    if(touches[39]){
      console.log("|->| key pressed");
      $("#gameBackground").css("left", "-=2px");
    }
    if(touches[37]){
      console.log("|<-| key pressed");
      $("#gameBackground").css("left", "+=2px");
    }
    if(touches[38]){
      console.log("|^| key pressed");
      
      /**  insérer ici la fonction saut **/
      $(".character").css("bottom", "+=10px");
      setTimeout(function(){ 
        $(".character").css("bottom", "-=10px");
      }, 200);
      
    }

  }
  keyPress();









});