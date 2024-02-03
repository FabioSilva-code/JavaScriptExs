function mapaOcorrencias(array) {
    // Utilizando o método reduce para criar o mapa de ocorrências
    const ocorrencias = array.reduce((mapa, elemento) => {
      // Verifica se o elemento já está no mapa
      if (mapa.has(elemento)) {
        // Se sim, incrementa o contador
        mapa.set(elemento, mapa.get(elemento) + 1);
      } else {
        // Se não, adiciona o elemento ao mapa com contador igual a 1
        mapa.set(elemento, 1);
      }
      return mapa;
    }, new Map()); // Inicializa o mapa vazio
  
    return ocorrencias;
  }
  
  // Exemplo de uso:
  const meuArray = [1, 2, 3, 1, 2, 3, 4, 5, 1];
  const resultado = mapaOcorrencias(meuArray);
  
  console.log(resultado);