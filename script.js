var playerOneD = document.getElementById("player-1");
var playerTwoD = document.getElementById("player-2");
var start = document.getElementById("start");
var final = document.getElementById("gameE");
const displayModule = (function () {
  let arr = [];
  var container = document.createElement("div");
  const gamebord = function () {
    container.classList.add("board");
    document.body.appendChild(container);
    cells(container);
  };
  const cells = function (container) {
    for (i = 1; i <= 3; i++) {
      for (j = 1; j <= 3; j++) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = i;
        cell.dataset.column = j;
        if (cell.dataset.row == cell.dataset.column) {
          cell.dataset.diagonal = "mainDiagonal";
        }
        if (
          (cell.dataset.row == 1 && cell.dataset.column == 3) ||
          (cell.dataset.row == 2 && cell.dataset.column == 2) ||
          (cell.dataset.row == 3 && cell.dataset.column == 1)
        ) {
          cell.dataset.diagonalRev = "reverseDiagonal";
        }

        container.appendChild(cell);
        arr.push(cell);
      }
    }
    displyMark(arr);
  };
  const displyMark = function (tt) {
    tt.forEach((element) => {
      element.addEventListener("click", function () {
        if (element.dataset.clicked == "true") {
          return;
        } else {
          if (i % 2 == 0) {
            element.innerText = "X";
            element.dataset.clicked = "true";
          } else {
            element.dataset.clicked = "true";
            element.innerText = "O";
          }
          i++;
        }
      });
    });
  };
  return { gamebord, arr, container, displyMark };
})();
var startGame = function () {
  start.addEventListener("click", function (e) {
    e.preventDefault();
    var playerOne = playerOneD.value;
    var playerTwo = playerTwoD.value;
    console.log(playerOne);

    displayModule.gamebord();
    checkwinner(displayModule.container, playerOne, playerTwo);
    e.target.parentNode.style.display='none';
  });
};
startGame();

function checkwinner(cont, p1name, p2name) {
  var rowOne = document.querySelectorAll(`div[data-row="1"]`);
  var rowTwo = document.querySelectorAll(`div[data-row="2"]`);
  var rowThree = document.querySelectorAll(`div[data-row="3"]`);
  var columnOne = document.querySelectorAll(`div[data-column="1"]`);
  var columnTwo = document.querySelectorAll(`div[data-column="2"]`);
  var columnThree = document.querySelectorAll(`div[data-column="3"]`);
  var cells = document.getElementsByClassName("cell");
  var mainDiagonal = document.querySelectorAll(
    `div[data-diagonal="mainDiagonal"]`
  );
  var reverseDiagonal = document.querySelectorAll(
    `div[data-diagonal-rev="reverseDiagonal"]`
  );
  var cellsArray = Array.from(cells);
  var rowOneArray = Array.from(rowOne);
  var rowTwoArray = Array.from(rowTwo);
  var rowThreeArray = Array.from(rowThree);
  var columnOneArray = Array.from(columnOne);
  var columnTwoArray = Array.from(columnTwo);
  var columnThreeArray = Array.from(columnThree);
  var mainDiagonalArray = Array.from(mainDiagonal);
  var reverseDiagonalArray = Array.from(reverseDiagonal);
  var wincondition = [
    rowOneArray,
    rowTwoArray,
    rowThreeArray,
    columnOneArray,
    columnTwoArray,
    columnThreeArray,
    mainDiagonalArray,
    reverseDiagonalArray,
  ];
  cont.addEventListener("click", function () {
    let r = wincondition.some(function (item) {
      var check = item.every(function (items) {
        return items.innerText == "X";
      });
      return check;
    });
    let c = wincondition.some(function (item) {
      var check = item.every(function (items) {
        return items.innerText == "O";
      });
      return check;
    });
    let z = cellsArray.every(function (item) {
      return item.innerText == "X" || item.innerText == "O";
    });

    if (c) {
      cont.style.display = "none";
      final.innerText = `winner is ${p1name}`;

      Restart();
    }
    if (r) {
      cont.style.display = "none";
      final.innerText = `winner is ${p2name}`;
      Restart();
    }

    if (c == false && r == false && z) {
      cont.style.display = "none";
      final.innerText = "draw";
      Restart();
    }
  });
}
function Restart() {
  let restart = document.createElement("button");
  document.body.appendChild(restart);
  restart.innerText = "play again";
  restart.classList.add("restart-button");
  restart.addEventListener("click", function (e) {
    window.location.reload();
    e.target.style.display = "none";
  });
}
