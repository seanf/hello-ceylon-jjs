# Proof of concept: Running Ceylon under Nashorn jjs

### ceylon-users discussion:

https://groups.google.com/d/msg/ceylon-users/W9FA-7lQUEc/wvl6oTgFEAAJ


## To compile:

    $ ceylon compile-js


## To run:

    $ jjs main.js


## Or to do both:

    $ ./buildrun.sh

~~This probably requires a pretty recent version of Java 8/Nashorn. Tested with JRE 1.8.0_60 on Windows 8.1 64-bit.~~

Nashorn currently (1.8.0.65) crashes when loading the full JSON model for ```function print``.
See https://github.com/ceylon/ceylon-js/issues/316#issuecomment-42464517 and
https://groups.google.com/d/msg/ceylon-users/W9FA-7lQUEc/nALYkkXLAAAJ



Rhino-Require runs the modules from the directory `rhino_modules`.

If you update the hello module, you must copy the compiled module from
`modules` to `rhino_modules`.

The directory `rhino_modules` also contains the ceylon.language JS files
which were copied from ${ceylon.home}/repo/


## Links:

* Rhino-Require: https://github.com/micmath/Rhino-Require
* Ceylon: http://ceylon-lang.org/
