function contaParesEntreDoisValores(valor1, valor2){
    // escreve aqui a função
    if(valor1 === valor2){
        return "Por favor introduza dois valores diferentes."
    }
    let maior =  Math.max(valor1,valor2)
    let menor =  Math.min(valor1,valor2)
    let contagem=0;

    for(i=menor; i<=maior;i++){
        if(i%2===0){
            contagem += 1
        }
    }return contagem
}