import type { CornerOptions } from '@monokai/monoco'
import { addCorners, unobserve } from '@monokai/monoco'

export const monoco = (
	element: HTMLElement,
	options: CornerOptions
) => {
	if (element) {
		addCorners(element, options)
	}

	return {
		destroy() {
			if (element) {
				unobserve(element)
			}
		}
	};
}

export default monoco