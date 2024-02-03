function tempoEmPalavras(h, m) {

    const horas = ["meia noite", "uma", "duas", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "meio dia"]
    const minutos = ["em ponto", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "catorze", "um quarto", "dezasseis", "dezassete", "dezoito", "dezanove", "vinte", "vinte e um", "vinte e dois", "vinte e três", "vinte e quatro", "vinte e cinco", "vinte e seis", "vinte e sete", "vinte e oito", "vinte e nove", "meia"]



    if (h == 24) {
        h = 0
    }
    if (m == 60) {
        m = 0
    }
    if (h > 12 && m > 30) {
        h = h - 12;
        h += 1;
        m = 60 - m;

        if (h == 12) {
            h = 0;
            if (m != 15 && m != 1 && m != 10) {
                return minutos[m] + " para a " + horas[h]
            } else if (m == 1) {
                return minutos[m] + " para a " + horas[h]
            }
            return minutos[m] + " para a " + horas[h];
        }
        return minutos[m] + " para as " + horas[h];
    }
    else if (m == 0) {
        if (h > 12) {
            h = h-12;
            return horas[h] + " " + minutos[m];
        }

        return horas[h] + " " + minutos[m];
    }
    else if (h > 12 && m <= 30) {
        h = h - 12;
        return horas[h] + " e " + minutos[m]
    }
    else if (m > 30) {
        m = 60 - m;
        h += 1;
        if (h == 12 && m == 15 || h == 12 && m == 10) {
            return minutos[m] + " para o " + horas[h]
        }
        else if (h == 12) {
            return minutos[m] + " para o " + horas[h]
        } else if (h ==1 && m == 15) {
            return minutos[m] + " para a " + horas[h]
        } else if (h < 12 && m == 1) {
            return minutos[m] + " para as " + horas[h]
        } else if (h < 12 && m > 1) {
            return minutos[m] + " para as " + horas[h]
        } else {
            if (h == 13) {
                h = 1;
                if (h == 1 && m == 15 || h == 1 && m == 10) {
                    return minutos[m] + " para a " + horas[h]
                } else if (h == 1 && m != 1) {

                    return minutos[m] + " para a " + horas[h]
                } else if (h == 1 && m == 1) {
                    return minutos[m] + " para a " + horas[h]
                }
            }
        }
    } else if (h == 13 && m != 0) {
        h = 1;
        return horas[h] + " e " + minutos[m]

    }
    else if (h == 23) {
        h = 11;
        return horas[h] + " e " + minutos[m]

    } else {
        return horas[h] + " e " + minutos[m]
    }
}

console.log(tempoEmPalavras(10, 30))
console.log(tempoEmPalavras(2, 5))
console.log(tempoEmPalavras(4, 45))
console.log(tempoEmPalavras(12, 0))
console.log(tempoEmPalavras(11, 50))
console.log(tempoEmPalavras(12, 45))
console.log(tempoEmPalavras(12, 17))
console.log(tempoEmPalavras(12, 47))
console.log(tempoEmPalavras(12, 45))
console.log(tempoEmPalavras(23, 30))
console.log(tempoEmPalavras(23, 30))
console.log(tempoEmPalavras(23, 45))
console.log(tempoEmPalavras(00, 00))
console.log(tempoEmPalavras(12,00))
console.log(tempoEmPalavras(15, 45))
console.log(tempoEmPalavras(02, 30))
console.log(tempoEmPalavras(1, 30))
console.log(tempoEmPalavras(1, 10))
console.log(tempoEmPalavras(23, 50))
console.log(tempoEmPalavras(23, 59))
console.log(tempoEmPalavras(0, 0));  // Meia noite em ponto
console.log(tempoEmPalavras(12, 0)); // Meio dia em ponto

console.log(tempoEmPalavras(11, 59)); // Um minuto para o meio dia
console.log(tempoEmPalavras(23, 59)); // Um minuto para a meia noite

console.log(tempoEmPalavras(2, 31));  // Vinte e nove para as três
console.log(tempoEmPalavras(15, 29)); // Três e vinte e nove

console.log(tempoEmPalavras(7, 30));  // Sete e meia

// Horas inválidas (estes casos podem não ser tratados corretamente pela função)
console.log(tempoEmPalavras(24, 0));  // Hora inválida (24)
console.log(tempoEmPalavras(13, 60)); // Minuto inválido (60)
console.log(tempoEmPalavras(1, 0));   // Uma em ponto
console.log(tempoEmPalavras(1, 15));  // Uma e um quarto
console.log(tempoEmPalavras(1, 30));  // Uma e meia
console.log(tempoEmPalavras(1, 45));  // Um quarto para as duas

console.log(tempoEmPalavras(3, 5));   // Três e cinco
console.log(tempoEmPalavras(3, 10));  // Três e dez
console.log(tempoEmPalavras(3, 55));  // Cinco para as quatro

console.log(tempoEmPalavras(6, 20));  // Seis e vinte
console.log(tempoEmPalavras(6, 40));  // Vinte para as sete

console.log(tempoEmPalavras(9, 0));   // Nove em ponto
console.log(tempoEmPalavras(9, 30));  // Nove e meia
console.log(tempoEmPalavras(9, 59));  // Um para as dez

console.log(tempoEmPalavras(12, 1));  // Meio dia e um
console.log(tempoEmPalavras(12, 15)); // Meio dia e um quarto
console.log(tempoEmPalavras(12, 30)); // Meio dia e meia
console.log(tempoEmPalavras(12, 45)); // Um quarto para a uma

console.log(tempoEmPalavras(13, 0));  // Uma em ponto
console.log(tempoEmPalavras(13, 15)); // Uma e um quarto
console.log(tempoEmPalavras(13, 30)); // Uma e meia
console.log(tempoEmPalavras(22, 45)); // Um quarto para as duas

console.log(tempoEmPalavras(16, 10)); // Quatro e dez


console.log(tempoEmPalavras(2, 45)); // Dez para as cinco
console.log(tempoEmPalavras(14, 50)); // Dez para as cinco
console.log(tempoEmPalavras(14, 45)); // Dez para as cinco
console.log(tempoEmPalavras(13, 45)); // Dez para as cinco
console.log(tempoEmPalavras(24, 45)); // Dez para as cinco
console.log(tempoEmPalavras(00, 45)); // Dez para as cinco
console.log(tempoEmPalavras(1, 45)); // Dez para as cinco
console.log(tempoEmPalavras(0, 0));   // Meia noite em ponto
console.log(tempoEmPalavras(0, 15));  // Meia noite e quinze
console.log(tempoEmPalavras(0, 30));  // Meia noite e meia
console.log(tempoEmPalavras(0, 45));  // Quinze para a uma
console.log(tempoEmPalavras(1, 0));   // Uma em ponto
console.log(tempoEmPalavras(1, 15));  // Uma e quinze
console.log(tempoEmPalavras(1, 30));  // Uma e meia
console.log(tempoEmPalavras(1, 45));  // Quinze para as duas
console.log(tempoEmPalavras(2, 0));   // Duas em ponto
console.log(tempoEmPalavras(2, 15));  // Duas e quinze
console.log(tempoEmPalavras(2, 30));  // Duas e meia
console.log(tempoEmPalavras(2, 45));  // Quinze para as três
console.log(tempoEmPalavras(0, 0));   // Meia noite em ponto
console.log(tempoEmPalavras(0, 15));  // Meia noite e quinze
console.log(tempoEmPalavras(0, 30));  // Meia noite e meia
console.log(tempoEmPalavras(0, 45));  // Quinze para a uma
console.log(tempoEmPalavras(1, 0));   // Uma em ponto
console.log(tempoEmPalavras(1, 15));  // Uma e quinze
console.log(tempoEmPalavras(1, 30));  // Uma e meia
console.log(tempoEmPalavras(1, 45));  // Quinze para as duas
console.log(tempoEmPalavras(2, 0));   // Duas em ponto
console.log(tempoEmPalavras(2, 15));  // Duas e quinze
console.log(tempoEmPalavras(2, 30));  // Duas e meia
console.log(tempoEmPalavras(2, 45));  // Quinze para as três
console.log(tempoEmPalavras(3, 0));   // Três em ponto
console.log(tempoEmPalavras(3, 15));  // Três e quinze
console.log(tempoEmPalavras(3, 30));  // Três e meia
console.log(tempoEmPalavras(3, 45));  // Quinze para as quatro
console.log(tempoEmPalavras(4, 0));   // Quatro em ponto
console.log(tempoEmPalavras(4, 15));  // Quatro e quinze
console.log(tempoEmPalavras(4, 30));  // Quatro e meia
console.log(tempoEmPalavras(4, 45));  // Quinze para as cinco
console.log(tempoEmPalavras(5, 0));   // Cinco em ponto
console.log(tempoEmPalavras(5, 15));  // Cinco e quinze
console.log(tempoEmPalavras(5, 30));  // Cinco e meia
console.log(tempoEmPalavras(5, 45));  // Quinze para as seis
console.log(tempoEmPalavras(6, 0));   // Seis em ponto
console.log(tempoEmPalavras(6, 15));  // Seis e quinze
console.log(tempoEmPalavras(6, 30));  // Seis e meia
console.log(tempoEmPalavras(6, 45));  // Quinze para as sete
console.log(tempoEmPalavras(7, 0));   // Sete em ponto
console.log(tempoEmPalavras(7, 15));  // Sete e quinze
console.log(tempoEmPalavras(7, 30));  // Sete e meia
console.log(tempoEmPalavras(7, 45));  // Quinze para as oito
console.log(tempoEmPalavras(8, 0));   // Oito em ponto
console.log(tempoEmPalavras(8, 15));  // Oito e quinze
console.log(tempoEmPalavras(8, 30));  // Oito e meia
console.log(tempoEmPalavras(8, 45));  // Quinze para as nove
console.log(tempoEmPalavras(9, 0));   // Nove em ponto
console.log(tempoEmPalavras(9, 15));  // Nove e quinze
console.log(tempoEmPalavras(9, 30));  // Nove e meia
console.log(tempoEmPalavras(9, 45));  // Quinze para as dez
console.log(tempoEmPalavras(10, 0));  // Dez em ponto
console.log(tempoEmPalavras(10, 15)); // Dez e quinze
console.log(tempoEmPalavras(10, 30)); // Dez e meia
console.log(tempoEmPalavras(10, 45)); // Quinze para as onze
console.log(tempoEmPalavras(11, 0));  // Onze em ponto
console.log(tempoEmPalavras(11, 15)); // Onze e quinze
console.log(tempoEmPalavras(11, 30)); // Onze e meia
console.log(tempoEmPalavras(11, 45)); // Quinze para o meio dia
console.log(tempoEmPalavras(12, 0));  // Meio dia em ponto
console.log(tempoEmPalavras(12, 15)); // Meio dia e quinze
console.log(tempoEmPalavras(12, 30)); // Meio dia e meia
console.log(tempoEmPalavras(13, 0));   // Uma em ponto
console.log(tempoEmPalavras(13, 15));  // Uma e quinze
console.log(tempoEmPalavras(13, 30));  // Uma e meia
console.log(tempoEmPalavras(13, 45));  // Quinze para as duas
console.log(tempoEmPalavras(14, 0));   // Duas em ponto
console.log(tempoEmPalavras(14, 15));  // Duas e quinze
console.log(tempoEmPalavras(14, 30));  // Duas e meia
console.log(tempoEmPalavras(14, 45));  // Quinze para as três
console.log(tempoEmPalavras(15, 0));   // Três em ponto
console.log(tempoEmPalavras(15, 15));  // Três e quinze
console.log(tempoEmPalavras(15, 30));  // Três e meia
console.log(tempoEmPalavras(15, 45));  // Quinze para as quatro
console.log(tempoEmPalavras(16, 0));   // Quatro em ponto
console.log(tempoEmPalavras(16, 15));  // Quatro e quinze
console.log(tempoEmPalavras(16, 30));  // Quatro e meia
console.log(tempoEmPalavras(16, 45));  // Quinze para as cinco
console.log(tempoEmPalavras(17, 0));   // Cinco em ponto
console.log(tempoEmPalavras(17, 15));  // Cinco e quinze
console.log(tempoEmPalavras(17, 30));  // Cinco e meia
console.log(tempoEmPalavras(17, 45));  // Quinze para as seis
console.log(tempoEmPalavras(18, 0));   // Seis em ponto
console.log(tempoEmPalavras(18, 15));  // Seis e quinze
console.log(tempoEmPalavras(18, 30));  // Seis e meia
console.log(tempoEmPalavras(18, 45));  // Quinze para as sete