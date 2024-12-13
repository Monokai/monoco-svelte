# Monoco for Svelte

Try all options in the [interactive demo](https://somonoco.com)

## Installation

```sh
npm install @monokai/monoco-svelte
```

## Usage

You can use Monoco in two ways, as a Svelte action or as a Svelte component. The action (lowercase `monoco`) is more flexible, as it can use scoped classes, whereas the component (title-cased `Monoco`) cannot inherit scoped classes so they have to be declared globally.

### Svelte action

```svelte
<script>
	import { monoco } from '@monokai/monoco-svelte'
</script>

<div class="block" use:monoco={{
	radius: 32,
	color: '#f00',
	border: [2, '#000']
}}></div>

<style>
	.block {
		display: block;
		width: 128px;
		height: 128px;
	}
</style>
```

### Svelte Component

```svelte
<script>
	import { Monoco } from '@monokai/monoco-svelte'
</script>

<Monoco class="block" radius={32} color={'#f00'} border={[2, '#000']}></Monoco>

<style>
	:global .block {
		display: block;
		width: 128px;
		height: 128px;
	}
</style>
```

## Options

Go to [the main Monoco repository](https://github.com/monokai/monoco) to see all available options.
