/**
 * Formats cart item display text.
 *
 * @param {Object} item cart item
 * @param {string} item.name product name
 * @param {number} item.qty quantity
 * @param {number} item.subtotal subtotal price
 * @param {number} index item number
 * @returns {string} formatted cart text
 */
function formatCart(item, index) {

  return `${index + 1}. ${item.name}
            Quantity : ${item.qty}
            Subtotal : Rp.${item.subtotal}`;

}

module.exports = formatCart;