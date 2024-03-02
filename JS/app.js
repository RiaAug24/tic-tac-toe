const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const editBtn_player1 = document.getElementById("edit-btn-1");
const editBtn_player2 = document.getElementById("edit-btn-2");

const cancelConfigBtn = document.getElementById("cancel-config-btn");


editBtn_player1.addEventListener("click", openPlayerConfig);
editBtn_player2.addEventListener("click", openPlayerConfig);

cancelConfigBtn.addEventListener("click", closeConfigOverlay);