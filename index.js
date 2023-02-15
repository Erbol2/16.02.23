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
