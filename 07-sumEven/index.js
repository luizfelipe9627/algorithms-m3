export function sumEven(value) {
  // implementar logica aqui
  let contador = 0;

  for(let i = 0; i < value.length; i++) {
    if(value[i] % 2 == 0) contador += value[i];
  }
  
  return contador;
}