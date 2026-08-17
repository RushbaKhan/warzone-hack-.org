import { siteConfig } from './site';

/** Screenshots used across product pages — simple warzone hacks keyword alts. */
export const warzoneImages = {
	hero: '/images/warzone-hacks-hero-full.png',
	espWallhack: '/images/warzone-hacks-wallhack.webp',
	aimbotCombat: '/images/warzone-hacks-aimbot.webp',
	aimbotSkeleton: '/images/warzone-hacks-aimbot-view.webp',
	playerEsp: '/images/warzone-hacks-radar.webp',
	cheatsCombat: '/images/warzone-hacks-combat.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/warzone-hacks-combat.webp',
	loadoutBuilder: '/images/warzone-hacks-radar.webp',
	squadFight: '/images/warzone-hacks-aimbot-view.webp',
	cheatsPackage: '/images/warzone-hacks-radar.webp',
	headerArt: '/images/warzone-hacks-aimbot-view.webp',
	battleRoyaleCombat: '/images/warzone-hacks-combat.webp',
	extractFight: '/images/warzone-hacks-aimbot.webp',
	rebootFight: '/images/warzone-hacks-aimbot.webp',
	scavRunCombat: '/images/warzone-hacks-wallhack.webp',
	scavRunMode: '/images/warzone-hacks-esp.webp',
	battleRoyaleIsland: '/images/warzone-hacks-esp.webp',
	raidMap: '/images/warzone-hacks-esp.webp',
	product: [
		{ src: '/images/warzone-hacks-esp.webp', alt: 'Warzone ESP player boxes and distance overlay' },
		{ src: '/images/warzone-hacks-wallhack.webp', alt: 'Warzone wallhack outlines for operators' },
		{ src: '/images/warzone-hacks-aimbot.webp', alt: 'Warzone aimbot overlay and FOV controls' },
		{ src: '/images/warzone-hacks-esp.webp', alt: 'Warzone loot ESP for armor, ammo, and crates' },
		{ src: '/images/warzone-hacks-wallhack.webp', alt: 'Through-wall visibility during a Warzone match' },
		{ src: '/images/warzone-hacks-aimbot.webp', alt: 'Aimbot bone priority and humanizer settings' },
	],
	gallery: [
		{ src: '/images/warzone-hacks-esp.webp', alt: 'Warzone ESP overlay showing enemy distance', featured: true },
		{ src: '/images/warzone-hacks-wallhack.webp', alt: 'Warzone wallhack view through buildings' },
		{ src: '/images/warzone-hacks-aimbot.webp', alt: 'Warzone aimbot FOV ring in combat' },
		{ src: '/images/warzone-hacks-esp.webp', alt: 'Warzone loot ESP pins for plates and crates' },
		{ src: '/images/warzone-hacks-wallhack.webp', alt: 'Operator wallhack filters in Battle Royale' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/warzone-hacks-esp.webp', title: '', caption: '' },
		{ src: '/images/warzone-hacks-wallhack.webp', title: '', caption: '' },
		{ src: '/images/warzone-hacks-aimbot.webp', title: '', caption: '' },
		{ src: '/images/warzone-hacks-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/warzone-hacks-radar.webp', title: '', caption: '' },
		{ src: '/images/warzone-hacks-combat.webp', title: '', caption: '' },
	],
} as const;
