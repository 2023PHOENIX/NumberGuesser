let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    const randomInteger = Math.floor(Math.random(0, 1) * 9);
    return randomInteger;
}
const getAbsoluteDistance = (a,b) => {
    return Math.abs(a-b);
}
const compareGuesses = (human_guess, computer_guess, secret_target) => {
    if(human_guess < 0 || human_guess > 9){
        alert('out of range.. please enter between 0 to 9');
    }
    
    const hG = getAbsoluteDistance(human_guess,secret_target)
    const cG = getAbsoluteDistance(computer_guess,secret_target)
    return (hG > cG) ? false : true;
}


const updateScore = (winner) => {
    (winner === 'human') ? humanScore += 1: computerScore += 1;
}

const advanceRound = () =>{
    currentRoundNumber += 1;
}