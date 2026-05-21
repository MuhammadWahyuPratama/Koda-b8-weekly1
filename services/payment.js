
function payment(rl, result) {
    rl.question("Masukkan Uang : Rp.", function (money) {

        let pay = parseInt(money);
        let remainingMoney = pay - result;

        if (pay < result) {
            console.log("Uang Tidak Cukup!");
            return payment(rl,result);
        }

        console.log("\nMemproses pembayaran...");

        setTimeout(() => {
            console.log("\n==== Pembayaran ====");
            console.log(`Total : Rp.${result}`);
            console.log(`Bayar : Rp.${pay}`);
            console.log(`Kembalian : Rp.${remainingMoney}`);
            console.log("Terima Kasih Pembayaran Berhasil !!!");
            rl.close();
        }, 2000);
    });
}

module.exports = payment;