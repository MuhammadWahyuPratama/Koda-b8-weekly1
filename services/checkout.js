/**
 * 
 * @param {Object[]} cart list of items in cart
 * @param {string} cart[].name product name
 * @param {number} cart[].qty quantity of product
 * @param {number} cart[].subtotal subtotal price of item
 * @param {object} rl readline interface
 * @returns {void}
 */

const calculateResult = require("../utils/calculate");
const payment = require("./payment");

function checkout(cart, rl) {

  console.log("\n===== PEMBAYARAN =====");

  cart.forEach(({ name, qty, subtotal }, index) => {

    console.log(
      `${index + 1}. ${name}
            Qty      : ${qty}
            Subtotal : Rp.${subtotal}`
    );

  });

  const result = calculateResult(cart);

  console.log(`\nTotal Bayar : Rp.${result}`);

  payment(rl, result);
}

module.exports = checkout;