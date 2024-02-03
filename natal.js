function calculaDiasAteAoNatal(dia, mes){
    // escreve aqui a função
    //meses com 30 dias  ABRIL JUNHO SETEMBRO NOVEMBRO
    let fevereiro= 31;  //28
    let março= 31+28;  
    let abril= 31+28+31;
    let maio=  31+28+31+30;
    let jun=  31+28+31+30+31;
    let jul=  31+28+31+30+31+30;
    let ago=  31+28+31+30+31+30+31;
    let set=  31+28+31+30+31+30+31+31;
    let out=  31+28+31+30+31+30+31+31+30;
    let nov=  31+28+31+30+31+30+31+31+30+31;
    let dez=  31+28+31+30+31+30+31+31+30+31+30;
    
    if (dia <1 || dia >31){z
        return "Por favor introduza um dia entre 1 e 31."
    }
    if(mes<1 || mes>12){
        return "Por favor introduza um mês entre 1 e 12." ///atençao ao PPor favor!!
    }
    if((mes==4|| mes==9 || mes==11 || mes==6) && (dia >30)){
        return "Por favor introduza um dia entre 1 e 30."
    }
    if(mes==2 && dia>28){
        return "Por favor introduza um dia entre 1 e 28."
    }
    if(mes==12 && dia==25){
        return "Hoje é Natal!"
    }
    if(mes==12 && dia>25){
        let diasNatal = 31-dia+365;
        return "Faltam " + diasNatal + " dias até ao Natal."
    }
    if(mes==1){
        return "Faltam " + 365-dia + " dias até ao Natal."
    }
}
    console.log(calculaDiasAteAoNatal1(25,12))
    console.log(calculaDiasAteAoNatal1(25,2))