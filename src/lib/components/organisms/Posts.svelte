<script lang="ts">
	import type { BlogPost } from '$lib/utils/types';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';

	export let posts: BlogPost[];
</script>

<div class="recent-posts">
	{#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if}
</div>


<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.recent-posts {
		margin: 100px 0;
	}
</style>