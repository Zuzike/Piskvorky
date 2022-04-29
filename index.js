const btnElms = document.querySelectorAll('button');
let player = 'circle';

for (let i = 0; i < btnElms.length; i += 1) {
  btnElms[i].addEventListener('click', (ev) => {
    if (player === 'circle') {
      ev.target.classList.add('board__field--circle');
      const playerIcon = document.querySelector('.ikona__hra');
      playerIcon.src = 'cross.svg';
      player = 'cross';
    } else {
      ev.target.classList.add('board__field--cross');
      const playerIcon = document.querySelector('.ikona__hra');
      playerIcon.src = 'circle.svg';
      player = 'circle';
    }
    btnElms[i].disabled = true;
    if (isWinningMove(btnElms[i]) === true) {
      let player = getSymbol(btnElms[i]);

      if (player === 'cross') {
        //alert('Vyhrál křížek');
        const win1 = () => {
          alert('Vyhrál křížek');
        };
        setTimeout(win1, 300);
        return;
      }
      const win2 = () => {
        alert('Vyhrál kroužek');
      };
      setTimeout(win2, 300);
    }
    //console.log(isWinningMove(btnElms[i]));
    //console.log(getSymbol(btnElms[i]))
    //console.log(getSymbol(ev.target))
  });
}

//console.log(btnElms[21])

const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};
//console.log(document.querySelector('button').getAttribute('class'))
//console.log(getSymbol(btnElms[0]))

//Array.from(document.querySelectorAll('button'));

const boardSize = 10;
const getField = (row, column) => {
  return btnElms[row * boardSize + column];
};
//console.log(getField(1, 2));

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < btnElms.length && field !== btnElms[fieldIndex]) {
    fieldIndex++;
  }
  //console.log(fieldIndex)
  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};
//console.log(getPosition(getField(2, 4)))

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};
