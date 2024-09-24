export const view = {
  filters: {
    element: document.getElementById('filters'),                            // HTML Node containing the filters
    template: document.getElementById('filter-template'),                   // Filter's template to clone
    applyDropdown: document.getElementById('apply-filter-dropdown'),        // Dropdown to apply a filter
  },
  browseImageBtn: document.getElementById('browse-image-btn'),              // Visible button to browse an image
  browseImageHiddenBtn: document.getElementById('browse-image-hidden-btn'), // Hidden file button
  dropzone: {
    originale: document.getElementById('image-dropzone'),                   // Dropzone to DnD the image to filter
    filtered: document.getElementById('filtered-image-dropzone')            // Placeholder of the filtered image
  },
};

/**
 * Return the originale image if loaded.
 * @returns {HTMLImageElement} the originale image if loaded, <code>null</code> otherwise.
 */
view.getOriginaleImage = () => {
  return view.dropzone.originale.querySelector('img');
};

/**
 * Return whether the image is loaded or not.
 * @returns <code>true</code> if the image is loaded, <code>false</code> otherwise.
 */
view.isImageLoaded = () => {
  return view.getOriginaleImage() !== null;
};

/**
 * Return the filters to apply.
 * @returns {Array.<HTMLAnchorElement>} the items representing the filters to apply
 */
view.filters.getFiltersToApply = () => {
  return Array.from(view.filters.applyDropdown.querySelectorAll('.dropdown-item'));
};

/**
 * Return the name of the filter to apply.
 * @param {HTMLAnchorElement} filterToApply - the filter to apply.
 * @returns {string} the name of the filter to apply.
 */
view.filters.getFilterToApplyName = (filterToApply) => {
  return filterToApply.getAttribute('data-filter-name');
};


/**
 * Disable the filter to apply in the dropdown.
 * @param {HTMLAnchorElement} filterToApply - the filter to apply.
 */
view.filters.disable = (filterToApply) => {
  filterToApply.setAttribute('disabled', 'disabled');
  filterToApply.classList.add('disabled');
};

/**
 * Return the list of (disabled and enabled) applied filters.
 * @returns {Array.<HTMLLabelElement>}
 */
view.filters.getFilterEntries = () => {
  return Array.from(document.querySelectorAll('[data-filter]'));
};

/**
 * Return <code>true</code> if the filter is enabled.
 * @param {HTMLLabelElement} filterEntry - the label element corresponding to  
 * @returns {Boolean} <code>true</code> if the filter is enabled, <code>false</code> otherwise.
 */
view.filters.isFilterEntryEnabled = (filterEntry) => {
  return filterEntry.querySelector('input').checked === true
}

/**
 * Return the list of (enabled only) applied filters.
 * @returns {Array.<HTMLLabelElement>}
 */
view.filters.getEnabledFilterEntries = () => {
  return Array.from(view.filters.getFilterEntries())
    .filter(entry => {
      return view.filters.isFilterEntryEnabled(entry)
    });
};

/**
 * Remove a filter entry.
 * @param {HTMLLabelElement} entry - the label of the filter 
 */
view.filters.removeEntry = function (filterEntry) {
  filterEntry.remove();
  if (view.filters.element.querySelectorAll('label').length === 0)
    view.filters.element.classList.remove('filters-applied');
};

view.filters.addEntry = function (name, label, parameters) {
  const clone = view.filters.template.content.cloneNode(true);
  view.filters.element.children[0].append(clone);

  const labelElement = view.filters.element.children[0].querySelector('label:last-of-type');
  labelElement.setAttribute('data-filter', name);
  labelElement.querySelector('span').innerText = label;
  view.filters.element.classList.add('filters-applied');
  return labelElement;
}

export default view;