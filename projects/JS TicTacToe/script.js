let squares = [];
let symbol = 'X';

function resetGame() {
  for (var i = 0; i < 9; i++) {
    squares[i] = document.getElementById(`square${i}`);
    squares[i].addEventListener('click', myChoice);
    squares[i].innerHTML = '';
    squares[i].removeAttribute('disabled');
  }
}

function myChoice() {
  this.innerHTML = symbol; // choose this square with current symbol
  this.setAttribute('disabled', 'disabled');
  if (isWinner(symbol)) {
    alert(`Player ${symbol} is the winner!`);
    resetGame();
  } else {
    symbol = symbol == 'X' ? 'O' : 'X'; // change symbol for next player
  }
}

function isWinner(symbolToCheck) {
  return (
    (squares[0].innerHTML == symbolToCheck &&
      squares[1].innerHTML == symbolToCheck &&
      squares[2].innerHTML == symbolToCheck) ||
    (squares[0].innerHTML == symbolToCheck &&
      squares[3].innerHTML == symbolToCheck &&
      squares[6].innerHTML == symbolToCheck) ||
    (squares[0].innerHTML == symbolToCheck &&
      squares[4].innerHTML == symbolToCheck &&
      squares[8].innerHTML == symbolToCheck) ||
    (squares[1].innerHTML == symbolToCheck &&
      squares[4].innerHTML == symbolToCheck &&
      squares[7].innerHTML == symbolToCheck) ||
    (squares[2].innerHTML == symbolToCheck &&
      squares[5].innerHTML == symbolToCheck &&
      squares[8].innerHTML == symbolToCheck) ||
    (squares[3].innerHTML == symbolToCheck &&
      squares[4].innerHTML == symbolToCheck &&
      squares[5].innerHTML == symbolToCheck) ||
    (squares[6].innerHTML == symbolToCheck &&
      squares[7].innerHTML == symbolToCheck &&
      squares[8].innerHTML == symbolToCheck) ||
    (squares[2].innerHTML == symbolToCheck &&
      squares[4].innerHTML == symbolToCheck &&
      squares[6].innerHTML == symbolToCheck)
  );
}

resetGame();

document.getElementById(`btn-reset`).addEventListener('click', resetGame);
