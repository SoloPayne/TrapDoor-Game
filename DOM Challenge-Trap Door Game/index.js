var firstDice = document.querySelector("img.one").getAttribute("src");
var secondDice = document.querySelector("img.two").getAttribute("src");

// randomize the two numbers for each dice

var randomNumbers = Math.floor(Math.random() * 6) + 1;

// trying out the array //

var randomImages = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
var randomImagesTwo = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";


  firstRandomDice = document.querySelector("img.one").setAttribute("src", randomImages);
  secondRandomDice = document.querySelector("img.two").setAttribute("src", randomImagesTwo);

// calling the functions

rollFirstDice();
rollSecondDIce();

function rollFirstDice() {

firstRandomDice;
}

function rollSecondDIce() {
secondRandomDice;

}

// changing the h1

if (randomImagesTwo > randomImages) {
  document.querySelector("h1").textContent = "Player 2 Wins";
} else if (randomImagesTwo === randomImages) {
  document.querySelector("h1").textContent = "Refresh Me again";
} else {

  document.querySelector("h1").textContent = "Player 1 Wins";
}

function firstDoorClick() {
var firstState =  document.querySelector(".door").setAttribute("src", "images/dooropen.png");
return firstState;
}
function secondDoorClick() {
  var secondState = document.querySelector(".door-two").setAttribute("src", "images/dooropen.png");
  return secondState;
}

document.querySelector(".door").addEventListener("click", firstDoorClick);
document.querySelector(".door-two").addEventListener("click", secondDoorClick);


var ghostRandom = Math.floor(Math.random() * 2) + 1;

if (ghostRandom === 1) {
  document.querySelector(".ghost-one").style.visibility = "hidden";
} else {
    document.querySelector(".ghost-two").style.visibility = "hidden";
}
