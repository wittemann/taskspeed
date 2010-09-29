(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.globalErrorHandling":"off"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"."},"qx":{"resourceUri":".","sourceUri":".","version":"1.3-pre"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:qooxdoo-1.3-pre.js"]],
  urisBefore : [],
  packageHashes : {"0":"717a40021bd8"},
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else 
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else 
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
}

qx.$$loader.signalStartup = function () 
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true; 
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['717a40021bd8']={"locales":{},"resources":{},"translations":{}};
(function(){var v="toString",u=".",t="default",s="Object",r='"',q="Array",p="()",o="String",n="Function",m=".prototype",U="function",T="Boolean",S="Error",R="constructor",Q="warn",P="hasOwnProperty",O="string",N="toLocaleString",M="RegExp",L='\", "',C="info",D="BROKEN_IE",A="isPrototypeOf",B="Date",y="",z="qx.Bootstrap",w="]",x="Class",E="error",F="[Class ",H="valueOf",G="Number",J="count",I="debug",K="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return F+this.classname+w;
},createNamespace:function(name,by){var bA=name.split(u);
var parent=window;
var bz=bA[0];

for(var i=0,bB=bA.length-1;i<bB;i++,bz=bA[i]){if(!parent[bz]){parent=parent[bz]={};
}else{parent=parent[bz];
}}parent[bz]=by;
return bz;
},setDisplayName:function(bI,bJ,name){bI.displayName=bJ+u+name+p;
},setDisplayNames:function(bL,bM){for(var name in bL){var bN=bL[name];

if(bN instanceof Function){bN.displayName=bM+u+name+p;
}}},define:function(name,b){if(!b){var b={statics:{}};
}var g;
var e=null;
qx.Bootstrap.setDisplayNames(b.statics,name);

if(b.members||b.extend){qx.Bootstrap.setDisplayNames(b.members,name+m);
g=b.construct||new Function;

if(b.extend){this.extendClass(g,g,b.extend,name,f);
}var c=b.statics||{};
for(var i=0,h=qx.Bootstrap.getKeys(c),l=h.length;i<l;i++){var j=h[i];
g[j]=c[j];
}e=g.prototype;
var d=b.members||{};
for(var i=0,h=qx.Bootstrap.getKeys(d),l=h.length;i<l;i++){var j=h[i];
e[j]=d[j];
}}else{g=b.statics||{};
}var f=this.createNamespace(name,g);
g.name=g.classname=name;
g.basename=f;
g.$$type=x;
if(!g.hasOwnProperty(v)){g.toString=this.genericToString;
}if(b.defer){b.defer(g,e);
}qx.Bootstrap.$$registry[name]=b.statics;
return g;
}};
qx.Bootstrap.define(z,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bO,bP,bQ,name,bR){var bU=bQ.prototype;
var bT=new Function;
bT.prototype=bU;
var bS=new bT;
bO.prototype=bS;
bS.name=bS.classname=name;
bS.basename=bR;
bP.base=bO.superclass=bQ;
bP.self=bO.constructor=bS.constructor=bO;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(k){return k.__count__;
},"default":function(cg){var length=0;

for(var ch in cg){length++;
}return length;
}})[(({}).__count__==0)?J:t],objectMergeWith:function(bh,bi,bj){if(bj===undefined){bj=true;
}
for(var bk in bi){if(bj||bh[bk]===undefined){bh[bk]=bi[bk];
}}return bh;
},__a:[A,P,N,v,H,R],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(cb){var cc=[];
var ce=Object.prototype.hasOwnProperty;

for(var cf in cb){if(ce.call(cb,cf)){cc.push(cf);
}}var cd=qx.Bootstrap.__a;

for(var i=0,a=cd,l=a.length;i<l;i++){if(ce.call(cb,a[i])){cc.push(a[i]);
}}return cc;
},"default":function(bl){var bm=[];
var bn=Object.prototype.hasOwnProperty;

for(var bo in bl){if(bn.call(bl,bo)){bm.push(bo);
}}return bm;
}})[typeof (Object.keys)==
U?K:
(function(){for(var bu in {toString:1}){return bu;
}})()!==v?D:t],getKeysAsString:function(V){var W=qx.Bootstrap.getKeys(V);

if(W.length==0){return y;
}return r+W.join(L)+r;
},__b:{"[object String]":o,"[object Array]":q,"[object Object]":s,"[object RegExp]":M,"[object Number]":G,"[object Boolean]":T,"[object Date]":B,"[object Function]":n,"[object Error]":S},bind:function(bF,self,bG){var bH=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var be=Array.prototype.slice.call(arguments,0,arguments.length);
return bF.apply(self,bH.concat(be));
};
},firstUp:function(bK){return bK.charAt(0).toUpperCase()+bK.substr(1);
},firstLow:function(ck){return ck.charAt(0).toLowerCase()+ck.substr(1);
},getClass:function(ci){var cj=Object.prototype.toString.call(ci);
return (qx.Bootstrap.__b[cj]||cj.slice(8,-1));
},isString:function(bt){return (bt!==null&&(typeof bt===O||qx.Bootstrap.getClass(bt)==o||bt instanceof String||(!!bt&&!!bt.$$isString)));
},isArray:function(Y){return (Y!==null&&(Y instanceof Array||(Y&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(Y.constructor,qx.data.IListData))||qx.Bootstrap.getClass(Y)==q||(!!Y&&!!Y.$$isArray)));
},isObject:function(bW){return (bW!==undefined&&bW!==null&&qx.Bootstrap.getClass(bW)==s);
},isFunction:function(bc){return qx.Bootstrap.getClass(bc)==n;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bd,name){while(bd){if(bd.$$properties&&bd.$$properties[name]){return bd.$$properties[name];
}bd=bd.superclass;
}return null;
},hasProperty:function(bx,name){return !!qx.Bootstrap.getPropertyDefinition(bx,name);
},getEventType:function(ca,name){var ca=ca.constructor;

while(ca.superclass){if(ca.$$events&&ca.$$events[name]!==undefined){return ca.$$events[name];
}ca=ca.superclass;
}return null;
},supportsEvent:function(X,name){return !!qx.Bootstrap.getEventType(X,name);
},getByInterface:function(bC,bD){var bE,i,l;

while(bC){if(bC.$$implements){bE=bC.$$flatImplements;

for(i=0,l=bE.length;i<l;i++){if(bE[i]===bD){return bC;
}}}bC=bC.superclass;
}return null;
},hasInterface:function(bX,bY){return !!qx.Bootstrap.getByInterface(bX,bY);
},getMixins:function(br){var bs=[];

while(br){if(br.$$includes){bs.push.apply(bs,br.$$flatIncludes);
}br=br.superclass;
}return bs;
},$$logs:[],debug:function(bv,bw){qx.Bootstrap.$$logs.push([I,arguments]);
},info:function(ba,bb){qx.Bootstrap.$$logs.push([C,arguments]);
},warn:function(bp,bq){qx.Bootstrap.$$logs.push([Q,arguments]);
},error:function(bf,bg){qx.Bootstrap.$$logs.push([E,arguments]);
},trace:function(bV){}}});
})();
(function(){var j="qx.allowUrlSettings",h="&",g="qx.core.Setting",f="qx.allowUrlVariants",e="qx.propertyDebugLevel",d="qxsetting",c=":",b=".";
qx.Bootstrap.define(g,{statics:{__c:{},define:function(k,l){if(l===undefined){throw new Error('Default value of setting "'+k+'" must be defined!');
}
if(!this.__c[k]){this.__c[k]={};
}else if(this.__c[k].defaultValue!==undefined){throw new Error('Setting "'+k+'" is already defined!');
}this.__c[k].defaultValue=l;
},get:function(o){var p=this.__c[o];

if(p===undefined){throw new Error('Setting "'+o+'" is not defined.');
}
if(p.value!==undefined){return p.value;
}return p.defaultValue;
},set:function(s,t){if((s.split(b)).length<2){throw new Error('Malformed settings key "'+s+'". Must be following the schema "namespace.key".');
}
if(!this.__c[s]){this.__c[s]={};
}this.__c[s].value=t;
},__d:function(){if(window.qxsettings){for(var a in window.qxsettings){this.set(a,window.qxsettings[a]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(q){}this.__e();
}},__e:function(){if(this.get(j)!=true){return;
}var n=document.location.search.slice(1).split(h);

for(var i=0;i<n.length;i++){var m=n[i].split(c);

if(m.length!=3||m[0]!=d){continue;
}this.set(m[1],decodeURIComponent(m[2]));
}}},defer:function(r){r.define(j,false);
r.define(f,false);
r.define(e,0);
r.__d();
}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,j){if(j){if(j.extend&&!(j.extend instanceof Array)){j.extend=[j.extend];
}{};
var k=j.statics?j.statics:{};
if(j.extend){k.$$extends=j.extend;
}
if(j.properties){k.$$properties=j.properties;
}
if(j.members){k.$$members=j.members;
}
if(j.events){k.$$events=j.events;
}}else{var k={};
}k.$$type=c;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
qx.Interface.$$registry[name]=k;
return k;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(P){if(!P){return [];
}var Q=P.concat();

for(var i=0,l=P.length;i<l;i++){if(P[i].$$extends){Q.push.apply(Q,this.flatten(P[i].$$extends));
}}return Q;
},__f:function(G,H,I,J){var N=I.$$members;

if(N){for(var M in N){if(qx.Bootstrap.isFunction(N[M])){var L=this.__g(H,M);
var K=L||qx.Bootstrap.isFunction(G[M]);

if(!K){throw new Error('Implementation of method "'+M+'" is missing in class "'+H.classname+'" required by interface "'+I.name+'"');
}var O=J===true&&!L&&!qx.Bootstrap.hasInterface(H,I);

if(O){G[M]=this.__j(I,G[M],M,N[M]);
}}else{if(typeof G[M]===undefined){if(typeof G[M]!==h){throw new Error('Implementation of member "'+M+'" is missing in class "'+H.classname+'" required by interface "'+I.name+'"');
}}}}}},__g:function(m,n){var r=n.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!r){return false;
}var o=qx.Bootstrap.firstLow(r[2]);
var p=qx.Bootstrap.getPropertyDefinition(m,o);

if(!p){return false;
}var q=r[0]==b||r[0]==d;

if(q){return qx.Bootstrap.getPropertyDefinition(m,o).check==g;
}return true;
},__h:function(s,t){if(t.$$properties){for(var u in t.$$properties){if(!qx.Bootstrap.getPropertyDefinition(s,u)){throw new Error('The property "'+u+'" is not supported by Class "'+s.classname+'"!');
}}}},__i:function(D,E){if(E.$$events){for(var F in E.$$events){if(!qx.Bootstrap.supportsEvent(D,F)){throw new Error('The event "'+F+'" is not supported by Class "'+D.classname+'"!');
}}}},assertObject:function(v,w){var y=v.constructor;
this.__f(v,y,w,false);
this.__h(y,w);
this.__i(y,w);
var x=w.$$extends;

if(x){for(var i=0,l=x.length;i<l;i++){this.assertObject(v,x[i]);
}}},assert:function(z,A,B){this.__f(z.prototype,z,A,B);
this.__h(z,A);
this.__i(z,A);
var C=A.$$extends;

if(C){for(var i=0,l=C.length;i<l;i++){this.assert(z,C[i],B);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__j:function(){},__k:null,__l:function(){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,h){if(h){if(h.include&&!(h.include instanceof Array)){h.include=[h.include];
}{};
var k=h.statics?h.statics:{};
qx.Bootstrap.setDisplayNames(k,name);

for(var j in k){if(k[j] instanceof Function){k[j].$$mixin=k;
}}if(h.construct){k.$$constructor=h.construct;
qx.Bootstrap.setDisplayName(h.construct,name,e);
}
if(h.include){k.$$includes=h.include;
}
if(h.properties){k.$$properties=h.properties;
}
if(h.members){k.$$members=h.members;
qx.Bootstrap.setDisplayNames(h.members,name+f);
}
for(var j in k.$$members){if(k.$$members[j] instanceof Function){k.$$members[j].$$mixin=k;
}}
if(h.events){k.$$events=h.events;
}
if(h.destruct){k.$$destructor=h.destruct;
qx.Bootstrap.setDisplayName(h.destruct,name,b);
}}else{var k={};
}k.$$type=a;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
this.$$registry[name]=k;
return k;
},checkCompatibility:function(m){var p=this.flatten(m);
var q=p.length;

if(q<2){return true;
}var t={};
var s={};
var r={};
var o;

for(var i=0;i<q;i++){o=p[i];

for(var n in o.events){if(r[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+r[n]+'" in member "'+n+'"!');
}r[n]=o.name;
}
for(var n in o.properties){if(t[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+t[n]+'" in property "'+n+'"!');
}t[n]=o.name;
}
for(var n in o.members){if(s[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+s[n]+'" in member "'+n+'"!');
}s[n]=o.name;
}}return true;
},isCompatible:function(w,x){var y=qx.Bootstrap.getMixins(x);
y.push(w);
return qx.Mixin.checkCompatibility(y);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(u){if(!u){return [];
}var v=u.concat();

for(var i=0,l=u.length;i<l;i++){if(u[i].$$includes){v.push.apply(v,this.flatten(u[i].$$includes));
}}return v;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__m:null,__n:function(){}}});
})();
(function(){var bR=';',bQ='return this.',bP="string",bO="boolean",bN="",bM="setThemed",bL='!==undefined)',bK="this.",bJ="set",bI="resetThemed",bx="setRuntime",bw="init",bv='else if(this.',bu="resetRuntime",bt="reset",bs="();",br='else ',bq='if(this.',bp="return this.",bo="get",bY=";",ca="(a[",bW=' of an instance of ',bX="refresh",bU=' is not (yet) ready!");',bV="]);",bS='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bT='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',cb='value !== null && value.nodeType === 9 && value.documentElement',cc='value !== null && value.$$type === "Mixin"',bB='return init;',bA='var init=this.',bD='value !== null && value.nodeType === 1 && value.attributes',bC="var parent = this.getLayoutParent();",bF="Error in property ",bE='qx.core.Assert.assertInstance(value, Date, msg) || true',bH="if (!parent) return;",bG=" in method ",bz='qx.core.Assert.assertInstance(value, Error, msg) || true',by='Undefined value is not allowed!',s="inherit",t='Is invalid!',u="MSIE 6.0",v="': ",w=" of class ",x='value !== null && value.nodeType !== undefined',y='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',z='qx.core.Assert.assertPositiveInteger(value, msg) || true',A='if(init==qx.core.Property.$$inherit)init=null;',B='value !== null && value.$$type === "Interface"',cg='var inherit=prop.$$inherit;',cf="var value = parent.",ce="$$useinit_",cd="(value);",ck='Requires exactly one argument!',cj="$$runtime_",ci="$$user_",ch='qx.core.Assert.assertArray(value, msg) || true',cm='qx.core.Assert.assertPositiveNumber(value, msg) || true',cl=".prototype",X="Boolean",Y='return value;',V='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',W='Does not allow any arguments!',bc="()",bd="var a=arguments[0] instanceof Array?arguments[0]:arguments;",ba='value !== null && value.$$type === "Theme"',bb="())",T='return null;',U='qx.core.Assert.assertObject(value, msg) || true',J='qx.core.Assert.assertString(value, msg) || true',I="if (value===undefined) value = parent.",L='value !== null && value.$$type === "Class"',K='qx.core.Assert.assertFunction(value, msg) || true',F="object",E="$$init_",H="$$theme_",G='qx.core.Assert.assertMap(value, msg) || true',D='qx.core.Assert.assertNumber(value, msg) || true',C='Null value is not allowed!',bi='qx.core.Assert.assertInteger(value, msg) || true',bj="value",bk="rv:1.8.1",bl="shorthand",be='qx.core.Assert.assertInstance(value, RegExp, msg) || true',bf='value !== null && value.type !== undefined',bg='value !== null && value.document',bh='throw new Error("Property ',bm="(!this.",bn='qx.core.Assert.assertBoolean(value, msg) || true',S="toggle",R="$$inherit_",Q=" with incoming value '",P="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",O="qx.core.Property",N="is",M='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(O,{statics:{__o:{"Boolean":bn,"String":J,"Number":D,"Integer":bi,"PositiveNumber":cm,"PositiveInteger":z,"Error":bz,"RegExp":be,"Object":U,"Array":ch,"Map":G,"Function":K,"Date":bE,"Node":x,"Element":bD,"Document":cb,"Window":bg,"Event":bf,"Class":L,"Mixin":cc,"Interface":B,"Theme":ba,"Color":bS,"Decorator":y,"Font":bT},__p:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:s,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bP,dereference:bO,inheritable:bO,nullable:bO,themeable:bO,refine:bO,init:null,apply:bP,event:bP,check:null,transform:bP,deferredInit:bO,validate:null},$$allowedGroupKeys:{name:bP,group:F,mode:bP,themeable:bO},$$inheritable:{},__q:function(dt){var du=this.__r(dt);

if(!du.length){var dv=qx.lang.Function.empty;
}else{dv=this.__s(du);
}dt.prototype.$$refreshInheritables=dv;
},__r:function(dI){var dK=[];

while(dI){var dJ=dI.$$properties;

if(dJ){for(var name in this.$$inheritable){if(dJ[name]&&dJ[name].inheritable){dK.push(name);
}}}dI=dI.superclass;
}return dK;
},__s:function(cC){var cG=this.$$store.inherit;
var cF=this.$$store.init;
var cE=this.$$method.refresh;
var cD=[bC,bH];

for(var i=0,l=cC.length;i<l;i++){var name=cC[i];
cD.push(cf,cG[name],bY,I,cF[name],bY,bK,cE[name],cd);
}return new Function(cD.join(bN));
},attachRefreshInheritables:function(dW){dW.prototype.$$refreshInheritables=function(){qx.core.Property.__q(dW);
return this.$$refreshInheritables();
};
},attachMethods:function(dr,name,ds){ds.group?this.__t(dr,ds,name):this.__u(dr,ds,name);
},__t:function(dL,dM,name){var dT=qx.Bootstrap.firstUp(name);
var dS=dL.prototype;
var dU=dM.themeable===true;
{};
var dV=[];
var dP=[];

if(dU){var dN=[];
var dR=[];
}var dQ=bd;
dV.push(dQ);

if(dU){dN.push(dQ);
}
if(dM.mode==bl){var dO=P;
dV.push(dO);

if(dU){dN.push(dO);
}}
for(var i=0,a=dM.group,l=a.length;i<l;i++){{};
dV.push(bK,this.$$method.set[a[i]],ca,i,bV);
dP.push(bK,this.$$method.reset[a[i]],bs);

if(dU){{};
dN.push(bK,this.$$method.setThemed[a[i]],ca,i,bV);
dR.push(bK,this.$$method.resetThemed[a[i]],bs);
}}this.$$method.set[name]=bJ+dT;
dS[this.$$method.set[name]]=new Function(dV.join(bN));
this.$$method.reset[name]=bt+dT;
dS[this.$$method.reset[name]]=new Function(dP.join(bN));

if(dU){this.$$method.setThemed[name]=bM+dT;
dS[this.$$method.setThemed[name]]=new Function(dN.join(bN));
this.$$method.resetThemed[name]=bI+dT;
dS[this.$$method.resetThemed[name]]=new Function(dR.join(bN));
}},__u:function(cr,cs,name){var cu=qx.Bootstrap.firstUp(name);
var cw=cr.prototype;
{};
if(cs.dereference===undefined&&typeof cs.check===bP){cs.dereference=this.__v(cs.check);
}var cv=this.$$method;
var ct=this.$$store;
ct.runtime[name]=cj+name;
ct.user[name]=ci+name;
ct.theme[name]=H+name;
ct.init[name]=E+name;
ct.inherit[name]=R+name;
ct.useinit[name]=ce+name;
cv.get[name]=bo+cu;
cw[cv.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cr,name,bo);
};
cv.set[name]=bJ+cu;
cw[cv.set[name]]=function(cx){return qx.core.Property.executeOptimizedSetter(this,cr,name,bJ,arguments);
};
cv.reset[name]=bt+cu;
cw[cv.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cr,name,bt);
};

if(cs.inheritable||cs.apply||cs.event||cs.deferredInit){cv.init[name]=bw+cu;
cw[cv.init[name]]=function(cq){return qx.core.Property.executeOptimizedSetter(this,cr,name,bw,arguments);
};
}
if(cs.inheritable){cv.refresh[name]=bX+cu;
cw[cv.refresh[name]]=function(cp){return qx.core.Property.executeOptimizedSetter(this,cr,name,bX,arguments);
};
}cv.setRuntime[name]=bx+cu;
cw[cv.setRuntime[name]]=function(dq){return qx.core.Property.executeOptimizedSetter(this,cr,name,bx,arguments);
};
cv.resetRuntime[name]=bu+cu;
cw[cv.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cr,name,bu);
};

if(cs.themeable){cv.setThemed[name]=bM+cu;
cw[cv.setThemed[name]]=function(dd){return qx.core.Property.executeOptimizedSetter(this,cr,name,bM,arguments);
};
cv.resetThemed[name]=bI+cu;
cw[cv.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cr,name,bI);
};
}
if(cs.check===X){cw[S+cu]=new Function(bp+cv.set[name]+bm+cv.get[name]+bb);
cw[N+cu]=new Function(bp+cv.get[name]+bc);
}},__v:function(dh){return !!this.__p[dh];
},__w:function(dc){return this.__p[dc]||qx.Bootstrap.classIsDefined(dc)||(qx.Interface&&qx.Interface.isDefined(dc));
},__x:{0:M,1:ck,2:by,3:W,4:C,5:t},error:function(dw,dx,dy,dz,dA){var dB=dw.constructor.classname;
var dC=bF+dy+w+dB+bG+this.$$method[dz][dy]+Q+dA+v;
throw new Error(dC+(this.__x[dx]||"Unknown reason: "+dx));
},__y:function(f,g,name,h,j,k){var m=this.$$method[h][name];
{g[m]=new Function(bj,j.join(bN));
};
{};
qx.Bootstrap.setDisplayName(g[m],f.classname+cl,m);
if(k===undefined){return f[m]();
}else{return f[m](k[0]);
}},executeOptimizedGetter:function(di,dj,name,dk){var dm=dj.$$properties[name];
var dp=dj.prototype;
var dl=[];
var dn=this.$$store;
dl.push(bq,dn.runtime[name],bL);
dl.push(bQ,dn.runtime[name],bR);

if(dm.inheritable){dl.push(bv,dn.inherit[name],bL);
dl.push(bQ,dn.inherit[name],bR);
dl.push(br);
}dl.push(bq,dn.user[name],bL);
dl.push(bQ,dn.user[name],bR);

if(dm.themeable){dl.push(bv,dn.theme[name],bL);
dl.push(bQ,dn.theme[name],bR);
}
if(dm.deferredInit&&dm.init===undefined){dl.push(bv,dn.init[name],bL);
dl.push(bQ,dn.init[name],bR);
}dl.push(br);

if(dm.init!==undefined){if(dm.inheritable){dl.push(bA,dn.init[name],bR);

if(dm.nullable){dl.push(A);
}else if(dm.init!==undefined){dl.push(bQ,dn.init[name],bR);
}else{dl.push(V,name,bW,dj.classname,bU);
}dl.push(bB);
}else{dl.push(bQ,dn.init[name],bR);
}}else if(dm.inheritable||dm.nullable){dl.push(T);
}else{dl.push(bh,name,bW,dj.classname,bU);
}return this.__y(di,dp,name,dk,dl);
},executeOptimizedSetter:function(cL,cM,name,cN,cO){var cT=cM.$$properties[name];
var cS=cM.prototype;
var cQ=[];
var cP=cN===bJ||cN===bM||cN===bx||(cN===bw&&cT.init===undefined);
var cR=cT.apply||cT.event||cT.inheritable;
var cU=this.__z(cN,name);
this.__A(cQ,cT,name,cN,cP);

if(cP){this.__B(cQ,cM,cT,name);
}
if(cR){this.__C(cQ,cP,cU,cN);
}
if(cT.inheritable){cQ.push(cg);
}{};

if(!cR){this.__E(cQ,name,cN,cP);
}else{this.__F(cQ,cT,name,cN,cP);
}
if(cT.inheritable){this.__G(cQ,cT,name,cN);
}else if(cR){this.__H(cQ,cT,name,cN);
}
if(cR){this.__I(cQ,cT,name);
if(cT.inheritable&&cS._getChildren){this.__J(cQ,name);
}}if(cP){cQ.push(Y);
}return this.__y(cL,cS,name,cN,cQ,cO);
},__z:function(q,name){if(q===bx||q===bu){var r=this.$$store.runtime[name];
}else if(q===bM||q===bI){r=this.$$store.theme[name];
}else if(q===bw){r=this.$$store.init[name];
}else{r=this.$$store.user[name];
}return r;
},__A:function(b,c,name,d,e){{if(!c.nullable||c.check||c.inheritable){b.push('var prop=qx.core.Property;');
}if(d==="set"){b.push('if(value===undefined)prop.error(this,2,"',name,'","',d,'",value);');
}};
},__B:function(cH,cI,cJ,name){if(cJ.transform){cH.push('value=this.',cJ.transform,'(value);');
}if(cJ.validate){if(typeof cJ.validate==="string"){cH.push('this.',cJ.validate,'(value);');
}else if(cJ.validate instanceof Function){cH.push(cI.classname,'.$$properties.',name);
cH.push('.validate.call(this, value);');
}}},__C:function(dD,dE,dF,dG){var dH=(dG==="reset"||dG==="resetThemed"||dG==="resetRuntime");

if(dE){dD.push('if(this.',dF,'===value)return value;');
}else if(dH){dD.push('if(this.',dF,'===undefined)return;');
}},__D:undefined,__E:function(n,name,o,p){if(o==="setRuntime"){n.push('this.',this.$$store.runtime[name],'=value;');
}else if(o==="resetRuntime"){n.push('if(this.',this.$$store.runtime[name],'!==undefined)');
n.push('delete this.',this.$$store.runtime[name],';');
}else if(o==="set"){n.push('this.',this.$$store.user[name],'=value;');
}else if(o==="reset"){n.push('if(this.',this.$$store.user[name],'!==undefined)');
n.push('delete this.',this.$$store.user[name],';');
}else if(o==="setThemed"){n.push('this.',this.$$store.theme[name],'=value;');
}else if(o==="resetThemed"){n.push('if(this.',this.$$store.theme[name],'!==undefined)');
n.push('delete this.',this.$$store.theme[name],';');
}else if(o==="init"&&p){n.push('this.',this.$$store.init[name],'=value;');
}},__F:function(cy,cz,name,cA,cB){if(cz.inheritable){cy.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{cy.push('var computed, old;');
}cy.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(cA==="setRuntime"){cy.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cA==="resetRuntime"){cy.push('delete this.',this.$$store.runtime[name],';');
cy.push('if(this.',this.$$store.user[name],'!==undefined)');
cy.push('computed=this.',this.$$store.user[name],';');
cy.push('else if(this.',this.$$store.theme[name],'!==undefined)');
cy.push('computed=this.',this.$$store.theme[name],';');
cy.push('else if(this.',this.$$store.init[name],'!==undefined){');
cy.push('computed=this.',this.$$store.init[name],';');
cy.push('this.',this.$$store.useinit[name],'=true;');
cy.push('}');
}else{cy.push('old=computed=this.',this.$$store.runtime[name],';');
if(cA==="set"){cy.push('this.',this.$$store.user[name],'=value;');
}else if(cA==="reset"){cy.push('delete this.',this.$$store.user[name],';');
}else if(cA==="setThemed"){cy.push('this.',this.$$store.theme[name],'=value;');
}else if(cA==="resetThemed"){cy.push('delete this.',this.$$store.theme[name],';');
}else if(cA==="init"&&cB){cy.push('this.',this.$$store.init[name],'=value;');
}}cy.push('}');
cy.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(cA==="set"){if(!cz.inheritable){cy.push('old=this.',this.$$store.user[name],';');
}cy.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cA==="reset"){if(!cz.inheritable){cy.push('old=this.',this.$$store.user[name],';');
}cy.push('delete this.',this.$$store.user[name],';');
cy.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cy.push('computed=this.',this.$$store.runtime[name],';');
cy.push('if(this.',this.$$store.theme[name],'!==undefined)');
cy.push('computed=this.',this.$$store.theme[name],';');
cy.push('else if(this.',this.$$store.init[name],'!==undefined){');
cy.push('computed=this.',this.$$store.init[name],';');
cy.push('this.',this.$$store.useinit[name],'=true;');
cy.push('}');
}else{if(cA==="setRuntime"){cy.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cz.inheritable){cy.push('computed=this.',this.$$store.user[name],';');
}else{cy.push('old=computed=this.',this.$$store.user[name],';');
}if(cA==="setThemed"){cy.push('this.',this.$$store.theme[name],'=value;');
}else if(cA==="resetThemed"){cy.push('delete this.',this.$$store.theme[name],';');
}else if(cA==="init"&&cB){cy.push('this.',this.$$store.init[name],'=value;');
}}cy.push('}');
if(cz.themeable){cy.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!cz.inheritable){cy.push('old=this.',this.$$store.theme[name],';');
}
if(cA==="setRuntime"){cy.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cA==="set"){cy.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cA==="setThemed"){cy.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cA==="resetThemed"){cy.push('delete this.',this.$$store.theme[name],';');
cy.push('if(this.',this.$$store.init[name],'!==undefined){');
cy.push('computed=this.',this.$$store.init[name],';');
cy.push('this.',this.$$store.useinit[name],'=true;');
cy.push('}');
}else if(cA==="init"){if(cB){cy.push('this.',this.$$store.init[name],'=value;');
}cy.push('computed=this.',this.$$store.theme[name],';');
}else if(cA==="refresh"){cy.push('computed=this.',this.$$store.theme[name],';');
}cy.push('}');
}cy.push('else if(this.',this.$$store.useinit[name],'){');

if(!cz.inheritable){cy.push('old=this.',this.$$store.init[name],';');
}
if(cA==="init"){if(cB){cy.push('computed=this.',this.$$store.init[name],'=value;');
}else{cy.push('computed=this.',this.$$store.init[name],';');
}}else if(cA==="set"||cA==="setRuntime"||cA==="setThemed"||cA==="refresh"){cy.push('delete this.',this.$$store.useinit[name],';');

if(cA==="setRuntime"){cy.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cA==="set"){cy.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cA==="setThemed"){cy.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cA==="refresh"){cy.push('computed=this.',this.$$store.init[name],';');
}}cy.push('}');
if(cA==="set"||cA==="setRuntime"||cA==="setThemed"||cA==="init"){cy.push('else{');

if(cA==="setRuntime"){cy.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cA==="set"){cy.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cA==="setThemed"){cy.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cA==="init"){if(cB){cy.push('computed=this.',this.$$store.init[name],'=value;');
}else{cy.push('computed=this.',this.$$store.init[name],';');
}cy.push('this.',this.$$store.useinit[name],'=true;');
}cy.push('}');
}},__G:function(cV,cW,name,cX){cV.push('if(computed===undefined||computed===inherit){');

if(cX==="refresh"){cV.push('computed=value;');
}else{cV.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}cV.push('if((computed===undefined||computed===inherit)&&');
cV.push('this.',this.$$store.init[name],'!==undefined&&');
cV.push('this.',this.$$store.init[name],'!==inherit){');
cV.push('computed=this.',this.$$store.init[name],';');
cV.push('this.',this.$$store.useinit[name],'=true;');
cV.push('}else{');
cV.push('delete this.',this.$$store.useinit[name],';}');
cV.push('}');
cV.push('if(old===computed)return value;');
cV.push('if(computed===inherit){');
cV.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
cV.push('}');
cV.push('else if(computed===undefined)');
cV.push('delete this.',this.$$store.inherit[name],';');
cV.push('else this.',this.$$store.inherit[name],'=computed;');
cV.push('var backup=computed;');
if(cW.init!==undefined&&cX!=="init"){cV.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cV.push('if(old===undefined)old=null;');
}cV.push('if(computed===undefined||computed==inherit)computed=null;');
},__H:function(cY,da,name,db){if(db!=="set"&&db!=="setRuntime"&&db!=="setThemed"){cY.push('if(computed===undefined)computed=null;');
}cY.push('if(old===computed)return value;');
if(da.init!==undefined&&db!=="init"){cY.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cY.push('if(old===undefined)old=null;');
}},__I:function(cn,co,name){if(co.apply){cn.push('this.',co.apply,'(computed, old, "',name,'");');
}if(co.event){cn.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",co.event,"')){","reg.fireEvent(this, '",co.event,"', qx.event.type.Data, [computed, old]",")}");
}},__J:function(cK,name){cK.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
cK.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
cK.push('}');
}},defer:function(de){var dg=navigator.userAgent.indexOf(u)!=-1;
var df=navigator.userAgent.indexOf(bk)!=-1;
if(dg||df){de.__v=de.__w;
}}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==a)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(m,n){if(n==null){n=0;
}else if(n<0){n=Math.max(0,this.length+n);
}
for(var i=n;i<this.length;i++){if(this[i]===m){return i;
}}return -1;
}}[Array.prototype.indexOf?f:g],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(y,z){if(z==null){z=this.length-1;
}else if(z<0){z=Math.max(0,this.length+z);
}
for(var i=z;i>=0;i--){if(this[i]===y){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?f:g],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(v,w){var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){v.call(w||window,x,i,this);
}}}}[Array.prototype.forEach?f:g],arrayFilter:{"native":Array.prototype.filter,"emulated":function(o,p){var q=[];
var l=this.length;

for(var i=0;i<l;i++){var r=this[i];

if(r!==undefined){if(o.call(p||window,r,i,this)){q.push(this[i]);
}}}return q;
}}[Array.prototype.filter?f:g],arrayMap:{"native":Array.prototype.map,"emulated":function(A,B){var C=[];
var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){C[i]=A.call(B||window,D,i,this);
}}return C;
}}[Array.prototype.map?f:g],arraySome:{"native":Array.prototype.some,"emulated":function(h,j){var l=this.length;

for(var i=0;i<l;i++){var k=this[i];

if(k!==undefined){if(h.call(j||window,k,i,this)){return true;
}}}return false;
}}[Array.prototype.some?f:g],arrayEvery:{"native":Array.prototype.every,"emulated":function(s,t){var l=this.length;

for(var i=0;i<l;i++){var u=this[i];

if(u!==undefined){if(!s.call(t||window,u,i,this)){return false;
}}}return true;
}}[Array.prototype.every?f:g],stringQuote:{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,c).replace(/\"/g,b)+e;
}}[String.prototype.quote?f:g]}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var bA="[Class ",bz="]",by="extend",bx="qx.Class",bw=".",bv="static";
qx.Bootstrap.define(bx,{statics:{define:function(name,bc){if(!bc){var bc={};
}if(bc.include&&!(bc.include instanceof Array)){bc.include=[bc.include];
}if(bc.implement&&!(bc.implement instanceof Array)){bc.implement=[bc.implement];
}var bd=false;

if(!bc.hasOwnProperty(by)&&!bc.type){bc.type=bv;
bd=true;
}{};
var be=this.__O(name,bc.type,bc.extend,bc.statics,bc.construct,bc.destruct,bc.include);
if(bc.extend){if(bc.properties){this.__Q(be,bc.properties,true);
}if(bc.members){this.__S(be,bc.members,true,true,false);
}if(bc.events){this.__P(be,bc.events,true);
}if(bc.include){for(var i=0,l=bc.include.length;i<l;i++){this.__W(be,bc.include[i],false);
}}}if(bc.settings){for(var bf in bc.settings){qx.core.Setting.define(bf,bc.settings[bf]);
}}if(bc.variants){for(var bf in bc.variants){qx.core.Variant.define(bf,bc.variants[bf].allowedValues,bc.variants[bf].defaultValue);
}}if(bc.implement){for(var i=0,l=bc.implement.length;i<l;i++){this.__U(be,bc.implement[i]);
}}{};
if(bc.defer){bc.defer.self=be;
bc.defer(be,be.prototype,{add:function(name,bt){var bu={};
bu[name]=bt;
qx.Class.__Q(be,bu,true);
}});
}return be;
},undefine:function(name){delete this.$$registry[name];
var m=name.split(bw);
var o=[window];

for(var i=0;i<m.length;i++){o.push(o[i][m[i]]);
}for(var i=o.length-1;i>=1;i--){var n=o[i];
var parent=o[i-1];

if(qx.Bootstrap.isFunction(n)||qx.Bootstrap.objectGetLength(n)===0){delete parent[m[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(W,X){{};
qx.Class.__W(W,X,false);
},patch:function(bB,bC){{};
qx.Class.__W(bB,bC,true);
},isSubClassOf:function(bg,bh){if(!bg){return false;
}
if(bg==bh){return true;
}
if(bg.prototype instanceof bh){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(bT){var bU=[];

while(bT){if(bT.$$properties){bU.push.apply(bU,qx.Bootstrap.getKeys(bT.$$properties));
}bT=bT.superclass;
}return bU;
},getByProperty:function(p,name){while(p){if(p.$$properties&&p.$$properties[name]){return p;
}p=p.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(j,k){return j.$$includes&&j.$$includes.indexOf(k)!==-1;
},getByMixin:function(T,U){var V,i,l;

while(T){if(T.$$includes){V=T.$$flatIncludes;

for(i=0,l=V.length;i<l;i++){if(V[i]===U){return T;
}}}T=T.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(b,c){return !!this.getByMixin(b,c);
},hasOwnInterface:function(bk,bl){return bk.$$implements&&bk.$$implements.indexOf(bl)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bi){var bj=[];

while(bi){if(bi.$$implements){bj.push.apply(bj,bi.$$flatImplements);
}bi=bi.superclass;
}return bj;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bQ,bR){var bS=bQ.constructor;

if(this.hasInterface(bS,bR)){return true;
}
try{qx.Interface.assertObject(bQ,bR);
return true;
}catch(d){}
try{qx.Interface.assert(bS,bR,false);
return true;
}catch(bD){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bA+this.classname+bz;
},$$registry:qx.Bootstrap.$$registry,__K:null,__L:null,__M:function(){},__N:function(){},__O:function(name,J,K,L,M,N,O){var R;

if(!K&&true){R=L||{};
qx.Bootstrap.setDisplayNames(R,name);
}else{var R={};

if(K){if(!M){M=this.__X();
}
if(this.__ba(K,O)){R=this.__bb(M,name,J);
}else{R=M;
}if(J==="singleton"){R.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(M,name,"constructor");
}if(L){qx.Bootstrap.setDisplayNames(L,name);
var S;

for(var i=0,a=qx.Bootstrap.getKeys(L),l=a.length;i<l;i++){S=a[i];
var P=L[S];
{R[S]=P;
};
}}}var Q=qx.Bootstrap.createNamespace(name,R);
R.name=R.classname=name;
R.basename=Q;
R.$$type="Class";

if(J){R.$$classtype=J;
}if(!R.hasOwnProperty("toString")){R.toString=this.genericToString;
}
if(K){qx.Bootstrap.extendClass(R,M,K,name,Q);
if(N){{};
R.$$destructor=N;
qx.Bootstrap.setDisplayName(N,name,"destruct");
}}this.$$registry[name]=R;
return R;
},__P:function(bm,bn,bo){var bp,bp;
{};

if(bm.$$events){for(var bp in bn){bm.$$events[bp]=bn[bp];
}}else{bm.$$events=bn;
}},__Q:function(q,r,s){var t;

if(s===undefined){s=false;
}var u=q.prototype;

for(var name in r){t=r[name];
{};
t.name=name;
if(!t.refine){if(q.$$properties===undefined){q.$$properties={};
}q.$$properties[name]=t;
}if(t.init!==undefined){q.prototype["$$init_"+name]=t.init;
}if(t.event!==undefined){var event={};
event[t.event]="qx.event.type.Data";
this.__P(q,event,s);
}if(t.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!u.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(q);
}}
if(!t.refine){qx.core.Property.attachMethods(q,name,t);
}}},__R:null,__S:function(A,B,C,D,E){var F=A.prototype;
var H,G;
qx.Bootstrap.setDisplayNames(B,A.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(B),l=a.length;i<l;i++){H=a[i];
G=B[H];
{};
if(D!==false&&G instanceof Function&&G.$$type==null){if(E==true){G=this.__T(G,F[H]);
}else{if(F[H]){G.base=F[H];
}G.self=A;
}{};
}F[H]=G;
}},__T:function(v,w){if(w){return function(){var bF=v.base;
v.base=w;
var bE=v.apply(this,arguments);
v.base=bF;
return bE;
};
}else{return v;
}},__U:function(Y,ba){{};
var bb=qx.Interface.flatten([ba]);

if(Y.$$implements){Y.$$implements.push(ba);
Y.$$flatImplements.push.apply(Y.$$flatImplements,bb);
}else{Y.$$implements=[ba];
Y.$$flatImplements=bb;
}},__V:function(bK){var name=bK.classname;
var bL=this.__bb(bK,name,bK.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bK),l=a.length;i<l;i++){bM=a[i];
bL[bM]=bK[bM];
}bL.prototype=bK.prototype;
var bO=bK.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bO),l=a.length;i<l;i++){bM=a[i];
var bP=bO[bM];
if(bP&&bP.self==bK){bP.self=bL;
}}for(var bM in this.$$registry){var bN=this.$$registry[bM];

if(!bN){continue;
}
if(bN.base==bK){bN.base=bL;
}
if(bN.superclass==bK){bN.superclass=bL;
}
if(bN.$$original){if(bN.$$original.base==bK){bN.$$original.base=bL;
}
if(bN.$$original.superclass==bK){bN.$$original.superclass=bL;
}}}qx.Bootstrap.createNamespace(name,bL);
this.$$registry[name]=bL;
return bL;
},__W:function(bV,bW,bX){{};

if(this.hasMixin(bV,bW)){return;
}var cb=bV.$$original;

if(bW.$$constructor&&!cb){bV=this.__V(bV);
}var ca=qx.Mixin.flatten([bW]);
var bY;

for(var i=0,l=ca.length;i<l;i++){bY=ca[i];
if(bY.$$events){this.__P(bV,bY.$$events,bX);
}if(bY.$$properties){this.__Q(bV,bY.$$properties,bX);
}if(bY.$$members){this.__S(bV,bY.$$members,bX,bX,bX);
}}if(bV.$$includes){bV.$$includes.push(bW);
bV.$$flatIncludes.push.apply(bV.$$flatIncludes,ca);
}else{bV.$$includes=[bW];
bV.$$flatIncludes=ca;
}},__X:function(){function I(){I.base.apply(this,arguments);
}return I;
},__Y:function(){return function(){};
},__ba:function(bG,bH){{};
if(bG&&bG.$$includes){var bI=bG.$$flatIncludes;

for(var i=0,l=bI.length;i<l;i++){if(bI[i].$$constructor){return true;
}}}if(bH){var bJ=qx.Mixin.flatten(bH);

for(var i=0,l=bJ.length;i<l;i++){if(bJ[i].$$constructor){return true;
}}}return false;
},__bb:function(e,name,f){var g;
var h=function(){var z=h;
{};
var y=z.$$original.apply(this,arguments);
if(z.$$includes){var x=z.$$flatIncludes;

for(var i=0,l=x.length;i<l;i++){if(x[i].$$constructor){x[i].$$constructor.apply(this,arguments);
}}}{};
return y;
};
{};
h.$$original=e;
e.wrapper=h;
return h;
}},defer:function(){var bq,br,bs;
{};
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__bc:function(){var u=d;
var y=e;
var x=window.navigator.userAgent;
var A=false;
var w=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){u=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(x)){y=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){y+=q+RegExp.$3;
}}else{w=true;
y=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){u=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(x)){y=RegExp.$1;
var z=RegExp(n).exec(y);

if(z){y=y.slice(0,z.index);
}}else{w=true;
y=m;
}}else if(window.controllers&&window.navigator.product===c){u=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(x)){y=RegExp.$1;
}else{w=true;
y=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(x)){u=k;
y=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(y<8&&/Trident\/([^\);]+)(\)|;)/.test(x)){if(RegExp.$1===g){y=h;
}}this.MSHTML=true;
}else{var v=window.qxFail;

if(v&&typeof v===o){var u=v();

if(u.NAME&&u.FULLVERSION){u=u.NAME;
this[u.toUpperCase()]=true;
y=u.FULLVERSION;
}}else{A=true;
w=true;
y=r;
u=s;
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(t){t.__bc();
}});
})();
(function(){var x="off",w="on",u="|",t="default",s="object",r="&",q="qx.aspects",p="qx.mobile",o="$",n="qx.allowUrlVariants",e="qx.debug",m="qx.client",h="qx.dynlocale",d="webkit",c="qxvariant",g="opera",f=":",j="qx.core.Variant",b="mshtml",k="gecko";
qx.Bootstrap.define(j,{statics:{__bd:{},__be:{},compilerIsSet:function(){return true;
},define:function(K,L,M){{};

if(!this.__bd[K]){this.__bd[K]={};
}else{}this.__bd[K].allowedValues=L;
this.__bd[K].defaultValue=M;
},get:function(y){var z=this.__bd[y];
{};

if(z.value!==undefined){return z.value;
}return z.defaultValue;
},__bf:function(){if(window.qxvariants){for(var A in qxvariants){{};

if(!this.__bd[A]){this.__bd[A]={};
}this.__bd[A].value=qxvariants[A];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(J){}this.__bg(this.__bd);
}},__bg:function(){if(qx.core.Setting.get(n)!=true){return;
}var G=document.location.search.slice(1).split(r);

for(var i=0;i<G.length;i++){var H=G[i].split(f);

if(H.length!=3||H[0]!=c){continue;
}var I=H[1];

if(!this.__bd[I]){this.__bd[I]={};
}this.__bd[I].value=decodeURIComponent(H[2]);
}},select:function(B,C){{};

for(var D in C){if(this.isSet(B,D)){return C[D];
}}
if(C[t]!==undefined){return C[t];
}{};
},isSet:function(N,O){var P=N+o+O;

if(this.__be[P]!==undefined){return this.__be[P];
}var R=false;
if(O.indexOf(u)<0){R=this.get(N)===O;
}else{var Q=O.split(u);

for(var i=0,l=Q.length;i<l;i++){if(this.get(N)===Q[i]){R=true;
break;
}}}this.__be[P]=R;
return R;
},__bh:function(v){return typeof v===s&&v!==null&&v instanceof Array;
},__bi:function(v){return typeof v===s&&v!==null&&!(v instanceof Array);
},__bj:function(E,F){for(var i=0,l=E.length;i<l;i++){if(E[i]==F){return true;
}}return false;
}},defer:function(a){a.define(m,[k,b,g,d],qx.bom.client.Engine.NAME);
a.define(e,[w,x],w);
a.define(q,[w,x],x);
a.define(h,[w,x],w);
a.define(p,[w,x],x);
a.__bf();
}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(C,D,E){C.attachEvent(h+D,E);
},"default":function(n,o,p){n.addEventListener(o,p,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(s,t,u){try{s.detachEvent(h+t,u);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(j,k,l){j.removeEventListener(k,l,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(i,{"mshtml":function(e){if(e.type===b){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(i,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(m){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(F){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(v,w){if(document.createEventObject){var x=document.createEventObject();
return v.fireEvent(h+w,x);
}else{var x=document.createEvent(a);
x.initEvent(w,true,true);
return !v.dispatchEvent(x);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(q,r){return q.hasOwnProperty(h+r);
},"default":function(y,z){var A=h+z;
var B=(A in y);

if(!B){B=typeof y[A]==g;

if(!B&&y.setAttribute){y.setAttribute(A,c);
B=typeof y[A]==g;
y.removeAttribute(A);
}}return B;
}})}});
})();
(function(){var G="|bubble",F="|capture",E="|",D="",C="_",B="unload",A="UNKNOWN_",z="c",y="DOM_",x="__bp",t="WIN_",w="__bo",v="QX_",s="qx.event.Manager",r="capture",u="DOCUMENT_";
qx.Class.define(s,{extend:Object,construct:function(ci,cj){this.__bk=ci;
this.__bl=qx.core.ObjectRegistry.toHashCode(ci);
this.__bm=cj;
if(ci.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(ci,B,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(ci,B,arguments.callee);
self.dispose();
}));
}this.__bn={};
this.__bo={};
this.__bp={};
this.__bq={};
},statics:{__br:0,getNextUniqueId:function(){return (this.__br++)+D;
}},members:{__bm:null,__bn:null,__bp:null,__bs:null,__bo:null,__bq:null,__bk:null,__bl:null,getWindow:function(){return this.__bk;
},getWindowId:function(){return this.__bl;
},getHandler:function(bu){var bv=this.__bo[bu.classname];

if(bv){return bv;
}return this.__bo[bu.classname]=new bu(this);
},getDispatcher:function(ba){var bb=this.__bp[ba.classname];

if(bb){return bb;
}return this.__bp[ba.classname]=new ba(this,this.__bm);
},getListeners:function(bn,bo,bp){var bq=bn.$$hash||qx.core.ObjectRegistry.toHashCode(bn);
var bs=this.__bn[bq];

if(!bs){return null;
}var bt=bo+(bp?F:G);
var br=bs[bt];
return br?br.concat():null;
},serializeListeners:function(bI){var bP=bI.$$hash||qx.core.ObjectRegistry.toHashCode(bI);
var bR=this.__bn[bP];
var bN=[];

if(bR){var bL,bQ,bJ,bM,bO;

for(var bK in bR){bL=bK.indexOf(E);
bQ=bK.substring(0,bL);
bJ=bK.charAt(bL+1)==z;
bM=bR[bK];

for(var i=0,l=bM.length;i<l;i++){bO=bM[i];
bN.push({self:bO.context,handler:bO.handler,type:bQ,capture:bJ});
}}}return bN;
},toggleAttachedEvents:function(ck,cl){var cq=ck.$$hash||qx.core.ObjectRegistry.toHashCode(ck);
var cs=this.__bn[cq];

if(cs){var cn,cr,cm,co;

for(var cp in cs){cn=cp.indexOf(E);
cr=cp.substring(0,cn);
cm=cp.charCodeAt(cn+1)===99;
co=cs[cp];

if(cl){this.__bt(ck,cr,cm);
}else{this.__bu(ck,cr,cm);
}}}},hasListener:function(j,k,m){{};
var n=j.$$hash||qx.core.ObjectRegistry.toHashCode(j);
var p=this.__bn[n];

if(!p){return false;
}var q=k+(m?F:G);
var o=p[q];
return o&&o.length>0;
},importListeners:function(cA,cB){{};
var cH=cA.$$hash||qx.core.ObjectRegistry.toHashCode(cA);
var cI=this.__bn[cH]={};
var cE=qx.event.Manager;

for(var cC in cB){var cF=cB[cC];
var cG=cF.type+(cF.capture?F:G);
var cD=cI[cG];

if(!cD){cD=cI[cG]=[];
this.__bt(cA,cF.type,cF.capture);
}cD.push({handler:cF.listener,context:cF.self,unique:cF.unique||(cE.__br++)+D});
}},addListener:function(bc,bd,be,self,bf){var bj;
{};
var bk=bc.$$hash||qx.core.ObjectRegistry.toHashCode(bc);
var bm=this.__bn[bk];

if(!bm){bm=this.__bn[bk]={};
}var bi=bd+(bf?F:G);
var bh=bm[bi];

if(!bh){bh=bm[bi]=[];
}if(bh.length===0){this.__bt(bc,bd,bf);
}var bl=(qx.event.Manager.__br++)+D;
var bg={handler:be,context:self,unique:bl};
bh.push(bg);
return bi+E+bl;
},findHandler:function(bS,bT){var cg=false,bX=false,ch=false,bU=false;
var ce;

if(bS.nodeType===1){cg=true;
ce=y+bS.tagName.toLowerCase()+C+bT;
}else if(bS.nodeType===9){bU=true;
ce=u+bT;
}else if(bS==this.__bk){bX=true;
ce=t+bT;
}else if(bS.classname){ch=true;
ce=v+bS.classname+C+bT;
}else{ce=A+bS+C+bT;
}var ca=this.__bq;

if(ca[ce]){return ca[ce];
}var cd=this.__bm.getHandlers();
var bY=qx.event.IEventHandler;
var cb,cc,bW,bV;

for(var i=0,l=cd.length;i<l;i++){cb=cd[i];
bW=cb.SUPPORTED_TYPES;

if(bW&&!bW[bT]){continue;
}bV=cb.TARGET_CHECK;

if(bV){var cf=false;

if(cg&&((bV&bY.TARGET_DOMNODE)!=0)){cf=true;
}else if(bX&&((bV&bY.TARGET_WINDOW)!=0)){cf=true;
}else if(ch&&((bV&bY.TARGET_OBJECT)!=0)){cf=true;
}else if(bU&&((bV&bY.TARGET_DOCUMENT)!=0)){cf=true;
}
if(!cf){continue;
}}cc=this.getHandler(cd[i]);

if(cb.IGNORE_CAN_HANDLE||cc.canHandleEvent(bS,bT)){ca[ce]=cc;
return cc;
}}return null;
},__bt:function(V,W,X){var Y=this.findHandler(V,W);

if(Y){Y.registerEvent(V,W,X);
return;
}{};
},removeListener:function(L,M,N,self,O){var S;
{};
var T=L.$$hash||qx.core.ObjectRegistry.toHashCode(L);
var U=this.__bn[T];

if(!U){return false;
}var P=M+(O?F:G);
var Q=U[P];

if(!Q){return false;
}var R;

for(var i=0,l=Q.length;i<l;i++){R=Q[i];

if(R.handler===N&&R.context===self){qx.lang.Array.removeAt(Q,i);

if(Q.length==0){this.__bu(L,M,O);
}return true;
}}return false;
},removeListenerById:function(bw,bx){var bD;
{};
var bB=bx.split(E);
var bG=bB[0];
var by=bB[1].charCodeAt(0)==99;
var bF=bB[2];
var bE=bw.$$hash||qx.core.ObjectRegistry.toHashCode(bw);
var bH=this.__bn[bE];

if(!bH){return false;
}var bC=bG+(by?F:G);
var bA=bH[bC];

if(!bA){return false;
}var bz;

for(var i=0,l=bA.length;i<l;i++){bz=bA[i];

if(bz.unique===bF){qx.lang.Array.removeAt(bA,i);

if(bA.length==0){this.__bu(bw,bG,by);
}return true;
}}return false;
},removeAllListeners:function(ct){var cx=ct.$$hash||qx.core.ObjectRegistry.toHashCode(ct);
var cz=this.__bn[cx];

if(!cz){return false;
}var cv,cy,cu;

for(var cw in cz){if(cz[cw].length>0){cv=cw.split(E);
cy=cv[0];
cu=cv[1]===r;
this.__bu(ct,cy,cu);
}}delete this.__bn[cx];
return true;
},deleteAllListeners:function(a){delete this.__bn[a];
},__bu:function(H,I,J){var K=this.findHandler(H,I);

if(K){K.unregisterEvent(H,I,J);
return;
}{};
},dispatchEvent:function(b,event){var g;
{};
var h=event.getType();

if(!event.getBubbles()&&!this.hasListener(b,h)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(b);
}var f=this.__bm.getDispatchers();
var e;
var d=false;

for(var i=0,l=f.length;i<l;i++){e=this.getDispatcher(f[i]);
if(e.canDispatchEvent(b,event,h)){e.dispatchEvent(b,event,h);
d=true;
break;
}}
if(!d){{};
return true;
}var c=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !c;
},dispose:function(){this.__bm.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,w);
qx.util.DisposeUtil.disposeMap(this,x);
this.__bn=this.__bk=this.__bs=null;
this.__bm=this.__bq=null;
}}});
})();
(function(){var d="qx.dom.Node",c="qx.client",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(n){return n.nodeType===
this.DOCUMENT?n:
n.ownerDocument||n.document;
},getWindow:qx.core.Variant.select(c,{"mshtml":function(t){if(t.nodeType==null){return t;
}if(t.nodeType!==this.DOCUMENT){t=t.ownerDocument;
}return t.parentWindow;
},"default":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.defaultView;
}}),getDocumentElement:function(k){return this.getDocument(k).documentElement;
},getBodyElement:function(m){return this.getDocument(m).body;
},isNode:function(j){return !!(j&&j.nodeType!=null);
},isElement:function(f){return !!(f&&f.nodeType===this.ELEMENT);
},isDocument:function(s){return !!(s&&s.nodeType===this.DOCUMENT);
},isText:function(l){return !!(l&&l.nodeType===this.TEXT);
},isWindow:function(e){return !!(e&&e.history&&e.location&&e.document);
},isNodeName:function(o,p){if(!p||!o||!o.nodeName){return false;
}return p.toLowerCase()==qx.dom.Node.getName(o);
},getName:function(h){if(!h||!h.nodeName){return null;
}return h.nodeName.toLowerCase();
},getText:function(q){if(!q||!q.nodeType){return null;
}
switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;

for(i=0;i<length;i++){a[i]=this.getText(r[i]);
}return a.join(b);
case 2:return q.nodeValue;
break;
case 3:return q.nodeValue;
break;
}return null;
}}});
})();
(function(){var be="mshtml",bd="qx.client",bc="[object Array]",bb="qx.lang.Array",ba="qx",Y="number",X="string";
qx.Class.define(bb,{statics:{toArray:function(c,d){return this.cast(c,Array,d);
},cast:function(u,v,w){if(u.constructor===v){return u;
}
if(qx.Class.hasInterface(u,qx.data.IListData)){var u=u.toArray();
}var x=new v;
if(qx.core.Variant.isSet(bd,be)){if(u.item){for(var i=w||0,l=u.length;i<l;i++){x.push(u[i]);
}return x;
}}if(Object.prototype.toString.call(u)===bc&&w==null){x.push.apply(x,u);
}else{x.push.apply(x,Array.prototype.slice.call(u,w||0));
}return x;
},fromArguments:function(a,b){return Array.prototype.slice.call(a,b||0);
},fromCollection:function(g){if(qx.core.Variant.isSet(bd,be)){if(g.item){var h=[];

for(var i=0,l=g.length;i<l;i++){h[i]=g[i];
}return h;
}}return Array.prototype.slice.call(g,0);
},fromShortHand:function(B){var D=B.length;
var C=qx.lang.Array.clone(B);
switch(D){case 1:C[1]=C[2]=C[3]=C[0];
break;
case 2:C[2]=C[0];
case 3:C[3]=C[1];
}return C;
},clone:function(bf){return bf.concat();
},insertAt:function(bl,bm,i){bl.splice(i,0,bm);
return bl;
},insertBefore:function(p,q,r){var i=p.indexOf(r);

if(i==-1){p.push(q);
}else{p.splice(i,0,q);
}return p;
},insertAfter:function(G,H,I){var i=G.indexOf(I);

if(i==-1||i==(G.length-1)){G.push(H);
}else{G.splice(i+1,0,H);
}return G;
},removeAt:function(bh,i){return bh.splice(i,1)[0];
},removeAll:function(m){m.length=0;
return this;
},append:function(E,F){{};
Array.prototype.push.apply(E,F);
return E;
},exclude:function(bn,bo){{};

for(var i=0,bq=bo.length,bp;i<bq;i++){bp=bn.indexOf(bo[i]);

if(bp!=-1){bn.splice(bp,1);
}}return bn;
},remove:function(j,k){var i=j.indexOf(k);

if(i!=-1){j.splice(i,1);
return k;
}},contains:function(e,f){return e.indexOf(f)!==-1;
},equals:function(n,o){var length=n.length;

if(length!==o.length){return false;
}
for(var i=0;i<length;i++){if(n[i]!==o[i]){return false;
}}return true;
},sum:function(s){var t=0;

for(var i=0,l=s.length;i<l;i++){t+=s[i];
}return t;
},max:function(bi){{};
var i,bk=bi.length,bj=bi[0];

for(i=1;i<bk;i++){if(bi[i]>bj){bj=bi[i];
}}return bj===undefined?null:bj;
},min:function(y){{};
var i,A=y.length,z=y[0];

for(i=1;i<A;i++){if(y[i]<z){z=y[i];
}}return z===undefined?null:z;
},unique:function(J){var T=[],L={},O={},Q={};
var P,K=0;
var U=ba+qx.lang.Date.now();
var M=false,S=false,V=false;
for(var i=0,R=J.length;i<R;i++){P=J[i];
if(P===null){if(!M){M=true;
T.push(P);
}}else if(P===undefined){}else if(P===false){if(!S){S=true;
T.push(P);
}}else if(P===true){if(!V){V=true;
T.push(P);
}}else if(typeof P===X){if(!L[P]){L[P]=1;
T.push(P);
}}else if(typeof P===Y){if(!O[P]){O[P]=1;
T.push(P);
}}else{N=P[U];

if(N==null){N=P[U]=K++;
}
if(!Q[N]){Q[N]=P;
T.push(P);
}}}for(var N in Q){try{delete Q[N][U];
}catch(W){try{Q[N][U]=null;
}catch(bg){throw new Error("Cannot clean-up map entry doneObjects["+N+"]["+U+"]");
}}}return T;
}}});
})();
(function(){var k="()",j=".",i=".prototype.",h='anonymous()',g="qx.lang.Function",f=".constructor()";
qx.Class.define(g,{statics:{getCaller:function(m){return m.caller?m.caller.callee:m.callee.caller;
},getName:function(n){if(n.displayName){return n.displayName;
}
if(n.$$original||n.wrapper||n.classname){return n.classname+f;
}
if(n.$$mixin){for(var p in n.$$mixin.$$members){if(n.$$mixin.$$members[p]==n){return n.$$mixin.name+i+p+k;
}}for(var p in n.$$mixin){if(n.$$mixin[p]==n){return n.$$mixin.name+j+p+k;
}}}
if(n.self){var q=n.self.constructor;

if(q){for(var p in q.prototype){if(q.prototype[p]==n){return q.classname+i+p+k;
}}for(var p in q){if(q[p]==n){return q.classname+j+p+k;
}}}}var o=n.toString().match(/function\s*(\w*)\s*\(.*/);

if(o&&o.length>=1&&o[1]){return o[1]+k;
}return h;
},globalEval:function(l){if(window.execScript){return window.execScript(l);
}else{return eval.call(window,l);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(x,y){{};
if(!y){return x;
}if(!(y.self||y.args||y.delay!=null||y.periodical!=null||y.attempt)){return x;
}return function(event){{};
var B=qx.lang.Array.fromArguments(arguments);
if(y.args){B=y.args.concat(B);
}
if(y.delay||y.periodical){var A=qx.event.GlobalError.observeMethod(function(){return x.apply(y.self||this,B);
});

if(y.delay){return window.setTimeout(A,y.delay);
}
if(y.periodical){return window.setInterval(A,y.periodical);
}}else if(y.attempt){var C=false;

try{C=x.apply(y.self||this,B);
}catch(r){}return C;
}else{return x.apply(y.self||this,B);
}};
},bind:function(a,self,b){return this.create(a,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(D,E){return this.create(D,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(F,self,G){if(arguments.length<3){return function(event){return F.call(self||this,event||window.event);
};
}else{var H=qx.lang.Array.fromArguments(arguments,2);
return function(event){var z=[event||window.event];
z.push.apply(z,H);
F.apply(self||this,z);
};
}},attempt:function(v,self,w){return this.create(v,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(s,t,self,u){return this.create(s,{delay:t,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(c,d,self,e){return this.create(c,{periodical:d,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var i="qx.event.Registration";
qx.Class.define(i,{statics:{__bv:{},getManager:function(B){if(B==null){{};
B=window;
}else if(B.nodeType){B=qx.dom.Node.getWindow(B);
}else if(!qx.dom.Node.isWindow(B)){B=window;
}var D=B.$$hash||qx.core.ObjectRegistry.toHashCode(B);
var C=this.__bv[D];

if(!C){C=new qx.event.Manager(B,this);
this.__bv[D]=C;
}return C;
},removeManager:function(P){var Q=P.getWindowId();
delete this.__bv[Q];
},addListener:function(F,G,H,self,I){return this.getManager(F).addListener(F,G,H,self,I);
},removeListener:function(J,K,L,self,M){return this.getManager(J).removeListener(J,K,L,self,M);
},removeListenerById:function(R,S){return this.getManager(R).removeListenerById(R,S);
},removeAllListeners:function(A){return this.getManager(A).removeAllListeners(A);
},deleteAllListeners:function(N){var O=N.$$hash;

if(O){this.getManager(N).deleteAllListeners(O);
}},hasListener:function(q,r,s){return this.getManager(q).hasListener(q,r,s);
},serializeListeners:function(E){return this.getManager(E).serializeListeners(E);
},createEvent:function(w,x,y){{};
if(x==null){x=qx.event.type.Event;
}var z=qx.event.Pool.getInstance().getObject(x);
y?z.init.apply(z,y):z.init();
if(w){z.setType(w);
}return z;
},dispatchEvent:function(v,event){return this.getManager(v).dispatchEvent(v,event);
},fireEvent:function(j,k,l,m){var n;
{};
var o=this.createEvent(k,l||null,m);
return this.getManager(j).dispatchEvent(j,o);
},fireNonBubblingEvent:function(c,d,e,f){{};
var g=this.getManager(c);

if(!g.hasListener(c,d,false)){return true;
}var h=this.createEvent(d,e||null,f);
return g.dispatchEvent(c,h);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bw:[],addHandler:function(p){{};
this.__bw.push(p);
this.__bw.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bw;
},__bx:[],addDispatcher:function(t,u){{};
this.__bx.push(t);
this.__bx.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bx;
}}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__by:{},__bz:0,__bA:[],register:function(t){var w=this.__by;

if(!w){return;
}var v=t.$$hash;

if(v==null){var u=this.__bA;

if(u.length>0){v=u.pop();
}else{v=(this.__bz++)+d;
}t.$$hash=v;
}{};
w[v]=t;
},unregister:function(y){var z=y.$$hash;

if(z==null){return;
}var A=this.__by;

if(A&&A[z]){delete A[z];
this.__bA.push(z);
}try{delete y.$$hash;
}catch(s){if(y.removeAttribute){y.removeAttribute(e);
}}},toHashCode:function(g){{};
var j=g.$$hash;

if(j!=null){return j;
}var h=this.__bA;

if(h.length>0){j=h.pop();
}else{j=(this.__bz++)+d;
}return g.$$hash=j;
},clearHashCode:function(q){{};
var r=q.$$hash;

if(r!=null){this.__bA.push(r);
try{delete q.$$hash;
}catch(x){if(q.removeAttribute){q.removeAttribute(e);
}}}},fromHashCode:function(p){return this.__by[p]||null;
},shutdown:function(){this.inShutDown=true;
var m=this.__by;
var o=[];

for(var n in m){o.push(n);
}o.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var k,i=0,l=o.length;

while(true){try{for(;i<l;i++){n=o[i];
k=m[n];

if(k&&k.dispose){k.dispose();
}}}catch(f){qx.Bootstrap.error(this,"Could not dispose object "+k.toString()+": "+f);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__by;
},getRegistry:function(){return this.__by;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var j=":",h="qx.client",g="anonymous",f="...",e="qx.dev.StackTrace",d="",c="\n",b="/source/class/",a=".";
qx.Class.define(e,{statics:{getStackTrace:qx.core.Variant.select(h,{"gecko":function(){try{throw new Error();
}catch(N){var r=this.getStackTraceFromError(N);
qx.lang.Array.removeAt(r,0);
var p=this.getStackTraceFromCaller(arguments);
var n=p.length>r.length?p:r;

for(var i=0;i<Math.min(p.length,r.length);i++){var o=p[i];

if(o.indexOf(g)>=0){continue;
}var v=o.split(j);

if(v.length!=2){continue;
}var t=v[0];
var m=v[1];
var l=r[i];
var w=l.split(j);
var s=w[0];
var k=w[1];

if(qx.Class.getByName(s)){var q=s;
}else{q=t;
}var u=q+j;

if(m){u+=m+j;
}u+=k;
n[i]=u;
}return n;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var C;

try{C.bar();
}catch(B){var D=this.getStackTraceFromError(B);
qx.lang.Array.removeAt(D,0);
return D;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(h,{"opera":function(M){return [];
},"default":function(P){var U=[];
var T=qx.lang.Function.getCaller(P);
var Q={};

while(T){var R=qx.lang.Function.getName(T);
U.push(R);

try{T=T.caller;
}catch(O){break;
}
if(!T){break;
}var S=qx.core.ObjectRegistry.toHashCode(T);

if(Q[S]){U.push(f);
break;
}Q[S]=T;
}return U;
}}),getStackTraceFromError:qx.core.Variant.select(h,{"gecko":function(V){if(!V.stack){return [];
}var bc=/@(.+):(\d+)$/gm;
var W;
var X=[];

while((W=bc.exec(V.stack))!=null){var Y=W[1];
var bb=W[2];
var ba=this.__bB(Y);
X.push(ba+j+bb);
}return X;
},"webkit":function(E){if(E.sourceURL&&E.line){return [this.__bB(E.sourceURL)+j+E.line];
}else{return [];
}},"opera":function(F){if(F.message.indexOf("Backtrace:")<0){return [];
}var H=[];
var I=qx.lang.String.trim(F.message.split("Backtrace:")[1]);
var J=I.split(c);

for(var i=0;i<J.length;i++){var G=J[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(G&&G.length>=2){var L=G[1];
var K=this.__bB(G[2]);
H.push(K+j+L);
}}return H;
},"default":function(){return [];
}}),__bB:function(x){var A=b;
var y=x.indexOf(A);
var z=(y==-1)?x:x.substring(y+A.length).replace(/\//g,a).replace(/\.js$/,d);
return z;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(h){this.setMaxEntries(h||50);
},members:{__bC:0,__bD:0,__bE:false,__bF:0,__bG:null,__bH:null,setMaxEntries:function(i){this.__bH=i;
this.clear();
},getMaxEntries:function(){return this.__bH;
},addEntry:function(f){this.__bG[this.__bC]=f;
this.__bC=this.__bI(this.__bC,1);
var g=this.getMaxEntries();

if(this.__bD<g){this.__bD++;
}if(this.__bE&&(this.__bF<g)){this.__bF++;
}},mark:function(){this.__bE=true;
this.__bF=0;
},clearMark:function(){this.__bE=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(j,k){if(j>this.__bD){j=this.__bD;
}if(k&&this.__bE&&(j>this.__bF)){j=this.__bF;
}
if(j>0){var m=this.__bI(this.__bC,-1);
var l=this.__bI(m,-j+1);
var n;

if(l<=m){n=this.__bG.slice(l,m+1);
}else{n=this.__bG.slice(l,this.__bD).concat(this.__bG.slice(0,m+1));
}}else{n=[];
}return n;
},clear:function(){this.__bG=new Array(this.getMaxEntries());
this.__bD=0;
this.__bF=0;
this.__bC=0;
},__bI:function(b,c){var d=this.getMaxEntries();
var e=(b+c)%d;
if(e<0){e+=d;
}return e;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(c){this.setMaxMessages(c||50);
},members:{setMaxMessages:function(b){this.setMaxEntries(b);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(f){this.addEntry(f);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(d,e){return this.getEntries(d,e);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",G="number",F="stringify",E="]",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",x="qx.log.Logger",s=")}",t="#",q="warn",r="document",o="{...(",p="[",m="text[",n="[...(",u="\n",v=")]",w="object";
qx.Class.define(x,{statics:{__bJ:A,setLevel:function(bL){this.__bJ=bL;
},getLevel:function(){return this.__bJ;
},setTreshold:function(W){this.__bM.setMaxMessages(W);
},getTreshold:function(){return this.__bM.getMaxMessages();
},__bK:{},__bL:0,register:function(T){if(T.$$id){return;
}var U=this.__bL++;
this.__bK[U]=T;
T.$$id=U;
var V=this.__bM.getAllLogEvents();

for(var i=0,l=V.length;i<l;i++){T.process(V[i]);
}},unregister:function(Q){var R=Q.$$id;

if(R==null){return;
}delete this.__bK[R];
delete Q.$$id;
},debug:function(bC,bD){qx.log.Logger.__bO(A,arguments);
},info:function(J,K){qx.log.Logger.__bO(e,arguments);
},warn:function(bM,bN){qx.log.Logger.__bO(q,arguments);
},error:function(H,I){qx.log.Logger.__bO(j,arguments);
},trace:function(S){qx.log.Logger.__bO(e,[S,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(bx,by){var bz;
{};
},deprecatedClassWarning:function(bu,bv){var bw;
{};
},deprecatedEventWarning:function(bI,event,bJ){var bK;
{};
},deprecatedMixinWarning:function(X,Y){var ba;
{};
},deprecatedConstantWarning:function(bE,bF,bG){var self,bH;
{};
},deprecateMethodOverriding:function(L,M,N,O){var P;
{};
},clear:function(){this.__bM.clearHistory();
},__bM:new qx.log.appender.RingBuffer(50),__bN:{debug:0,info:1,warn:2,error:3},__bO:function(bk,bl){var bq=this.__bN;

if(bq[bk]<bq[this.__bJ]){return;
}var bn=bl.length<2?null:bl[0];
var bp=bn?1:0;
var bm=[];

for(var i=bp,l=bl.length;i<l;i++){bm.push(this.__bQ(bl[i],true));
}var br=new Date;
var bs={time:br,offset:br-qx.Bootstrap.LOADSTART,level:bk,items:bm,win:window};
if(bn){if(bn instanceof qx.core.Object){bs.object=bn.$$hash;
}else if(bn.$$type){bs.clazz=bn;
}}this.__bM.process(bs);
var bt=this.__bK;

for(var bo in bt){bt[bo].process(bs);
}},__bP:function(bA){if(bA===undefined){return y;
}else if(bA===null){return b;
}
if(bA.$$type){return a;
}var bB=typeof bA;

if(bB===C||bB==c||bB===G||bB===B){return bB;
}else if(bB===w){if(bA.nodeType){return k;
}else if(bA.classname){return d;
}else if(bA instanceof Array){return g;
}else if(bA instanceof Error){return j;
}else{return z;
}}
if(bA.toString){return F;
}return D;
},__bQ:function(bb,bc){var bj=this.__bP(bb);
var bf=D;
var be=[];

switch(bj){case b:case y:bf=bj;
break;
case c:case G:case B:bf=bb;
break;
case k:if(bb.nodeType===9){bf=r;
}else if(bb.nodeType===3){bf=m+bb.nodeValue+E;
}else if(bb.nodeType===1){bf=bb.nodeName.toLowerCase();

if(bb.id){bf+=t+bb.id;
}}else{bf=k;
}break;
case C:bf=qx.lang.Function.getName(bb)||bj;
break;
case d:bf=bb.basename+p+bb.$$hash+E;
break;
case a:case F:bf=bb.toString();
break;
case j:be=qx.dev.StackTrace.getStackTraceFromError(bb);
bf=bb.toString();
break;
case g:if(bc){bf=[];

for(var i=0,l=bb.length;i<l;i++){if(bf.length>20){bf.push(h+(l-i)+f);
break;
}bf.push(this.__bQ(bb[i],false));
}}else{bf=n+bb.length+v;
}break;
case z:if(bc){var bd;
var bi=[];

for(var bh in bb){bi.push(bh);
}bi.sort();
bf=[];

for(var i=0,l=bi.length;i<l;i++){if(bf.length>20){bf.push(h+(l-i)+f);
break;
}bh=bi[i];
bd=this.__bQ(bb[bh],false);
bd.key=bh;
bf.push(bd);
}}else{var bg=0;

for(var bh in bb){bg++;
}bf=o+bg+s;
}break;
}return {type:bj,text:bf,trace:be};
}},defer:function(bO){var bP=qx.Bootstrap.$$logs;

for(var i=0;i<bP.length;i++){bO.__bO(bP[i][0],bP[i][1]);
}qx.Bootstrap.debug=bO.debug;
qx.Bootstrap.info=bO.info;
qx.Bootstrap.warn=bO.warn;
qx.Bootstrap.error=bO.error;
qx.Bootstrap.trace=bO.trace;
}});
})();
(function(){var v="set",u="get",t="reset",s="MSIE 6.0",r="info",q="qx.core.Object",p="error",o="warn",n="]",m="debug",h="[",k="$$user_",j="rv:1.8.1",g="Object";
qx.Class.define(q,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:g},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+h+this.$$hash+n;
},base:function(V,W){{};

if(arguments.length===1){return V.callee.base.call(this);
}else{return V.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bo){return bo.callee.self;
},clone:function(){var by=this.constructor;
var bx=new by;
var bA=qx.Class.getProperties(by);
var bz=qx.core.Property.$$store.user;
var bB=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bA.length;i<l;i++){name=bA[i];

if(this.hasOwnProperty(bz[name])){bx[bB[name]](this[bz[name]]);
}}return bx;
},set:function(bC,bD){var bF=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(bC)){if(!this[bF[bC]]){if(this[v+qx.Bootstrap.firstUp(bC)]!=undefined){this[v+qx.Bootstrap.firstUp(bC)](bD);
return this;
}{};
}return this[bF[bC]](bD);
}else{for(var bE in bC){if(!this[bF[bE]]){if(this[v+qx.Bootstrap.firstUp(bE)]!=undefined){this[v+qx.Bootstrap.firstUp(bE)](bC[bE]);
continue;
}{};
}this[bF[bE]](bC[bE]);
}return this;
}},get:function(d){var f=qx.core.Property.$$method.get;

if(!this[f[d]]){if(this[u+qx.Bootstrap.firstUp(d)]!=undefined){return this[u+qx.Bootstrap.firstUp(d)]();
}{};
}return this[f[d]]();
},reset:function(bH){var bI=qx.core.Property.$$method.reset;

if(!this[bI[bH]]){if(this[t+qx.Bootstrap.firstUp(bH)]!=undefined){this[t+qx.Bootstrap.firstUp(bH)]();
return;
}{};
}this[bI[bH]]();
},__bR:qx.event.Registration,addListener:function(bp,bq,self,br){if(!this.$$disposed){return this.__bR.addListener(this,bp,bq,self,br);
}return null;
},addListenerOnce:function(bs,bt,self,bu){var bv=function(e){bt.call(self||this,e);
this.removeListener(bs,bv,this,bu);
};
return this.addListener(bs,bv,this,bu);
},removeListener:function(Y,ba,self,bb){if(!this.$$disposed){return this.__bR.removeListener(this,Y,ba,self,bb);
}return false;
},removeListenerById:function(bc){if(!this.$$disposed){return this.__bR.removeListenerById(this,bc);
}return false;
},hasListener:function(P,Q){return this.__bR.hasListener(this,P,Q);
},dispatchEvent:function(bG){if(!this.$$disposed){return this.__bR.dispatchEvent(this,bG);
}return true;
},fireEvent:function(a,b,c){if(!this.$$disposed){return this.__bR.fireEvent(this,a,b,c);
}return true;
},fireNonBubblingEvent:function(K,L,M){if(!this.$$disposed){return this.__bR.fireNonBubblingEvent(this,K,L,M);
}return true;
},fireDataEvent:function(R,S,T,U){if(!this.$$disposed){if(T===undefined){T=null;
}return this.__bR.fireNonBubblingEvent(this,R,qx.event.type.Data,[S,T,!!U]);
}return true;
},__bS:null,setUserData:function(bj,bk){if(!this.__bS){this.__bS={};
}this.__bS[bj]=bk;
},getUserData:function(y){if(!this.__bS){return null;
}var z=this.__bS[y];
return z===undefined?null:z;
},__bT:qx.log.Logger,debug:function(w){this.__bU(m,arguments);
},info:function(B){this.__bU(r,arguments);
},warn:function(N){this.__bU(o,arguments);
},error:function(bN){this.__bU(p,arguments);
},trace:function(){this.__bT.trace(this);
},__bU:function(bl,bm){var bn=qx.lang.Array.fromArguments(bm);
bn.unshift(this);
this.__bT[bl].apply(this.__bT,bn);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bh,bf,be,bi;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var bg=this.constructor;
var bd;

while(bg.superclass){if(bg.$$destructor){bg.$$destructor.call(this);
}if(bg.$$includes){bd=bg.$$flatIncludes;

for(var i=0,l=bd.length;i<l;i++){if(bd[i].$$destructor){bd[i].$$destructor.call(this);
}}}bg=bg.superclass;
}if(this.__bV){this.__bV();
}{};
},__bV:null,__bW:function(){var A=qx.Class.getProperties(this.constructor);

for(var i=0,l=A.length;i<l;i++){delete this[k+A[i]];
}},_disposeObjects:function(O){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(x){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(X){qx.util.DisposeUtil.disposeArray(this,X);
},_disposeMap:function(bw){qx.util.DisposeUtil.disposeMap(this,bw);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bJ,bK){{};
var bM=navigator.userAgent.indexOf(s)!=-1;
var bL=navigator.userAgent.indexOf(j)!=-1;
if(bM||bL){bK.__bV=bK.__bW;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__bS=null;
var E=this.constructor;
var I;
var J=qx.core.Property.$$store;
var G=J.user;
var H=J.theme;
var C=J.inherit;
var F=J.useinit;
var D=J.init;

while(E){I=E.$$properties;

if(I){for(var name in I){if(I[name].dereference){this[G[name]]=this[H[name]]=this[C[name]]=this[F[name]]=this[D[name]]=undefined;
}}}E=E.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(h,i){},registerEvent:function(b,c,d){},unregisterEvent:function(e,f,g){}}});
})();
(function(){var d="qx.globalErrorHandling",c="on",b="qx.event.GlobalError";
qx.Bootstrap.define(b,{statics:{setErrorHandler:function(l,m){this.__bX=l||null;
this.__bY=m||window;

if(qx.core.Setting.get(d)===c){if(l&&window.onerror){var n=qx.Bootstrap.bind(this.__cb,this);

if(this.__ca==null){this.__ca=window.onerror;
}var self=this;
window.onerror=function(e){self.__ca(e);
n(e);
};
}
if(l&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__cb,this);
}if(this.__bX==null){if(this.__ca!=null){window.onerror=this.__ca;
this.__ca=null;
}else{window.onerror=null;
}}}},__cb:function(i,j,k){if(this.__bX){this.handleError(new qx.core.WindowError(i,j,k));
return true;
}},observeMethod:function(h){if(qx.core.Setting.get(d)===c){var self=this;
return function(){if(!self.__bX){return h.apply(this,arguments);
}
try{return h.apply(this,arguments);
}catch(g){self.handleError(new qx.core.GlobalError(g,arguments));
}};
}else{return h;
}},handleError:function(a){if(this.__bX){this.__bX.call(this.__bY,a);
}}},defer:function(f){qx.core.Setting.define(d,c);
f.setErrorHandler(null,null);
}});
})();
(function(){var m="ready",l="qx.client",k="mshtml",j="load",i="unload",h="qx.event.handler.Application",g="complete",f="qx.application",d="gecko|opera|webkit",c="left",a="DOMContentLoaded",b="shutdown";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(t){qx.core.Object.call(this);
this._window=t.getWindow();
this.__cc=false;
this.__cd=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var s=qx.event.handler.Application.$$instance;

if(s){s.__cg();
}}},members:{canHandleEvent:function(y,z){},registerEvent:function(v,w,x){},unregisterEvent:function(n,o,p){},__ce:null,__cc:null,__cd:null,__cf:null,__cg:function(){if(!this.__ce&&this.__cc&&qx.$$loader.scriptLoaded){try{var A=qx.core.Setting.get(f);

if(!qx.Class.getByName(A)){return;
}}catch(e){}if(qx.core.Variant.isSet(l,k)){if(qx.event.Registration.hasListener(this._window,m)){this.__ce=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__ce=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__ce;
},_initObserver:function(){if(qx.$$domReady||document.readyState==g||document.readyState==m){this.__cc=true;
this.__cg();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(l,d)){qx.bom.Event.addNativeListener(this._window,a,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(l,k)){var self=this;
var r=function(){try{document.documentElement.doScroll(c);

if(document.body){self._onNativeLoadWrapped();
}}catch(q){window.setTimeout(r,100);
}};
r();
}qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,i,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,i,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cc=true;
this.__cg();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cf){this.__cf=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var h="qx.event.type.Event";
qx.Class.define(h,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(a,b){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!a;
this._cancelable=!!b;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(j){if(j){var k=j;
}else{var k=qx.event.Pool.getInstance().getObject(this.constructor);
}k._type=this._type;
k._target=this._target;
k._currentTarget=this._currentTarget;
k._relatedTarget=this._relatedTarget;
k._originalTarget=this._originalTarget;
k._stopPropagation=this._stopPropagation;
k._bubbles=this._bubbles;
k._preventDefault=this._preventDefault;
k._cancelable=this._cancelable;
return k;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(d){this._type=d;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(c){this._eventPhase=c;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(m){this._target=m;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(f){this._currentTarget=f;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(i){this._relatedTarget=i;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(g){this._originalTarget=g;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(l){this._bubbles=l;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(e){this._cancelable=e;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__ch:null,__ci:null,init:function(d,e,f){qx.event.type.Event.prototype.init.call(this,false,f);
this.__ch=d;
this.__ci=e;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
c.__ch=this.__ch;
c.__ci=this.__ci;
return c;
},getData:function(){return this.__ch;
},getOldData:function(){return this.__ci;
}},destruct:function(){this.__ch=this.__ci=null;
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cj=c;
this.__ck=d||b;
this.__cl=e===undefined?-1:e;
},members:{__cj:null,__ck:null,__cl:null,toString:function(){return this.__cj;
},getUri:function(){return this.__ck;
},getLineNumber:function(){return this.__cl;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__cm=b+(c&&c.message?c.message:c);
Error.call(this,this.__cm);
this.__cn=d;
this.__co=c;
},members:{__co:null,__cn:null,__cm:null,toString:function(){return this.__cm;
},getArguments:function(){return this.__cn;
},getSourceException:function(){return this.__co;
}},destruct:function(){this.__co=null;
this.__cn=null;
this.__cm=null;
}});
})();
(function(){var q="",p="g",o="0",n='\\$1',m="%",l='-',k="qx.lang.String",j=' ',h='\n',g="undefined";
qx.Class.define(k,{statics:{camelCase:function(G){return G.replace(/\-([a-z])/g,function(I,J){return J.toUpperCase();
});
},hyphenate:function(w){return w.replace(/[A-Z]/g,function(F){return (l+F.charAt(0).toLowerCase());
});
},capitalize:function(d){return d.replace(/\b[a-z]/g,function(L){return L.toUpperCase();
});
},clean:function(C){return this.trim(C.replace(/\s+/g,j));
},trimLeft:function(B){return B.replace(/^\s+/,q);
},trimRight:function(r){return r.replace(/\s+$/,q);
},trim:function(K){return K.replace(/^\s+|\s+$/g,q);
},startsWith:function(x,y){return x.indexOf(y)===0;
},endsWith:function(z,A){return z.substring(z.length-A.length,z.length)===A;
},repeat:function(D,E){return D.length>0?new Array(E+1).join(D):q;
},pad:function(t,length,u){var v=length-t.length;

if(v>0){if(typeof u===g){u=o;
}return this.repeat(u,v)+t;
}else{return t;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(e,f){return e.indexOf(f)!=-1;
},format:function(a,b){var c=a;

for(var i=0;i<b.length;i++){c=c.replace(new RegExp(m+(i+1),p),b[i]+q);
}return c;
},escapeRegexpChars:function(Q){return Q.replace(/([.*+?^${}()|[\]\/\\])/g,n);
},toArray:function(s){return s.split(/\B|\b/g);
},stripTags:function(H){return H.replace(/<\/?[^>]+>/gi,q);
},stripScripts:function(M,N){var P=q;
var O=M.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){P+=arguments[1]+h;
return q;
});

if(N===true){qx.lang.Function.globalEval(P);
}return O;
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(k){this._manager=k;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(h,event,j){return !event.getBubbles();
},dispatchEvent:function(b,event,c){var f,d;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var g=this._manager.getListeners(b,c,false);

if(g){for(var i=0,l=g.length;i<l;i++){var e=g[i].context||b;
g[i].handler.call(e,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(i,j){return qx.Class.supportsEvent(i.constructor,j);
},registerEvent:function(e,f,g){},unregisterEvent:function(b,c,d){}},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(m,n,o){var name;

for(var i=0,l=n.length;i<l;i++){name=n[i];

if(m[name]==null||!m.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(m[name].dispose){if(!o&&m[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{m[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}m[name]=null;
}},disposeArray:function(b,c){var e=b[c];

if(!e){return;
}if(qx.core.ObjectRegistry.inShutDown){b[c]=null;
return;
}try{var d;

for(var i=e.length-1;i>=0;i--){d=e[i];

if(d){d.dispose();
}}}catch(k){throw new Error("The array field: "+c+" of object: "+b+" has non disposable entries: "+k);
}e.length=0;
b[c]=null;
},disposeMap:function(p,q){var r=p[q];

if(!r){return;
}if(qx.core.ObjectRegistry.inShutDown){p[q]=null;
return;
}try{for(var s in r){if(r.hasOwnProperty(s)){r[s].dispose();
}}}catch(f){throw new Error("The map field: "+q+" of object: "+p+" has non disposable entries: "+f);
}p[q]=null;
},disposeTriggeredBy:function(g,h){var j=h.dispose;
h.dispose=function(){j.call(h);
g.dispose();
};
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(j){qx.core.Object.call(this);
this.__cp={};

if(j!=null){this.setSize(j);
}},properties:{size:{check:a,init:Infinity}},members:{__cp:null,getObject:function(f){if(this.$$disposed){return new f;
}
if(!f){throw new Error("Class needs to be defined!");
}var g=null;
var h=this.__cp[f.classname];

if(h){g=h.pop();
}
if(g){g.$$pooled=false;
}else{g=new f;
}return g;
},poolObject:function(c){if(!this.__cp){return;
}var d=c.classname;
var e=this.__cp[d];

if(c.$$pooled){throw new Error("Object is already pooled: "+c);
}
if(!e){this.__cp[d]=e=[];
}if(e.length>this.getSize()){if(c.destroy){c.destroy();
}else{c.dispose();
}return;
}c.$$pooled=true;
e.push(c);
}},destruct:function(){var n=this.__cp;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__cp;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var q="indexOf",p="lastIndexOf",o="slice",n="concat",m="join",k="toLocaleUpperCase",j="shift",h="substr",g="filter",f="unshift",N="match",M="quote",L="qx.lang.Generics",K="localeCompare",J="sort",I="some",H="charAt",G="split",F="substring",E="pop",y="toUpperCase",z="replace",w="push",x="charCodeAt",u="every",v="reverse",r="search",t="forEach",A="map",B="toLowerCase",D="splice",C="toLocaleLowerCase";
qx.Class.define(L,{statics:{__cq:{"Array":[m,v,J,w,E,j,f,D,n,o,q,p,t,A,g,I,u],"String":[M,F,B,y,H,x,q,p,C,k,K,N,r,z,G,h,n,o]},__cr:function(O,P){return function(s){return O.prototype[P].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cs:function(){var a=qx.lang.Generics.__cq;

for(var e in a){var c=window[e];
var b=a[e];

for(var i=0,l=b.length;i<l;i++){var d=b[i];

if(!c[d]){c[d]=qx.lang.Generics.__cr(c,d);
}}}}},defer:function(Q){Q.__cs();
}});
})();
(function(){var eq="qx.bom.Selector";
qx.Class.define(eq,{statics:{query:null,matches:null}});
(function(){var df=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,dm=0,di=Object.prototype.toString,dg=false,dp=true;
[0,0].sort(function(){dp=false;
return 0;
});
var dc=function(r,s,t,u){t=t||[];
s=s||document;
var D=s;

if(s.nodeType!==1&&s.nodeType!==9){return [];
}
if(!r||typeof r!=="string"){return t;
}var A=[],m,x,v,z,y=true,w=dc.isXML(s),C=r,B,F,E,i;
do{df.exec("");
m=df.exec(C);

if(m){C=m[3];
A.push(m[1]);

if(m[2]){z=m[3];
break;
}}}while(m);

if(A.length>1&&dh.exec(r)){if(A.length===2&&de.relative[A[0]]){x=dd(A[0]+A[1],s);
}else{x=de.relative[A[0]]?[s]:dc(A.shift(),s);

while(A.length){r=A.shift();

if(de.relative[r]){r+=A.shift();
}x=dd(r,x);
}}}else{if(!u&&A.length>1&&s.nodeType===9&&!w&&de.match.ID.test(A[0])&&!de.match.ID.test(A[A.length-1])){B=dc.find(A.shift(),s,w);
s=B.expr?dc.filter(B.expr,B.set)[0]:B.set[0];
}
if(s){B=u?
{expr:A.pop(),set:db(u)}:dc.find(A.pop(),A.length===1&&(A[0]==="~"||A[0]==="+")&&s.parentNode?s.parentNode:s,w);
x=B.expr?dc.filter(B.expr,B.set):B.set;

if(A.length>0){v=db(x);
}else{y=false;
}
while(A.length){F=A.pop();
E=F;

if(!de.relative[F]){F="";
}else{E=A.pop();
}
if(E==null){E=s;
}de.relative[F](v,E,w);
}}else{v=A=[];
}}
if(!v){v=x;
}
if(!v){dc.error(F||r);
}
if(di.call(v)==="[object Array]"){if(!y){t.push.apply(t,v);
}else if(s&&s.nodeType===1){for(i=0;v[i]!=null;i++){if(v[i]&&(v[i]===true||v[i].nodeType===1&&dc.contains(s,v[i]))){t.push(x[i]);
}}}else{for(i=0;v[i]!=null;i++){if(v[i]&&v[i].nodeType===1){t.push(x[i]);
}}}}else{db(v,t);
}
if(z){dc(z,D,t,u);
dc.uniqueSort(t);
}return t;
};
dc.uniqueSort=function(ey){if(dj){dg=dp;
ey.sort(dj);

if(dg){for(var i=1;i<ey.length;i++){if(ey[i]===ey[i-1]){ey.splice(i--,1);
}}}}return ey;
};
dc.matches=function(bD,bE){return dc(bD,null,null,bE);
};
dc.find=function(dw,dx,dy){var dz;

if(!dw){return [];
}
for(var i=0,l=de.order.length;i<l;i++){var dA=de.order[i],dB;

if((dB=de.leftMatch[dA].exec(dw))){var dC=dB[1];
dB.splice(1,1);

if(dC.substr(dC.length-1)!=="\\"){dB[1]=(dB[1]||"").replace(/\\/g,"");
dz=de.find[dA](dB,dx,dy);

if(dz!=null){dw=dw.replace(de.match[dA],"");
break;
}}}}
if(!dz){dz=dx.getElementsByTagName("*");
}return {set:dz,expr:dw};
};
dc.filter=function(bV,bW,bX,bY){var ca=bV,cf=[],cb=bW,ck,cj,cc=bW&&bW[0]&&dc.isXML(bW[0]);

while(bV&&bW.length){for(var ci in de.filter){if((ck=de.leftMatch[ci].exec(bV))!=null&&ck[2]){var cd=de.filter[ci],ch,ce,cl=ck[1];
cj=false;
ck.splice(1,1);

if(cl.substr(cl.length-1)==="\\"){continue;
}
if(cb===cf){cf=[];
}
if(de.preFilter[ci]){ck=de.preFilter[ci](ck,cb,bX,cf,bY,cc);

if(!ck){cj=ch=true;
}else if(ck===true){continue;
}}
if(ck){for(var i=0;(ce=cb[i])!=null;i++){if(ce){ch=cd(ce,ck,i,cb);
var cg=bY^!!ch;

if(bX&&ch!=null){if(cg){cj=true;
}else{cb[i]=false;
}}else if(cg){cf.push(ce);
cj=true;
}}}}
if(ch!==undefined){if(!bX){cb=cf;
}bV=bV.replace(de.match[ci],"");

if(!cj){return [];
}break;
}}}if(bV===ca){if(cj==null){dc.error(bV);
}else{break;
}}ca=bV;
}return cb;
};
dc.error=function(J){throw "Syntax error, unrecognized expression: "+J;
};
var de=dc.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(be){return be.getAttribute("href");
}},relative:{"+":function(U,V){var W=typeof V==="string",Y=W&&!/\W/.test(V),ba=W&&!Y;

if(Y){V=V.toLowerCase();
}
for(var i=0,l=U.length,X;i<l;i++){if((X=U[i])){while((X=X.previousSibling)&&X.nodeType!==1){}U[i]=ba||X&&X.nodeName.toLowerCase()===V?X||false:X===V;
}}
if(ba){dc.filter(V,U,true);
}},">":function(cL,cM){var cN=typeof cM==="string",cO,i=0,l=cL.length;

if(cN&&!/\W/.test(cM)){cM=cM.toLowerCase();

for(;i<l;i++){cO=cL[i];

if(cO){var parent=cO.parentNode;
cL[i]=parent.nodeName.toLowerCase()===cM?parent:false;
}}}else{for(;i<l;i++){cO=cL[i];

if(cO){cL[i]=cN?cO.parentNode:cO.parentNode===cM;
}}
if(cN){dc.filter(cM,cL,true);
}}},"":function(N,O,P){var Q=dm++,R=dn,S;

if(typeof O==="string"&&!/\W/.test(O)){O=O.toLowerCase();
S=O;
R=dq;
}R("parentNode",O,Q,N,S,P);
},"~":function(eR,eS,eT){var eU=dm++,eV=dn,eW;

if(typeof eS==="string"&&!/\W/.test(eS)){eS=eS.toLowerCase();
eW=eS;
eV=dq;
}eV("previousSibling",eS,eU,eR,eW,eT);
}},find:{ID:function(eM,eN,eO){if(typeof eN.getElementById!=="undefined"&&!eO){var m=eN.getElementById(eM[1]);
return m?[m]:[];
}},NAME:function(co,cp){if(typeof cp.getElementsByName!=="undefined"){var cr=[],cq=cp.getElementsByName(co[1]);

for(var i=0,l=cq.length;i<l;i++){if(cq[i].getAttribute("name")===co[1]){cr.push(cq[i]);
}}return cr.length===0?null:cr;
}},TAG:function(ei,ej){return ej.getElementsByTagName(ei[1]);
}},preFilter:{CLASS:function(cw,cx,cy,cz,cA,cB){cw=" "+cw[1].replace(/\\/g,"")+" ";

if(cB){return cw;
}
for(var i=0,cC;(cC=cx[i])!=null;i++){if(cC){if(cA^(cC.className&&(" "+cC.className+" ").replace(/[\t\n]/g," ").indexOf(cw)>=0)){if(!cy){cz.push(cC);
}}else if(cy){cx[i]=false;
}}}return false;
},ID:function(dD){return dD[1].replace(/\\/g,"");
},TAG:function(du,dv){return du[1].toLowerCase();
},CHILD:function(eP){if(eP[1]==="nth"){var eQ=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(eP[2]==="even"&&"2n"||eP[2]==="odd"&&"2n+1"||!/\D/.test(eP[2])&&"0n+"+eP[2]||eP[2]);
eP[2]=(eQ[1]+(eQ[2]||1))-0;
eP[3]=eQ[3]-0;
}eP[0]=dm++;
return eP;
},ATTR:function(bL,bM,bN,bO,bP,bQ){var name=bL[1].replace(/\\/g,"");

if(!bQ&&de.attrMap[name]){bL[1]=de.attrMap[name];
}
if(bL[2]==="~="){bL[4]=" "+bL[4]+" ";
}return bL;
},PSEUDO:function(bf,bg,bh,bi,bj){if(bf[1]==="not"){if((df.exec(bf[3])||"").length>1||/^\w/.test(bf[3])){bf[3]=dc(bf[3],null,null,bg);
}else{var bk=dc.filter(bf[3],bg,bh,true^bj);

if(!bh){bi.push.apply(bi,bk);
}return false;
}}else if(de.match.POS.test(bf[0])||de.match.CHILD.test(bf[0])){return true;
}return bf;
},POS:function(cR){cR.unshift(true);
return cR;
}},filters:{enabled:function(ct){return ct.disabled===false&&ct.type!=="hidden";
},disabled:function(cY){return cY.disabled===true;
},checked:function(ew){return ew.checked===true;
},selected:function(br){br.parentNode.selectedIndex;
return br.selected===true;
},parent:function(I){return !!I.firstChild;
},empty:function(cs){return !cs.firstChild;
},has:function(dN,i,dO){return !!dc(dO[3],dN).length;
},header:function(T){return (/h\d/i).test(T.nodeName);
},text:function(dt){return "text"===dt.type;
},radio:function(eA){return "radio"===eA.type;
},checkbox:function(ev){return "checkbox"===ev.type;
},file:function(cn){return "file"===cn.type;
},password:function(dU){return "password"===dU.type;
},submit:function(cW){return "submit"===cW.type;
},image:function(cm){return "image"===cm.type;
},reset:function(eC){return "reset"===eC.type;
},button:function(ex){return "button"===ex.type||ex.nodeName.toLowerCase()==="button";
},input:function(cV){return (/input|select|textarea|button/i).test(cV.nodeName);
}},setFilters:{first:function(eB,i){return i===0;
},last:function(bb,i,bc,bd){return i===bd.length-1;
},even:function(cX,i){return i%2===0;
},odd:function(dM,i){return i%2===1;
},lt:function(eK,i,eL){return i<eL[3]-0;
},gt:function(bl,i,bm){return i>bm[3]-0;
},nth:function(dr,i,ds){return ds[3]-0===i;
},eq:function(cP,i,cQ){return cQ[3]-0===i;
}},filter:{PSEUDO:function(bG,bH,i,bI){var name=bH[1],bJ=de.filters[name];

if(bJ){return bJ(bG,i,bH,bI);
}else if(name==="contains"){return (bG.textContent||bG.innerText||dc.getText([bG])||"").indexOf(bH[3])>=0;
}else if(name==="not"){var bK=bH[3];

for(var j=0,l=bK.length;j<l;j++){if(bK[j]===bG){return false;
}}return true;
}else{dc.error("Syntax error, unrecognized expression: "+name);
}},CHILD:function(bu,bv){var bB=bv[1],bw=bu;

switch(bB){case 'only':case 'first':while((bw=bw.previousSibling)){if(bw.nodeType===1){return false;
}}
if(bB==="first"){return true;
}bw=bu;
case 'last':while((bw=bw.nextSibling)){if(bw.nodeType===1){return false;
}}return true;
case 'nth':var bC=bv[2],by=bv[3];

if(bC===1&&by===0){return true;
}var bA=bv[0],parent=bu.parentNode;

if(parent&&(parent.sizcache!==bA||!bu.nodeIndex)){var bx=0;

for(bw=parent.firstChild;bw;bw=bw.nextSibling){if(bw.nodeType===1){bw.nodeIndex=++bx;
}}parent.sizcache=bA;
}var bz=bu.nodeIndex-by;

if(bC===0){return bz===0;
}else{return (bz%bC===0&&bz/bC>=0);
}}},ID:function(G,H){return G.nodeType===1&&G.getAttribute("id")===H;
},TAG:function(p,q){return (q==="*"&&p.nodeType===1)||p.nodeName.toLowerCase()===q;
},CLASS:function(eD,eE){return (" "+(eD.className||eD.getAttribute("class"))+" ").indexOf(eE)>-1;
},ATTR:function(ea,eb){var name=eb[1],ef=de.attrHandle[name]?de.attrHandle[name](ea):ea[name]!=null?ea[name]:ea.getAttribute(name),ee=ef+"",ed=eb[2],ec=eb[4];
return ef==null?ed==="!=":ed==="="?ee===ec:ed==="*="?ee.indexOf(ec)>=0:ed==="~="?(" "+ee+" ").indexOf(ec)>=0:!ec?ee&&ef!==false:ed==="!="?ee!==ec:ed==="^="?ee.indexOf(ec)===0:ed==="$="?ee.substr(ee.length-ec.length)===ec:ed==="|="?ee===ec||ee.substr(0,ec.length+1)===ec+"-":false;
},POS:function(bR,bS,i,bT){var name=bS[2],bU=de.setFilters[name];

if(bU){return bU(bR,i,bS,bT);
}}}};
var dh=de.match.POS,da=function(eF,eG){return "\\"+(eG-0+1);
};

for(var dl in de.match){de.match[dl]=new RegExp(de.match[dl].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
de.leftMatch[dl]=new RegExp(/(^(?:.|\r|\n)*?)/.source+de.match[dl].source.replace(/\\(\d+)/g,da));
}var db=function(c,d){c=Array.prototype.slice.call(c,0);

if(d){d.push.apply(d,c);
return d;
}return c;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){db=function(eH,eI){var eJ=eI||[],i=0;

if(di.call(eH)==="[object Array]"){Array.prototype.push.apply(eJ,eH);
}else{if(typeof eH.length==="number"){for(var l=eH.length;i<l;i++){eJ.push(eH[i]);
}}else{for(;eH[i];i++){eJ.push(eH[i]);
}}}return eJ;
};
}var dj;

if(document.documentElement.compareDocumentPosition){dj=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){dg=true;
}return a.compareDocumentPosition?-1:1;
}var ez=a.compareDocumentPosition(b)&4?-1:a===b?0:1;

if(ez===0){dg=true;
}return ez;
};
}else if("sourceIndex" in document.documentElement){dj=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){dg=true;
}return a.sourceIndex?-1:1;
}var dP=a.sourceIndex-b.sourceIndex;

if(dP===0){dg=true;
}return dP;
};
}else if(document.createRange){dj=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){dg=true;
}return a.ownerDocument?-1:1;
}var es=a.ownerDocument.createRange(),et=b.ownerDocument.createRange();
es.setStart(a,0);
es.setEnd(a,0);
et.setStart(b,0);
et.setEnd(b,0);
var er=es.compareBoundaryPoints(Range.START_TO_END,et);

if(er===0){dg=true;
}return er;
};
}dc.getText=function(cS){var cU="",cT;

for(var i=0;cS[i];i++){cT=cS[i];
if(cT.nodeType===3||cT.nodeType===4){cU+=cT.nodeValue;
}else if(cT.nodeType!==8){cU+=dc.getText(cT.childNodes);
}}return cU;
};
(function(){var fa=document.createElement("div"),eY="script"+(new Date()).getTime();
fa.innerHTML="<a name='"+eY+"'/>";
var eX=document.documentElement;
eX.insertBefore(fa,eX.firstChild);
if(document.getElementById(eY)){de.find.ID=function(k,n,o){if(typeof n.getElementById!=="undefined"&&!o){var m=n.getElementById(k[1]);
return m?m.id===k[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===k[1]?[m]:undefined:[];
}};
de.filter.ID=function(K,L){var M=typeof K.getAttributeNode!=="undefined"&&K.getAttributeNode("id");
return K.nodeType===1&&M&&M.nodeValue===L;
};
}eX.removeChild(fa);
eX=fa=null;
})();
(function(){var bF=document.createElement("div");
bF.appendChild(document.createComment(""));
if(bF.getElementsByTagName("*").length>0){de.find.TAG=function(dV,dW){var dY=dW.getElementsByTagName(dV[1]);
if(dV[1]==="*"){var dX=[];

for(var i=0;dY[i];i++){if(dY[i].nodeType===1){dX.push(dY[i]);
}}dY=dX;
}return dY;
};
}bF.innerHTML="<a href='#'></a>";

if(bF.firstChild&&typeof bF.firstChild.getAttribute!=="undefined"&&bF.firstChild.getAttribute("href")!=="#"){de.attrHandle.href=function(bn){return bn.getAttribute("href",2);
};
}bF=null;
})();

if(document.querySelectorAll){(function(){var g=dc,f=document.createElement("div");
f.innerHTML="<p class='TEST'></p>";
if(f.querySelectorAll&&f.querySelectorAll(".TEST").length===0){return;
}dc=function(dQ,dR,dS,dT){dR=dR||document;
if(!dT&&dR.nodeType===9&&!dc.isXML(dR)){try{return db(dR.querySelectorAll(dQ),dS);
}catch(e){}}return g(dQ,dR,dS,dT);
};

for(var h in g){dc[h]=g[h];
}f=null;
})();
}(function(){var eu=document.createElement("div");
eu.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!eu.getElementsByClassName||eu.getElementsByClassName("e").length===0){return;
}eu.lastChild.className="e";

if(eu.getElementsByClassName("e").length===1){return;
}de.order.splice(1,0,"CLASS");
de.find.CLASS=function(bo,bp,bq){if(typeof bp.getElementsByClassName!=="undefined"&&!bq){return bp.getElementsByClassName(bo[1]);
}};
eu=null;
})();
function dq(dE,dF,dG,dH,dI,dJ){for(var i=0,l=dH.length;i<l;i++){var dL=dH[i];

if(dL){dL=dL[dE];
var dK=false;

while(dL){if(dL.sizcache===dG){dK=dH[dL.sizset];
break;
}
if(dL.nodeType===1&&!dJ){dL.sizcache=dG;
dL.sizset=i;
}
if(dL.nodeName.toLowerCase()===dF){dK=dL;
break;
}dL=dL[dE];
}dH[i]=dK;
}}}function dn(cD,cE,cF,cG,cH,cI){for(var i=0,l=cG.length;i<l;i++){var cK=cG[i];

if(cK){cK=cK[cD];
var cJ=false;

while(cK){if(cK.sizcache===cF){cJ=cG[cK.sizset];
break;
}
if(cK.nodeType===1){if(!cI){cK.sizcache=cF;
cK.sizset=i;
}
if(typeof cE!=="string"){if(cK===cE){cJ=true;
break;
}}else if(dc.filter(cE,[cK]).length>0){cJ=cK;
break;
}}cK=cK[cD];
}cG[i]=cJ;
}}}dc.contains=document.compareDocumentPosition?
function(a,b){return !!(a.compareDocumentPosition(b)&16);
}:
function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
dc.isXML=function(bs){var bt=(bs?bs.ownerDocument||bs:0).documentElement;
return bt?bt.nodeName!=="HTML":false;
};
var dd=function(ek,el){var en=[],em="",ep,eo=el.nodeType?[el]:el;
while((ep=de.match.PSEUDO.exec(ek))){em+=ep[0];
ek=ek.replace(de.match.PSEUDO,"");
}ek=de.relative[ek]?ek+"*":ek;

for(var i=0,l=eo.length;i<l;i++){dc(ek,eo[i],en);
}return dc.filter(em,en);
};
var dk=qx.bom.Selector;
dk.query=function(cu,cv){return dc(cu,cv);
};
dk.matches=function(eg,eh){return dc(eg,null,null,eh);
};
})();
})();
(function(){var C="qx.client",B="gecko",A="Content-Type",z="",y="mshtml",x="application/xml",w="qx.bom.Request",v="file:",u="parsererror";
qx.Class.define(w,{extend:qx.core.Object,construct:function(){this.__ct={};
this.__cu=this.__cE();
},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{__cv:null,__cw:null,__cu:null,__cx:null,__cy:null,__cz:null,__cA:null,__ct:null,readyState:0,responseText:z,responseXML:null,status:0,statusText:z,timeout:0,onreadystatechange:function(){},ontimeout:function(){},onload:function(){},onerror:function(){},onabort:function(){},open:function(b,c,d,e,f){if(d==null){d=true;
}this.__cv=d;
this.__cw=qx.lang.Function.bind(this.__cB,this);
this.__cx=qx.lang.Function.bind(this.__cC,this);
this.__cu.onreadystatechange=this.__cw;
if(arguments.length>4){this.__cu.open(b,c,d,e,f);
}else if(arguments.length>3){this.__cu.open(b,c,d,e);
}else{this.__cu.open(b,c,d);
}if(qx.core.Variant.isSet(C,B)){if(!d){this.readyState=qx.bom.Request.OPENED;
this.__cF();
}}},send:function(j){var k=this.__ct;
if(j&&j.nodeType){j=window.XMLSerializer?new XMLSerializer().serializeToString(j):j.xml;

if(!k[A]){k[A]=x;
}}for(var l in k){this.__cu.setRequestHeader(l,k[l]);
}if(this.timeout!=null&&this.timeout>0){this.__cy=window.setTimeout(this.__cx,this.timeout);
}this.__cu.send(j);
if(qx.core.Variant.isSet(C,B)){if(!this.__cv){this.readyState=qx.bom.Request.OPENED;
this.__cH(this);
while(this.readyState<qx.bom.Request.DONE){this.readyState++;
this.__cF();
if(this.__cz){return;
}}}}},isSuccessful:function(){var status=this.status;
return status===304||(status>=200&&status<300);
},abort:function(){if(this.__cy){window.clearTimeout(this.__cy);
}this.__cD();
this.onabort();
this.dispose();
},__cB:qx.event.GlobalError.observeMethod(function(){if(qx.core.Variant.isSet(C,B)){if(!this.__cv){return;
}}this.readyState=this.__cu.readyState;
this.__cH();
if(this.__cz){this.readyState=qx.bom.Request.UNSENT;
return ;
}if(this.readyState==qx.bom.Request.DONE&&this.__cy){window.clearTimeout(this.__cy);
}this.__cF();
if(this.readyState==qx.bom.Request.DONE){this.dispose();
}}),__cC:qx.event.GlobalError.observeMethod(function(){this.__cD();
this.ontimeout();
this.dispose();
}),getAllResponseHeaders:function(){try{return this.__cu.getAllResponseHeaders();
}catch(m){return null;
}},getResponseHeader:function(p){try{return this.__cu.getResponseHeader(p);
}catch(E){return null;
}},setRequestHeader:function(h,i){if(i==null){delete this.__ct[h];
}else{this.__ct[h]=i;
}},removeRequestHeader:function(r,s){delete this.__ct[r];
},getRequestHeader:function(a){return this.__ct[a]||null;
},__cD:function(){this.__cH();
if(this.readyState>qx.bom.Request.UNSENT){this.__cz=true;
}this.__cu.abort();
},__cE:qx.core.Variant.select(C,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),__cF:function(){if(this.__cA===this.readyState){return;
}this.onreadystatechange();
this.__cA=this.readyState;
if(this.readyState===4){if(this.isSuccessful()){this.onload();
}else{this.onerror();
}}},__cG:function(){var n=this.__cu.responseXML;

if(qx.core.Variant.isSet(C,y)){if(n&&!n.documentElement&&this.__cu.getResponseHeader(A).match(/[^\/]+\/[^\+]+\+xml/)){n=new ActiveXObject(qx.xml.Document.DOMDOC);
n.loadXML(this.__cu.responseText);
}if(n&&n.parseError!=0){return null;
}}else if(!n.documentElement||n.documentElement.tagName==u){return null;
}return n;
},__cH:function(){var g=this.__cu;

try{this.responseText=g.responseText;
}catch(D){}
try{this.responseXML=this.__cG();
}catch(q){}
try{this.status=g.status;
}catch(o){}
try{this.statusText=g.statusText;
}catch(t){}if(qx.core.Variant.isSet(C,y)){if(this.status===1223){this.status=204;
}}if(!this.status&&location.protocol===v){this.status=204;
}}},destruct:function(){if(this.__cy){window.clearTimeout(this.__cy);
this.__cy=null;
}if(this.__cu){this.__cu.onreadystatechange=qx.lang.Function.empty;
this.__cu=null;
}this.onreadystatechange=this.onload=this.onerror=this.onabort=null;
this.__cw=null;
this.__ct=null;
}});
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(B){if(B.nodeType===9){return B.documentElement.nodeName!==d;
}else if(B.ownerDocument){return this.isXmlDocument(B.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(x,y){var z=new ActiveXObject(this.DOMDOC);
z.setProperty(n,b);

if(y){var A=h;
A+=y;

if(x){A+=f+x+o;
}A+=k;
z.loadXML(A);
}return z;
},"default":function(s,t){return document.implementation.createDocument(s||q,t||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(C){var D=qx.xml.Document.create();
D.loadXML(C);
return D;
},"default":function(F){var G=new DOMParser();
return G.parseFromString(F,e);
}})},defer:function(u){if(qx.core.Variant.isSet(r,p)){var v=[a,j];
var w=[c,g];

for(var i=0,l=v.length;i<l;i++){try{new ActiveXObject(v[i]);
new ActiveXObject(w[i]);
}catch(E){continue;
}u.DOMDOC=v[i];
u.XMLHTTP=w[i];
break;
}}}});
})();
(function(){var j="mshtml",h="pop.push.reverse.shift.sort.splice.unshift.join.slice",g="number",f="qx.type.BaseArray",e="qx.client",d=".";
qx.Class.define(f,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function c(l){if(qx.core.Variant.isSet(e,j)){b.prototype={length:0,$$isArray:true};
var o=h.split(d);

for(var length=o.length;length;){b.prototype[o[--length]]=Array.prototype[o[length]];
}}var p=Array.prototype.slice;
b.prototype.concat=function(){var u=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var t;

if(arguments[i] instanceof b){t=p.call(arguments[i],0);
}else if(arguments[i] instanceof Array){t=arguments[i];
}else{t=[arguments[i]];
}u.push.apply(u,t);
}return u;
};
b.prototype.toString=function(){return p.call(this,0).toString();
};
b.prototype.toLocaleString=function(){return p.call(this,0).toLocaleString();
};
b.prototype.constructor=b;
b.prototype.indexOf=qx.lang.Core.arrayIndexOf;
b.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
b.prototype.forEach=qx.lang.Core.arrayForEach;
b.prototype.some=qx.lang.Core.arraySome;
b.prototype.every=qx.lang.Core.arrayEvery;
var m=qx.lang.Core.arrayFilter;
var n=qx.lang.Core.arrayMap;
b.prototype.filter=function(){var r=new this.constructor;
r.push.apply(r,m.apply(this,arguments));
return r;
};
b.prototype.map=function(){var s=new this.constructor;
s.push.apply(s,n.apply(this,arguments));
return s;
};
b.prototype.slice=function(){var k=new this.constructor;
k.push.apply(k,Array.prototype.slice.apply(this,arguments));
return k;
};
b.prototype.splice=function(){var q=new this.constructor;
q.push.apply(q,Array.prototype.splice.apply(this,arguments));
return q;
};
b.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
b.prototype.valueOf=function(){return this.length;
};
return b;
}function b(length){if(arguments.length===1&&typeof length===g){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function a(){}a.prototype=[];
b.prototype=new a;
b.prototype.length=0;
qx.type.BaseArray=c(b);
})();
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(l){if(qx.bom.client.Engine.VERSION>=8){return (l||window).document.documentMode===5;
}else{return (l||window).document.compatMode!==f;
}},"webkit":function(m){if(document.compatMode===undefined){var n=(m||window).document.createElement(a);
n.style.cssText=e;
return n.style.width===c?true:false;
}else{return (m||window).document.compatMode!==f;
}},"default":function(h){return (h||window).document.compatMode!==f;
}}),isStandardMode:function(g){return !this.isQuirksMode(g);
},getWidth:function(i){var j=(i||window).document;
var k=qx.bom.Viewport.getWidth(i);
var scroll=this.isStandardMode(i)?j.documentElement.scrollWidth:j.body.scrollWidth;
return Math.max(scroll,k);
},getHeight:function(o){var p=(o||window).document;
var q=qx.bom.Viewport.getHeight(o);
var scroll=this.isStandardMode(o)?p.documentElement.scrollHeight:p.body.scrollHeight;
return Math.max(scroll,q);
}}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(v){this._manager=v;
},members:{_getParent:function(u){throw new Error("Missing implementation");
},canDispatchEvent:function(w,event,x){return event.getBubbles();
},dispatchEvent:function(c,event,d){var parent=c;
var o=this._manager;
var l,s;
var h;
var n,q;
var p;
var r=[];
l=o.getListeners(c,d,true);
s=o.getListeners(c,d,false);

if(l){r.push(l);
}
if(s){r.push(s);
}var parent=this._getParent(c);
var f=[];
var e=[];
var g=[];
var m=[];
while(parent!=null){l=o.getListeners(parent,d,true);

if(l){g.push(l);
m.push(parent);
}s=o.getListeners(parent,d,false);

if(s){f.push(s);
e.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=g.length-1;i>=0;i--){p=m[i];
event.setCurrentTarget(p);
h=g[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||p;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(c);

for(var i=0,t=r.length;i<t;i++){h=r[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||c;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,t=f.length;i<t;i++){p=e[i];
event.setCurrentTarget(p);
h=f[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||p;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var b="qx.event.handler.UserAction";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this.__cI=a;
this.__cJ=a.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__cI:null,__cJ:null,canHandleEvent:function(f,g){},registerEvent:function(i,j,k){},unregisterEvent:function(c,d,e){}},destruct:function(){this.__cI=this.__cJ=null;
},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="iPad",d="X11",c="MacIntel",a="MacPPC";
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__cK:function(){var o=navigator.platform;
if(o==null||o===l){o=navigator.userAgent;
}
if(o.indexOf(f)!=-1||o.indexOf(m)!=-1||o.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(h)!=-1||o.indexOf(a)!=-1||o.indexOf(c)!=-1||o.indexOf(n)!=-1||o.indexOf(g)!=-1||o.indexOf(b)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(d)!=-1||o.indexOf(j)!=-1||o.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(p){p.__cK();
}});
})();
(function(){var p="keydown",o="qx.client",n="keypress",m="NumLock",l="keyup",k="Enter",j="0",i="9",h="-",g="PageUp",bx="+",bw="PrintScreen",bv="gecko",bu="A",bt="Z",bs="Left",br="F5",bq="Down",bp="Up",bo="F11",w="F6",x="useraction",u="F3",v="keyinput",s="Insert",t="F8",q="End",r="/",E="Delete",F="*",R="cmd",N="F1",ba="F4",U="Home",bk="F2",bf="F12",J="PageDown",bn="F7",bm="Win",bl="F9",I="F10",L="Right",M="text",P="Escape",S="webkit",V="5",bc="3",bh="Meta",y="7",z="CapsLock",K="input",Y="Control",X="Space",W="Tab",be="Shift",bd="Pause",T="Unidentified",bb="qx.event.handler.Keyboard",d="mshtml|webkit",bg="6",A="off",B="Apps",O="4",e="Alt",f="mshtml",H="2",C="Scroll",D="1",G="8",Q="autoComplete",bj=",",bi="Backspace";
qx.Class.define(bb,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cl){qx.core.Object.call(this);
this.__cL=cl;
this.__cM=cl.getWindow();
if(qx.core.Variant.isSet(o,bv)){this.__cN=this.__cM;
}else{this.__cN=this.__cM.document.documentElement;
}this.__cO={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bV){if(this._identifierToKeyCodeMap[bV]){return true;
}
if(bV.length!=1){return false;
}
if(bV>=j&&bV<=i){return true;
}
if(bV>=bu&&bV<=bt){return true;
}
switch(bV){case bx:case h:case F:case r:return true;
default:return false;
}}},members:{__cP:null,__cL:null,__cM:null,__cN:null,__cO:null,__cQ:null,__cR:null,__cS:null,canHandleEvent:function(bG,bH){},registerEvent:function(bz,bA,bB){},unregisterEvent:function(bO,bP,bQ){},_fireInputEvent:function(bR,bS){var bT=this.__cT();
if(bT&&bT.offsetWidth!=0){var event=qx.event.Registration.createEvent(v,qx.event.type.KeyInput,[bR,bT,bS]);
this.__cL.dispatchEvent(bT,event);
}if(this.__cM){qx.event.Registration.fireEvent(this.__cM,x,qx.event.type.Data,[v]);
}},_fireSequenceEvent:function(cm,cn,co){var cp=this.__cT();
var cq=cm.keyCode;
var event=qx.event.Registration.createEvent(cn,qx.event.type.KeySequence,[cm,cp,co]);
this.__cL.dispatchEvent(cp,event);
if(qx.core.Variant.isSet(o,d)){if(cn==p&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cq)&&!this._emulateKeyPress[cq]){this._fireSequenceEvent(cm,n,co);
}}}if(this.__cM){qx.event.Registration.fireEvent(this.__cM,x,qx.event.type.Data,[cn]);
}},__cT:function(){var cC=this.__cL.getHandler(qx.event.handler.Focus);
var cD=cC.getActive();
if(!cD||cD.offsetWidth==0){cD=cC.getFocus();
}if(!cD||cD.offsetWidth==0){cD=this.__cL.getWindow().document.body;
}return cD;
},_initKeyObserver:function(){this.__cP=qx.lang.Function.listener(this.__cU,this);
this.__cS=qx.lang.Function.listener(this.__cW,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cN,l,this.__cP);
Event.addNativeListener(this.__cN,p,this.__cP);
Event.addNativeListener(this.__cN,n,this.__cS);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cN,l,this.__cP);
Event.removeNativeListener(this.__cN,p,this.__cP);
Event.removeNativeListener(this.__cN,n,this.__cS);

for(var bN in (this.__cR||{})){var bM=this.__cR[bN];
Event.removeNativeListener(bM.target,n,bM.callback);
}delete (this.__cR);
},__cU:qx.event.GlobalError.observeMethod(qx.core.Variant.select(o,{"mshtml":function(cr){cr=window.event||cr;
var cu=cr.keyCode;
var cs=0;
var ct=cr.type;
if(!(this.__cO[cu]==p&&ct==p)){this._idealKeyHandler(cu,cs,ct,cr);
}if(ct==p){if(this._isNonPrintableKeyCode(cu)||this._emulateKeyPress[cu]){this._idealKeyHandler(cu,cs,n,cr);
}}this.__cO[cu]=ct;
},"gecko":function(cE){var cI=this._keyCodeFix[cE.keyCode]||cE.keyCode;
var cG=0;
var cH=cE.type;
if(qx.bom.client.Platform.WIN){var cF=cI?this._keyCodeToIdentifier(cI):this._charCodeToIdentifier(cG);

if(!(this.__cO[cF]==p&&cH==p)){this._idealKeyHandler(cI,cG,cH,cE);
}this.__cO[cF]=cH;
}else{this._idealKeyHandler(cI,cG,cH,cE);
}this.__cV(cE.target,cH,cI);
},"webkit":function(cw){var cz=0;
var cx=0;
var cy=cw.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cy==l||cy==p){cz=this._charCode2KeyCode[cw.charCode]||cw.keyCode;
}else{if(this._charCode2KeyCode[cw.charCode]){cz=this._charCode2KeyCode[cw.charCode];
}else{cx=cw.charCode;
}}this._idealKeyHandler(cz,cx,cy,cw);
}else{cz=cw.keyCode;
this._idealKeyHandler(cz,cx,cy,cw);
if(cy==p){if(this._isNonPrintableKeyCode(cz)||this._emulateKeyPress[cz]){this._idealKeyHandler(cz,cx,n,cw);
}}this.__cO[cz]=cy;
}},"opera":function(cL){this.__cQ=cL.keyCode;
this._idealKeyHandler(cL.keyCode,0,cL.type,cL);
}})),__cV:qx.core.Variant.select(o,{"gecko":function(cg,ch,ci){if(ch===p&&(ci==33||ci==34||ci==38||ci==40)&&cg.type==M&&cg.tagName.toLowerCase()===K&&cg.getAttribute(Q)!==A){if(!this.__cR){this.__cR={};
}var ck=qx.core.ObjectRegistry.toHashCode(cg);

if(this.__cR[ck]){return;
}var self=this;
this.__cR[ck]={target:cg,callback:function(cJ){qx.bom.Event.stopPropagation(cJ);
self.__cW(cJ);
}};
var cj=qx.event.GlobalError.observeMethod(this.__cR[ck].callback);
qx.bom.Event.addNativeListener(cg,n,cj);
}},"default":null}),__cW:qx.event.GlobalError.observeMethod(qx.core.Variant.select(o,{"mshtml":function(ca){ca=window.event||ca;

if(this._charCode2KeyCode[ca.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[ca.keyCode],0,ca.type,ca);
}else{this._idealKeyHandler(0,ca.keyCode,ca.type,ca);
}},"gecko":function(bI){var bL=this._keyCodeFix[bI.keyCode]||bI.keyCode;
var bJ=bI.charCode;
var bK=bI.type;
this._idealKeyHandler(bL,bJ,bK,bI);
},"webkit":function(bC){if(qx.bom.client.Engine.VERSION<525.13){var bF=0;
var bD=0;
var bE=bC.type;

if(bE==l||bE==p){bF=this._charCode2KeyCode[bC.charCode]||bC.keyCode;
}else{if(this._charCode2KeyCode[bC.charCode]){bF=this._charCode2KeyCode[bC.charCode];
}else{bD=bC.charCode;
}}this._idealKeyHandler(bF,bD,bE,bC);
}else{if(this._charCode2KeyCode[bC.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bC.keyCode],0,bC.type,bC);
}else{this._idealKeyHandler(0,bC.keyCode,bC.type,bC);
}}},"opera":function(bW){var bY=bW.keyCode;
var bX=bW.type;
if(bY!=this.__cQ){this._idealKeyHandler(0,this.__cQ,bX,bW);
}else{if(this._keyCodeToIdentifierMap[bW.keyCode]){this._idealKeyHandler(bW.keyCode,0,bW.type,bW);
}else{this._idealKeyHandler(0,bW.keyCode,bW.type,bW);
}}}})),_idealKeyHandler:function(cb,cc,cd,ce){var cf;
if(cb||(!cb&&!cc)){cf=this._keyCodeToIdentifier(cb);
this._fireSequenceEvent(ce,cd,cf);
}else{cf=this._charCodeToIdentifier(cc);
this._fireSequenceEvent(ce,n,cf);
this._fireInputEvent(ce,cc);
}},_specialCharCodeMap:{8:bi,9:W,13:k,27:P,32:X},_emulateKeyPress:qx.core.Variant.select(o,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:be,17:Y,18:e,20:z,224:bh,37:bs,38:bp,39:L,40:bq,33:g,34:J,35:q,36:U,45:s,46:E,112:N,113:bk,114:u,115:ba,116:br,117:w,118:bn,119:t,120:bl,121:I,122:bo,123:bf,144:m,44:bw,145:C,19:bd,91:qx.bom.client.Platform.MAC?R:bm,92:bm,93:qx.bom.client.Platform.MAC?R:B},_numpadToCharCode:{96:j.charCodeAt(0),97:D.charCodeAt(0),98:H.charCodeAt(0),99:bc.charCodeAt(0),100:O.charCodeAt(0),101:V.charCodeAt(0),102:bg.charCodeAt(0),103:y.charCodeAt(0),104:G.charCodeAt(0),105:i.charCodeAt(0),106:F.charCodeAt(0),107:bx.charCodeAt(0),109:h.charCodeAt(0),110:bj.charCodeAt(0),111:r.charCodeAt(0)},_charCodeA:bu.charCodeAt(0),_charCodeZ:bt.charCodeAt(0),_charCode0:j.charCodeAt(0),_charCode9:i.charCodeAt(0),_isNonPrintableKeyCode:function(bU){return this._keyCodeToIdentifierMap[bU]?true:false;
},_isIdentifiableKeyCode:function(cK){if(cK>=this._charCodeA&&cK<=this._charCodeZ){return true;
}if(cK>=this._charCode0&&cK<=this._charCode9){return true;
}if(this._specialCharCodeMap[cK]){return true;
}if(this._numpadToCharCode[cK]){return true;
}if(this._isNonPrintableKeyCode(cK)){return true;
}return false;
},_keyCodeToIdentifier:function(cA){if(this._isIdentifiableKeyCode(cA)){var cB=this._numpadToCharCode[cA];

if(cB){return String.fromCharCode(cB);
}return (this._keyCodeToIdentifierMap[cA]||this._specialCharCodeMap[cA]||String.fromCharCode(cA));
}else{return T;
}},_charCodeToIdentifier:function(by){return this._specialCharCodeMap[by]||String.fromCharCode(by).toUpperCase();
},_identifierToKeyCode:function(cv){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cv]||cv.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__cQ=this.__cL=this.__cM=this.__cN=this.__cO=null;
},defer:function(a,b){qx.event.Registration.addHandler(a);
if(!a._identifierToKeyCodeMap){a._identifierToKeyCodeMap={};

for(var c in b._keyCodeToIdentifierMap){a._identifierToKeyCodeMap[b._keyCodeToIdentifierMap[c]]=parseInt(c,10);
}
for(var c in b._specialCharCodeMap){a._identifierToKeyCodeMap[b._specialCharCodeMap[c]]=parseInt(c,10);
}}
if(qx.core.Variant.isSet(o,f)){b._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(o,bv)){b._keyCodeFix={12:b._identifierToKeyCode(m)};
}else if(qx.core.Variant.isSet(o,S)){if(qx.bom.client.Engine.VERSION<525.13){b._charCode2KeyCode={63289:b._identifierToKeyCode(m),63276:b._identifierToKeyCode(g),63277:b._identifierToKeyCode(J),63275:b._identifierToKeyCode(q),63273:b._identifierToKeyCode(U),63234:b._identifierToKeyCode(bs),63232:b._identifierToKeyCode(bp),63235:b._identifierToKeyCode(L),63233:b._identifierToKeyCode(bq),63272:b._identifierToKeyCode(E),63302:b._identifierToKeyCode(s),63236:b._identifierToKeyCode(N),63237:b._identifierToKeyCode(bk),63238:b._identifierToKeyCode(u),63239:b._identifierToKeyCode(ba),63240:b._identifierToKeyCode(br),63241:b._identifierToKeyCode(w),63242:b._identifierToKeyCode(bn),63243:b._identifierToKeyCode(t),63244:b._identifierToKeyCode(bl),63245:b._identifierToKeyCode(I),63246:b._identifierToKeyCode(bo),63247:b._identifierToKeyCode(bf),63248:b._identifierToKeyCode(bw),3:b._identifierToKeyCode(k),12:b._identifierToKeyCode(m),13:b._identifierToKeyCode(k)};
}else{b._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var f="CSS1Compat",d="qx.bom.client.Feature",c="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",b="input",a="label";
qx.Bootstrap.define(d,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,XUL:false,CSS_TEXT_OVERFLOW:("textOverflow" in document.documentElement.style||"OTextOverflow" in document.documentElement.style),HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),TOUCH:("ontouchstart" in window),PLACEHOLDER:false,__cX:function(){this.QUIRKS_MODE=this.__cY();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;

try{document.createElementNS(c,a);
this.XUL=true;
}catch(e){this.XUL=false;
}var i=document.createElement(b);
this.PLACEHOLDER="placeholder" in i;
},__cY:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==f;
}}},defer:function(g){g.__cX();
}});
})();
(function(){var X="qx.mobile",W="touchend",V="touchmove",U="touchstart",T="mousemove",S="touchcancel",R="mouseup",Q="mousedown",P="mshtml",O="qx.event.handler.Touch",K="useraction",N="swipe",M="tap",J="x",I="y",L="qx.client";
qx.Class.define(O,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(H){qx.core.Object.call(this);
this.__da=H;
this.__db=H.getWindow();
this.__dc=this.__db.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},SWIPE_MIN_DISTANCE:1,SWIPE_MIN_VELOCITY:0},members:{__dd:null,__de:null,__da:null,__db:null,__dc:null,__df:null,__dg:null,__dh:null,__di:null,__dj:false,canHandleEvent:function(z,A){},registerEvent:function(a,b,c){},unregisterEvent:function(B,C,D){},__dk:function(bl,bm,bn,bo){if(!bn){bn=this.__dq(bl);
}var bm=bm||bl.type;

if(bn&&bn.nodeType){qx.event.Registration.fireEvent(bn,bm,bo||qx.event.type.Touch,[bl,bn,null,true,true]);
}qx.event.Registration.fireEvent(this.__db,K,qx.event.type.Data,[bm]);
},__dl:function(E,F,G){if(!G){G=this.__dq(E);
}var F=F||E.type;

if(F==U){this.__dm(E,G);
}else if(F==V){this.__dn(E,G);
}else if(F==W){this.__do(E,G);
}},__dm:function(Y,ba){var bb=Y.changedTouches[0];
this.__df=bb.pageX;
this.__dg=bb.pageY;
this.__dh=new Date().getTime();
this.__di=Y.changedTouches.length===1;
},__dn:function(bq,br){if(this.__di&&bq.changedTouches.length>1){this.__di=false;
}},__do:function(bc,bd){if(this.__di){var be=bc.changedTouches[0];
var bg={x:be.pageX-this.__df,y:be.pageY-this.__dg};

if(bg.x===0&&bg.y===0){this.__dk(bc,M,bd,qx.event.type.Tap);
}else{var bf=this.__dp(bc,bd,bg);

if(bf){bc.swipe=bf;
this.__dk(bc,N,bd,qx.event.type.Swipe);
}}}},__dp:function(d,f,g){var k=qx.event.handler.Touch;
var l=new Date().getTime()-this.__dh;
var n=(Math.abs(g.x)>=Math.abs(g.y))?J:I;
var h=g[n];
var i=k.SWIPE_DIRECTION[n][h<0?0:1];
var m=(l!==0)?h/l:0;
var j=null;

if(Math.abs(m)>=k.SWIPE_MIN_VELOCITY&&Math.abs(h)>=k.SWIPE_MIN_DISTANCE){j={startTime:this.__dh,duration:l,axis:n,direction:i,distance:h,velocity:m};
}return j;
},__dq:function(w){return w.target||w.srcElement;
},__dr:qx.core.Variant.select(X,{"on":function(o){var p=o.type;
var r=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(r[p]){p=r[p];
if(p==U&&this.__ds(o)){this.__dj=true;
}else if(p==W){this.__dj=false;
}var s=this.__dt(o);
var q=(p==W?[]:[s]);
o.touches=q;
o.targetTouches=q;
o.changedTouches=[s];
}return p;
},"default":qx.lang.Function.empty}),__ds:qx.core.Variant.select(X,{"on":function(bj){if(qx.core.Variant.isSet(L,P)){var bk=1;
}else{var bk=0;
}return bj.button==bk;
},"default":qx.lang.Function.empty}),__dt:qx.core.Variant.select(X,{"on":function(x){var y=this.__dq(x);
return {clientX:x.clientX,clientY:x.clientY,screenX:x.screenX,screenY:x.screenY,pageX:x.pageX,pageY:x.pageY,identifier:1,target:y};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__dd=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dc,U,this.__dd);
Event.addNativeListener(this.__dc,V,this.__dd);
Event.addNativeListener(this.__dc,W,this.__dd);
Event.addNativeListener(this.__dc,S,this.__dd);
},_initMouseObserver:qx.core.Variant.select(X,{"on":function(){if(!qx.bom.client.Feature.TOUCH){this.__de=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dc,Q,this.__de);
Event.addNativeListener(this.__dc,T,this.__de);
Event.addNativeListener(this.__dc,R,this.__de);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dc,U,this.__dd);
Event.removeNativeListener(this.__dc,V,this.__dd);
Event.removeNativeListener(this.__dc,W,this.__dd);
Event.removeNativeListener(this.__dc,S,this.__dd);
},_stopMouseObserver:qx.core.Variant.select(X,{"on":function(){if(!qx.bom.client.Feature.TOUCH){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dc,Q,this.__de);
Event.removeNativeListener(this.__dc,T,this.__de);
Event.removeNativeListener(this.__dc,R,this.__de);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(v){this._commonTouchEventHandler(v);
}),_onMouseEvent:qx.core.Variant.select(X,{"on":qx.event.GlobalError.observeMethod(function(bh){if(!qx.bom.client.Feature.TOUCH){if(bh.type==T&&!this.__dj){return;
}var bi=this.__dr(bh);
this._commonTouchEventHandler(bh,bi);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(t,u){this.__dk(t,u);
this.__dl(t,u);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__da=this.__db=this.__dc=null;
},defer:function(bp){qx.event.Registration.addHandler(bp);
if(qx.bom.client.Feature.TOUCH){document.addEventListener(V,function(e){e.preventDefault();
});
qx.event.Registration.getManager(document).getHandler(bp);
}}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Bootstrap.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__du:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__dv:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__du){J.push(I);
}var L=new RegExp(l+J.join(C).replace(/\./g,r)+H,u);

if(!L.test(K)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__du[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__dv();
}});
})();
(function(){var X="qx.client",W="mouseup",V="click",U="mousedown",T="contextmenu",S="mousewheel",R="dblclick",Q="mshtml",P="mouseover",O="mouseout",J="DOMMouseScroll",N="mousemove",M="on",I="mshtml|webkit|opera",H="useraction",L="gecko|webkit",K="qx.event.handler.Mouse";
qx.Class.define(K,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(E){qx.core.Object.call(this);
this.__dw=E;
this.__dx=E.getWindow();
this.__dy=this.__dx.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dz:null,__dA:null,__dB:null,__dC:null,__dD:null,__dw:null,__dx:null,__dy:null,canHandleEvent:function(F,G){},registerEvent:qx.bom.client.System.IPHONE?
function(v,w,x){v[M+w]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(m,n,o){m[M+n]=undefined;
}:qx.lang.Function.returnNull,__dE:function(y,z,A){if(!A){A=y.target||y.srcElement;
}if(A&&A.nodeType){qx.event.Registration.fireEvent(A,z||y.type,z==S?qx.event.type.MouseWheel:qx.event.type.Mouse,[y,A,null,true,true]);
}qx.event.Registration.fireEvent(this.__dx,H,qx.event.type.Data,[z||y.type]);
},_initButtonObserver:function(){this.__dz=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dy,U,this.__dz);
Event.addNativeListener(this.__dy,W,this.__dz);
Event.addNativeListener(this.__dy,V,this.__dz);
Event.addNativeListener(this.__dy,R,this.__dz);
Event.addNativeListener(this.__dy,T,this.__dz);
},_initMoveObserver:function(){this.__dA=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dy,N,this.__dA);
Event.addNativeListener(this.__dy,P,this.__dA);
Event.addNativeListener(this.__dy,O,this.__dA);
},_initWheelObserver:function(){this.__dB=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var d=qx.core.Variant.isSet(X,I)?S:J;
var e=qx.core.Variant.isSet(X,Q)?this.__dy:this.__dx;
Event.addNativeListener(e,d,this.__dB);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dy,U,this.__dz);
Event.removeNativeListener(this.__dy,W,this.__dz);
Event.removeNativeListener(this.__dy,V,this.__dz);
Event.removeNativeListener(this.__dy,R,this.__dz);
Event.removeNativeListener(this.__dy,T,this.__dz);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dy,N,this.__dA);
Event.removeNativeListener(this.__dy,P,this.__dA);
Event.removeNativeListener(this.__dy,O,this.__dA);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var Y=qx.core.Variant.isSet(X,I)?S:J;
var ba=qx.core.Variant.isSet(X,Q)?this.__dy:this.__dx;
Event.removeNativeListener(ba,Y,this.__dB);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(g){this.__dE(g);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(B){var C=B.type;
var D=B.target||B.srcElement;
if(qx.core.Variant.isSet(X,L)){if(D&&D.nodeType==3){D=D.parentNode;
}}
if(this.__dF){this.__dF(B,C,D);
}
if(this.__dH){this.__dH(B,C,D);
}this.__dE(B,C,D);

if(this.__dG){this.__dG(B,C,D);
}
if(this.__dI){this.__dI(B,C,D);
}this.__dC=C;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(f){this.__dE(f,S);
}),__dF:qx.core.Variant.select(X,{"webkit":function(s,t,u){if(qx.bom.client.Engine.VERSION<530){if(t==T){this.__dE(s,W,u);
}}},"default":null}),__dG:qx.core.Variant.select(X,{"opera":function(p,q,r){if(q==W&&p.button==2){this.__dE(p,T,r);
}},"default":null}),__dH:qx.core.Variant.select(X,{"mshtml":function(a,b,c){if(b==W&&this.__dC==V){this.__dE(a,U,c);
}else if(b==R){this.__dE(a,V,c);
}},"default":null}),__dI:qx.core.Variant.select(X,{"mshtml":null,"default":function(i,j,k){switch(j){case U:this.__dD=k;
break;
case W:if(k!==this.__dD){var l=qx.dom.Hierarchy.getCommonParent(k,this.__dD);
this.__dE(i,V,l);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dw=this.__dx=this.__dy=this.__dD=null;
},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var h="-",g="qx.event.handler.Element";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(y){qx.core.Object.call(this);
this._manager=y;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(m,n){},registerEvent:function(a,b,c){var f=qx.core.ObjectRegistry.toHashCode(a);
var d=f+h+b;
var e=qx.lang.Function.listener(this._onNative,this,d);
qx.bom.Event.addNativeListener(a,b,e);
this._registeredEvents[d]={element:a,type:b,listener:e};
},unregisterEvent:function(r,s,t){var w=this._registeredEvents;

if(!w){return;
}var x=qx.core.ObjectRegistry.toHashCode(r);
var u=x+h+s;
var v=this._registeredEvents[u];

if(v){qx.bom.Event.removeNativeListener(r,s,v.listener);
}delete this._registeredEvents[u];
},_onNative:qx.event.GlobalError.observeMethod(function(i,j){var l=this._registeredEvents;

if(!l){return;
}var k=l[j];
qx.event.Registration.fireNonBubblingEvent(k.element,k.type,qx.event.type.Native,[i]);
})},destruct:function(){var o;
var p=this._registeredEvents;

for(var q in p){o=p[q];
qx.bom.Event.removeNativeListener(o.element,o.type,o.listener);
}this._manager=this._registeredEvents=null;
},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__dJ=d;
this.__dK={};
qx.event.handler.Appear.__dL[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__dL:{},refresh:function(){var w=this.__dL;

for(var x in w){w[x].refresh();
}}},members:{__dJ:null,__dK:null,canHandleEvent:function(f,g){},registerEvent:function(h,i,j){var k=qx.core.ObjectRegistry.toHashCode(h)+i;
var l=this.__dK;

if(l&&!l[k]){l[k]=h;
h.$$displayed=h.offsetWidth>0;
}},unregisterEvent:function(r,s,t){var u=qx.core.ObjectRegistry.toHashCode(r)+s;
var v=this.__dK;

if(!v){return;
}
if(v[u]){delete v[u];
}},refresh:function(){var p=this.__dK;
var q;

for(var o in p){q=p[o];
var m=q.offsetWidth>0;

if((!!q.$$displayed)!==m){q.$$displayed=m;
var n=qx.event.Registration.createEvent(m?a:b);
this.__dJ.dispatchEvent(q,n);
}}}},destruct:function(){this.__dJ=this.__dK=null;
delete qx.event.handler.Appear.__dL[this.$$hash];
},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var r="mshtml",q="",p="qx.client",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="' ",d="div",c="></";
qx.Class.define(f,{statics:{__dM:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__dN:{},__dO:{},allowCreationWithMarkup:function(C){if(!C){C=window;
}var D=C.location.href;

if(qx.bom.Element.__dO[D]==undefined){try{C.document.createElement(g);
qx.bom.Element.__dO[D]=true;
}catch(e){qx.bom.Element.__dO[D]=false;
}}return qx.bom.Element.__dO[D];
},getHelperElement:function(K){if(!K){K=window;
}var M=K.location.href;

if(!qx.bom.Element.__dN[M]){var L=qx.bom.Element.__dN[M]=K.document.createElement(d);
if(qx.bom.client.Engine.WEBKIT){L.style.display=h;
K.document.body.appendChild(L);
}}return qx.bom.Element.__dN[M];
},create:function(name,v,w){if(!w){w=window;
}
if(!name){throw new Error("The tag name is missing!");
}var y=this.__dM;
var x=q;

for(var A in v){if(y[A]){x+=A+k+v[A]+b;
}}var B;
if(x!=q){if(qx.bom.Element.allowCreationWithMarkup(w)){B=w.document.createElement(m+name+o+x+n);
}else{var z=qx.bom.Element.getHelperElement(w);
z.innerHTML=m+name+o+x+c+name+n;
B=z.firstChild;
}}else{B=w.document.createElement(name);
}
for(var A in v){if(!y[A]){qx.bom.element.Attribute.set(B,A,v[A]);
}}return B;
},empty:function(bg){return bg.innerHTML=q;
},addListener:function(ba,bb,bc,self,bd){return qx.event.Registration.addListener(ba,bb,bc,self,bd);
},removeListener:function(bh,bi,bj,self,bk){return qx.event.Registration.removeListener(bh,bi,bj,self,bk);
},removeListenerById:function(s,t){return qx.event.Registration.removeListenerById(s,t);
},hasListener:function(G,H,I){return qx.event.Registration.hasListener(G,H,I);
},focus:function(F){qx.event.Registration.getManager(F).getHandler(qx.event.handler.Focus).focus(F);
},blur:function(E){qx.event.Registration.getManager(E).getHandler(qx.event.handler.Focus).blur(E);
},activate:function(a){qx.event.Registration.getManager(a).getHandler(qx.event.handler.Focus).activate(a);
},deactivate:function(J){qx.event.Registration.getManager(J).getHandler(qx.event.handler.Focus).deactivate(J);
},capture:function(be,bf){qx.event.Registration.getManager(be).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(be,bf);
},releaseCapture:function(u){qx.event.Registration.getManager(u).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(u);
},clone:function(N,O){var R;

if(O||(qx.core.Variant.isSet(p,r)&&!qx.xml.Document.isXmlDocument(N))){var V=qx.event.Registration.getManager(N);
var P=qx.dom.Hierarchy.getDescendants(N);
P.push(N);
}if(qx.core.Variant.isSet(p,r)){for(var i=0,l=P.length;i<l;i++){V.toggleAttachedEvents(P[i],false);
}}var R=N.cloneNode(true);
if(qx.core.Variant.isSet(p,r)){for(var i=0,l=P.length;i<l;i++){V.toggleAttachedEvents(P[i],true);
}}if(O===true){var Y=qx.dom.Hierarchy.getDescendants(R);
Y.push(R);
var Q,T,X,S;

for(var i=0,W=P.length;i<W;i++){X=P[i];
Q=V.serializeListeners(X);

if(Q.length>0){T=Y[i];

for(var j=0,U=Q.length;j<U;j++){S=Q[j];
V.addListener(T,S.type,S.handler,S.self,S.capture);
}}}}return R;
}}});
})();
(function(){var X="change",W="input",V="qx.client",U="text",T="password",S="checkbox",R="radio",Q="textarea",P="keypress",O="opera",I="propertychange",N="blur",L="keydown",H="keyup",G="select-multiple",K="checked",J="value",M="select",F="qx.event.handler.Input";
qx.Class.define(F,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(V,O)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__dP:false,__dQ:null,__dR:null,canHandleEvent:function(r,s){var t=r.tagName.toLowerCase();

if(s===W&&(t===W||t===Q)){return true;
}
if(s===X&&(t===W||t===Q||t===M)){return true;
}return false;
},registerEvent:qx.core.Variant.select(V,{"mshtml":function(ba,bb,bc){if(!ba.__dS){var bd=ba.tagName.toLowerCase();
var be=ba.type;

if(be===U||be===T||bd===Q||be===S||be===R){qx.bom.Event.addNativeListener(ba,I,this._onPropertyWrapper);
}
if(be!==S&&be!==R){qx.bom.Event.addNativeListener(ba,X,this._onChangeValueWrapper);
}
if(be===U||be===T){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,ba);
qx.bom.Event.addNativeListener(ba,P,this._onKeyPressWrapped);
}ba.__dS=true;
}},"default":function(B,C,D){if(C===W){this.__dT(B);
}else if(C===X){if(B.type===R||B.type===S){qx.bom.Event.addNativeListener(B,X,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(B,X,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(V,O)){if(B.type===U||B.type===T){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,B);
qx.bom.Event.addNativeListener(B,P,this._onKeyPressWrapped);
}}}}}),__dT:qx.core.Variant.select(V,{"mshtml":null,"webkit":function(z){var A=z.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&A==Q){qx.bom.Event.addNativeListener(z,P,this._onInputWrapper);
}qx.bom.Event.addNativeListener(z,W,this._onInputWrapper);
},"opera":function(E){qx.bom.Event.addNativeListener(E,H,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(E,L,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(E,N,this._onBlurWrapper);
qx.bom.Event.addNativeListener(E,W,this._onInputWrapper);
},"default":function(c){qx.bom.Event.addNativeListener(c,W,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(V,{"mshtml":function(m,n){if(m.__dS){var p=m.tagName.toLowerCase();
var q=m.type;

if(q===U||q===T||p===Q||q===S||q===R){qx.bom.Event.removeNativeListener(m,I,this._onPropertyWrapper);
}
if(q!==S&&q!==R){qx.bom.Event.removeNativeListener(m,X,this._onChangeValueWrapper);
}
if(q===U||q===T){qx.bom.Event.removeNativeListener(m,P,this._onKeyPressWrapped);
}
try{delete m.__dS;
}catch(k){m.__dS=null;
}}},"default":function(a,b){if(b===W){this.__dT(a);
}else if(b===X){if(a.type===R||a.type===S){qx.bom.Event.removeNativeListener(a,X,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(a,X,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(V,O)){if(a.type===U||a.type===T){qx.bom.Event.removeNativeListener(a,P,this._onKeyPressWrapped);
}}}}),__dU:qx.core.Variant.select(V,{"mshtml":null,"webkit":function(h){var j=h.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&j==Q){qx.bom.Event.removeNativeListener(h,P,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(h,W,this._onInputWrapper);
},"opera":function(u){qx.bom.Event.removeNativeListener(u,H,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(u,L,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(u,N,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(u,W,this._onInputWrapper);
},"default":function(bf){qx.bom.Event.removeNativeListener(bf,W,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(V,{"mshtml|opera":function(e,v){if(e.keyCode===13){if(v.value!==this.__dR){this.__dR=v.value;
qx.event.Registration.fireEvent(v,X,qx.event.type.Data,[v.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(V,{"opera":function(e){if(e.keyCode===13){this.__dP=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(V,{"opera":function(e){if(e.keyCode===13){this.__dP=false;
}},"default":null}),_onBlur:qx.core.Variant.select(V,{"opera":function(e){if(this.__dQ){window.clearTimeout(this.__dQ);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var Y=e.target;
if(!this.__dP){if(qx.core.Variant.isSet(V,O)){this.__dQ=window.setTimeout(function(){qx.event.Registration.fireEvent(Y,W,qx.event.type.Data,[Y.value]);
},0);
}else{qx.event.Registration.fireEvent(Y,W,qx.event.type.Data,[Y.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var y=e.target||e.srcElement;
var x=y.value;

if(y.type===G){var x=[];

for(var i=0,o=y.options,l=o.length;i<l;i++){if(o[i].selected){x.push(o[i].value);
}}}qx.event.Registration.fireEvent(y,X,qx.event.type.Data,[x]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var w=e.target;

if(w.type===R){if(w.checked){qx.event.Registration.fireEvent(w,X,qx.event.type.Data,[w.value]);
}}else{qx.event.Registration.fireEvent(w,X,qx.event.type.Data,[w.checked]);
}}),_onProperty:qx.core.Variant.select(V,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var d=e.target||e.srcElement;
var f=e.propertyName;

if(f===J&&(d.type===U||d.type===T||d.tagName.toLowerCase()===Q)){if(!d.$$inValueSet){qx.event.Registration.fireEvent(d,W,qx.event.type.Data,[d.value]);
}}else if(f===K){if(d.type===S){qx.event.Registration.fireEvent(d,X,qx.event.type.Data,[d.checked]);
}else if(d.checked){qx.event.Registration.fireEvent(d,X,qx.event.type.Data,[d.value]);
}}}),"default":function(){}})},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var v="",u="select",t="soft",s="off",r="qx.client",q="wrap",p="text",o="mshtml",n="number",m="checkbox",d="select-one",k="input",g="option",c="value",b="radio",f="qx.bom.Input",e="nowrap",h="textarea",a="auto",j="normal";
qx.Class.define(f,{statics:{__dV:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(F,G,H){{};
var G=G?qx.lang.Object.clone(G):{};
var I;

if(F===h||F===u){I=F;
}else{I=k;
G.type=F;
}return qx.bom.Element.create(I,G,H);
},setValue:function(w,x){var C=w.nodeName.toLowerCase();
var z=w.type;
var Array=qx.lang.Array;
var D=qx.lang.Type;

if(typeof x===n){x+=v;
}
if((z===m||z===b)){if(D.isArray(x)){w.checked=Array.contains(x,w.value);
}else{w.checked=w.value==x;
}}else if(C===u){var y=D.isArray(x);
var E=w.options;
var A,B;

for(var i=0,l=E.length;i<l;i++){A=E[i];
B=A.getAttribute(c);

if(B==null){B=A.text;
}A.selected=y?Array.contains(x,B):x==B;
}
if(y&&x.length==0){w.selectedIndex=-1;
}}else if(z===p&&qx.core.Variant.isSet(r,o)){w.$$inValueSet=true;
w.value=x;
w.$$inValueSet=null;
}else{w.value=x;
}},getValue:function(J){var P=J.nodeName.toLowerCase();

if(P===g){return (J.attributes.value||{}).specified?J.value:J.text;
}
if(P===u){var K=J.selectedIndex;
if(K<0){return null;
}var Q=[];
var S=J.options;
var R=J.type==d;
var O=qx.bom.Input;
var N;
for(var i=R?K:0,M=R?K+1:S.length;i<M;i++){var L=S[i];

if(L.selected){N=O.getValue(L);
if(R){return N;
}Q.push(N);
}}return Q;
}else{return (J.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Variant.select(r,{"mshtml":function(T,U){T.wrap=U?t:s;
},"gecko|webkit":function(X,Y){var bb=Y?t:s;
var ba=Y?v:a;
X.setAttribute(q,bb);
X.style.overflow=ba;
},"default":function(V,W){V.style.whiteSpace=W?j:e;
}})}});
})();
(function(){var b="qx.client",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Variant.select(b,{"opera":function(p){if(qx.bom.client.Engine.VERSION<9.5){return (p||window).document.body.clientWidth;
}else{var q=(p||window).document;
return qx.bom.Document.isStandardMode(p)?q.documentElement.clientWidth:q.body.clientWidth;
}},"webkit":function(e){if(qx.bom.client.Engine.VERSION<523.15){return (e||window).innerWidth;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;
}},"default":function(g){var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}}),getHeight:qx.core.Variant.select(b,{"opera":function(j){if(qx.bom.client.Engine.VERSION<9.5){return (j||window).document.body.clientHeight;
}else{var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientHeight:k.body.clientHeight;
}},"webkit":function(c){if(qx.bom.client.Engine.VERSION<523.15){return (c||window).innerHeight;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientHeight:d.body.clientHeight;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientHeight:o.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(b,{"mshtml":function(s){var t=(s||window).document;
return t.documentElement.scrollLeft||t.body.scrollLeft;
},"default":function(i){return (i||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(b,{"mshtml":function(l){var m=(l||window).document;
return m.documentElement.scrollTop||m.body.scrollTop;
},"default":function(r){return (r||window).pageYOffset;
}})}});
})();
(function(){var j="",i="undefined",h="qx.client",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__dW:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(G){var H=[];
var J=this.__dW.runtime;

for(var I in G){if(!J[I]){H.push(I,t,G[I],y);
}}return H.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(D,name){var F=this.__dW;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(K,name){var M=this.__dW;
var L;
name=M.names[name]||name;
if(M.property[name]){L=K[name];

if(typeof M.propertyDefault[name]!==i&&L==M.propertyDefault[name]){if(typeof M.bools[name]===i){return null;
}else{return L;
}}}else{L=K.getAttribute(name);
}if(M.bools[name]){return !!L;
}return L;
}}),set:function(z,name,A){var B=this.__dW;
name=B.names[name]||name;
if(B.bools[name]){A=!!A;
}if(B.property[name]&&(!(z[name]===undefined)||B.qxProperties[name])){if(A==null){if(B.removeableProperties[name]){z.removeAttribute(name);
return;
}else if(typeof B.propertyDefault[name]!==i){A=B.propertyDefault[name];
}}z[name]=A;
}else{if(A===true){z.setAttribute(name,name);
}else if(A===false||A===null){z.removeAttribute(name);
}else{z.setAttribute(name,A);
}}},reset:function(C,name){this.set(C,name,null);
}}});
})();
(function(){var a="qx.lang.Object";
qx.Class.define(a,{statics:{empty:function(n){{};

for(var o in n){if(n.hasOwnProperty(o)){delete n[o];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(p){{};
return p.__count__===0;
}:
function(G){{};

for(var H in G){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(I,J){{};
return I.__count__>=J;
}:
function(t,u){{};

if(u<=0){return true;
}var length=0;

for(var v in t){if((++length)>=u){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(q){{};
var s=[];
var r=this.getKeys(q);

for(var i=0,l=r.length;i<l;i++){s.push(q[r[i]]);
}return s;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(g,h){{};
return qx.lang.Object.mergeWith(g,h,false);
},merge:function(B,C){{};
var D=arguments.length;

for(var i=1;i<D;i++){qx.lang.Object.mergeWith(B,arguments[i]);
}return B;
},clone:function(j){{};
var k={};

for(var m in j){k[m]=j[m];
}return k;
},invert:function(y){{};
var z={};

for(var A in y){z[y[A].toString()]=A;
}return z;
},getKeyFromValue:function(b,c){{};

for(var d in b){if(b.hasOwnProperty(d)&&b[d]===c){return d;
}}return null;
},contains:function(E,F){{};
return this.getKeyFromValue(E,F)!==null;
},select:function(e,f){{};
return f[e];
},fromArray:function(w){{};
var x={};

for(var i=0,l=w.length;i<l;i++){{};
x[w[i].toString()]=true;
}return x;
}}});
})();
(function(){var p="default",o="native",n="",m=" ",k="\\b",j="(\\s|$)",h="(^|\\s)",g="g",f="qx.bom.element.Class",e="$2",d="\\b|\\b";
qx.Class.define(f,{statics:{__dX:/\s+/g,__dY:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?o:p,{"native":function(r,name){r.classList.add(name);
return name;
},"default":function(O,name){if(!this.has(O,name)){O.className+=(O.className?m:n)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?o:p,{"native":function(x,y){for(var i=0;i<y.length;i++){x.classList.add(y[i]);
}return x.className;
},"default":function(z,A){var B={};
var D;
var C=z.className;

if(C){D=C.split(this.__dX);

for(var i=0,l=D.length;i<l;i++){B[D[i]]=true;
}
for(var i=0,l=A.length;i<l;i++){if(!B[A[i]]){D.push(A[i]);
}}}else{D=A;
}return z.className=D.join(m);
}}),get:function(q){return q.className;
},has:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?o:p,{"native":function(w,name){return w.classList.contains(name);
},"default":function(I,name){var J=new RegExp(h+name+j);
return J.test(I.className);
}}),remove:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?o:p,{"native":function(v,name){v.classList.remove(name);
return name;
},"default":function(G,name){var H=new RegExp(h+name+j);
G.className=G.className.replace(H,e);
return name;
}}),removeClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?o:p,{"native":function(M,N){for(var i=0;i<N.length;i++){M.classList.remove(N[i]);
}return M.className;
},"default":function(a,b){var c=new RegExp(k+b.join(d)+k,g);
return a.className=a.className.replace(c,n).replace(this.__dY,n).replace(this.__dX,m);
}}),replace:function(s,t,u){this.remove(s,t);
return this.add(s,u);
},toggle:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?o:p,{"native":function(E,name,F){if(F===undefined){E.classList.toggle(name);
}else{F?this.add(E,name):this.remove(E,name);
}return name;
},"default":function(K,name,L){if(L==null){L=!this.has(K,name);
}L?this.add(K,name):this.remove(K,name);
return name;
}})}});
})();
(function(){var x="borderTopWidth",w="borderLeftWidth",v="marginTop",u="marginLeft",t="scroll",s="qx.client",r="border-box",q="borderBottomWidth",p="borderRightWidth",o="auto",M="padding",L="qx.bom.element.Location",K="paddingLeft",J="static",I="marginBottom",H="visible",G="BODY",F="paddingBottom",E="paddingTop",D="marginRight",B="position",C="margin",z="overflow",A="paddingRight",y="border";
qx.Class.define(L,{statics:{__ea:function(V,W){return qx.bom.element.Style.get(V,W,qx.bom.element.Style.COMPUTED_MODE,false);
},__eb:function(bK,bL){return parseInt(qx.bom.element.Style.get(bK,bL,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ec:function(ba){var bd=0,top=0;
if(ba.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bc=qx.dom.Node.getWindow(ba);
bd-=qx.bom.Viewport.getScrollLeft(bc);
top-=qx.bom.Viewport.getScrollTop(bc);
}else{var bb=qx.dom.Node.getDocument(ba).body;
ba=ba.parentNode;
while(ba&&ba!=bb){bd+=ba.scrollLeft;
top+=ba.scrollTop;
ba=ba.parentNode;
}}return {left:bd,top:top};
},__ed:qx.core.Variant.select(s,{"mshtml":function(bj){var bl=qx.dom.Node.getDocument(bj);
var bk=bl.body;
var bm=0;
var top=0;
bm-=bk.clientLeft+bl.documentElement.clientLeft;
top-=bk.clientTop+bl.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bm+=this.__eb(bk,w);
top+=this.__eb(bk,x);
}return {left:bm,top:top};
},"webkit":function(by){var bA=qx.dom.Node.getDocument(by);
var bz=bA.body;
var bB=bz.offsetLeft;
var top=bz.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bB+=this.__eb(bz,w);
top+=this.__eb(bz,x);
}return {left:bB,top:top};
},"gecko":function(i){var j=qx.dom.Node.getDocument(i).body;
var k=j.offsetLeft;
var top=j.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){k+=this.__eb(j,u);
top+=this.__eb(j,v);
}if(qx.bom.element.BoxSizing.get(j)!==r){k+=this.__eb(j,w);
top+=this.__eb(j,x);
}return {left:k,top:top};
},"default":function(l){var m=qx.dom.Node.getDocument(l).body;
var n=m.offsetLeft;
var top=m.offsetTop;
return {left:n,top:top};
}}),__ee:qx.core.Variant.select(s,{"mshtml|webkit":function(be){var bg=qx.dom.Node.getDocument(be);
if(be.getBoundingClientRect){var bh=be.getBoundingClientRect();
var bi=bh.left;
var top=bh.top;
}else{var bi=be.offsetLeft;
var top=be.offsetTop;
be=be.offsetParent;
var bf=bg.body;
while(be&&be!=bf){bi+=be.offsetLeft;
top+=be.offsetTop;
bi+=this.__eb(be,w);
top+=this.__eb(be,x);
be=be.offsetParent;
}}return {left:bi,top:top};
},"gecko":function(N){if(N.getBoundingClientRect){var Q=N.getBoundingClientRect();
var R=Math.round(Q.left);
var top=Math.round(Q.top);
}else{var R=0;
var top=0;
var O=qx.dom.Node.getDocument(N).body;
var P=qx.bom.element.BoxSizing;

if(P.get(N)!==r){R-=this.__eb(N,w);
top-=this.__eb(N,x);
}
while(N&&N!==O){R+=N.offsetLeft;
top+=N.offsetTop;
if(P.get(N)!==r){R+=this.__eb(N,w);
top+=this.__eb(N,x);
}if(N.parentNode&&this.__ea(N.parentNode,z)!=H){R+=this.__eb(N.parentNode,w);
top+=this.__eb(N.parentNode,x);
}N=N.offsetParent;
}}return {left:R,top:top};
},"default":function(bE){var bG=0;
var top=0;
var bF=qx.dom.Node.getDocument(bE).body;
while(bE&&bE!==bF){bG+=bE.offsetLeft;
top+=bE.offsetTop;
bE=bE.offsetParent;
}return {left:bG,top:top};
}}),get:function(bp,bq){if(bp.tagName==G){var location=this.__ef(bp);
var bx=location.left;
var top=location.top;
}else{var br=this.__ed(bp);
var bw=this.__ee(bp);
var scroll=this.__ec(bp);
var bx=bw.left+br.left-scroll.left;
var top=bw.top+br.top-scroll.top;
}var bs=bx+bp.offsetWidth;
var bt=top+bp.offsetHeight;

if(bq){if(bq==M||bq==t){var bu=qx.bom.element.Overflow.getX(bp);

if(bu==t||bu==o){bs+=bp.scrollWidth-bp.offsetWidth+this.__eb(bp,w)+this.__eb(bp,p);
}var bv=qx.bom.element.Overflow.getY(bp);

if(bv==t||bv==o){bt+=bp.scrollHeight-bp.offsetHeight+this.__eb(bp,x)+this.__eb(bp,q);
}}
switch(bq){case M:bx+=this.__eb(bp,K);
top+=this.__eb(bp,E);
bs-=this.__eb(bp,A);
bt-=this.__eb(bp,F);
case t:bx-=bp.scrollLeft;
top-=bp.scrollTop;
bs-=bp.scrollLeft;
bt-=bp.scrollTop;
case y:bx+=this.__eb(bp,w);
top+=this.__eb(bp,x);
bs-=this.__eb(bp,p);
bt-=this.__eb(bp,q);
break;
case C:bx-=this.__eb(bp,u);
top-=this.__eb(bp,v);
bs+=this.__eb(bp,D);
bt+=this.__eb(bp,I);
break;
}}return {left:bx,top:top,right:bs,bottom:bt};
},__ef:qx.core.Variant.select(s,{"default":function(g){var top=g.offsetTop+this.__eb(g,v);
var h=g.offsetLeft+this.__eb(g,u);
return {left:h,top:top};
},"mshtml":function(bM){var top=bM.offsetTop;
var bN=bM.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__eb(bM,v);
bN+=this.__eb(bM,u);
}return {left:bN,top:top};
},"gecko":function(bn){var top=bn.offsetTop+this.__eb(bn,v)+this.__eb(bn,w);
var bo=bn.offsetLeft+this.__eb(bn,u)+this.__eb(bn,x);
return {left:bo,top:top};
}}),getLeft:function(X,Y){return this.get(X,Y).left;
},getTop:function(bO,bP){return this.get(bO,bP).top;
},getRight:function(bH,bI){return this.get(bH,bI).right;
},getBottom:function(bC,bD){return this.get(bC,bD).bottom;
},getRelative:function(a,b,c,d){var f=this.get(a,c);
var e=this.get(b,d);
return {left:f.left-e.left,top:f.top-e.top,right:f.right-e.right,bottom:f.bottom-e.bottom};
},getPosition:function(bJ){return this.getRelative(bJ,this.getOffsetParent(bJ));
},getOffsetParent:function(S){var U=S.offsetParent||document.body;
var T=qx.bom.element.Style;

while(U&&(!/^body|html$/i.test(U.tagName)&&T.get(U,B)===J)){U=U.offsetParent;
}return U;
}}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(y){if(!y){return k;
}var D=y.left;
var top=y.top;
var C=y.width;
var B=y.height;
var z,A;

if(D==null){z=(C==null?n:C+m);
D=n;
}else{z=(C==null?n:D+C+m);
D=D+m;
}
if(top==null){A=(B==null?n:B+m);
top=n;
}else{A=(B==null?n:top+B+m);
top=top+m;
}return d+top+l+z+l+A+l+D+i;
},get:function(p,q){var s=qx.bom.element.Style.get(p,c,q,false);
var x,top,v,u;
var r,t;

if(typeof s===e&&s!==n&&s!==h){s=qx.lang.String.trim(s);
if(/\((.*)\)/.test(s)){var w=RegExp.$1.split(l);
top=qx.lang.String.trim(w[0]);
r=qx.lang.String.trim(w[1]);
t=qx.lang.String.trim(w[2]);
x=qx.lang.String.trim(w[3]);
if(x===n){x=null;
}
if(top===n){top=null;
}
if(r===n){r=null;
}
if(t===n){t=null;
}if(top!=null){top=parseInt(top,10);
}
if(r!=null){r=parseInt(r,10);
}
if(t!=null){t=parseInt(t,10);
}
if(x!=null){x=parseInt(x,10);
}if(r!=null&&x!=null){v=r-x;
}else if(r!=null){v=r;
}
if(t!=null&&top!=null){u=t-top;
}else if(t!=null){u=t;
}}else{throw new Error("Could not parse clip string: "+s);
}}return {left:x||null,top:top||null,width:v||null,height:u||null};
},set:function(E,F){if(!F){E.style.clip=a;
return;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?n:J+m);
K=n;
}else{G=(J==null?n:K+J+m);
K=K+m;
}
if(top==null){H=(I==null?n:I+m);
top=n;
}else{H=(I==null?n:top+I+m);
top=top+m;
}E.style.clip=j+top+l+G+l+H+l+K+g;
},reset:function(o){o.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__eg:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(o){return f+(this.__eg[o]||o)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(p,q){p.style.cursor=this.__eg[q]||q;
},reset:function(l){l.style.cursor=g;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="opacity:",i="opacity",h="filter",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Variant.select(l,{"mshtml":function(A){if(A>=1){A=1;
}
if(A<0.00001){A=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return j+A+k;
}else{return d+(A*100)+f;
}},"gecko":function(w){if(w>=1){w=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return b+w+k;
}else{return j+w+k;
}},"default":function(v){if(v>=1){return m;
}return j+v+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(r,s){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(s>=1){s=m;
}r.style.opacity=s;
}else{var t=qx.bom.element.Style.get(r,h,qx.bom.element.Style.COMPUTED_MODE,false);

if(s>=1){s=1;
}
if(s<0.00001){s=0;
}if(!r.currentStyle||!r.currentStyle.hasLayout){r.style.zoom=1;
}r.style.filter=t.replace(/alpha\([^\)]*\)/gi,m)+c+s*100+e;
}},"gecko":function(n,o){if(o>=1){o=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){n.style.MozOpacity=o;
}else{n.style.opacity=o;
}},"default":function(p,q){if(q>=1){q=m;
}p.style.opacity=q;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(E){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){E.style.opacity=m;
}else{var F=qx.bom.element.Style.get(E,h,qx.bom.element.Style.COMPUTED_MODE,false);
E.style.filter=F.replace(/alpha\([^\)]*\)/gi,m);
}},"gecko":function(H){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){H.style.MozOpacity=m;
}else{H.style.opacity=m;
}},"default":function(u){u.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(I,J){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var K=qx.bom.element.Style.get(I,i,J,false);

if(K!=null){return parseFloat(K);
}return 1.0;
}else{var L=qx.bom.element.Style.get(I,h,J,false);

if(L){var K=L.match(/alpha\(opacity=(.*)\)/);

if(K&&K[1]){return parseFloat(K[1])/100;
}}return 1.0;
}},"gecko":function(B,C){var D=qx.bom.element.Style.get(B,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?g:i,C,false);

if(D==0.999999){D=1.0;
}
if(D!=null){return parseFloat(D);
}return 1.0;
},"default":function(x,y){var z=qx.bom.element.Style.get(x,i,y,false);

if(z!=null){return parseFloat(z);
}return 1.0;
}})},defer:function(G){G.SUPPORT_CSS3_OPACITY=(typeof document.documentElement.style.opacity=="string");
}});
})();
(function(){var r="qx.client",q="",p="boxSizing",o="box-sizing",n=":",m="border-box",k="qx.bom.element.BoxSizing",j="KhtmlBoxSizing",h="-moz-box-sizing",g="WebkitBoxSizing",d=";",f="-khtml-box-sizing",e="content-box",c="-webkit-box-sizing",b="MozBoxSizing";
qx.Class.define(k,{statics:{__eh:qx.core.Variant.select(r,{"mshtml":null,"webkit":[p,j,g],"gecko":[b],"opera":[p]}),__ei:qx.core.Variant.select(r,{"mshtml":null,"webkit":[o,f,c],"gecko":[h],"opera":[o]}),__ej:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__ek:function(F){var G=this.__ej;
return G.tags[F.tagName.toLowerCase()]||G.types[F.type];
},compile:qx.core.Variant.select(r,{"mshtml":function(E){{};
},"default":function(v){var x=this.__ei;
var w=q;

if(x){for(var i=0,l=x.length;i<l;i++){w+=x[i]+n+v+d;
}}return w;
}}),get:qx.core.Variant.select(r,{"mshtml":function(a){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(a))){if(!this.__ek(a)){return e;
}}return m;
},"default":function(y){var A=this.__eh;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==q){return z;
}}}return q;
}}),set:qx.core.Variant.select(r,{"mshtml":function(s,t){{};
},"default":function(B,C){var D=this.__eh;

if(D){for(var i=0,l=D.length;i<l;i++){B.style[D[i]]=C;
}}}}),reset:function(u){this.set(u,q);
}}});
})();
(function(){var z="",y="qx.client",x="hidden",w="-moz-scrollbars-none",v="overflow",u=";",r="overflowY",q=":",p="overflowX",o="overflow:",L="none",K="scroll",J="borderLeftStyle",I="borderRightStyle",H="div",G="borderRightWidth",F="overflow-y",E="borderLeftWidth",D="-moz-scrollbars-vertical",C="100px",A="qx.bom.element.Overflow",B="overflow-x";
qx.Class.define(A,{statics:{__el:null,getScrollbarWidth:function(){if(this.__el!==null){return this.__el;
}var V=qx.bom.element.Style;
var X=function(bK,bL){return parseInt(V.get(bK,bL))||0;
};
var Y=function(bX){return (V.get(bX,I)==L?0:X(bX,G));
};
var W=function(bD){return (V.get(bD,J)==L?0:X(bD,E));
};
var bb=qx.core.Variant.select(y,{"mshtml":function(l){if(V.get(l,r)==x||l.clientWidth==0){return Y(l);
}return Math.max(0,l.offsetWidth-l.clientLeft-l.clientWidth);
},"default":function(i){if(i.clientWidth==0){var j=V.get(i,v);
var k=(j==K||j==D?16:0);
return Math.max(0,Y(i)+k);
}return Math.max(0,(i.offsetWidth-i.clientWidth-W(i)));
}});
var ba=function(bA){return bb(bA)-Y(bA);
};
var t=document.createElement(H);
var s=t.style;
s.height=s.width=C;
s.overflow=K;
document.body.appendChild(t);
var c=ba(t);
this.__el=c?c:16;
document.body.removeChild(t);
return this.__el;
},_compile:qx.core.Variant.select(y,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(b,d){if(d==x){d=w;
}return o+d+u;
}:
function(bG,bH){return bG+q+bH+u;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bq,br){return o+br+u;
}:
function(bO,bP){return bO+q+bP+u;
},"default":function(N,O){return N+q+O+u;
}}),compileX:function(bs){return this._compile(B,bs);
},compileY:function(bk){return this._compile(F,bk);
},getX:qx.core.Variant.select(y,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bU,bV){var bW=qx.bom.element.Style.get(bU,v,bV,false);

if(bW===w){bW=x;
}return bW;
}:
function(bI,bJ){return qx.bom.element.Style.get(bI,p,bJ,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bM,bN){return qx.bom.element.Style.get(bM,v,bN,false);
}:
function(bc,bd){return qx.bom.element.Style.get(bc,p,bd,false);
},"default":function(bB,bC){return qx.bom.element.Style.get(bB,p,bC,false);
}}),setX:qx.core.Variant.select(y,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bY,ca){if(ca==x){ca=w;
}bY.style.overflow=ca;
}:
function(be,bf){be.style.overflowX=bf;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bR,bS){bR.style.overflow=bS;
}:
function(cb,cc){cb.style.overflowX=cc;
},"default":function(m,n){m.style.overflowX=n;
}}),resetX:qx.core.Variant.select(y,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bQ){bQ.style.overflow=z;
}:
function(bT){bT.style.overflowX=z;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(g,h){g.style.overflow=z;
}:
function(P,Q){P.style.overflowX=z;
},"default":function(M){M.style.overflowX=z;
}}),getY:qx.core.Variant.select(y,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bl,bm){var bn=qx.bom.element.Style.get(bl,v,bm,false);

if(bn===w){bn=x;
}return bn;
}:
function(bo,bp){return qx.bom.element.Style.get(bo,r,bp,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(by,bz){return qx.bom.element.Style.get(by,v,bz,false);
}:
function(bE,bF){return qx.bom.element.Style.get(bE,r,bF,false);
},"default":function(T,U){return qx.bom.element.Style.get(T,r,U,false);
}}),setY:qx.core.Variant.select(y,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(e,f){if(f===x){f=w;
}e.style.overflow=f;
}:
function(bi,bj){bi.style.overflowY=bj;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(R,S){R.style.overflow=S;
}:
function(bg,bh){bg.style.overflowY=bh;
},"default":function(bv,bw){bv.style.overflowY=bw;
}}),resetY:qx.core.Variant.select(y,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cd){cd.style.overflow=z;
}:
function(a){a.style.overflowY=z;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ce,cf){ce.style.overflow=z;
}:
function(bt,bu){bt.style.overflowY=z;
},"default":function(bx){bx.style.overflowY=z;
}})}});
})();
(function(){var n="",m="qx.client",k="userSelect",h="style",g="MozUserModify",f="px",e="float",d="borderImage",c="styleFloat",b="appearance",G="pixelHeight",F='Ms',E=":",D="cssFloat",C="pixelTop",B="pixelLeft",A='O',z="qx.bom.element.Style",y='Khtml',x='string',u="pixelRight",v='Moz',s="pixelWidth",t="pixelBottom",q=";",r="textOverflow",o="userModify",p='Webkit',w="WebkitUserModify";
qx.Class.define(z,{statics:{__em:function(){var bk=[b,k,r,d];
var bo={};
var bl=document.documentElement.style;
var bp=[v,p,y,A,F];

for(var i=0,l=bk.length;i<l;i++){var bq=bk[i];
var bm=bq;

if(bl[bq]){bo[bm]=bq;
continue;
}bq=qx.lang.String.firstUp(bq);

for(var j=0,br=bp.length;j<br;j++){var bn=bp[j]+bq;

if(typeof bl[bn]==x){bo[bm]=bn;
break;
}}}this.__en=bo;
this.__en[o]=qx.core.Variant.select(m,{"gecko":g,"webkit":w,"default":k});
this.__eo={};

for(var bm in bo){this.__eo[bm]=this.__es(bo[bm]);
}this.__en[e]=qx.core.Variant.select(m,{"mshtml":c,"default":D});
},__ep:{width:s,height:G,left:B,right:u,top:C,bottom:t},__eq:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(O){var Q=[];
var S=this.__eq;
var R=this.__eo;
var name,P;

for(name in O){P=O[name];

if(P==null){continue;
}name=R[name]||name;
if(S[name]){Q.push(S[name].compile(P));
}else{Q.push(this.__es(name),E,P,q);
}}return Q.join(n);
},__er:{},__es:function(H){var I=this.__er;
var J=I[H];

if(!J){J=I[H]=qx.lang.String.hyphenate(H);
}return J;
},setCss:qx.core.Variant.select(m,{"mshtml":function(M,N){M.style.cssText=N;
},"default":function(bi,bj){bi.setAttribute(h,bj);
}}),getCss:qx.core.Variant.select(m,{"mshtml":function(K){return K.style.cssText.toLowerCase();
},"default":function(L){return L.getAttribute(h);
}}),isPropertySupported:function(a){return (this.__eq[a]||this.__en[a]||a in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(W,name,X,Y){{};
name=this.__en[name]||name;
if(Y!==false&&this.__eq[name]){return this.__eq[name].set(W,X);
}else{W.style[name]=X!==null?X:n;
}},setStyles:function(ba,bb,bc){{};
var bf=this.__en;
var bh=this.__eq;
var bd=ba.style;

for(var bg in bb){var be=bb[bg];
var name=bf[bg]||bg;

if(be===undefined){if(bc!==false&&bh[name]){bh[name].reset(ba);
}else{bd[name]=n;
}}else{if(bc!==false&&bh[name]){bh[name].set(ba,be);
}else{bd[name]=be!==null?be:n;
}}}},reset:function(U,name,V){name=this.__en[name]||name;
if(V!==false&&this.__eq[name]){return this.__eq[name].reset(U);
}else{U.style[name]=n;
}},get:qx.core.Variant.select(m,{"mshtml":function(bx,name,by,bz){name=this.__en[name]||name;
if(bz!==false&&this.__eq[name]){return this.__eq[name].get(bx,by);
}if(!bx.currentStyle){return bx.style[name]||n;
}switch(by){case this.LOCAL_MODE:return bx.style[name]||n;
case this.CASCADED_MODE:return bx.currentStyle[name]||n;
default:var bD=bx.currentStyle[name]||n;
if(/^-?[\.\d]+(px)?$/i.test(bD)){return bD;
}var bC=this.__ep[name];

if(bC){var bA=bx.style[name];
bx.style[name]=bD||0;
var bB=bx.style[bC]+f;
bx.style[name]=bA;
return bB;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bD)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bD;
}},"default":function(bs,name,bt,bu){name=this.__en[name]||name;
if(bu!==false&&this.__eq[name]){return this.__eq[name].get(bs,bt);
}switch(bt){case this.LOCAL_MODE:return bs.style[name]||n;
case this.CASCADED_MODE:if(bs.currentStyle){return bs.currentStyle[name]||n;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bv=qx.dom.Node.getDocument(bs);
var bw=bv.defaultView.getComputedStyle(bs,null);
return bw?bw[name]:n;
}}})},defer:function(T){T.__em();
}});
})();
(function(){var A="get",z="set",y="reset",x=":not(",w="getValue",v="append",u=")",t="getPreviousSiblings",s="#",r="qx.bom.Collection",Y="setValue",X="prepend",W="string",V="getAncestors",U="getOffsetParent",T="remove",S=">*",R="add",Q="*",P="",H="addListener",I="has",F="toggle",G="getSiblings",D="replace",E="after",B="replaceWith",C="setCss",J="setStyles",K="before",M="getNextSiblings",L="getPosition",O="getCss",N="removeListener";
(function(){var bU=function(cR,cS){return function(dc,dd,de,df,dg,dh){var length=this.length;

if(length>0){var di=cR[cS];

for(var i=0;i<length;i++){if(this[i].nodeType===1){di.call(cR,this[i],dc,dd,de,df,dg,dh);
}}}return this;
};
};
var bT=function(bp,bq){return function(cb,cc,cd,ce,cf,cg){if(this.length>0){var ch=this[0].nodeType===1?bp[bq](this[0],cb,cc,cd,ce,cf,cg):null;

if(ch&&ch.nodeType){return this.__ex([ch]);
}else{return ch;
}}return null;
};
};
qx.Class.define(r,{extend:qx.type.BaseArray,statics:{query:function(cm,cn){var co=qx.bom.Selector.query(cm,cn);
return qx.lang.Array.cast(co,qx.bom.Collection);
},id:function(p){var q=document.getElementById(p);
if(q&&q.id!=p){return qx.bom.Collection.query(s+p);
}if(q){return new qx.bom.Collection(q);
}else{return new qx.bom.Collection();
}},html:function(cp,cq){var cr=qx.bom.Html.clean([cp],cq);
return qx.lang.Array.cast(cr,qx.bom.Collection);
},__et:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(bg,bh){var bj=qx.bom.Collection;
if(bg.nodeType){return new bj(bg);
}else if(typeof bg===W){var bi=bj.__et.exec(bg);

if(bi){return bi[1]?bj.html(bi[1],bh):bj.id(bi[3].substring(1));
}else{return bj.query(bg,bh);
}}else{return qx.lang.Array.cast(bg,qx.bom.Collection);
}}},members:{__eu:null,setAttribute:bU(qx.bom.element.Attribute,z),resetAttribute:bU(qx.bom.element.Attribute,y),getAttribute:bT(qx.bom.element.Attribute,A),addClass:bU(qx.bom.element.Class,R),getClass:bT(qx.bom.element.Class,A),hasClass:bT(qx.bom.element.Class,I),removeClass:bU(qx.bom.element.Class,T),replaceClass:bU(qx.bom.element.Class,D),toggleClass:bU(qx.bom.element.Class,F),setValue:bU(qx.bom.Input,Y),getValue:bT(qx.bom.Input,w),setStyle:bU(qx.bom.element.Style,z),setStyles:bU(qx.bom.element.Style,J),resetStyle:bU(qx.bom.element.Style,y),getStyle:bT(qx.bom.element.Style,A),setCss:bU(qx.bom.element.Style,C),getCss:bU(qx.bom.element.Style,O),getOffset:bT(qx.bom.element.Location,A),getPosition:bT(qx.bom.element.Location,L),getOffsetParent:bT(qx.bom.element.Location,U),setScrollLeft:function(dv){var Node=qx.dom.Node;

for(var i=0,l=this.length,dw;i<l;i++){dw=this[i];

if(Node.isElement(dw)){dw.scrollLeft=dv;
}else if(Node.isWindow(dw)){dw.scrollTo(dv,this.getScrollTop(dw));
}else if(Node.isDocument(dw)){Node.getWindow(dw).scrollTo(dv,this.getScrollTop(dw));
}}return this;
},setScrollTop:function(h){var Node=qx.dom.Node;

for(var i=0,l=this.length,k;i<l;i++){k=this[i];

if(Node.isElement(k)){k.scrollTop=h;
}else if(Node.isWindow(k)){k.scrollTo(this.getScrollLeft(k),h);
}else if(Node.isDocument(k)){Node.getWindow(k).scrollTo(this.getScrollLeft(k),h);
}}return this;
},getScrollLeft:function(){var du=this[0];

if(!du){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(du)||Node.isDocument(du)){return qx.bom.Viewport.getScrollLeft();
}return du.scrollLeft;
},getScrollTop:function(){var dk=this[0];

if(!dk){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(dk)||Node.isDocument(dk)){return qx.bom.Viewport.getScrollTop();
}return dk.scrollTop;
},getWidth:function(){var f=this[0];
var Node=qx.dom.Node;

if(f){if(Node.isElement(f)){return qx.bom.element.Dimension.getWidth(f);
}else if(Node.isDocument(f)){return qx.bom.Document.getWidth(Node.getWindow(f));
}else if(Node.isWindow(f)){return qx.bom.Viewport.getWidth(f);
}}return null;
},getContentWidth:function(){var db=this[0];

if(qx.dom.Node.isElement(db)){return qx.bom.element.Dimension.getContentWidth(db);
}return null;
},getHeight:function(){var br=this[0];
var Node=qx.dom.Node;

if(br){if(Node.isElement(br)){return qx.bom.element.Dimension.getHeight(br);
}else if(Node.isDocument(br)){return qx.bom.Document.getHeight(Node.getWindow(br));
}else if(Node.isWindow(br)){return qx.bom.Viewport.getHeight(br);
}}return null;
},getContentHeight:function(){var dx=this[0];

if(qx.dom.Node.isElement(dx)){return qx.bom.element.Dimension.getContentHeight(dx);
}return null;
},addListener:bU(qx.bom.Element,H),removeListener:bU(qx.bom.Element,N),eq:function(cQ){return this.slice(cQ,+cQ+1);
},filter:function(cX,cY){var da;

if(qx.lang.Type.isFunction(cX)){da=qx.type.BaseArray.prototype.filter.call(this,cX,cY);
}else{da=qx.bom.Selector.matches(cX,this);
}return this.__ex(da);
},is:function(bP){return !!bP&&qx.bom.Selector.matches(bP,this).length>0;
},__ev:/^.[^:#\[\.,]*$/,not:function(cO){if(this.__ev.test(cO)){var cP=qx.bom.Selector.matches(x+cO+u,this);
return this.__ex(cP);
}var cP=qx.bom.Selector.matches(cO,this);
return this.filter(function(g){return cP.indexOf(g)===-1;
});
},add:function(a,b){var c=qx.bom.Selector.query(a,b);
var d=qx.lang.Array.unique(this.concat(c));
return this.__ex(d);
},children:function(ci){var cj=[];

for(var i=0,l=this.length;i<l;i++){cj.push.apply(cj,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(ci){cj=qx.bom.Selector.matches(ci,cj);
}return this.__ex(cj);
},closest:function(bl){var bm=new qx.bom.Collection(1);
var bo=qx.bom.Selector;
var bn=this.map(function(bD){while(bD&&bD.ownerDocument){bm[0]=bD;

if(bo.matches(bl,bm).length>0){return bD;
}bD=bD.parentNode;
}});
return this.__ex(qx.lang.Array.unique(bn));
},contents:function(){var bc=[];
var bb=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bc.push.apply(bc,bb.fromCollection(this[i].childNodes));
}return this.__ex(bc);
},find:function(cE){var cG=qx.bom.Selector;
if(this.length===1){return this.__ex(cG.query(cE,this[0]));
}else{var cF=[];

for(var i=0,l=this.length;i<l;i++){cF.push.apply(cF,cG.query(cE,this[i]));
}return this.__ex(qx.lang.Array.unique(cF));
}},next:function(bM){var bN=qx.dom.Hierarchy;
var bO=this.map(bN.getNextElementSibling,bN);
if(bM){bO=qx.bom.Selector.matches(bM,bO);
}return this.__ex(bO);
},nextAll:function(cl){return this.__ew(M,cl);
},prev:function(bJ){var bK=qx.dom.Hierarchy;
var bL=this.map(bK.getPreviousElementSibling,bK);
if(bJ){bL=qx.bom.Selector.matches(bJ,bL);
}return this.__ex(bL);
},prevAll:function(cH){return this.__ew(t,cH);
},parent:function(bV){var Element=qx.dom.Element;
var bW=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(bV){bW=qx.bom.Selector.matches(bV,bW);
}return this.__ex(bW);
},parents:function(o){return this.__ew(V,o);
},siblings:function(bd){return this.__ew(G,bd);
},__ew:function(cJ,cK){var cM=[];
var cL=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){cM.push.apply(cM,cL[cJ](this[i]));
}var cN=qx.lang.Array.unique(cM);
if(cK){cN=qx.bom.Selector.matches(cK,cN);
}return this.__ex(cN);
},__ex:function(bQ){var bR=new qx.bom.Collection;
bR.__eu=this;
bQ=Array.prototype.slice.call(bQ,0);
bR.push.apply(bR,bQ);
return bR;
},andSelf:function(){return this.add(this.__eu);
},end:function(){return this.__eu||new qx.bom.Collection();
},__ey:function(cs,ct){var cy=this[0];
var cx=cy.ownerDocument||cy;
var cw=cx.createDocumentFragment();
var cA=qx.bom.Html.clean(cs,cx,cw);
var cC=cw.firstChild;
if(cC){var cu=this.length-1;

for(var i=0,l=cu;i<l;i++){ct.call(this,this[i],cw.cloneNode(true));
}ct.call(this,this[cu],cw);
}if(cA){var cv;
var cB=qx.io.ScriptLoader;
var cz=qx.lang.Function;

for(var i=0,l=cA.length;i<l;i++){cv=cA[i];
if(cv.src){cB.get().load(cv.src);
}else{cz.globalEval(cv.text||cv.textContent||cv.innerHTML||P);
}if(cv.parentNode){cv.parentNode.removeChild(cv);
}}}return this;
},__ez:function(dl,dm){var dp=qx.bom.Selector;
var dn=qx.lang.Array;
var dr=[];

for(var i=0,l=dl.length;i<l;i++){{};
dr.push.apply(dr,dp.query(dl[i]));
}dr=dn.cast(dn.unique(dr),qx.bom.Collection);
for(var i=0,dq=this.length;i<dq;i++){dr[dm](this[i]);
}return this;
},append:function(bG){return this.__ey(arguments,this.__eA);
},prepend:function(bf){return this.__ey(arguments,this.__eB);
},__eA:function(bz,bA){bz.appendChild(bA);
},__eB:function(bH,bI){bH.insertBefore(bI,bH.firstChild);
},appendTo:function(bX){return this.__ez(arguments,v);
},prependTo:function(cI){return this.__ez(arguments,X);
},before:function(be){return this.__ey(arguments,this.__eC);
},after:function(ck){return this.__ey(arguments,this.__eD);
},__eC:function(bB,bC){bB.parentNode.insertBefore(bC,bB);
},__eD:function(ds,dt){ds.parentNode.insertBefore(dt,ds.nextSibling);
},insertBefore:function(ba){return this.__ez(arguments,K);
},insertAfter:function(bY){return this.__ez(arguments,E);
},wrapAll:function(content){var bF=this[0];

if(bF){var bE=qx.bom.Collection.create(content,bF.ownerDocument).clone();
if(bF.parentNode){bF.parentNode.insertBefore(bE[0],bF);
}bE.map(this.__eE).append(this);
}return this;
},__eE:function(cD){while(cD.firstChild){cD=cD.firstChild;
}return cD;
},wrapInner:function(content){var dj=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){dj[0]=this[i];
dj.contents().wrapAll(content);
}return this;
},wrap:function(content){var ca=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){ca[0]=this[i];
ca.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(n){return this.__ez(arguments,B);
},remove:function(cT){var cV=this;

if(cT){cV=this.filter(cT);

if(cV.length==0){return this;
}}for(var i=0,cW=cV.length,cU;i<cW;i++){cU=cV[i];

if(cU.parentNode){cU.parentNode.removeChild(cU);
}}return cV;
},destroy:function(bs){if(this.length==0){return this;
}var bu=qx.bom.Selector;
var bx=this;

if(bs){bx=this.filter(bs);

if(bx.length==0){return this;
}}var bw=qx.event.Registration.getManager(this[0]);

for(var i=0,l=bx.length,bv,by;i<l;i++){bv=bx[i];
bw.removeAllListeners(bv);
by=bu.query(Q,bv);

for(var j=0,bt=by.length;j<bt;j++){bw.removeAllListeners(by[j]);
}if(bv.parentNode){bv.parentNode.removeChild(bv);
}}if(bs){bx.end();
qx.lang.Array.exclude(this,bx);
}else{this.length=0;
}return this;
},empty:function(){var bS=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){bS.query(S,this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(m){var Element=qx.bom.Element;
return m?
this.map(function(bk){return Element.clone(bk,true);
}):this.map(Element.clone,Element);
}},defer:function(e){if(window.$==null){window.$=e.create;
}}});
})();
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(e,f,g,h,i){qx.event.type.Event.prototype.init.call(this,h,i);
this._target=f||qx.bom.Event.getTarget(e);
this._relatedTarget=g||qx.bom.Event.getRelatedTarget(e);

if(e.timeStamp){this._timeStamp=e.timeStamp;
}this._native=e;
this._returnValue=null;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
var d={};
c._native=this._cloneNativeEvent(this._native,d);
c._returnValue=this._returnValue;
return c;
},_cloneNativeEvent:function(k,l){l.preventDefault=qx.lang.Function.empty;
return l;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(j){this._returnValue=j;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var c="qx.event.type.Dom";
qx.Class.define(c,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(a,b){var b=qx.event.type.Native.prototype._cloneNativeEvent.call(this,a,b);
b.shiftKey=a.shiftKey;
b.ctrlKey=a.ctrlKey;
b.altKey=a.altKey;
b.metaKey=a.metaKey;
return b;
},getModifiers:function(){var e=0;
var d=this._native;

if(d.shiftKey){e|=qx.event.type.Dom.SHIFT_MASK;
}
if(d.ctrlKey){e|=qx.event.type.Dom.CTRL_MASK;
}
if(d.altKey){e|=qx.event.type.Dom.ALT_MASK;
}
if(d.metaKey){e|=qx.event.type.Dom.META_MASK;
}return e;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._keyCode=b.keyCode;
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._keyCode=this._keyCode;
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
},getKeyCode:function(){return this._keyCode;
}}});
})();
(function(){var r="qx.client",q="blur",p="focus",o="mousedown",n="on",m="mouseup",l="DOMFocusOut",k="DOMFocusIn",j="selectstart",i="onmousedown",M="onfocusout",L="onfocusin",K="onmouseup",J="onselectstart",I="draggesture",H="qx.event.handler.Focus",G="_applyFocus",F="deactivate",E="textarea",D="_applyActive",y='character',z="input",w="focusin",x="qxSelectable",u="tabIndex",v="off",s="activate",t="mshtml",A="focusout",B="qxKeepFocus",C="qxKeepActive";
qx.Class.define(H,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this._manager=f;
this._window=f.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:D,nullable:true},focus:{apply:G,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__eF:null,__eG:null,__eH:null,__eI:null,__eJ:null,__eK:null,__eL:null,__eM:null,__eN:null,__eO:null,canHandleEvent:function(a,b){},registerEvent:function(bK,bL,bM){},unregisterEvent:function(bs,bt,bu){},focus:function(bl){if(qx.core.Variant.isSet(r,t)){window.setTimeout(function(){try{bl.focus();
var bb=qx.bom.Selection.get(bl);

if(bb.length==0){var bc=bl.createTextRange();
bc.moveStart(y,bl.value.length);
bc.collapse();
bc.select();
}}catch(by){}},0);
}else{try{bl.focus();
}catch(bx){}}this.setFocus(bl);
this.setActive(bl);
},activate:function(bd){this.setActive(bd);
},blur:function(bP){try{bP.blur();
}catch(bJ){}
if(this.getActive()===bP){this.resetActive();
}
if(this.getFocus()===bP){this.resetFocus();
}},deactivate:function(V){if(this.getActive()===V){this.resetActive();
}},tryActivate:function(bB){var bC=this.__fe(bB);

if(bC){this.setActive(bC);
}},__eP:function(bD,bE,bF,bG){var bI=qx.event.Registration;
var bH=bI.createEvent(bF,qx.event.type.Focus,[bD,bE,bG]);
bI.dispatchEvent(bD,bH);
},_windowFocused:true,__eQ:function(){if(this._windowFocused){this._windowFocused=false;
this.__eP(this._window,null,q,false);
}},__eR:function(){if(!this._windowFocused){this._windowFocused=true;
this.__eP(this._window,null,p,false);
}},_initObserver:qx.core.Variant.select(r,{"gecko":function(){this.__eF=qx.lang.Function.listener(this.__eX,this);
this.__eG=qx.lang.Function.listener(this.__eY,this);
this.__eH=qx.lang.Function.listener(this.__eW,this);
this.__eI=qx.lang.Function.listener(this.__eV,this);
this.__eJ=qx.lang.Function.listener(this.__eS,this);
this._document.addEventListener(o,this.__eF,true);
this._document.addEventListener(m,this.__eG,true);
this._window.addEventListener(p,this.__eH,true);
this._window.addEventListener(q,this.__eI,true);
this._window.addEventListener(I,this.__eJ,true);
},"mshtml":function(){this.__eF=qx.lang.Function.listener(this.__eX,this);
this.__eG=qx.lang.Function.listener(this.__eY,this);
this.__eL=qx.lang.Function.listener(this.__eT,this);
this.__eM=qx.lang.Function.listener(this.__eU,this);
this.__eK=qx.lang.Function.listener(this.__fb,this);
this._document.attachEvent(i,this.__eF);
this._document.attachEvent(K,this.__eG);
this._document.attachEvent(L,this.__eL);
this._document.attachEvent(M,this.__eM);
this._document.attachEvent(J,this.__eK);
},"webkit":function(){this.__eF=qx.lang.Function.listener(this.__eX,this);
this.__eG=qx.lang.Function.listener(this.__eY,this);
this.__eM=qx.lang.Function.listener(this.__eU,this);
this.__eH=qx.lang.Function.listener(this.__eW,this);
this.__eI=qx.lang.Function.listener(this.__eV,this);
this.__eK=qx.lang.Function.listener(this.__fb,this);
this._document.addEventListener(o,this.__eF,true);
this._document.addEventListener(m,this.__eG,true);
this._document.addEventListener(j,this.__eK,false);
this._window.addEventListener(l,this.__eM,true);
this._window.addEventListener(p,this.__eH,true);
this._window.addEventListener(q,this.__eI,true);
},"opera":function(){this.__eF=qx.lang.Function.listener(this.__eX,this);
this.__eG=qx.lang.Function.listener(this.__eY,this);
this.__eL=qx.lang.Function.listener(this.__eT,this);
this.__eM=qx.lang.Function.listener(this.__eU,this);
this._document.addEventListener(o,this.__eF,true);
this._document.addEventListener(m,this.__eG,true);
this._window.addEventListener(k,this.__eL,true);
this._window.addEventListener(l,this.__eM,true);
}}),_stopObserver:qx.core.Variant.select(r,{"gecko":function(){this._document.removeEventListener(o,this.__eF,true);
this._document.removeEventListener(m,this.__eG,true);
this._window.removeEventListener(p,this.__eH,true);
this._window.removeEventListener(q,this.__eI,true);
this._window.removeEventListener(I,this.__eJ,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eF);
qx.bom.Event.removeNativeListener(this._document,K,this.__eG);
qx.bom.Event.removeNativeListener(this._document,L,this.__eL);
qx.bom.Event.removeNativeListener(this._document,M,this.__eM);
qx.bom.Event.removeNativeListener(this._document,J,this.__eK);
},"webkit":function(){this._document.removeEventListener(o,this.__eF,true);
this._document.removeEventListener(j,this.__eK,false);
this._window.removeEventListener(k,this.__eL,true);
this._window.removeEventListener(l,this.__eM,true);
this._window.removeEventListener(p,this.__eH,true);
this._window.removeEventListener(q,this.__eI,true);
},"opera":function(){this._document.removeEventListener(o,this.__eF,true);
this._window.removeEventListener(k,this.__eL,true);
this._window.removeEventListener(l,this.__eM,true);
this._window.removeEventListener(p,this.__eH,true);
this._window.removeEventListener(q,this.__eI,true);
}}),__eS:qx.event.GlobalError.observeMethod(qx.core.Variant.select(r,{"gecko":function(e){if(!this.__ff(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__eT:qx.event.GlobalError.observeMethod(qx.core.Variant.select(r,{"mshtml":function(e){this.__eR();
var Q=e.srcElement;
var P=this.__fd(Q);

if(P){this.setFocus(P);
}this.tryActivate(Q);
},"opera":function(e){var ba=e.target;

if(ba==this._document||ba==this._window){this.__eR();

if(this.__eN){this.setFocus(this.__eN);
delete this.__eN;
}
if(this.__eO){this.setActive(this.__eO);
delete this.__eO;
}}else{this.setFocus(ba);
this.tryActivate(ba);
if(!this.__ff(ba)){ba.selectionStart=0;
ba.selectionEnd=0;
}}},"default":null})),__eU:qx.event.GlobalError.observeMethod(qx.core.Variant.select(r,{"mshtml":function(e){if(!e.toElement){this.__eQ();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var be=e.target;

if(be===this.getFocus()){this.resetFocus();
}
if(be===this.getActive()){this.resetActive();
}},"opera":function(e){var bO=e.target;

if(bO==this._document){this.__eQ();
this.__eN=this.getFocus();
this.__eO=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bO===this.getFocus()){this.resetFocus();
}
if(bO===this.getActive()){this.resetActive();
}}},"default":null})),__eV:qx.event.GlobalError.observeMethod(qx.core.Variant.select(r,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__eQ();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__eQ();
this.__eN=this.getFocus();
this.__eO=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__eW:qx.event.GlobalError.observeMethod(qx.core.Variant.select(r,{"gecko":function(e){var bQ=e.target;

if(bQ===this._window||bQ===this._document){this.__eR();
bQ=this._body;
}this.setFocus(bQ);
this.tryActivate(bQ);
},"webkit":function(e){var R=e.target;

if(R===this._window||R===this._document){this.__eR();

if(this.__eN){this.setFocus(this.__eN);
delete this.__eN;
}
if(this.__eO){this.setActive(this.__eO);
delete this.__eO;
}}else{this.setFocus(R);
this.tryActivate(R);
}},"default":null})),__eX:qx.event.GlobalError.observeMethod(qx.core.Variant.select(r,{"gecko":function(e){var W=this.__fd(e.target);

if(!W){qx.bom.Event.preventDefault(e);
}else if(W===this._body){this.setFocus(W);
}},"mshtml":function(e){var br=e.srcElement;
var bq=this.__fd(br);

if(bq){if(!this.__ff(br)){br.unselectable=n;
try{document.selection.empty();
}catch(e){}try{bq.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__ff(br)){br.unselectable=n;
}}},"webkit":function(e){var bw=e.target;
var bv=this.__fd(bw);

if(bv){this.setFocus(bv);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bj=e.target;
var bh=this.__fd(bj);

if(!this.__ff(bj)){qx.bom.Event.preventDefault(e);
if(bh){var bi=this.getFocus();

if(bi&&bi.selectionEnd){bi.selectionStart=0;
bi.selectionEnd=0;
bi.blur();
}if(bh){this.setFocus(bh);
}}}else if(bh){this.setFocus(bh);
}},"default":null})),__eY:qx.event.GlobalError.observeMethod(qx.core.Variant.select(r,{"mshtml":function(e){var O=e.srcElement;

if(O.unselectable){O.unselectable=v;
}this.tryActivate(this.__fa(O));
},"gecko":function(e){var bN=e.target;

while(bN&&bN.offsetWidth===undefined){bN=bN.parentNode;
}
if(bN){this.tryActivate(bN);
}},"webkit|opera":function(e){this.tryActivate(this.__fa(e.target));
},"default":null})),__fa:qx.event.GlobalError.observeMethod(qx.core.Variant.select(r,{"mshtml|webkit":function(g){var h=this.getFocus();

if(h&&g!=h&&(h.nodeName.toLowerCase()===z||h.nodeName.toLowerCase()===E)){g=h;
}return g;
},"default":function(N){return N;
}})),__fb:qx.event.GlobalError.observeMethod(qx.core.Variant.select(r,{"mshtml|webkit":function(e){var bk=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__ff(bk)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fc:function(bn){var bo=qx.bom.element.Attribute.get(bn,u);

if(bo>=1){return true;
}var bp=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bo>=0&&bp[bn.tagName]){return true;
}return false;
},__fd:function(bm){while(bm&&bm.nodeType===1){if(bm.getAttribute(B)==n){return null;
}
if(this.__fc(bm)){return bm;
}bm=bm.parentNode;
}return this._body;
},__fe:function(bf){var bg=bf;

while(bf&&bf.nodeType===1){if(bf.getAttribute(C)==n){return null;
}bf=bf.parentNode;
}return bg;
},__ff:function(bz){while(bz&&bz.nodeType===1){var bA=bz.getAttribute(x);

if(bA!=null){return bA===n;
}bz=bz.parentNode;
}return true;
},_applyActive:function(X,Y){if(Y){this.__eP(Y,X,F,true);
}
if(X){this.__eP(X,Y,s,true);
}},_applyFocus:function(c,d){if(d){this.__eP(d,c,A,true);
}
if(c){this.__eP(c,d,w,true);
}if(d){this.__eP(d,c,q,false);
}
if(c){this.__eP(c,d,p,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fg=null;
},defer:function(S){qx.event.Registration.addHandler(S);
var T=S.FOCUSABLE_ELEMENTS;

for(var U in T){T[U.toUpperCase()]=1;
}}});
})();
(function(){var t="qx.client",s="character",r="EndToEnd",q="input",p="textarea",o="StartToStart",n='character',m="qx.bom.Selection",l="button",k="#text",j="body";
qx.Class.define(m,{statics:{getSelectionObject:qx.core.Variant.select(t,{"mshtml":function(bh){return bh.selection;
},"default":function(G){return qx.dom.Node.getWindow(G).getSelection();
}}),get:qx.core.Variant.select(t,{"mshtml":function(u){var v=qx.bom.Range.get(qx.dom.Node.getDocument(u));
return v.text;
},"default":function(bo){if(this.__fh(bo)){return bo.value.substring(bo.selectionStart,bo.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(bo)).toString();
}}}),getLength:qx.core.Variant.select(t,{"mshtml":function(bu){var bw=this.get(bu);
var bv=qx.util.StringSplit.split(bw,/\r\n/);
return bw.length-(bv.length-1);
},"opera":function(w){var B,z,x;

if(this.__fh(w)){var A=w.selectionStart;
var y=w.selectionEnd;
B=w.value.substring(A,y);
z=y-A;
}else{B=qx.bom.Selection.get(w);
z=B.length;
}x=qx.util.StringSplit.split(B,/\r\n/);
return z-(x.length-1);
},"default":function(by){if(this.__fh(by)){return by.selectionEnd-by.selectionStart;
}else{return this.get(by).length;
}}}),getStart:qx.core.Variant.select(t,{"mshtml":function(H){if(this.__fh(H)){var M=qx.bom.Range.get();
if(!H.contains(M.parentElement())){return -1;
}var N=qx.bom.Range.get(H);
var L=H.value.length;
N.moveToBookmark(M.getBookmark());
N.moveEnd(n,L);
return L-N.text.length;
}else{var N=qx.bom.Range.get(H);
var J=N.parentElement();
var O=qx.bom.Range.get();
O.moveToElementText(J);
var I=qx.bom.Range.get(qx.dom.Node.getBodyElement(H));
I.setEndPoint(o,N);
I.setEndPoint(r,O);
if(O.compareEndPoints(o,I)==0){return 0;
}var K;
var P=0;

while(true){K=I.moveStart(s,-1);
if(O.compareEndPoints(o,I)==0){break;
}if(K==0){break;
}else{P++;
}}return ++P;
}},"gecko|webkit":function(bi){if(this.__fh(bi)){return bi.selectionStart;
}else{var bk=qx.dom.Node.getDocument(bi);
var bj=this.getSelectionObject(bk);
if(bj.anchorOffset<bj.focusOffset){return bj.anchorOffset;
}else{return bj.focusOffset;
}}},"default":function(W){if(this.__fh(W)){return W.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(W)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(t,{"mshtml":function(a){if(this.__fh(a)){var f=qx.bom.Range.get();
if(!a.contains(f.parentElement())){return -1;
}var g=qx.bom.Range.get(a);
var e=a.value.length;
g.moveToBookmark(f.getBookmark());
g.moveStart(n,-e);
return g.text.length;
}else{var g=qx.bom.Range.get(a);
var c=g.parentElement();
var h=qx.bom.Range.get();
h.moveToElementText(c);
var e=h.text.length;
var b=qx.bom.Range.get(qx.dom.Node.getBodyElement(a));
b.setEndPoint(r,g);
b.setEndPoint(o,h);
if(h.compareEndPoints(r,b)==0){return e-1;
}var d;
var i=0;

while(true){d=b.moveEnd(s,1);
if(h.compareEndPoints(r,b)==0){break;
}if(d==0){break;
}else{i++;
}}return e-(++i);
}},"gecko|webkit":function(bl){if(this.__fh(bl)){return bl.selectionEnd;
}else{var bn=qx.dom.Node.getDocument(bl);
var bm=this.getSelectionObject(bn);
if(bm.focusOffset>bm.anchorOffset){return bm.focusOffset;
}else{return bm.anchorOffset;
}}},"default":function(X){if(this.__fh(X)){return X.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(X)).focusOffset;
}}}),__fh:function(bg){return qx.dom.Node.isElement(bg)&&(bg.nodeName.toLowerCase()==q||bg.nodeName.toLowerCase()==p);
},set:qx.core.Variant.select(t,{"mshtml":function(bp,bq,br){var bs;
if(qx.dom.Node.isDocument(bp)){bp=bp.body;
}
if(qx.dom.Node.isElement(bp)||qx.dom.Node.isText(bp)){switch(bp.nodeName.toLowerCase()){case q:case p:case l:if(br===undefined){br=bp.value.length;
}
if(bq>=0&&bq<=bp.value.length&&br>=0&&br<=bp.value.length){bs=qx.bom.Range.get(bp);
bs.collapse(true);
bs.moveStart(s,bq);
bs.moveEnd(s,br-bq);
bs.select();
return true;
}break;
case k:if(br===undefined){br=bp.nodeValue.length;
}
if(bq>=0&&bq<=bp.nodeValue.length&&br>=0&&br<=bp.nodeValue.length){bs=qx.bom.Range.get(qx.dom.Node.getBodyElement(bp));
bs.moveToElementText(bp.parentNode);
bs.collapse(true);
bs.moveStart(s,bq);
bs.moveEnd(s,br-bq);
bs.select();
return true;
}break;
default:if(br===undefined){br=bp.childNodes.length-1;
}if(bp.childNodes[bq]&&bp.childNodes[br]){bs=qx.bom.Range.get(qx.dom.Node.getBodyElement(bp));
bs.moveToElementText(bp.childNodes[bq]);
bs.collapse(true);
var bt=qx.bom.Range.get(qx.dom.Node.getBodyElement(bp));
bt.moveToElementText(bp.childNodes[br]);
bs.setEndPoint(r,bt);
bs.select();
return true;
}}}return false;
},"default":function(Y,ba,bb){var bf=Y.nodeName.toLowerCase();

if(qx.dom.Node.isElement(Y)&&(bf==q||bf==p)){if(bb===undefined){bb=Y.value.length;
}if(ba>=0&&ba<=Y.value.length&&bb>=0&&bb<=Y.value.length){Y.focus();
Y.select();
Y.setSelectionRange(ba,bb);
return true;
}}else{var bd=false;
var be=qx.dom.Node.getWindow(Y).getSelection();
var bc=qx.bom.Range.get(Y);
if(qx.dom.Node.isText(Y)){if(bb===undefined){bb=Y.length;
}
if(ba>=0&&ba<Y.length&&bb>=0&&bb<=Y.length){bd=true;
}}else if(qx.dom.Node.isElement(Y)){if(bb===undefined){bb=Y.childNodes.length-1;
}
if(ba>=0&&Y.childNodes[ba]&&bb>=0&&Y.childNodes[bb]){bd=true;
}}else if(qx.dom.Node.isDocument(Y)){Y=Y.body;

if(bb===undefined){bb=Y.childNodes.length-1;
}
if(ba>=0&&Y.childNodes[ba]&&bb>=0&&Y.childNodes[bb]){bd=true;
}}
if(bd){if(!be.isCollapsed){be.collapseToStart();
}bc.setStart(Y,ba);
if(qx.dom.Node.isText(Y)){bc.setEnd(Y,bb);
}else{bc.setEndAfter(Y.childNodes[bb]);
}if(be.rangeCount>0){be.removeAllRanges();
}be.addRange(bc);
return true;
}}return false;
}}),setAll:function(bx){return qx.bom.Selection.set(bx,0);
},clear:qx.core.Variant.select(t,{"mshtml":function(C){var D=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(C));
var E=qx.bom.Range.get(C);
var parent=E.parentElement();
var F=qx.bom.Range.get(qx.dom.Node.getDocument(C));
if(parent==F.parentElement()&&parent==C){D.empty();
}},"default":function(Q){var S=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(Q));
var U=Q.nodeName.toLowerCase();
if(qx.dom.Node.isElement(Q)&&(U==q||U==p)){Q.setSelectionRange(0,0);
qx.bom.Element.blur(Q);
}else if(qx.dom.Node.isDocument(Q)||U==j){S.collapse(Q.body?Q.body:Q,0);
}else{var T=qx.bom.Range.get(Q);

if(!T.collapsed){var V;
var R=T.commonAncestorContainer;
if(qx.dom.Node.isElement(Q)&&qx.dom.Node.isText(R)){V=R.parentNode;
}else{V=R;
}
if(V==Q){S.collapse(Q,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(p){if(qx.dom.Node.isElement(p)){switch(p.nodeName.toLowerCase()){case d:switch(p.type){case j:case i:case c:case l:case f:case h:case g:return p.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}break;
case e:case b:case l:return p.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}}else{if(p==null){p=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}},"default":function(m){var n=qx.dom.Node.getDocument(m);
var o=qx.bom.Selection.getSelectionObject(n);

if(o.rangeCount>0){return o.getRangeAt(0);
}else{return n.createRange();
}}})}});
})();
(function(){var j="",h="m",g="g",f="^",e="qx.util.StringSplit",d="i",c="$(?!\\s)",b="[object RegExp]",a="y";
qx.Class.define(e,{statics:{split:function(k,l,m){if(Object.prototype.toString.call(l)!==b){return String.prototype.split.call(k,l,m);
}var t=[],n=0,r=(l.ignoreCase?d:j)+(l.multiline?h:j)+(l.sticky?a:j),l=RegExp(l.source,r+g),q,u,o,p,s=/()??/.exec(j)[1]===undefined;
k=k+j;

if(!s){q=RegExp(f+l.source+c,r);
}if(m===undefined||+m<0){m=Infinity;
}else{m=Math.floor(+m);

if(!m){return [];
}}
while(u=l.exec(k)){o=u.index+u[0].length;

if(o>n){t.push(k.slice(n,u.index));
if(!s&&u.length>1){u[0].replace(q,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined){u[i]=undefined;
}}});
}
if(u.length>1&&u.index<k.length){Array.prototype.push.apply(t,u.slice(1));
}p=u[0].length;
n=o;

if(t.length>=m){break;
}}
if(l.lastIndex===u.index){l.lastIndex++;
}}
if(n===k.length){if(p||!l.test(j)){t.push(j);
}}else{t.push(k.slice(n));
}return t.length>m?t.slice(0,m):t;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);
e.pageX=d.pageX;
e.pageY=d.pageY;
e.layerX=d.layerX;
e.layerY=d.layerY;
e.scale=d.scale;
e.rotation=d.rotation;
e.srcElement=d.srcElement;
e.targetTouches=[];

for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];
}e.changedTouches=[];

for(var i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];
}e.touches=[];

for(var i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];
}return e;
},stop:function(){this.stopPropagation();
},getAllTouches:function(){return this._native.touches;
},getTargetTouches:function(){return this._native.targetTouches;
},getChangedTargetTouches:function(){return this._native.changedTouches;
},isMultiTouch:function(){return this.__fj().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(j){return this.__fi(j).pageX;
},getDocumentTop:function(h){return this.__fi(h).pageY;
},getScreenLeft:function(p){return this.__fi(p).screenX;
},getScreenTop:function(n){return this.__fi(n).screenY;
},getViewportLeft:function(g){return this.__fi(g).clientX;
},getViewportTop:function(o){return this.__fi(o).clientY;
},getIdentifier:function(k){return this.__fi(k).identifier;
},__fi:function(f){f=f==null?0:f;
return this.__fj()[f];
},__fj:function(){var m=this.getType()==a||this.getType()==c;
var l=(m?this.getChangedTargetTouches():this.getTargetTouches());
return l;
}}});
})();
(function(){var a="qx.event.type.Tap";
qx.Class.define(a,{extend:qx.event.type.Touch});
})();
(function(){var a="qx.event.type.Swipe";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Touch.prototype._cloneNativeEvent.call(this,b,c);
c.swipe=b.swipe;
return c;
},getStartTime:function(){return this._native.swipe.startTime;
},getDuration:function(){return this._native.swipe.duration;
},getAxis:function(){return this._native.swipe.axis;
},getDirection:function(){return this._native.swipe.direction;
},getVelocity:function(){return this._native.swipe.velocity;
},getDistance:function(){return this._native.swipe.distance;
}}});
})();
(function(){var h="qx.client",g="left",f="right",e="middle",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(k,l){var l=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,k,l);
l.button=k.button;
l.clientX=k.clientX;
l.clientY=k.clientY;
l.pageX=k.pageX;
l.pageY=k.pageY;
l.screenX=k.screenX;
l.screenY=k.screenY;
l.wheelDelta=k.wheelDelta;
l.detail=k.detail;
l.srcElement=k.srcElement;
return l;
},__fk:qx.core.Variant.select(h,{"mshtml":{1:g,2:f,4:e},"default":{0:g,2:f,1:e}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case b:return f;
case d:if(this.__fl){return this.__fl();
}default:return this.__fk[this._native.button]||c;
}},__fl:qx.core.Variant.select(h,{"mshtml":function(){return g;
},"default":null}),isLeftPressed:function(){return this.getButton()===g;
},isMiddlePressed:function(){return this.getButton()===e;
},isRightPressed:function(){return this.getButton()===f;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(h,{"mshtml":function(){var j=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(j);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(h,{"mshtml":function(){var i=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(i);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){if(qx.bom.client.Platform.MAC){return -(this._native.wheelDelta/1200);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.bom.client.Platform.WIN){var d=120;
if(qx.bom.client.Engine.VERSION==533.16){d=1200;
}}else{d=40;
if(qx.bom.client.Engine.VERSION==533.16||qx.bom.client.Engine.VERSION==533.17){d=1200;
}}return -(this._native.wheelDelta/d);
}}})}});
})();
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__fm:function(y){var z=navigator.userAgent;
var B=new RegExp(s+y+d);
var C=z.match(B);

if(!C){return;
}var name=C[1].toLowerCase();
var A=C[3];
if(z.match(/Version(\/| )([0-9]+\.[0-9])/)){A=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(z.indexOf(a)!==-1||z.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
A=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=A;
this.VERSION=parseFloat(A,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(E){E.__fm(o);
},"gecko":function(D){D.__fm(k);
},"mshtml":function(F){F.__fm(v);
},"opera":function(G){G.__fm(p);
}})});
})();
(function(){var o="qx.client",n="qx.dom.Hierarchy",m="previousSibling",l="*",k="nextSibling",j="parentNode";
qx.Class.define(n,{statics:{getNodeIndex:function(C){var D=0;

while(C&&(C=C.previousSibling)){D++;
}return D;
},getElementIndex:function(w){var x=0;
var y=qx.dom.Node.ELEMENT;

while(w&&(w=w.previousSibling)){if(w.nodeType==y){x++;
}}return x;
},getNextElementSibling:function(p){while(p&&(p=p.nextSibling)&&!qx.dom.Node.isElement(p)){continue;
}return p||null;
},getPreviousElementSibling:function(S){while(S&&(S=S.previousSibling)&&!qx.dom.Node.isElement(S)){continue;
}return S||null;
},contains:qx.core.Variant.select(o,{"webkit|mshtml|opera":function(r,s){if(qx.dom.Node.isDocument(r)){var t=qx.dom.Node.getDocument(s);
return r&&t==r;
}else if(qx.dom.Node.isDocument(s)){return false;
}else{return r.contains(s);
}},"gecko":function(O,P){return !!(O.compareDocumentPosition(P)&16);
},"default":function(T,U){while(U){if(T==U){return true;
}U=U.parentNode;
}return false;
}}),isRendered:function(u){if(!u.parentNode||!u.offsetParent){return false;
}var v=u.ownerDocument||u.document;
if(v.body.contains){return v.body.contains(u);
}if(v.compareDocumentPosition){return !!(v.compareDocumentPosition(u)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(K,L){return this.contains(L,K);
},getCommonParent:qx.core.Variant.select(o,{"mshtml|opera":function(E,F){if(E===F){return E;
}
while(E&&qx.dom.Node.isElement(E)){if(E.contains(F)){return E;
}E=E.parentNode;
}return null;
},"default":function(d,e){if(d===e){return d;
}var f={};
var i=qx.core.ObjectRegistry;
var h,g;

while(d||e){if(d){h=i.toHashCode(d);

if(f[h]){return f[h];
}f[h]=d;
d=d.parentNode;
}
if(e){g=i.toHashCode(e);

if(f[g]){return f[g];
}f[g]=e;
e=e.parentNode;
}}return null;
}}),getAncestors:function(J){return this._recursivelyCollect(J,j);
},getChildElements:function(A){A=A.firstChild;

if(!A){return [];
}var B=this.getNextSiblings(A);

if(A.nodeType===1){B.unshift(A);
}return B;
},getDescendants:function(q){return qx.lang.Array.fromCollection(q.getElementsByTagName(l));
},getFirstDescendant:function(Q){Q=Q.firstChild;

while(Q&&Q.nodeType!=1){Q=Q.nextSibling;
}return Q;
},getLastDescendant:function(V){V=V.lastChild;

while(V&&V.nodeType!=1){V=V.previousSibling;
}return V;
},getPreviousSiblings:function(z){return this._recursivelyCollect(z,m);
},getNextSiblings:function(M){return this._recursivelyCollect(M,k);
},_recursivelyCollect:function(G,H){var I=[];

while(G=G[H]){if(G.nodeType==1){I.push(G);
}}return I;
},getSiblings:function(R){return this.getPreviousSiblings(R).reverse().concat(this.getNextSiblings(R));
},isEmpty:function(N){N=N.firstChild;

while(N){if(N.nodeType===qx.dom.Node.ELEMENT||N.nodeType===qx.dom.Node.TEXT){return false;
}N=N.nextSibling;
}return true;
},cleanWhitespace:function(a){var b=a.firstChild;

while(b){var c=b.nextSibling;

if(b.nodeType==3&&!/\S/.test(b.nodeValue)){a.removeChild(b);
}b=c;
}}}});
})();
(function(){var h="losecapture",g="qx.client",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(l,m){qx.event.dispatch.AbstractBubbling.call(this,l);
this.__fn=l.getWindow();
this.__fo=m;
l.addListener(this.__fn,f,this.releaseCapture,this);
l.addListener(this.__fn,e,this.releaseCapture,this);
l.addListener(this.__fn,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fo:null,__fp:null,__fq:true,__fn:null,_getParent:function(s){return s.parentNode;
},canDispatchEvent:function(o,event,p){return (this.__fp&&this.__fr[p]);
},dispatchEvent:function(q,event,r){if(r==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fq||!qx.dom.Hierarchy.contains(this.__fp,q)){q=this.__fp;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,q,event,r);
},__fr:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(i,j){var j=j!==false;

if(this.__fp===i&&this.__fq==j){return;
}
if(this.__fp){this.releaseCapture();
}this.nativeSetCapture(i,j);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(i,h,function(){qx.bom.Event.removeNativeListener(i,h,arguments.callee);
self.releaseCapture();
});
}this.__fq=j;
this.__fp=i;
this.__fo.fireEvent(i,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fp;
},releaseCapture:function(){var n=this.__fp;

if(!n){return;
}this.__fp=null;
this.__fo.fireEvent(n,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(n);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(t,u){qx.event.Timer.once(function(){t.setCapture(u!==false);
},this,0);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(k){qx.event.Timer.once(function(){k.releaseCapture();
},this,0);
},"default":qx.lang.Function.empty})},destruct:function(){this.__fp=this.__fn=this.__fo=null;
},defer:function(v){qx.event.Registration.addDispatcher(v);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(m){qx.core.Object.call(this);
this._manager=m;
this._window=m.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(k,l){},registerEvent:function(n,o,p){},unregisterEvent:function(h,i,j){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var t=qx.event.handler.Window.SUPPORTED_TYPES;

for(var s in t){qx.bom.Event.addNativeListener(this._window,s,this._onNativeWrapper);
}},_stopWindowObserver:function(){var r=qx.event.handler.Window.SUPPORTED_TYPES;

for(var q in r){qx.bom.Event.removeNativeListener(this._window,q,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var c=this._window;

try{var g=c.document;
}catch(e){return ;
}var d=g.documentElement;
var b=e.target||e.srcElement;

if(b==null||b===c||b===g||b===d){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,c]);
qx.event.Registration.dispatchEvent(c,event);
var f=event.getReturnValue();

if(f!=null){e.returnValue=f;
return f;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var b="qx.event.handler.Capture";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(f,g){},registerEvent:function(c,d,e){},unregisterEvent:function(h,i,j){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(r){qx.core.Object.call(this);
this.setEnabled(false);

if(r!=null){this.setInterval(r);
}var self=this;
this.__fs=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(k,l,m){var n=new qx.event.Timer(m);
n.__ft=k;
n.addListener(h,function(e){n.stop();
k.call(l,e);
n.dispose();
l=null;
},l);
n.start();
return n;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__fu:null,__fs:null,_applyInterval:function(p,q){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(i,j){if(j){window.clearInterval(this.__fu);
this.__fu=null;
}else if(i){this.__fu=window.setInterval(this.__fs,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(o){this.setInterval(o);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(s){this.stop();
this.startWith(s);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__fu){window.clearInterval(this.__fu);
}this.__fu=this.__fs=null;
}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(j){return this.getClass(j)==d;
},isNumber:function(i){return (i!==null&&(this.getClass(i)==b||i instanceof Number));
},isBoolean:function(h){return (h!==null&&(this.getClass(h)==a||h instanceof Boolean));
},isDate:function(g){return (g!==null&&(this.getClass(g)==c||g instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var m="qx.client",k="string",h="script",g="<table>",f="<fieldset>",e="<select multiple='multiple'>",d="</div>",c="</select>",b="</tr></tbody></table>",a="<col",J="div",I="<table><tbody><tr>",H=">",G="<table><tbody></tbody><colgroup>",F="<th",E="</tbody></table>",D="<td",C="</colgroup></table>",B="<opt",A="text/javascript",t="",u="</fieldset>",r="<table><tbody>",s="div<div>",p="<table",q="mshtml",n="qx.bom.Html",o="<leg",v="tbody",w="<tr",y="</table>",x="undefined",z="></";
qx.Class.define(n,{statics:{__fv:function(K,L,M){return M.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?K:L+z+M+H;
},__fw:{opt:[1,e,c],leg:[1,f,u],table:[1,g,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Variant.select(m,{"mshtml":[1,s,d],"default":null})},__fx:function(N,O){var U=O.createElement(J);
N=N.replace(/(<(\w+)[^>]*?)\/>/g,this.__fv);
var Q=N.replace(/^\s+/,t).substring(0,5).toLowerCase();
var T,P=this.__fw;

if(!Q.indexOf(B)){T=P.opt;
}else if(!Q.indexOf(o)){T=P.leg;
}else if(Q.match(/^<(thead|tbody|tfoot|colg|cap)/)){T=P.table;
}else if(!Q.indexOf(w)){T=P.tr;
}else if(!Q.indexOf(D)||!Q.indexOf(F)){T=P.td;
}else if(!Q.indexOf(a)){T=P.col;
}else{T=P.def;
}if(T){U.innerHTML=T[1]+N+T[2];
var S=T[0];

while(S--){U=U.lastChild;
}}else{U.innerHTML=N;
}if(qx.core.Variant.isSet(m,q)){var V=/<tbody/i.test(N);
var R=!Q.indexOf(p)&&!V?U.firstChild&&U.firstChild.childNodes:T[1]==g&&!V?U.childNodes:[];

for(var j=R.length-1;j>=0;--j){if(R[j].tagName.toLowerCase()===v&&!R[j].childNodes.length){R[j].parentNode.removeChild(R[j]);
}}if(/^\s/.test(N)){U.insertBefore(O.createTextNode(N.match(/^\s*/)[0]),U.firstChild);
}}return qx.lang.Array.fromCollection(U.childNodes);
},clean:function(W,X,Y){X=X||document;
if(typeof X.createElement===x){X=X.ownerDocument||X[0]&&X[0].ownerDocument||document;
}if(!Y&&W.length===1&&typeof W[0]===k){var bg=/^<(\w+)\s*\/?>$/.exec(W[0]);

if(bg){return [X.createElement(bg[1])];
}}var ba,bc=[];

for(var i=0,l=W.length;i<l;i++){ba=W[i];
if(typeof ba===k){ba=this.__fx(ba,X);
}if(ba.nodeType){bc.push(ba);
}else if(ba instanceof qx.type.BaseArray){bc.push.apply(bc,Array.prototype.slice.call(ba,0));
}else if(ba.toElement){bc.push(ba.toElement());
}else{bc.push.apply(bc,ba);
}}if(Y){var bf=[],be=qx.lang.Array,bd,bb;

for(var i=0;bc[i];i++){bd=bc[i];

if(bd.nodeType==1&&bd.tagName.toLowerCase()===h&&(!bd.type||bd.type.toLowerCase()===A)){if(bd.parentNode){bd.parentNode.removeChild(bc[i]);
}bf.push(bd);
}else{if(bd.nodeType===1){bb=be.fromCollection(bd.getElementsByTagName(h));
bc.splice.apply(bc,[i+1,0].concat(bb));
}Y.appendChild(bd);
}}return bf;
}return bc;
}}});
})();
(function(){var i="0px",h="mshtml",g="qx.client",f="qx.bom.element.Dimension",e="paddingRight",d="paddingLeft",c="paddingTop",b="paddingBottom";
qx.Class.define(f,{statics:{getWidth:qx.core.Variant.select(g,{"gecko":function(s){if(s.getBoundingClientRect){var t=s.getBoundingClientRect();
return Math.round(t.right)-Math.round(t.left);
}else{return s.offsetWidth;
}},"default":function(a){return a.offsetWidth;
}}),getHeight:qx.core.Variant.select(g,{"gecko":function(C){if(C.getBoundingClientRect){var D=C.getBoundingClientRect();
return Math.round(D.bottom)-Math.round(D.top);
}else{return C.offsetHeight;
}},"default":function(j){return j.offsetHeight;
}}),getSize:function(r){return {width:this.getWidth(r),height:this.getHeight(r)};
},__fy:{visible:true,hidden:true},getContentWidth:function(k){var m=qx.bom.element.Style;
var n=qx.bom.element.Overflow.getX(k);
var o=parseInt(m.get(k,d)||i,10);
var q=parseInt(m.get(k,e)||i,10);

if(this.__fy[n]){return k.clientWidth-o-q;
}else{if(k.clientWidth>=k.scrollWidth){return Math.max(k.clientWidth,k.scrollWidth)-o-q;
}else{var p=k.scrollWidth-o;
var l=qx.bom.client.Engine;

if(l.NAME===h&&l.VERSION==6){p-=q;
}return p;
}}},getContentHeight:function(v){var x=qx.bom.element.Style;
var z=qx.bom.element.Overflow.getY(v);
var A=parseInt(x.get(v,c)||i,10);
var y=parseInt(x.get(v,b)||i,10);

if(this.__fy[z]){return v.clientHeight-A-y;
}else{if(v.clientHeight>=v.scrollHeight){return Math.max(v.clientHeight,v.scrollHeight)-A-y;
}else{var B=v.scrollHeight-A;
var w=qx.bom.client.Engine;

if(w.NAME===h&&w.VERSION==6){B-=y;
}return B;
}}},getContentSize:function(u){return {width:this.getContentWidth(u),height:this.getContentHeight(u)};
}}});
})();
(function(){var b="qx.dom.Element";
qx.Class.define(b,{statics:{hasChild:function(parent,t){return t.parentNode===parent;
},hasChildren:function(a){return !!a.firstChild;
},hasChildElements:function(A){A=A.firstChild;

while(A){if(A.nodeType===1){return true;
}A=A.nextSibling;
}return false;
},getParentElement:function(s){return s.parentNode;
},isInDom:function(n,o){if(!o){o=window;
}var p=o.document.getElementsByTagName(n.nodeName);

for(var i=0,l=p.length;i<l;i++){if(p[i]===n){return true;
}}return false;
},insertAt:function(x,parent,y){var z=parent.childNodes[y];

if(z){parent.insertBefore(x,z);
}else{parent.appendChild(x);
}return true;
},insertBegin:function(j,parent){if(parent.firstChild){this.insertBefore(j,parent.firstChild);
}else{parent.appendChild(j);
}},insertEnd:function(e,parent){parent.appendChild(e);
},insertBefore:function(k,m){m.parentNode.insertBefore(k,m);
return true;
},insertAfter:function(q,r){var parent=r.parentNode;

if(r==parent.lastChild){parent.appendChild(q);
}else{return this.insertBefore(q,r.nextSibling);
}return true;
},remove:function(u){if(!u.parentNode){return false;
}u.parentNode.removeChild(u);
return true;
},removeChild:function(B,parent){if(B.parentNode!==parent){return false;
}parent.removeChild(B);
return true;
},removeChildAt:function(c,parent){var d=parent.childNodes[c];

if(!d){return false;
}parent.removeChild(d);
return true;
},replaceChild:function(v,w){if(!w.parentNode){return false;
}w.parentNode.replaceChild(v,w);
return true;
},replaceAt:function(f,g,parent){var h=parent.childNodes[g];

if(!h){return false;
}parent.replaceChild(f,h);
return true;
}}});
})();
(function(){var o="success",n="complete",m="error",l="load",k="fail",j="qx.client",i="loaded",h="readystatechange",g="head",f="qx.io.ScriptLoader",b="mshtml|webkit",d="script",c="text/javascript",a="abort";
qx.Bootstrap.define(f,{construct:function(){this.__fz=qx.Bootstrap.bind(this.__fE,this);
this.__fA=document.createElement(d);
},members:{__fB:null,__fC:null,__fD:null,__fz:null,__fA:null,load:function(p,q,r){if(this.__fB){throw new Error("Another request is still running!");
}this.__fB=true;
var s=document.getElementsByTagName(g)[0];
var t=this.__fA;
this.__fC=q||null;
this.__fD=r||window;
t.type=c;
t.onerror=t.onload=t.onreadystatechange=this.__fz;
t.src=p;
setTimeout(function(){s.appendChild(t);
},0);
},abort:function(){if(this.__fB){this.dispose(a);
}},dispose:function(status){if(this._disposed){return;
}this._disposed=true;
var w=this.__fA;
w.onerror=w.onload=w.onreadystatechange=null;
var v=w.parentNode;

if(v){v.removeChild(w);
}delete this.__fB;
if(this.__fC){if(qx.core.Variant.isSet(j,b)){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__fC.call(self.__fD,status);
delete self.__fC;
}),0);
}else{this.__fC.call(this.__fD,status);
delete this.__fC;
}}},__fE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml":function(e){var u=this.__fA.readyState;

if(u==i){this.dispose(o);
}else if(u==n){this.dispose(o);
}else{return;
}},"opera":function(e){if(qx.Bootstrap.isString(e)||e.type===m){return this.dispose(k);
}else if(e.type===l){return this.dispose(o);
}else{return;
}},"default":function(e){if(qx.Bootstrap.isString(e)||e.type===m){this.dispose(k);
}else if(e.type===l){this.dispose(o);
}else if(e.type===h&&(e.target.readyState===n||e.target.readyState===i)){this.dispose(o);
}else{return;
}}}))}});
})();


qx.$$loader.init();

