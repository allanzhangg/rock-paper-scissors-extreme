let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const fire_div = document.getElementById("f");
const water_div = document.getElementById("w");
const air_div = document.getElementById("a");
const sponge_div = document.getElementById("s2");

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'f', 'w', 'a', 's2'];
    const randomNumber = Math.floor(Math.random() * 7);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "f") return "Fire";
    if (letter === "w") return "Water";
    if (letter === "a") return "Air";
    return "Sponge";
}

function rockResult(computerChoice) {
    if (computerChoice === "f") {
        win("r", computerChoice);
    } else if (computerChoice === "s") {
        win("r", computerChoice);
    } else if (computerChoice === "s2") {
        win("r", computerChoice);
    } else if (computerChoice === "r") {
        draw();
    } else {
        loss("r", computerChoice);
    }
}

function paperResult(computerChoice) {
    if (computerChoice === "a") {
        win("p", computerChoice);
    } else if (computerChoice === "r") {
        win("p", computerChoice);
    } else if (computerChoice === "w") {
        win("p", computerChoice);
    } else if (computerChoice === "p") {
        draw();
    } else {
        loss("p", computerChoice);
    }
}

function scissorsResult (computerChoice) {
    if (computerChoice === "a") {
        win("s", computerChoice);
    } else if (computerChoice === "p") {
        win("s", computerChoice);
    } else if (computerChoice === "s2") {
        win("s", computerChoice);
    } else if (computerChoice === "s") {
        draw();
    } else {
        loss("s", computerChoice);
    }
}

function fireResult (computerChoice) {
    if (computerChoice === "s") {
        win("f", computerChoice);
    } else if (computerChoice === "p") {
        win("f", computerChoice);
    } else if (computerChoice === "s2") {
        win("f", computerChoice);
    } else if (computerChoice === "f") {
        draw();
    } else {
        loss("f", computerChoice);
    }
}

function waterResult (computerChoice) {
    if (computerChoice === "r") {
        win("w", computerChoice);
    } else if (computerChoice === "f") {
        win("w", computerChoice);
    } else if (computerChoice === "s") {
        win("w", computerChoice);
    } else if (computerChoice === "w") {
        draw();
    } else {
        loss("w", computerChoice);
    }
}

function airResult (computerChoice) {
    if (computerChoice === "f") {
        win("a", computerChoice);
    } else if (computerChoice === "r") {
        win("a", computerChoice);
    } else if (computerChoice === "w") {
        win("a", computerChoice);
    } else if (computerChoice === "a") {
        draw();
    } else {
        loss("a", computerChoice);
    }
}

function spongeResult (computerChoice) {
    if (computerChoice === "p") {
        win("s2", computerChoice);
    } else if (computerChoice === "a") {
        win("s2", computerChoice);
    } else if (computerChoice === "w") {
        win("s2", computerChoice);
    } else if (computerChoice === "s2") {
        draw();
    } else {
        loss("s2", computerChoice);
    }
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} (user) beats ${convertToWord(computerChoice)}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => { userChoice_div.classList.remove('green-glow') }, 250);
}

function draw(userChoice) {
    result_p.innerHTML = "It's a draw!";
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => { userChoice_div.classList.remove('grey-glow') }, 250);
}

function loss(userChoice, computerChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)} (user). You lose!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => { userChoice_div.classList.remove('red-glow') }, 250);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    if (userChoice === "r") {
        rockResult(computerChoice);
    } else if (userChoice == "p") {
        paperResult(computerChoice);
    } else if (userChoice == "s") {
        scissorsResult(computerChoice);
    } else if (userChoice == "f") {
        fireResult(computerChoice);    
    } else if (userChoice == "w") {
        waterResult(computerChoice);
    } else if (userChoice == "a") {
        airResult(computerChoice);
    } else {
        spongeResult(computerChoice);
    }
}

function main() {

    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })

    fire_div.addEventListener('click', function() {
        game("f");
    })

    water_div.addEventListener('click', function(){
        game("w");
    })

    air_div.addEventListener('click', function() {
        game("a");
    })

    sponge_div.addEventListener('click', function(){
        game("s2");
    })
}

main();