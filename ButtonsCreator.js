function LetterAndShape(letter,X,Y,Identity)
  {
        this.lettercon = new PIXI.Container()
        myshape = new PIXI.Graphics();
        myshape.beginFill("cx0011").drawRect(0, 0, 50, 50);  
        myshape.x = X
        myshape.y = Y
        var txt = new PIXI.Text(letter,{ fill : "white"})
        txt.anchor.set(0.5,0.5)
        txt.x = myshape.x+myshape.width/2
        txt.y =  myshape.y+myshape.height/2
        this.lettercon.addChild(myshape,txt)
        this.lettercon.interactive = true
        this.lettercon.buttonMode = true
        this.lettercon.Innertext = letter
        if(Identity==1){
          this.lettercon.on("pointerdown", function (){Main.letterListener(this.Innertext)})
        }
        shapeAll.addChild(lettercon);
}



