
function isBigEnough(n, array) {
    let filtered = array.filter(function(element) {
      return element != n
    })
    return filtered
  }
  console.log(isBigEnough(3,[3,4,5,6,7,8]))





function isBigEnough1(n, array) {
    let filtered1 = new Set(array)
    filtered1.clear(n)
    return filtered1
  }
  console.log(isBigEnough(3,[3,4,5,6,7,8]))
  console.log(isBigEnough1(3,[3,4,5,6,7,8]))