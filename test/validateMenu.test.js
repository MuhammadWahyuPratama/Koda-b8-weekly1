const { describe, test } = require("node:test");
const assert = require("node:assert");
const validateMenu = require("../utils/validate-menu");

describe("validateMenu", () => {

  test("should return true for valid menu", () => {
    assert.strictEqual(
      validateMenu("1"),
      true
    );
  });

  test("should return false for text", () => {
    assert.strictEqual(
      validateMenu("abc"),
      false
    );
  });

  test("should return false for number above range", () => {
    assert.strictEqual(
      validateMenu("5"),
      false
    );
  });

  test("should return false for zero", () => {
    assert.strictEqual(
      validateMenu("0"),
      false
    );
  });

});