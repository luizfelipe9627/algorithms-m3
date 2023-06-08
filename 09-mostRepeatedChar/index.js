export function mostUsedChar(text) {
    // implementar logica aqui
    let array = [];
    let stringText = text.toLowerCase();
    let letrasJuntas = stringText.replace(/ /g, '');

    for(let i = 0; i < letrasJuntas.length; i++) {
        let letra = letrasJuntas.charAt(i);

        if(array[letra] != undefined) array[letra]++
        else array[letra] = 1;
    }

    let letrasOrdenadas = Object.keys(array).sort(function order(key1, key2) {
        if(array[key1] > array[key2]) return -1;
        else if(array[key1] < array[key2]) return +1;
        else return 0;
    })[0];

    return letrasOrdenadas;
}