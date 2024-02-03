const pessoa = {
    nome: "Daniel",
    Idade: 19
};

function verificaIdade(pessoa){

    pessoa.maiorDeIdade = (pessoa.Idade >= 18 ? true : false)
    return pessoa
} 

 const verificaIdade = (pessoa) => {
    pessoa.maiorDeIdade = pessoa>=18
    return pessoa
 }

console.log(verificaIdade(pessoa));

/* function verificaIdade(pessoa){

    let adulto = true
    if(pessoa.Idade>=18){
        adulto = true
    }else {
        adulto = false
    }
    
    pessoa["maiorDeIdade"]= adulto
    return pessoa
} */