const start = document.getElementById("start") ;
const stop = document.getElementById("stop") ;
const reset = document.getElementById("reset") ;
const timer = document.getElementById("timer") ;

const ringSound = new Audio('ring_sound.mp3') ;

let timeLeft = 1500 ; 
let interval ; 

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60) ;
    const seconds = timeLeft % 60 ;  

    timer.innerHTML = ` 
        ${minutes.toString().padStart(2,"0")}
        :
        ${seconds.toString().padStart(2,"0")}` ;
};

const startTimer = () => {
    interval = setInterval(() => {
            timeLeft-- ;
            updateTimer() ;

            if(timeLeft === 0)
            {
                clearInterval(interval) ;
                interval = null ;
                ringSound.play() ;
                alert("Time's up !") ;
                updateTimer() ;
            }
    } , 1000) ;

    console.log("Timer started") ;
};

const stopTimer = () => clearInterval(interval) ;

const resetTimer = () => {
    clearInterval(interval) ;
    timeLeft = 1500 ; 
    updateTimer() ;
}

start.addEventListener("click", startTimer) ;
stop.addEventListener("click",stopTimer) ;
reset.addEventListener("click",resetTimer) ;

updateTimer() ;
