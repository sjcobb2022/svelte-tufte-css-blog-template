<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<style>
article {
  counter-reset: sidenote-counter;
}
</style>

<article>
	<data.content />
</article>
