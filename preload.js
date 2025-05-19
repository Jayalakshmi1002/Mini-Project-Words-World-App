

  app.stage.pivot.x = app.screen.width / 2;
  app.stage.pivot.y = app.screen.height / 2;
  app.stage.x = app.screen.width / 2;
  app.stage.y = app.screen.height / 2;
  var Img = "image/PlayBut.png";
  Playbutton1 = new PIXI.BaseTexture("sprite Images/Images/win_Image.jpg");
  Playbutton11 = new PIXI.Texture(Playbutton1);
  Playbutton = new PIXI.Sprite.from("image/PlayBut.png");
  Playbutton.anchor.set(0.5, 0.5);
  Playbutton.x = 670
  Playbutton.y =200 ;
  Playbutton.scale.x = 0.5;
  Playbutton.scale.y = 0.5;
  Playbutton.interactive = true
  Playbutton.on("pointerdown",function(){
    Playbutton.scale.x = 0.4;
    Playbutton.scale.y = 0.4;
  })
  Playbutton.on("pointerup",function(){
    Playbutton.scale.x = 0.5;
    Playbutton.scale.y = 0.5;
    setTimeout(() => {
      bgMusic.play();
      bgMusic.loop = true
// document.onclick = function() {
// }
    preload()
      
    }, 10);
  })
  app.stage.addChild(Playbutton)
function preload()
{  
document.body.style.backgroundImage = "url('image/newpreload.png')";

  app.stage.removeChildren()
  if(ExitFlag ==true){
    document.removeEventListener("keypress",keyEventFun);

  }
  
  gameSelectCont = new PIXI.Container()

  gameSelectShape = new PIXI.Graphics();
  gameSelectShape.beginFill("cx0011").drawRect(170,85 , 1000, 400);  
  gameSelectShape.alpha = 0.5
  gameSelectCont.addChild(gameSelectShape)

  app.renderer.view.style.backgroundImage=""
  qnCount = 0
  shapeAll.children = [];
  UserAnsText = "";
  UserAnsarr = [];
  map2 = {}
  map = {}
  positionX = 0;
  positionY = 0;
  timeCount = 16;
  count = 0;
  clearInterval(timerInterval)
  clearTimeout(timerTimeout)
  clearTimeout(resetTime)
  clearTimeout(onLoadTime)


  var Img = GTypeBg.src;
  gametypebg1 = new PIXI.BaseTexture(Img);
  gametypebg = new PIXI.Texture(gametypebg1);

  gametype1 = new PIXI.Sprite.from(gametypebg);
  gametype1.anchor.set(0.5, 0.5);
  gametype1.x = (app.stage.width/2)+450 ;
  gametype1.y = 100 +200;
  gametype1.scale.x = 0.3;
  gametype1.scale.y = 0.3;
  FreeTxt = new PIXI.Text("Free Mode", { fill: "white" ,fontSize:"30px" });
  FreeTxt.anchor.set(0.5, 0.5);
  FreeTxt.x = gametype1.x;
  FreeTxt.y = gametype1.y;
  GameTypeCon1 =  new PIXI.Container()
  GameTypeCon1.addChild(gametype1,FreeTxt)
  GameTypeCon1.pivot.x = GameTypeCon1.width
  GameTypeCon1.pivot.y = GameTypeCon1.height
  GameTypeCon1.x = 300+25
  GameTypeCon1.y = 350


  gametype2 = new PIXI.Sprite.from(gametypebg);
  gametype2.anchor.set(0.5, 0.5);
  gametype2.x = (app.stage.width/2)+850 ;
  gametype2.y = 100+200 ;
  gametype2.scale.x = 0.3;
  gametype2.scale.y = 0.3;
  TurboTxt = new PIXI.Text("Turbo Mode", { fill: "white", fontSize:"30px" });
  TurboTxt.anchor.set(0.5, 0.5);
  TurboTxt.x = gametype2.x;
  TurboTxt.y = gametype2.y;
  GameTypeCon2 =  new PIXI.Container()


  GameTypeCon2.addChild(gametype2,TurboTxt)
  GameTypeCon2.pivot.x = GameTypeCon2.width*2.2
  GameTypeCon2.pivot.y = GameTypeCon2.height+30
  GameTypeCon2.x = 820+25
  GameTypeCon2.y = 380

  gameSelectCont.addChild(GameTypeCon1,GameTypeCon2)

  app.stage.addChild(gameSelectCont)

  GameTypeCon1.interactive = true
  GameTypeCon1.on("pointerdown",function(){

    GameTypeCon1.scale.x = 0.9
    GameTypeCon1.scale.y = 0.9


  })



  GameTypeCon1.on("pointerup",function(){
    Gametypeval = 1
    GameTypeCon1.scale.x = 1
    GameTypeCon1.scale.y = 1
          setTimeout(() => {
            main();
          }, 3);
  })


  GameTypeCon2.interactive = true

  GameTypeCon2.on("pointerdown",function(){

    GameTypeCon2.scale.x = 0.9
    GameTypeCon2.scale.y = 0.9


  })

  GameTypeCon2.on("pointerup",function(){
    Gametypeval = 2
    GameTypeCon2.scale.x = 1
    GameTypeCon2.scale.y = 1

         setTimeout(() => {//..............code to justify the letter of time ( helped to keed timetext as 2 digit)...................
            main();
          }, 1);
  })

}