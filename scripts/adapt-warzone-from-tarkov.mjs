#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Warzone Hacks.
 * Domain: warzonehack.org
 * Run from project root: node scripts/adapt-warzone-from-tarkov.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'warzone-aimbot'],
	['tarkov-esp', 'warzone-esp'],
	['tarkov-wallhack', 'warzone-wallhack'],
	['tarkov-radar-hack', 'warzone-radar-hack'],
	['undetected-tarkov-cheats', 'undetected-warzone-cheats'],
	['tarkov-cheats-2026', 'warzone-cheats-2026'],
	['battleye-bypass', 'ricochet-bypass'],
	['tarkov-cheats', 'warzone-hacks'],
	['tarkov-cheat-download', 'warzone-cheat-download'],
	['tarkov-mod-menu', 'warzone-mod-menu'],
	['tarkov-soft-aim', 'warzone-soft-aim'],
	['best-tarkov-cheats', 'best-warzone-cheats'],
	['tarkov-aimbot-hack', 'warzone-aimbot-hack'],
	['tarkov-esp-hack', 'warzone-esp-hack'],
	['tarkov-unlock-all', 'warzone-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://warzonehack.org'],
	['https://www.tarkovcheats.org', 'https://www.warzonehack.org'],
	['www.tarkovcheats.org', 'www.warzonehack.org'],
	['tarkovcheats.org', 'warzonehack.org'],
	['support@tarkovcheats.org', 'support@warzonehack.org'],
	['/products/escape-from-tarkov', '/products/warzone'],
	['/products/tarkov', '/products/warzone'],
	['project-name=besttarkovcheats', 'project-name=warzonehack'],
	['project-name=tarkovcheats', 'project-name=warzonehack'],
	['name = "besttarkovcheats"', 'name = "warzonehack"'],
	['name = "tarkovcheats"', 'name = "warzonehack"'],
	['"name": "tarkov-cheats"', '"name": "warzone-hacks"'],
	['tarkov-esp-player-tags', 'warzone-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'warzone-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'warzone-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'warzone-aimbot-skeleton'],
	['tarkov-esp-radar', 'warzone-esp-radar'],
	['tarkov-cheats-combat', 'warzone-hacks-combat'],
	['tarkov-cheats-logo', 'warzone-hacks-logo'],
	['tarkov-hero-banner', 'warzone-hero-banner'],
	['tarkov-hero-ghost', 'warzone-hero-ghost'],
	['tarkov-hero-source', 'warzone-hero-source'],
	['tarkov-cheats-hero', 'warzone-hacks-hero'],
	['tarkov-cheats-esp', 'warzone-hacks-esp'],
	['tarkov-cheats-wallhack', 'warzone-hacks-wallhack'],
	['tarkov-cheats-aimbot-view', 'warzone-hacks-aimbot-view'],
	['tarkov-cheats-aimbot', 'warzone-hacks-aimbot'],
	['tarkov-cheats-radar', 'warzone-hacks-radar'],
	['tarkov-cheats-raid', 'warzone-hacks-combat'],
	['undetected-tarkov-cheats', 'undetected-warzone-cheats'],
	['best-tarkov-cheats', 'best-warzone-cheats'],
	['tarkov-cheat-download', 'warzone-cheat-download'],
	['tarkov-cheats-2026', 'warzone-cheats-2026'],
	['tarkov-radar-hack', 'warzone-radar-hack'],
	['tarkov-aimbot-hack', 'warzone-aimbot-hack'],
	['tarkov-esp-hack', 'warzone-esp-hack'],
	['tarkov-unlock-all', 'warzone-unlock-all'],
	['tarkov-soft-aim', 'warzone-soft-aim'],
	['tarkov-mod-menu', 'warzone-mod-menu'],
	['tarkov-wallhack', 'warzone-wallhack'],
	['tarkov-cheats', 'warzone-hacks'],
	['tarkov-aimbot', 'warzone-aimbot'],
	['tarkov-esp', 'warzone-esp'],
	['battleye-bypass', 'ricochet-bypass'],
	["'battleye'", "'ricochet'"],
	['| battleye', '| ricochet'],
	['pageId="battleye"', 'pageId="ricochet"'],
	["pageId: 'battleye'", "pageId: 'ricochet'"],
	['"battleye"', '"ricochet"'],
	['escape-from-tarkov-cheats', 'call-of-duty-warzone-cheats'],
	['escape-from-tarkov', 'call-of-duty-warzone'],
	['Escape from Tarkov', 'Call of Duty: Warzone'],
	['Tarkov Cheats', 'Warzone Hacks'],
	['Tarkov cheats', 'Warzone hacks'],
	['Tarkov cheat', 'Warzone hack'],
	['Tarkov hacks', 'Warzone hacks'],
	['Tarkov hack', 'Warzone hack'],
	['TarkovCheatsSite', 'WarzoneHacksSite'],
	['Tarkov Intel', 'Warzone Intel'],
	['BattlEye anti-cheat', 'Ricochet anti-cheat'],
	['BattlEye maintenance', 'Ricochet maintenance'],
	['BattlEye bypass', 'Ricochet bypass'],
	['BattlEye Bypass', 'Ricochet Bypass'],
	['BattlEye patches', 'Ricochet patches'],
	['BattlEye patch', 'Ricochet patch'],
	['BattlEye updates', 'Ricochet updates'],
	['BattlEye update', 'Ricochet update'],
	['after BattlEye', 'after Ricochet'],
	['BattlEye', 'Ricochet'],
	['battleye', 'ricochet'],
	['tarkov cheats', 'warzone hacks'],
	['tarkov cheat', 'warzone hack'],
	['tarkov hacks', 'warzone hacks'],
	['tarkov hack', 'warzone hack'],
	['Customs, Woods, and Streets of Tarkov', 'Verdansk, Urzikstan, and Rebirth Island'],
	['Customs, Woods and Streets of Tarkov', 'Verdansk, Urzikstan and Rebirth Island'],
	['Customs, Woods et Streets of Tarkov', 'Verdansk, Urzikstan et Rebirth Island'],
	['Customs, Woods e Streets of Tarkov', 'Verdansk, Urzikstan e Rebirth Island'],
	['Customs, Woods und Streets of Tarkov', 'Verdansk, Urzikstan und Rebirth Island'],
	['extract fights', 'gulag fights'],
	['extract fight', 'gulag fight'],
	['raid rounds', 'gulag rounds'],
	['PMC raids and Scav runs', 'BR and Resurgence'],
	['PMC & Scav', 'BR & Resurgence'],
	['PMCs and Scavs', 'operators'],
	['PMC and Scav', 'BR and Resurgence'],
	['high-value loot', 'loadout drops'],
	['extract and loot markers', 'contract markers'],
	['near extracts', 'near buy stations'],
	['extract timer', 'UAV'],
	['tarkovImages', 'warzoneImages'],
	["from './tarkov'", "from './warzone'"],
	["from '../data/tarkov'", "from '../data/warzone'"],
	["from '../../data/tarkov'", "from '../../data/warzone'"],
	['fetch-tarkov-images', 'fetch-warzone-images'],
	['tarkov-hack-overlays', 'warzone-hack-overlays'],
	['fix-tarkov-copy', 'fix-warzone-copy'],
	['fix-bsg-copy', 'fix-warzone-copy'],
	['trucos-tarkov', 'trucos-warzone'],
	['triche-tarkov', 'triche-warzone'],
	['cheats-tarkov', 'cheats-warzone'],
	['trucchi-tarkov', 'trucchi-warzone'],
	['cheaty-tarkov', 'cheaty-warzone'],
	['chity-tarkov', 'chity-warzone'],
	['chitov-tarkov', 'chitov-warzone'],
	['chitiv-tarkov', 'chitiv-warzone'],
	['cheatow-tarkov', 'cheatow-warzone'],
	['hile-tarkov', 'hile-warzone'],
	['tarkov-hile', 'warzone-hile'],
	['tarkov-esp-chity', 'warzone-esp-chity'],
	['tarkov-aimbot-chity', 'warzone-aimbot-chity'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-warzone-cheats'],
	['cheats-tarkov-indetectaveis', 'cheats-warzone-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-warzone-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-warzone'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-warzone'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-warzone-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-warzone'],
	['cheats-tarkov-nedetectabile', 'cheats-warzone-nedetectabile'],
	['basta-tarkov-cheats', 'basta-warzone-cheats'],
	['tarkov-cheats-funktionen', 'warzone-cheats-funktionen'],
	['tarkov-cheats-functies', 'warzone-cheats-functies'],
	['caracteristicas-trucos-tarkov', 'caracteristicas-trucos-warzone'],
	['fonctionnalites-triche-tarkov', 'fonctionnalites-triche-warzone'],
	['recursos-cheats-tarkov', 'recursos-cheats-warzone'],
	['Buy Tarkov Cheats', 'Buy Warzone Hacks'],
	['Scav runs', 'Resurgence matches'],
	['Scav run', 'Resurgence'],
	['PMCs', 'operators'],
	['Scavs', 'AI soldiers'],
	['PMC', 'operator'],
	['Scav', 'bot'],
	['dorms, Factory', 'Verdansk, Rebirth'],
	['on Customs', 'on Verdansk'],
	['on Woods', 'on Urzikstan'],
	['this wipe', 'this season'],
	['last wipe', 'last season'],
	['Tarkov', 'Warzone'],
	['tarkov', 'warzone'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts',
	'.tsx',
	'.js',
	'.mjs',
	'.astro',
	'.css',
	'.json',
	'.toml',
	'.txt',
	'.md',
	'.html',
	'.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-warzone-from-tarkov.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameTarkovTs() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'warzone.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → warzone.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-warzone-images.mjs'],
		['tarkov-hack-overlays.mjs', 'warzone-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-warzone-copy.mjs'],
		['fix-bsg-copy.mjs', 'fix-warzone-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'warzone-aimbot': 'warzone-aimbot',
		'warzone-esp': 'warzone-esp',
		'warzone-wallhack': 'wallhack',
		'warzone-radar-hack': 'radar',
		'undetected-warzone-cheats': 'undetected',
		'warzone-cheats-2026': 'cheats-2026',
		'ricochet-bypass': 'ricochet',
		'warzone-hacks': 'hacks',
		'warzone-cheat-download': 'cheat-download',
		'warzone-mod-menu': 'mod-menu',
		'warzone-soft-aim': 'soft-aim',
		'best-warzone-cheats': 'best-cheats',
		'warzone-aimbot-hack': 'aimbot-hack',
		'warzone-esp-hack': 'esp-hack',
		'warzone-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
			console.log(`Wrote pageId ${pageId} → ${dir}`);
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file.replace(/tarkov-cheats/g, 'warzone-hacks').replace(/tarkov/g, 'warzone');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Warzone Hacks (warzonehack.org)...\n');
	await renamePageDirs();
	await renameTarkovTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: fix brand.ts identity, sync:brand, regenerate i18n/blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
