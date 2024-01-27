function contaNumeroDeDivisoesPorDois(n){
    let count = 0;
    
    while(n > 1){
       n = Math.floor(n / 2);
       count++;
    }
    return count;
}