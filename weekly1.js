const readline = require("node:readline");
const calculateResult = require("./utils/calculate");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

const menu = [{
    name: "Esteh Melati",
    price: 15500
}, {
    name: "Thai Tea",
    price: 22000
}, {
    name: "Matcha Bunga Melati",
    price: 29500
}, {
    name: "Cincau Esteh Susu",
    price: 21000
}, {
    name: "Esteh Matcha Latte",
    price: 29500
}, {
    name: "Esteh Lychee",
    price: 20500
}, {
    name: "Esteh Susu Nusantara",
    price: 20500
}, {
    name: "Matcha Sakura",
    price: 26000
}, {
    name: "Chizu Matcha",
    price: 29500
}, {
    name: "Chizu Taro",
    price: 29500
}];



function mainMenu() {
    console.log(`
    **====**   Esteh Indonesia   **====**

        1.Daftar Menu
        2.Keranjang
        3.Pembayaran
        4.Keluar
        `
    );

    rl.question("Input : ", function (input) {
        input = parseInt(input);
        switch (input) {
            case 1:
                showMenu();
                selectMenu();
                break;

            case 2:

                if (cart.length === 0) {

                    console.log("\nKeranjang masih kosong!");

                    return mainMenu();

                } else {

                    showCard();

                }

                break;

            case 3:

                if (cart.length === 0) {

                    console.log("\nBelum ada pesanan!");

                    return mainMenu();

                } else {
                    checkout();

                }

                break;

            case 4:
                console.log("Program Selesai");
                rl.close();
        }
    });
}

function showMenu() {
    console.log("\n=== Daftar Menu ===");
    for (let i = 0; i < menu.length; i++) {
        console.log((i + 1) + ". " + menu[i].name + " - Rp." + menu[i].price + ".-");
    }
}

function selectMenu() {
    rl.question("Mau Nomor Menu berapa : ", function (select) {
        let i = parseInt(select) - 1;
        if (!menu[i]) {

            console.log("\nMenu tidak tersedia!");

            showMenu();
            selectMenu();

            return;
        }
        console.log(menu[i]);

        rl.question("Mau beli berapa :", function (quantity) {
            let qty = parseInt(quantity);
            let item = {
                name: menu[i].name,
                price: menu[i].price,
                qty: qty,
                subtotal: menu[i].price * qty
            };

            cart = [...cart, item];

            console.log("\n Barang Berhasil Masuk Di Keranjang !!!");
            console.log(cart);

            rl.question("Ada Pesanan lagi y/n : ", function (add) {
                if (add == "y") {
                    showMenu();
                    selectMenu();
                } else {
                    showCard();
                }
            });
        });
    });
}

let cart = [];

function showCard() {
    console.log("\n===== Keranjang =====");

    cart.forEach(({ name, qty, subtotal }, index) => {

        console.log(
            `${index + 1}. ${name}
            Quantity : ${qty}
            Subtotal : Rp.${subtotal}`
        );

    });
    const result = calculateResult(cart);
    console.log("\n Total Belanja : Rp.", result);

    mainMenu();
}

function payment(result) {
    rl.question("Masukkan Uang : Rp.", function (money) {
        let pay = parseInt(money);
        let remainingMoney = pay - result;
        if (pay < result) {
            console.log("Uang Tidak Cukup!");
            payment(result);
        } else {
            console.log("\n==== Pembayaran ====");
            console.log("Total : Rp.", + result);
            console.log("Bayar : Rp.", + pay);
            console.log("Kembalian : Rp.", + remainingMoney);
            console.log("Terima Kasih Pembayaran Berhasil !!!");
            rl.close();
        }

    }
    );

}

function checkout() {

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

    payment(result);
}

mainMenu();

