function printPrimes(upperLimit) {
  let currentNumber = 2;

  while (currentNumber <= upperLimit) {
    let divisorCount = 0;

    for (let count = 1; count <= currentNumber; count++) {
      if (currentNumber % count === 0) {
        divisorCount++;
      }
    }

    if (divisorCount === 2) {
      console.log(currentNumber);
    }

    currentNumber++;
  }
}

printPrimes(10);
