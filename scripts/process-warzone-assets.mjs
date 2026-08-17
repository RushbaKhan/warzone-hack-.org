#!/usr/bin/env node
/**
 * Build Warzone hero variants, logo, and screenshot gallery assets.
 */
import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('.');
const imagesDir = path.join(root, 'public', 'images');
const publicDir = path.join(root, 'public');
await mkdir(imagesDir, { recursive: true });

const heroSource = '/opt/cursor/artifacts/assets/warzone-hero-source.png';
const shot1 = '/tmp/wz-shots/s1.webp';
const shot2 = '/tmp/wz-shots/s2.webp';
const BG = { r: 10, g: 6, b: 18, alpha: 1 };

async function writeWebp(buf, dest, quality = 82) {
	await writeFile(dest, await sharp(buf).webp({ quality, effort: 6 }).toBuffer());
	console.log('wrote', path.relative(root, dest));
}

async function buildHero() {
	const meta = await sharp(heroSource).metadata();
	const w = meta.width ?? 1536;
	const h = meta.height ?? 1024;
	const targetRatio = 1024 / 409;
	const cropH = Math.round(w / targetRatio);
	const top = Math.max(0, Math.round((h - cropH) * 0.22));
	const extractHeight = Math.min(cropH, h - top);

	const wide = await sharp(heroSource)
		.extract({ left: 0, top, width: w, height: extractHeight })
		.resize(1536, 614, { fit: 'cover', position: 'right' })
		.png({ compressionLevel: 9 })
		.toBuffer();

	await writeFile(path.join(imagesDir, 'warzone-hacks-hero-full.png'), wide);
	await writeFile(path.join(imagesDir, 'warzone-hero-source.png'), await sharp(heroSource).png().toBuffer());

	const hero1024 = await sharp(wide).resize(1024, 409, { fit: 'cover', position: 'right' }).toBuffer();
	const hero640 = await sharp(wide).resize(640, 256, { fit: 'cover', position: 'right' }).toBuffer();

	await writeFile(path.join(imagesDir, 'warzone-hacks-hero.png'), hero1024);
	await writeFile(path.join(imagesDir, 'warzone-hacks-hero-1024w.png'), hero1024);
	await writeWebp(hero1024, path.join(imagesDir, 'warzone-hacks-hero.webp'), 80);
	await writeWebp(hero1024, path.join(imagesDir, 'warzone-hacks-hero-1024w.webp'), 80);
	await writeWebp(hero640, path.join(imagesDir, 'warzone-hacks-hero-640w.webp'), 78);
	await writeWebp(
		await sharp(wide).resize(1536, 614).toBuffer(),
		path.join(imagesDir, 'warzone-hacks-hero-1536w.webp'),
		80,
	);
	console.log('hero variants ready');
}

async function buildLogo() {
	const svg = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="72" fill="#0a0612"/>
  <rect x="18" y="18" width="476" height="476" rx="58" fill="none" stroke="#BF00FF" stroke-width="18"/>
  <text x="256" y="338" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-size="210" font-weight="800" fill="#F5D0FE" letter-spacing="-12">WH</text>
</svg>`);
	const logoPng = await sharp(svg).resize(512, 512).png().toBuffer();
	await writeFile(path.join(imagesDir, 'warzone-hacks-logo.png'), logoPng);
	await writeWebp(logoPng, path.join(imagesDir, 'warzone-hacks-logo.webp'), 90);

	const sizes = [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	];
	for (const { name, size } of sizes) {
		await writeFile(path.join(publicDir, name), await sharp(logoPng).resize(size, size).png().toBuffer());
	}
	await writeFile(path.join(publicDir, 'favicon.ico'), await sharp(logoPng).resize(32, 32).png().toBuffer());
	console.log('logo + favicons ready');
}

async function buildScreenshots() {
	const s1 = await sharp(shot1).resize(960, 540, { fit: 'cover' }).webp({ quality: 82, effort: 6 }).toBuffer();
	const s2 = await sharp(shot2).resize(960, 540, { fit: 'cover' }).webp({ quality: 82, effort: 6 }).toBuffer();
	const s1_480 = await sharp(shot1).resize(480, 270, { fit: 'cover' }).webp({ quality: 80, effort: 6 }).toBuffer();
	const s2_480 = await sharp(shot2).resize(480, 270, { fit: 'cover' }).webp({ quality: 80, effort: 6 }).toBuffer();

	const pairs = [
		['warzone-hacks-esp', s1, s1_480],
		['warzone-hacks-wallhack', s2, s2_480],
		['warzone-hacks-aimbot', s1, s1_480],
		['warzone-hacks-aimbot-view', s2, s2_480],
		['warzone-hacks-radar', s2, s2_480],
		['warzone-hacks-combat', s1, s1_480],
	];

	for (const [name, full, small] of pairs) {
		await writeFile(path.join(imagesDir, `${name}.webp`), full);
		await writeFile(path.join(imagesDir, `${name}-960w.webp`), full);
		await writeFile(path.join(imagesDir, `${name}-480w.webp`), small);
		console.log('screenshot set', name);
	}

	await copyFile(shot1, path.join(imagesDir, 'warzone-screenshot-s1.webp'));
	await copyFile(shot2, path.join(imagesDir, 'warzone-screenshot-s2.webp'));
}

await buildHero();
await buildLogo();
await buildScreenshots();
console.log('assets done');
