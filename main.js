console.clear();
console.log('Sveiki');

const mapDOM = document.querySelector('.chessmap');
const whiteDOM = mapDOM.querySelector('.white');
const blackDOM = mapDOM.querySelector('.black');

const black = `<div style="height: 50px; width: 50px; background-color: black;" class="black"></div>`;
const white = `<div style="height: 50px; width: 50px; background-color: white;" class="black"></div>`;

mapDOM.innerHTML += black;

function mapSize(size = 8) {
  let chessSize = size * size;
  let board = '';

  for (let i = 0; i < chessSize; i++) {
    if (i % size === 0 && i !== 0) {
      board += `\n`;
    }
    if (i % 2 === 0) {
      board += black;
    } else {
      board += white;
    }
  }

  return mapDOM.innerHTML = board;
}

console.log(whiteDOM);
console.log(blackDOM);
console.log(mapSize());