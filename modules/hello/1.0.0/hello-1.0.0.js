(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('hello/1.0.0/hello-1.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$c=require('ceylon/language/1.2.0/ceylon.language-1.2.0');
m$c.$addmod$(m$c,'ceylon.language/1.2.0');
m$c.$addmod$(ex$,'hello/1.0.0');
ex$.$mod$ans$=[];
ex$.$pkg$ans$hello=function(){return[m$c.shared()];};

//MethodDef run at run.ceylon (1:0-5:0)
function run(){
m$c.print("Hello from Ceylon running in Nashorn jjs");
var $d=m$c.$init$AppliedInterface$jsint()(m$c.List,{Type$Interface:{t:m$c.List,a:{Element$List:{t:m$c.$_Object}}}},undefined,{Element$List:{t:m$c.$_Object}});
m$c.print($d);
}
ex$.run=run;
run.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$c.Anything},ps:[],pa:1,d:['hello','run']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
