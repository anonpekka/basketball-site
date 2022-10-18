// this is javascript for buttons
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let Homescore = 0
let Guestscore = 0
let Newone = 0



function hadd1() {
    // console.log("button home clicked")
    Homescore += 1
    scoreHome.textContent = Homescore

}

function hadd2() {
    // console.log("button home clicked")
    Homescore += 2
    scoreHome.textContent = Homescore

}

function hadd3() {
    // console.log("button home clicked")
    Homescore += 3
    scoreHome.textContent = Homescore

}

function gadd1() {
    // console.log("button guest clicked")
    Guestscore += 1
    scoreGuest.textContent = Guestscore
}

function gadd2() {
    // console.log("button guest clicked")
    Guestscore += 2
    scoreGuest.textContent = Guestscore
}

function gadd3() {
    // console.log("button guest clicked")
    Guestscore += 3
    scoreGuest.textContent = Guestscore
}

function newgame() {
    // console.log("button clicked")
    scoreGuest.textContent = Newone
    scoreHome.textContent = Newone
    Homescore = 0
    Guestscore = 0

}

