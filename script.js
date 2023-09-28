function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerChoice,computerChoice){
    console.log(playerChoice,computerChoice)
    if (playerChoice.toLowerCase() === computerChoice){
        return 'Draw! You both chose '+ computerChoice
    }
    else {
        switch (playerChoice.toLowerCase()){
            case 'rock': return computerChoice == 'paper' ? 'You lose! Paper beats rock' : 'You win! Rock beats scissors'
            case 'paper': return computerChoice == 'rock' ? 'You win! Paper beats rock' : 'You lose! Scissors beat paper'
            case 'scissors': return computerChoice == 'paper' ? 'You win! Paper beats scissors' : 'You lose! Rock beats scissors'
        }
    }
}
function checkWinner(playerScore,computerScore){
    if (playerScore > 4){
        let gameRes= document.createElement('p');
        gameRes.textContent=`You won the game! You won ${playerScore} games`;
        resultContainer.appendChild(gameRes);
    }
    else if (computerScore > 4){
        let gameRes= document.createElement('p');
        gameRes.textContent=`You lost the game! You won ${playerScore} games`;
        resultContainer.appendChild(gameRes);
    }
    else if (computerScore===5 && playerScore===5){ 
        let gameRes= document.createElement('p');
        gameRes.textContent=`Draw! You won ${playerScore} games`;
        resultContainer.appendChild(gameRes);
    }  
}

function updtScore(res){
    if (res.textContent[4]==='w'){
        playerScore+=1;
    }
    else{
        computerScore+=1;
    }
}

let resultContainer = document.querySelector('.resultContainer');
let playerScore=computerScore=0;

let score= document.createElement('p');

let selectBtns = document.querySelectorAll('.selectBtn');

selectBtns.forEach((selectBtn) => {
    selectBtn.addEventListener('click', 
    () => {let playerChoice=selectBtn.textContent;
            let computerChoice=getComputerChoice();
            let res = document.createElement('p');
            res.textContent= playRound(playerChoice,computerChoice);
            resultContainer.appendChild(res);
            updtScore(res);

            score.textContent= `Player ${playerScore} vs ${computerScore} Computer`;

            checkWinner(playerScore,computerScore);
        })});


resultContainer.appendChild(score);