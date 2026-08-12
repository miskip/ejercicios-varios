// 1) Crea un programa para jugar piedra papel o tijera, que me permita jugar contra la computadora 
  //debe tener un contador de victorias para cada jugar, ademas debe de mostrar un historial de las ultimas 5 partidas. 

let victoriasJugador = 0;
let victoriasComputadora = 0;
let historialPartidas = [];

function obtenerJugadaComputadora() {
  const opciones = ["piedra", "papel", "tijera"];
  const indiceAleatorio = Math.floor(Math.random() * 3);
  return opciones[indiceAleatorio];
}

function jugarPPT() {
  // Obtener jugada del jugador
  let jugador = prompt("Ingresa piedra, papel o tijera:").toLowerCase().trim();
  
  // Validar entrada del jugador
  while (!["piedra", "papel", "tijera"].includes(jugador)) {
    jugador = prompt("Entrada no válida. Ingresa piedra, papel o tijera:").toLowerCase().trim();
  }
  
  // Obtener jugada de la computadora
  let computadora = obtenerJugadaComputadora();
  
  // Determinar ganador
  let resultado;
  if (jugador === computadora) {
    resultado = "Empate";
  } else if (
    (jugador === "piedra" && computadora === "tijera") ||
    (jugador === "papel" && computadora === "piedra") ||
    (jugador === "tijera" && computadora === "papel")
  ) {
    resultado = "Ganaste";
    victoriasJugador++;
  } else {
    resultado = "Ganó la computadora";
    victoriasComputadora++;
  }
  
  // Agregar al historial
  historialPartidas.push({
    jugador: jugador,
    computadora: computadora,
    resultado: resultado
  });
  
  // Mantener solo las últimas 5 partidas
  if (historialPartidas.length > 5) {
    historialPartidas.shift(); // Elimina la primera (más antigua)
  }
  
  // Mostrar resultados
  console.log(`Tu jugada: ${jugador}`);
  console.log(`Computadora: ${computadora}`);
  console.log(`Resultado: ${resultado}`);
  console.log(`Victorias Jugador: ${victoriasJugador}`);
  console.log(`Victorias Computadora: ${victoriasComputadora}`);
  console.log("Historial de últimas 5 partidas:");
  historialPartidas.forEach((partida, index) => {
    console.log(`${index + 1}. Jugador: ${partida.jugador}, Computadora: ${partida.computadora}, Resultado: ${partida.resultado}`);
  });
  
  // Preguntar si quiere jugar otra vez
  const otraVez = confirm("¿Quieres jugar otra vez?");
  if (otraVez) {
    jugarPPT();
  }
}

// Para iniciar el juego: jugarPPT();
