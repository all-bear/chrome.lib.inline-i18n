/* global chrome */

const DEFAULTS_PARAMS = {
  attribute: 'data-translate'
};

export class InlineI18n {
  static render(params) {
    const options = Object.assign({}, DEFAULTS_PARAMS, params);
    const els = document.querySelectorAll(`[${options.attribute}]`);

    Array.prototype.forEach.call(els, el => {
      const code = el.getAttribute(options.attribute),
        msg = chrome.i18n.getMessage(code);

      if (msg) {
        el.innerHTML = chrome.i18n.getMessage(code);
      }
    });
  }
}