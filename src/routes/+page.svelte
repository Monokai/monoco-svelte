<script lang="ts">
	import Monoco from '$lib/components/Monoco.svelte';
	import { monoco } from '$lib/actions/monoco.js';

	let radius = $state(32);
</script>

<Monoco class="monoco" smoothing={1} radius={radius} border={[20, '#f0f']} as="a" href="https://google.com">
	hoi
</Monoco>

<a class="monoco" use:monoco={{
	background: 'red',
	type: 'inset',
	radius: radius,
	border: [[2, '#00f'], [4, '#0f0']],
	precision: 0,
	isRounded: true
}} href="#">
	hoi {radius}
</a>

<button onclick={() => radius += 8}>+</button>

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
		filter: drop-shadow(1px 4px 8px #000);
	}
</style>