function colatz(n) {

    if (n === 1) {
        return 0
    }

    if (n % 2 === 0) {
        return 1+ colatz(n/2) 
                // 1 + colatz(2)
               // 1 + colatz (1)
               

    }
    if (n %2 !== 0){
        return 1+ colatz((3*n) +1)
    }
}
console.log(colatz(4))