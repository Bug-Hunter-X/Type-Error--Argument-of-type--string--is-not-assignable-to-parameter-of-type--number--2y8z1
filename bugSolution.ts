function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(1, 2); // Correct: no error
const result2 = add(1, Number('2')); // Correct: converts string to number

console.log(result1); // Output: 3
console.log(result2); // Output: 3