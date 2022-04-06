import game1 from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  console.log(`Question: ${a} ${b}`);

  let i = a;
  while (a % i !== 0 || b % i !== 0) {
    i -= 1;
  }
  return i;
};

const divisor = () => game1(rules, gcd);

export default divisor;
