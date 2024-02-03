// é dado um array com n elementos e um numero que vai ser até onde temos de percorrer o array
// retorno a soma de elementos max e min

function minMax(array, n) {

    array.sort((a, b) => a - b);  // fazemos isto por causa de valores maiores que 9!!!


    // array sort irá colocar os menores numeros do array primeiro
    let min=0;   
    let max=0;   
    for (i = 0; i <= n; i++) {
        min += array[i]
    }
    

    // array reverse vai colocar os maiores primeiro
    array.reverse()

    for (i = 0; i <= n; i++) {
        max += array[i]
    }
}