/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX, mo = require('merge-options'), eid = require('envcfg-import-deep-pmb');

EX = function envcfgMergeConfigs(opt, configs) {
  configs = Array.prototype.slice.call(arguments, 1);
  configs = Array.prototype.concat.apply([], configs);
  var dest = mo.apply(null, configs);
  console.debug(dest);
  opt = Object.assign({}, opt);
  opt.inplace = true;
  eid(dest, opt);
  return dest;
};

module.exports = EX;
