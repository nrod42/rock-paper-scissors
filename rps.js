function computerPlay () {
    let compRandom = Math.random();
    return (compRandom <= 0.33) ? 'rock' 
    : (compRandom <= 0.67) ? 'paper' 
    : 'scissors';
}

function playRound(playerSelection, computerSelection){

    switch (playerSelection) {
        case computerSelection:
            result = 'tie'
            break;
        case 'rock' :
            switch(computerSelection) {
                case 'scissors':
                    result = 'win';
                    break;
                case 'paper':
                    result = 'lose';
                    break;
            }
            break;
        case 'paper':
            switch(computerSelection) {
                case 'rock':
                    result = 'win';
                    break;
                case 'scissors':
                    result = 'lose';
                    break;
            }
            break;
        case 'scissors':
            switch(computerSelection) {
                case 'paper':
                    result = 'win';
                    break;
                case 'rock':
                    result = 'lose';
                    break;
            }
            break;
        default:
            result  = 'Not valid, please enter either rock, paper, or scissors'
            break;
    }
    return result;
}

let win = 0;
let lose = 0;
let tie = 0;
let round = 0;
let score;

function game() {
    
    while (round < 5) {
        playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        computerSelection = computerPlay();

        roundResult = playRound(playerSelection,computerSelection)
        switch (roundResult) {
            case 'win':
                win++;
                break;
            case 'lose':
                lose++;
                break;
            case 'tie':
                tie++
                break;
        }
        //console.log(playerSelection,computerSelection)
        round++
    }

    score = 'Wins: ' + win + ' ' + 'Losses: ' + lose + ' ' + 'Ties: ' + tie;
    if (win > lose) return 'You Win!\n' + score;
    return 'You Lose!\n' + score;
}

alert(game());