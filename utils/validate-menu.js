/**
 * 
 * @param {string} input menu option input 
 * @returns {boolean} true if input is between 1 and 4
 */

function validateMenu(input) {
  const menu = parseInt(input);

  return !isNaN(menu)
    && menu >= 1
    && menu <= 4;
}

module.exports = validateMenu;