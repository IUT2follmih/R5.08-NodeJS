import view from './view.js';

/**
 * Prevent DnD normal behaviour.
 * @param {Event} e - any type of DnD event (DragEvent, etc.).
 */
const preventDefaultDnDBehavior = (e) => {
  e.stopPropagation();
  e.preventDefault();
};

export class DnD {

  /**
   * Callback to invoke when the image is dropped.
   * @type {Function}
   */
  #onDropCallback;

  /**
   * Init the DnD behaviour when dropping an image.
   */
  init() {
    view.dropzone.originale.addEventListener('dragenter', (e) => {
      preventDefaultDnDBehavior(e);
      e.currentTarget.classList.add('hover');
    });

    view.dropzone.originale.addEventListener('dragover', preventDefaultDnDBehavior);

    view.dropzone.originale.addEventListener('dragleave', (e) => {
      preventDefaultDnDBehavior(e);
      if (e.target === imageDropzone)
        e.currentTarget.classList.remove('hover');
    });

    view.dropzone.originale.addEventListener('drop', (e) => {
      preventDefaultDnDBehavior(e);
      e.currentTarget.classList.remove('hover');

      this.#onDropCallback(e.dataTransfer.files);
    });
  }

  /**
   * Set the callback to invoke when an image is dropped. 
   * @param {Function} callback - the function to invoke upon droppping an image. 
   */
  onImageDrop(callback) {
    this.#onDropCallback = callback;
  }
}

export default DnD;