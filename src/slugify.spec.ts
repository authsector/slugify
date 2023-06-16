import { describe, it, expect } from 'vitest';

import { slugify } from './slugify';

describe('slugify', () => {
  it('should convert simple strings correctly', () => {
    expect(slugify('Hello World')).toBe('Hello-World');
    expect(slugify('Envpilot')).toBe('Envpilot');
  });

  it('should handle special characters correctly', () => {
    expect(slugify('Hello_World')).toBe('Hello_World');
    expect(slugify('Hello-World')).toBe('Hello-World');
    expect(slugify('.Envpilot')).toBe('Envpilot');
    expect(slugify('Envpilot.')).toBe('Envpilot');
    expect(slugify('Envpilot...')).toBe('Envpilot');
    expect(slugify('Hello.World')).toBe('HelloWorld');
    expect(slugify('Hello..World')).toBe('HelloWorld');
    expect(slugify('.Hello..World.')).toBe('HelloWorld');
  });

  it('should handle consecutive special characters and spaces correctly', () => {
    expect(slugify('Hello__World')).toBe('Hello_World');
    expect(slugify('Hello..World')).toBe('HelloWorld');
    expect(slugify('Hello--World')).toBe('Hello-World');
    expect(slugify('Hello   World')).toBe('Hello-World');
  });

  it('should trim leading and trailing spaces correctly', () => {
    expect(slugify('  Hello World  ')).toBe('Hello-World');
  });

  it('should trim leading and trailing special characters correctly', function () {
    expect(slugify('..Hello World..')).toBe('Hello-World');
    expect(slugify('Hello World..')).toBe('Hello-World');
    expect(slugify('..Hello World')).toBe('Hello-World');
    expect(slugify('Hello World.', { trim: false })).toBe('Hello-World');
    expect(slugify('Hello World-', { trim: false })).toBe('Hello-World-');
    expect(slugify('Hello World__', { trim: false })).toBe('Hello-World_');
    expect(slugify('.Hello World__', { trim: false })).toBe('Hello-World_');
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
    expect(slugify('. Hello-_-  World__ .')).toBe('Hello-World');
  });

  it('should lowercase the string when the option is set', () => {
    expect(slugify('Hello World', { case: 'lower' })).toBe('hello-world');
    expect(slugify('Hello World-', { case: 'lower' })).toBe('hello-world');
    expect(slugify('Hello World')).toBe('Hello-World');
  });

  it('should uppercase the string when the option is set', () => {
    expect(slugify('Hello World', { case: 'upper' })).toBe('HELLO-WORLD');
    expect(slugify('_Hello World', { case: 'upper' })).toBe('HELLO-WORLD');
    expect(slugify('Hello World')).toBe('Hello-World');
  });
});
