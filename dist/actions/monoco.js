import { addCorners, draw, unobserve } from '@monokai/monoco';
export const monoco = (element, cornerOptions) => {
    if (element) {
        addCorners(element, cornerOptions);
    }
    return {
        update(cornerOptions) {
            if (element) {
                draw(element, cornerOptions);
            }
        },
        destroy() {
            if (element) {
                unobserve(element);
            }
        }
    };
};
export default monoco;
