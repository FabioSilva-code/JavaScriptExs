function produtoExclusivo(array) {
    let arrayExclusivo = []
    let arrayParaCortar = []
    for (i = 0; i < array.length; i++) { //0
        arrayParaCortar = [...array]
        arrayParaCortar.splice([i], 1)
        arrayExclusivo.push(arrayParaCortar.reduce((acc, current) => acc * current, 1))

    } return arrayExclusivo
}