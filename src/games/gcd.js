import engine from '../index.js';
import randomNum from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let i = a;
  while (a % i !== 0 || b % i !== 0) {
    i -= 1;
  }
  return i;
};

const generateData = () => {
  const a = randomNum(100);
  const b = randomNum(100);
  console.log(`Question: ${a} ${b}`);
  return getGcd(a, b);
};

const gcdGame = () => engine(rules, generateData);

export default gcdGame;
