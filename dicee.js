var player1_dice_no = Math.floor(Math.random() * 6) + 1;
// player1 = document.querySelectorAll("img")[0];
// player1.setAttribute("src", `images/dice${player1_dice_no}.png`);

var player2_dice_no = Math.floor(Math.random() * 6) + 1;
// player2 = document.querySelectorAll("img")[1];
//player2.setAttribute("src", "images/dice${pla}.png");
// player2.setAttribute("src", `images/dice${player2_dice_no}.png`);

function changeImage1() {
  player1_dice_no = Math.floor(Math.random() * 6) + 1;
  player1 = document.querySelectorAll("img")[0];
  player1.setAttribute("src", `images/dice${player1_dice_no}.png`);
}
function changeImage2() {
  player2_dice_no = Math.floor(Math.random() * 6) + 1;
  player2 = document.querySelectorAll("img")[1];
  player2.setAttribute("src", `images/dice${player2_dice_no}.png`);
}
function whoWin() {
  if (player1_dice_no > player2_dice_no) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (player1_dice_no < player2_dice_no) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}


// var player1_dice_no = Math.floor(Math.random() * 6) + 1;
// var player2_dice_no = Math.floor(Math.random() * 6) + 1;

// function changeImage1() {
//   player1_dice_no = Math.floor(Math.random() * 6) + 1;
//   image1 = document.querySelectorAll("img")[0];
//   image1.setAttribute("src", `images/dice${player1_dice_no}.png`);
// }
// function changeImage2() {
//   player2_dice_no = Math.floor(Math.random() * 6) + 1;
//   image2 = document.querySelectorAll("img")[1];
//   image2.setAttribute("src", `images/dice${player2_dice_no}.png`);
// }

// function whoWin() {
//   if (player1_dice_no > player2_dice_no) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins!";
//   }
//   else if (player1_dice_no < player2_dice_no) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins!";
//   }
//   else {
//     document.querySelector("h1").innerHTML = "Draw!";
//   }
// }

