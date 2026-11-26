function reverseInteger(number) {
    let reverseNumber = "";

    while (number > 0) {
        let extractedNumber = number % 10;
        number = Math.floor(number / 10);

        reverseNumber += extractedNumber;
    }  
    
    return -(Number(reverseNumber));
}

console.log(reverseInteger(123));

