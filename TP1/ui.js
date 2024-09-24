import filters from './src/models/filters/filters.js';
import DnD from './src/views/dnd.js';
import view from './src/views/view.js';

// Configure the DnD behaviour when dropping an image
const dnd = new DnD();
dnd.init();
dnd.onImageDrop(files => {
  updateImage(files);
});

// Allow for browsing an image
view.browseImageBtn.addEventListener('click', (e) => {
  e.preventDefault();
  view.browseImageHiddenBtn.click();
});

view.browseImageHiddenBtn.addEventListener('change', (e) => {
  e.preventDefault();
  updateImage(e.target.files);
  return false;
});

// Get the list of filters to apply and disable the ones for which
// there is no implemented filters.
view.filters.getFiltersToApply().forEach(filterToApply => {
  const name = view.filters.getFilterToApplyName(filterToApply);
  // If the filter exists
  if (!filters[name]) {
    view.filters.disable(filterToApply);
    return;
  }

  // If there exists an implemented filter,
  // Then, allow for applying this filter.
  filterToApply.addEventListener('click', (e) => {
    e.preventDefault();
    const filterEntry = view.filters.addEntry(name, filterToApply.innerText, []);
    applyFilters();

    // Allow for removing the filter
    filterEntry.querySelector('a.trash').addEventListener('click', e => {
      e.preventDefault();
      view.filters.removeEntry(e.currentTarget.parentNode);
      applyFilters();
    });

    // Notify when the input changes
    filterEntry.querySelector('input').addEventListener('change', (e) => {
      applyFilters();
    });
  });
});

/**
 * Return the filter functions to apply.
 * @returns Array.<Function> the functions to apply.
 */
const getFilters = function () {
  return view.filters.getEnabledFilterEntries().map(appliedFilterEntry => {
    const name = appliedFilterEntry.getAttribute('data-filter');
    return filters[name];
  });
};

/**
 * Apply the filters.
 */
const applyFilters = function () {
  if (!view.isImageLoaded())
    return;

  // Get the image
  const img = view.getOriginaleImage();

  // Get the canvas
  // FIXME: this code should be moved into the view.
  const canvas = document.getElementById('canvas-preview');
  const { width, height } = canvas.getBoundingClientRect();

  // Retrieve the context of the canvas
  const ctx = canvas.getContext('2d');

  // Clone the image onto the canvas
  ctx.drawImage(img, 0, 0);

  // Retrieve the image data (used for filtering)
  const imageData = ctx.getImageData(0, 0, width, height);

  // Filter the image.
  getFilters().forEach(filter => {
    filter(imageData);
  });

  // Update the canvas
  ctx.putImageData(imageData, 0, 0);
};

/**
 * Upon loading a new image, update the canvas.
 */
const updateCanvas = function () {

  // Get the image and its bounding box
  const img = view.getOriginaleImage(),
    bb = img.getBoundingClientRect();

  // Get the canvas
  // FIXME: this code should be moved into the view.
  const canvas = document.getElementById('canvas-preview');
  canvas.setAttribute('height', `${bb.height}px`);
  canvas.setAttribute('width', `${bb.width}px`);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  applyFilters();
}

/**
 * 
 * @param {*} files - the loaded files, either from DnD or from browsing. 
 */
const updateImage = function (files) {
  if (files.length > 1) {
    alert('Only one image is accepted');
    return;
  }

  const file = files[0];

  if (!['image/jpeg', 'image/png'].includes(file.type)) {
    alert('The file should be a JPG or a PNG image');
    return;
  }

  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function () {

    // Create the image
    let img = document.createElement('img');
    img.src = reader.result;

    view.dropzone.originale.classList.add('image-loaded');
    view.dropzone.filtered.classList.add('image-loaded');

    // Get the image dimension
    const bb = view.dropzone.originale.getBoundingClientRect();

    // Upon loading the image
    img.addEventListener('load', (e) => {

      const { height } = img.getBoundingClientRect();
      if (height > bb.height) {
        img.setAttribute('height', `${bb.height}px`);
        img.setAttribute('width', 'auto');
      }

      const { width } = img.getBoundingClientRect();
      if (width > bb.width) {
        img.setAttribute('width', `${bb.width}px`);
        img.setAttribute('height', 'auto');
      }
      updateCanvas();
    });

    // FIXME: Should be moved into the view file
    const preview = view.dropzone.originale.querySelector('.preview');
    preview.innerHTML = '';
    preview.appendChild(img);
  }
};