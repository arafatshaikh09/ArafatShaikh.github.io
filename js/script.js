const words = [

"Mechanical Engineer",

"Robotics Engineer",

"CAD Designer",

"FEA Enthusiast",

"Problem Solver"

];

let i = 0;

let j = 0;

let currentWord = "";

let isDeleting = false;

function type(){

currentWord = words[i];

if(!isDeleting){

document.getElementById("typing").textContent =
currentWord.substring(0,j++);

if(j > currentWord.length){

isDeleting = true;

setTimeout(type,1500);

return;

}

}

else{

document.getElementById("typing").textContent =
currentWord.substring(0,j--);

if(j==0){

isDeleting=false;

i++;

if(i==words.length){

i=0;

}

}

}

setTimeout(type,isDeleting?60:120);

}

type();