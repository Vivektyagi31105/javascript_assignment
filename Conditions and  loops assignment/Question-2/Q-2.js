// Q2. Write a program that grades students based on their marks.
// a. If greater than 90 then A Grade
// b. If between 70 and 90 then a B grade
// c. If between 50 and 70 then a C grade
// d. Below 50 then an F grade

let marks = 90;

if (marks > 90) {
  console.log("Grade A");
} else if (marks <= 90 && marks > 70) {
  console.log("Grade B");
} else if (marks <= 70 && marks > 50) {
  console.log("Grade C");
} else {
  console.log("Grade F");
}
