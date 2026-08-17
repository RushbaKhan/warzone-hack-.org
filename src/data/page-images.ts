import { siteConfig } from './site';
import { warzoneImages } from './warzone';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	warzoneImages.espWallhack,
	warzoneImages.aimbotCombat,
	warzoneImages.aimbotSkeleton,
	warzoneImages.playerEsp,
	warzoneImages.cheatsCombat,
	'/images/warzone-hacks-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/warzone-hacks-hero-1024w.webp',
	'warzone-esp': warzoneImages.playerEsp,
	'warzone-aimbot': warzoneImages.aimbotCombat,
	features: warzoneImages.aimbotSkeleton,
	pricing: warzoneImages.cheatsCombat,
	setup: warzoneImages.playerEsp,
	updates: '/images/warzone-hacks-hero-1024w.webp',
	faq: warzoneImages.aimbotSkeleton,
	support: warzoneImages.cheatsCombat,
	undetected: warzoneImages.espWallhack,
	wallhack: warzoneImages.espWallhack,
	radar: warzoneImages.playerEsp,
	ricochet: warzoneImages.aimbotCombat,
	'cheats-2026': '/images/warzone-hacks-hero-1024w.webp',
	hacks: warzoneImages.cheatsCombat,
	'cheat-download': warzoneImages.cheatsCombat,
	'mod-menu': warzoneImages.playerEsp,
	'soft-aim': warzoneImages.aimbotSkeleton,
	'best-cheats': '/images/warzone-hacks-hero-1024w.webp',
	'aimbot-hack': warzoneImages.aimbotSkeleton,
	'esp-hack': warzoneImages.espWallhack,
	'unlock-all': warzoneImages.playerEsp,
	privacy: warzoneImages.aimbotCombat,
	refund: warzoneImages.cheatsCombat,
	terms: warzoneImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
