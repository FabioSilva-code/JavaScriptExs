function diaEmPalavras(dia, mes, ano) {
    // escreve aqui a função
    let anoTentativa = ano-2000
    const numerosEscritosDia = [
        "0", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "catorze", "um quarto", "dezasseis", "dezassete", "dezoito", "dezanove", "vinte", "vinte e um", "vinte e dois", "vinte e três", "vinte e quatro", "vinte e cinco", "vinte e seis", "vinte e sete", "vinte e oito", "vinte e nove", "trinta", "trinta e um"];
    const numerosEscritosMes = [
        "0", "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    const numerosEscritosAno = [
        "dois mil",
        "dois mil e um",
        "dois mil e dois",
        "dois mil e três",
        "dois mil e quatro",
        "dois mil e cinco",
        "dois mil e seis",
        "dois mil e sete",
        "dois mil e oito",
        "dois mil e nove",
        "dois mil e dez",
        "dois mil e onze",
        "dois mil e doze",
        "dois mil e treze",
        "dois mil e catorze",
        "dois mil e quinze",
        "dois mil e dezasseis",
        "dois mil e dezassete",
        "dois mil e dezoito",
        "dois mil e dezanove",
        "dois mil e vinte",
        "dois mil e vinte e um",
        "dois mil e vinte e dois",
        "dois mil e vinte e três",
        "dois mil e vinte e quatro",
        "dois mil e vinte e cinco",
        "dois mil e vinte e seis",
        "dois mil e vinte e sete",
        "dois mil e vinte e oito",
        "dois mil e vinte e nove",
        "dois mil e trinta"
    ];

    if (ano < 2000 || ano > 2030) {
        return "Por favor introduza um ano entre 2000 e 2030."
    }
    if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31."
    }
    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12."
    }
    if ((mes == 4 || mes == 9 || mes == 11 || mes == 6) && (dia > 30)) {
        return "Por favor introduza um dia entre 1 e 30."
    }
    if ((mes == 2 && dia > 29) && (ano == 2000 || ano == 2004 || ano == 2008 || ano == 2012 || ano == 2016 || ano == 2020 || ano == 2024 || ano == 2028)) {
        return "Por favor introduza um dia entre 1 e 29."
    } else if ((mes == 2 && dia > 28)) {
        return "Por favor introduza um dia entre 1 e 28."
    }
    /* return `${numerosEscritosDia[dia]} de ${numerosEscritosMes[mes]} de dois mil e ${numerosEscritosAno[ano[]]}`  */
    return `${numerosEscritosDia[dia]} de ${numerosEscritosMes[mes]} de ${numerosEscritosAno[anoTentativa]}`
}

console.log(diaEmPalavras(30,10,2020))
