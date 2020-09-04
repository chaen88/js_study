const clockContainer = document.querySelector(".js-clock"),
 clockTitle =  clockContainer.querySelector("h1"); 

function getTime(){
    const date = new Date();
    const year = date.getFullYear();
    const months = date.getMonths();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const millisecond = date.getMilliseconds();
    clockTitle.innerText=`${months < 10 ? `0${months}` : months} :${
    hours < 10 ? `0${hours}` : hours}:${
    minutes  < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
    
} //안에 객체 넣기//



function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();