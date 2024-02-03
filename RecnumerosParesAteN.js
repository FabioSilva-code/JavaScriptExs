function numerosParesAteN(n) {

    //crio outra funcao para facilitar a ida de 0 a n
    function gerarParesRecursivamente(i) {

        if (i > n) {
            return [];  // <---/ saida da recursao quando acabar
        }

        if (i % 2 === 0) {   // quando i (inicia em 0, o que facilita achar pares) aumentamos i em 2
            return [i, ...gerarParesRecursivamente(i + 2)]; // retorna um array com [i, valores que serão passados nas proximas recursoes(i+2)]
        }
    }

    return gerarParesRecursivamente(0);
}

console.log(numerosParesAteN(3))
