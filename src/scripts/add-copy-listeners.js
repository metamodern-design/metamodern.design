/* global window, document */

import copy from 'clipboard-copy';
import forEachSelected from './for-each-selected';

const addCopyListeners = () => {
  const popup = document.createElement('span');
  popup.className = 'popup';
  popup.textContent = 'Copied to clipboard';

  forEachSelected(
    'pageContent',
    '.email',
    (elem) => {
      const address = elem.textContent.split('').reverse().join('');

      elem.addEventListener('click', (evt) => {
        copy(address);
        evt.target.appendChild(popup);
        window.setTimeout(() => evt.target.removeChild(popup), 2000);
      });
    },
  );
};


export default addCopyListeners;
