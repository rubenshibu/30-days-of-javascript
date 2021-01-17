var randomNumber1 = Math.floor(Math.random() * 5) + 1;
var randomNumber2 = Math.floor(Math.random() * 5) + 1;
var imgArr = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png", ];

document.querySelector(".img1").setAttribute("src", imgArr[randomNumber1]);
document.querySelector(".img2").setAttribute("src", imgArr[randomNumber2]);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}
function dieThrow() {
    location.reload();
}