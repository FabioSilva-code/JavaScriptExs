function validaSubsequente(array, subarray) {
    let i = 0
    let j = 0

    while (i < array.length && j < subarray.length) {
        if (array[i] === subarray[j]) {
            j++
        }
        i++
    }
    return j === subarray.length
}
