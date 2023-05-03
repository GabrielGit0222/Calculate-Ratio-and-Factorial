let factorialNumber = require("../factorial/index");

let ratioOfTwo = require("../ratio/index");

let ratioAndFactorial = (num1, num2, num3) => {
  let ratio = ratioOfTwo(num1, num2);
  let factorial = factorialNumber(num3);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
