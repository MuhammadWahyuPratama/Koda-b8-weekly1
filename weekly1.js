const readline = require("node:readline");
const askQuestion = require("./utils/quetions");
const calculateResult = require("./utils/calculate");
const menu = require("./data/menu");
const checkout = require("./services/checkout");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();

async function mainMenu() {

  console.log(`
    **====**   Esteh Indonesia   **====**

        1.Daftar Menu
        2.Keranjang
        3.Pembayaran
        4.Keluar
    `);

  let input = await askQuestion(rl, "Input : ");

  input = parseInt(input);

  switch (input) {

  case 1:
    showMenu();
    await selectMenu();
    break;

  case 2:

    if (cart.length === 0) {

      console.log("\nKeranjang masih kosong!");

      return mainMenu();

    }

    showCart();
    break;

  case 3:

    if (cart.length === 0) {

      console.log("\nBelum ada pesanan!");

      return mainMenu();

    }

    checkout(cart, rl);

    break;

  case 4:

    console.log("Program selesai");

    rl.close();

  }

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
    if (isNaN(i + 1) || !menu[i]) {
      console.log("\nMenu Tidak Tersedia!");
      showMenu();
      return selectMenu();
    }
    if (!menu[i]) {

      console.log("\nMenu tidak tersedia!");

      showMenu();
      selectMenu();

      return;
    }
    console.log(menu[i]);

    rl.question("Mau beli berapa :", function (quantity) {
      let qty = parseInt(quantity);
      if (isNaN(qty) || qty <= 0) {
        console.log("\nJumlah Harus Berupa Angka!");
        return selectMenu();
      }
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
          showCart();
        }
      });
    });
  });
}

let cart = [];

function showCart() {
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





mainMenu();

