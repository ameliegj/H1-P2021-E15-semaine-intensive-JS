function goRight() {
  console.log("|->| key pressed");
  $("#gameBackground").css("left", "-=2px");
}


function goLeft() {
  console.log("|<-| key pressed");
  $("#gameBackground").css("left", "+=2px");
}

/*******************/


function jumpAnime() {
  $("#character").animate({
    bottom: "200px",
  }, 10, "linear", function() {
      console.log(currentPosY);

    $("#character").animate({
      bottom: "0px",
    }, 10, "swing");
  })
  console.log(currentPosY);
}


/*******************/
var bottomInitial = 0; // hauteur du sol de base

function jump() {
//boucle for
 // console.log("|^| key pressed");
  var currentBottom = bottomInitial;

  currentPosY = parseInt($("#character").css("bottom"));
//  console.log(currentBottom);


  if (currentPosY == currentBottom) {
   // console.log("jump !");
    jumpAnime();
  }

  
  
  
}


/*
function jumpAnim() {
  var bottomTemp = currentBottom;
  $("#character").animate({
    bottom: "100px",
  }, 200, "linear", function () {
    $("#character").animate({
      bottom: currentBottom,
    }, 200, "linear");

  });

*/


/*
    $("#character").css("bottom", "+=100px");

    $("#character").css("bottom", bottom);
  */