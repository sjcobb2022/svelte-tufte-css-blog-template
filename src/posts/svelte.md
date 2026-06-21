---
title: Svelte Components Demo
date: '2026-6-20'
---

<script>
	import SideNote from '$lib/components/SideNote.svelte';
	import MarginNote from '$lib/components/MarginNote.svelte';
</script>

# Svelte Components Demo

<p class="subtitle">Tufte CSS with Svelte components</p>

<section>

## SideNote

<p>
Sidenotes are numbered references<SideNote>This is a sidenote. IDs are
auto-generated.</SideNote> in the margin.
</p>

<p>
Sidenotes are numbered references<SideNote>This is a sidenote. IDs are
auto-generated.</SideNote> in the margin.
</p>

</section>

<section>

## MarginNote

<p>
Margin notes are unnumbered <MarginNote>This is a margin note with the default ⊕
toggle.</MarginNote> asides in the margin.
</p>

<p>
Custom labels are supported <MarginNote label="†">This uses a dagger
symbol.</MarginNote> via the label prop.
</p>

</section>

<section>

## Margin Figure

<p>
<MarginNote><img src="https://edwardtufte.github.io/tufte-css/img/rhino.png" alt="Rhino"/>Margin
figures place images in the margin with captions.</MarginNote>
Margin figures are created by wrapping an image inside a MarginNote component.
The caption text follows the image within the same component.
</p>

</section>
