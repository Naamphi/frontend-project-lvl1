import engine from '../index.js';
import randomNum from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateData = () => {
  const number = randomNum(103);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  return correctAnswer;
};

const Prime = () => engine(rules, generateData);

export default Prime;
