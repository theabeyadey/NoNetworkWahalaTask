function isPowerOfTwo(number) {
    if (number > 0) {
    
        for (let power = 0; power <= 30; power++) {
            const powerOfTwo = Math.pow(2, power);
      
            if (powerOfTwo === number) {
            return true;
            }
        }
    }
    return false;
}

console.log(isPowerOfTwo(17));
console.log(isPowerOfTwo(64));

