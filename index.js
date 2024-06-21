function getComputerChoice(randomNumber) {
    computerSelection = choice[randomNumber];
    return computerSelection;
} 

function playRound(playerSelection, computerSelection, PlayerScore, ComputerScore, round) {
    playerSelection = playerSelection.toLowerCase();
    console.log(computerSelection);
    computerSelection = computerSelection.toLowerCase();
    if (PlayerScore == 5){
        return`
                You Win!

                Final Score:
                
                Player: ${PlayerScore}
                Computer: ${ComputerScore}
        `
    }
    else if (ComputerScore == 5) {
        return `
            You lose!

            Final Score:
            
            Player: ${PlayerScore}
            Computer: ${ComputerScore}
`
    }

    if (playerSelection === computerSelection) {
            ComputerScore=Computer;
            PlayerScore=Player;
            round_++;
            round = round_;
        
        return `It's a tie!
                Playerscore: ${PlayerScore}
                Computerscore: ${ComputerScore}`;

    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            Computer++;
            ComputerScore=Computer;
            PlayerScore=Player;
            round_++;
            round = round_;
            

            return `You lose! Paper beats Rock
                    Playerscore: ${PlayerScore}
                    Computerscore: ${ComputerScore}`;
        } else {
            Player++;
            PlayerScore=Player;
            ComputerScore=Computer;
            round_++;
            round = round_;
            
            return `You win! Rock beats Scissors
                    Playerscore: ${PlayerScore}
                    Computerscore: ${ComputerScore}`;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            Player++;
            PlayerScore = Player;
            ComputerScore=Computer;
            round_++;
            round = round_;
            
            return `You win! paper beats Rock
                    Playerscore: ${PlayerScore}
                    Computerscore: ${ComputerScore}`;
        }
        else {
            Computer++;
            ComputerScore = Computer;
            PlayerScore = Player;
            round_++;
            round = round_;

            return `You lose! Scissors beats Paper
                    Playerscore: ${PlayerScore}
                    Computerscore: ${ComputerScore}`;
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            Player++;
            PlayerScore = Player;
            ComputerScore=Computer;
            round_++;
            round = round_;
            

            return `You win! Scissors beats Paper
                    Playerscore: ${PlayerScore}
                    Computerscore: ${ComputerScore}`;
        }
        else {
            Computer++;
            ComputerScore = Computer;
            PlayerScore = Player;
            round_++;
            round = round_;
            
            return `You lose! Rock beats Scissors
                    Playerscore: ${PlayerScore}
                    Computerscore: ${ComputerScore}`;
        }
    }


}
    
    

let computerSelection;
let PlayerScore = 0;
let ComputerScore = 0;

let Player = PlayerScore;
let Computer = ComputerScore;
let round = 1;
let round_ = round;

let result = document.querySelector('.result');

let choice = ["Rock", "Paper", "Scissors"];

const div = document.querySelector('#container');

    div.addEventListener('click', function(event) {
        let playerSelection;
        console.log(event.target.id);
    switch(event.target) {
        case rock:
            playerSelection = "rock";
            break;
        case paper:
            playerSelection = "paper";
            break;
        case scissors:
            playerSelection = "scissors";
            break;
        default:
            playerSelection = "none";
            break;
    } 
    
   

    console.log("Player selection: ", playerSelection);



    let randomNumber = Math.floor(Math.random() * choice.length);

    
    console.log("Player selection: ", playerSelection);

    console.log("Computer selection: ", getComputerChoice(randomNumber));
        PlayerScore = Player;
        ComputerScore=Computer;
    

    result.textContent = `${playRound(playerSelection, computerSelection, PlayerScore, ComputerScore, round)}`;
}
    );
