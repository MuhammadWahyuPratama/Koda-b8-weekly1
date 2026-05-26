const readline = require("node:readline");
const askQuestion = require("./utils/quetions");
const calculateResult = require("./utils/calculate");
const menu = require("./data/menu");
const checkout = require("./services/checkout");
const validateMenu = require("./utils/validate-menu");
const validateQty = require("./utils/validate-qty");
const validateYesNo = require("./utils/validate-y-n");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();
/**
 * display main menu and handles
 * @returns {Promise<void>}
 */
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
  if (!validateMenu(input)) {
    console.log("Pilihan Menu Tidak Tersedia!!");
    return mainMenu();
  }
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

/**
 * display avalaible drink menu
 * 
 * @return {void}
 */

function showMenu() {
  console.log("\n=== Daftar Menu ===");
  for (let i = 0; i < menu.length; i++) {
    console.log((i + 1) + ". " + menu[i].name + " - Rp." + menu[i].price + ".-");
  }
}

/**
 * Handles Menu selection,quantity input,
 * and adds, selected items into card.
 * 
 * @returns 
 */

async function selectMenu() {

  let select = await askQuestion(
    rl,
    "Mau Nomor Menu berapa : "
  );

  let i = parseInt(select) - 1;

  if (
    isNaN(i + 1) ||
    !menu[i]
  ) {

    console.log("\nMenu tidak tersedia!");

    showMenu();

    return selectMenu();
  }

  console.log(menu[i]);

  let qty;

  while (true) {

    let quantity = await askQuestion(
      rl,
      "Mau beli berapa : "
    );

    if (validateQty(quantity)) {
      qty = Number(quantity);
      break;
    }

    console.log(
      "\nJumlah harus berupa angka lebih dari 0!!"
    );

  }

  let item = {
    name: menu[i].name,
    price: menu[i].price,
    qty,
    subtotal: menu[i].price * qty
  };

  cart = [...cart, item];

  console.log(
    "\nBarang berhasil masuk ke keranjang!"
  );

  let add = await askQuestion(
    rl,
    "Ada pesanan lagi y/n : "
  );
  if (!validateYesNo(add)) {
    console.log("Input hanya y atau n");
    return selectMenu();
  }

  if (add === "y") {

    showMenu();

    return selectMenu();
  }

  showCart();

}

let cart = [];

/**
 * Display all cart items and 
 * total purchase amount.
 * 
 * @return{void}
 */

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

