/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
			},
			typography: ({ theme }) => ({
				'pinky-winky': {
					css: {
						'--tw-prose-body': theme('colors.rose[500]'),
						'--tw-prose-headings': theme('colors.rose[600]'),
						'--tw-prose-lead': theme('colors.rose[400]'),
						'--tw-prose-links': theme('colors.rose[300]'),
						'--tw-prose-bold': theme('colors.rose[900]'),
						'--tw-prose-counters': theme('colors.rose[300]'),
						'--tw-prose-bullets': theme('colors.rose[100]'),
						'--tw-prose-hr': theme('colors.rose[300]'),
						'--tw-prose-quotes': theme('colors.rose[600]'),
						'--tw-prose-quote-borders': theme('colors.rose[300]'),
						'--tw-prose-captions': theme('colors.rose[400]'),
						'--tw-prose-code': theme('colors.rose[600]'),
						'--tw-prose-pre-code': theme('colors.rose[100]'),
						'--tw-prose-pre-bg': theme('colors.rose[900]'),
						'--tw-prose-th-borders': theme('colors.rose[300]'),
						'--tw-prose-td-borders': theme('colors.rose[200]'),
						'--tw-prose-invert-body': theme('colors.rose[200]'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-lead': theme('colors.rose[300]'),
						'--tw-prose-invert-links': theme('colors.white'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.rose[400]'),
						'--tw-prose-invert-bullets': theme('colors.rose[600]'),
						'--tw-prose-invert-hr': theme('colors.rose[700]'),
						'--tw-prose-invert-quotes': theme('colors.rose[100]'),
						'--tw-prose-invert-quote-borders': theme('colors.rose[700]'),
						'--tw-prose-invert-captions': theme('colors.rose[400]'),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.rose[300]'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.rose[600]'),
						'--tw-prose-invert-td-borders': theme('colors.rose[700]'),
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
