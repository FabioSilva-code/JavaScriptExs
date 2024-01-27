function calculaDiaDoAno(dia, mes){
    // escreve aqui a função
    //meses com 30 dias  ABRIL JUNHO SETEMBRO NOVEMBRO
    let fevereiro= 31 + dia;  //28
    let março= 31+28 + dia;  
    let abril= 31+28+31 +dia;
    let maio=  31+28+31+30 +dia;
    let jun=  31+28+31+30+31 +dia;
    let jul=  31+28+31+30+31+30 +dia;
    let ago=  31+28+31+30+31+30+31 + dia;
    let setembro=  31+28+31+30+31+30+31+31 + dia;
    let out=  31+28+31+30+31+30+31+31+30 +dia ;
    let nov=  31+28+31+30+31+30+31+31+30+31 +dia;
    let dez=  31+28+31+30+31+30+31+31+30+31+30 +dia;
    
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
    if(mes==1){
        return dia
    }
    if(mes==2){
        return fevereiro
    }
    if(mes==3){
        return março
    }
    if(mes==4){
        return abril
    }
    if(mes==5){
        return maio
    }
    if(mes==6){
        return jun
    }
    if(mes==7){
        return jul
       
    }
    if(mes==8){
       
        return ago
    }
    if(mes==9){
        return setembro
    }
    if(mes==10){
        return out
    }
    if(mes==11){
        return nov
    }
    if(mes==12){
        return dez
    }
}
  