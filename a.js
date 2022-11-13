var canvas = document.getElementById("space");
var context=canvas.getContext("2d");
//context.strokeStyle="white";
//context.lineWidth=5;

///classes
class Planet{
constructor(name,pos_x,pos_y,mass,radius,velocity){
    this.name=name;
    this.pos_x=pos_x;
    this.pos_y=pos_y;
    this.mass=mass;
    this.radius=radius;
    this.velocity=velocity;
}
    
}
var mars=new Planet("mars",75,75,10,10,.8);
var moon=new Planet("moon",5,15,10,10,.2);

var planets =[mars,moon];

requestAnimationFrame(motion);




function motion(time) {
    for(let ii=0;ii<planets.length;ii++){

        planets[ii].pos_x+=planets[ii].velocity;
    }
    draw();
    requestAnimationFrame(motion);
    
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(var i=0;i<planets.length;i++){
    //var r=planets[i]
        context.beginPath();
    context.strokeStyle="white";
    context.lineWidth=5;
    context.arc(planets[i].pos_x, planets[i].pos_y,planets[i].radius, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle="white";
    context.fill();
    context.stroke();
  }
    
}
