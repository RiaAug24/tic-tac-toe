function startNewGame() {
  errorPlayerNamesOutput.classList.add("hidden");
  if (players[0].name === "" || players[1].name === "") {
    errorPlayerNamesOutput.classList.remove("hidden");
    return;
  }
  activePlayerName.textContent = players[activePlayer].name;
  gameBoardLayout.style.display = "block";
}

function switchPlayer() {
  activePlayer = activePlayer === 1 ? 0 : 1;
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(e) {
  const selectedField = e.target;

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
  console.log(gameData);

  switchPlayer();
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
}
