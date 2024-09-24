/**
 * Apply a grayscale filter. This function is chainable.
 * @param {ImageData} imageData - the underlying pixel data.
 * @returns the underlying pixel data updated by the filter.
 */
export const grayscale = function (imageData) {
  // Extract the pixels only
  const { data } = imageData;

  // TODO: implement the grayscale filter.
  
  return imageData;
};

export default grayscale;