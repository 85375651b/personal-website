/** Prefix a path with the site base (e.g. `/personal-website/` on GitHub Pages). */
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL;
	const normalizedBase = base.endsWith('/') ? base : `${base}/`;
	if (path.startsWith('#')) {
		return `${normalizedBase}${path}`;
	}
	const subpath = path.startsWith('/') ? path.slice(1) : path;
	return `${normalizedBase}${subpath}`;
}
