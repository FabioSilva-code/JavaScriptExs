    // escreve aqui a função
    function inverteArray(array){
    
        //condicao de saida da recursao
        if (array.length === 0){
            return []
        }   
        return [array[array.length - 1]].concat(inverteArray(array.slice(0, array.length - 1)));
       /*  return string[string.length - 1] + inverteString(string.slice(0, string.length - 1)) */
    }
    console.log(inverteArray([1,2,3,4,5,6]))
         //recursao
        // slice(1) retira o primeiro elemento do array e retorna o array sem esse elemento
        // após isso temos um "novoArray" com os valores [2,3,4,5] onde concatenamos o valor que tiramos com slice ficando com [2,3,4,5,1]
        //processo repete até passar por todos os elementos, para por causa do if

