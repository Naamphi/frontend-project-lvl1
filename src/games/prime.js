import randomNum from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result = '';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = 'no';
      break;
    } else result = 'yes';
  }
  return result;
};

const generateData = () => {
  const number = randomNum(50);
  console.log(`Question: ${number}`);
  return isPrime(number);
};

export { rules, generateData };
