import randomNum from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateData = () => {
  const number = randomNum(50);
  console.log(`Question: ${number}`);
  return isPrime(number);
};

export { rules, generateData };
