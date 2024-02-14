function fraseInversa(frase) {
    const split= frase.split(" ")

    const reversed = split.reverse()

    return reversed.join(" ")
}
