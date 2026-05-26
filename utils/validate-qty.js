function validateQty(quantity) {
  const qty = Number(quantity);

  return Number.isInteger(qty)
    && qty > 0;
}

module.exports = validateQty;