idade = prompt("Digite sua idade:")
    if(idade <= 17) {
    alert("Você não pode jogar jokenpô")
  }

  if(idade >= 18 ) {
    alert ("Vamos começar a jogar!")

  escolhaJogador = prompt ("Escolha seu personagem: 1- Pedra, 2 - Papel ou 3 - Tesoura")
  escolhaComputador = Math.floor(Math.random() * 3) + 1;

// jogador pedra, computador pedra -> empate 1 - 1
// jogador pedra, computador papel -> computador vence! 1 - 2
// jogador pedra, computador tesoura -> jogador vence! 1 - 3

  if (escolhaJogador == escolhaComputador) {
    alert("empate!!")
  }
  
  if (escolhaJogador == 1) {
    if(escolhaComputador == 2) {
      alert("Você perdeu :( Computador escolheu Papel")
    }
    if(escolhaComputador == 3) {
      alert("Você Ganhou! Computador escolheu Tesoura")
    }
  }

//jogador papel, computador pedra -> jogador vence! 2 - 1
//jogador papel, computador papel -> empate 2 - 2
//jogador papel, computador tesoura -> computador vence! 2 - 3
  
  if(escolhaJogador == 2) {
    if(escolhaComputador == 1) {
      alert("Você ganhou! Computador escolheu Pedra.")
    }
    if(escolhaComputador == 3) {
      alert("Você perdeu :( Computador escolheu Tesoura.")
    }
  }

//jogador tesoura, computador pedra -> computador vence! 3 - 1
//jogador tesoura, computador papel -> jogador vence! 3 - 2
//jogador tesoura, computador tesoura -> empate 3 - 3
  
  if(escolhaJogador == 3) {
    if(escolhaComputador == 1) {
      alert("Você perdeu :( Computador escolheu Pedra!")
    }
    if(escolhaComputador == 2) {
      alert("Você ganhou! Computador escolheu Papel!")
    }
  }
  
  alert("A escolha do computador foi: " + escolhaComputador)
}