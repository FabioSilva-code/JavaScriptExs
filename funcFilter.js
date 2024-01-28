//Cria uma função que filtra os elementos pares, mapeia cada elemento para o seu quadrado e por fim reduz o array para calcular o somatório dos elementos resultantes.

function filtra(array){

    const arrayFiltrado = array.filter((ele) => (ele %2 === 0)).map((ele) => (ele ** 2)).reduce((acumulador, currentValue) => acumulador + currentValue,0 )
    
    return arrayFiltrado
}

let array = ["3","4","6","9"]
console.log(filtra(array))
