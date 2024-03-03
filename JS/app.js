let editedPlayer = 0;

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
const startGameBtn = document.getElementById('start-game-btn'); 
const gameBoardLayout = document.getElementById('active-game');
const cancelConfigBtn = document.getElementById("cancel-config-btn");
const formElement = document.querySelector("form");
const errorOutputElement = document.querySelector(".config-error");
const errorPlayerNamesOutput = document.querySelector(".config-error.p-name-err");
editBtn_player1.addEventListener("click", openPlayerConfig);
editBtn_player2.addEventListener("click", openPlayerConfig);

cancelConfigBtn.addEventListener("click", closeConfigOverlay);
formElement.addEventListener("submit", savePlayerConfig);

startGameBtn.addEventListener("click", startNewGame);