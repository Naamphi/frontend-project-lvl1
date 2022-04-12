import engine from '../index.js';
import randomNum from '../utils.js';

const rules = 'What is the result of the expression?';

const calc = (char, Num1, Num2, operator) => {
  switch (operator[char]) {
    case '+':
      return Num1 + Num2;
    case '-':
      return Num1 - Num2;
    case '*':
      return Num1 * Num2;
    default:
      throw Error('Unexpected operator');
  }
};

const generateData = () => {
  const operators = ['+', '-', '*'];
  const char = randomNum(3);
  const Num1 = randomNum(50);
  const Num2 = randomNum(30);
  console.log(`Question: ${Num1} ${operators[char]} ${Num2}`);
  return calc(char, Num1, Num2, operators);
};

const calculator = () => engine(rules, generateData);

export default calculator;
