let player1 = [1, 1];
let player2 = [1, 1];

function displayGame() {
    document.getElementById('game').innerHTML = `
        Player 1: ${player1[0]} ${player1[1]}<br>
        Player 2: ${player2[0]} ${player2[1]}<br>
        <button onclick="play(1, 0)">Player 1 tap Player 2 (Left)</button>
        <button onclick="play(1, 1)">Player 1 tap Player 2 (Right)</button>
        <button onclick="play(2, 0)">Player 2 tap Player 1 (Left)</button>
        <button onclick="play(2, 1)">Player 2 tap Player 1 (Right)</button>
    `;
}

function play(player, hand) {
    if (player === 1) {
        player2[hand] = (player2[hand] + player1[0]) % 5;
    } else {
        player1[hand] = (player1[hand] + player2[0]) % 5;
    }
    displayGame();
    checkWin();
}

function checkWin() {
    if (player1[0] === 0 && player1[1] === 0) {
        document.getElementById('result').innerText = "Player 2 wins!";
    } else if (player2[0] === 0 && player2[1] === 0) {
        document.getElementById('result').innerText = "Player 1 wins!";
    }
}

displayGame();
