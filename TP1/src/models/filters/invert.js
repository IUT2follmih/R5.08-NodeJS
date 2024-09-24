/**
 * Apply an invert filter. This function is chainable.
 * @param {ImageData} imageData - the underlying pixel data.
 * @returns the underlying pixel data updated by the filter.
 */
export const invert = function (imageData) {
  // Extract the pixels only
  const { data } = imageData;

  // TODO: implement the invert filter.
  
  return imageData;
};

export default invert;