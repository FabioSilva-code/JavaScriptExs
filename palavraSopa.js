palavraExisteEmSopaDeLetras(arrayStrings,palavra){
    let palavraArray = palavra.split("") 
    let reversePalavra = palavraArray.reverse()
    let resultadoPalavraInv =  reversePalavra.join("")


    for(i=0; i<=arrayStrings.length; i++){
        

        if(arrayStrings[i][i]=== resultadoPalavraInv  ||  arrayStrings[i][i]===palavra ){
            return true
        }
        
    }
}