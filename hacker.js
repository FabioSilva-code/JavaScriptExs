function converteHacker(string) {
    // Escreve aqui o teu código
    let res = ""
    for (i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === "a") {
            res += "4"
        }
        else if (string[i] === "E" || string[i] === "e") {
            res += "3"
        }
        else if (string[i] === "i" || string[i] === "I") {

            res += "1"
        }
        else if (string[i] === "O" || string[i] === "o") {

            res += "0"
        }
        else if (string[i] === "s" || string[i] === "S") {
            res += "5"
        }
        else {
            res += string[i]
        }
    }
    console.log(string)
    return res
}

console.log(converteHacker("Hey 4tolI"))