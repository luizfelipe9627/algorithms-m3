export function sum(values) {
  // implementar logica aqui
  var contador = 0;

  for(var i = 0; i < values.length; i++) {
    contador += values[i];
  }

  return contador;
}