var playerOneD = document.getElementById("player-1");
var playerTwoD = document.getElementById("player-2");
var start = document.getElementById("start");
var final = document.getElementById("gameE");

const displayModule = (function () {
  var arr = [];
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
console.log(arr)
  return { gamebord, arr, container };
})();

function namee(params, cont, playerOneName, playerTwoName) {
  params.forEach((element) => {
    element.addEventListener("click", function () {
      if (
        params[0].innerText == "X" &&
        params[1].innerText == "X" &&
        params[2].innerText == "X"
      ) {
        cont.style.display = "none";

        final.innerText = `winner is ${playerOneName}`;
      } else if (
        params[3].innerText == "X" &&
        params[4].innerText == "X" &&
        params[5].innerText == "X"
      ) {
        cont.style.display = "none";
        final.innerText = `winner is ${playerOneName}`;
      } else if (
        params[6].innerText == "X" &&
        params[7].innerText == "X" &&
        params[8].innerText == "X"
      ) {
        cont.style.display = "none";
        final.innerText = `winner is ${playerOneName}`;
      } else if (
        params[0].innerText == "X" &&
        params[3].innerText == "X" &&
        params[6].innerText == "X"
      ) {
        cont.style.display = "none";
        final.innerText = `winner is ${playerOneName}`;
      } else if (
        params[1].innerText == "X" &&
        params[4].innerText == "X" &&
        params[7].innerText == "X"
      ) {
        cont.style.display = "none";
        final.innerText = `winner is ${playerOneName}`;
      } else if (
        params[2].innerText == "X" &&
        params[5].innerText == "X" &&
        params[8].innerText == "X"
      ) {
        cont.style.display = "none";
        final.innerText = `winner is ${playerOneName}`;
      } else if (params[4].innerText == "X" && params[8].innerText == "X") {
        cont.style.display = "none";
        final.innerText = `winner is ${playerOneName}`;
      } else if (
        params[2].innerText == "X" &&
        params[4].innerText == "X" &&
        params[6].innerText == "X"
      ) {
        cont.style.display = "none";
        final.innerText = `winner is ${playerOneName}`;
      } else if (
        params[0].innerText == "O" &&
        params[1].innerText == "O" &&
        params[2].innerText == "O"
      ) {
        cont.style.display = "none";
        final.innerText = `winner is ${playerTwoName}`;
      } else if (
        params[3].innerText == "O" &&
        params[4].innerText == "O" &&
        params[5].innerText == "O"
      ) {
        cont.style.display = "none";
        final.innerText = `winner is ${playerTwoName}`;
      } else if (
        params[6].innerText == "O" &&
        params[7].innerText == "O" &&
        params[8].innerText == "O"
      ) {
        cont.style.display = "none";
        final.innerText = `winner is ${playerTwoName}`;
      } else if (
        params[0].innerText == "O" &&
        params[3].innerText == "O" &&
        params[6].innerText == "O"
      ) {
        cont.style.display = "none";
        final.innerText = `winner is ${playerTwoName}`;
      } else if (
        params[1].innerText == "O" &&
        params[4].innerText == "O" &&
        params[7].innerText == "O"
      ) {
        cont.style.display = "none";
        final.innerText =`winner is ${playerTwoName}`
      } else if (
        params[2].innerText == "O" &&
        params[5].innerText == "O" &&
        params[8].innerText == "O"
      ) {
        cont.style.display = "none";
        final.innerText = `winner is ${playerTwoName}`;
      } else if (
        params[0].innerText == "O" &&
        params[4].innerText == "O" &&
        params[8].innerText == "O"
      ) {
        cont.style.display = "none";
        final.innerText = `winner is ${playerTwoName}`;
      } else if (
        params[2].innerText == "O" &&
        params[4].innerText == "O" &&
        params[6].innerText == "O"
      ) {
        cont.style.display = "none";
        final.innerText = `winner is${playerTwoName}`;
      } else {
        let x = params.every(function (item) {
          return item.innerText == "X" || item.innerText == "O";
        });
        if (x) {
          cont.style.display = "none";
          final.innerText='tie'
        }
      }
    });
  });
}
var startGame = function () {
  start.addEventListener("click", function (e) {
    var playerOneName = playerOneD.value;
    var playerTWoName = playerTwoD.value;

    displayModule.gamebord();
    namee(
      displayModule.arr,
      displayModule.container,
      playerOneName,
      playerTWoName
    );

    e.preventDefault();
    e.target.parentNode.remove();
  });
};

startGame();
