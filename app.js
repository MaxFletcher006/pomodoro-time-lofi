const start = document.getElementById("start") ;
const stop = document.getElementById("stop") ;
const reset = document.getElementById("reset") ;
const tab = document.getElementById("tab-timer") ;
const timer = document.getElementById("timer") ;
const userTime = document.getElementById("user-input") ;

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

    tab.innerHTML = `
        ${minutes.toString().padStart(2,"0")}
        :
        ${seconds.toString().padStart(2,"0")}` ;

};

const startTimer = () => {

    const userMinutes = parseInt(userTime.value) ;

    if(!isNaN(userMinutes) && userMinutes > 0)
    {
        timeLeft = userMinutes * 60 ; 
    }

    if (interval) return ;

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
    interval = null ;

    const userMinutes = parseInt(userTime.value) ;
    timeLeft = (!isNaN(userMinutes) && userMinutes > 0) ? userMinutes * 60 : 1500 ; 
    updateTimer() ;
}

start.addEventListener("click", startTimer) ;
stop.addEventListener("click",stopTimer) ;
reset.addEventListener("click",resetTimer) ;

updateTimer() ;
