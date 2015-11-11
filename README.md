# Proof of concept: Running Ceylon under Nashorn jjs


## To run:

    $ jjs main.js


## To compile:

NB: There is no build process yet; this is just a bunch of files, copied
from all over the place!


Rhino-Require runs the modules from the directory `rhino_modules`.

If you update the hello module, you must copy the compiled module from
`modules` to `rhino_modules`.

The directory `rhino_modules` also contains the ceylon.language JS files
which were copied from ${ceylon.home}/repo/
