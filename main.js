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
        return null;
    } else if (cChoice === "rock" && pChoice === "paper"){
        console.log("You Win! Paper beats rock");
        return true;
    }else if (cChoice === "scissors" && pChoice === "paper"){
        console.log("You lose! Scissors beats paper");
        return false;
    }else if (cChoice === "rock" && pChoice === "scissors"){
        console.log("You lose! Rock beats scissors");
        return false;
    }else if (cChoice === "paper" && pChoice === "scissors"){
        console.log("You win! Scissors beats paper");
        return true;
    }else if (cChoice === "scissors" && pChoice === "rock"){
        console.log("You win! Rock beats scissors");
        return true;
    }else if (cChoice === "paper" && pChoice === "rock"){
        console.log("You lose! Paper beats rock");
        return false;
    }else{
        console.log("What happened here?");
        return null;
    }
}

function game(){
    let pScore = 0;
    let cScore = 0;

    for(let i = 0; i < 5; i++){
        cChoice = getComputerChoice();
        pChoice = prompt(message = "Enter your choice");
        switch(play(cChoice, pChoice)){
            case true:
                pScore++;
                break;
            case false:
                cScore++;
                break;
            default:
                break;
        }

        setTimeout (1000);

    }
    console.log("The score is Player: " + pScore + " Computer: " + cScore);
}

game();