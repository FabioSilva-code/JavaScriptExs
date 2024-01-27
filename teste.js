function calculaDiasAteAoNatal(dia, mes) {
    const DIAS_POR_MES = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 25];

    // Valida o mês 
    if (mes < 1 || mes > 12) {
        return "Por favor, introduza um mês entre 1 e 12.";
    }

    // Valida o dia
    if (dia < 1 || dia > DIAS_POR_MES[mes - 1]) {
        return "Por favor introduza um dia entre 1 e  ${DIAS_POR_MES[mes - 1]}.";
    }

    // Caso especial: Natal
    if (mes == 12 && dia == 25) {
        return "Hoje é Natal!";
    }

    let diasAteNatal = -dia; // Inicia com os dias negativos do mes atual

    // Soma os dias de cada mes a partir do mes atual ate dezembro
    for (let i = mes - 1; i < 12; i++) {
        diasAteNatal += DIAS_POR_MES[i];
    }

    return "Faltam " + diasAteNatal + " dias até ao Natal.";
}
console.log(calculaDiasAteAoNatal(24,12))