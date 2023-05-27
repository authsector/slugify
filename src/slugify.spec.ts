import { describe, it, expect } from 'vitest';

import { slugify } from './slugify';

describe('slugify', () => {
  it('should convert simple strings correctly', () => {
    expect(slugify('Hello World')).toBe('Hello-World');
    expect(slugify('Envpilot')).toBe('Envpilot');
  });

  it('should handle special characters correctly', () => {
    expect(slugify('Hello_World')).toBe('Hello-World');
    expect(slugify('.Envpilot')).toBe('Envpilot');
    expect(slugify('Envpilot.')).toBe('Envpilot');
    expect(slugify('Envpilot...')).toBe('Envpilot');
    expect(slugify('Hello..World')).toBe('Hello-World');
    expect(slugify('.Hello..World.')).toBe('Hello-World');
  });

  it('should handle consecutive special characters and spaces correctly', () => {
    expect(slugify('Hello__World')).toBe('Hello-World');
    expect(slugify('Hello..World')).toBe('Hello-World');
    expect(slugify('Hello--World')).toBe('Hello-World');
    expect(slugify('Hello   World')).toBe('Hello-World');
  });

  it('should trim leading and trailing spaces correctly', () => {
    expect(slugify('  Hello World  ')).toBe('Hello-World');
  });

  it('should handle empty strings and non-string inputs', () => {
    expect(slugify('')).toBe('');
    expect(slugify(' ')).toBe('');
    expect(slugify('    ')).toBe('');
    expect(slugify(null as unknown as string)).toBe('');
    expect(slugify(undefined as unknown as string)).toBe('');
    expect(slugify(123 as unknown as string)).toBe('');
  });

  it('should handle combinations of rules', () => {
    expect(slugify('  Hello..  World__ ')).toBe('Hello-World');
    expect(slugify('. Hello..  World__ .')).toBe('Hello-World');
  });
});
