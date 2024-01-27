function arrayDeZeroAN(n) {
    //crio outra funcao para facilitar a ida de 0 a n
   
        if (n == 0) {
            return [0];  // <---/ saida da recursao quando acabar
        }
            return [ ...arrayDeZeroAN(n - 1), n]; 
    }
    

console.log(arrayDeZeroAN(3))
