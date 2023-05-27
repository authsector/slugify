"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = void 0;
const is_string_1 = require("./utils/is-string");
const slugify = (value) => {
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
        if (char === ' ' || isSpecialChar(char)) {
            if (!lastCharWasSpecialOrSpace) {
                slug += '-';
                lastCharWasSpecialOrSpace = true;
            }
        }
        else if (/[a-zA-Z0-9]/.test(char)) {
            slug += char;
            lastCharWasSpecialOrSpace = false;
        }
    }
    if (slug.startsWith('-')) {
        slug = slug.slice(1);
    }
    if (slug.endsWith('-')) {
        slug = slug.slice(0, -1);
    }
    return slug;
};
exports.slugify = slugify;
//# sourceMappingURL=slugify.js.map