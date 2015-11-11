load('lib/rhino-require.js');

// Ceylon's "print" calls console.log, not available on Nashorn
var console = { log: print };
var hello = require('hello/1.0.0/hello-1.0.0');
hello.run('foo');
