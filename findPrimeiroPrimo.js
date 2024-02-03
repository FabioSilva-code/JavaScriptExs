function encontraPrimo(array){
  return array.find((ele)=>isPrime(ele))
}
function isPrime(number){
  if (number<=1){
      return false
  }
  for(i=2 ; i <= Math.sqrt(number);i++){
      if(number % i===0){
          return false
      }
  }return true
}