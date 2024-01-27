function diaEmPalavras(dia, mes, ano){
    // tentar fazer com Map, forma fixe
    // escreve a 
  let anos = ano-2000
  let diasAnos= new Map ([
  [1, 'um'],
  [2, 'dois'],
  [3, 'três'],
  [4, 'quatro'],
  [5, 'cinco'],
  [6, 'seis'],
  [7, 'sete'],
  [8, 'oito'],
  [9, 'nove'],
  [10, 'dez'],
  [11, 'onze'],
  [12, 'doze'],
  [13, 'treze'],
  [14, 'catorze'],
  [15, 'quinze'],
  [16, 'dezasseis'],
  [17, 'dezassete'],
  [18, 'dezoito'],
  [19, 'dezanove'],
  [20, 'vinte'],
  [21, 'vinte e um'],
  [22, 'vinte e dois'],
  [23, 'vinte e três'],
  [24, 'vinte e quatro'],
  [25, 'vinte e cinco'],
  [26, 'vinte e seis'],
  [27, 'vinte e sete'],
  [28, 'vinte e oito'],
  [29, 'vinte e nove'],
  [30, 'trinta'],
  [31, 'trinta e um']
  ])

let meses = new Map([
 
  [1, 'janeiro'],
  [2, 'fevereiro'],
  [3, 'março'],
  [4, 'abril'],
  [5, 'maio'],
  [6, 'junho'],
  [7, 'julho'],
  [8, 'agosto'],
  [9, 'setembro'],
  [10, 'outubro'],
  [11, 'novembro'],
  [12, 'dezembro']

])
    if(ano===2000){
        return `${diasAnos.get(dia)} de ${meses.get(mes)} de dois mil`
    }else
    return `${diasAnos.get(dia)} de ${meses.get(mes)} de dois mil e ${diasAnos.get(anos)}`
}
