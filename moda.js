function numeroMaisFrequente(array) {
    // USANDO O MAP!!!
    // primeiro criamos um map com cada valor do array e o numero de ocorrencias
    // começamos a contagem com +1.
    // array.reduce vai devolver o array em objetos  ---> array.reduce(callback[, valorInicial])
    //A função de callback está acumulando um objeto contagem onde as chaves são os números do array e os valores são a contagem de quantas vezes cada número aparece. 

    const contagem = array.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});


    // Utilizamos o método reduce para encontrar o número com a contagem mais alta
    //comparamos a contagem com o comparator (a,b)=>
    const numeroMaisRepetido = Object.keys(contagem).reduce((a, b) => contagem[a] > contagem[b] ? a : b);
}