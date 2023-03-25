const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let jogador;
let computador;
let result;

choiceBtns.forEach(button =>button.addEventListener("click",() =>{

  player = button.textContent;
  computerTurn();
  playerText.textContent = `Jogador: ${player}`;
  computerText.textContent = `Computador: ${computador}`;
  resultText.textContent = checkWinner();
  
  
}));

function computerTurn(){
  const randNumber = Math.floor(Math.random ()*3) +1;
  switch (randNumber){
    case 1:
      computador = "Pedra";
      break;
    case 2:
      computador = "Papel";
      break;
    case 3:
      computador = "Tesoura";
      break;
  }
}

function checkWinner(){

  if(player == computador){
    return "Empatou!"
  }
  else if(computador == "Rock"){
    return(player == "Papel") ? "Você ganhou" : "você perdeu";
  }
 else if(computador == "Papel"){
    return(player == "Tesoura") ? "Você ganhou" : "você perdeu";

 }
    else if(computador == "Tesoura"){
    return(player == "Rock") ? "Você ganhou" : "você perdeu";
}
}