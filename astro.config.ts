import { defineConfig } from 'astro/config';

export default defineConfig({
	output: 'static',
	srcDir: './src',
	publicDir: './static',
	outDir: './public',
	compressHTML: true
});
