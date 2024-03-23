/** @type {import("prettier").Config} */
export default {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    tailwindConfig: './tailwind.config.mjs',
}
