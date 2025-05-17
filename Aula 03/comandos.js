function jogar() {
  rodada = 1
  venceu = false;

  while(rodada <= 3) {
  console.log("Rodada: " + rodada);
  escolhaJogador = prompt("Nivel "+rodada+", escolha o vidro 1, 2 ou 3?") 
  pisoQuebrado = Math.floor(Math.random()*3) + 1;
  
 if (isNaN(escolhaJogador) || escolhaJogador < 1 || escolhaJogador > 3) {
   alert ("Opção inválida, o jogo será reiniciado. Clique em Jogar para iniciar novamente.");
   break;
 }
    
    if (escolhaJogador == pisoQuebrado) {
      alert ("O vidro quebrou! Acabou o jogo pra você.");
      break;
    }
    
    if (rodada < 3) {
      alert  ("Você passou para o próximo nível!");
    }
    
    else {
      vence = true;
    }
    
    rodada++;
  }
  
  if (vence) {
    alert("Você ganhou, parabéns 🎊!");
  }
}