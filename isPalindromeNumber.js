function isPalindromeNumber(number) {    
    const enteredNumber = number;
    let reverseNumber = "";

    while (number > 0) {
        let extractedNumber = number % 10;
        number = Math.floor(number / 10);

        reverseNumber += extractedNumber;
    }

    return Number(reverseNumber) === enteredNumber;
}

console.log(isPalindromeNumber(1223221));
console.log(isPalindromeNumber(123));

