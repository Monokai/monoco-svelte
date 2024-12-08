<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { CornerOptions } from '@monokai/monoco'
	import monoco from '$lib/actions/monoco.js'

	type Type = {
		class: string,
		children: Snippet,
		as:string,
	} & CornerOptions

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
	}:Type = $props()
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