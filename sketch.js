//switch between random shapes art and patterns
let currentMenu = 0;
//open random shape menu once
let rsMenuPressed = false;
//open pattern menu once
let patternMenuPressed = false;

//
//random shapes menu variables
//

//an array with shapes
const shapes = ['rect', 'circle', 'triangle'];
const blendModeNames = ['BLEND', 'DARKEST', 'LIGHTEST', 'OVERLAY', 'HARD_LIGHT', 'SOFT_LIGHT'];
let buttons = [];

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
  button.mousePressed(patternMenu);

  randomShapesMenuButtons();
}

function randomShapesMenuButtons()
{
  //make sure to do once
  if(rsMenuPressed == false)
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

    //loop that creates blend mode buttons. Puts them in an array
    for(let i = 0; i < blendModeNames.length; i++)
    {
      buttons[i] = createButton(blendModeNames[i]).position(64, 200 + 20 * i).size(100).mousePressed(function() { changeBlendModes(i);});
    }
  
    //set current menu to random shapes menu
    currentMenu = 0;

    //make sure to open menu once
    rsMenuPressed = true;
    patternMenuPressed = false;
  }
}

//function that removes random shape menu for pattern menu
function patternMenu()
{
  //make sure to do once
  if(patternMenuPressed == false)
  {
    background(backgroundColor);

    //loop that removes buttons
    for(let i = 0; i < blendModeNames.length; i++)
    {
      buttons[i].remove();
    }

    //remove input fields
    depthInput.remove();
    sWInput.remove();
  
    //set current menu to pattern menu
    currentMenu = 1;

    //make sure to open menu once
    rsMenuPressed = false;
    patternMenuPressed = true;
  }
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

  //display current menu
  if(currentMenu == 0)
  {
    randomShapesMenu();
  }
  else 
  {
    patternMenu();
  }
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

//randomShapesMenu, played when called in draw
function randomShapesMenu()
{
  rectMode(CORNER);
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

//functions setting blend modes
//reset canvas by layering a new background on top
//set blendMode
//set the variable checking if the canvas is empty to true

//change blend mode function
function changeBlendModes(whatBlendMode)
{
  background(backgroundColor);

  //if 0 change to blend
  //if 1 change to darkest
  //etc
  if(whatBlendMode == 0)
  {
    currentBlendMode = 'BLEND';
  }
  else if(whatBlendMode == 1)
  {
    currentBlendMode = 'DARKEST';
  }
  else if(whatBlendMode == 2)
  {
    currentBlendMode = 'LIGHTEST';
  }
  else if(whatBlendMode == 3)
  {
    currentBlendMode = 'OVERLAY';
  }
  else if(whatBlendMode == 4)
  {
    currentBlendMode = 'HARD_LIGHT';
  }
  else if(whatBlendMode == 5)
  {
    currentBlendMode = 'SOFT_LIGHT';
  }
  
  emptyCanvas = true;
}

//function that generates a new canvas of art
function generateArt()
{
  //random color
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

    //random shape out of shapes array
    if(shapes[int(random(3))] == "rect")
    {
      //place random rect 
      rect(random(200, 1500), random(0, 600), random(0, 100));
    }
    else if(shapes[int(random(3))] == "circle")
    {
      //place random circle
      circle(random(200, 1500), random(0, 600), random(0, 100));
    }
    else if(shapes[int(random(3))] == "triangle")
    {
      //place random triangle
      let x;
      let y;
    
      x = random(0, 1400);
      y = random(0, 600);
    
      triangle(x, y, x - random(50, 200), y - random(50, 200), x + random(50, 200), y - random(50, 200));
    }
  }
}

//function that generates new pattern on canvas
function generatePattern()
{
  //decide what pattern to place
  let randomPattern = int(random(4));

  //random color
  R = random(165);
  G = random(165);
  B = random(165);

  //fill object with random color
  fill(random(R, R + 90), random(G, G + 90), random(B, B + 90));

  //set background to a random color
  background(random(R, R + 90), random(G, G + 90), random(B, B + 90));

  //set outline/stroke to a random color
  stroke(random(R, R + 10), random(G, G + 10), random(B, B + 10));

  if(randomPattern == 0)
  {
    fill(0);
    strokeWeight(random(4));
    rectMode(CENTER);
  
    let lineHorizontal = int(random(2));
    let lineVertical = int(random(2));
    let space = random(40, 80);
  
    //for loop generating a pattern
    for (x=0;x<width;x+=space){
      for (y=0;y<height;y+=space){
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

    //for loop generating a pattern
    for (x = width; x > -size * widthMult; x -= size) {
      for (y = height; y > -size * heightMult; y -= size) {
        fill(random(startR, startR + 90), random(startG, startG + 90), random(startB, startB + 90));
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
  else if(randomPattern == 2)
  {
    let size = int(random(8, 51));
    let rez = random(0.0001, 1);

    //for loop generating a pattern
    strokeWeight(random(1, 11));
    for(x=0;x<width;x+=size+0)
    {
      for (y=0;y<height;y+=size+0)
      {
        n = noise(x*rez,y*rez)-0.2;
        c = random(2);

        if (c<1)
        {
          line(x,y,x+size,y+size)
        }
        else
        {
          line(x,y+size,x+size,y)
        }
      }
    }
  }
  else
  {
    let rez = random(0.01, 0.05);
    let t = 0;
    let space = int(random(10, 21));
    let size = random(10, 21);

    //for loop generating a pattern
    for (i = 0; i < width; i += space) {
      for (j = 0; j < height; j += space) {
        var n = noise(i * rez, j * rez, t);
        stroke(n * 255, n*255, n*255, 255);
        strokeWeight(2);
        //fill(n*255,n*255,n*255,255);
        rect(i, j, size);
      }
      t += 0.0002;
    }
  }
}