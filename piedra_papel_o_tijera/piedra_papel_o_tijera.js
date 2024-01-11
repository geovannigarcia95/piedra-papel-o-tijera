const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const choices = ['piedra', 'papel', 'tijera'];

const getComputerChoice = () => Math.floor(Math.random() * 3);

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return '¡Es un empate!';
  } else if (
    (userChoice === 0 && computerChoice === 2) ||
    (userChoice === 1 && computerChoice === 0) ||
    (userChoice === 2 && computerChoice === 1)
  ) {
    return '¡Ganaste!';
  } else {
    return '¡Perdiste!';
  }
};

const playGame = () => {
  rl.question("Elige: 0 para piedra, 1 para papel, 2 para tijera (o 'q' para salir)\n", (userChoice) => {
    if (userChoice.toLowerCase() === 'q') {
      console.log('Gracias por jugar a Piedra, Papel o Tijera. ¡Hasta luego!');
      rl.close();
      return;
    }

    userChoice = parseInt(userChoice, 10);

    if (![0, 1, 2].includes(userChoice)) {
      console.log('Por favor, elige 0 para piedra, 1 para papel o 2 para tijera.');
      playGame();
      return;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    console.log(`Elegiste ${choices[userChoice]}. La computadora eligió ${choices[computerChoice]}. ${result}`);

    // Preguntar al jugador si quiere jugar nuevamente
    rl.question("Presiona cualquier tecla para jugar nuevamente o 'q' para salir\n", (answer) => {
      if (answer.toLowerCase() === 'q') {
        console.log('Gracias por jugar a Piedra, Papel o Tijera. ¡Hasta luego!');
        rl.close();
      } else {
        playGame();
      }
    });
  });
};

const startGame = () => {
  console.log('Bienvenido al juego de Piedra, Papel o Tijera!');
  playGame();
};

startGame();
