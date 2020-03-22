import { Rule } from "../utility/criteriaUtil";

/**
 * Here, the rules for the password are defined
 */
export const passwordRules: Rule[] = [
  { regex: /.{8,}/, description: "8+ characters" },
  { regex: /.*[a-z].*/, description: "lowercase letter" },
  { regex: /.*[A-Z].*/, description: "uppercase letter" },
  { regex: /.*\d.*/, description: "number" },
  // this regex matches a character that is neither a letter, nor a digit
  // \w instead of A-Za-z wouldn't have worked because \w includes underscores
  { regex: /.*[^A-Za-z\d].*/, description: "special character" }
];
