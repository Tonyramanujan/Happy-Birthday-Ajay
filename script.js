// -------- PAGE NAVIGATION --------

const music = document.getElementById("music");

function nextPage(pageNumber){

    document.getElementById("page"+pageNumber)
        .classList.add("active");

    if(pageNumber >= 2){
        music.play().catch(()=>{});
    }

    window.scrollTo({
        top: document.getElementById("page"+pageNumber).offsetTop,
        behavior: "smooth"
    });

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

// ===== CONFETTI CANNONS =====

confetti({
particleCount:600,
spread:360,
startVelocity:70,
origin:{x:0,y:1}
});

confetti({
particleCount:600,
spread:360,
startVelocity:70,
origin:{x:1,y:1}
});

setTimeout(()=>{

confetti({
particleCount:1000,
spread:360,
startVelocity:90,
origin:{x:.5,y:.6}
});

},700);

// ============================

pieces=[];

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


// -------- 3D BALLOONS FROM BOTH SIDES --------

function createBalloons(){

const colors=[
"#ff4d6d",
"#FFD700",
"#00E5FF",
"#00FF99",
"#7C4DFF",
"#ff9800"
];

for(let i=0;i<40;i++){

let b=document.createElement("div");

b.className="balloon";

b.style.background=colors[Math.floor(Math.random()*colors.length)];

if(i%2==0){

b.style.left=(-5+Math.random()*12)+"vw";

}else{

b.style.left=(90+Math.random()*12)+"vw";

}

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

h.style.fontSize=(18+Math.random()*28)+"px";

h.style.animationDuration=(3+Math.random()*4)+"s";

document.body.appendChild(h);

setTimeout(()=>h.remove(),7000);

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

// -------- FIREWORKS --------

function fireworks(){

for(let k=0;k<5;k++){

setTimeout(()=>{

const x=Math.random()*canvas.width;

const y=Math.random()*canvas.height*.45;

for(let i=0;i<150;i++){

pieces.push({

x:x,

y:y,

r:Math.random()*5+2,

speed:Math.random()*7+2,

angle:(Math.PI*2/150)*i,

rotate:0,

color:randomColor()

});

}

},k*400);

}

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
