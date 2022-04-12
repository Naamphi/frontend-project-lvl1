import engine from '../index.js';
import randomNum from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateData = () => {
  const number = randomNum(103);
  const answer = isEven(number) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  return answer;
};

const evenGame = () => engine(rules, generateData);

export default evenGame;
