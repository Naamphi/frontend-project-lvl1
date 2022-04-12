import engine from '../index.js';
import randomNum from '../utils.js';

const rules = 'What number is missing in the progression?';

const getQuestion = (start, step, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const progressionLength = 10;

const generateData = () => {
  const num = Math.floor(Math.random() * (50 - 5) + 5);
  const step = Math.floor(Math.random() * (10 - 5) + 2);
  const unkownNum = randomNum(10);
  const progression = getQuestion(num, step, progressionLength);
  const answer = String(progression[unkownNum]);
  progression[unkownNum] = '..';
  console.log(`Question: ${progression.join(' ')}`);

  return answer;
};

const progression = () => engine(rules, generateData);

export default progression;
