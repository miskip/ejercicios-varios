//2) Crea una funcion que cuente todos los numeros de dos en dos 
//en reversa en una serie de numeros, ejemplo.

function contanumeros(inicio, limite) {
    let i;
    let contador = 0;
    for (i = inicio; i <= limite; i++) {
        if (i % 2 === 0) {
            contador--;
            contanumeros(100, 1);
        }
    }
    return contador;
}
contanumeros(100, 1);
alert (contanumeros(100, 1));