function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (userChoice === computerChoice) {
        result = `It's a tie! You both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice}.`;
    }

    document.getElementById('result').innerText = result;
}
