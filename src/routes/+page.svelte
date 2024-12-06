<script lang="ts">
	import Monoco from '$lib/components/Monoco.svelte';
	import addCorners from '$lib/utils/addCorners.ts';
</script>

<Monoco class="monoco" smoothing={1} useCSS={false} radius={48} border={[20, '#f0f']} as="a" href="https://google.com">
	hoi
</Monoco>

<div class="monoco" use:addCorners={{
	color: 'red',
	radius: 64
}}>
	hoi
</div>

<style lang="css">
	:global .monoco {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 4rem;
/*		background-color: #f00;*/
/*		border: 2px solid #000;*/
/*		border-radius: 64px;*/
		width: 50%;
		height: 16rem;
	}
</style>