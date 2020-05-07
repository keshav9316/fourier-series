
let r=67;
let time=0;
let wave = [];

function setup(){
createCanvas(900,450);
//background(0);
}
function draw(){
  let x=0; //!important
 let y=0; //!important
 background(0);
 translate(200,200);
 stroke(255);
 noFill();

 //ellipse(0,0,r*2);

 for(let i=0; i<4; i++){
     let oldx=x;
     let oldy=y;

    let n=2*i+1;
     //fourier coefficient
  let radius = r*(4/(n*PI)); 
  x += radius * cos(n * time);
  y += radius * sin(n * time);
    
  //x+=r*cos(n*time);
  //y+=r*sin(n*time);
    stroke(255,50);
 ellipse(oldx,oldy,radius*2);
  // Set alternate color
  line_color = color(27.12,255,19.89);
// Set the color to draw the line
strokeWeight(5);
stroke(line_color);
 //stroke(255);
 line(oldx,oldy,x,y);
 }
wave.unshift(y);
 
 translate(200,0)
 line(x-200,y,0,wave[0]);

 
beginShape();
noFill();
//fill(255);
 for(let i=0; i<wave.length;i++){
  vertex(i, wave[i]);
  //line(x,y,i, wave[i]);
 }
 
endShape();
if(wave.length>height-1){
    wave.pop();
}
time+=0.05;
}