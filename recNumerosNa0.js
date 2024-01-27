/* function arrayDeNAZero(n){
    // escreve aqui a funçã
    // será a condicao de saida
    if (n<0){ 

        return "Por favor insira um número superior a 0."
    }
    if(n>=0){
        return [n,...arrayDeNAZero(n-1)]
    }if(n===0)
    return []
}


console.log(arrayDeNAZero(5)) */

function arrayDeNAZero(n) {
    
    function gerarParesRecursivamente(i) {
        if (i === 0) {
            return [0]
        }
        
        if (i<0) {
         /*    return [];  */ // <---/ saida da recursao quando acabar
            return "Por favor insira um número superior a 0."
        }

        if(i>=0){
            return [i,...arrayDeNAZero(i-1)]
        }
    }
    
    return gerarParesRecursivamente(n);
}

console.log(arrayDeNAZero(3))

/* 
function arrayDeNAZero(n) {
    // condição de saída
    if (n < 0) {
        return "Por favor insira um número superior a 0.";
    }

    let i = 0;
    let array = [];

    while (i <= n) {
        array.push(i);
        i++;
    }

    return array;
}

// Exemplo de uso:
console.log(arrayDeNAZero(5)); */