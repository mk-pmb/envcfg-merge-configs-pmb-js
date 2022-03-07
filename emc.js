/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX, mo = require('merge-options'), eid = require('envcfg-import-deep-pmb');

EX = function envcfgMergeConfigs(opt, configs) {
  var dest = (this || {});
  configs = Array.prototype.slice.call(arguments, 1);
  configs = Array.prototype.concat.apply([], configs);
  mo.apply(dest, configs);
  opt = Object.assign({}, opt);
  opt.inplace = true;
  eid(dest, opt);
  return dest;
};

module.exports = EX;
