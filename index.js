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