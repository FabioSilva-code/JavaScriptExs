function FizzBuzz(n) {
    let arrayfizz = []

    for (i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            arrayfizz.push("FizzBuzz")
        }
        else if (i % 3 === 0) {
            arrayfizz.push("Fizz")
        }
        else if (i % 5 === 0) {
            arrayfizz.push("Buzz")
        }
        else {
            arrayfizz.push(" ")
        }
    } return arrayfizz
}