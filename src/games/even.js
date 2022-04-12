import engine from '../index.js';
import randomNum from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateData = () => {
  const num = randomNum(103);
  const answer = isEven(num) ? 'yes' : 'no';
  console.log(`Question: ${num}`);
  return answer;
};

const evenGame = () => engine(rules, generateData);

export default evenGame;
