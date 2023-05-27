export type SlugifyOptions = {
    case?: 'lower' | 'upper';
};
export declare const slugify: (value: string, options?: SlugifyOptions) => string;
