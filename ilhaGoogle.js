//apenas ter em conta elemento seguinte e elemento logo abaixo
//Pensamento, ver 1º elemento, este elemento é um 1? ilha ++
//O elemento [i][j+1] é um 1? ilha--   
//O elemento [i+1][j] é um 1? ilha--    

let mapa = [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
]

let ilha = 0
let ilha0 = 0
let iteracoes = 0

for (let linha = 0; linha < mapa.length; linha++) {
    for (let coluna = 0; coluna < mapa.length; coluna++) {
        iteracoes++
        if (mapa[linha][coluna] === 1) {
            ilha++;
            console.log(ilha)
            if (linha + 1 < mapa.length && mapa[linha + 1][coluna] === 1) { // se o linha+1 existir , e se esse elemento tambem for 1 retira contagem ilha
                ilha--;
                console.log(ilha)
            }
            if (coluna + 1 < mapa.length && mapa[linha][coluna + 1] === 1) { // se o coluna+1 existir , e se esse elemento tambem for 1 retira contagem ilha
                ilha--;
                console.log(ilha)
            } if (linha + 1 < mapa.length && coluna + 1 < mapa.length && mapa[linha + 1][coluna + 1] === 1 && mapa[linha][coluna + 1] === 1 && mapa[linha + 1][coluna] === 1) {
                ilha++
                console.log(ilha)
                // estava a ter problema quando ficava um bloco de 1 (dois por dois por exemplo) , pois o 1 do vertice direito n entrava para a contagem como deveria
            }
        }
        if (mapa[linha][coluna] === 1) {
            ilha0++;
            if (linha + 1 < mapa.length && mapa[linha + 1][coluna] === 1) { // se o linha+1 existir , e se esse elemento tambem for 1 retira contagem ilha0
                ilha0--;

            }
            if (coluna + 1 < mapa.length && mapa[linha][coluna + 1] === 1) { // se o coluna+1 existir , e se esse elemento tambem for 1 retira contagem ilha0
                ilha0--;

            } if (linha + 1 < mapa.length && coluna + 1 < mapa.length && mapa[linha + 1][coluna + 1] === 1 && mapa[linha][coluna + 1] === 1 && mapa[linha + 1][coluna] === 1) {
                ilha0++
                // estava a ter problema quando ficava um bloco de 1 (dois por dois por exemplo) , pois o 1 do vertice direito n entrava para a contagem como deveria
            }
        }
    }
}
console.log(ilha)
/* console.log(ilha0)
console.log(iteracoes) */
return ilha;
