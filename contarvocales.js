 //Crea un programa que me permita ingresar un string y me devuelva la cantidad de
//vocales que tiene el string, la cantidad de palabras que tiene, y la cantidad de caracteres que tiene.

function contarVocales() {
    let texto = prompt("Ingresa un texto:");
    let cantidadVocales = 0;
    let cantidadPalabras = 0;
    let cantidadCaracteres = texto.length;

    // Contar vocales
    let contadorVocales = 0;
    let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
    for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
        contadorVocales++;
    }
    }


    // Contar palabras
    cantidadPalabras = texto.trim() ? texto.trim().split(/\s+/).length : 0;

    // Mostrar resultados
    console.log(`Cantidad de vocales: ${cantidadVocales}`);
    console.log(`Cantidad de palabras: ${cantidadPalabras}`);
    console.log(`Cantidad de caracteres: ${cantidadCaracteres}`);
}