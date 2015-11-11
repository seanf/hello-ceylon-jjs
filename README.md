# Proof of concept: Running Ceylon under Nashorn jjs

### ceylon-users discussion:

https://groups.google.com/d/msg/ceylon-users/W9FA-7lQUEc/wvl6oTgFEAAJ


## To run:

    $ jjs main.js

This probably requires a pretty recent version of Java 8/Nashorn. Tested with JRE 1.8.0_60 on Windows 8.1 64-bit.


## To compile:

NB: There is no build process yet; this is just a bunch of files, copied
from all over the place!


Rhino-Require runs the modules from the directory `rhino_modules`.

If you update the hello module, you must copy the compiled module from
`modules` to `rhino_modules`.

The directory `rhino_modules` also contains the ceylon.language JS files
which were copied from ${ceylon.home}/repo/


## Links:

* Rhino-Require: https://github.com/micmath/Rhino-Require
* Ceylon: http://ceylon-lang.org/
