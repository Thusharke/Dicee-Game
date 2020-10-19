
function result(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {                           //If player 1 wins
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {                    //If player 2 wins
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }else {                                                        //If it is a draw
    document.querySelector("h1").innerHTML = "Draw!";
  }
}