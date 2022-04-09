import game1 from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  let result = '';
  const number = Math.floor(Math.random() * 50);
  console.log(`Question: ${number}`);

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = 'no';
      break;
    } else result = 'yes';
  }
  return result;
};

const isPrime = () => game1(rules, prime);

export default isPrime;
