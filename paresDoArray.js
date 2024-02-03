function paresDoArray(array){
    if (array.length === 0) {
        return[];
    }
  const rest = paresDoArray(array.slice(1));

  if(array[0] % 2 === 0) {
      return [array[0], ...rest]
  } else {
      return rest
  }
}