export function isPrime(value) {
  // implementar logica aqui
  for(let i = 2; i < value; i++) {
    if(value % i === 0) return false;
    else if(value === 2) return true;
  }
  
  return value > 1;
}