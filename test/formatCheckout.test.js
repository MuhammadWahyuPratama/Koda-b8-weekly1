const { describe, test } = require("node:test");
const assert = require("node:assert");

const formatCheckout = require("../utils/formatCheckout");

describe("formatCheckout", () => {
  test("should return formatted checkout text", () => {
    const item = {
      name: "Thai Tea",
      qty: 2,
      subtotal: 20000
    };
    assert.strictEqual(
      formatCheckout(item, 0),
      `1. Thai Tea
            Qty      : 2
            Subtotal : Rp.20000`
    );

  });

});