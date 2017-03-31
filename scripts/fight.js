$(document).ready(function () {
  /* start page : */
  $("button").click(function () {
    $(".startPage").css("display", "none");
    $(".game").css("display", "block");
  });



  var box = $(".box"), //put box var in box
      //perso = $(".perso"), //same for perso
      ennemies = $(".ennemy"), //ennemies
      shoot = $(".shoot"), //shoot
      slash = $(".slash"); //and slash
  //yPerso = 0,
  //xPerso = parseInt(perso.css("left")); // perso position
  var vitessePerso = 10, //perso speed
      xShoot = 0, // shoot position
      vitesseShoot = 40, // shoot speed
      //BoxLength = parseInt(box.css("width")) + 60, //width box    = lenght
      //isRight = 1, //inverser le tir
      shootLimiteur = 0, //the player can't shoot twice
      slashLimiter = 0, //same for slash
      shootCooldown = 5000, //time before you can shoot again
      slashCooldown = 1000; //same for slash


  /****************End var******************************/

  shoot.css("top", 1000 + "%"); //so slash and shoot begin outside the box and
  slash.css("top", 1000 + "%"); //don't affect gameplay


  /****************End Keydow Arrows******************************/
  $(document).keydown(function (e) {
    //use arrows keys
    switch (e.which) { //characters movements

      case 69: //E = slash
        if (slashLimiter === 0) { //is slash cooldown off ?
          $('.slash').attr('src', "images/slash.png"); //first animation
          if (isRight == 1) { //is the player face right ?
            slash.css("transform", "rotate(20deg)"); // if yes the player slash right
            slash.css("top", player.y + "px");
            slash.css("left", player.x + 10 + "px");
            slashLimiter = 1;
          } else { // he is facing left
            slash.css("transform", "rotate(180deg)"); //the player slash left
            slash.css("top", player.y + "px"); //adjust the knife
            slash.css("left", player.x - 30 + "px");
            slashLimiter = 1;

          }
          setTimeout(function () {
            $('.slash').attr('src', "images/slash2.png");
          }, 150); //second animation
          setTimeout(function () {
            $('.slash').attr('src', "");
            slash.css("top", 1000 + "%");
          }, 170); //the animation diseaper 
        } else {
          return false;
        }
        break;
    }
  });
  /****************End Keydow Arrows and e (slash)******************************/


  /*******************Keydow SPACE  (shoot)**********************/

  $(document).keydown(function (e) {

    switch (e.which) {
      case 32: //space
        while (shootLimiteur == 0) {
          //Shoot start same place at perso
          shootLimiteur = 1; //on indique que display = block
          shoot.css("display", "block"); //on fait apparaitre le shoot

          shoot.css("top", player.y + "px"); //shoot starting point
          shoot.css("left", player.x + "px");
          xShoot = parseInt(shoot.css("left"));



        }
    };
  });

  /****************End Keydow space and e******************************/

  //function shootColision


  //  function multiply(position) {
  //    return position * 2
  //  }
  //  
  //  var perso.Y = multiply(45)


  setInterval(function () { //shoot deplacement
    if (isRight == 1) { //si le perso va vers la droite
      shoot.css("left", xShoot + "px");
      xShoot = xShoot + vitesseShoot;
    } else {
      shoot.css("left", xShoot + "px");
      xShoot = xShoot - vitesseShoot;
    }



    if (xShoot > (player.x + window.innerWidth) || xShoot < -40) { //faire disparaitre le shoot si dépasse la box
      shootColision(shoot); //fonction pour détruire le shoot
      //shootLimiteur = 1; //on indique que display = none
    }
  }, 90);
  //fin function shootColision

  //function shootEnnemy

  setInterval(function () {
    shootEnnemies(shoot, ennemies); //la fonction pour faire disparaitre les ennemis touchés
    slashEnnemies(slash, ennemies);
    //    if (shoot.css("display") === "none") { //permet de réinitialiser le shot limiteur et donc de tirer à nouveau
    //        shootLimiteur = 2; //on indique que display = none
    //      }
  },
              10
             );

  /***********************Set the cooldown of the shootand the slash ****************/

  setInterval(function () {
    if (shootLimiteur === 1) {
      shootLimiteur = 0;
    }
  },
              shootCooldown
             );

  setInterval(function () {
    if (slashLimiter === 1) {
      slashLimiter = 0;
    }
  },
              slashCooldown
             );

  /*********************************End of cooldown**************************/


});

function shootColision(shoot) {
  shoot.css("display", "none"); //fait disparaitre le shoot
  shoot.css("top", 1000 + "%");


}


function shootEnnemies(shoot, ennemies) { //détruire ennemis si shoot le touche

  ennemies.each(function (index) {
    if ((parseInt(shoot.css("left")) >= parseInt($(this).css("left")) && parseInt(shoot.css("left")) <= parseInt($(this).css("left")) + 20) && (parseInt(shoot.css("top")) >= parseInt($(this).css("top")) && parseInt(shoot.css("top")) <= parseInt($(this).css("top")) + 20)) {
      shootColision(shoot); //détruire shoot
      $(this).css("display", "none"); //détruire l'ennemi
      $(this).css("top", 1000 + "%");


    }
  });

}

function slashEnnemies(slash, ennemies) { //détruire ennemis si le slash le touche
  ennemies.each(function (index) {
    if ((((parseInt(slash.css("left")) >= parseInt($(this).css("left")) && parseInt(slash.css("left")) <= parseInt($(this).css("left")) + 20)) && (parseInt(slash.css("top")) >= parseInt($(this).css("top")) && parseInt(slash.css("top")) <= parseInt($(this).css("top")) + 20)) || ((((parseInt(slash.css("left")) + 20) >= parseInt($(this).css("left")) && (parseInt(slash.css("left")) + 20) <= parseInt($(this).css("left")) + 20)) && ((parseInt(slash.css("top")) + 10) >= parseInt($(this).css("top")) && (parseInt(slash.css("top")) + 10) <= parseInt($(this).css("top")) + 20))) {
      $(this).css("display", "none");
      $(this).css("top", 1000 + "%");

    }
  });




}