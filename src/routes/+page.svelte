<script lang="ts">
	import Monoco from '$lib/components/Monoco.svelte';
	import { monoco } from '$lib/actions/monoco.js';
	import { RoundInverse, Inset } from '@monokai/monoco';
	import type { CornerTypeOptions } from '@monokai/monoco';

	let radius = $state(32);

	function custom({
		width,
		height,
		radii,
		offsets
	}:CornerTypeOptions) {
		const toEven = (n:number) => ((n % 2 === 0) ? n : n + 1);

		const sizes = [
			width / radii[0],
			height / radii[1],
			width / radii[2],
			height / radii[3]
		].map(x => toEven(Math.round(x)))

		const points = [];

		let s = width / sizes[0];
		let [ot,,, ol] = offsets;

		points.push(['M', ol, ot]);

		for (let x = 0; x < sizes[0]; x++) {
			points.push(['L', ol + x / sizes[0] * width, ot + (x % 2 === 1 ? 0 : s)]);
		}

		s = height / sizes[1];

		for (let y = 0; y < sizes[1]; y++) {
			points.push(['L', ol + width - (y % 2 === 1 ? 0 : s), ot + y / sizes[1] * height]);
		}

		s = width / sizes[2];

		for (let x = 0; x < sizes[2]; x++) {
			points.push(['L', ol + width - x / sizes[2] * width, ot + height - (x % 2 === 1 ? 0 : s)]);
		}

		s = height / sizes[3];

		for (let y = 0; y < sizes[3]; y++) {
			points.push(['L', ol + (y % 2 === 1 ? 0 : s), ot + height - y / sizes[3] * height]);
		}

		points.push(['Z']);

		return points;
	}
</script>

<div class="monoco" use:monoco={{
	background: 'gray',
	type: custom,
	smoothing: 0,
	radius: radius
}}>
	hoi {radius}
</div>

<Monoco class="monoco" smoothing={1} radius={radius} border={[20, '#f0f']} as="a" href="https://google.com">
	hoi
</Monoco>

<div class="monoco" use:monoco={{
	background: 'blue',
	type: RoundInverse,
	radius: radius
}}>
	hoi {radius}
</div>

<a class="monoco" use:monoco={{
	background: 'red',
	type: Inset,
	radius: radius,
	border: [[2, '#00f'], [4, '#0f0']],
	precision: 0,
	isRounded: true
}} href="/">
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