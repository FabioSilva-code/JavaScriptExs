function umOuOutra(a , b){
    //Retorna verdade se apenas um dos argumentos é verdade
    if( a == true && b==false || b==true && a==false ){
        return true;
    }else{
        return false;
    }
  
}

console.log(umOuOutra(false,false),
umOuOutra(true,false),
umOuOutra(false,true),
umOuOutra(true,true))

function umOuOutra1(a , b){
    //Retorna verdade se apenas um dos argumentos é verdade
    let resultado= (a !== b ? true : false);
    
    return resultado
}


console.log(umOuOutra1(false,false),
umOuOutra1(true,false),
umOuOutra1(false,true),
umOuOutra1(true,true))


function umOuOutra2(a , b , c){
    //Retorna verdade se apenas um dos argumentos é verdade
    if (a==true && a !== b && b==c || a == b && b !==c && c==true || b==true && b!==a && a==c){

        return true
    }
    return false
    
    
}

console.log(umOuOutra2(false,false,false),
umOuOutra2(true,false,true),
umOuOutra2(false,true,false),
umOuOutra2(true,true,true),
umOuOutra2(true,false,false))
