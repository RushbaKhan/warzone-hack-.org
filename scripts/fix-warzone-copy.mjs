#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Battlestate Games'"],
	['Activision\u2019', "Battlestate Games'"],
	['Activision services', 'Battlestate Games services'],
	['Activision service', 'Battlestate Games service'],
	['Activision platform', 'Battlestate Games platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Battlestate Games bans'],
	['Activision security', 'Ricochet security'],
	['Activision Status', 'Call of Duty: Warzone Support'],
	['Activision Warzone', 'Call of Duty: Warzone'],
	['Activision Support', 'Call of Duty: Warzone Support'],
	['Activision', 'Battlestate Games'],
	['EAC guide', 'Ricochet guide'],
	['undetected EAC notes', 'undetected Ricochet notes'],
	['status.epicgames.com', 'www.escapefromwarzone.com/support'],
	['www.epicgames.com/warzone', 'www.escapefromwarzone.com'],
	['www.warzone.com/competitive', 'www.escapefromwarzone.com'],
	['https://www.warzone.com/', 'https://www.escapefromwarzone.com/'],
	['Warzone.com', 'Call of Duty: Warzone'],
	['Warzone Competitive', 'Call of Duty: Warzone'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
