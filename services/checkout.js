const calculateResult = require("../utils/calculate");
const payment = require("./payment");

function checkout(cart,rl) {

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