import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
import { dotenv } from 'dotenv'

const { COMPRESS_HTML } = loadEnv(process.env.COMPRESS_HTML, process.cwd(), "");

export default defineConfig({
	output: 'static',
	srcDir: './src',
	publicDir: './static',
	outDir: './public',
	compressHTML: COMPRESS_HTML
});
