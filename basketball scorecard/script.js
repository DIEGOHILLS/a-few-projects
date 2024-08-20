function addOnePoint(scoreId) {
    let scoreElement = document.getElementById(scoreId);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + 1;
}

function addTwoPoints(scoreId) {
    let scoreElement = document.getElementById(scoreId);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + 2;
}

function addThreePoints(scoreId) {
    let scoreElement = document.getElementById(scoreId);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + 3;
}

function resetScore(scoreId) {
    let scoreElement = document.getElementById(scoreId);
    scoreElement.textContent = 0;
}
