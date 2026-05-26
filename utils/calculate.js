/**
 * 
 * @param {object[]} cart list of cart items
 * @param {number} cart[].subtotal price for each item
 * @returns {number} total amount of all cart items
 */

function calculateResult(cart) {
  return cart.reduce((result, item) => {
    return result + item.subtotal;
  }, 0);
}

module.exports = calculateResult;