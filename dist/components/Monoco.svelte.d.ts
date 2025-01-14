import type { Component, Snippet } from 'svelte';
import type { CornerOptions } from '@monokai/monoco';
interface Interface extends Component, CornerOptions {
    class: string;
    children: Snippet;
    as?: string;
}
declare const Monoco: Component<Interface, {}, "">;
type Monoco = ReturnType<typeof Monoco>;
export default Monoco;
