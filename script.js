const btn1 = document.querySelector(".rock");
const btn2 = document.querySelector(".paper");
const btn3 = document.querySelector(".scissor");
const resultOutput = document.getElementById("results-msg");
const resultMsg = document.getElementById("result-msg");
const winnerMsg = document.getElementById("winner-msg");
const resetbtn = document.getElementById("resetbtn");
const optionContainer = document.querySelector(".gameContainer");

const score1 = document.querySelector(".score1player");
const score2 = document.querySelector(".score2computer");

let playerScore =0;
let computerScore =0;

//rock beats scissor
//paper beats rock
//scissor beats paper
  

function getComputerChoice(){ 
    const choice = ["Rock","Paper", "Scissor"];
    const index = Math.floor(0 + Math.random()*3);
    return choice[index];

}

function playerWins(player, computer){
   return (
    (player === "Rock" && computer === "Scissor")||
    (player === "Paper" && computer === "Rock")||
    (player === "Scissor" && computer === "Paper")
   );
}

function getResults(UserChoice){
    const computerChoice = getComputerChoice();

    let HtMLString =""; 
    if(playerWins(UserChoice, computerChoice)){
        playerScore++;
         HtMLString =  `
       Horrayyy !! You wins! ${UserChoice} beats ${computerChoice}`;
    }
    else if(UserChoice === computerChoice){
        HtMLString =  `
       It's a tie! Both chose [player's choice] ${player} `;
    }
    else{
        computerScore++;
        HtMLString =  `
        Computer wins! ${computerChoice} beats ${UserChoice}`;
    }
    return HtMLString;

}
 
function showResults(UserChoice){
     resultMsg.innerHTML = getResults(UserChoice);
     score1.innerHTML = playerScore;    
     score2.innerHTML = computerScore;

     if(playerScore === 3 || computerScore === 3){
        winnerMsg.innerHTML =  `${playerScore ===3 ? "Player" : "Computer"} has won the Game !`;
        resetbtn.style.display ="block";
        optionContainer.style.display ="none";

    }
}
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    score1.innerHTML = playerScore;
    score2.innerHTML = computerScore;
    resetbtn.style.display ="";
    optionContainer.style.display ="block";
    winnerMsg.innerHTML = "";
    resultMsg.innerHTML ="";
};


btn1.addEventListener("click",function(){
       showResults("Rock");
});
btn2.addEventListener("click",function(){
       showResults("Paper");
});
btn3.addEventListener("click",function(){
       showResults("Scissor");
});

resetbtn.addEventListener("click", resetGame);

 
 
function myFunction() { 
   var element = document.body;
   element.classList.toggle("dark-mode");
}
 