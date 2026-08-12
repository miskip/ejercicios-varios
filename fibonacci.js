//Crea una funcion que recree la sucesion de Fibonacci hasta el numero 
// deseado mas cercano.

// Función para calcular un número específico
function calcularFibonacci(num) {
  if (num <= 1) return num;
  return calcularFibonacci(num - 1) + calcularFibonacci(num - 2);
}


function fibonacci(c) {
  let resultados = [];
  for (let i = 0; i <= c; i++) {
    resultados.push(calcularFibonacci(i));
  }
  return resultados;
}

console.log(fibonacci(10));
