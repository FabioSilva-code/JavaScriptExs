function contaInteirosDoArray(array) {
    if (array.length === 0) {
        return 0;
    }
    if (Number.isInteger(array[0])) {
        return 1 + contaInteirosDoArray(array.slice(1))
    } else {
        return 0 + contaInteirosDoArray(array.slice(1))
    }
}