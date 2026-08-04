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

// Big Confetti
confetti({
    particleCount:800,
    spread:360,
    startVelocity:70
});

pieces=[];

for(let i=0;i<350;i++){

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

// Extra Effects
createBalloons();
createHearts();
createGalaxy();

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

...

}
// -------- BALLOONS --------

function createBalloons(){

const colors=[
"#ff4d6d",
"#FFD700",
"#00E5FF",
"#00FF99",
"#7C4DFF",
"#ff9800"
];

for(let i=0;i<35;i++){

let b=document.createElement("div");

b.className="balloon";

b.style.background=colors[Math.floor(Math.random()*colors.length)];

b.style.left=Math.random()*100+"vw";

b.style.animationDuration=(5+Math.random()*4)+"s";

document.body.appendChild(b);

setTimeout(()=>b.remove(),9000);

}

}

// -------- HEARTS --------

function createHearts(){

for(let i=0;i<60;i++){

let h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(20+Math.random()*20)+"px";

h.style.animationDuration=(3+Math.random()*3)+"s";

document.body.appendChild(h);

setTimeout(()=>h.remove(),7000);

}

}

// -------- GALAXY --------

function createGalaxy(){

for(let i=0;i<150;i++){

let star=document.createElement("div");

star.className="galaxy";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=(2+Math.random()*5)+"s";

document.body.appendChild(star);

}

}

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
