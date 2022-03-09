
<!--#echo json="package.json" key="name" underline="=" -->
envcfg-merge-configs-pmb
========================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
merge-options + envcfg-import-deep-pmb
<!--/#echo -->



API
---

This module exports one function:

### envcfgMergeConfigs(opt, config1[, …configs])

Merges all your `config`s using `merge-options`,
then imports env vars by applying `envcfg-import-deep-pmb` with
options from `opt` and forced `{ inplace: true }`.
Returns the resulting config.

* ___Pro Tip:___ Use the `ifPrefixProp` option from `envcfg-import-deep-pmb`
  to easily have your CLI config decide which environment config to accept.



<!--#toc stop="scan" -->


See also
--------

* [`cfg-cli-env-180111-pmb`](https://github.com/mk-pmb/cfg-cli-env-180111-pmb-js)


Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
