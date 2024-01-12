
//returns integer from 1 to 6
var randomNumber1 = Math.floor(Math.random()*6)+1; // 1 - 6
var image = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImages = "images/" + image; //images/dice1.png - images/dice6.png

var p1 = document.querySelectorAll("img")[0];
p1.setAttribute("src",randomImages);

var randomNumber2 = Math.floor(Math.random()*6)+1; // 1 - 6
var image2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png
var randomImages2 = "images/" + image2; //images/dice1.png - images/dice6.png

var p2 = document.querySelectorAll("img")[1];
p2.setAttribute("src",randomImages2);


if (randomNumber1>randomNumber2) {

document.querySelector("h1").innerHTML = "🟥 Player 1 Wins !";

}else if (randomNumber2>randomNumber1) {

document.querySelector("h1").innerHTML = "Player 2 Wins ! 🟥";

}else {
document.querySelector("h1").innerHTML = " Draw !";
}
