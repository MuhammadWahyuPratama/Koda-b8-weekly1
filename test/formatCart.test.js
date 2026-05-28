const { describe, test } = require("node:test");
const assert = require("node:assert");

const formatCart = require("../utils/formatCart");

describe("formatCart", () => {

  test("should return formatted cart text", () => {

    const item = {
      name: "Thai Tea",
      qty: 2,
      subtotal: 20000
    };

    assert.strictEqual(
      formatCart(item, 0),

      `1. Thai Tea
            Quantity : 2
            Subtotal : Rp.20000`
    );

  });

});