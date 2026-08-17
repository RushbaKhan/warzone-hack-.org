import type { PageId } from './content.generated';
import { fillBrandTokens, seoDescription } from '../brand';
import { brandCopy, brandSeo, seoPageTitle } from '../site-core';

export type SimpleSection = {
	h2: string;
	paragraphs: string[];
	list?: string[];
};

export type SimplePageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
	sections: SimpleSection[];
};

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: seoPageTitle(copy.title),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

/** Short, plain-English overrides for key EN nav pages — meta from brand.seo */
export const simplePageCopy: Partial<Record<PageId, SimplePageCopy>> = {
	features: page({
		title: brandSeo.featuresTitle,
		description: brandSeo.featuresDescription,
		h1: 'Features',
		intro: brandCopy.featuresIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/pricing/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Aimbot',
				paragraphs: [
					'Tune aimbot for legit or rage play. Set FOV, smoothness, bones, and humanizer before you queue.',
				],
				list: [
					'Enable, aim priority, aim keys, aim lock',
					'On team, prediction, ignore knocked, visible check',
					'Draw FOV, FOV, smooth, max distance, target bone',
					'Humanizer, humanize min/max, miss factor, humanize smooth',
				],
			},
			{
				h2: 'ESP, wallhack & loot ESP',
				paragraphs: [
					'See operators through walls and mark loot worth the rotate — armor plates, ammo, gas masks, weapons, and crates.',
				],
				list: [
					'Box, filled box, skeleton, health bar, snap lines',
					'Nicknames, distance, weapons, show team',
					'Box / line / skeleton thickness and max distance',
					'Loot ESP: armor plate, heavy armor, ammo, gas mask, weapon, money, killstreak, crates, custom colors',
				],
			},
			{
				h2: 'Radar & compass',
				paragraphs: [
					'A 2D radar plus compass so flanks show up before they reach your FOV.',
				],
				list: [
					'Enable radar and enable compass',
					'Compass radius sync, compass FOV, compass size',
					'Show team, show distance, max distance',
				],
			},
			{
				h2: 'Misc, Cloud DMA & AWS',
				paragraphs: [
					'Lobby stats, StreamProof, gamepad support, multi-game support, regular updates, and 24/7 support. Cloud DMA and AWS options are available at checkout.',
				],
				list: [
					'Lobby stats and StreamProof',
					'Gamepad / controller support',
					'Cloud DMA option',
					'AWS option',
				],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro: brandCopy.storeIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Full package access for Windows 10 / 11.',
					'Same aimbot, ESP, loot ESP, and radar on monthly and lifetime plans. Cloud DMA and AWS are optional at checkout.',
				],
				list: [
					'Aimbot, ESP, loot ESP, radar, compass',
					'Cloud DMA option',
					'AWS option',
					'StreamProof and gamepad support',
					'Patch rebuilds while active',
				],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: ['Read the refund policy if you need it. Contact support with your order ID for help.'],
				list: [
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro: brandCopy.statusIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Warzone Hacks overview',
		ctaSecondaryHref: '/warzone-hacks/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of 17 Aug 2026 the package is online for Warzone on Windows PC. We post a new note here when a game or Ricochet patch needs a rebuild.',
					'If Status is green, you can drop. If we are rebuilding, wait for the next note.',
				],
				list: [
					'Check this page before every raid after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Stay updated and use safe settings.'],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'Warzone Hacks',
		intro: brandCopy.previewIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'In-raid look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'One license for Call of Duty: Warzone on Windows PC — built for BR and Resurgence.',
				],
				list: [
					'ESP / wallhack with distance',
					'Aimbot with humanizer',
					'Loot ESP and compass radar',
					'Cloud DMA and AWS options',
					'Ricochet rebuilds after patches',
				],
			},
			{
				h2: 'Built for Warzone',
				paragraphs: [
					'Read operators before you push, mark loot worth the risk, and stay aware near buy stations. Tune aimbot per bone and FOV for Verdansk, Urzikstan, and Rebirth Island.',
				],
				list: [
					'<a href="/warzone-esp/">ESP guide</a>',
					'<a href="/warzone-aimbot/">Aimbot controls</a>',
					'<a href="/warzone-radar-hack/">Radar overlay</a>',
					'<a href="/updates/">Live status</a>',
				],
			},
			{
				h2: 'How to start',
				paragraphs: ['Buy a plan, get your license by email, then follow setup. Check Status after every major patch.'],
				list: [
					'<a href="/pricing/">Open store</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Check status</a>',
				],
			},
		],
	}),
	'warzone-esp': page({
		title: 'Warzone ESP | {brand}',
		description:
			'Warzone ESP, wallhack, and loot ESP for Call of Duty Warzone on Windows PC — boxes, skeleton, health, distance, and loot filters.',
		h1: 'ESP',
		intro: 'See players and loot through walls during Warzone matches. Part of the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Warzone Hacks overview',
		ctaSecondaryHref: '/warzone-hacks/',
		galleryTitle: 'ESP in match',
		sections: [
			{
				h2: 'Player ESP',
				paragraphs: ['Boxes, skeleton, health bars, snap lines, nicknames, distance, and weapons.'],
				list: [
					'Box, filled box, skeleton',
					'Health bar, snap lines, nicknames',
					'Distance, weapons, show team',
					'Thickness and max distance',
				],
			},
			{
				h2: 'Loot ESP',
				paragraphs: ['Mark armor plates, heavy armor, ammo, gas masks, weapons, money, killstreaks, and crates.'],
				list: ['Limit distance', 'Custom colors', 'Pair with player ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['ESP is included with aimbot, radar, Cloud DMA, and AWS options in one checkout.'],
				list: [
					'<a href="/warzone-hacks/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	'warzone-aimbot': page({
		title: 'Warzone Aimbot | {brand}',
		description:
			'Warzone aimbot for Call of Duty Warzone on Windows PC — FOV, smoothness, prediction, humanizer, and bone priority you can tune.',
		h1: 'Aimbot',
		intro: 'Aimbot and soft aim you can tune for Warzone. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Warzone Hacks overview',
		ctaSecondaryHref: '/warzone-hacks/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: ['Set FOV, smoothness, prediction, and bone priority before you queue.'],
				list: [
					'Enable, aim priority, aim keys, aim lock',
					'On team, prediction, ignore knocked, visible check',
					'Draw FOV, FOV, smooth, max distance, target bone',
				],
			},
			{
				h2: 'Humanizer',
				paragraphs: ['Keep settings subtle for longer sessions. Raise strength only when you accept more risk.'],
				list: ['Humanize min/max', 'Miss factor', 'Humanize smooth', 'Legit or rage profiles'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Aimbot ships with ESP, radar, Cloud DMA, and AWS options in one checkout.'],
				list: [
					'<a href="/warzone-hacks/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	radar: page({
		title: 'Warzone Radar | {brand}',
		description:
			'Warzone radar and compass for Call of Duty Warzone on Windows PC — flank cues near buy stations without filling the whole screen.',
		h1: 'Radar',
		intro: 'Radar and compass for threats outside your view. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Warzone Hacks overview',
		ctaSecondaryHref: '/warzone-hacks/',
		galleryTitle: 'Radar overlay',
		sections: [
			{
				h2: 'Radar & compass',
				paragraphs: ['Nearby enemy cues with adjustable range for BR and Resurgence.'],
				list: [
					'Enable radar and enable compass',
					'Compass radius sync, compass FOV, compass size',
					'Show team, show distance, max distance',
				],
			},
			{
				h2: 'With ESP',
				paragraphs: ['Use radar for threats you cannot see yet. Use ESP when you push.'],
				list: [
					'<a href="/warzone-esp/">ESP guide</a>',
					'<a href="/warzone-hacks/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro: brandCopy.setupIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Check status',
		ctaSecondaryHref: '/updates/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: ['Buy a plan first. You get a license by email.'],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: ['Run the loader as admin, paste your license, then launch {game}.'],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: ['Check Status after a patch. Email {email} with your order ID.'],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro: brandCopy.supportIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: '/faq/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: ['Email {email}. Include your order ID and a short note about the issue.'],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: ['Check FAQ and Status before you write. Many setup questions are already covered.'],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro: brandCopy.faqIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Support',
		ctaSecondaryHref: '/support/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: ['You get a digital license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: ['Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.'],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/updates/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: ['Read the refund policy before you buy if you need details.'],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
