var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

let computerScore = 1; 
let PlayerScore = 1; 
const pScore = document.getElementById("PlayerScore");
const cScore = document.getElementById("ComScore");

if (computerChoice < 0.34) {
computerChoice = "rock";
} else if(computerChoice <= 0.67) {
computerChoice = "paper";
} else {
computerChoice = "scissors";
}
var compare=function(choice1,choice2){
if(choice1===choice2){
return "The result is a tie!";
}
else if(choice1="rock"){
if(choice2==="scissors"){
return "rock wins"
PlayerScore++; 
}
else if(choice2==="paper"){
return "paper wins";
computerScore++;
}
}
else if(choice1="paper"){
if(choice2==="scissors"){
return "scissors win"
computerScore++;
}
else if(choice2==="rock"){
return "paper wins";
PlayerScore++; 
}
}
else if(choice1="scissors"){
if(choice2==="paper"){
return "scissors win"
PlayerScore++
}
else if(choice2==="rock"){
return "rock wins";
computerScore++; 
}
}
}
console.log(compare(userChoice,computerChoice));