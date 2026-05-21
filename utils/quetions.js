function askQuestion(rl, question) {

  return new Promise((resolve) => {

    rl.question(question, (answer) => {

      resolve(answer);

    });

  });

}

module.exports = askQuestion;