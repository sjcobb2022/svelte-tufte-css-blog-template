import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';

const modules = import.meta.glob('/src/posts/*.md');

export const entries: EntryGenerator = () => {
	return Object.keys(modules).map((path) => ({
		slug: path.replace('../', '').replace('.md', '')
	}));
};

export const load: PageLoad = async ({ params }) => {
	const importer = modules[`/src/posts/${params.slug}.md`];
	if (!importer) error(404, { message: 'Not found' });
	const post = await importer();
	const { title, date } = (post as any).metadata;
	const content = (post as any).default;
	return { content, title, date };
};
