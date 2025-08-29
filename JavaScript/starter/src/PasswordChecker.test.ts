import { test, describe } from "node:test";
import assert from "node:assert";
import {
  checkPassword,
  checkPasswordAndThrowReason,
} from "./PasswordChecker.js";

describe("checkPassword", () => {
  test("valid password", () => {
    assert.strictEqual(checkPassword("Password1@"), true);
  });

  test("invalid types", () => {
    assert.strictEqual(checkPassword(123), false);
    assert.strictEqual(checkPassword(null), false);
  });

  test("length validation", () => {
    assert.strictEqual(checkPassword("Pass1@"), false);
    assert.strictEqual(checkPassword("VeryLongPassword123@#"), false);
  });

  test("character requirements", () => {
    assert.strictEqual(checkPassword("password1@"), false);
    assert.strictEqual(checkPassword("PASSWORD1@"), false);
    assert.strictEqual(checkPassword("Password@"), false);
    assert.strictEqual(checkPassword("Password1"), false);
  });

  test("rejects exclamation mark", () => {
    assert.strictEqual(checkPassword("Password1!"), false);
  });
});

describe("checkPasswordAndThrowReason", () => {
  test("valid password", () => {
    assert.strictEqual(checkPasswordAndThrowReason("Password1@"), true);
  });

  test("throws for invalid input", () => {
    assert.throws(
      () => checkPasswordAndThrowReason(123),
      /Password must be a string/
    );
    assert.throws(
      () => checkPasswordAndThrowReason("Pass1@"),
      /at least 8 characters/
    );
    assert.throws(
      () => checkPasswordAndThrowReason("VeryLongPassword123@#"),
      /at most 20 characters/
    );
    assert.throws(
      () => checkPasswordAndThrowReason("password1@"),
      /uppercase letter/
    );
    assert.throws(
      () => checkPasswordAndThrowReason("PASSWORD1@"),
      /lowercase letter/
    );
    assert.throws(() => checkPasswordAndThrowReason("Password@"), /one number/);
    assert.throws(
      () => checkPasswordAndThrowReason("Password1"),
      /special character/
    );
  });

  test("rejects exclamation mark", () => {
    assert.throws(
      () => checkPasswordAndThrowReason("Password1!"),
      /Password must not contain the ! character/
    );
  });
});
