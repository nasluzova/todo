// Перепиши на function expression и function arrow:

const greet = (name) => `Привет, ${name}!`;

function greet(name) {
  return `Привет, ${name}!`;
}
const create = function (name, age) {
  return {
    name: name,
    age: age,
  };
};
function createPerson(name, age) {
  return {
    name: name,
    age: age,
  };
}
// Напиши стрелочную функцию, которая возвращает меньшее из значений a и b
const least = (a, b) => {
  if (a <= b) {
    return a;
  } else {
    return b;
  }
};
