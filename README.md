
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

For each config, it first merges that config using `merge-options`,
then imports env vars by applying `envcfg-import-deep-pmb` with
options from `opt` and forced `{ inplace: true }`.
Returns the resulting config.




<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
