function validatePayment(money) {
  const pay = parseInt(money);

  return !isNaN(pay) && pay > 0;
}

module.exports = validatePayment;