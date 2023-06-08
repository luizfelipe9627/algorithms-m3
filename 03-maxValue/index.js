export function maxValue(values) {
  // implementar logica aqui
  let numMaior = Math.max.apply(null, values);
  
  if(values.length == []) return 0;

  return numMaior;
}