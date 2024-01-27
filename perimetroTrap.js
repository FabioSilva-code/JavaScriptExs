function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
    // escreve aqui a função
    let compEmFalta
    let ladoEmFalta
    compEmFalta =(comprimentoMaior - comprimentoMenor) / 2
    ladoEmFalta = Math.sqrt((compEmFalta **2 +altura **2))
    return (ladoEmFalta*2) + comprimentoMaior + comprimentoMenor
}