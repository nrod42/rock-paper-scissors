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

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const body = document.querySelector('body');
const scoreboard = document.createElement('div')
body.appendChild(scoreboard);

let win = 0;
let lose = 0;
let tie = 0;
let result;
let score;

function roundResult(e) {
    playerSelection = e.target.className;
    computerSelection = computerPlay();
    document.getElementById("compIcon").src = `./img/${computerSelection}.png`;
    result = playRound(playerSelection,computerSelection);
    if (result === 'win') {
        win++;
    }
    if (result === 'lose') {
        lose++;
    }
    if (result === 'tie') {
        tie++;
    }
    score = 'Wins: ' + win + ' ' + 'Losses: ' + lose + ' ' + 'Ties: ' + tie;
    scoreboard.textContent = score;
    if (win >= 5) {
        scoreboard.textContent = 'Congrats, Youve Won!'
        win = 0;
        lose = 0;
        tie = 0;
    }
    if (lose >= 5) {
        scoreboard.textContent = 'Oof, sorry you lost!'
        win = 0;
        lose = 0;
        tie = 0;
    }

     
}

rock.addEventListener('click', roundResult);
paper.addEventListener('click', roundResult);
scissors.addEventListener('click', roundResult);