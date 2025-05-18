let counting = false;
let duration = 60;
let currentPhase;
let refreshIntervalId;
const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".start");


const Phase = Object.freeze({
    POMO:0,
    SHORT:1,
    LONG:2
});

setPomo();

function setPomo(){
    pauseTimer();
    currentPhase = Phase.POMO;
    timer.textContent = "25:00";
    duration = 1500;
    depressBtn(Phase.POMO);
}

function setShortBreak(){
    pauseTimer();
    currentPhase = Phase.SHORT;
    timer.textContent = "5:00";
    duration = 300;
    depressBtn(Phase.SHORT);
}

function setLongBreak(){
    pauseTimer();
    currentPhase = Phase.LONG;
    timer.textContent = "30:00";
    duration = 1800;
    depressBtn(Phase.LONG);
}


function startTimer(){
    if(!counting){
        counting = true;
        startBtn.textContent = "Pause";
        let hours, minutes,seconds;

        refreshIntervalId = setInterval(function(){
            //decrement
            duration--;
            console.log(duration);

            //process h,m,s into a string that follows hour:minute:second with 2 digits per section
            seconds = parseInt(duration%60);
            minutes = parseInt((duration/60)%60);
            hours = parseInt(duration/3600);

            //Render in the time on the page
            hours = hours < 10 ? "0" + hours : hours;
            minutes = (hours > 0 && minutes < 10) ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            timer.textContent = (hours == 0) ? minutes + ":" + seconds : hours + ":" + minutes + ":" + seconds;
            
            if(duration<0){ 
                endTimer(); 

            }

        },1000);
    }
    else{
        pauseTimer();
    }
}

function pauseTimer(){
    counting = false;
    clearInterval(refreshIntervalId);
    startBtn.textContent = "Start";

}

function endTimer(){
    pauseTimer();
    switch(currentPhase){
    case Phase.POMO:
        setShortBreak();
        break;
    case Phase.SHORT:
        setPomo();
        break;
    case Phase.LONG:
        setPomo();
        break;
}
    // document.querySelector(".timer").textContent = "DONE!";
}

function depressBtn(btn){
    let buttons = document.getElementsByClassName("setter");
    for(let i = 0; i<buttons.length; i++){
        buttons[i].style.background = "rgb(195, 59, 59)";
    }
    switch(btn){
        case Phase.POMO:
            buttons[0].style.background = "rgb(173, 48, 48)";
            break;
        case Phase.SHORT:
            buttons[1].style.background = "rgb(173, 48, 48)";
            break;
        case Phase.LONG:
            buttons[2].style.background = "rgb(173, 48, 48)";
            break;
    }
}