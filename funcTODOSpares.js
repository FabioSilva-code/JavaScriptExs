// Cria uma função que retorna true se todos os elementos do array forem pares.

function todosPares(array){


    const verifTodosPar = array.every((ele)=> (ele % 2 ===0))

    return verifTodosPar
}
let array = ["2","4","6","8"]
/* let array = ["2","3","6","1"] */ //false
console.log(todosPares(array))