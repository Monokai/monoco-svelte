<script lang="ts">
	import type { Component, Snippet } from 'svelte'
	import type { CornerOptions } from '@monokai/monoco'
	import monoco from '$lib/actions/monoco.js'

	interface Interface extends Component, CornerOptions {
		class: string,
		children: Snippet,
		as:string,
	}

	const {
		class: className,
		children,
		as,

		width,
		height,
		smoothing,
		radius,
		offset,
		type,
		precision,
		isRounded,
		background,
		border,
		strokeDrawType,
		clipID,
		clip,
		observe,
		onResize,
		...rest
	}:Interface = $props()
</script>

<svelte:element
	class={className}
	this={as}
	use:monoco={{
		width,
		height,
		smoothing,
		radius,
		offset,
		type,
		precision,
		isRounded,
		background,
		border,
		strokeDrawType,
		clipID,
		clip,
		observe,
		onResize
	}}
	{...rest}
>
	{@render children()}
</svelte:element>