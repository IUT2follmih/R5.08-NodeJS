/**
 * Apply an invert filter. This function is chainable.
 * @param {ImageData} imageData - the underlying pixel data.
 * @returns the underlying pixel data updated by the filter.
 */
export const invert = function (imageData) {
    // Extract the pixels only
    const {data} = imageData;

    let longueur = data.length;
    for (let i = 0; i < longueur; i += 4) {
        data[i] = 255 - data[i]
        data[i + 1] = 255 - data[i + 1]
        data[i + 2] = 255 - data[i + 2]
    }

    return imageData;
};

export default invert;