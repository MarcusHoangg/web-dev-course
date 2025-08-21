// ====================== Scenario 1 ======================
function sayHello() {
  return "Hello, world!";
}
const sayHelloArrow = () => "Hello, world!";

console.log("S1 regular  :", sayHello());
console.log("S1 arrow    :", sayHelloArrow());

// ====================== Scenario 2 ======================
function double(x) {
  return x * 2;
}
const doubleArrow = x => x * 2;

console.log("S2 regular  :", double(5));      // 10
console.log("S2 arrow    :", doubleArrow(5));  // 10

// ====================== Scenario 3 ======================
function add(x, y) {
  return x + y;
}
const addArrow = (x, y) => x + y;

console.log("S3 regular  :", add(3, 7));       // 10
console.log("S3 arrow    :", addArrow(3, 7));  // 10

// ====================== Scenario 4 ======================
const person = {
  name: "Alice",
  sayHi: function () {
    return "Hi, " + this.name + "!";
  },
};
console.log("S4 in object (function):", person.sayHi());

const personArrow = {
  name: "Alice",
  sayHi: () => "Hi, " + this?.name + "!", // this không trỏ đúng object
};
console.log("S4 in object (arrow)   :", personArrow.sayHi());

const personFixed = {
  name: "Alice",
  sayHi() {
    return `Hi, ${this.name}!`;
  },
};
console.log("S4 fixed               :", personFixed.sayHi());

// ====================== Scenario 5 ======================
const numbers = [1, 2, 3, 4, 5];
const doubled = [];

numbers.forEach(function (num) {
  doubled.push(num * 2);
});
console.log("S5 doubled (regular function):", doubled);

const doubledArrow = [];
numbers.forEach(num => doubledArrow.push(num * 2));
console.log("S5 doubled (arrow function)  :", doubledArrow);

const doubledMap = numbers.map(num => num * 2);
console.log("S5 doubled (map + arrow)     :", doubledMap);
