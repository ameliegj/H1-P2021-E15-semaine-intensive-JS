$(document).ready(function () {

      var box = $(".box"); //mettre la box dans la variable box
      var perso = $(".perso"); //pareil pour le perso
      var yPerso = 0, xPerso = 0; // positions du perso
      var vitessePerso = 20; //vitesse du perso
      var xShoot = 0;       //position shoot
      var vitesseShoot = 80; //vitesse shoot
      var shoot = $(".shoot"); //div shoot dans variable shoot
      var shootLimiteur = 0;  //empeche le joueur de tirer deux fois
      var slash = $(".slash");
      var ennemies = $(".ennemy");
      var BoxLength = parseInt(box.css("width"))+30; //width box
  
  /****************End var******************************/   
     
    shoot.css("top", 130+"%");
    slash.css("top", 130+"%");
    
  
  /****************End Keydow Arrows******************************/    
      console.log(ennemies);
      $(document).keydown(function (e) {
        //use arrows keys
        switch (e.which) {
        case 37: // left

          xPerso = xPerso - vitessePerso; //characters movements
          perso.css("left", xPerso + "px");
          break;

        case 38: // up
          yPerso = yPerso - vitessePerso;
          perso.css("top", yPerso + "px");
          break;

        case 39: // right
          xPerso = xPerso + vitessePerso;
          perso.css("left", xPerso + "px");
          break;

        case 40: // down
          yPerso = yPerso + vitessePerso;
          perso.css("top", yPerso + "px");
          break;
        
          case 69: //E
          $('.slash').attr('src', "images/slash.png");//premiere animation
            slash.css("top", yPerso + "px"); 
            slash.css("left", xPerso + 10 +"px");
            setTimeout(function(){ $('.slash').attr('src', "images/slash2.png"); }, 150); //deuxième
            setTimeout(function(){ $('.slash').attr('src', ""); }, 170);//fait disparaitre l'image
          
          break;
        }
      });
 /****************End Keydow Arrows and e (slash)******************************/
  
  
/*******************Keydow SPACE  (shoot)**********************/
  
  $(document).keydown(function (e) {

    switch (e.which) {
      case 32: //space
        while( shootLimiteur == 0){
       //Shoot start same place at perso
        shootLimiteur= 1; //on indique que display = block
        shoot.css("display", "block");//on fait apparaitre le shoot
        
        shoot.css("top", yPerso + "px"); //shoot starting point
        shoot.css("left", xPerso + "px");
        xShoot=parseInt(shoot.css("left"));
        

        
       }
    }; 
  });
  
  /****************End Keydow space and e******************************/
  
  //function shootColision

      
      setInterval(function () { //shoot deplacement
      shoot.css("left", xShoot + "px");
      xShoot = xShoot + vitesseShoot;
      
      
      
      if(xShoot > BoxLength){ //faire disparaitre le shoot si dépasse la box
        shootColision(shoot); //fonction pour détruire le shoot
        shootLimiteur = 0; //on indique que display = none
        }

      },
      90
      );
  //fin function shootColision
  
  //function shootEnnemy
  setInterval (function(){
    shootEnnemies(shoot, ennemies); //la fonction pour faire disparaitre les ennemis touchés
    //shootColision(slash, ennemies);
    
  }, 
  20
  );
  
      
  
      
  
    
  });

function shootColision(shoot){
        shoot.css("display", "none");//fait disparaitre le shoot
        shoot.css("top", 130+"%");
        
        
      }
       
  
function shootEnnemies(shoot, ennemies){
  
  ennemies.each(function( index ) {
    if((parseInt(shoot.css("left")) >= parseInt($(this).css("left")) && parseInt(shoot.css("left")) <= parseInt($(this).css("left")) + 20) && (parseInt(shoot.css("top")) >= parseInt($(this).css("top")) && parseInt(shoot.css("top")) <= parseInt($(this).css("top")) + 20))
    {
      shootColision(shoot);
      $(this).css("display", "none");
      $(this).css("top", 110+"%");
      
    }
  }); 

}

function slashEnnemies(slash, shootEnnemies){
  ennemies.each(function( index ) {
    if((parseInt(slash.css("left")) >= parseInt($(this).css("left")) && parseInt(slash.css("left")) <= parseInt($(this).css("left")) + 20) && (parseInt(slash.css("top")) >= parseInt($(this).css("top")) && parseInt(slash.css("top")) <= parseInt($(this).css("top")) + 20))
    {
      $(this).css("display", "none");
      $(this).css("top", 110+"%");
      
    }
  }); 

}
                       

    
    
    
    
  
