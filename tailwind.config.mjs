import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
                serif: ['"Source Serif 4 Variable"', ...defaultTheme.fontFamily.serif],
            },
            colors: {
                background: 'rgb(var(--color-background) / <alpha-value>)',
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                accent: 'rgb(var(--color-accent) / <alpha-value>)',
            },
            screens: {
                desktop: '960px',
            },
            width: {
                desktop: '960px',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
