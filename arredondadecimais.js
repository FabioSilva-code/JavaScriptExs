function partesDecimais(array) {
    return array.map(elemento => Math.floor((elemento % 1) * 100) / 100);
  }
  
  console.log(partesDecimais([1.5, 2.4, 3.1]));
  // Output esperado: [0.5, 0.39, 0.1]