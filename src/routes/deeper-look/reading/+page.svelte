<script lang="ts">
	import { base } from '$app/paths';
</script>

<section class="flex flex-col items-center justify-center text-center min-h-[70vh] gap-6">
	<h1 class="text-4xl font-bold">📚 Archive Coming Soon</h1>
	<p class="text-[var(--secondary-text)] text-lg max-w-xl">
		This page will soon host an archive of all the books I’ve read — from programming deep-dives to
		novels I picked up just to unplug.
	</p>

	<p class="text-sm text-[var(--secondary-text)] italic">
		Because reading isn’t just for debugging.
	</p>

	<!-- Back -->
	<a
		href={`${base}/deeper-look`}
		class="mt-4 px-4 py-2 rounded-md border border-[var(--border)] hover:border-[var(--border-hover)] text-sm text-[var(--accent-text)] hover:text-[var(--accent)] transition-colors"
	>
		← Back
	</a>
</section>
