console.clear();
console.log('Sveiki');

const mapDOM = document.querySelector('.chessmap');
const whiteDOM = mapDOM.querySelector('.white');
const blackDOM = mapDOM.querySelector('.black');

const black = `<div style="display: inline-block; height: 50px; width: 50px; background-color: black;"></div>`;
const white = `<div style="display: inline-block; height: 50px; width: 50px; background-color: white;"></div>`;



//mapDOM.innerHTML += black;

function mapSize(size = 8) {
    let chessSize = size * size;
    let arr = Array(chessSize);
    let board1 = '';
    let board2 = '';
    let board = [];
    
  
    for (let i = 0; i < arr.length; i++) {
      if(i % 2 === 0){
        board += black + white;
      }
    }
    return mapDOM.innerHTML = board;
  }
  
  console.log(whiteDOM);
  console.log(blackDOM);
  console.log(mapSize(8));