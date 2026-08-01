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
// ================= STATS COUNTER =================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                const increment = target / 120;

                if(count < target){

                    count += increment;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => observer.observe(counter));