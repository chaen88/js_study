const back = document.querySelector(".back");

const colorNum=4;

function handleClick(){
    back.style.backgroundColor = Math.floor((Math.random()*4)+1);
    
}

function init(){
    back.addEventListener("click",handleClick);
}

init();