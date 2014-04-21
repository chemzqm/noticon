/**
 * Require the module at `name`.
 *
 * @param {String} name
 * @return {Object} exports
 * @api public
 */

function require(name) {
  var module = require.modules[name];
  if (!module) throw new Error('failed to require "' + name + '"');

  if (!('exports' in module) && typeof module.definition === 'function') {
    module.client = module.component = true;
    module.definition.call(this, module.exports = {}, module);
    delete module.definition;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Register module at `name` with callback `definition`.
 *
 * @param {String} name
 * @param {Function} definition
 * @api private
 */

require.register = function (name, definition) {
  require.modules[name] = {
    definition: definition
  };
};

/**
 * Define a module's exports immediately with `exports`.
 *
 * @param {String} name
 * @param {Generic} exports
 * @api private
 */

require.define = function (name, exports) {
  require.modules[name] = {
    exports: exports
  };
};
require.register("noticon", function (exports, module) {

/**
 * Module dependencies.
 */

/**
 * Expose `Noticon()`.
 */

module.exports = Noticon;

/**
 * Initialize a new `Noticon` with
 * an optional css `selector`,
 * defaulting to ".noticon".
 *
 * @param {String} selector
 * @api public
 */

function Noticon(el, clz) {
  if (!(this instanceof Noticon)) return new Noticon(el, clz);
  el.style.position = 'relative';
  var div = this.el = document.createElement('div');
  div.className = 'noticon ' + (clz || '');
  el.appendChild(div);
  this.update(0);
}

Noticon.prototype.update = function (n) {
  if (n) {
    this.el.style.display = 'block';
    this.el.innerHTML = n.toString();
  } else {
    this.el.style.display = 'none';
  }
}



});

require("noticon")
