function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)]
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

function getPlayerChoice(){
    while (true) {
        let playerChoice = prompt('Choose between rock, paper and scissors');
        if (['rock', 'paper', 'scissors'].includes(playerChoice.toLowerCase())){
            return playerChoice}
        else console.log('Invalid choice! Please select from rock paper scissors');
    }
}

function game(roundNum){
    let playerScore=0;
    for (let round=0; round<roundNum; round++){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let res= playRound(playerChoice,computerChoice);
        console.log(res);
        if (res[4]==='w'){
            playerScore+=1;
        }
    }
    if (playerScore > roundNum/2){
        console.log('You won the game! You won', playerScore, 'games out of', roundNum);
    }
    else if (playerScore < roundNum/2){
        console.log('You lost the game! You won', playerScore, 'games out of', roundNum);
    }
    else { 
        console.log('Draw! You won', playerScore, 'games out of', roundNum);
    }  
}

game(2)