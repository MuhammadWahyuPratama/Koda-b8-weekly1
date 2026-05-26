const { describe, test } = require("node:test");
const assert = require("node:assert");
const validateQty = require("../utils/validate-qty");

describe("validateQty", () => {

  test("should return true for valid quantity", () => {
    assert.strictEqual(
      validateQty("2"),
      true
    );
  });

  test("should return false for text", () => {
    assert.strictEqual(
      validateQty("abc"),
      false
    );
  });

  test("should return false for decimal", () => {
    assert.strictEqual(
      validateQty("2.5"),
      false
    );
  });

  test("should return false for zero", () => {
    assert.strictEqual(
      validateQty("0"),
      false
    );
  });

  test("should return false for negative number", () => {
    assert.strictEqual(
      validateQty("-1"),
      false
    );
  });

});