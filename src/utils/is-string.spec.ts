import { describe, it, expect } from 'vitest';

import { isString } from './is-string';

describe('isString', () => {
  it('should return true for string values', () => {
    expect(isString('Hello World')).toBe(true);
    expect(isString('')).toBe(true);
    expect(isString('123')).toBe(true);
  });

  it('should return false for non-string values', () => {
    expect(isString(123)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
  });
});
