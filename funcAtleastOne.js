
//Cria uma função que retorna true se pelo menos um dos elementos do array for par.

function peloMenosUm(array){
    

    const verif1Par = array.some((ele)=> (ele % 2 ===0))

    return verif1Par
}
let array = ["1","3","5","3"]
/* let array = ["2","3","6","1"] */ //false
console.log(peloMenosUm(array))