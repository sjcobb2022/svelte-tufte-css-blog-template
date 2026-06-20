<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>

	<data.content />
</article>
