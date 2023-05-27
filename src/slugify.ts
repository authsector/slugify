import { isString } from './utils/is-string';

export type SlugifyOptions = {
  case?: 'lower' | 'upper';
  /**
   * @default true
   */
  trim?: boolean;
};

/**
 * Convert a given string into a slug.
 *
 * The slug is created by:
 * 1. Trimming leading and trailing whitespace.
 * 2. Replacing consecutive spaces or special characters with a single dash.
 * 3. Removing invalid characters.
 * 4. Ensuring no leading or trailing special characters.
 *
 * @param {string} value - The string to convert.
 * @param options - The options to use when converting the slug.
 * @returns {string} The converted slug.
 */
export const slugify = (
  value: string,
  options: SlugifyOptions = { trim: true },
): string => {
  if (!isString(value) || value.length === 0) {
    return '';
  }

  const specialChars = ['.', '_', '-'];

  // Helper function to check if a character is a special character
  const isSpecialChar = (char: string): boolean => {
    return specialChars.includes(char);
  };

  let slug = '';
  let lastCharWasSpecialOrSpace = false;

  for (const char of value.trim()) {
    if (char === ' ' && !lastCharWasSpecialOrSpace) {
      slug += '-';
      lastCharWasSpecialOrSpace = true;
    } else if (isSpecialChar(char) && !lastCharWasSpecialOrSpace) {
      slug += char;
      lastCharWasSpecialOrSpace = true;
    }
    //
    // // If the character is a space or a special character
    // if (char === ' ' || isSpecialChar(char)) {
    //   // Only add a dash if the last character wasn't a space or special character
    //   if (!lastCharWasSpecialOrSpace) {
    //     slug += char;
    //     lastCharWasSpecialOrSpace = true;
    //   }
    // }
    // If the character is alphanumeric, add it to the slug
    else if (/[a-zA-Z0-9]/.test(char)) {
      slug += char;
      lastCharWasSpecialOrSpace = false;
    }
  }

  if (options.trim) {
    // If the slug starts or ends with a special character, remove it
    if (specialChars.some((char) => slug.startsWith(char))) {
      slug = slug.slice(1);
    }

    if (specialChars.some((char) => slug.endsWith(char))) {
      slug = slug.slice(0, -1);
    }
  }

  if (options.case === 'lower') {
    slug = slug.toLowerCase();
  } else if (options.case === 'upper') {
    slug = slug.toUpperCase();
  }

  return slug;
};
