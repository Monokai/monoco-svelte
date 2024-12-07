import type { Snippet } from 'svelte';
import type { CornerOptions } from '@monokai/monoco';
type Type = {
    class: string;
    children: Snippet;
    as: string;
} & CornerOptions;
declare const Monoco: import("svelte").Component<Type, {}, "">;
type Monoco = ReturnType<typeof Monoco>;
export default Monoco;
