const { describe, test } = require("node:test");
const assert = require("node:assert");
const validatePayment = require("../utils/validate-payment");

describe("validatePayment", () => {

  test("should return true for valid input", () => {
    assert.strictEqual(
      validatePayment("20000"),
      true
    );
  });

  test("should return false for text input", () => {
    assert.strictEqual(
      validatePayment("abc"),
      false
    );
  });

  test("should return false for negative value", () => {
    assert.strictEqual(
      validatePayment("-10"),
      false
    );
  });

  test("should return false for zero", () => {
    assert.strictEqual(
      validatePayment("0"),
      false
    );
  });

});