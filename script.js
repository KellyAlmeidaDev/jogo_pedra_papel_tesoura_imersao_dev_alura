function jogar() {
  Jogador = prompt("Qual é seu nome?");
    //Válidando a resposta do jogador usando uma tag de repetição para ter uma resposta adequada
    var i = 0;
    while (i < 1) {
      escolhaJogador = prompt("1-Pedra, 2-papel ou 3-tesoura?");
      if (escolhaJogador == 1 || escolhaJogador == 2 || escolhaJogador == 3) {
        i +=1
      } else{
        alert('Digite um valor válido')
      }
    }
    
    escolhaComputador = Math.floor(Math.random() * 3) + 1;
    //Decorrer do jogo
    if (escolhaJogador == escolhaComputador) {
      //Empate:
      alert("Empate!!");
    } else if (escolhaJogador == 1) {
      if (escolhaComputador == 2) {
        //Vitória do computador, caso pedra, papel
        alert("Papel embrulha pedra! Computador venceu!");
      } else {
        //escolhaComputador ==3
        //Vitória do jogador, caso pedra, tesoura
        alert(`Pedra quebra tesoura! ${Jogador} venceu!`);
      }
    } else if (escolhaJogador == 2) {
      if (escolhaComputador == 1) {
        //Vitória do jogador, caso papel, pedra
        alert(`Papel embrulha pedra! ${Jogador} venceu!`);
      } else {
        //escolhaComputador 3
        //Vitória do computador, caso papel, tesoura
        alert("Tesoura corta papel! Computador venceu!");
      }
    } else if (escolhaJogador == 3) {
      if (escolhaComputador == 1) {
        //Vitória do computador, caso tesoura, pedra
        alert("Pedra quebra tesoura! Computador venceu!");
      } else {
        //escolhaComputador == 2
        //Vitória do jogador, caso tesoura, papel
        alert(`Tesoura corta papel! ${Jogador} venceu!`);
      }
    }
  }