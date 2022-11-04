let playpause=document.getElementById('playPause');
let reset=document.getElementById('reset');
let second=0;
let minute=0;
let hour=0;

let psecond=0;
let pminute=0;
let phour=0;

let timerInterval=null;
let timerstatus="stopped";
function stopwatch()
{
    second++;
    if(second/60===1)

    {
        second=0;
        minute++;
    }
    if(minute/60===1)
    {
        minute=0;
        hour++;
    }
    
    if(second<10)
    {
        psecond='0'+second.toString();
    }
    else psecond=second;
    if(minute<10)
    {
        pminute='0'+minute.toString();
    }
    else pminute=minute;
    if(second<10)
    {
        phour='0'+hour.toString();
    }
    else phour=hour;

   let displaytime=document.getElementById('timer').innerHTML=phour + ":" +pminute +":" +psecond;
}

playpause.addEventListener('click',function(){
    if(timerstatus==="stopped")
    {
        timerInterval=window.setInterval(stopwatch,1000);
        document.getElementById('playPause').innerHTML='<i class="fa-solid fa-pause" id="one"></i>';
        timerstatus="started";
    }
    else{
        window.clearInterval(timerInterval);
        document.getElementById('playPause').innerHTML='<i class="fa-solid fa-play" id="one"></i>';
        timerstatus="stopped";
    }
});
reset.addEventListener('click',function()
{
    window.clearInterval(timerInterval);
    second=0;
    minute=0;
    hour=0;
    document.getElementById('timer').innerHTML="00:00:00";
})

