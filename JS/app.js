const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let gameIsOver = false;
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const editBtn_player1 = document.getElementById("edit-btn-1");

const editBtn_player2 = document.getElementById("edit-btn-2");
const startGameBtn = document.getElementById("start-game-btn");
const gameBoardLayout = document.getElementById("active-game");
const cancelConfigBtn = document.getElementById("cancel-config-btn");
const formElement = document.querySelector("form");
const errorBoxMsg = document.querySelector(".config-error.p-board-err");
const gameOverMsg = document.getElementById("game-over");

const errorOutputElement = document.querySelector(".config-error");
const errorPlayerNamesOutput = document.querySelector(
  ".config-error.p-name-err"
);



const activePlayerName = document.getElementById("active-player-name");
const gameBoardElement = document.getElementById("game-board");


editBtn_player1.addEventListener("click", openPlayerConfig);
editBtn_player2.addEventListener("click", openPlayerConfig);

cancelConfigBtn.addEventListener("click", closeConfigOverlay);
formElement.addEventListener("submit", savePlayerConfig);

startGameBtn.addEventListener("click", startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener('click', selectGameField)
// }

gameBoardElement.addEventListener("click", selectGameField);
