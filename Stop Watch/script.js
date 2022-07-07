const time_sc = document.querySelector('.container .time');
const start_btn=document.getElementById("start");
const stop_btn=document.getElementById("stop");
const reset_btn=document.getElementById("reset");

let seconds = 0;
let interval = null;

//Event Listeners
start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',reset);

//Update Timer
function timer(){
    seconds++;

    let hour = Math.floor(seconds/3600);
    let min = Math.floor((seconds-(hour*3600)) / 60);
    let sec = seconds % 60;
    
    if(sec<10) sec='0'+sec;
    if(min<10) min='0'+min;
    if(hour<10) hour='0'+hour;
   
    time_sc.innerText=`${hour}:${min}:${sec}`; 
}
function start(){
  timer();
  if(interval){
      return;
  }
  interval=setInterval(timer,1000);
}
function stop(){
    clearInterval(interval);
    interval=null;
}

function reset(){
    stop();
    seconds=0;
    time_sc.innerText='00:00:00';
}

