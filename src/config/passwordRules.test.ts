import { checkRules } from "../utility/criteriaUtil";
import { passwordRules } from "./passwordRules";

const VALID_PASSWORDS = ["12345aB:", "abcdeF1!", "---->1aB", "ABCDEFg1+"];
const INVALID_PASSWORDS = [
  "", // empty string
  "1234Aa!", // too short
  "1234567A!", // no lowercase letter
  "1234567a!", // no uppercase letter
  "abcdefg!", // no number
  "123456aB" // no special character
];

describe("password rules", () => {
  test("valid passwords pass the check", () => {
    VALID_PASSWORDS.forEach(password => {
      expect(checkRules(passwordRules, password).every(b => b)).toBeTruthy();
    });
  });

  test("invalid passwords don't pass the check", () => {
    INVALID_PASSWORDS.forEach(password => {
      expect(checkRules(passwordRules, password).every(b => b)).toBeFalsy();
    });
  });
});
