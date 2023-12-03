// Q4. Generate nembers between any 2 given nmmbers.
// Ex
//  cnst num1 = 10
//  cnst num2 = 25;
// Output: 11, 12, 13, ...., 25

let num1 = 100;
let num2 = 200;
console.log("Even numbers between 100 and 200:");
for (let i = num1; i <= num2; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
