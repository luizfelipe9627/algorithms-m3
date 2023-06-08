export function isAnagram(word1, word2) {
  // implementar logica aqui
  let array1 = word1.toLowerCase().split('').sort();
  let array2 = word2.toLowerCase().split('').sort();
  
  if(array1.join() === array2.join()) return true;
  else return false;
}