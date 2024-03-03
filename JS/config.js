function openPlayerConfig(e) {
  editedPlayer = +e.target.dataset.playerid; //If we use data-player-id,
                                     // Then we write dataset['player-id']
  errorOutputElement.textContent = "";
  playerConfigOverlay.style.display = "block";
  backdropElement.style.display = "block";
}

function closeConfigOverlay() {
  playerConfigOverlay.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("checked");
  formElement.firstElementChild.classList.remove("error");
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(e) {
  //e -> event
  e.preventDefault();
  const formData = new FormData(e.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    formElement.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;
  // players.forEach(player => {
  //     console.log(player)
  // });
  closeConfigOverlay();
}
