const text = document.getElementById("text");

const words = document.getElementById("words");

const chars = document.getElementById("chars");

function updateStats(){

let value = text.value.trim();

let wordCount = value === ""
? 0
: value.split(/\s+/).length;

words.innerText = wordCount;

chars.innerText = text.value.length;

}

text.addEventListener("input",updateStats);

document.getElementById("upper").addEventListener("click",()=>{

text.value=text.value.toUpperCase();

updateStats();

});

document.getElementById("lower").addEventListener("click",()=>{

text.value=text.value.toLowerCase();

updateStats();

});

document.getElementById("title").addEventListener("click",()=>{

text.value=text.value.replace(
 /\w\S*/g,
 txt=>txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase()
);

updateStats();

});

document.getElementById("clear").addEventListener("click",()=>{

text.value="";

updateStats();

});

document.getElementById("copy").addEventListener("click",()=>{

navigator.clipboard.writeText(text.value);

alert("Copied Successfully!");

});

updateStats();