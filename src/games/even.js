import engine from '../index.js';
import randomNum from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

const generateData = () => {
  const number = randomNum(200);
  console.log(`Question: ${number}`);
  return even(number);
};

const evenGame = () => engine(rules, generateData);

export default evenGame;
