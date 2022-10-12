// adding a point for every time you click on the white square
var score = 0;

function addToScore(amount){
    score = score + amount
    document.getElementById("score").innerHTML = score
}

// countdown timer for game length
let timer = 21
function decreaseTimer() {
    // decrease the timer length by 1
    if (timer > 0) {
        setTimeout(decreaseTimer, 1000)
        timer--
        document.getElementById("timer").innerHTML = `Timer: ${timer}`
    }

    // display text that says the game is over once the time reaches 0
    if(timer == 0) {
        document.getElementById("timer").innerHTML = "Time's up!"
        document.getElementById("whiteSquare").style.display = "none"
    }
}

// invoke the function to display the countdown timer
decreaseTimer()

