<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<article>
	<data.content />
</article>

<style>
	article {
		counter-reset: sidenote-counter;
	}
</style>
