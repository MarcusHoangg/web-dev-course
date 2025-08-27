/*
//Step 1
// 1. cube
const cube = function(x) {
  return x * x * x;
};

// 2. fullName
const fullName = function(first, last) {
  return first + " " + last;
};

// 3. power
const power = function(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
};

// 4. sumCubes
const sumCubes = function(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += cube(numbers[i]);
  }
  return total;
};

// Test thử
console.log("Cube(3):", cube(3));
console.log("Fullname:", fullName("Minh", "Hoang"));
console.log("Power(2, 4):", power(2, 4));
console.log("SumCubes [1,2,3]:", sumCubes([1, 2, 3]));

*/

// Step 2 
/*
1. var is hoisted to the top of the scope, but its default value is undefined.
So it logs undefined instead of throwing an error.
2. let is also hoisted but placed in the Temporal Dead Zone (TDZ).
The variable exists in memory but cannot be accessed before its declaration line.
Accessing it early throws a ReferenceError.
3.The variable showMessage is hoisted but, as a const, it’s stuck in the TDZ until initialized.
Calling showMessage() before the assignment triggers a ReferenceError.
4 With a function declaration, the entire function (including its body) is hoisted.
 call showMessage() before the function is defined.
*/

//Step 3
let values = [10, 20, 30];

for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}



let lastLogin = '1/1/1970';

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`;
};

console.log(welcome('Charlie', 'Munger'));

