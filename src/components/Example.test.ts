import { expect, test } from 'vitest';

const sum = (a: number, b: number) => a + b;

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});
