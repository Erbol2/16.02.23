function myName(name, surname) {
  console.log(`My name is ${name} ${surname}`);
}
myName("Erbol", "Alymbekov");

function printVol(height, radius) {
  let pi = 3.14;
  let result = (pi * (radius ** 2) * height) / 3;
  console.log(`The volume is ${result}`)
}
printVol(7, 10);

function getLength(str) {
  return str.length;
}

console.log(getLength("Hello"))

function oddOrEven(a) {
  if (a % 2 === 0) {
    console.log(`${a} is even`);
  }
  else {
    console.log(`${a} is odd`);
  }
}
oddOrEven(8);

function getSquareOfTheNum(a) {
  return a ** 2;
}
console.log(getSquareOfTheNum(7));

function getRoot(a) {
  return Math.sqrt();
}
console.log(Math.sqrt(81));

function getPerimetr(a, b, c, d, e) {
  return a + b + c + d + e;
}
console.log(getPerimetr(2, 5, 7, 3, 6));


for (let i = 0; i <= 33; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


let n = 1;
for (let i = 8; i > 0; i--) {
  console.log(n);
  n = n * i;
}

for (let i = 0; i <= 10; i++) {
  let result = i ** 2;
  console.log(result)
}

let num = 0;
for (let i = 0; i <= 25; i++) {
  num = num + i;
  console.log(num);
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}
for (let i = 0; i <= 15; i++) {
  if (i % 2 != 0) {
    console.log(i)
  }
}

let arr = ["my", "name", "is"];
arr.unshift("world");
arr.unshift("Hello");
arr.push("Erbol");
arr.push("what is");
arr.push("your name?")

console.log(arr)

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    even = even + nums[i];
    console.log(even);
  }
}

let str = [];
let str1 = ["I", "like"];
let str2 = ["to", "eat"];

str = str1.concat(str2);
console.log(str);

let numbers = ["one", "two", "three"];
numbers.reverse();
console.log(numbers);

let names = ["Erjan", "Ermek", "Erbol"];
for (let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}`);

}

let number = [2, 3, 4, 5];
for (let i = 0; i < number.length; i++) {
  console.log(number[i] ** 2);
}

let animals = ["cat", "dog", "snake"];
for (let i = 0; i < animals.length; i++) {
  if (animals[i] === animals[i]) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}