const numbers = [1, 2, 3, 4, 5];

function* squareGenerator(numbers) {
  for (const number of numbers) {
    yield number * number;
  }
}

const squares = [];
const iterator = squareGenerator(numbers);

for (const square of iterator) {
  squares.push(square);
}

console.log("Original numbers:", numbers);
console.log("Squared numbers:", squares);
