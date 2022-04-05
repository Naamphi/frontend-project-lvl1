import game1 from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  const number = Math.floor(Math.random() * 200);
  console.log(`Question: ${number}`);
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

const evenNum = () => game1(rules, even);

export default evenNum;
