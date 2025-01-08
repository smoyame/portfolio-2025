import { defineConfig } from 'astro/config';

export default defineConfig({
	output: 'static',
	publicDir: './static',
	outDir: './public',
	compressHTML: false
});
