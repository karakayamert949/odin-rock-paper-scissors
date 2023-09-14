function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection,computerSelection){
    if (playerSelection.toLowerCase() === computerSelection){
        return 'Draw! You both chose '+ computerSelection

    }
    else {
        switch (playerSelection.toLowerCase()){
            case 'rock': return computerSelection == 'paper' ? 'You lose! Paper beats rock' : 'You win! Rock beats scissors'
            case 'paper': return computerSelection == 'rock' ? 'You win! Paper beats rock' : 'You lose! Scissors beat paper'
            case 'scissors': return computerSelection == 'paper' ? 'You win! Paper beats scissors' : 'You lose! Rock beats scissors'
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));