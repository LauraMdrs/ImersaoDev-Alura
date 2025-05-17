//Preciso criar uma lista com os 3 jogadores

personagem = ["", "", ""];

viloes = ["", "", ""];

forcaPersonagem = 0;
forcaViloes = 0;
alert("O array Personagem contém: " + personagem);

for (let i = 0; i < 3; i++) {
  escolhaPersonagem = prompt("Digite o nome do seu personagem: " + (i + 1));
  personagem[i] = escolhaPersonagem;
  //Calcular a forca de cada jogador, e depois somar pra saber a forca do time
  forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1;
  // forcaPersonagem += Math.floor(Math.random () * 10) + 1 -> Maneira mais avancada de fazer a mesma coisa
}

console.log("Agora, o Array personagem contém: " + personagem);
console.log("Inicio Viloes: " + viloes);

for (let i = 0; i < 3; i++) {
  indiceAleatorio = Math.floor(Math.random() * 5);
  viloesPossiveis = ["Vilao 1", "Vilao 2", "Vilao 3", "Vilao 4", "Vilao 5"];
  viloes[i] = viloesPossiveis[indiceAleatorio];

  //Calcular a forca de cada jogador do time do computador
  forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1;
}
console.log("Final Viloes: " + viloes);

//Comparar os dois times para saber quem venceu
if (forcaPersonagem > forcaViloes) {
  alert("Seu time ganhou!! Sua forca foi " + forcaPersonagem);
} 
else {
  if (forcaPersonagem < forcaViloes) {
    alert("Seu time é fraco. O computador ganhou com forca de" + forcaViloes);
  } 
  else {
    alert("Os dois times tem a mesma forca! Houve empate.");
  }
}
