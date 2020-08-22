const title = document.querySelector(".back");

function handleClick(){
    title.style.backgroundColor = "#" + parseInt(Math.random()*0xffffff).toString(16);
    
}

function init(){
    title.addEventListener("click",handleClick);
}

init();