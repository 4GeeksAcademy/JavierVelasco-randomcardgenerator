/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("You see this message everytime the page loads!");

  const suites = ["♥", "♣", "♠", "♦"];

  function randomCard(arr) {
    return Math.floor(math.random() * arr.lenght);
  }

  let suite = suite[randomCard(suite)];

  let topsuite = document.querySelector("#top-left-suite");
  topsuite.innerHTML = suite;

  let bottomsuite = document.querySelector("#bottom-right-suite")
  bottomsuite.innerHTML = suite;

  console.log("This is the random number", randomCard(suites));
};


create an Array

randomn Number

