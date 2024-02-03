function binarySearch(array, num) {

    let min = 0;
    let max = array.length - 1;
    let count = 0;

    while (max >= min) {
        let guess = Math.round((max + min) / 2);
        count++;

        if (array[guess] === num) {
            return {
                foundAtIndex: guess,
                numberOfGuesses: count
            };
        } else if (array[guess] < num) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }
    return {
        foundAtIndex: null,
        numberOfGuesses: count
    };
}
