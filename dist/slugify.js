"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = void 0;
const is_string_1 = require("./utils/is-string");
const slugify = (value, options = {}) => {
    if (!(0, is_string_1.isString)(value) || value.length === 0) {
        return '';
    }
    const specialChars = ['.', '_', '-'];
    const isSpecialChar = (char) => {
        return specialChars.includes(char);
    };
    let slug = '';
    let lastCharWasSpecialOrSpace = false;
    for (const char of value.trim()) {
        if (char === ' ' && !lastCharWasSpecialOrSpace) {
            slug += '-';
            lastCharWasSpecialOrSpace = true;
        }
        else if (isSpecialChar(char) && !lastCharWasSpecialOrSpace) {
            slug += char;
            lastCharWasSpecialOrSpace = true;
        }
        else if (/[a-zA-Z0-9]/.test(char)) {
            slug += char;
            lastCharWasSpecialOrSpace = false;
        }
    }
    if (options.trim !== false) {
        if (specialChars.some((char) => slug.startsWith(char))) {
            slug = slug.slice(1);
        }
        if (specialChars.some((char) => slug.endsWith(char))) {
            slug = slug.slice(0, -1);
        }
    }
    if (options.case === 'lower') {
        slug = slug.toLowerCase();
    }
    else if (options.case === 'upper') {
        slug = slug.toUpperCase();
    }
    return slug;
};
exports.slugify = slugify;
//# sourceMappingURL=slugify.js.map