
// esta n está funcional
/* let matriz = [
    ['a', 'x', 'e', 'p', 'o'],
    ['b', 'q', 'z', 'b', 's'],
    ['r', 't', 'h', 'r', 't'],
    ['i', 'k', 'j', 'k', 'c'],
    ['n', 'l', 'v', 'l', 'v']
];
function capitalizaVogais(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (['a', 'e', 'i', 'o', 'u'].includes(matriz[i][j])) {
                matriz[i][j] = matriz[i][j].toUpperCase();
            }
        }
    }

    return matriz;
}

console.log(capitalizaVogais(matriz));

 */

// em Prog FUncional
const matriz = [
    ['a', 'x', 'e', 'p', 'o'],
    ['b', 'q', 'z', 'b', 's'],
    ['r', 't', 'h', 'r', 't'],
    ['i', 'k', 'j', 'k', 'c'],
    ['n', 'l', 'v', 'l', 'v']
];
const vogais = ["a","e","i","o","u"]
function capitalizaVogais(matriz) {
    
    return matriz.map((ele) => (ele.map(elementoElemento)))=>(vogais.includes(elementoElemento) ? elementoElemento.toUpperCase():elementoElemento
    )
        
    }

    console.log(capitalizaVogais(matriz))