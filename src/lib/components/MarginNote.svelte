<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		label?: string;
		children: Snippet;
	}

	let { id = Math.random().toString(36).slice(2), label = '⊕', children }: Props = $props();
</script>

<label for="mn-{id}" class="margin-toggle">{label}</label><input
	type="checkbox"
	id="mn-{id}"
	class="margin-toggle"
/><span class="marginnote">{@render children()}</span>
