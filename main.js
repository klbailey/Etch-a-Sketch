const clearBtn = document.querySelector('.clear');
const setGridBtn = document.querySelector('.setBoard');
const board = document.querySelector(".board");
let shadeColorIsOn = false;

//Create Board
function createBoard(num=16){
    //repeat the number min 0px max fraction eg. 1/16
    board.style.gridTemplateColumns = `repeat(${num}, minmax(0px, 1fr))`;
}

//Board / grid with color teal via targeting affected element
function backColor(color) {
    return function(e) {
        e.target.style.backgroundColor = color;
    }
}

//Add trail color from mouse
function addMouseoverToGrids() {
    const grids = document.querySelectorAll(".grid");
    if (shadeColorIsOn == true) {
        grids.forEach(element=> element.addEventListener('mouseover', backColor('rbg(128, 128, 128)')));
    } else {
        grids.forEach(element=> element.addEventListener('mouseover', backColor('rgb(0, 0, 0)')));
    }
}

//Change board size
function changeBoardSize() {
    //puts between 2-100 string inside prompt user will enter integer
    let newBoardSize = parseInt(prompt("Please enter a number:", "between 2-100."));
    if (newBoardSize < 2 || newBoardSize > 100 || !newBoardSize) {
        newBoardSize = 16;
    }
    //sets empty string as innerHTML, can remove children of element
    board.innerHTML = "";
    createDivs(newBoardSize);
    addMouseoverToGrids();
    createBoard(newBoardSize);
}

// Reset board
function resetBoard() {
  while(board.firstChild) {
    board.removeChild(board.lastChild);
  }

    let newBoardSize = parseInt(prompt("Please enter a number:", "between 2-100"));
    if (newBoardSize < 2 || newBoardSize > 100 || !newBoardSize) {
        newBoardSize = 16;
    }
    board.innerHTML = "";
    createDivs(newBoardSize);
    addMouseoverToGrids();
    createBoard(newBoardSize);
}

//Change the board size and take a prompt value as the number
function createDivs(num=16) {
    for (let i = 1; i <= num * num; i++) {
        let div = document.createElement("div");
        div.style.border = "black solid 1px";
        div.classList.add("grid");
        board.appendChild(div);
    }
}

//Initializes board
function init() {
    createDivs();
    addMouseoverToGrids();
    createBoard();
}

setGridBtn.addEventListener('click', function() {
    changeBoardSize();
});

clearBtn.addEventListener('click', function() {
    resetBoard();
});

window.addEventListener('load', init());
