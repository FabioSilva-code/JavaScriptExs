/* Cria uma função que recebe um array e um número como argumentos e retorna um array com cada número multiplicado por n. */
function multiplicadosPorN(array, n) {
    return array.map((e) => e * n)
}


/* Cria uma função que recebe um array como argumento e retorna um array com a parte inteira de cada elemento. */
function partesInteiras(array) {

    return array.map((e) => Math.floor(e))
}


/* Cria uma função que recebe um array como argumento e retorna um array com a parte decimal de cada elemento arredondada às centésimas.*/
function partesDecimais(array) {
    return array.map((e) => {
        let valor = Math.floor(e);
        let decimal = e - valor;
        return parseFloat(decimal.toFixed(2));
    });
}

/* Cria uma função que recebe um array como argumento e retorna um array com a parte inteira de cada elemento. */
function partesInteiras(array) {
    return array.map((e) => Math.floor(e))
}

/* Cria uma função que recebe um array como argumento e retorna um array com o triplo de cada elemento.*/
function triplos(array) {
    return array.map((e) => e * 3)
}


/* Cria uma função que recebe um array como argumento e retorna um array com os elementos que são pares. */
function filtraPares(array) {
    return array.filter(e => e % 2 == 0)
}

function filtraInteiros(array) {
    return array.filter((e) => e % 1 === 0)
}

/* Cria uma função que recebe um array como argumento e retorna o primeiro elemento maior que 0. */
function encontraMaiorQueZero(array) {
    return array.find((e) => e > 0)
}


function encontraPar(array) {

    return array.find((e) => e % 2 == 0)
}

function encontraMenorDoQueN(array, n) {

    return array.find((e) => e < n)
}

function encontraPrimo(array) {
    return array.find((ele) => isPrime(ele))
}
function isPrime(number) {
    if (number <= 1) {
        return false
    }
    for (i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    } return true
}

function encontraImpar(array) {
    return array.find((e) => e % 2 !== 0)
}

function existeMaiorDoQueZero(array) {
    return array.some((e) => e > 0)
}


function existeMenorDoQueN(array, n) {
    return array.some((e) => e < n)
}

function existePar(array) {
    return array.some((e) => e % 2 == 0)
}

function existeMultiploDeTres(array) {
    return array.some((e) => e % 3 == 0)
}

function existeNegativo(array) {
    return array.some((e) => e < 0)
}

function todosMaioresDoQueCinco(array) {
    return array.every((e) => e > 5)
}

function todosIguaisAN(array, n) {
    return array.every((e) => e == n)
}

function todasPossuemLetra(array, letra) {
    return array.every((e) => e.includes(letra))
}

function todosSaoNumeros(array) {
    return array.every((e) => isNaN(e))
}

function todosSaoNegativos(array) {
    return array.every((e) => e < 0)
}


function valorMaximoImpar(array) {
    return array.reduce((anterior, current) => (current % 2 == 1) ? (current > anterior ? current : anterior) : anterior, 1)
}

console.log(valorMaximoImpar([1, 3, 4, 5, 6, 7, 8, 9]))



function mapaDeOcorrencias(array) {
    return array.reduce((arrayDeElementos, elemento) => {
        return arrayDeElementos.has(elemento)
            ? new Map([
                ...arrayDeElementos,
                [elemento, arrayDeElementos.get(elemento) + 1],
            ])
            : new Map([...arrayDeElementos, [elemento, 1]]);
    }, new Map([]));
}



function somatorio(array){
    return array.reduce((anterior, current)=>{
        return anterior+current
    }, 0)    
}


function minimoPar(array){
    return array.reduce((anterior,current)=>{
        return anterior > current ? (current%2 == 0 ? current : anterior) : anterior
    })
}

function ordenaDoMenorAoMaior(array){
    return array.sort((ant,curr)=> ant-curr)
}

function ordenaDoMaiorAoMenor(array){
    return array.sort((a,b)=> b-a )
}