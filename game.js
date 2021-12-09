
export function score(player, computer) {
    // player win
    if (player === 'rock' && computer === 'scissors') {
        return 'player';
    }
    if (player === 'paper' && computer === 'rock') {
        return 'player';
    }
    if (player === 'scissors' && computer === 'paper') {
        return 'player';
    }
    // computer win
    if (player === 'rock' && computer === 'paper') {
        return 'computer';
    }
    if (player === 'paper' && computer === 'scissors') {
        return 'computer';
    }
    if (player === 'scissors' && computer === 'rock') {
        return 'computer';
    }
    // tie
    return 'tie';
}

const throws = ['rock', 'paper', 'scissors'];

export function generateThrow() {
    const index = getRandomIntInclusive(0, 2);
    return throws[index];
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
  