function hammingWeight(number) {
    let count = 0;

    while (number > 0) {
        let remainder = number % 2;
        
        if (remainder === 1) {
            count++;
        }
        number = Math.floor(number / 2);
    }
    return count;
}

console.log(hammingWeight(10));

