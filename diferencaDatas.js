function diferencaEmDias(data1, data2) {
    // escreve aqui a função

    let dataNovamiliseg= Math.abs(data1 -data2) /// valor retorna em milisegundos devido ao uso de date

    let dataNova = Math.floor(dataNovamiliseg / (24*60*60*1000)) //passa miseg para horas
    return dataNova
    
}
console.log(diferencaEmDias(new Date(2020,3,4), new Date(2020,3,28)))