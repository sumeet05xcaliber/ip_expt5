function* generatePrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) {
      yield number;
    }
  }
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// Example usage:
const limit = 20; // Change this to your desired limit
const primeGenerator = generatePrimes(limit);

console.log(`Prime numbers up to ${limit}:`);
for (const prime of primeGenerator) {
  console.log(prime);
}
