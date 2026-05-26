/**
 * 
 * @param {string} input user input from readline 
 * @returns {boolean} return true if input is valid
 */

function validateYesNo(input) {
  return input === "y" || input === "n";
}

module.exports = validateYesNo;