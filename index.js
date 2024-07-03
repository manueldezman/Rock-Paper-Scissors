function getComputerChoice(randomNumber) {
    computerSelection = choice[randomNumber];
    return computerSelection;
} 

function checkEndPoint(PlayerScore, ComputerScore){

    if (PlayerScore == 5){

        ultimateScore.textContent = `You Win!
        
        Player: ${PlayerScore}
        Computer: ${ComputerScore}`;
        
        playButton.textContent = "Play Again";
        modalDiv.style.display = "block";
        
    }
    else if (ComputerScore == 5) {
        ultimateScore.textContent = `You Lose!
        
        Player: ${PlayerScore}
        Computer: ${ComputerScore}`;
        
        playButton.textContent = "Play Again";
        modalDiv.style.display = "block";
    }
}



function playRound(playerSelection, computerSelection, PlayerScore, ComputerScore, round) {
    playerSelection = playerSelection.toLowerCase();
    console.log(computerSelection);
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
            ComputerScore=Computer;
            PlayerScore=Player;
            round_++;
            round = round_;
            pscore.textContent = `${PlayerScore}`;
            cscore.textContent = `${ComputerScore}`;
            checkEndPoint(PlayerScore, ComputerScore);
        return `It's a tie!`;

    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            Computer++;
            ComputerScore=Computer;
            PlayerScore=Player;
            round_++;
            round = round_;
            pscore.textContent = `${PlayerScore}`;
            cscore.textContent = `${ComputerScore}`;
            checkEndPoint(PlayerScore, ComputerScore);

            return `You lose! Paper beats Rock`;
        } else {
            Player++;
            PlayerScore=Player;
            ComputerScore=Computer;
            round_++;
            round = round_;
            pscore.textContent = `${PlayerScore}`;
            cscore.textContent = `${ComputerScore}`;
            checkEndPoint(PlayerScore, ComputerScore);
            
            return `You win! Rock beats Scissors`;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            Player++;
            PlayerScore = Player;
            ComputerScore=Computer;
            round_++;
            round = round_;
            pscore.textContent = `${PlayerScore}`;
            cscore.textContent = `${ComputerScore}`;
            checkEndPoint(PlayerScore, ComputerScore);
            
            return `You win! paper beats Rock`;
        }
        else {
            Computer++;
            ComputerScore = Computer;
            PlayerScore = Player;
            round_++;
            round = round_;
            pscore.textContent = `${PlayerScore}`;
            cscore.textContent = `${ComputerScore}`;
            checkEndPoint(PlayerScore, ComputerScore);

            return `You lose! Scissors beats Paper`;
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            Player++;
            PlayerScore = Player;
            ComputerScore=Computer;
            round_++;
            round = round_;
            pscore.textContent = `${PlayerScore}`;
            cscore.textContent = `${ComputerScore}`;
            checkEndPoint(PlayerScore, ComputerScore);
            

            return `You win! Scissors beats Paper`;
        }
        else {
            Computer++;
            ComputerScore = Computer;
            PlayerScore = Player;
            round_++;
            round = round_;
            pscore.textContent = `${PlayerScore}`;
            cscore.textContent = `${ComputerScore}`;
            checkEndPoint(PlayerScore, ComputerScore);
            
            return `You lose! Rock beats Scissors`;
        }
    }


}
    
const pscore = document.querySelector("#playerscore");
const cscore = document.querySelector("#computerscore");
const modalDiv = document.querySelector(".modal");
const playButton = document.querySelector(".playButton");
const ultimateScore = document.querySelector(".finalResult");

let computerSelection;
let PlayerScore = 0;
let ComputerScore = 0;

let Player = PlayerScore;
let Computer = ComputerScore;
let round = 1;
let round_ = round;

let result = document.querySelector('.result');
let playerImage = document.querySelector(".playerChoice");
let computerImage = document.querySelector(".computerChoice");


let choice = ["rock", "paper", "scissors"];

const div = document.querySelector('#container');

    playButton.addEventListener('click', () => 
    {
        ComputerScore = 0;
        PlayerScore = 0;
        Player = 0;
        Computer = 0;
        pscore.textContent = 0;
        cscore.textContent = 0;
        modalDiv.style.display = "none";
    });

    div.addEventListener('click', function(event) {
        let playerSelection;
        let randomNumber = Math.floor(Math.random() * choice.length);        
        console.log(event.target.id);

    switch(event.target.id) {
        case "rock":
            playerImage.classList.remove("fa-hand");
            playerImage.classList.remove("fa-hand-scissors");
            playerSelection = "rock";
            playerImage.classList.add("fa-hand-back-fist");
            break;
        case "paper":
            playerImage.classList.remove("fa-hand-back-fist");
            playerImage.classList.remove("fa-hand-scissors");
            playerSelection = "paper";
            playerImage.classList.add("fa-hand");

            break;
        case "scissors":
            playerImage.classList.remove("fa-hand");
            playerImage.classList.remove("fa-hand-back-fist");
            playerSelection = "scissors";
            playerImage.classList.add("fa-hand-scissors");
            break;
        default:
            playerSelection = "none";
            break;
    } 
    
    console.log("Player selection: ", playerSelection);

    console.log("Computer selection: ", getComputerChoice(randomNumber));

    switch(computerSelection) {
        case "rock":
            computerImage.classList.remove("fa-hand");
            computerImage.classList.remove("fa-hand-scissors");
            computerImage.classList.add("fa-hand-back-fist");
            break;
        case "paper":
            computerImage.classList.remove("fa-hand-back-fist");
            computerImage.classList.remove("fa-hand-scissors");
            computerImage.classList.add("fa-hand");
            break;
        case "scissors":
            computerImage.classList.remove("fa-hand");
            computerImage.classList.remove("fa-hand-back-fist");
            computerImage.classList.add("fa-hand-scissors");
            break;
        default:
            playerSelection = "none";
            break;
    } 
        PlayerScore = Player;
        ComputerScore=Computer;
    

    result.textContent = `${playRound(playerSelection, computerSelection, PlayerScore, ComputerScore, round)}`;
    console.log(`computer: ${Player} - player: ${Computer}`);
}
    );
