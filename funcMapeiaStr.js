//funcao que mapeia um array de strings e retorna string com o tamanho elementos


function mapeia(array){

    const arrayTamanho = array.map((ele)=> ele.length)

    return arrayTamanho
}



let array = ["fabio","joao"]
console.log(mapeia(array))