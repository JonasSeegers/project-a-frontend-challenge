import { Rule, checkRules } from './criteriaUtil';

const testRules: Rule[] = [
  { regex: /\d+/, description: 'only digits, at least one' },
  { regex: /[a-zA-Z]+/, description: 'only words, at least one' },
];

describe('criteria utility function', () => {
  test('matching rules with valid test string', () => {
    const testString = 'asd123';

    const results = checkRules(testRules, testString);

    expect(results.every((b) => b)).toBeTruthy();
  });
});

describe('criteria utility function', () => {
  test('matching rules with invalid test strings', () => {
    const testStringWithoutDigits = 'asd';
    const testStringWithoutLetters = '123';

    const resultsWithoutDigits = checkRules(testRules, testStringWithoutDigits);
    const resultsWithoutLetters = checkRules(
      testRules,
      testStringWithoutLetters
    );

    expect(resultsWithoutDigits.every((b) => b)).toBeFalsy();
    expect(resultsWithoutLetters.every((b) => b)).toBeFalsy();
  });
});
