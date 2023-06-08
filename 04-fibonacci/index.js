export function fibonacci(value) {
  // implementar logica aqui
  if(value < 1) return 0;
  if(value <= 2) return 1;

  let valorFib1 = 1;
  let valorFib2 = 0;
  let valorFibonacci = value;

  for(let i = 2; i <= value; i++) {
    valorFibonacci = valorFib1 + valorFib2;
    valorFib2 = valorFib1;
    valorFib1 = valorFibonacci;
  }

  return valorFibonacci;
}