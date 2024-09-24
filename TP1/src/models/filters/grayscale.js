/**
 * Apply a grayscale filter. This function is chainable.
 * @param {ImageData} imageData - the underlying pixel data.
 * @returns the underlying pixel data updated by the filter.
 */
export const grayscale = function (imageData) {
    // Extract the pixels only
    const {data} = imageData;

    let longueur = data.length;
    for (let i = 0; i < longueur; i += 4) {
        let r = data[i];
        let g = data[i + 1];
        let b = data[i + 2];

        let gray = r * 0.299 + g * 0.587 + b * 0.114;

        data[i] = gray
        data[i + 1] = gray
        data[i + 2] = gray
    }

    return imageData;
};

export default grayscale;