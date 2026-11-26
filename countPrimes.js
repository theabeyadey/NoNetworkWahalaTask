function countPrimes(upperLimit) {

    let counter = 0;

    for (let count = 2; count < upperLimit; count++) {

        let divisorCount = 0;

        for (let divisor = 1; divisor <= count; divisor++) {
            if (count % divisor === 0) {
                divisorCount++;
            }
        }

        if (divisorCount === 2) {
            counter++;
        }
    }

    return counter;
}

console.log(countPrimes(10));
