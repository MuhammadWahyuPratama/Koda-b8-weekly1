const readline = require("node:readline");
const calculateTotal = require("./utils/calculate");
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
                pilihMenu();
                break;

            case 2:

                if (keranjang.length === 0) {

                    console.log("\nKeranjang masih kosong!");

                    return mainMenu();

                } else {

                    tampilKeranjang();

                }

                break;

            case 3:

                if (keranjang.length === 0) {

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

function pilihMenu() {
    rl.question("Mau Nomor Menu berapa : ", function (pilih) {
        let i = parseInt(pilih) - 1;
        if (!menu[i]) {

            console.log("\nMenu tidak tersedia!");

            showMenu();
            pilihMenu();

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

            keranjang = [...keranjang, item];

            console.log("\n Barang Berhasil Masuk Di Keranjang !!!");
            console.log(keranjang);

            rl.question("Ada Pesanan lagi y/n : ", function (add) {
                if (add == "y") {
                    showMenu();
                    pilihMenu();
                } else {
                    tampilKeranjang();
                }
            });
        });
    });
}

let keranjang = [];

function tampilKeranjang() {
    console.log("\n===== Keranjang =====");

    keranjang.forEach((item, index) => {

        console.log(
            (index + 1) + ". " +
            item.name +
            "\n Quantity : " + item.qty +
            "\n Subtotal : Rp." + item.subtotal
        );

    });
    const total = calculateTotal(keranjang);
    console.log("\n Total Belanja : Rp.", total);

    mainMenu();
}

function pembayaran(total) {
    rl.question("Masukkan Uang : Rp.", function (uang) {
        let bayar = parseInt(uang);
        let kembalian = bayar - total;
        if (bayar < total) {
            console.log("Uang Tidak Cukup!");
            pembayaran(total);
        } else {
            console.log("\n==== Pembayaran ====");
            console.log("Total : Rp.", + total);
            console.log("Bayar : Rp.", + bayar);
            console.log("Kembalian : Rp.", + kembalian);
            console.log("Terima Kasih Pembayaran Berhasil !!!");
            rl.close();
        }

    }
    );

}

function checkout() {

    console.log("\n===== PEMBAYARAN =====");

    let total = 0;

    for (let i = 0; i < keranjang.length; i++) {

        console.log(
            (i + 1) + ". " +
            keranjang[i].name +
            "\n Qty : " + keranjang[i].qty +
            "\n Subtotal : Rp." + keranjang[i].subtotal
        );

        total += keranjang[i].subtotal;
    }

    console.log("\nTotal Bayar : Rp." + total);

    pembayaran(total);

}

mainMenu();

