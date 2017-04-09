'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global chrome */

var DEFAULTS_PARAMS = {
  attribute: 'data-translate'
};

var InlineI18n = exports.InlineI18n = function () {
  function InlineI18n() {
    _classCallCheck(this, InlineI18n);
  }

  _createClass(InlineI18n, null, [{
    key: 'render',
    value: function render(params) {
      var options = Object.assign({}, DEFAULTS_PARAMS, params);
      var els = document.querySelectorAll('[' + options.attribute + ']');

      Array.prototype.forEach.call(els, function (el) {
        var code = el.getAttribute(options.attribute),
            msg = chrome.i18n.getMessage(code);

        if (msg) {
          el.innerHTML = chrome.i18n.getMessage(code);
        }
      });
    }
  }]);

  return InlineI18n;
}();