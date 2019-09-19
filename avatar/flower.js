class Flower {
  constructor(_xpos,_ypos) {
    this.xpos = _xpos;
    this.ypos = _ypos;
  }



  display() {
    push();
    translate(this.xpos,this.ypos );
    fill(255);
    circle(35, 50, 15);
    circle(42, 40, 15);
    circle(55, 37, 15);
    circle(42, 62, 15);
    circle(55, 62, 15);
    circle(62, 50, 15);
   

    fill(255, 255, 51);
    circle(50, 50, 20);

    pop();
  }
move(){

if(this.ypos <= height){
   this.ypos +=2;
    }
  else
    this.ypos = -height;

}


  
}


//function drawFlower() {
//fill(255);
//circle(35, 50, 15);
//circle(42, 40, 15);
//circle(55, 37, 15);
//circle(42, 62, 15);
//circle(55, 62, 15);
//circle(62, 50, 15);
////circle(62, 40, 15);

//fill(255, 255, 51);
//circle(50, 50, 20);


//}