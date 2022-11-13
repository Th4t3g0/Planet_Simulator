var canvas = document.getElementById("space");
var context=canvas.getContext("2d");
//context.strokeStyle="white";
//context.lineWidth=5;

///classes
class Planet{
constructor(name,pos_x,pos_y,mass,velocity){
    this.name=name;
    this.pos_x=pos_x;
    this.pos_y=pos_y;
    this.mass=mass;
    this.velocity=velocity;
}
maker(){
context.beginPath();
context.strokeStyle="white";
context.lineWidth=5;
context.moveTo(this.pos_x,this.pos_y);
context.arc(this.pos_x, this.pos_y, 10, 0, Math.PI * 2);
context.closePath();
context.fillStyle="white";
context.fill();
context.stroke();

}
physics(mass2){

F_G = gamma * this.mass * mass2 / distance^2;
    

    
}
update(){
this.pos_x+=this.velocity;
//this.pos_y-=2;
}
frame(){
context.clearRect(0, 0, canvas.width, canvas.height);
this.update();
this.maker();
}

  
}//end


//function frame1(planet){
//context.clearRect(0, 0, canvas.width, canvas.height);
//planet.update();
//context.clearRect(0, 0, canvas.width, canvas.height);
//planet.maker();
  
//}

var mars = new Planet("mars",75,75,60,0);
mars.maker();
setInterval(function(){mars.frame();}, 1000/60);









function dist(planet1,planet2){
let point_x =planet1.pos_x-planet2.pos_x;
let point_y =planet1.pos_y-planet2.pos_y;
let r=Math.sqrt(point_x*point_x+point_y*point_y);



return distance;
}








//setInterval(mars.frame(),1000);
//frame1(mars);

//console.log(mars.pos_x);
//setInterval(mars.frame(), 1000.0/60.0);
//console.log(mars.pos_x);

