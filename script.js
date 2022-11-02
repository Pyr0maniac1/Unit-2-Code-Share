let computerScore = 0; 
let playerScore = 0;  
let moves = 10;
const lMove = document.getElementById("Moves");
const pScore = document.getElementById("P-count");
const cScore = document.getElementById("C-count");
const text = document.getElementById("Output");

const game =() =>{
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    var computerChoice = Math.random();
    
if (computerChoice <= 0.34) {
    computerChoice = "rock";
}else if(computerChoice <= 0.67) {
    computerChoice = "paper";
}else {
    computerChoice = "scissors";
}
function compare(choice1, choice2) {
    if (choice1 === choice2) {
        pScore.innerHTML = pScore.innerHTML;
        cScore.innerHTML = cScore.innerHTML;
        text.innerHTML = "Tie";
        text.style.color = 'yellow';  
    } else if (choice1 == "rock") {
        if (choice2 === "scissors") {
            playerScore++;
            pScore.innerHTML = playerScore;
            text.innerHTML = "Player wins!";
            text.style.color = 'green';
        }else if (choice2 === "paper") {
            computerScore++;
            cScore.innerHTML = computerScore;
            text.innerHTML = "The computer wins!";
            text.style.color = 'red';
        }
    } else if (choice1 == "paper") {
            if (choice2 === "scissors") {
                playerScore++;
                pScore.innerHTML = playerScore;
                text.innerHTML = "The user wins!";
                text.style.color = 'green';
            }else if (choice2 === "rock") {
                computerScore++;
                cScore.innerHTML = computerScore;
                text.innerHTML = "The computer wins!";
                text.style.color = 'red';
            }
    } else if (choice1 == "scissors") {
            if (choice2 === "paper") {
                playerScore++;
                pScore.innerHTML = playerScore;
                text.innerHTML = "The user wins!";
                text.style.color = 'green';
            }else if (choice2 === "rock") {
                computerScore++;
                cScore.innerHTML = computerScore;
                text.innerHTML = "The computer wins!";
                text.style.color = 'red';
            }
        }
    }
compare(userChoice,computerChoice);
    moves--; 
    lMove.innerHTML = moves;
}