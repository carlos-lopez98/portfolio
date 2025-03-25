<script lang="ts">
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import type { LinkedItem } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	export let item: LinkedItem;
	// $: period = `${months} month${months > 1 ? 's' : ''}`;
	// $: period = `${getTimeDiff(
	// 	project.period.from,
	// 	project.period.to ?? new Date(Date.now() + 1000 * 60 * 60 * 24)
	// )}`;

	// const isInternal = item.link?.startsWith('/');
	// const href = item.link ? (isInternal ? `${base}${item.link}` : item.link) : undefined;
</script>

<Card href={`${base}/deeper-look/${item.slug}`} color={item.color}>
	<CardLogo alt={item.name} src={getAssetURL(item.logo)} size={50} radius={'15px'} />

	<div class="m-t-20px row justify-between items-center">
		<CardTitle title={item.name} />
		<div class="row">
			{#if item.link}
				<CardLink label={item.link.label} to={item.link.to} />
			{/if}
		</div>
	</div>

	<!-- First Divider -->
	<CardDivider />

	<!-- Section One - Brief Description -->
	<div class="col text-[var(--secondary-text)] text-0.85em">
		<div class="row flex flex-start gap-2">
			<UIcon icon="i-carbon-assembly-cluster" classes="text-1.25em" />
			<p>{item.shortDescription}</p>
		</div>
	</div>

	<!-- Section Two -->
	<CardDivider />

	<!-- Section Three -->
	<div class="flex flex-wrap gap-6 flex-start mt-4 w-full">
		{#each (item.books ?? []).slice(0, 4) as book}
			<div class="rounded-lg p-4 w-[220px] flex flex-col items-center gap-3">
				<!-- Top Row: Image + Title -->
				<div class="flex w-full gap-3">
					<img src={book.image} alt={book.title} class="w-12 h-16 object-cover rounded-md" />
					<div class="flex flex-col text-left">
						<p class="font-semibold text-sm">{book.title}</p>
						<p class="text-xs">{book.author}</p>
						<!-- <p class="text-xs text-[var(--secondary-text)]">{book.author}</p> -->
					</div>
				</div>

				<!-- Circular Progress Ring -->
				<div class="relative w-[150px] h-[150px]">
					<svg viewBox="0 0 36 36" class="w-full h-full">
						<path
							class="text-gray-200"
							d="M18 4
a 14 14 0 0 1 0 28
a 14 14 0 0 1 0 -28"
							fill="none"
							stroke="currentColor"
							stroke-width="7"
						/>
						<path
							class="text-green-500"
							d="M18 4
a 14 14 0 0 1 0 28
a 14 14 0 0 1 0 -28"
							fill="none"
							stroke="currentColor"
							stroke-width="7"
							stroke-dasharray="{book.progress}, 100"
						/>
					</svg>
					<!-- Optional: Progress Label -->
					<div
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-md leading-none text-[var(--secondary-text)]"
					>
						{book.progress}%
					</div>
				</div>

				<!-- Personal Thoughts -->
				{#if book.personalThoughts}
					<div
						class="text-[var(--secondary-text)] text-xs italic text-center px-2 border-l-2 border-[var(--accent)]"
					>
						<p>{book.personalThoughts}</p>
						{#if book.personalRating}
							<p class="mt-1 not-italic font-semibold text-[var(--accent-text)]">
								{book.personalRating}
							</p>
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<CardDivider />
</Card>
