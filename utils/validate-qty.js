/**
 * 
 * @param {string} quantity user input quantity 
 * @returns {boolean} true if quantity is a positive number
 */

function validateQty(quantity) {
  const qty = Number(quantity);

  return Number.isInteger(qty)
    && qty > 0;
}

module.exports = validateQty;