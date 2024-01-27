function valorMaisAltoDoArray(array){
    // escreve aqui a função
    let maisAlto=0
    for(i=0; i< array.length; i++){
        if(array[i]>maisAlto){
            maisAlto = array[i]
        }
    }return maisAlto
}