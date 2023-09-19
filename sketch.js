let currentMenu = 0;



//pattern menu variables
//




//random shapes menu variables
//
//an array with shapes
let shapes = ['rect', 'circle', 'triangle'];
//the amount of shapes placed in one canvas
let depth = 1000;
//background color
let backgroundColor = 120;
//the current mode of how to blend shapes
let currentBlendMode = 'BLEND';
//depth input field
//strokeWeight input field
let depthInput;
let sWInput;
//check if canvas is empty
let emptyCanvas = true;

//setup, played once at the start of opening the browser
function setup() {
  //create canvas
  createCanvas(1500, 600);
  //set background color
  background(backgroundColor);
  //set blendMode to 'BLEND'
  blendMode(BLEND);

  //button random
  button = createButton('Random');
  button.position(550, 57);
  button.size(300, 40);
  button.mousePressed(randomShapesMenuButtons);

  //button pattern
  button = createButton('Pattern');
  button.position(850, 57);
  button.size(300, 40);
  button.mousePressed(patternMenuButtons);

  randomShapesMenuButtons();
}

function randomShapesMenuButtons()
{
  background(backgroundColor);

  //create depth input field
  depthInput = createInput('1000');
  depthInput.position(98, 88);
  depthInput.size(33);

  //create stroke weight input field
  sWInput = createInput('1');
  sWInput.position(98, 144);
  sWInput.size(33);


  //blendMode buttons

  //button BLEND
  buttonBLEND = createButton('BLEND');
  buttonBLEND.position(64, 200);
  buttonBLEND.size(100);
  buttonBLEND.mousePressed(changeBLEND);

  //button DARKEST
  buttonDARKEST = createButton('DARKEST');
  buttonDARKEST.position(64, 240);
  buttonDARKEST.size(100);
  buttonDARKEST.mousePressed(changeDARKEST);

  //button LIGHTEST
  buttonLIGHTEST = createButton('LIGHTEST');
  buttonLIGHTEST.position(64, 280);
  buttonLIGHTEST.size(100);
  buttonLIGHTEST.mousePressed(changeLIGHTEST);

  //button OVERLAY
  buttonOVERLAY = createButton('OVERLAY');
  buttonOVERLAY.position(64, 320);
  buttonOVERLAY.size(100);
  buttonOVERLAY.mousePressed(changeOVERLAY);

  //button HARD_LIGHT
  buttonHARD_LIGHT = createButton('HARD_LIGHT');
  buttonHARD_LIGHT.position(64, 320);
  buttonHARD_LIGHT.size(100);
  buttonHARD_LIGHT.mousePressed(changeHARD_LIGHT);

  //button SOFT_LIGHT
  buttonSOFT_LIGHT = createButton('SOFT_LIGHT');
  buttonSOFT_LIGHT.position(64, 360);
  buttonSOFT_LIGHT.size(100);
  buttonSOFT_LIGHT.mousePressed(changeSOFT_LIGHT);

  currentMenu = 0;
}

function patternMenuButtons()
{
  background(backgroundColor);

  buttonBLEND.remove();
  buttonDARKEST.remove();
  buttonLIGHTEST.remove();
  buttonOVERLAY.remove();
  buttonHARD_LIGHT.remove();
  buttonSOFT_LIGHT.remove();
  depthInput.remove();
  sWInput.remove();

  currentMenu = 1;
}

//draw, played every frame
function draw() 
{
  //check if depth input is more than 3000. If so set it to 3000
  if(depthInput.value() > 3000)
  {
    depthInput.value('3000');
  }

  //depth variable is depth input field value
  depth = depthInput.value();

  //create menu
  menu();
}


//keyPressed, player when a key is pressed
function keyPressed() {
  //check if spacebar(32) is pressed
  if (keyCode === 32) 
  {
    //reset canvas by layering a new background on top
    background(backgroundColor);

    if(currentMenu == 0)
    {
      //generate a new canvas of art
      generateArt();
    }
    else if(currentMenu == 1)
    {
      generatePattern();
    }
  }
}

function menu()
{
  //set blendMode to 'BLEND'
  blendMode(BLEND);
  //set color as a type of grey(120)
  fill(120);
  //set outline thickness to 0
  strokeWeight(0);

  //create background of menu
  rect(0, 0, 200, 600);
  rect(200, 0, 1300, 50);
  rect(200, 560, 1300, 40);
  rect(1460, 40, 40, 520);

  if(currentMenu == 0)
  {
    randomShapesMenu();
  }
  else if(currentMenu == 1)
  {
    patternMenu();
  }
}

//randomShapesMenu, played when called in draw
function randomShapesMenu()
{
  //set color as type of grey(50)
  fill(50);
  //set text size
  textSize(20);
  //align text to the left
  textAlign(LEFT);
  //make text bold
  textStyle(BOLD);

  //create text for depth, stroke weight, blendMode
  text('generator depth', 27, 25);
  text('stroke weight', 37, 80);
  text('blend mode', 45, 135);

  //set text size
  textSize(18);
  //align text to the center
  textAlign(CENTER);

  //create text explaining how to work the program in the menu
  text('Generator depth is the amount of shapes placed per canvas. Stroke weight is the thickness of the shape outlines. Blend modes are the type of ways shapes fade into eachother.', 10, 340, 175, 300);

  //set text size
  textSize(28);
}

function patternMenu()
{
  
}

//functions setting blend modes
//reset canvas by layering a new background on top
//set blendMode
//set the variable checking if the canvas is empty to true

//BLEND
function changeBLEND()
{
  background(backgroundColor);
  currentBlendMode = 'BLEND';
  emptyCanvas = true;
}

//DARKEST
function changeDARKEST()
{
  background(backgroundColor);
  currentBlendMode = 'DARKEST';
  emptyCanvas = true;
}

//LIGHTEST
function changeLIGHTEST()
{
  background(backgroundColor);
  currentBlendMode = 'LIGHTEST';
  emptyCanvas = true;
}

//OVERLAY
function changeOVERLAY()
{
  background(backgroundColor);
  currentBlendMode = 'OVERLAY';
  emptyCanvas = true;
}

//HARD_LIGHT
function changeHARD_LIGHT()
{
  background(backgroundColor);
  currentBlendMode = 'HARD_LIGHT';
  emptyCanvas = true;
}

//SOFT_LIGHT
function changeSOFT_LIGHT()
{
  background(backgroundColor);
  currentBlendMode = 'SOFT_LIGHT';
  emptyCanvas = true;
}

//function that generates a new canvas of art
function generateArt()
{
  let R = random(165);
  let G = random(165);
  let B = random(165);
  background(R, G, B);

  //set the variable checking if canvas is empty to false
  emptyCanvas = false;

  //set stroke weight to user stroke weight input field
  strokeWeight(sWInput.value());

  //check what blendMode is active
  if(currentBlendMode == 'BLEND')
  {
    blendMode(BLEND);
  }
  else if(currentBlendMode == 'DARKEST')
  {
    blendMode(DARKEST);
  }
  else if(currentBlendMode == 'LIGHTEST')
  {
    blendMode(LIGHTEST);
  }
  else if(currentBlendMode == 'OVERLAY')
  {
    blendMode(OVERLAY);
  }
  else if(currentBlendMode == 'HARD_LIGHT')
  {
    blendMode(HARD_LIGHT);
  }
  else if(currentBlendMode == 'SOFT_LIGHT')
  {
    blendMode(SOFT_LIGHT);
  }

  //for loop creating shapes positioned randomly and depending on depth variable
  for(let i = 0; i < depth; i++)
  {

    //set random color
    fill(random(R, R+90), random(G, G+90), random(B, B+90));

    if(shapes[int(random(3))] == "rect")
    {
      rect(random(200, 1500), random(0, 600), random(0, 100));
    }
    else if(shapes[int(random(3))] == "circle")
    {
      circle(random(200, 1500), random(0, 600), random(0, 100));
    }
    else if(shapes[int(random(3))] == "triangle")
    {
      let x;
      let y;
    
      x = random(0, 1400);
      y = random(0, 600);
    
      triangle(x, y, x - random(50, 200), y - random(50, 200), x + random(50, 200), y - random(50, 200));
    }
  }
}

function generatePattern()
{
  let randomPattern = 1; //int(random(11));

  if(randomPattern == 0)
  {
    fill(0);
    strokeWeight(random(4));
    rectMode(CENTER);
  
    let lineHorizontal = int(random(2));
    let lineVertical = int(random(2));
    let space = random(40, 80);
  
    for (x=200;x<width;x+=space){
      for (y=60;y<height;y+=space){
        if(lineHorizontal == 0)
        {
          line(x,y,x+space,y);
        }
        if(lineVertical == 0)
        {
          line(x,y,x,y+space);
        }
        square(x,y,10)
        square(x+space/2,y+space/2,10)
      }
    }
  }
  else if(randomPattern == 1)
  {
    let size = int(random(20, 31));
    let widthMult = int(random(4, 11));
    let heightMult = int(random(4, 11));

    angleMode(DEGREES);
    strokeWeight(int(random(0, 4)));
    startR = random(165);
    startG = random(165);
    startB = random(165);
    background(startR + 45, startG + 45, startB + 45);
    for (x = width; x > -size * widthMult; x -= size) {
      for (y = height; y > -size * heightMult; y -= size) {
        fill(
          random(startR, startR + 90),
          random(startG, startG + 90),
          random(startB, startB + 90)
        );
        push();
        translate(x + size / 2, y + size / 2);
        rect(
          0,
          0,
          size * floor(random(1, widthMult)),
          size * floor(random(1, heightMult))
        );
        pop();
      }
    }
  }
}