class Brick{

//Constructor
constructor(x,y,w,h){

var options={

'isStatic':false,
'friction':0.5,
'density':1.2

}

this.body = Matter.Bodies.rectangle(x,y,w,h,options);
this.image = loadImage();
this.w = w;
this.h = h;
World.add(world,this.body);

}

//display function
display(){

//Creating variableto stor position of body
var pos = this.body.position

//Displaying the rectangle
rectMode(CENTER);
rect(pos.x,pos.y,w,h);

//displaying the image
image(this.image,pos.x,pos.y);


}







}