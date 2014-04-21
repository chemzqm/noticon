
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


