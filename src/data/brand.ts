/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Warzone Hacks',
	/** Short product label if needed */
	shortName: 'Warzone',
	/** Canonical origin — no trailing slash */
	url: 'https://warzonehack.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@warzonehack.org',
	checkoutUrl: 'https://zadeyo.com/go/RUSHBA?to=%2Fproducts%2Fwarzone',

	/** Game this template instance targets */
	game: 'Warzone',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Ricochet',

	logo: '/images/warzone-hacks-logo.webp',
	logoRaster: '/images/warzone-hacks-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Warzone Hacks logo',
	defaultOgImage: '/images/warzone-hacks-hero-1024w.webp',
	heroImage: '/images/warzone-hacks-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#BF00FF',
		bg: '#0a0612',
		soft: '#d8b4fe',
		deep: '#7c3aed',
		hover: '#e879f9',
		panel: '#0c0814',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'warzone hacks',
		list: [
			'warzone hacks',
			'warzone cheats',
			'warzone aimbot',
			'warzone esp',
			'warzone wallhack',
			'warzone hack download',
			'best warzone cheats',
			'cod warzone hacks',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /warzone-hacks/ owns the head term. */
		homeTitle: 'Warzone Hacks | Official Windows PC Site',
		homeDescription:
			'Official Warzone Hacks site for Windows PC. Compare aimbot, ESP, loot ESP, radar, Cloud DMA, and AWS options — then buy a license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — aimbot, ESP, loot ESP, radar, Cloud DMA, AWS, and patch updates after {antiCheat}.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same aimbot, ESP, and radar on both. Cloud DMA and AWS options at checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue on Windows PC today.',
		/** Money page meta — primary target for "warzone hacks". */
		previewTitle: 'Warzone Hacks | Undetected ESP & Aimbot',
		previewDescription:
			'Buy undetected warzone hacks for Call of Duty Warzone on Windows PC. Aimbot, ESP, loot ESP, radar, Cloud DMA, and AWS in one checkout.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can drop faster. Follow each step before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Call of Duty: Warzone — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — ESP, soft aim, radar, and patch updates for Call of Duty: Warzone on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — raid tips, ESP, aimbot, loot routes, and {antiCheat} update coverage for Windows PC players who raid.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — aimbot, ESP, radar, Cloud DMA, AWS',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes aimbot, ESP, loot ESP, and radar, with Cloud DMA and AWS options plus {antiCheat} maintenance.',
		heroLede: 'Undetected aimbot, ESP, loot ESP, and radar for Warzone on Windows PC. Cloud DMA and AWS options.',
		blogLabel: 'Warzone Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC — plus Cloud DMA and AWS options.',
		storeIntro: 'Pick a plan. Same features on both. Cloud DMA and AWS available at checkout.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro:
			'{brand} for Call of Duty Warzone — aimbot, ESP wallhack, loot ESP, radar, Cloud DMA, and AWS, with Ricochet rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Aimbot',
		chipRadar: 'Radar / compass',
		chipUpdates: 'Cloud DMA / AWS',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-17',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/warzone-hacks-esp.webp',
				title: 'ESP overlay in Call of Duty: Warzone',
				caption: 'Player ESP boxes and distance readouts during a match',
			},
			{
				src: '/images/warzone-hacks-wallhack.webp',
				title: 'Wallhack visibility for Warzone matches',
				caption: 'Operator outlines through walls on Verdansk and Resurgence',
			},
			{
				src: '/images/warzone-hacks-aimbot.webp',
				title: 'Soft aim assist for Warzone',
				caption: 'Configurable soft aim FOV and bone priority',
			},
			{
				src: '/images/warzone-hacks-aimbot-view.webp',
				title: 'Aimbot view in Warzone Hacks',
				caption: 'In-menu aimbot controls for Windows PC',
			},
			{
				src: '/images/warzone-hacks-radar.webp',
				title: '2D radar threat overlay',
				caption: 'Radar cues for flanks near buy stations',
			},
			{
				src: '/images/warzone-hacks-combat.webp',
				title: 'Warzone Hacks license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
