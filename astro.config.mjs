import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";

const { COMPRESS_HTML } = loadEnv(process.env.COMPRESS_HTML, process.cwd(), "");
const compressHTML = process.env.COMPRESS_HTML

export default defineConfig({
	output: 'static',
	srcDir: './src',
	publicDir: './static',
	outDir: './public',
	compressHTML: compressHTML
});
