import type { PageLoad } from './$types';

const modules = import.meta.glob('/src/posts/*.md', { eager: true });

export const load: PageLoad = async () => {
	const posts = Object.entries(modules).map(([path, mod]) => ({
		slug: path.replace('./', '').replace('.md', ''),
		title: (mod as any).metadata.title,
		date: (mod as any).metadata.date
	}));
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return { posts };
};
