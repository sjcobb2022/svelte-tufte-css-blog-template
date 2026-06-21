<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		children: Snippet;
	}

	let { id = Math.random().toString(36).slice(2), children }: Props = $props();
</script>

<label for="sn-{id}" class="margin-toggle sidenote-number"></label><input
	type="checkbox"
	id="sn-{id}"
	class="margin-toggle"
/><span class="sidenote">{@render children()}</span>
