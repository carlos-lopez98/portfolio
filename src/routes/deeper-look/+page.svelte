<script lang="ts">
	// eventually you'll import data or routes here
	import ItemCard from '$lib/components/ItemCard/ItemCard.svelte';
	import type { LinkedItem } from '$lib/types';
	import { deeperLookItems } from '$lib/data/deeperlook';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';

	type Category = 'Programming' | 'Lifestyle' | 'Learning' | 'Reading' | 'Fitness' | 'Now Building';

	let selectedCategory: Category | 'All' = 'All';

	// ⬇️ This dynamically creates a list of used categories
	let filters: string[] = Array.from(new Set(deeperLookItems.flatMap((item) => item.category)));

	filters.unshift('All'); // Add "All" to the beginning

	// ⬇️ Reactive filtered list
	$: displayedItems = deeperLookItems.filter((item) => {
		return selectedCategory === 'All' || item.category.includes(selectedCategory);
	});
</script>

<!-- Main Header -->
<!-- <section class="text-center mt-12 mb-10">
	<h1 class="text-4xl font-bold">Deeper Look</h1>
	<p class="mt-2 text-[var(--secondary-text)] text-lg">
		A more personal take on what I'm learning, building, and living.
	</p>
</section> -->

<SearchPage title="Deeper Look">
	<div class="flex gap-2 mb-4 flex-wrap">
		{#each filters as category}
			<Chip active={selectedCategory === category} on:click={() => (selectedCategory = category)}>
				{category}
			</Chip>
		{/each}
	</div>

	<p class="mt-2 text-[var(--secondary-text)] text-lg text-center">
		A deeper look into my life, hobbies, interests, and programming stats.
	</p>

	{#if displayedItems.length === 0}
		<p class="text-center text-[var(--secondary-text)] mt-10">No items match this category.</p>
	{:else}
		<div class="items-list">
			{#each displayedItems as item}
				<ItemCard {item} />
			{/each}
		</div>
	{/if}
</SearchPage>

<style lang="scss">
	.items-list {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		gap: 20px;

		@media (max-width: 1350px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
