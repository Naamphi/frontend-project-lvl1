import game1 from '../index.js';

const rules = 'What is the result of the expression?';

const calc = () => {
  const arrayChars = ['+', '-', '*'];
  const chars = arrayChars[Math.floor(Math.random() * 3)];
  const Num1 = Math.floor(Math.random() * 100);
  const Num2 = Math.floor(Math.random() * 50);
  let result = '';
  console.log(`Question: ${Num1} ${chars} ${Num2}`);

  switch (chars) {
    case '+':
      result = Num1 + Num2;
      break;
    case '-':
      result = Num1 - Num2;
      break;
    case '*':
      result = Num1 * Num2;
      break;
    default:
  }
  return result;
};

const calculator = () => game1(rules, calc);

export default calculator;
