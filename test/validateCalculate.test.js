const { describe, test } = require("node:test");
const assert = require("node:assert");
const calculateResult = require("../utils/calculate");

describe("calculateResult", () => {

  test("should return total from one item", () => {
    const cart = [
      {
        subtotal: 20000
      }
    ];

    assert.strictEqual(
      calculateResult(cart),
      20000
    );
  });

  test("should return total from multiple items", () => {
    const cart = [
      {
        subtotal: 20000
      },
      {
        subtotal: 10000
      }
    ];

    assert.strictEqual(
      calculateResult(cart),
      30000
    );
  });

  test("should return 0 when cart is empty", () => {
    assert.strictEqual(
      calculateResult([]),
      0
    );
  });

});