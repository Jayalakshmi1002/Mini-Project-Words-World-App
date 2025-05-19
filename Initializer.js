var timestart = 1;
var LetterArr = new Array();
var LettercontainerArr = [];
var randtemp;
var shuffeledArr = [];
var positionX = 0;
var Qntext;
var positionY = 0;
var AnswerWord;
var qnCount = 0
var timeCount =16
var ExitFlag =false
var timerTimeout
var resetTime
var onLoadTime
var timerInterval
var TimePosX =45
var TimePosY =100
var bgMusic = new Audio("sounds/bgsnd.mp3");

var pointval =0;
var Obj = new Object()
var ClickedLetter = "";
var ShapesContainerArr = [];
var ShuffleArr= [];
var shapeAll = new PIXI.Graphics();
shapeAll.beginFill(0, 0.5).drawRect(425, 68, 500, 370);
shapeAll.y = 60;
var myshape1
var AnsShapeArr = []
var map2={}
var Interactiveflag =  true
var count = 0
var UserAnsarr = []
var UserAnsText = ""
var Main;
var PointsPosX=925
var PointsPosY=-50
var ClearButtt,ClearButt,ClearBut,PointBench,PointBenchh,PointBenchhh;
var Gametypeval = 0
  function keyEventFun(event){
    var KeyText = event.key;
    Main.letterListener(KeyText.toUpperCase())
    if (KeyText === "Backspace")
    console.log("KeyText",KeyText)
  }
//..............code to justify the letter of time ( helped to keed timetext as 2 digit)....................
String.prototype.leftJustify = function (length, char) {
    var fill = [];
    while (fill.length + this.length < length) {
      fill[fill.length] = char;
    }
    return fill.join("") + this;
  };


// var PreloadArr = ["image/wordimg2.png","image/wordimg.png"]
LetterArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var  app = new PIXI.Application({
    width: 1350,
    height: 600 * 1.25,
    transparent: true,
  });
  document.body.appendChild(app.view);




var AnsArr=[
    "Sun microsystem",
    "Kernel",
    "Linus Torvalds",
    "System calls",
    "Linux",
    "Child shell",
    "Login prompt",
    "SA",
    "Linux",
    "Linus",
    "Shell script",
    "Linux",
    "Minix",
    "ANSI",
    "Path name",
    "Shell",
    "Dead space",
    "Dual",
    "Input mode",
    "Pipe",
    "BAH shell",
    "Verification",
    "Beep sound",
    "Variables",
    "One line",
    "Clear",
    "Intel",
    "Tree structure",
    "Noclobber",
    "Unmount",
    "Group users",
    "A user",
    "Linux",
    "Linux",
    "Unix",
    "Editors",
    "Home",
    "Suitable linux",
    "Linus Torvalds",
    "Bar graphis",
    "Mounting",
    "Register",
    "Structure variable",
    "Repeat until statement",
    "Dennis Ritchie",
    "Bubble sort",
    "Binary Tree",
    "Cubic probing",
    "Stack",
    "Graph"
]
var QnsArr = [

    "which of the following introduced the flavor of unix named solaris ?",
    "what is the core of the linux operating system?",
    "who is the founder of linux kernel?",
    "what approach does an application use to communicate with the kernel?",
    "which has excellent support for older hardware?",
    "what is the other name of new shell?",
    "where do the users arrive after entering exit in linux system?",
    "who can change the password of any user?",
    "which system provides excellent security features?",
    "who was very much attracted by elegance and effectiveness of UNIX?",
    "which text file contains linux  commands?",
    "which operating system was developed by the contribution of many people throughout the world?",
    "which version of UNIX was handled by the students of the university of Helsinki?",
    "which standard of unix was followed by linux?",
    "which is called as full name of directory?",
    "which program combines linux commands to solve the given problems?",
    "what is the space between end of the line and end of the screen is called as?",
    "which vi editor,makes the keyboard to play a role?",
    "In what mode of editing ,the keyboard behaves as a normal typewriter with the exception?",
    "which command takes data from one command to another command?",
    "which is linus default shell?",
    "what is the process does not allow any unauthorized person to access any of ourdirectories or file?",
    "which indicate you to find the mode you are working?",
    "who are placeholders to store values?",
    "what type of editing is possible by Ed editor?",
    "which command clears the screen?",
    "what based of PC's ,linux was specifically designed?",
    "where did the file system can be used to unambiguously identified and referenced?",
    "which feature is used to prevent overwriting an existing file the redirection operation?",
    "when we want replace a file system we have to present file system?",
    "In Linux ,if all the members of the group share their files,they are called as ",
    "who can change his/her password with the password command?",
    "which shell provides many of the tools found in C language?",
    "which was widely distributed over the Internet?",
    "which was the operating system was created mainly by efforts of Ken Thomson?",
    "what is mainly used for creating,deleteing and editing the files?",
    "which directory is assigned to the user when he/she enters into the system for the first time,by the System Administrator(SA)?",
    "which version can run on any machine available now?",
    "who developed an effective PC version of Unix for Minix users?",
    "which of the following is not considered on of the main categories of computer graphics?",
    "How to connect a file system on a storage device and our main directory tree by?",
    "which of the storage class may help in faster execution?",
    "when accessing a structure ,the identifier to the left of the operator is the name ?",
    "which of the following is not a valid data type in C language?",
    "who developed C language?",
    "which of the following sorting algorithm is the slowest?",
    "which of the following is not a linear data structure?",
    "which of the following is not an open addressing technique to resolve collision?",
    "which of the following data structure is more appropriate for implementing quick sort iteratively?",
    "which of the following  data structure is used to represent a relationship between pairs,where relationship is not hierarchical?"
]


