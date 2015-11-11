(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('hello/1.0.0/hello-1.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$2=require('ceylon/language/1.2.0/ceylon.language-1.2.0');
m$2.$addmod$(m$2,'ceylon.language/1.2.0');
m$2.$addmod$(ex$,'hello/1.0.0');
ex$.$mod$ans$=[];
ex$.$pkg$ans$hello=function(){return[m$2.shared()];};

//MethodDef run at run.ceylon (1:0-3:0)
function run(){
m$2.print("Hello from Ceylon running in Nashorn jjs");
}
ex$.run=run;
run.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$2.Anything},ps:[],pa:1,d:['hello','run']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
