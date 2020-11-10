//gui params
var firstName = "the first name";
var secondName = "the second name";

//gui
var visible = true;
var gui;

var rectangle;

function setup() {
  createCanvas(windowWidth,windowHeight)

  gui = createGui();
  gui.addGlobals('firstName', 'secondName');

  rectangle = new Rect(width/3, height/2);
}

function draw() {
  background("pink");

  rectMode(CENTER);
  rectangle.display();
}

function mouseDragged() {
  fill(100);
  rectangle.dragged();
}

function mouseReleased() {
  rectangle.released();
}

//classe per il rettangolo
class Rect {
  constructor (temp_x, temp_y) {
    this.x = temp_x;
    this.y = temp_y;
    this.color = 255;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, 100, 50);
  }

  dragged() {
    this.x = mouseX;
    this.y = mouseY;
    this.color = 150;
  }

  released() {
    // this.x = temp_x;
    // this.y = temp_y;
    this.color = 255;
  }
}
