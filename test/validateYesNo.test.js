const { describe, test } = require("node:test");
const assert = require("node:assert");
const validateYesNo = require("../utils/validate-y-n");

describe("validateYesNo", () => {

  test("should return true for y", () => {
    assert.strictEqual(
      validateYesNo("y"),
      true
    );
  });

  test("should return true for n", () => {
    assert.strictEqual(
      validateYesNo("n"),
      true
    );
  });

  test("should return false for yes", () => {
    assert.strictEqual(
      validateYesNo("yes"),
      false
    );
  });

  test("should return false for random text", () => {
    assert.strictEqual(
      validateYesNo("abc"),
      false
    );
  });

});