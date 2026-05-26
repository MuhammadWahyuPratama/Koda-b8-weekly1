/**
 * 
 * @param {string} money payment input
 * @returns {boolean} true if payment is a valid positiv number
 */

function validatePayment(money) {
  const pay = parseInt(money);

  return !isNaN(pay) && pay > 0;
}

module.exports = validatePayment;