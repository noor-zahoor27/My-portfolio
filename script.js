let words = [

"Web Developer",
"AI Enthusiast",
"Data Analyst",
"Technologyy Enthusiast",
"Software Engineer",
"Machine Learning Learner",
"Python Developer",
"Tutoring"


];


let i=0;

let j=0;

let current="";

let typing=document.getElementById("typing");


function type(){

if(j < words[i].length){

current += words[i][j];

typing.innerHTML=current;

j++;

setTimeout(type,120);

}

else{

setTimeout(erase,1000);

}

}


function erase(){

if(j>0){

current=current.slice(0,-1);

typing.innerHTML=current;

j--;

setTimeout(erase,80);

}

else{

i++;

if(i>=words.length)

i=0;


setTimeout(type,500);

}

}


type();