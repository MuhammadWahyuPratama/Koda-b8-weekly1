/**
 * Processes payment and returns remaining money.
 *
 * @param {number} pay amount paid by user
 * @param {number} total total amount to pay
 * @returns {number|null} remaining money or null if payment is insufficient
 */


function processPayment(pay, total) {

  if (pay < total) {
    return null;
  }

  return pay - total;

}

module.exports = processPayment;