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
        if(h>12){
            h= h-12
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
        } else if (h <12 && m == 1) {
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
    }else if(h==23){
        h=11;
        return horas[h] + " e " + minutos[m]
    }
    else {
        return horas[h] + " e " + minutos[m]
    }
}