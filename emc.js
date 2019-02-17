/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var mo = require('merge-options'), eid = require('envcfg-import-deep-pmb');

function envcfgMergeConfigs(opt, configs) {
  var dest = (this || {});
  configs = Array.prototype.slice.call(arguments, 1);
  configs = Array.prototype.concat.apply([], configs);
  opt = Object.assign({}, opt);
  opt.inplace = true;
  configs.forEach(function mergeOneConfig(cfg) {
    mo.call(dest, cfg);
    eid(dest, opt);
  });
  return dest;
}

module.exports = envcfgMergeConfigs;
