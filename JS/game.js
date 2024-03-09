function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOverMsg.firstElementChild.innerHTML =
    'You Won, <span id="winner-name">PLAYER NAME</span>!';

  let gameBoardIndex = 0;

  gameOverMsg.style.display = "none";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  errorPlayerNamesOutput.classList.add("hidden");
  if (players[0].name === "" || players[1].name === "") {
    errorPlayerNamesOutput.classList.remove("hidden");
    return;
  }
  resetGameStatus();
  activePlayerName.textContent = players[activePlayer].name;
  gameBoardLayout.style.display = "block";
}

function switchPlayer() {
  activePlayer = activePlayer === 1 ? 0 : 1;
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(e) {
  const selectedField = e.target;
  if (gameIsOver === true) return;

  if (selectedField.textContent === "X" || selectedField.textContent === "O") {
    errorBoxMsg.classList.remove("hidden");
    return;
  } else {
    errorBoxMsg.classList.add("hidden");
  }

  if (selectedField.tagName !== "LI") {
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  const selectedCol = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  gameData[selectedRow][selectedCol] = activePlayer + 1;
  const winnerId = checkForGameOver();

  if (winnerId != 0) {
    gameOverScreen(winnerId);
  }

  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  //checking for rows equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  //checking for columns equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  //Left-Diagonal Check

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  //Right-Diagonal Check
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function gameOverScreen(winnerId) {
  gameIsOver = true;
  if (winnerId < 0) {
    gameOverMsg.firstElementChild.innerHTML = "It's a Draw!";
  } else {
    const winnerName = players[winnerId - 1].name;
    gameOverMsg.firstElementChild.innerHTML = `
      You won! <span id="winner-name">${winnerName}</span>
    `;
  }
  gameOverMsg.style.display = "block";
}
