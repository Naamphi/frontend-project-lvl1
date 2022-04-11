import readlineSync from 'readline-sync';

const rounds = 3;

const engine = (rules, round) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 0; i < rounds; i += 1) {
    const result = String(round());
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log('Correct!');
    }
    if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;
