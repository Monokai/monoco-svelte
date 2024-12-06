import { addCorners, unobserve } from '@monokai/monoco';
export const monoco = (element, options) => {
    if (element) {
        addCorners(element, options);
    }
    return {
        destroy() {
            if (element) {
                unobserve(element);
            }
        }
    };
};
export default monoco;
