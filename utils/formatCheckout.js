/**
 * Creates checkout item display text.
 *
 * @param {Object} item cart item
 * @param {string} item.name product name
 * @param {number} item.qty quantity
 * @param {number} item.subtotal subtotal amount
 * @param {number} index item number
 * @returns {string} formatted checkout text
 */
function formatCheckout(item, index) {

  return `${index + 1}. ${item.name}
            Qty      : ${item.qty}
            Subtotal : Rp.${item.subtotal}`;

}

module.exports = formatCheckout;