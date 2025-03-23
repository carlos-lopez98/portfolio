<script lang="ts">
	// eventually you'll import data or routes here
	import ItemCard from '$lib/components/ItemCard/ItemCard.svelte';
	import type { LinkedItem } from '$lib/types';
	import { deeperLookItems } from '$lib/data/deeperlook';
</script>

<!-- Main Header -->
<section class="text-center mt-12 mb-10">
	<h1 class="text-4xl font-bold">Deeper Look</h1>
	<p class="mt-2 text-[var(--secondary-text)] text-lg">
		A more personal take on what I'm learning, building, and living.
	</p>
</section>
