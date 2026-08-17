export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{game} hacks'), href: '/warzone-hacks/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/warzone-hacks/' },
	{ label: fillBrandTokens('{game} esp'), href: '/warzone-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/warzone-aimbot/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/warzone-hacks/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/warzone-esp/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/warzone-radar-hack/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/warzone-hacks/' },
	{ label: 'Aimbot', href: '/warzone-aimbot/' },
	{ label: 'ESP', href: '/warzone-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} hacks pillar'), href: '/warzone-hacks/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/warzone-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/warzone-aimbot/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/warzone-radar-hack/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} hacks FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} Intel blog'), href: '/blog/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for Call of Duty Warzone on Windows PC. It includes aimbot, ESP wallhack, loot ESP, radar, Cloud DMA, and AWS options, with {antiCheat} maintenance and setup support.',
		slug: 'what-are-warzone-hacks',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected ESP, radar, and aimbot for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-warzone-hacks-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in BR and Resurgence?',
		answer:
			'Yes. ESP, radar, and aimbot are built for {game} raid flow — reading operators, spotting loot, and staying aware near buy stations.',
		slug: 'br-and-resurgence',
		seoTitle: 'BR and Resurgence Support | FAQ',
		seoDescription:
			'{brand} works in BR and Resurgence — ESP, radar, and aimbot for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'{brand} bundles aimbot, ESP wallhack, loot ESP, radar/compass, StreamProof, and gamepad support in one license. Cloud DMA and AWS are optional at checkout. See Features for the full list.',
		slug: 'esp-wallhack-radar-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Radar, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after a Call of Duty Warzone or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a Call of Duty Warzone or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows operators and loot through walls. {brand} includes boxes, skeleton, health bars, distance, and loot ESP categories.',
		slug: 'what-is-a-warzone-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals operators and loot through walls — with distance, skeleton, health, and loot filters.',
	}),
	faq({
		question: 'Does {brand} include a radar hack?',
		answer:
			'Yes. {brand} includes radar and compass overlays that highlight nearby threats outside your view — useful for flanks and buy-station holds.',
		slug: 'does-warzone-hacks-include-radar-hack',
		seoTitle: 'Does {brand} Include a Radar Hack? | FAQ',
		seoDescription:
			'Yes — {brand} includes 2D radar overlays for nearby threats outside your FOV.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
		slug: 'ricochet-anti-cheat-and-warzone-hacks',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with aimbot, ESP, loot ESP, and radar in one stack. Cloud DMA and AWS options are at checkout.',
		slug: 'buy-undetected-warzone-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — ESP, radar, and aimbot in one stack. Cloud DMA and AWS at checkout.',
	}),
	faq({
		question: 'Do you offer Cloud DMA or AWS?',
		answer:
			'Yes. Cloud DMA and AWS are optional at checkout for {brand}. Pick the option that matches how you want to run the package on Windows PC.',
		slug: 'cloud-dma-and-aws-options',
		seoTitle: 'Cloud DMA and AWS Options | FAQ',
		seoDescription:
			'{brand} offers Cloud DMA and AWS options at checkout for Warzone on Windows PC.',
	}),
	faq({
		question: 'Is {brand} StreamProof and gamepad compatible?',
		answer:
			'Yes. Misc includes StreamProof, gamepad support, lobby stats, multi-game support, regular updates, and 24/7 support.',
		slug: 'streamproof-and-gamepad-support',
		seoTitle: 'StreamProof and Gamepad Support | FAQ',
		seoDescription:
			'{brand} includes StreamProof and gamepad support plus 24/7 help for Warzone on Windows PC.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'xKrypt0_WZ',
		rating: 5,
		text: 'Aimbot in Warzone Hacks feels smooth on Verdansk. The menu took a few minutes to learn. After that, drops felt easy.',
		short: 'Aimbot in Warzone Hacks feels smooth on Verdansk.',
		slug: 'warzone-soft-aim-review-xkrypt0',
		seoTitle: 'Aimbot Review by @xKrypt0_WZ — 5/5 | {brand}',
		seoDescription: '@xKrypt0_WZ rates {brand} aimbot 5/5 for Verdansk on Windows PC.',
		date: '2026-07-24',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'ESP boxes help on Resurgence matches. You can see who is holding a hallway before you push. Still worth the price for Warzone Hacks.',
		short: 'ESP boxes help on Resurgence matches. Still worth the price for Warzone Hacks.',
		slug: 'warzone-esp-resurgence-review-buildsr4k',
		seoTitle: 'ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription: '@buildsR4K rates {brand} ESP 4/5 for Resurgence matches on Windows PC.',
		date: '2026-07-19',
		tag: 'Resurgence',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'I moved to Warzone Hacks this season and used the Cloud DMA option. Setup was simple. It stayed up after the last Ricochet update when my old cheat failed. Lifetime was a good buy.',
		short: 'Cloud DMA in Warzone Hacks stayed up after the last Ricochet update.',
		slug: 'warzone-cloud-dma-review-dma-wizard',
		seoTitle: 'Update Review by @dma_wizard — 5/5 | {brand}',
		seoDescription: '@dma_wizard rates {brand} 5/5 after a {antiCheat} update on Windows PC.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'Soft aim in Warzone Hacks is easy to tune on PC. I changed FOV a little and it felt natural. Menu is clear enough.',
		short: 'Soft aim in Warzone Hacks is easy to tune on PC.',
		slug: 'warzone-soft-aim-review-ctrl-player99',
		seoTitle: 'Soft Aim Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription: '@ctrl_player99 rates {brand} soft aim 4/5 on Windows PC.',
		date: '2026-07-11',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'Warzone Hacks works well once it is running. First launch was slow because Windows Defender flagged the loader. Support replied in about two hours. ESP on Urzikstan is solid.',
		short: 'ESP on Urzikstan is solid. Support helped after a slow first launch.',
		slug: 'warzone-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription: '@stormChaser_07 rates {brand} setup 3/5. ESP on Urzikstan is solid after support help.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'lootGoblinx',
		rating: 5,
		text: 'Loot ESP in Warzone Hacks pays for the monthly plan. Armor plates, ammo, and crate markers make early circles faster.',
		short: 'Loot ESP in Warzone Hacks pays for the monthly plan.',
		slug: 'warzone-loot-esp-review-lootgoblinx',
		seoTitle: 'Loot ESP Review by @lootGoblinx — 5/5 | {brand}',
		seoDescription: '@lootGoblinx rates {brand} loot ESP 5/5 for early raids on Windows PC.',
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'I have used Warzone Hacks since last season. Aimbot per bone helps in buildings. Status updates after Ricochet patches could be clearer, but it came back the next day.',
		short: 'Aimbot per bone in Warzone Hacks helps in buildings.',
		slug: 'warzone-soft-aim-raid-review-rankedgrind42',
		seoTitle: 'Match Aimbot by @rankedGrind42 — 4/5 | {brand}',
		seoDescription: '@rankedGrind42 rates {brand} aimbot 4/5 for Warzone matches on Windows PC.',
		date: '2026-07-07',
		tag: 'BR',
	}),
	reviewMeta({
		handle: 'vanLifeWZ',
		rating: 5,
		text: 'Radar in Warzone Hacks saved me near buy stations. Seeing the third party early in duos is huge. Boxes plus compass look clean.',
		short: 'Radar in Warzone Hacks saved me near buy stations.',
		slug: 'warzone-radar-hack-review-vanlifewz',
		seoTitle: 'Radar Review by @vanLifeWZ — 5/5 | {brand}',
		seoDescription: '@vanLifeWZ rates {brand} radar 5/5 near buy stations on Windows PC.',
		date: '2026-07-28',
		tag: 'Radar',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'Most cheats go down on patch day. Warzone Hacks posted on the status page within a few hours and was back the next morning. My old tool left me waiting for days.',
		short: 'Warzone Hacks was back the next morning after a patch.',
		slug: 'warzone-ricochet-update-review-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription: '@patchDayMike rates {brand} status updates 4/5 after {antiCheat} patches.',
		date: '2026-06-09',
		tag: 'Ricochet updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'Long-range aimbot plus ESP in Warzone Hacks is excellent for sniper shots. Simple and strong.',
		short: 'Long-range aimbot plus ESP in Warzone Hacks is excellent.',
		slug: 'warzone-sniper-soft-aim-review-snipezonly',
		seoTitle: 'Sniper Aimbot by @snipezOnly_ — 5/5 | {brand}',
		seoDescription: '@snipezOnly_ rates {brand} sniper aimbot 5/5 with ESP on Windows PC.',
		date: '2026-08-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
