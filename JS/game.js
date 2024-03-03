function startNewGame() {
  errorPlayerNamesOutput.classList.add('hidden'); 
  if(players[0].name === '' || players[1].name === '') {
    errorPlayerNamesOutput.classList.remove('hidden'); 
    return;
  }
    gameBoardLayout.style.display = 'block';
}