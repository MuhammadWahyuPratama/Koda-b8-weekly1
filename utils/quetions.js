/**
 *
 * @param {object} rl readline interface
 * @param {string} question message shown to the user
 * @returns {Promise<string>} user input from readline
 */

function askQuestion(rl, question) {

  return new Promise((resolve) => {

    rl.question(question, (answer) => {

      resolve(answer);

    });

  });

}

module.exports = askQuestion;