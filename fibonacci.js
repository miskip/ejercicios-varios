//Crea una funcion que recree la sucesion de Fibonacci hasta el numero 
// deseado mas cercano.

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(20);