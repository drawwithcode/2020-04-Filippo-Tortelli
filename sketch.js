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


  if(dragCompleted == true) {

    rectangle.printResult();
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
    this.x = mouseX;
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

  printResult() {
    push();
    fill(255);
    textSize(30);

    textAlign(CENTER, CENTER);
    text("The compatibility between " +firstName+ " and " +secondName+ " is:",3*width/4, height/3);
    pop();

    push();
    fill(255);
    textSize(100);

    textAlign(CENTER, CENTER);
    text(myText + "%",3*width/4, height/2);
    pop();
  }

}
