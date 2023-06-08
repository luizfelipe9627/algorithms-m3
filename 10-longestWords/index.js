export function longestWords(words) {
    // implementar logica aqui
    const longestWords =  words.sort(
        (a, b) => {return b.length - a.length
    });

    for(let palavras of longestWords) {
        let letrasSeparadas = palavras.split('');

        if(letrasSeparadas.length === 8) return longestWords.slice(0, 1);
        else if(letrasSeparadas.length === 4) return longestWords.slice(0, 2);
        else return longestWords.slice(0, 3);
    }

    return longestWords;
}