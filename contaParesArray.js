function contaParesDoArray(array) {
    if (array.length === 0) {
        return 0;
    }
    if (array[0] % 2 === 0) {
        return 1 + contaParesDoArray(array.slice(1))
    } else {
        return 0 + contaParesDoArray(array.slice(1))
    }
}

/* function contaParesDoArray(array) { // errado!!
    
    if (array.length === 0) {
        return [];
    }

    const restCount = contaParesDoArray(array.slice(1));

    if (array[0] % 2 === 0) {
        return 1 + restCount
    } else {
        return restCount
    }
}
 */

let array = [1, 2, 3, 4, 5, 6, 7]

console.log(contaParesDoArray(array))
