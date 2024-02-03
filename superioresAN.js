function contaSuperioresAN(array, n){
    const novoArray = array.filter(numero => numero > n);
    return novoArray.length;
 }