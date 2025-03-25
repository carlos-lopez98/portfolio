<script lang="ts">
	import { computeExactDuration, countMonths, getMonthName } from '$lib/utils/helpers';
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
	// href={`${base}/deeper-look/${item.slug}`} - Add this back in, once you add another card to the deeper look page
</script>

<Card color={item.color}>
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

	<div class="row items-center gap-2">
		<UIcon icon="i-carbon-time" />

		{#if item.slug === 'leetcode'}
			<div class="row justify-between gap-2 w-full">
				<Chip>Current as of 03/24/25</Chip>

				<div class="mt-0">
					<CardLink
						label="View my Data Structures and Algorithms Practice on Github"
						to="https://github.com/carlos-lopez98/Algorithms"
						newTab={true}
					/>
				</div>
			</div>
		{/if}
	</div>

	<CardDivider />

	<!--Section Three-->
	<div class="col h-full">
		<!-- <p class="text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-40px flex-1 line-clamp-3">
			{item.shortDescription}
		</p> -->
		{#if item.screenshots}
			<div class=" flex gap-4 items-stretch max-w-lg">
				{#each item.screenshots as shot}
					<div class="flex-1 flex justify-around max-h-40 mx-auto">
						<!-- <p class="text-xs text-[var(--secondary-text)] mb-1">{shot.label}</p> -->
						<img src={shot.src} alt={shot.label} class="h-full object-contain rounded-[10px]" />
					</div>
				{/each}
			</div>
		{/if}
	</div>

	<CardDivider />
</Card>
