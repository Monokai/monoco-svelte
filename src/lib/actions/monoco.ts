import type { CornerOptions } from '@monokai/monoco'
import { addCorners, draw, unobserve } from '@monokai/monoco'

export const monoco = (
	element: HTMLElement,
	cornerOptions: CornerOptions
) => {
	if (element) {
		addCorners(element, cornerOptions)
	}

	return {
		update(cornerOptions: CornerOptions) {
			if (element) {
				draw(element, cornerOptions)
			}
		},

		destroy() {
			if (element) {
				unobserve(element)
			}
		}
	};
}

export default monoco