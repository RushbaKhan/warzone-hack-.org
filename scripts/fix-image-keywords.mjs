#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'warzone hacks', espWallhack: 'warzone hacks wallhack', aimbotCombat: 'warzone hacks aimbot', squadFight: 'warzone hacks', playerEsp: 'warzone hacks esp', headerArt: 'warzone hacks aimbot', cheatsPackage: 'warzone hacks radar', rebootFight: 'warzone hacks aimbot', battleRoyale: 'warzone hacks', battleRoyaleIsland: 'warzone hacks esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Warzone ESP player tags hack'", "imageAlt: 'warzone hacks esp'"],
	["imageAlt: 'Warzone ESP radar hack'", "imageAlt: 'warzone hacks radar'"],
	["imageAlt: 'Warzone aimbot sniper kill'", "imageAlt: 'warzone hacks aimbot'"],
	["imageAlt: 'Warzone aimbot skeleton targeting'", "imageAlt: 'warzone hacks aimbot'"],
	["imageAlt: 'Warzone hacks ADS combat'", "imageAlt: 'warzone hacks'"],
	["imageAlt: 'Warzone hacks setup PC activation'", "imageAlt: 'warzone hacks'"],
	["imageAlt: 'Warzone hacks updates Ricochet maintenance'", "imageAlt: 'warzone hacks'"],
	["imageAlt: 'Warzone hacks FAQ ESP aimbot'", "imageAlt: 'warzone hacks'"],
	["imageAlt: 'Warzone hacks support license help'", "imageAlt: 'warzone hacks'"],
	["imageAlt: 'Undetected warzone hacks ESP wallhack'", "imageAlt: 'undetected warzone hacks'"],
	["imageAlt: 'Warzone wallhack skeleton ESP'", "imageAlt: 'warzone hacks wallhack'"],
	["imageAlt: 'Ricochet bypass warzone ESP aimbot'", "imageAlt: 'warzone hacks ricochet'"],
	["imageAlt: 'Warzone hacks 2026 ESP aimbot'", "imageAlt: 'warzone hacks'"],
	["imageAlt: 'Warzone hacks combat aimbot'", "imageAlt: 'warzone hacks'"],
	["imageAlt: 'Warzone hack download ESP aimbot'", "imageAlt: 'warzone hacks download'"],
	["imageAlt: 'Warzone mod menu ESP aimbot'", "imageAlt: 'warzone hacks mod menu'"],
	["imageAlt: 'Warzone soft aim aimbot settings'", "imageAlt: 'warzone hacks soft aim'"],
	["imageAlt: 'Best warzone hacks 2026 ESP'", "imageAlt: 'best warzone hacks'"],
	["imageAlt: 'Warzone aimbot hack combat'", "imageAlt: 'warzone hacks aimbot'"],
	["imageAlt: 'Warzone ESP hack wallhack'", "imageAlt: 'warzone hacks esp'"],
	["imageAlt: 'Warzone unlock all ESP aimbot guide'", "imageAlt: 'warzone hacks'"],
	["imageAlt: 'Warzone hacks privacy policy'", "imageAlt: 'warzone hacks'"],
	["imageAlt: 'Warzone hacks refund policy'", "imageAlt: 'warzone hacks'"],
	["imageAlt: 'Warzone hacks terms of use'", "imageAlt: 'warzone hacks'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Warzone ${meta.altKeyword}`")
	.join("imageAlt: 'warzone hacks'")
	.split("galleryTitle: `Warzone Hacks ${topicName}`")
	.join("galleryTitle: 'warzone hacks'")
	.split("imageAlt: `Warzone hacks ${kind} policy`")
	.join("imageAlt: 'warzone hacks'")
	.split("galleryTitle: `Warzone Hacks ${kind} resources`")
	.join("galleryTitle: 'warzone hacks'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
