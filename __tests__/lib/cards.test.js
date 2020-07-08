import detectNetwork from '../../lib/cards.js';

test("detectNetwork correctly identifies card networks", () => {
  const TEST_CASES = [
    ["341234567890123", "American Express"],
    ["371234567890123", "American Express"],
    ["38123456789012", "Diners Club"],
    ["5112345678901245", "MasterCard"],
    ["5212345678901245", "MasterCard"],
    ["5312345678901245", "MasterCard"],
    ["5412345678901245", "MasterCard"],
    ["5512345678901245", "MasterCard"],
    ["4512345678901", "Visa"],
    ["4512345678901345", "Visa"],
    ["4512345678901345345", "Visa"],

  ]
  
  TEST_CASES.forEach(([cardNetwork, expectedNetwork]) => {
    expect(detectNetwork(cardNetwork)).toBe(expectedNetwork)
  })
});

test("detectNetwork return invalid card if string has different characters rather than numbers", ()=>{
  expect(detectNetwork("341234sfg67890123")).toBe("Invalid Card")
  expect(detectNetwork("abcdefghij")).toBe("Invalid Card")
  expect(detectNetwork("341234s?.67890123")).toBe("Invalid Card")
});