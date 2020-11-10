//gui params
var firstName = "the first name";
var secondName = "the second name";

//gui
var visible = true;
var gui;
var myText;

var rectangle;
var dragCompleted = false;


function setup() {
  createCanvas(windowWidth,windowHeight)

  gui = createGui();
  gui.addGlobals('firstName', 'secondName');

  rectangle = new Rect(width/3, height/2);
  myText = round(random(0,100));
}

function draw() {
  background("pink");
  push();
  rectMode(CORNER);
  noStroke();
  fill("tomato");
  rect(width/2,0,width/2,height);
  pop();

  push();
  rectMode(CENTER);
  rectangle.display();
  pop();

  push();
  fill(255);
  textFont("Crimson Pro");
  textSize(40);

  text("The Love Calculator",20, height/2 -20);

  textSize(20);
  text("Write in the spaces above the names of the lovers",20, (height/2) +20);
  text("Drag the reptangle in the red area and release",20, (height/2) +45);
  text("Than refresh to try with an other couple",20, (height/2) +120);
  pop();

  if(dragCompleted == true) {
    rectangle.printResult();
    noLoop();
  }
}

//funzioni del mouse: dragged e relaesed

function mouseDragged() {
  rectangle.dragged();
}

function mouseReleased() {
  rectangle.released();
}

//calcolo compatibilità

//classe per il rettangolo
class Rect {
  constructor (temp_x, temp_y) {
    this.x = temp_x;
    this.y = temp_y;
    this.height = 50;
    this.color = 255;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, 100, this.height);

  }

  dragged() {
    if(mouseX>width/4) {
    this.x = mouseX;
    }
    this.y = mouseY;
    this.color = 200;
  }

  released() {
    if(this.x>width/2) {
      noStroke();
      this.color = "tomato";
      dragCompleted = true;
      this.height = 0;
    } else {this.color = 255;}
  }

// funzione per il risultato
  printResult() {
    push();
    fill(255);
    textSize(30);
    textFont("Crimson Pro");

    textAlign(CENTER, CENTER);
    text("The compatibility between",3*width/4, height/3 -50);
    text(firstName+ " and " +secondName+ " is:",3*width/4, (height/3) - 10);
    pop();

    push();
    fill(255);
    textSize(100);
    textFont("Crimson Pro");

    textAlign(CENTER, CENTER);
    text(myText + "%",3*width/4, height/2);
    pop();

  }

}
