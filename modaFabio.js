// for dentro de um for um guarda valor outro percorre o array com esse numero e aumenta contagem
// na passagem ao loop seguinte guarda outro numero e faz contagem se contagem for maior muda contrario n muda
// se igual???!?!?!
// ordeno o array

function calcularModa(arr) {
  // Conta a frequência de cada elemento
  let contagem = {};

  for (let i = 0; i < arr.length; i++) {
    let elemento = arr[i];
    contagem[elemento] = (contagem[elemento] || 0) + 1;
  }

  // Encontra o(s) valor(es) com a maior contagem
  let modas = [];
  let maiorContagem = 0;

  for (let chave in contagem) {
    let contagemAtual = contagem[chave];

    if (contagemAtual > maiorContagem) {
      modas = [parseInt(chave)];
      maiorContagem = contagemAtual;
    } else if (contagemAtual === maiorContagem) {
      modas.push(parseInt(chave));
    }
  }

  // Verifica se há modas (pode haver mais de uma)
  if (modas.length === Object.keys(contagem).length) {
    return "Não há moda"; // Se todas as contagens são iguais, não há moda
  }

  return modas;
}

// Exemplo de uso
let conjuntoDados = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
let moda = calcularModa(conjuntoDados);

console.log("A(s) moda(s) é(são): " + moda);