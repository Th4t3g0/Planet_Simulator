var canvas = document.getElementById("space");
var context=canvas.getContext("2d");

//stuff
var point_x=0;
var point_y=0;
var r=0;
var acc=0;
var nom_x=0;
var nom_y=0;
var newV=0;
var mVx=0;
var mVy=0;
//

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
var mars=new Planet("mars",75,75,10,10,0.1);
var moon=new Planet("moon",20,20,10,10,30);
mVx=moon.velocity;
var planets =[mars,moon];

requestAnimationFrame(motion);
//physics(mars.mass,mars.pos_x,mars.pos_y,moon.pos_x,moon.pos_y,moon.velocity);



function motion(time) {
    //for(let ii=0;ii<planets.length;ii++){
       // a=[]
var collision1 =collision(distance(moon,mars),moon,mars);
//if(collision1){
//    planets[0].velocity=planets[0].velocity*1*Math.sin(30)+0.5;
//    planets[1].velocity=planets[1].velocity*-1*Math.cos(30)+0.5;
//}
physics(mars.mass,mars.pos_x,mars.pos_y,moon.pos_x,moon.pos_y,moon.velocity);
    
planets[0].pos_x+=planets[0].velocity;
//planets[0].pos_y+=planets[0].velocity;

//planets[1].pos_x+=planets[1].velocity*Math.cos(30);
//planets[1].pos_y+=planets[1].velocity*Math.sin(30);
       

    
    
planets[1].pos_x += mVx;
planets[1].pos_y += mVy;
    
        //test1
        //var x11,y11=physics(mars.mass,mars.pos_x,mars.pos_y,moon.pos_x,moon.pos_y,moon.velocity);
        //planets[1].pos_x+=x11;
        //planets[1].pos_y+=y11;

        //
    //}
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

//physics under the hood
function physics(mass,x1,y1,x2,y2,velocity) {
//mass- mass of the gravity source
//velocity- is the velocity of the other body, the one obiting another


point_x =x1-x2;
point_y =y1-y2;
r = Math.sqrt(point_x*point_x+point_y*point_y);
F_G = 6.674*10**-11 * mass * 1 / r^2;
    
acc =F_G/mass;
newV+=acc;
nom_x=(point_x/r)*newV;
nom_y=(point_y/r)*newV;
//console.log("normals");
//console.log(nom_x);
//console.log(nom_y);
mVx+=nom_x;
mVy+=nom_y;
//console.log("velocity");
//console.log(mVx);
//console.log(mVy);

}

//calculates the distance between two planets
function distance(planet1,planet2){
let point_x =planet1.pos_x-planet2.pos_x;
let point_y =planet1.pos_y-planet2.pos_y;
let r=Math.sqrt(point_x*point_x+point_y*point_y);
return r;
    
}

//check if the two are coliding;
function collision(distance,planet1,planet2) {
  if(distance<=planet1.radius||distance<=planet2.radius){
    return true;
 }  
}
