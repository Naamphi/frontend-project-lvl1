import engine from '../index.js';
import randomNum from '../utils.js';

const rules = 'What number is missing in the progression?';

const hideElement = (array, hideElem) => {
  const arr = array;
  arr[hideElem] = '..';
  return arr;
};

const progressionLength = 10;

const generateData = () => {
  const array = [];
  const step = Math.floor(Math.random() * (8 - 5) + 2);
  let num = Math.floor(Math.random() * (50 - 5) + 5);
  const hideElem = randomNum(10);

  for (let i = 0; i < progressionLength; i += 1) {
    array[i] = num;
    num += step;
  }
  const result = array[hideElem];
  const hideArr = hideElement(array, hideElem);
  console.log(`Question: ${hideArr.join(' ')}`);

  return result;
};

const progression = () => engine(rules, generateData);

export default progression;
