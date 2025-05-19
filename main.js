function main() {
  // ............creating a stage to keep all  things ......................................................
  app.stage.removeChild(gameSelectCont)
  ExitFlag =false
  // app.stage.removeChild(GameTypeCon2)
  app.renderer.view.style.opacity = "0";
  app.renderer.view.style.transform = " scale(0.5)translate(0%,0.9%)";
  app.renderer.view.style.transformOrigin = " center center ";

  onLoadTime = setTimeout(() => {
    app.renderer.view.style.transform = " scale(1) translate(0%,0.6%)"; //  implemented transion effet
    app.renderer.view.style.transformOrigin = " center center ";
    app.renderer.view.style.transition = " 1s";
    app.renderer.view.style.opacity = "1";
  }, 100);
document.body.style.backgroundImage = "url('')";
  
  app.renderer.view.style.backgroundImage = "url("+wordimage2.src+")"//"url("+wordimage2.src+")";
  app.renderer.view.style.backgroundSize = "cover";
  //.............................................stage creation ENDED.......................................
  // ..................creating points table ...............................................................
// preload()
var animatationArr = ["sprites/Img3-removebg-preview.png","sprites/Img4-removebg-preview.png","sprites/Img5-removebg-preview.png","sprites/Img6-removebg-preview.png","sprites/Img6-removebg-preview.png","sprites/Img8-removebg-preview.png","sprites/Img9-removebg-preview.png","sprites/Img10-removebg-preview.png","sprites/Img11-removebg-preview.png","sprites/Imgg2-removebg-preview.png"]

var textures = []
  for (i=0;i<animatationArr.length;i++){
    x = (new PIXI.BaseTexture(animatationArr[i]))
    textures.push(new PIXI.Texture(x))
  }

let myanim = new PIXI.AnimatedSprite(textures)
myanim.animationSpeed = 0.05
// myanim.play() 
myanim.x =500
myanim.y =150
myanim.scale.x =1.5
myanim.scale.y =1.5
myanim.play()   
app.stage.addChild(myanim)
app.stage.addChild(shapeAll);

  var Img = Pointsbg.src;
  PointBenchhh = new PIXI.BaseTexture(Img);
  PointBenchh = new PIXI.Texture(PointBenchhh);
  PointBench = new PIXI.Sprite.from(PointBenchh);
  PointBench.anchor.set(0.5, 0.5);

  PointBench.x = 210 + PointsPosX;
  PointBench.y = 260 + PointsPosY;
  PointBench.scale.x = 0.06;
  PointBench.scale.y = 0.06;

  Pointstext = new PIXI.Text("POINTS :", { fill: "white",fontSize:"25px" });
  Pointstext.anchor.set(0.5, 0.5);
  Pointstext.x = 190 + PointsPosX;
  Pointstext.y = 270 + PointsPosY;

  PointstextVal = new PIXI.Text("0", { fill: "white",fontSize:"25px" });
  PointstextVal.anchor.set(0.5, 0.5);
  PointstextVal.x = 260 + PointsPosX;
  PointstextVal.y = 270 + PointsPosY;
  app.stage.addChild(PointBench, Pointstext, PointstextVal);
  // ................. creating table for time.............................................................
  // .................. creating delete button..............................................................
  ClearButtt = new PIXI.BaseTexture(clearbut_img);
  ClearButt = new PIXI.Texture(ClearButtt);
  ClearBut = new PIXI.Sprite.from(ClearButt);
  ClearBut.anchor.set(0.5,0.5)
  ClearBut.x = 1160;
  ClearBut.y = 450;
  ClearBut.scale.x = 0.4;
  ClearBut.scale.y = 0.4;
  ClearBut.interactive = true;
  app.stage.addChild(ClearBut);
  ClearBut.on("pointerdown", function () {
    ClearBut.scale.x = 0.3;
    ClearBut.scale.y = 0.3;     
  });

  ClearBut.on("pointerup", function () {
    ClearBut.scale.x = 0.4;
    ClearBut.scale.y = 0.4; 
    // this.deleteFun()
    Main.deleteFun()      
  });
  Exitfun(200,450)
  function Exitfun(posX,posY)
  {
    ExitBut = new PIXI.Sprite.from("image/ExitBut_img.png");
    ExitBut.x = posX;
    ExitBut.y = posY;
    ExitBut.anchor.set(0.5,0.5)
    ExitBut.scale.x = 1;
    ExitBut.scale.y = 1;
    ExitBut.interactive = true;
    app.stage.addChild(ExitBut);
    ExitBut.on("pointerdown", function () {
      ExitBut.scale.x = 0.9;
      ExitBut.scale.y = 0.9;
    });
    ExitBut.on("pointerup", function () {
      ExitFlag =true
      ExitBut.scale.x = 1;
      ExitBut.scale.y = 1;
      preload()
    });
  }
  Qntext = new PIXI.Text("2", { fill: "white" });
  Qntext.anchor.set(0.5, 0.5);
  Qntext.x = 1350 / 2;
  Qntext.y = 60;
  app.stage.addChild(Qntext);
  //....................creating function that used to create all letters for the game .....................
    this.CreateShuffledLetters = function (qntxt, ans) {
    // ......................qn text creation...............................................................
    Qntext.text = qnCount + 1 + ". " + qntxt
    console.log("QnsArr[qnCount]", Qntext.text)

    //......................................................................................................
    AnswerWord = String(ans).toUpperCase();
    ShuffleArr = AnswerWord.split("");
    //........... inserting random letters and ans letters into an array.....................................
    while (true) {
      if (ShuffleArr.length == 30) break;
      else {
        randtemp = Math.floor(Math.random() * LetterArr.length - 1);
        if (randtemp > 0) {
          ShuffleArr.push(LetterArr[randtemp]);
        }
      }
    }
    // ...............shuffling all the letters..............................................................
    for (var i = ShuffleArr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = ShuffleArr[i];
      ShuffleArr[i] = ShuffleArr[j];
      ShuffleArr[j] = temp;
    }
    //.............. creating shuffled letter shapes to see in stage ........................................
    var map = {}
    for (i = 0; i < 30; i++) {
      if (ShuffleArr[i] == " ") {
        ShuffleArr.splice(i, 1);
        randtemp = Math.floor(Math.random() * LetterArr.length - 1);
        if (randtemp > 0) {
          ShuffleArr.push(LetterArr[randtemp]);
          i--;
        }
      } else {
        map["name_" + i] = LetterAndShape(
          ShuffleArr[i],
          450 + positionX * 80,
          90 + positionY * 70,
          1
        ); // using  class that create all shapes............................................................
       console.log('hello')
        positionX += 1;
        if (positionX == 6) {
          positionX = 0;
          positionY += 1;
        }
      }
    }
    //.................. creating empty shapes to let the user to fill  .....................................
    var AnsAllshape = new PIXI.Container();
    AnsAllshape.x = shapeAll.x;
    AnsAllshape.pivot.x = shapeAll.x / 2;
    for (k = 0; k <= AnswerWord.length - 1; k++) {
      if (AnswerWord[k] == " ") {
        continue;
      } else {
        map2["shape_" + k] = LetterAndShape(
          "",
          1350 / 2 - (AnswerWord.length / 2) * 70 + k * 70,
          450,
          0
        );
        AnsShapeArr.push(map2["shape_" + k]);
      }
    }
  };
  
  //.........................................................................................................
  
  document.addEventListener('keypress', keyEventFun, false);  
  document.onkeydown = function(event) {
    var key = event.keyCode || event.charCode;
    if( key == 8 || key == 46 )
        Main.deleteFun()      
      };
this.deleteFun = function(){
  console.log("yyyyyyyyy")
  if (count > 0 && count <= AnswerWord.length) {
    UserAnsarr.pop();

    count -= 1;
    Interactiveflag = false;
    if (AnswerWord[count] == " ") {
      UserAnsarr.pop();
      count -= 1;
    }
    Main.AnswerPlace("");
  }
}
  
  this.letterListener = function(txt){
    if(count>=0&&count<=AnswerWord.length-1){
    Interactiveflag = true
   if(AnswerWord[count]==" ")
   {
    UserAnsarr.push(AnswerWord[count])
    count+=1
   }
    UserAnsarr.push(txt)
    Main.AnswerPlace(txt)
    count+=1
    }
  }

  // ..... this function will be activated when user clicks any letter and it will add text to empty space...

  this.AnswerPlace = function (text) {
    map2["shape_" + count] = LetterAndShape(
      text,
      1350 / 2 - (AnswerWord.length / 2) * 70 + count * 70,
      450,
      2
    );
    if (count == AnswerWord.length - 1) {
      UserAnsarr.forEach((element) => {
        UserAnsText = UserAnsText + String(element); 
      });

      //..................to verify if user ans and inbuilt ans same.........................................

      if (UserAnsText == AnswerWord) {
        pointval += 1;
        // PointText(pointval); //increments pointer text value 
        PointstextVal.text = "" + pointval;


        if(Gametypeval == 2){
          setTimeout(() => {
            ResetAll()
          }, 500);
        }else{
          setTimeout(() => {
            showWin()

          }, 100);
        }

      } else {
        UserAnsText = "";
      }
    }
  };

  winpopupContainer = new PIXI.Container()
  winpopupContainer.visible = false
  win_Image = "sprite Images/Images/win_Image.jpg"
   winImage11 = new PIXI.BaseTexture(win_Image);
   winImage1 = new PIXI.Texture( winImage11);
   winImage = new PIXI.Sprite.from( winImage1);
   winImage.anchor.set(0.5,0.5)
   winImage.x = app.screen.width / 2;
   winImage.y = app.screen.height / 2-50;
   winImage.scale.x = 0.3
   winImage.scale.y = 0.3;
   winImage.interactive = true;
   winpopupContainer.addChild(winImage);
   app.stage.addChild(winpopupContainer);

  function showWin(){
    winpopupContainer.visible =  true
    myanim.stop()   

    WinTime = setTimeout(() => {
      HideWin();
    }, 1000);
  }
  function HideWin(){
    winpopupContainer.visible =  false
    myanim.play()   
    resetTime = setTimeout(() => {
      ResetAll();
    }, 500);
  }
  // ...................to call next qn and reset all the value at initial state............................
  function ResetAll() {
    qnCount++;
    ShuffleArr = [];
    // app.stage.removeChild(Qntext);
    shapeAll.children = [];
    UserAnsText = "";
    UserAnsarr = [];
    positionX = 0;
    positionY = 0;
    timeCount = 16;
    count = 0;
    // QnsArr.lenth-1
    if(qnCount <= QnsArr.length-1){
      Main.CreateShuffledLetters(QnsArr[qnCount], AnsArr[qnCount]);
    }
    else if(pointval>=QnsArr.length-1) {
      showCertificate()
    }
    else{
      preload()
    }
  }


  function showCertificate(){
    app.stage.removeChildren()
    CertificateImg = new PIXI.Sprite.from("image/Certificate.jpg")
    CertificateImg.visible = true
    CertificateImg.anchor.set(0.5,0.5)
    CertificateImg.x = 650
    CertificateImg.y = 300
    CertificateImg.scale.x =1.4 
    CertificateImg.scale.y =1.4 
    app.stage.addChild(CertificateImg)

  Exitfun(1130,50)

    LevelEnd = new PIXI.Text(' Level Completed!!! ', { fill: "red",fontSize:"25px",fontFamily:"BEBAS",fontStyle:"bold" })
    LevelEnd.x = 550
    LevelEnd.y = 555

    app.stage.addChild(LevelEnd)

  }
  
  if(Gametypeval == 2)
  {
      timeBench = new PIXI.Sprite.from(PointBenchh);
      timeBench.anchor.set(0.5, 0.5);
      timeBench.x = 200 + TimePosX;
      timeBench.y = 105 + TimePosY;
      timeBench.scale.x = 0.06;
      timeBench.scale.y = 0.06;
      
      Timetext = new PIXI.Text("YOUR TIME", { fill: "white",fontSize:"25px" });
      Timetext.anchor.set(0.5, 0.5);
      Timetext.x = 193 + TimePosX;
      Timetext.y = 100+ TimePosY;
      
      TimetextVal = new PIXI.Text("0", { fill: "white",fontSize:"25px" });
      TimetextVal.anchor.set(0.5, 0.5);
      TimetextVal.x = 193 + TimePosX;
      TimetextVal.y = 130 + TimePosY;
      app.stage.addChild(timeBench, Timetext, TimetextVal);
        //...............Interval to create time duration..........................................................
       timerInterval =  setInterval(() => {
          timeCount -= 1;
          timeCount1 = String(timeCount).leftJustify(2, "0");
          TimetextVal.text = "00:00:" + timeCount1;
          if (timeCount == 0) {
            timerTimeout = setTimeout(() => {
              ResetAll();
            }, 900);
          }
        }, 1000);  
  }

// if(gameT)
  Main = this;
  Main.CreateShuffledLetters(QnsArr[qnCount], AnsArr[qnCount]);
}

//...........................................................................................................

