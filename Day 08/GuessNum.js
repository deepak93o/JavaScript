let randomNum = parseInt(Math.random() * 100 + 1);
// console.log(randomNum);
const submit =  document.querySelector('#submit')
const input = document.querySelector('#guessField')

const preGuess = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let countGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        console.log(guess);
        validateGuess(guess);
    });

}
function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid Number')
    }
    else if(guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
    }
    else {
        prevGuess.push(guess);
        if(countGuess === 11) {
            displayGuess(guess);
            displayMsg(`Game Over! The number was ${randomNum}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNum) {
        displayMsg('Congratulations! You got it right!');
        endGame();
    }
    else if(guess < randomNum) {
        displayMsg('Too low! Try again!');
    }
    else if(guess > randomNum) {
        displayMsg('Too High! Try again!');
    }
}

function displayGuess(guess) {
    input.value = '';
    preGuess.innerHTML += `${guess} `;
    countGuess++;
    lastResult.innerHTML = `${11 - countGuess}`
}
function displayMsg(msg) {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function(e){
        let randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        countGuess = 1;
        preGuess.innerHTML = '';
        lastResult.innerHTML = `${11 - countGuess}`;
        input.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

function endGame() {
    input.value = '';
    input.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML =`<h2 id= "newGame"> Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
   
}