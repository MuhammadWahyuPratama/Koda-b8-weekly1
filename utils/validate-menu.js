function validateMenu(input) {
  const menu = parseInt(input);

  return !isNaN(menu)
    && menu >= 1
    && menu <= 4;
}

module.exports = validateMenu;