let diaFormatado = String(data.getDate()).padStart(2, '0');
    let mesFormatado = String(data.getMonth() + 1).padStart(2, '0'); // O mês começa em 0 no objeto Date
    //padStart adiciona o elemento 0antes
    let anoFormatado = data.getFullYear();

    // Retorna a data formatada
    return diaFormatado + "-" + mesFormatado + "-" + anoFormatado;