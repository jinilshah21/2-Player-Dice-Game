let randomNum1 = Math.round(Math.random() * 6) + 1;
let randomNum2 = Math.round(Math.random() * 6) + 1;
let dice1 = document.querySelector(".player1dice");
let dice2 = document.querySelector(".player2dice");
let roll1btn = document.querySelector(".player1roll");
let roll2btn = document.querySelector(".player2roll");
let count = 0;
let winer = "Winner!!!";
let loser = "Loser!!!";
let draw = "Draw!!!";

var player1 = prompt("Player 1 Give your name :");
player1 = player1[0].toUpperCase() + player1.slice(1, player1.length).toLowerCase();

var player2 = prompt("Player 2 Give your name :");
player2 = player2[0].toUpperCase() + player2.slice(1, player2.length).toLowerCase();

document.querySelector(".player1").innerHTML = player1;
document.querySelector(".player2").innerHTML = player2;


roll1btn.addEventListener('click', () => {

    count++;
    if (randomNum1 == 1)
        dice1.src = "images/dice1.png";
    if (randomNum1 == 2)
        dice1.src = "images/dice2.png";
    if (randomNum1 == 3)
        dice1.src = "images/dice3.png";
    if (randomNum1 == 4)
        dice1.src = "images/dice4.png";
    if (randomNum1 == 5)
        dice1.src = "images/dice5.png";
    if (randomNum1 == 6)
        dice1.src = "images/dice6.png";

    if (count == 2) {
        winner();
    }

})

roll2btn.addEventListener('click', () => {
    count++;
    if (randomNum2 == 1)
        dice2.src = "images/dice1.png";
    if (randomNum2 == 2)
        dice2.src = "images/dice2.png";
    if (randomNum2 == 3)
        dice2.src = "images/dice3.png";
    if (randomNum2 == 4)
        dice2.src = "images/dice4.png";
    if (randomNum2 == 5)
        dice2.src = "images/dice5.png";
    if (randomNum2 == 6)
        dice2.src = "images/dice6.png";

    if (count == 2) {
        winner();
    }
})

function winner() {

    if (randomNum1 > randomNum2) {
        document.querySelector('.player1results').innerHTML = winer;
        document.querySelector('.player2results').innerHTML = loser;
        count = 0;

    }

    if (randomNum1 < randomNum2) {
        document.querySelector('.player2results').innerHTML = winer;
        document.querySelector('.player1results').innerHTML = loser;
        count = 0;

    }

    if (randomNum1 == randomNum2) {
        document.querySelector('.player1results').innerHTML = draw;
        document.querySelector('.player2results').innerHTML = draw;
        count = 0;

    }

}

function playagain() {
    document.querySelector('.player2results').innerHTML = "Who is Luckiest ??";
    document.querySelector('.player1results').innerHTML = "Who is Luckiest ??";
    dice1.src = "images/dice1.png";
    dice2.src = "images/dice1.png";
    count = 0;
    randomNum2 = Math.round(Math.random() * 6) + 1;
    randomNum1 = Math.round(Math.random() * 6) + 1;
}
