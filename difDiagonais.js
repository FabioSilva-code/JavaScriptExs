function diferencaAbsolutaEntreDiagonais(matrizquadrada) {
    // escreve aqui a função
    //matriz que faz um cubo
    // [3,3,3]
    // [3,3,3]
    // [3,3,3]
    // devemos calcular a diagonal em x, duas vezes
    // retiramos o valor da posicao [i][i] linha 1 coluna 1 etc
    //na diagonal seguinte fazemos [i][tamanho - 1 - i] 

    let somaDiagonal1 = 0
    let somaDiagonal2 = 0
    let tamanho = matrizquadrada.length

    for (let i = 0; i < tamanho; i++) {
        somaDiagonal1 += matrizquadrada[i][i]
        somaDiagonal2 += matrizquadrada[i][tamanho - 1 - i]
    }
    let diferencaDiagonais = somaDiagonal1 - somaDiagonal2
    return Math.abs(diferencaDiagonais)   // torna o valor positivo quando negativo


}

//esta dá
function diferencaEntreDiagonais(matrizquadrada) {

    let diagonalEsq = 0;
    let diagonalDir = 0;

    for(let i = 0; i < matrizquadrada.length; i++){
        diagonalEsq += matrizquadrada[i][i];
        diagonalDir += matrizquadrada[i][matrizquadrada.length - 1 - i]
    }

    return diagonalEsq - diagonalDir
}
