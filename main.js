function getComputerChoice(){
    var rand = Math.floor(Math.random() * 3) + 1;
    switch (rand){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function play(cChoice, pChoice){
    pChoice = pChoice.toLowerCase();

    if(cChoice == pChoice){
        console.log("It's a tie!");
    } else if (cChoice === "rock" && pChoice === "paper"){
        console.log("You Win! Paper beats rock");
    }else if (cChoice === "scissors" && pChoice === "paper"){
        console.log("You lose! Scissors beats paper");
    }else if (cChoice === "rock" && pChoice === "scissors"){
        console.log("You lose! Rock beats scissors");
    }else if (cChoice === "paper" && pChoice === "scissors"){
        console.log("You win! Scissors beats paper");
    }else if (cChoice === "scissors" && pChoice === "rock"){
        console.log("You win! Rock beats scissors");
    }else if (cChoice === "paper" && pChoice === "rock"){
        console.log("You lose! Paper beats rock");
    }else{
        console.log("What happened here?");
    }
}