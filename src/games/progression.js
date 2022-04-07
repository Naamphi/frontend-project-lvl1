import game1 from '../index.js';

const rules = 'What number is missing in the progression?';

const progress = () => {
  const array = [];
  const step = Math.floor(Math.random() * (8 - 5) + 2);
  let num = Math.floor(Math.random() * (50 - 5) + 5);
  const hideElem = Math.floor(Math.random() * 10);

  for (let i = 0; i < 10; i += 1) {
    array[i] = num;
    num += step;
  }
  const result = array[hideElem];
  array[hideElem] = '..';
  console.log(`Question: ${array.join(' ')}`);

  return result;
};

const progression = () => game1(rules, progress);

export default progression;
