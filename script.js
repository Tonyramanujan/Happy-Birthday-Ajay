// -------- PAGE NAVIGATION --------

const music = document.getElementById("music");

function nextPage(pageNumber){

document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("active");
});

document.getElementById("page"+pageNumber).classList.add("active");

if(pageNumber>=2){
music.play().catch(()=>{});
}

}

// -------- FINAL CELEBRATION --------

const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

resize();

window.addEventListener("resize",resize);

function resize(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

let pieces=[];

function celebrate(){

music.play().catch(()=>{});

pieces=[];

// Lots of confetti
for(let i=0;i<500;i++){

pieces.push({

x:Math.random()*canvas.width,

y:-20,

r:Math.random()*8+4,

speed:Math.random()*7+3,

angle:Math.random()*360,

rotate:Math.random()*10,

color:randomColor()

});

}

animate();

// Balloons
createBalloons();

// Hearts
createHearts();

// Fireworks
for(let i=0;i<6;i++){
setTimeout(fireworks,i*500);
}

// Screen shake
document.body.classList.add("shake");

setTimeout(()=>{
document.body.classList.remove("shake");
},1000);

}

function randomColor(){

const colors=[
"#FFD700",
"#FF4FA3",
"#00E5FF",
"#00FF99",
"#FF6B6B",
"#FFFFFF",
"#7C4DFF",
"#FFC107"
];

return colors[Math.floor(Math.random()*colors.length)];

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

pieces.forEach(p=>{

ctx.save();

ctx.translate(p.x,p.y);

ctx.rotate(p.angle);

ctx.fillStyle=p.color;

ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r);

ctx.restore();

p.y+=p.speed;

p.angle+=0.1;

});

pieces=pieces.filter(p=>p.y<canvas.height+20);

if(pieces.length>0){
requestAnimationFrame(animate);
}

}

// -------- FIREWORKS --------

function fireworks(){

const x=Math.random()*canvas.width;
const y=Math.random()*canvas.height/2;

for(let i=0;i<120;i++){

pieces.push({

x:x,
y:y,
r:Math.random()*6+2,
speed:Math.random()*8+2,
angle:(Math.PI*2/120)*i,
rotate:0,
color:randomColor()

});

}

}

// -------- BALLOONS --------

function createBalloons(){

for(let i=0;i<25;i++){

let balloon=document.createElement("div");

balloon.className="balloon";

balloon.style.left=Math.random()*100+"vw";

balloon.style.animationDuration=(4+Math.random()*4)+"s";

balloon.style.background=randomColor();

document.body.appendChild(balloon);

setTimeout(()=>{
balloon.remove();
},9000);

}

}

// -------- HEARTS --------

function createHearts(){

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

}

// -------- FLOATING PARTICLES --------

const particleLayer=document.getElementById("particles");

for(let i=0;i<40;i++){

let star=document.createElement("span");

star.style.position="absolute";

star.style.width=(Math.random()*4+2)+"px";

star.style.height=star.style.width;

star.style.background="white";

star.style.borderRadius="50%";

star.style.opacity=Math.random();

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.boxShadow="0 0 15px white";

star.style.animation=`twinkle ${Math.random()*3+2}s infinite`;

particleLayer.appendChild(star);

}

// -------- CSS CREATED BY JS --------

const style=document.createElement("style");

style.innerHTML=`

@keyframes twinkle{

0%{transform:scale(1);opacity:.2;}
50%{transform:scale(1.6);opacity:1;}
100%{transform:scale(1);opacity:.2;}

}

.balloon{

position:fixed;
bottom:-120px;
width:60px;
height:80px;
border-radius:50%;
z-index:9999;
animation:floatUp linear forwards;

}

.balloon::after{

content:"";
position:absolute;
width:2px;
height:70px;
background:white;
left:50%;
top:80px;

}

@keyframes floatUp{

from{

transform:translateY(0);

}

to{

transform:translateY(-130vh);

}

}

.heart{

position:fixed;
bottom:-40px;
z-index:9999;
pointer-events:none;
animation:floatUp linear forwards;

}

.shake{

animation:shake .6s;

}

@keyframes shake{

0%{transform:translateX(0);}
20%{transform:translateX(-6px);}
40%{transform:translateX(6px);}
60%{transform:translateX(-6px);}
80%{transform:translateX(6px);}
100%{transform:translateX(0);}

}

`;

document.head.appendChild(style);

// -------- WELCOME --------

window.onload=()=>{

document.getElementById("page1").classList.add("active");

};
