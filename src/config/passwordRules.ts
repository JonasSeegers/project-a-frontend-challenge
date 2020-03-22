import { Rule } from "../utility/criteriaUtil";

/**
 * Here, the rules for the password are defined
 */
export const passwordRules: Rule[] = [
  { regex: /.{8,}/, description: "8+ characters" },
  { regex: /[a-z]/, description: "lowercase letter" },
  { regex: /[A-Z]/, description: "uppercase letter" },
  { regex: /\d/, description: "number" },
  // this solution treats ä, ö, ü, ß, ç etc. as special characters
  // it can be discussed if those letters shouldn't count
  { regex: /[^\w]|_/, description: "special character" }
];
