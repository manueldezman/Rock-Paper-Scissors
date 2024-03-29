function getComputerChoice(randomNumber) {
    computerSelection = choice[randomNumber];
    return computerSelection;
} 

function playRound(playerSelection, computerSelection, PlayerScore, ComputerScore) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
            ComputerScore=Computer;
            PlayerScore=Player;
        
        return `It's a tie!
                Playerscore: ${PlayerScore}
                Computerscore: ${ComputerScore}`;

    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            Computer++;
            ComputerScore=Computer;
            PlayerScore=Player;
            

            return `You lose! Paper beats Rock
                    Playerscore: ${PlayerScore}
                    Computerscore: ${ComputerScore}`;
        } else {
            Player++;
            PlayerScore=Player;
            ComputerScore=Computer;
            
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
            
            return `You win! paper beats Rock
                    Playerscore: ${PlayerScore}
                    Computerscore: ${ComputerScore}`;
        }
        else {
            Computer++;
            ComputerScore = Computer;
            PlayerScore = Player;

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
            

            return `You win! Scissors beats Paper
                    Playerscore: ${PlayerScore}
                    Computerscore: ${ComputerScore}`;
        }
        else {
            Computer++;
            ComputerScore = Computer;
            PlayerScore = Player;
            
            return `You lose! Rock beats Scissors
                    Playerscore: ${PlayerScore}
                    Computerscore: ${ComputerScore}`;
        }
    }
}

function PlayGame() {
    
    let round;
    let roundLimit = 5;
    


    for (round = 1; round <= roundLimit; round++) {
        console.log("Round: ", round);
        
        
        let randomNumber = Math.floor(Math.random() * choice.length);

        let playerSelection = prompt("Input your pick: ");
        
        console.log("Player selection: ", playerSelection);

        console.log("Computer selection: ", getComputerChoice(randomNumber));

        console.log("Result: ", playRound(playerSelection, computerSelection, PlayerScore, ComputerScore));

    
    }
            PlayerScore = Player;
            ComputerScore=Computer;
    

    if (PlayerScore > ComputerScore){
        console.log(`
                    You Win!

                    Final Score:
                    
                    Player: ${PlayerScore}
                    Computer: ${ComputerScore}
        `)
    }
    else if (ComputerScore > PlayerScore) {
                console.log(`
                    You lose

                    Final Score:
                    
                    Player: ${PlayerScore}
                    Computer: ${ComputerScore}
        `)
    }
    else {
        console.log(`
                    It ends in  a draw

                    Final Score:
                    
                    Player: ${PlayerScore}
                    Computer: ${ComputerScore}
        `)
    }
    

    
}

let computerSelection
let PlayerScore = 0;
let ComputerScore = 0;

let Player = PlayerScore;
let Computer = ComputerScore;


let choice = ["Rock", "Paper", "Scissors"];

PlayGame();
  
