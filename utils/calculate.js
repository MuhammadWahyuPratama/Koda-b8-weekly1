function calculateResult(cart) {
  return cart.reduce((result, item) => {
    return result + item.subtotal;
  }, 0);
}

module.exports = calculateResult;