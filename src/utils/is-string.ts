/**
 * Type guard for strings.
 *
 * @param value - The value to check.
 * @returns {value is string} Whether the value is a string.
 */
export const isString = (value: unknown): value is string =>
  typeof value === 'string';
