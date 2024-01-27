function arrayDeZeroAN(n){
    if (n <= 0 || isNaN(n) || !Number.isInteger(n))
        return "Por favor insira um número superior a 0.";
    if (n == 0) return [0];
    const arrNMenosUm = arrayDeZeroAN(n - 1);
    arrNMenosUm.push(n - 1);
    return arrNMenosUm;
}
   console.log(arrayDeZero(4))
    



