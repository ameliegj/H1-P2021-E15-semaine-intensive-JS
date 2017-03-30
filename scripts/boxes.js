/******* PLATFORM AND OBSTACLES ********/



// dimensions
function createBoxes(){

  boxes.push({
    x: 0,
    y: 580,
    width: width,
    height: 20
  });

  /** LEVEL ONE **/

  // castle floor : //
  boxes.push({
    x: 0,
    y: 440,
    width: 610,
    height: 160
  });

  boxes.push({
    x: 610,
    y: 470,
    width: 65,
    height: 140
  });

  // ground : 
  boxes.push({
    x: 670,
    y: 495,
    width: 6000,
    height: 105
  });

  //platforms :
  //1
  boxes.push({
    x: 890,
    y: 428,
    width: 123,
    height: 5
  });

  //2
  boxes.push({
    x: 1013,
    y: 370,
    width: 123,
    height: 5
  });

  //3
  boxes.push({
    x: 1433,
    y: 433,
    width: 62,
    height: 5
  });

  //4
  boxes.push({
    x: 1525,
    y: 375,
    width: 62,
    height: 5
  });

  //5
  boxes.push({
    x: 1690,
    y: 457,
    width: 100,
    height: 100
  });

  //6
  boxes.push({
    x: 1752,
    y: 418,
    width: 65,
    height: 100
  });

  //7
  boxes.push({
    x: 1890,
    y: 368,
    width: 115,
    height: 5
  });

  //8
  boxes.push({
    x: 2138,
    y: 433,
    width: 68,
    height: 5
  });

  //9
  boxes.push({
    x: 2300,
    y: 433,
    width: 68,
    height: 5
  });

  //10
  boxes.push({
    x: 2448,
    y: 368,
    width: 65,
    height: 5
  });

  //11
  boxes.push({
    x: 2585,
    y: 314,
    width: 70,
    height: 5
  });

  //12 obstacle
  boxes.push({
    x: 2679,
    y: 338,
    width: 62,
    height: 200
  });

  //13
  boxes.push({
    x: 2735,
    y: 372,
    width: 68,
    height: 5
  });
  
/* beginning of the ennemy zone */
  
  //14
  boxes.push({
    x: 3420,
    y: 431,
    width: 98,
    height: 5
  });
  
  //15
  boxes.push({
    x: 3825,
    y: 424,
    width: 95,
    height: 5
  });
  
  //16
  boxes.push({
    x: 4040,
    y: 422,
    width: 245,
    height: 5
  });
  
  //17
  boxes.push({
    x: 4588,
    y: 417,
    width: 98,
    height: 5
  });
  
  //18 obstacle
  boxes.push({
    x: 4872,
    y: 470,
    width: 100,
    height: 50
  });
  
  //19
  boxes.push({
    x: 5235,
    y: 421,
    width: 98,
    height: 5
  });
  
  
   //20
  boxes.push({
    x: 5388,
    y: 354,
    width: 98,
    height: 5
  });
  
  //21
  boxes.push({
    x: 5522,
    y: 421,
    width: 98,
    height: 5
  });
  
  //22 obstacle
  boxes.push({
    x: 6050,
    y: 458,
    width: 100,
    height: 50
  });

}

/***** end platform and obstacles ****/
