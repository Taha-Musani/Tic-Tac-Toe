let main = document.getElementsByClassName("main");
let arr = document.querySelectorAll(".cell");
arr = Array.from(arr);
let restart = document.getElementById("restart");
let container = document.getElementsByClassName("game-container");
let line = document.getElementsByClassName("line");
let turn = "o";
let gameover = false;
let isdraw = true;
let count = 0;

function changeturn() {
  if (turn === "x") {
    return (turn = "o");
  } else if (turn === "o") {
    return (turn = "x");
  }
}

function checkwin() {
  let declare = document.getElementById("declare");
  let boxtext = document.getElementsByClassName("text");

  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      boxtext[e[0]].classList.add("bg-change");
      boxtext[e[2]].classList.add("bg-change");
      boxtext[e[1]].classList.add("bg-change");
      declare.innerText = boxtext[e[0]].innerText + " won";
      gameover = true;
      isdraw = false;
      return true;
    }
  });
}

// function checkdraw() {
//   let declare = document.getElementById("declare");
//   let boxtext = document.getElementsByClassName("text");
//   boxtext = Array.from(boxtext)
//   boxtext.forEach((Element) => {
//     if (isdraw && boxtext[Element].innerText !== "") {
//       declare.innerText = "Draw";
//     }
//   });
// }

function checkdraw() {
  let declare = document.getElementById("declare");
  let boxtext = document.getElementsByClassName("text");
  boxtext = Array.from(boxtext);

  // if (isdraw && boxtext.some((element) => element.innerText === "")) {
  //   return false; // Not a draw if there is an empty cell
  // }
  if (count === 9 && !gameover) {
    declare.innerText = "Draw";
    return true;
  }
}

function checkgamestatus() {
  if (checkwin()) {
  } else if (checkdraw()) {
  }
}

restart.addEventListener("click", function () {
  let text = document.querySelectorAll(".text");
  text = Array.from(text).forEach((Element) => {
    Element.innerText = "";
    Element.classList.remove("bg-change");
  });
  gameover = false; // Reset the gameover status
  document.getElementById("declare").innerText = "";
  // container[0].style.display="grid"
});

arr.forEach((cell) => {
  let text = cell.querySelector(".text");
  cell.addEventListener("click", function () {
    if (!gameover && cell.innerText === "") {
      let turon = changeturn();
      text.innerText = turon;
      count++;
      checkgamestatus();
      // console.log(count);
    }
  });
});
