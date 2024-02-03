function calculaEstacaoDoAno(dia, mes) {
    // escreve aqui a função
    // Primavera - 21 do 3 a 20 do 6
    // Verão - 21 de 6 a 20 de 9
    // Outono - 21 de 9 a 20 de 12
    // Inverno - 21 de 12 a 20 de 3
    if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31."
    }
    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12."
    }
    if (mes === 2 && dia > 28) {
        return "Por favor introduza um dia entre 1 e 28."
    }
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11 )&& dia > 30) {
        return "Por favor introduza um dia entre 1 e 30."
    }
    if ((mes===3  && dia>=21) || (mes===4)||(mes===5)||(mes===6 && dia===20)){
        return "Primavera"
    }
    if ((mes ===6 && dia>=21)||(mes===7) || (mes===8) || (mes===9 && dia===20)){

        return "Verão"
    }
    if ((mes === 9 && dia>=21)||(mes===10)||(mes===11)||(mes==12 && dia===20)){
        return "Outono"
    }else{
    return "Inverno"
    }
}
console.log(calculaEstacaoDoAno(1,7))
console.log(calculaEstacaoDoAno(21,8))
console.log(calculaEstacaoDoAno(21,9))
console.log(calculaEstacaoDoAno(21,10))
console.log(calculaEstacaoDoAno(21,11))
console.log(calculaEstacaoDoAno(21,12))
console.log(calculaEstacaoDoAno(21,17))
console.log(calculaEstacaoDoAno(21,7))