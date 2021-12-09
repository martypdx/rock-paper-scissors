// import functions
import { score, generateThrow } from './game.js';

const rockThrow = document.getElementById('rock-throw');
rockThrow.addEventListener('click', () => {
    runGame('rock');
});
rockThrow.addEventListener('mouseenter', () => {
    playSound('./assets/sounds/rock.mp3');
});

const paperThrow = document.getElementById('paper-throw');
paperThrow.addEventListener('click', () => {
    runGame('paper');
});
paperThrow.addEventListener('mouseenter', () => {
    playSound('./assets/sounds/paper.ogg');
});

const scissorsThrow = document.getElementById('scissors-throw');
scissorsThrow.addEventListener('click', () => {
    runGame('scissors');
});
scissorsThrow.addEventListener('mouseenter', () => {
    playSound('./assets/sounds/scissors.wav');
});

const audio = document.getElementById('audio');
function playSound(file) {
    audio.src = file;
    audio.play();
}

const results = document.getElementById('results');
const playerThrow = document.getElementById('player-throw');
const computerThrow = document.getElementById('computer-throw');
const resultImage = document.getElementById('result-image');

function runGame(player) {
    const computer = generateThrow();
    const result = score(player, computer);

    results.classList.remove('hidden');
    playerThrow.src = `assets/images/${player}.jpeg`;
    computerThrow.src = `assets/images/${computer}.jpeg`;
    resultImage.src = `assets/images/${result}.jpeg`;
    
    setStatus(playerThrow, result === 'player');
    setStatus(computerThrow, result === 'computer');
    
    if (result === 'player') {
        playSound('./assets/sounds/win.mp3');
    }
    else if (result === 'computer') {
        playSound('./assets/sounds/lose.mp3');
    }
    else {
        playSound('./assets/sounds/tie.mp3');
    }

}

function setStatus(element, isWinner) {
    const topLevelElement = element.parentElement.parentElement;
    if (isWinner) {
        topLevelElement.classList.add('winner');
    }
    else {
        topLevelElement.classList.remove('winner');
    }
}