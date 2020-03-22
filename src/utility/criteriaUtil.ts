export type Rule = { regex: RegExp; description: string };

/**
 * This function checks if a given set of rules is fulfilled for a given testString
 * @param rules
 * @param testString
 */
export const checkRules = (rules: Rule[], testString: string) =>
  rules.map(({ regex }) => regex.test(testString));
