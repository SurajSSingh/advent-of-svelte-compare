import { skeleton } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';
import { contentPath } from '@skeletonlabs/skeleton';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		// FIXME: Giving error: [postcss] (0 , _skeleton.contentPath) is not a function
		// contentPath(import.meta.url, 'react'),
		// contentPath(import.meta.url, 'svelte'),
	],
	theme: {
		extend: {},
	},
	plugins: [
		skeleton({
			// NOTE: each theme included will increase the size of your CSS bundle
			themes: [themes.cerberus, themes.rose],
		}),
	],
}
