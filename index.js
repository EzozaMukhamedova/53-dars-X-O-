const toplamEL = document.getElementById("toplam");
const winneralertEL = document.querySelector(".winner-alert");
const winnernameEL = document.querySelector(".winner-name");

winnernameEL.classList.add("animate__animated", "animate__bounceInUp");

let isO = true;

toplamEL.addEventListener("click", (e) => {
  if (e.target.innerText !== "") {
    alert("Allaqchon bosilgan!");
    return;
  }
  if (isO) {
    e.target.innerText = "X";
    isO = false;
  }

  const winner = determineWinner();
  if (winner) {
    winneralertEL.style.display = "block";
    winnernameEL.children[0].innerText = winner;
    winnernameEL.style.display = "block";

    setTimeout(() => {
      secondLottie.style.display = "block"; // Ikkinchi animatsiyani qo'sha olmadim
    }, 3000);
    return;
  }

  if (!isO) {
    setTimeout(() => {
      computerMove();
      const winnerAfterComputerMove = determineWinner();
      if (winnerAfterComputerMove) {
        winneralertEL.style.display = "block";
        winnernameEL.children[0].innerText = winnerAfterComputerMove;
        winnernameEL.style.display = "block";
        setTimeout(() => {
          secondLottie.style.display = "block"; // Ikkinchi animatsiyani qo'sha olmadim
        }, 3000);
      }
    }, 1000);
  }
});

for (let i = 0; i < toplamEL.children.length; i++) {
  console.log(toplamEL.children[i], toplamEL.children[i].innerHTML);
}

const arr = toplamEL.children;

function determineWinner() {
  let winner = null;
  if (
    arr[0].innerText !== "" &&
    arr[0].innerText === arr[4].innerText &&
    arr[4].innerText === arr[8].innerText
  ) {
    winner = arr[0].innerText;
  } else if (
    arr[2].innerText !== "" &&
    arr[2].innerText === arr[4].innerText &&
    arr[4].innerText === arr[6].innerText
  ) {
    winner = arr[2].innerText;
  } else if (
    arr[0].innerText !== "" &&
    arr[0].innerText === arr[1].innerText &&
    arr[1].innerText === arr[2].innerText
  ) {
    winner = arr[0].innerText;
  } else if (
    arr[3].innerText !== "" &&
    arr[3].innerText === arr[4].innerText &&
    arr[4].innerText === arr[5].innerText
  ) {
    winner = arr[3].innerText;
  } else if (
    arr[6].innerText !== "" &&
    arr[6].innerText === arr[7].innerText &&
    arr[7].innerText === arr[8].innerText
  ) {
    winner = arr[6].innerText;
  } else if (
    arr[0].innerText !== "" &&
    arr[0].innerText === arr[3].innerText &&
    arr[3].innerText === arr[6].innerText
  ) {
    winner = arr[0].innerText;
  } else if (
    arr[1].innerText !== "" &&
    arr[1].innerText === arr[4].innerText &&
    arr[4].innerText === arr[7].innerText
  ) {
    winner = arr[1].innerText;
  } else if (
    arr[2].innerText !== "" &&
    arr[2].innerText === arr[5].innerText &&
    arr[5].innerText === arr[8].innerText
  ) {
    winner = arr[2].innerText;
  }

  return winner;
}

function computerMove() {
  let emptyCells = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].innerText === "") {
      emptyCells.push(arr[i]);
    }
  }

  if (emptyCells.length === 0) return;

  let randomIndex = Math.floor(Math.random() * emptyCells.length);
  emptyCells[randomIndex].innerText = "O";
  isO = true;
}
