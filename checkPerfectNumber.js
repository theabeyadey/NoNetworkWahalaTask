function checkPerfectNumber(number) {

    let total = 0;

	for (let count = 1; count < number; count++) {


		if (number % count === 0) {
			total += count;
		}

		return total === number;
    }
}

console.log(checkPerfectNumber(28));

