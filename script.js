console.log("Calculadora de Partidas Rankeadas");

function getBalance(wins, losses) {
  return wins - losses;
}

function getLevel(balance) {
  switch (true) {
    case balance <= 10:
      return "Noob";
    case balance >= 11 && balance <= 20:
      return "Aprendendo";
    case balance >= 21 && balance <= 40:
      return "Estagio";
    case balance >= 41 && balance <= 60:
      return "Dourado";
    case balance >= 61 && balance <= 80:
      return "Diamante";
    case balance >= 81 && balance <= 90:
      return "Hulk";
    case balance >= 91 && balance <= 100:
      return "Eh Serio";
    case balance >= 101:
      return "Iluminado";
  }
}

let balance = getBalance(350, 23);
let level = getLevel(balance);

console.log(`O Herói tem de saldo de ${balance} está no nível ${level}`);
