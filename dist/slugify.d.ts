export type SlugifyOptions = {
    case?: 'lower' | 'upper';
    trim?: boolean;
};
export declare const slugify: (value: string, options?: SlugifyOptions) => string;
