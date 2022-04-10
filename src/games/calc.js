import randomNum from '../utils.js';

const rules = 'What is the result of the expression?';

const calc = (char, Num1, Num2, operators) => {
  let result = '';
  switch (operators[char]) {
    case '-':
      result = Num1 - Num2;
      break;
    case '+':
      result = Num1 + Num2;
      break;
    case '*':
      result = Num1 * Num2;
      break;
    default:
  }
  return result;
};

const generateData = () => {
  const char = randomNum(3);
  const Num1 = randomNum(100);
  const Num2 = randomNum(50);
  const operators = ['+', '-', '*'];
  console.log(`Question: ${Num1} ${operators[char]} ${Num2}`);
  return calc(char, Num1, Num2, operators);
};

export { rules, generateData };
