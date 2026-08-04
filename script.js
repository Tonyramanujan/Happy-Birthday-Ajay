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

pieces=[];

for(let i=0;i<250;i++){

pieces.push({

x:Math.random()*canvas.width,

y:-20,

r:Math.random()*8+4,

speed:Math.random()*5+3,

angle:Math.random()*360,

rotate:Math.random()*10,

color:randomColor()

});

}

animate();

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

// -------- TWINKLE ANIMATION --------

const style=document.createElement("style");

style.innerHTML=`

@keyframes twinkle{

0%{

transform:scale(1);

opacity:.2;

}

50%{

transform:scale(1.6);

opacity:1;

}

100%{

transform:scale(1);

opacity:.2;

}

}

`;

document.head.appendChild(style);

// -------- WELCOME --------

window.onload=()=>{

document.getElementById("page1").classList.add("active");

};
