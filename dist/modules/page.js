define("#mix/sln/0.1.0/modules/page",["mix/core/0.3.0/base/reset","mix/core/0.3.0/base/class","mix/core/0.3.0/base/message","mix/core/0.3.0/url/navigate"],function(a){a("mix/core/0.3.0/base/reset");var d=window,f=(d.document,a("mix/core/0.3.0/base/class")),g=a("mix/core/0.3.0/base/message"),h=a("mix/core/0.3.0/url/navigate").singleton,i=f.create({Implements:g,initialize:function(a,b){var c=this;g.prototype.initialize.call(this,"app."+a),c._appname=a,c._isReady=!1,c._bindRoutes(b.routes),c.on("ready",function(a){c._isReady||(c._isReady=!0,c.ready(a))}),c.on("unload",function(){c._isReady&&(c._isReady=!1,c.unload())})},_bindRoutes:function(a){var b=this,c=b._appname;Object.each(a,function(a,d){var e=a.text,f=a.callback;"default"===d&&(a["default"]=!0),a.callback=function(){Object.isTypeof(f,"string")&&(f=b[f]),b._isReady?f.apply(b,arguments):b.once("ready",function(){f.apply(b,arguments)})},h.addRoute(c+"."+d,e,a)})},ready:function(){},unload:function(){}});return i});