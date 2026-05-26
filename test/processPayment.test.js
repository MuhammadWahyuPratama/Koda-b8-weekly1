const { describe, test } = require("node:test");
const assert = require("node:assert");
const processPayment = require("../utils/processPayment");

describe("processPayment", () => {

  test("should return remaining money", () => {
    assert.strictEqual(
      processPayment(20000,10000),
      10000
    );
  });

  test("should return null if payment is insufficient", () => {
    assert.strictEqual(
      processPayment(5000,10000),
      null
    );
  });

});