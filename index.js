
//pri klik sa mení styl políčka, ale po zídení sa vráti do pôvod. podoby

/*const playerNav = document.querySelector('.hrac__nav');
playerNav.innerHTML = `<p>HRAJE:</p>
<img class="ikona__hra" src="${player}.svg" alt="${player}-icon"/>`*/


/* btnElm.forEach((btn)=>
  btn.addEventListener('click',(ev)=>{
    if (player === 'circle') {
      ev.target.classList.add('board__field--circle');
      const playerIcon = document.querySelector('.ikona__hra');
      playerIcon.src = 'cross.svg';
      player = 'cross';
    }
    else {
        ev.target.classList.add('board__field--cross');
        const playerIcon = document.querySelector('.ikona__hra');
        playerIcon.src = 'circle.svg';
        player = 'circle';
      }}),
  ) */

const btnElm = document.querySelectorAll('button');
let player = 'circle';

for (let i = 0; i < btnElm.length; i += 1) {
  btnElm[i].addEventListener('click', (ev) => {
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
    btnElm[i].disabled = true
    });
   }
