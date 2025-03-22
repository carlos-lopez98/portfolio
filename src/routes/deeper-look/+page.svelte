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

<!-- Clickable Blocks -->
<section class="grid gap-6 md:grid-cols-3">
	<!-- Reading List -->
	<a
		href=""
		class="group p-6 rounded-lg shadow-md border bg-[var(--main)] hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer flex flex-col items-center text-center"
	>
		<h2 class="text-2xl font-semibold mb-2 group-hover:underline">My Reading List</h2>
		<p class="text-[var(--secondary-text)]">Take a look at what I'm reading 📚</p>
	</a>

	<!-- Life Outside Work -->
	<a
		href=""
		class="group p-6 rounded-lg shadow-md border bg-[var(--main)] hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer flex flex-col items-center text-center"
	>
		<h2 class="text-2xl font-semibold mb-2 group-hover:underline">Life Outside of Work</h2>
		<p class="text-[var(--secondary-text)]">Have to touch grass sometimes 🌿</p>
	</a>

	<!-- LeetCode -->
	<a
		href=""
		class="group p-6 rounded-lg shadow-md border bg-[var(--main)] hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer flex flex-col items-center text-center"
	>
		<h2 class="text-2xl font-semibold mb-2 group-hover:underline">LeetCode</h2>
		<p class="text-[var(--secondary-text)]">It’s gotta get done 😔</p>
	</a>
</section>
