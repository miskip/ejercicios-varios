// Crea una funcion que cuente todos los numeros 
// pares entre un numero de inicio y un limite

function contanumeros(inicio, limite) {
    let i;
    let contador = 0;
    for (i = inicio; i <= limite; i++) {
        if (i % 2 === 0) {
            contador++;
        }
    }
    return contador;
}
contanumeros(1, 100);
alert (contanumeros(1, 100));

