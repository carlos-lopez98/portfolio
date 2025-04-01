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

	<div class="m-t-20px row justify-between items-center p-4 rounded">
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

		{#if item.slug === 'devhq'}
			<div class="row justify-between gap-2 w-full">
				<Chip>Disclaimer: You may need a Notion account to check it out</Chip>
			</div>
		{/if}
	</div>

	<CardDivider />
</Card>
