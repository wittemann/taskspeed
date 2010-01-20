(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"."},"qx":{"resourceUri":".","sourceUri":".","version":"1.0.1-pre"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["bom:qooxdoo-1.0.js"]],
  urisBefore : [],
  packageHashes : {"0":"8687d3030a5b"},
  boot : "boot",
  bootIsInline : true,
  
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
}

qx.$$loader.signalStartup = function () {
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();
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
        l.importPackageData(qx.$$packageData[bootPackageHash]);
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['8687d3030a5b']={"resources":{}};
(function(){var bt="toString",bs=".",br="default",bq="Object",bp='"',bo="Array",bn="()",bm="String",bl="Function",bk=".prototype",bR="function",bQ="Boolean",bP="Error",bO="RegExp",bN="warn",bM="hasOwnProperty",bL="string",bK="toLocaleString",bJ='\", "',bI="info",bA="BROKEN_IE",bB="isPrototypeOf",by="Date",bz="",bw="qx.Bootstrap",bx="]",bu="Class",bv="error",bC="[Class ",bD="valueOf",bF="Number",bE="count",bH="debug",bG="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bC+this.classname+bx;
},createNamespace:function(name,b){var d=name.split(bs);
var parent=window;
var c=d[0];

for(var i=0,e=d.length-1;i<e;i++,c=d[i]){if(!parent[c]){parent=parent[c]={};
}else{parent=parent[c];
}}parent[c]=b;
return c;
},setDisplayName:function(w,x,name){w.displayName=x+bs+name+bn;
},setDisplayNames:function(X,Y){for(var name in X){var ba=X[name];

if(ba instanceof Function){ba.displayName=Y+bs+name+bn;
}}},define:function(name,f){if(!f){var f={statics:{}};
}var m;
var j=null;
qx.Bootstrap.setDisplayNames(f.statics,name);

if(f.members){qx.Bootstrap.setDisplayNames(f.members,name+bk);
m=f.construct||new Function;
var g=f.statics;

for(var h in g){m[h]=g[h];
}j=m.prototype;
var n=f.members;

for(var h in n){j[h]=n[h];
}}else{m=f.statics||{};
}var k=this.createNamespace(name,m);
m.name=m.classname=name;
m.basename=k;
m.$$type=bu;
if(!m.hasOwnProperty(bt)){m.toString=this.genericToString;
}if(f.defer){f.defer(m,j);
}qx.Bootstrap.$$registry[name]=f.statics;
return m;
}};
qx.Bootstrap.define(bw,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(L){return L.__count__;
},"default":function(T){var length=0;

for(var U in T){length++;
}return length;
}})[(({}).__count__==0)?bE:br],objectMergeWith:function(p,q,r){if(r===undefined){r=true;
}
for(var s in q){if(r||p[s]===undefined){p[s]=q[s];
}}return p;
},__eG:[bB,bM,bK,bt,bD],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(y){var z=[];

for(var C in y){z.push(C);
}var A=qx.Bootstrap.__eG;
var B=Object.prototype.hasOwnProperty;

for(var i=0,a=A,l=a.length;i<l;i++){if(B.call(y,a[i])){z.push(a[i]);
}}return z;
},"default":function(H){var I=[];

for(var J in H){I.push(J);
}return I;
}})[typeof (Object.keys)==
bR?bG:
(function(){for(var bd in {toString:1}){return bd;
}})()!==bt?bA:br],getKeysAsString:function(V){var W=qx.Bootstrap.getKeys(V);

if(W.length==0){return bz;
}return bp+W.join(bJ)+bp;
},__eH:{"[object String]":bm,"[object Array]":bo,"[object Object]":bq,"[object RegExp]":bO,"[object Number]":bF,"[object Boolean]":bQ,"[object Date]":by,"[object Function]":bl,"[object Error]":bP},firstUp:function(O){return O.charAt(0).toUpperCase()+O.substr(1);
},firstLow:function(bS){return bS.charAt(0).toLowerCase()+bS.substr(1);
},getClass:function(t){var u=Object.prototype.toString.call(t);
return (qx.Bootstrap.__eH[u]||u.slice(8,-1));
},isString:function(K){return (K!==null&&(typeof K===bL||qx.Bootstrap.getClass(K)==bm||K instanceof String||(!!K&&!!K.$$isString)));
},isArray:function(bb){return (bb!==null&&(bb instanceof Array||(bb&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bb.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bb)==bo||(!!bb&&!!bb.$$isArray)));
},isObject:function(bc){return (bc!==undefined&&bc!==null&&qx.Bootstrap.getClass(bc)==bq);
},isFunction:function(S){return qx.Bootstrap.getClass(S)==bl;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(o,name){while(o){if(o.$$properties&&o.$$properties[name]){return o.$$properties[name];
}o=o.superclass;
}return null;
},hasProperty:function(bV,name){return !!qx.Bootstrap.getPropertyDefinition(bV,name);
},getEventType:function(M,name){var M=M.constructor;

while(M.superclass){if(M.$$events&&M.$$events[name]!==undefined){return M.$$events[name];
}M=M.superclass;
}return null;
},supportsEvent:function(v,name){return !!qx.Bootstrap.getEventType(v,name);
},getByInterface:function(P,Q){var R,i,l;

while(P){if(P.$$implements){R=P.$$flatImplements;

for(i=0,l=R.length;i<l;i++){if(R[i]===Q){return P;
}}}P=P.superclass;
}return null;
},hasInterface:function(bT,bU){return !!qx.Bootstrap.getByInterface(bT,bU);
},getMixins:function(bg){var bh=[];

while(bg){if(bg.$$includes){bh.push.apply(bh,bg.$$flatIncludes);
}bg=bg.superclass;
}return bh;
},$$logs:[],debug:function(F,G){qx.Bootstrap.$$logs.push([bH,arguments]);
},info:function(be,bf){qx.Bootstrap.$$logs.push([bI,arguments]);
},warn:function(D,E){qx.Bootstrap.$$logs.push([bN,arguments]);
},error:function(bi,bj){qx.Bootstrap.$$logs.push([bv,arguments]);
},trace:function(N){}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__a:{},define:function(s,t){if(t===undefined){throw new Error('Default value of setting "'+s+'" must be defined!');
}
if(!this.__a[s]){this.__a[s]={};
}else if(this.__a[s].defaultValue!==undefined){throw new Error('Setting "'+s+'" is already defined!');
}this.__a[s].defaultValue=t;
},get:function(p){var q=this.__a[p];

if(q===undefined){throw new Error('Setting "'+p+'" is not defined.');
}
if(q.value!==undefined){return q.value;
}return q.defaultValue;
},set:function(k,l){if((k.split(a)).length<2){throw new Error('Malformed settings key "'+k+'". Must be following the schema "namespace.key".');
}
if(!this.__a[k]){this.__a[k]={};
}this.__a[k].value=l;
},__b:function(){if(window.qxsettings){for(var m in window.qxsettings){this.set(m,window.qxsettings[m]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(j){}this.__c();
}},__c:function(){if(this.get(h)!=true){return;
}var o=document.location.search.slice(1).split(g);

for(var i=0;i<o.length;i++){var n=o[i].split(b);

if(n.length!=3||n[0]!=c){continue;
}this.set(n[1],decodeURIComponent(n[2]));
}}},defer:function(r){r.define(h,false);
r.define(e,false);
r.define(d,0);
r.__b();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__d:function(){var t=d;
var x=e;
var w=window.navigator.userAgent;
var z=false;
var v=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){t=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(w)){x=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){x+=q+RegExp.$3;
}}else{v=true;
x=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){t=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(w)){x=RegExp.$1;
var y=RegExp(n).exec(x);

if(y){x=x.slice(0,y.index);
}}else{v=true;
x=m;
}}else if(window.controllers&&window.navigator.product===c){t=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(w)){x=RegExp.$1;
}else{v=true;
x=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(w)){t=k;
x=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(x<8&&/Trident\/([^\);]+)(\)|;)/.test(w)){if(RegExp.$1===g){x=h;
}}this.MSHTML=true;
}else{var u=window.qxFail;

if(u&&typeof u===o){var t=u();

if(t.NAME&&t.FULLVERSION){t=t.NAME;
this[t.toUpperCase()]=true;
x=t.FULLVERSION;
}}else{z=true;
v=true;
x=r;
t=s;
this.GECKO=true;
window.alert("Unsupported client: "+w+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=z;
this.UNKNOWN_VERSION=v;
this.NAME=t;
this.FULLVERSION=x;
this.VERSION=parseFloat(x);
}},defer:function(A){A.__d();
}});
})();
(function(){var u="on",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",k="qx.debug",d="qx.client",j="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e="qx.core.Variant",h="mshtml",a="gecko";
qx.Bootstrap.define(e,{statics:{__e:{},__f:{},compilerIsSet:function(){return true;
},define:function(I,J,K){{};

if(!this.__e[I]){this.__e[I]={};
}else{}this.__e[I].allowedValues=J;
this.__e[I].defaultValue=K;
},get:function(L){var M=this.__e[L];
{};

if(M.value!==undefined){return M.value;
}return M.defaultValue;
},__g:function(){if(window.qxvariants){for(var w in qxvariants){{};

if(!this.__e[w]){this.__e[w]={};
}this.__e[w].value=qxvariants[w];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(x){}this.__h(this.__e);
}},__h:function(){if(qx.core.Setting.get(m)!=true){return;
}var O=document.location.search.slice(1).split(p);

for(var i=0;i<O.length;i++){var P=O[i].split(f);

if(P.length!=3||P[0]!=c){continue;
}var Q=P[1];

if(!this.__e[Q]){this.__e[Q]={};
}this.__e[Q].value=decodeURIComponent(P[2]);
}},select:function(y,z){{};

for(var A in z){if(this.isSet(y,A)){return z[A];
}}
if(z[r]!==undefined){return z[r];
}{};
},isSet:function(D,E){var F=D+n+E;

if(this.__f[F]!==undefined){return this.__f[F];
}var H=false;
if(E.indexOf(s)<0){H=this.get(D)===E;
}else{var G=E.split(s);

for(var i=0,l=G.length;i<l;i++){if(this.get(D)===G[i]){H=true;
break;
}}}this.__f[F]=H;
return H;
},__i:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__j:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__k:function(B,C){for(var i=0,l=B.length;i<l;i++){if(B[i]==C){return true;
}}return false;
}},defer:function(N){N.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
N.define(k,[u,t],u);
N.define(o,[u,t],t);
N.define(j,[u,t],u);
N.__g();
}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,H){if(H){if(H.extend&&!(H.extend instanceof Array)){H.extend=[H.extend];
}{};
var I=H.statics?H.statics:{};
if(H.extend){I.$$extends=H.extend;
}
if(H.properties){I.$$properties=H.properties;
}
if(H.members){I.$$members=H.members;
}
if(H.events){I.$$events=H.events;
}}else{var I={};
}I.$$type=c;
I.name=name;
I.toString=this.genericToString;
I.basename=qx.Bootstrap.createNamespace(name,I);
qx.Interface.$$registry[name]=I;
return I;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(q){if(!q){return [];
}var r=q.concat();

for(var i=0,l=q.length;i<l;i++){if(q[i].$$extends){r.push.apply(r,this.flatten(q[i].$$extends));
}}return r;
},__bl:function(s,t,u,v){var z=u.$$members;

if(z){for(var y in z){if(qx.Bootstrap.isFunction(z[y])){var x=this.__eI(t,y);
var w=x||qx.Bootstrap.isFunction(s[y]);

if(!w){throw new Error('Implementation of method "'+y+'" is missing in class "'+t.classname+'" required by interface "'+u.name+'"');
}var A=v===true&&!x&&!qx.Bootstrap.hasInterface(t,u);

if(A){s[y]=this.__bo(u,s[y],y,z[y]);
}}else{if(typeof s[y]===undefined){if(typeof s[y]!==h){throw new Error('Implementation of member "'+y+'" is missing in class "'+t.classname+'" required by interface "'+u.name+'"');
}}}}}},__eI:function(B,C){var G=C.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!G){return false;
}var D=qx.Bootstrap.firstLow(G[2]);
var E=qx.Bootstrap.getPropertyDefinition(B,D);

if(!E){return false;
}var F=G[0]==b||G[0]==d;

if(F){return qx.Bootstrap.getPropertyDefinition(B,D).check==g;
}return true;
},__bm:function(n,o){if(o.$$properties){for(var p in o.$$properties){if(!qx.Bootstrap.getPropertyDefinition(n,p)){throw new Error('The property "'+p+'" is not supported by Class "'+n.classname+'"!');
}}}},__bn:function(j,k){if(k.$$events){for(var m in k.$$events){if(!qx.Bootstrap.supportsEvent(j,m)){throw new Error('The event "'+m+'" is not supported by Class "'+j.classname+'"!');
}}}},assertObject:function(J,K){var M=J.constructor;
this.__bl(J,M,K,false);
this.__bm(M,K);
this.__bn(M,K);
var L=K.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assertObject(J,L[i]);
}}},assert:function(N,O,P){this.__bl(N.prototype,N,O,P);
this.__bm(N,O);
this.__bn(N,O);
var Q=O.$$extends;

if(Q){for(var i=0,l=Q.length;i<l;i++){this.assert(N,Q[i],P);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__bo:function(){},__bp:null,__bq:function(){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,m){if(m){if(m.include&&!(m.include instanceof Array)){m.include=[m.include];
}{};
var o=m.statics?m.statics:{};
qx.Bootstrap.setDisplayNames(o,name);

for(var n in o){if(o[n] instanceof Function){o[n].$$mixin=o;
}}if(m.construct){o.$$constructor=m.construct;
qx.Bootstrap.setDisplayName(m.construct,name,e);
}
if(m.include){o.$$includes=m.include;
}
if(m.properties){o.$$properties=m.properties;
}
if(m.members){o.$$members=m.members;
qx.Bootstrap.setDisplayNames(m.members,name+f);
}
for(var n in o.$$members){if(o.$$members[n] instanceof Function){o.$$members[n].$$mixin=o;
}}
if(m.events){o.$$events=m.events;
}
if(m.destruct){o.$$destructor=m.destruct;
qx.Bootstrap.setDisplayName(m.destruct,name,b);
}}else{var o={};
}o.$$type=a;
o.name=name;
o.toString=this.genericToString;
o.basename=qx.Bootstrap.createNamespace(name,o);
this.$$registry[name]=o;
return o;
},checkCompatibility:function(p){var s=this.flatten(p);
var t=s.length;

if(t<2){return true;
}var w={};
var v={};
var u={};
var r;

for(var i=0;i<t;i++){r=s[i];

for(var q in r.events){if(u[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+u[q]+'" in member "'+q+'"!');
}u[q]=r.name;
}
for(var q in r.properties){if(w[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+w[q]+'" in property "'+q+'"!');
}w[q]=r.name;
}
for(var q in r.members){if(v[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+v[q]+'" in member "'+q+'"!');
}v[q]=r.name;
}}return true;
},isCompatible:function(h,j){var k=qx.Bootstrap.getMixins(j);
k.push(h);
return qx.Mixin.checkCompatibility(k);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__W:null,__X:function(){}}});
})();
(function(){var bN=';',bM='computed=this.',bL='=value;',bK='this.',bJ='if(this.',bI='!==undefined)',bH='delete this.',bG="set",bF="setThemed",bE='}',bt="init",bs="setRuntime",br='else if(this.',bq='return this.',bp="string",bo="boolean",bn="resetThemed",bm='!==undefined){',bl='=true;',bk="resetRuntime",bU="reset",bV="refresh",bS='old=this.',bT='else ',bQ='if(old===undefined)old=this.',bR='old=computed=this.',bO=' of an instance of ',bP=";",bW='if(old===computed)return value;',bX='if(old===undefined)old=null;',bx='(value);',bw=' is not (yet) ready!");',bz='===value)return value;',by='return init;',bB='var init=this.',bA="Error in property ",bD='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',bC='.validate.call(this, value);',bv='else{',bu=" in method ",w='=computed;',x='(backup);',y='if(computed===inherit){',z="inherit",A='if(value===undefined)prop.error(this,2,"',B='if(a[i].',C='else if(computed===undefined)',D="': ",E=" of class ",F='===undefined)return;',cc="')){",cb='else this.',ca='value=this.',bY='","',cg='if(init==qx.core.Property.$$inherit)init=null;',cf='var inherit=prop.$$inherit;',ce='var computed, old;',cd='computed=undefined;delete this.',ci='",value);',ch='computed=value;',U=';}',V='){',S='if(computed===undefined||computed===inherit){',T='!==inherit){',Y='(computed, old, "',ba='return value;',W='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',X="if(reg.hasListener(this, '",Q=')a[i].',R='.$$properties.',N="var reg=qx.event.Registration;",M='return null;',P='");',O='var pa=this.getLayoutParent();if(pa)computed=pa.',J='!==undefined&&',I="', qx.event.type.Data, [computed, old]",L='var backup=computed;',K='}else{',H="object",G='if(computed===undefined)computed=null;',bf='var computed, old=this.',bg='throw new Error("Property ',bh=")}",bi='var prop=qx.core.Property;',bb=" with incoming value '",bc='if(computed===undefined||computed==inherit)computed=null;',bd='if((computed===undefined||computed===inherit)&&',be="reg.fireEvent(this, '",bj="qx.core.Property";
qx.Bootstrap.define(bj,{statics:{__N:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__O:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:z,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bp,dispose:bo,inheritable:bo,nullable:bo,themeable:bo,refine:bo,init:null,apply:bp,event:bp,check:null,transform:bp,deferredInit:bo,validate:null},$$allowedGroupKeys:{name:bp,group:H,mode:bp,themeable:bo},$$inheritable:{},refresh:function(ds){var parent=ds.getLayoutParent();

if(parent){var dv=ds.constructor;
var dx=this.$$store.inherit;
var dw=this.$$store.init;
var du=this.$$method.refresh;
var dy;
var dt;
{};

while(dv){dy=dv.$$properties;

if(dy){for(var name in this.$$inheritable){if(dy[name]&&ds[du[name]]){dt=parent[dx[name]];

if(dt===undefined){dt=parent[dw[name]];
}{};
ds[du[name]](dt);
}}}dv=dv.superclass;
}}},attach:function(cT){var cU=cT.$$properties;

if(cU){for(var name in cU){this.attachMethods(cT,name,cU[name]);
}}cT.$$propertiesAttached=true;
},attachMethods:function(dc,name,dd){dd.group?this.__P(dc,dd,name):this.__Q(dc,dd,name);
},__P:function(k,m,name){var t=qx.Bootstrap.firstUp(name);
var s=k.prototype;
var u=m.themeable===true;
{};
var v=[];
var p=[];

if(u){var n=[];
var r=[];
}var q="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
v.push(q);

if(u){n.push(q);
}
if(m.mode=="shorthand"){var o="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
v.push(o);

if(u){n.push(o);
}}
for(var i=0,a=m.group,l=a.length;i<l;i++){{};
v.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
p.push("this.",this.$$method.reset[a[i]],"();");

if(u){{};
n.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
r.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+t;
s[this.$$method.set[name]]=new Function(v.join(""));
this.$$method.reset[name]="reset"+t;
s[this.$$method.reset[name]]=new Function(p.join(""));

if(u){this.$$method.setThemed[name]="setThemed"+t;
s[this.$$method.setThemed[name]]=new Function(n.join(""));
this.$$method.resetThemed[name]="resetThemed"+t;
s[this.$$method.resetThemed[name]]=new Function(r.join(""));
}},__Q:function(cV,cW,name){var cY=qx.Bootstrap.firstUp(name);
var db=cV.prototype;
{};
if(cW.dispose===undefined&&typeof cW.check==="string"){cW.dispose=this.__O[cW.check]||qx.Bootstrap.classIsDefined(cW.check)||(qx.Interface&&qx.Interface.isDefined(cW.check));
}var da=this.$$method;
var cX=this.$$store;
cX.runtime[name]="$$runtime_"+name;
cX.user[name]="$$user_"+name;
cX.theme[name]="$$theme_"+name;
cX.init[name]="$$init_"+name;
cX.inherit[name]="$$inherit_"+name;
cX.useinit[name]="$$useinit_"+name;
da.get[name]="get"+cY;
db[da.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cV,name,"get");
};
da.set[name]="set"+cY;
db[da.set[name]]=function(dz){return qx.core.Property.executeOptimizedSetter(this,cV,name,"set",arguments);
};
da.reset[name]="reset"+cY;
db[da.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cV,name,"reset");
};

if(cW.inheritable||cW.apply||cW.event||cW.deferredInit){da.init[name]="init"+cY;
db[da.init[name]]=function(dl){return qx.core.Property.executeOptimizedSetter(this,cV,name,"init",arguments);
};
}
if(cW.inheritable){da.refresh[name]="refresh"+cY;
db[da.refresh[name]]=function(j){return qx.core.Property.executeOptimizedSetter(this,cV,name,"refresh",arguments);
};
}da.setRuntime[name]="setRuntime"+cY;
db[da.setRuntime[name]]=function(cS){return qx.core.Property.executeOptimizedSetter(this,cV,name,"setRuntime",arguments);
};
da.resetRuntime[name]="resetRuntime"+cY;
db[da.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cV,name,"resetRuntime");
};

if(cW.themeable){da.setThemed[name]="setThemed"+cY;
db[da.setThemed[name]]=function(cH){return qx.core.Property.executeOptimizedSetter(this,cV,name,"setThemed",arguments);
};
da.resetThemed[name]="resetThemed"+cY;
db[da.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cV,name,"resetThemed");
};
}
if(cW.check==="Boolean"){db["toggle"+cY]=new Function("return this."+da.set[name]+"(!this."+da.get[name]+"())");
db["is"+cY]=new Function("return this."+da.get[name]+"()");
}},__R:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(cr,cs,ct,cu,cv){var cw=cr.constructor.classname;
var cx=bA+ct+E+cw+bu+this.$$method[cu][ct]+bb+cv+D;
throw new Error(cx+(this.__R[cs]||"Unknown reason: "+cs));
},__S:function(cB,cC,name,cD,cE,cF){var cG=this.$$method[cD][name];
{cC[cG]=new Function("value",cE.join(""));
};
{};
qx.Bootstrap.setDisplayName(cC[cG],cB.classname+".prototype",cG);
if(cF===undefined){return cB[cG]();
}else{return cB[cG](cF[0]);
}},executeOptimizedGetter:function(de,df,name,dg){var di=df.$$properties[name];
var dk=df.prototype;
var dh=[];
var dj=this.$$store;
dh.push(bJ,dj.runtime[name],bI);
dh.push(bq,dj.runtime[name],bN);

if(di.inheritable){dh.push(br,dj.inherit[name],bI);
dh.push(bq,dj.inherit[name],bN);
dh.push(bT);
}dh.push(bJ,dj.user[name],bI);
dh.push(bq,dj.user[name],bN);

if(di.themeable){dh.push(br,dj.theme[name],bI);
dh.push(bq,dj.theme[name],bN);
}
if(di.deferredInit&&di.init===undefined){dh.push(br,dj.init[name],bI);
dh.push(bq,dj.init[name],bN);
}dh.push(bT);

if(di.init!==undefined){if(di.inheritable){dh.push(bB,dj.init[name],bN);

if(di.nullable){dh.push(cg);
}else if(di.init!==undefined){dh.push(bq,dj.init[name],bN);
}else{dh.push(W,name,bO,df.classname,bw);
}dh.push(by);
}else{dh.push(bq,dj.init[name],bN);
}}else if(di.inheritable||di.nullable){dh.push(M);
}else{dh.push(bg,name,bO,df.classname,bw);
}return this.__S(de,dk,name,dg,dh);
},executeOptimizedSetter:function(cI,cJ,name,cK,cL){var cQ=cJ.$$properties[name];
var cP=cJ.prototype;
var cN=[];
var cM=cK===bG||cK===bF||cK===bs||(cK===bt&&cQ.init===undefined);
var cO=cQ.apply||cQ.event||cQ.inheritable;
var cR=this.__eJ(cK,name);
this.__eK(cN,cQ,name,cK,cM);

if(cM){this.__eL(cN,cJ,cQ,name);
}
if(cO){this.__eM(cN,cM,cR,cK);
}
if(cQ.inheritable){cN.push(cf);
}{};

if(!cO){this.__eO(cN,name,cK,cM);
}else{this.__eP(cN,cQ,name,cK,cM);
}
if(cQ.inheritable){this.__eQ(cN,cQ,name,cK);
}else if(cO){this.__eR(cN,cQ,name,cK);
}
if(cO){this.__eS(cN,cQ,name);
if(cQ.inheritable&&cP._getChildren){this.__eT(cN,name);
}}if(cM){cN.push(ba);
}return this.__S(cI,cP,name,cK,cN,cL);
},__eJ:function(d,name){if(d===bs||d===bk){var e=this.$$store.runtime[name];
}else if(d===bF||d===bn){e=this.$$store.theme[name];
}else if(d===bt){e=this.$$store.init[name];
}else{e=this.$$store.user[name];
}return e;
},__eK:function(dA,dB,name,dC,dD){{if(!dB.nullable||dB.check||dB.inheritable){dA.push(bi);
}if(dC===bG){dA.push(A,name,bY,dC,ci);
}};
},__eL:function(f,g,h,name){if(h.transform){f.push(ca,h.transform,bx);
}if(h.validate){if(typeof h.validate===bp){f.push(bK,h.validate,bx);
}else if(h.validate instanceof Function){f.push(g.classname,R,name);
f.push(bC);
}}},__eM:function(dm,dn,dp,dq){var dr=(dq===bU||dq===bn||dq===bk);

if(dn){dm.push(bJ,dp,bz);
}else if(dr){dm.push(bJ,dp,F);
}},__eN:undefined,__eO:function(dE,name,dF,dG){if(dF===bs){dE.push(bK,this.$$store.runtime[name],bL);
}else if(dF===bk){dE.push(bJ,this.$$store.runtime[name],bI);
dE.push(bH,this.$$store.runtime[name],bN);
}else if(dF===bG){dE.push(bK,this.$$store.user[name],bL);
}else if(dF===bU){dE.push(bJ,this.$$store.user[name],bI);
dE.push(bH,this.$$store.user[name],bN);
}else if(dF===bF){dE.push(bK,this.$$store.theme[name],bL);
}else if(dF===bn){dE.push(bJ,this.$$store.theme[name],bI);
dE.push(bH,this.$$store.theme[name],bN);
}else if(dF===bt&&dG){dE.push(bK,this.$$store.init[name],bL);
}},__eP:function(ck,cl,name,cm,cn){if(cl.inheritable){ck.push(bf,this.$$store.inherit[name],bN);
}else{ck.push(ce);
}ck.push(bJ,this.$$store.runtime[name],bm);

if(cm===bs){ck.push(bM,this.$$store.runtime[name],bL);
}else if(cm===bk){ck.push(bH,this.$$store.runtime[name],bN);
ck.push(bJ,this.$$store.user[name],bI);
ck.push(bM,this.$$store.user[name],bN);
ck.push(br,this.$$store.theme[name],bI);
ck.push(bM,this.$$store.theme[name],bN);
ck.push(br,this.$$store.init[name],bm);
ck.push(bM,this.$$store.init[name],bN);
ck.push(bK,this.$$store.useinit[name],bl);
ck.push(bE);
}else{ck.push(bR,this.$$store.runtime[name],bN);
if(cm===bG){ck.push(bK,this.$$store.user[name],bL);
}else if(cm===bU){ck.push(bH,this.$$store.user[name],bN);
}else if(cm===bF){ck.push(bK,this.$$store.theme[name],bL);
}else if(cm===bn){ck.push(bH,this.$$store.theme[name],bN);
}else if(cm===bt&&cn){ck.push(bK,this.$$store.init[name],bL);
}}ck.push(bE);
ck.push(br,this.$$store.user[name],bm);

if(cm===bG){if(!cl.inheritable){ck.push(bS,this.$$store.user[name],bN);
}ck.push(bM,this.$$store.user[name],bL);
}else if(cm===bU){if(!cl.inheritable){ck.push(bS,this.$$store.user[name],bN);
}ck.push(bH,this.$$store.user[name],bN);
ck.push(bJ,this.$$store.runtime[name],bI);
ck.push(bM,this.$$store.runtime[name],bN);
ck.push(bJ,this.$$store.theme[name],bI);
ck.push(bM,this.$$store.theme[name],bN);
ck.push(br,this.$$store.init[name],bm);
ck.push(bM,this.$$store.init[name],bN);
ck.push(bK,this.$$store.useinit[name],bl);
ck.push(bE);
}else{if(cm===bs){ck.push(bM,this.$$store.runtime[name],bL);
}else if(cl.inheritable){ck.push(bM,this.$$store.user[name],bN);
}else{ck.push(bR,this.$$store.user[name],bN);
}if(cm===bF){ck.push(bK,this.$$store.theme[name],bL);
}else if(cm===bn){ck.push(bH,this.$$store.theme[name],bN);
}else if(cm===bt&&cn){ck.push(bK,this.$$store.init[name],bL);
}}ck.push(bE);
if(cl.themeable){ck.push(br,this.$$store.theme[name],bm);

if(!cl.inheritable){ck.push(bS,this.$$store.theme[name],bN);
}
if(cm===bs){ck.push(bM,this.$$store.runtime[name],bL);
}else if(cm===bG){ck.push(bM,this.$$store.user[name],bL);
}else if(cm===bF){ck.push(bM,this.$$store.theme[name],bL);
}else if(cm===bn){ck.push(bH,this.$$store.theme[name],bN);
ck.push(bJ,this.$$store.init[name],bm);
ck.push(bM,this.$$store.init[name],bN);
ck.push(bK,this.$$store.useinit[name],bl);
ck.push(bE);
}else if(cm===bt){if(cn){ck.push(bK,this.$$store.init[name],bL);
}ck.push(bM,this.$$store.theme[name],bN);
}else if(cm===bV){ck.push(bM,this.$$store.theme[name],bN);
}ck.push(bE);
}ck.push(br,this.$$store.useinit[name],V);

if(!cl.inheritable){ck.push(bS,this.$$store.init[name],bN);
}
if(cm===bt){if(cn){ck.push(bM,this.$$store.init[name],bL);
}else{ck.push(bM,this.$$store.init[name],bN);
}}else if(cm===bG||cm===bs||cm===bF||cm===bV){ck.push(bH,this.$$store.useinit[name],bN);

if(cm===bs){ck.push(bM,this.$$store.runtime[name],bL);
}else if(cm===bG){ck.push(bM,this.$$store.user[name],bL);
}else if(cm===bF){ck.push(bM,this.$$store.theme[name],bL);
}else if(cm===bV){ck.push(bM,this.$$store.init[name],bN);
}}ck.push(bE);
if(cm===bG||cm===bs||cm===bF||cm===bt){ck.push(bv);

if(cm===bs){ck.push(bM,this.$$store.runtime[name],bL);
}else if(cm===bG){ck.push(bM,this.$$store.user[name],bL);
}else if(cm===bF){ck.push(bM,this.$$store.theme[name],bL);
}else if(cm===bt){if(cn){ck.push(bM,this.$$store.init[name],bL);
}else{ck.push(bM,this.$$store.init[name],bN);
}ck.push(bK,this.$$store.useinit[name],bl);
}ck.push(bE);
}},__eQ:function(co,cp,name,cq){co.push(S);

if(cq===bV){co.push(ch);
}else{co.push(O,this.$$store.inherit[name],bN);
}co.push(bd);
co.push(bK,this.$$store.init[name],J);
co.push(bK,this.$$store.init[name],T);
co.push(bM,this.$$store.init[name],bN);
co.push(bK,this.$$store.useinit[name],bl);
co.push(K);
co.push(bH,this.$$store.useinit[name],U);
co.push(bE);
co.push(bW);
co.push(y);
co.push(cd,this.$$store.inherit[name],bN);
co.push(bE);
co.push(C);
co.push(bH,this.$$store.inherit[name],bN);
co.push(cb,this.$$store.inherit[name],w);
co.push(L);
if(cp.init!==undefined&&cq!==bt){co.push(bQ,this.$$store.init[name],bP);
}else{co.push(bX);
}co.push(bc);
},__eR:function(cy,cz,name,cA){if(cA!==bG&&cA!==bs&&cA!==bF){cy.push(G);
}cy.push(bW);
if(cz.init!==undefined&&cA!==bt){cy.push(bQ,this.$$store.init[name],bP);
}else{cy.push(bX);
}},__eS:function(b,c,name){if(c.apply){b.push(bK,c.apply,Y,name,P);
}if(c.event){b.push(N,X,c.event,cc,be,c.event,I,bh);
}},__eT:function(cj,name){cj.push(bD);
cj.push(B,this.$$method.refresh[name],Q,this.$$method.refresh[name],x);
cj.push(bE);
}}});
})();
(function(){var bs="[Class ",br="]",bq="toString",bp="constructor",bo="extend",bn="Class",bm="destruct",bl="qx.Class",bk="static";
qx.Bootstrap.define(bl,{statics:{define:function(name,bM){if(!bM){var bM={};
}if(bM.include&&!(bM.include instanceof Array)){bM.include=[bM.include];
}if(bM.implement&&!(bM.implement instanceof Array)){bM.implement=[bM.implement];
}if(!bM.hasOwnProperty(bo)&&!bM.type){bM.type=bk;
}{};
var bO=this.__z(name,bM.type,bM.extend,bM.statics,bM.construct,bM.destruct);
if(bM.extend){if(bM.properties){this.__B(bO,bM.properties,true);
}if(bM.members){this.__D(bO,bM.members,true,true,false);
}if(bM.events){this.__A(bO,bM.events,true);
}if(bM.include){for(var i=0,l=bM.include.length;i<l;i++){this.__G(bO,bM.include[i],false);
}}}if(bM.settings){for(var bN in bM.settings){qx.core.Setting.define(bN,bM.settings[bN]);
}}if(bM.variants){for(var bN in bM.variants){qx.core.Variant.define(bN,bM.variants[bN].allowedValues,bM.variants[bN].defaultValue);
}}if(bM.implement){for(var i=0,l=bM.implement.length;i<l;i++){this.__F(bO,bM.implement[i]);
}}{};
if(bM.defer){bM.defer.self=bO;
bM.defer(bO,bO.prototype,{add:function(name,bP){var bQ={};
bQ[name]=bP;
qx.Class.__B(bO,bQ,true);
}});
}return bO;
},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(q,r){{};
qx.Class.__G(q,r,false);
},patch:function(t,u){{};
qx.Class.__G(t,u,true);
},isSubClassOf:function(C,D){if(!C){return false;
}
if(C==D){return true;
}
if(C.prototype instanceof D){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(h){var j=[];

while(h){if(h.$$properties){j.push.apply(j,qx.Bootstrap.getKeys(h.$$properties));
}h=h.superclass;
}return j;
},getByProperty:function(s,name){while(s){if(s.$$properties&&s.$$properties[name]){return s;
}s=s.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bx,by){return bx.$$includes&&bx.$$includes.indexOf(by)!==-1;
},getByMixin:function(k,m){var n,i,l;

while(k){if(k.$$includes){n=k.$$flatIncludes;

for(i=0,l=n.length;i<l;i++){if(n[i]===m){return k;
}}}k=k.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(o,p){return !!this.getByMixin(o,p);
},hasOwnInterface:function(bi,bj){return bi.$$implements&&bi.$$implements.indexOf(bj)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(Q){var R=[];

while(Q){if(Q.$$implements){R.push.apply(R,Q.$$flatImplements);
}Q=Q.superclass;
}return R;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(b,c){var d=b.constructor;

if(this.hasInterface(d,c)){return true;
}
try{qx.Interface.assertObject(b,c);
return true;
}catch(V){}
try{qx.Interface.assert(d,c,false);
return true;
}catch(bz){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bs+this.classname+br;
},$$registry:qx.Bootstrap.$$registry,__v:null,__w:null,__x:function(){},__y:function(){},__z:function(name,E,F,G,H,I){var N;

if(!F&&true){N=G||{};
qx.Bootstrap.setDisplayNames(N,name);
}else{N={};

if(F){if(!H){H=this.__H();
}N=this.__J(H,name,E);
qx.Bootstrap.setDisplayName(H,name,bp);
}if(G){qx.Bootstrap.setDisplayNames(G,name);
var O;

for(var i=0,a=qx.Bootstrap.getKeys(G),l=a.length;i<l;i++){O=a[i];
var K=G[O];
{N[O]=K;
};
}}}var M=qx.Bootstrap.createNamespace(name,N,false);
N.name=N.classname=name;
N.basename=M;
N.$$type=bn;

if(E){N.$$classtype=E;
}if(!N.hasOwnProperty(bq)){N.toString=this.genericToString;
}
if(F){var P=F.prototype;
var J=this.__I();
J.prototype=P;
var L=new J;
N.prototype=L;
L.name=L.classname=name;
L.basename=M;
H.base=N.superclass=F;
H.self=N.constructor=L.constructor=N;
if(I){{};
N.$$destructor=I;
qx.Bootstrap.setDisplayName(I,name,bm);
}}this.$$registry[name]=N;
return N;
},__A:function(W,X,Y){var ba,ba;
{};

if(W.$$events){for(var ba in X){W.$$events[ba]=X[ba];
}}else{W.$$events=X;
}},__B:function(x,y,z){var B;

if(z===undefined){z=false;
}var A=!!x.$$propertiesAttached;

for(var name in y){B=y[name];
{};
B.name=name;
if(!B.refine){if(x.$$properties===undefined){x.$$properties={};
}x.$$properties[name]=B;
}if(B.init!==undefined){x.prototype["$$init_"+name]=B.init;
}if(B.event!==undefined){var event={};
event[B.event]="qx.event.type.Data";
this.__A(x,event,z);
}if(B.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(A){qx.core.Property.attachMethods(x,name,B);
}}},__C:null,__D:function(bE,bF,bG,bH,bI){var bJ=bE.prototype;
var bL,bK;
qx.Bootstrap.setDisplayNames(bF,bE.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bF),l=a.length;i<l;i++){bL=a[i];
bK=bF[bL];
{};
if(bH!==false&&bK instanceof Function&&bK.$$type==null){if(bI==true){bK=this.__E(bK,bJ[bL]);
}else{if(bJ[bL]){bK.base=bJ[bL];
}bK.self=bE;
}{};
}bJ[bL]=bK;
}},__E:function(v,w){if(w){return function(){var bh=v.base;
v.base=w;
var bg=v.apply(this,arguments);
v.base=bh;
return bg;
};
}else{return v;
}},__F:function(S,T){{};
var U=qx.Interface.flatten([T]);

if(S.$$implements){S.$$implements.push(T);
S.$$flatImplements.push.apply(S.$$flatImplements,U);
}else{S.$$implements=[T];
S.$$flatImplements=U;
}},__G:function(bb,bc,bd){{};

if(this.hasMixin(bb,bc)){return;
}var bf=qx.Mixin.flatten([bc]);
var be;

for(var i=0,l=bf.length;i<l;i++){be=bf[i];
if(be.$$events){this.__A(bb,be.$$events,bd);
}if(be.$$properties){this.__B(bb,be.$$properties,bd);
}if(be.$$members){this.__D(bb,be.$$members,bd,bd,bd);
}}if(bb.$$includes){bb.$$includes.push(bc);
bb.$$flatIncludes.push.apply(bb.$$flatIncludes,bf);
}else{bb.$$includes=[bc];
bb.$$flatIncludes=bf;
}},__H:function(){function bD(){arguments.callee.base.apply(this,arguments);
}return bD;
},__I:function(){return function(){};
},__J:function(bt,name,bu){var bv;
var bw=function(){var g=arguments.callee.constructor;
{};
if(!g.$$propertiesAttached){qx.core.Property.attach(g);
}var f=g.$$original.apply(this,arguments);
if(g.$$includes){var e=g.$$flatIncludes;

for(var i=0,l=e.length;i<l;i++){if(e[i].$$constructor){e[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return f;
};
{};
if(bu==="singleton"){bw.getInstance=this.getInstance;
}bw.$$original=bt;
bt.wrapper=bw;
return bw;
}},defer:function(bA){var bB,bA,bC;
{};
}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(D,E,F){D.attachEvent(h+E,F);
},"default":function(j,k,l){j.addEventListener(k,l,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(r,s,t){try{r.detachEvent(h+s,t);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(w,x,y){w.removeEventListener(x,y,false);
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
}catch(u){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(v){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(m,n){if(document.createEventObject){var o=document.createEventObject();
return m.fireEvent(h+n,o);
}else{var o=document.createEvent(a);
o.initEvent(n,true,true);
return !m.dispatchEvent(o);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(p,q){return p.hasOwnProperty(h+q);
},"default":function(z,A){var B=h+A;
var C=(B in z);

if(!C){C=typeof z[B]==g;

if(!C&&z.setAttribute){z.setAttribute(B,c);
C=typeof z[B]==g;
z.removeAttribute(B);
}}return C;
}})}});
})();
(function(){var x="|bubble",w="|capture",v="|",u="_",t="unload",s="UNKNOWN_",r="DOM_",q="c",p="__n",o="WIN_",k="capture",n="qx.event.Manager",m="__o",j="QX_";
qx.Class.define(n,{extend:Object,construct:function(bw,bx){this.__l=bw;
this.__eU=qx.core.ObjectRegistry.toHashCode(bw);
this.__eV=bx;
if(bw.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(bw,t,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(bw,t,arguments.callee);
self.dispose();
}));
}this.__m={};
this.__n={};
this.__o={};
this.__p={};
},statics:{__q:0,getNextUniqueId:function(){return (this.__q++).toString(36);
}},members:{__eV:null,__m:null,__o:null,__r:null,__n:null,__p:null,__l:null,__eU:null,getWindow:function(){return this.__l;
},getWindowId:function(){return this.__eU;
},getHandler:function(e){var f=this.__n[e.classname];

if(f){return f;
}return this.__n[e.classname]=new e(this);
},getDispatcher:function(g){var h=this.__o[g.classname];

if(h){return h;
}return this.__o[g.classname]=new g(this,this.__eV);
},getListeners:function(Y,ba,bb){var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__m[bc];

if(!be){return null;
}var bf=ba+(bb?w:x);
var bd=be[bf];
return bd?bd.concat():null;
},serializeListeners:function(O){var V=O.$$hash||qx.core.ObjectRegistry.toHashCode(O);
var X=this.__m[V];
var T=[];

if(X){var R,W,P,S,U;

for(var Q in X){R=Q.indexOf(v);
W=Q.substring(0,R);
P=Q.charAt(R+1)==q;
S=X[Q];

for(var i=0,l=S.length;i<l;i++){U=S[i];
T.push({self:U.context,handler:U.handler,type:W,capture:P});
}}}return T;
},toggleAttachedEvents:function(bn,bo){var bt=bn.$$hash||qx.core.ObjectRegistry.toHashCode(bn);
var bv=this.__m[bt];

if(bv){var bq,bu,bp,br;

for(var bs in bv){bq=bs.indexOf(v);
bu=bs.substring(0,bq);
bp=bs.charCodeAt(bq+1)===99;
br=bv[bs];

if(bo){this.__s(bn,bu,bp);
}else{this.__t(bn,bu,bp);
}}}},hasListener:function(by,bz,bA){{};
var bB=by.$$hash||qx.core.ObjectRegistry.toHashCode(by);
var bD=this.__m[bB];

if(!bD){return false;
}var bE=bz+(bA?w:x);
var bC=bD[bE];
return bC&&bC.length>0;
},importListeners:function(F,G){{};
var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var N=this.__m[M]={};
var J=qx.event.Manager;

for(var H in G){var K=G[H];
var L=K.type+(K.capture?w:x);
var I=N[L];

if(!I){I=N[L]=[];
this.__s(F,K.type,K.capture);
}I.push({handler:K.listener,context:K.self,unique:K.unique||(J.__q++).toString(36)});
}},addListener:function(cg,ch,ci,self,cj){var cn;
{};
var co=cg.$$hash||qx.core.ObjectRegistry.toHashCode(cg);
var cq=this.__m[co];

if(!cq){cq=this.__m[co]={};
}var cm=ch+(cj?w:x);
var cl=cq[cm];

if(!cl){cl=cq[cm]=[];
}if(cl.length===0){this.__s(cg,ch,cj);
}var cp=(qx.event.Manager.__q++).toString(36);
var ck={handler:ci,context:self,unique:cp};
cl.push(ck);
return cm+v+cp;
},findHandler:function(cr,cs){var cC=false,cv=false,cD=false;
var cB;

if(cr.nodeType===1){cC=true;
cB=r+cr.tagName.toLowerCase()+u+cs;
}else if(cr==this.__l){cv=true;
cB=o+cs;
}else if(cr.classname){cD=true;
cB=j+cr.classname+u+cs;
}else{cB=s+cr+u+cs;
}var cx=this.__p;

if(cx[cB]){return cx[cB];
}var cA=this.__eV.getHandlers();
var cw=qx.event.IEventHandler;
var cy,cz,cu,ct;

for(var i=0,l=cA.length;i<l;i++){cy=cA[i];
cu=cy.SUPPORTED_TYPES;

if(cu&&!cu[cs]){continue;
}ct=cy.TARGET_CHECK;

if(ct){if(!cC&&ct===cw.TARGET_DOMNODE){continue;
}else if(!cv&&ct===cw.TARGET_WINDOW){continue;
}else if(!cD&&ct===cw.TARGET_OBJECT){continue;
}}cz=this.getHandler(cA[i]);

if(cy.IGNORE_CAN_HANDLE||cz.canHandleEvent(cr,cs)){cx[cB]=cz;
return cz;
}}return null;
},__s:function(cc,cd,ce){var cf=this.findHandler(cc,cd);

if(cf){cf.registerEvent(cc,cd,ce);
return;
}{};
},removeListener:function(bF,bG,bH,self,bI){var bM;
{};
var bN=bF.$$hash||qx.core.ObjectRegistry.toHashCode(bF);
var bO=this.__m[bN];

if(!bO){return false;
}var bJ=bG+(bI?w:x);
var bK=bO[bJ];

if(!bK){return false;
}var bL;

for(var i=0,l=bK.length;i<l;i++){bL=bK[i];

if(bL.handler===bH&&bL.context===self){qx.lang.Array.removeAt(bK,i);

if(bK.length==0){this.__t(bF,bG,bI);
}return true;
}}return false;
},removeListenerById:function(bP,bQ){var bW;
{};
var bU=bQ.split(v);
var ca=bU[0];
var bR=bU[1].charCodeAt(0)==99;
var bY=bU[2];
var bX=bP.$$hash||qx.core.ObjectRegistry.toHashCode(bP);
var cb=this.__m[bX];

if(!cb){return false;
}var bV=ca+(bR?w:x);
var bT=cb[bV];

if(!bT){return false;
}var bS;

for(var i=0,l=bT.length;i<l;i++){bS=bT[i];

if(bS.unique===bY){qx.lang.Array.removeAt(bT,i);

if(bT.length==0){this.__t(bP,ca,bR);
}return true;
}}return false;
},removeAllListeners:function(y){var C=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var E=this.__m[C];

if(!E){return false;
}var A,D,z;

for(var B in E){if(E[B].length>0){A=B.split(v);
D=A[0];
z=A[1]===k;
this.__t(y,D,z);
}}delete this.__m[C];
return true;
},__t:function(a,b,c){var d=this.findHandler(a,b);

if(d){d.unregisterEvent(a,b,c);
return;
}{};
},dispatchEvent:function(bg,event){var bl;
{};
var bm=event.getType();

if(!event.getBubbles()&&!this.hasListener(bg,bm)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bg);
}var bk=this.__eV.getDispatchers();
var bj;
var bi=false;

for(var i=0,l=bk.length;i<l;i++){bj=this.getDispatcher(bk[i]);
if(bj.canDispatchEvent(bg,event,bm)){bj.dispatchEvent(bg,event,bm);
bi=true;
break;
}}
if(!bi){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bm+" on "+bg);
return true;
}var bh=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bh;
},dispose:function(){this.__eV.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,p);
qx.util.DisposeUtil.disposeMap(this,m);
this.__m=this.__l=this.__r=null;
this.__eV=this.__p=null;
}}});
})();
(function(){var e="qx.dom.Node",d="qx.client",c="";
qx.Class.define(e,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(s){return s.nodeType===
this.DOCUMENT?s:
s.ownerDocument||s.document;
},getWindow:qx.core.Variant.select(d,{"mshtml":function(m){if(m.nodeType==null){return m;
}if(m.nodeType!==this.DOCUMENT){m=m.ownerDocument;
}return m.parentWindow;
},"default":function(b){if(b.nodeType==null){return b;
}if(b.nodeType!==this.DOCUMENT){b=b.ownerDocument;
}return b.defaultView;
}}),getDocumentElement:function(f){return this.getDocument(f).documentElement;
},getBodyElement:function(r){return this.getDocument(r).body;
},isNode:function(j){return !!(j&&j.nodeType!=null);
},isElement:function(t){return !!(t&&t.nodeType===this.ELEMENT);
},isDocument:function(q){return !!(q&&q.nodeType===this.DOCUMENT);
},isText:function(p){return !!(p&&p.nodeType===this.TEXT);
},isWindow:function(h){return !!(h&&h.history&&h.location&&h.document);
},isNodeName:function(k,l){if(!l||!k||!k.nodeName){return false;
}return l.toLowerCase()==qx.dom.Node.getName(k);
},getName:function(g){if(!g||!g.nodeName){return null;
}return g.nodeName.toLowerCase();
},getText:function(n){if(!n||!n.nodeType){return null;
}
switch(n.nodeType){case 1:var i,a=[],o=n.childNodes,length=o.length;

for(i=0;i<length;i++){a[i]=this.getText(o[i]);
}return a.join(c);
case 2:return n.nodeValue;
break;
case 3:return n.nodeValue;
break;
}return null;
}}});
})();
(function(){var ba="mshtml",Y="qx.client",X="[object Array]",W="qx.lang.Array",V="qx",U="number",T="string";
qx.Class.define(W,{statics:{toArray:function(L,M){return this.cast(L,Array,M);
},cast:function(N,O,P){if(N.constructor===O){return N;
}
if(qx.Class.hasInterface(N,qx.data.IListData)){var N=N.toArray();
}var Q=new O;
if(qx.core.Variant.isSet(Y,ba)){if(N.item){for(var i=P||0,l=N.length;i<l;i++){Q.push(N[i]);
}return Q;
}}if(Object.prototype.toString.call(N)===X&&P==null){Q.push.apply(Q,N);
}else{Q.push.apply(Q,Array.prototype.slice.call(N,P||0));
}return Q;
},fromArguments:function(bd,be){return Array.prototype.slice.call(bd,be||0);
},fromCollection:function(bp){if(qx.core.Variant.isSet(Y,ba)){if(bp.item){var bq=[];

for(var i=0,l=bp.length;i<l;i++){bq[i]=bp[i];
}return bq;
}}return Array.prototype.slice.call(bp,0);
},fromShortHand:function(I){var K=I.length;
var J=qx.lang.Array.clone(I);
switch(K){case 1:J[1]=J[2]=J[3]=J[0];
break;
case 2:J[2]=J[0];
case 3:J[3]=J[1];
}return J;
},clone:function(bl){return bl.concat();
},insertAt:function(bb,bc,i){bb.splice(i,0,bc);
return bb;
},insertBefore:function(F,G,H){var i=F.indexOf(H);

if(i==-1){F.push(G);
}else{F.splice(i,0,G);
}return F;
},insertAfter:function(bm,bn,bo){var i=bm.indexOf(bo);

if(i==-1||i==(bm.length-1)){bm.push(bn);
}else{bm.splice(i+1,0,bn);
}return bm;
},removeAt:function(bk,i){return bk.splice(i,1)[0];
},removeAll:function(u){u.length=0;
return this;
},append:function(R,S){{};
Array.prototype.push.apply(R,S);
return R;
},exclude:function(v,w){{};

for(var i=0,y=w.length,x;i<y;i++){x=v.indexOf(w[i]);

if(x!=-1){v.splice(x,1);
}}return v;
},remove:function(bi,bj){var i=bi.indexOf(bj);

if(i!=-1){bi.splice(i,1);
return bj;
}},contains:function(bf,bg){return bf.indexOf(bg)!==-1;
},equals:function(s,t){var length=s.length;

if(length!==t.length){return false;
}
for(var i=0;i<length;i++){if(s[i]!==t[i]){return false;
}}return true;
},sum:function(D){var E=0;

for(var i=0,l=D.length;i<l;i++){E+=D[i];
}return E;
},max:function(z){{};
var i,B=z.length,A=z[0];

for(i=1;i<B;i++){if(z[i]>A){A=z[i];
}}return A===undefined?null:A;
},min:function(p){{};
var i,r=p.length,q=p[0];

for(i=1;i<r;i++){if(p[i]<q){q=p[i];
}}return q===undefined?null:q;
},unique:function(a){var m=[],c={},f={},h={};
var g,b=0;
var n=V+qx.lang.Date.now();
var d=false,k=false,o=false;
for(var i=0,j=a.length;i<j;i++){g=a[i];
if(g===null){if(!d){d=true;
m.push(g);
}}else if(g===undefined){}else if(g===false){if(!k){k=true;
m.push(g);
}}else if(g===true){if(!o){o=true;
m.push(g);
}}else if(typeof g===T){if(!c[g]){c[g]=1;
m.push(g);
}}else if(typeof g===U){if(!f[g]){f[g]=1;
m.push(g);
}}else{e=g[n];

if(e==null){e=g[n]=b++;
}
if(!h[e]){h[e]=g;
m.push(g);
}}}for(var e in h){try{delete h[e][n];
}catch(C){try{h[e][n]=null;
}catch(bh){throw new Error("Cannot clean-up map entry doneObjects["+e+"]["+n+"]");
}}}return m;
}}});
})();
(function(){var D="()",C=".",B=".prototype.",A='anonymous()',z="qx.lang.Function",y=".constructor()";
qx.Class.define(z,{statics:{getCaller:function(H){return H.caller?H.caller.callee:H.callee.caller;
},getName:function(j){if(j.displayName){return j.displayName;
}
if(j.$$original||j.wrapper||j.classname){return j.classname+y;
}
if(j.$$mixin){for(var l in j.$$mixin.$$members){if(j.$$mixin.$$members[l]==j){return j.$$mixin.name+B+l+D;
}}for(var l in j.$$mixin){if(j.$$mixin[l]==j){return j.$$mixin.name+C+l+D;
}}}
if(j.self){var m=j.self.constructor;

if(m){for(var l in m.prototype){if(m.prototype[l]==j){return m.classname+B+l+D;
}}for(var l in m){if(m[l]==j){return m.classname+C+l+D;
}}}}var k=j.toString().match(/function\s*(\w*)\s*\(.*/);

if(k&&k.length>=1&&k[1]){return k[1]+D;
}return A;
},globalEval:function(x){if(window.execScript){return window.execScript(x);
}else{return eval.call(window,x);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(s,t){{};
if(!t){return s;
}if(!(t.self||t.args||t.delay!=null||t.periodical!=null||t.attempt)){return s;
}return function(event){{};
var q=qx.lang.Array.fromArguments(arguments);
if(t.args){q=t.args.concat(q);
}
if(t.delay||t.periodical){var p=qx.event.GlobalError.observeMethod(function(){return s.apply(t.self||this,q);
});

if(t.delay){return window.setTimeout(p,t.delay);
}
if(t.periodical){return window.setInterval(p,t.periodical);
}}else if(t.attempt){var r=false;

try{r=s.apply(t.self||this,q);
}catch(E){}return r;
}else{return s.apply(t.self||this,q);
}};
},bind:function(F,self,G){return this.create(F,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(n,o){return this.create(n,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(d,self,e){if(arguments.length<3){return function(event){return d.call(self||this,event||window.event);
};
}else{var f=qx.lang.Array.fromArguments(arguments,2);
return function(event){var c=[event||window.event];
c.push.apply(c,f);
d.apply(self||this,c);
};
}},attempt:function(a,self,b){return this.create(a,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(u,v,self,w){return this.create(u,{delay:v,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(g,h,self,i){return this.create(g,{periodical:h,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__K:{},getManager:function(v){if(v==null){{};
v=window;
}else if(v.nodeType){v=qx.dom.Node.getWindow(v);
}else if(!qx.dom.Node.isWindow(v)){v=window;
}var x=v.$$hash||qx.core.ObjectRegistry.toHashCode(v);
var w=this.__K[x];

if(!w){w=new qx.event.Manager(v,this);
this.__K[x]=w;
}return w;
},removeManager:function(N){var O=N.getWindowId();
delete this.__K[O];
},addListener:function(A,B,C,self,D){return this.getManager(A).addListener(A,B,C,self,D);
},removeListener:function(q,r,s,self,t){return this.getManager(q).removeListener(q,r,s,self,t);
},removeListenerById:function(y,z){return this.getManager(y).removeListenerById(y,z);
},removeAllListeners:function(p){return this.getManager(p).removeAllListeners(p);
},hasListener:function(E,F,G){return this.getManager(E).hasListener(E,F,G);
},serializeListeners:function(P){return this.getManager(P).serializeListeners(P);
},createEvent:function(J,K,L){{};
if(K==null){K=qx.event.type.Event;
}var M=qx.event.Pool.getInstance().getObject(K);

if(!M){return;
}L?M.init.apply(M,L):M.init();
if(J){M.setType(J);
}return M;
},dispatchEvent:function(Q,event){return this.getManager(Q).dispatchEvent(Q,event);
},fireEvent:function(j,k,l,m){var n;
{};
var o=this.createEvent(k,l||null,m);
return this.getManager(j).dispatchEvent(j,o);
},fireNonBubblingEvent:function(d,e,f,g){{};
var h=this.getManager(d);

if(!h.hasListener(d,e,false)){return true;
}var i=this.createEvent(e,f||null,g);
return h.dispatchEvent(d,i);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__L:[],addHandler:function(u){{};
this.__L.push(u);
this.__L.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__L;
},__M:[],addDispatcher:function(H,I){{};
this.__M.push(H);
this.__M.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__M;
}}});
})();
(function(){var d="$$hash",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__T:{},__U:0,__V:[],register:function(k){var o=this.__T;

if(!o){return;
}var n=k.$$hash;

if(n==null){var m=this.__V;

if(m.length>0){n=m.pop();
}else{n=(this.__U++).toString(36);
}k.$$hash=n;
}{};
o[n]=k;
},unregister:function(x){var y=x.$$hash;

if(y==null){return;
}var z=this.__T;

if(z&&z[y]){delete z[y];
this.__V.push(y);
}try{delete x.$$hash;
}catch(w){if(x.removeAttribute){x.removeAttribute(d);
}}},toHashCode:function(f){{};
var h=f.$$hash;

if(h!=null){return h;
}var g=this.__V;

if(g.length>0){h=g.pop();
}else{h=(this.__U++).toString(36);
}return f.$$hash=h;
},clearHashCode:function(t){{};
var u=t.$$hash;

if(u!=null){this.__V.push(u);
try{delete t.$$hash;
}catch(v){if(t.removeAttribute){t.removeAttribute(d);
}}}},fromHashCode:function(j){return this.__T[j]||null;
},shutdown:function(){this.inShutDown=true;
var q=this.__T;
var s=[];

for(var r in q){s.push(r);
}s.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var p,i=0,l=s.length;

while(true){try{for(;i<l;i++){r=s[i];
p=q[r];

if(p&&p.dispose){p.dispose();
}}}catch(e){qx.Bootstrap.error(this,"Could not dispose object "+p.toString()+": "+e);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__T;
},getRegistry:function(){return this.__T;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var c="qx.log.appender.RingBuffer";
qx.Class.define(c,{extend:Object,construct:function(e){this.__eW=[];
this.setMaxMessages(e||50);
},members:{__eX:0,__eW:null,__eY:50,setMaxMessages:function(d){this.__eY=d;
this.clearHistory();
},getMaxMessages:function(){return this.__eY;
},process:function(a){var b=this.getMaxMessages();

if(this.__eW.length<b){this.__eW.push(a);
}else{this.__eW[this.__eX++]=a;

if(this.__eX>=b){this.__eX=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(f){if(f>this.__eW.length){f=this.__eW.length;
}
if(this.__eW.length==this.getMaxMessages()){var h=this.__eX-1;
}else{h=this.__eW.length-1;
}var g=h-f+1;

if(g<0){g+=this.__eW.length;
}var i;

if(g<=h){i=this.__eW.slice(g,h+1);
}else{i=this.__eW.slice(g,this.__eW.length).concat(this.__eW.slice(0,h+1));
}return i;
},clearHistory:function(){this.__eW=[];
this.__eX=0;
}}});
})();
(function(){var t="node",s="error",r="...(+",q="array",p=")",o="info",n="instance",m="string",k="null",j="class",O="number",N="stringify",M="]",L="unknown",K="function",J="boolean",I="debug",H="map",G="undefined",F="qx.log.Logger",A=")}",B="#",y="warn",z="document",w="{...(",x="[",u="text[",v="[...(",C="\n",D=")]",E="object";
qx.Class.define(F,{statics:{__ba:I,setLevel:function(bt){this.__ba=bt;
},getLevel:function(){return this.__ba;
},setTreshold:function(V){this.__bd.setMaxMessages(V);
},getTreshold:function(){return this.__bd.getMaxMessages();
},__bb:{},__bc:0,register:function(P){if(P.$$id){return;
}var Q=this.__bc++;
this.__bb[Q]=P;
P.$$id=Q;
var R=this.__bd.getAllLogEvents();

for(var i=0,l=R.length;i<l;i++){P.process(R[i]);
}},unregister:function(g){var h=g.$$id;

if(h==null){return;
}delete this.__bb[h];
delete g.$$id;
},debug:function(Y,ba){qx.log.Logger.__bf(I,arguments);
},info:function(W,X){qx.log.Logger.__bf(o,arguments);
},warn:function(br,bs){qx.log.Logger.__bf(y,arguments);
},error:function(S,T){qx.log.Logger.__bf(s,arguments);
},trace:function(U){qx.log.Logger.__bf(o,[U,qx.dev.StackTrace.getStackTrace().join(C)]);
},deprecatedMethodWarning:function(a,b){var c;
{};
},deprecatedClassWarning:function(d,e){var f;
{};
},deprecatedEventWarning:function(bk,event,bl){var bm;
{};
},deprecatedMixinWarning:function(bI,bJ){var bK;
{};
},deprecatedConstantWarning:function(bu,bv,bw){var self,bx;
{};
},clear:function(){this.__bd.clearHistory();
},__bd:new qx.log.appender.RingBuffer(50),__be:{debug:0,info:1,warn:2,error:3},__bf:function(by,bz){var bE=this.__be;

if(bE[by]<bE[this.__ba]){return;
}var bB=bz.length<2?null:bz[0];
var bD=bB?1:0;
var bA=[];

for(var i=bD,l=bz.length;i<l;i++){bA.push(this.__bh(bz[i],true));
}var bF=new Date;
var bG={time:bF,offset:bF-qx.Bootstrap.LOADSTART,level:by,items:bA,win:window};
if(bB){if(bB instanceof qx.core.Object){bG.object=bB.$$hash;
}else if(bB.$$type){bG.clazz=bB;
}}this.__bd.process(bG);
var bH=this.__bb;

for(var bC in bH){bH[bC].process(bG);
}},__bg:function(bp){if(bp===undefined){return G;
}else if(bp===null){return k;
}
if(bp.$$type){return j;
}var bq=typeof bp;

if(bq===K||bq==m||bq===O||bq===J){return bq;
}else if(bq===E){if(bp.nodeType){return t;
}else if(bp.classname){return n;
}else if(bp instanceof Array){return q;
}else if(bp instanceof Error){return s;
}else{return H;
}}
if(bp.toString){return N;
}return L;
},__bh:function(bb,bc){var bj=this.__bg(bb);
var bf=L;
var be=[];

switch(bj){case k:case G:bf=bj;
break;
case m:case O:case J:bf=bb;
break;
case t:if(bb.nodeType===9){bf=z;
}else if(bb.nodeType===3){bf=u+bb.nodeValue+M;
}else if(bb.nodeType===1){bf=bb.nodeName.toLowerCase();

if(bb.id){bf+=B+bb.id;
}}else{bf=t;
}break;
case K:bf=qx.lang.Function.getName(bb)||bj;
break;
case n:bf=bb.basename+x+bb.$$hash+M;
break;
case j:case N:bf=bb.toString();
break;
case s:be=qx.dev.StackTrace.getStackTraceFromError(bb);
bf=bb.toString();
break;
case q:if(bc){bf=[];

for(var i=0,l=bb.length;i<l;i++){if(bf.length>20){bf.push(r+(l-i)+p);
break;
}bf.push(this.__bh(bb[i],false));
}}else{bf=v+bb.length+D;
}break;
case H:if(bc){var bd;
var bi=[];

for(var bh in bb){bi.push(bh);
}bi.sort();
bf=[];

for(var i=0,l=bi.length;i<l;i++){if(bf.length>20){bf.push(r+(l-i)+p);
break;
}bh=bi[i];
bd=this.__bh(bb[bh],false);
bd.key=bh;
bf.push(bd);
}}else{var bg=0;

for(var bh in bb){bg++;
}bf=w+bg+A;
}break;
}return {type:bj,text:bf,trace:be};
}},defer:function(bn){var bo=qx.Bootstrap.$$logs;

for(var i=0;i<bo.length;i++){this.__bf(bo[i][0],bo[i][1]);
}qx.Bootstrap.debug=bn.debug;
qx.Bootstrap.info=bn.info;
qx.Bootstrap.warn=bn.warn;
qx.Bootstrap.error=bn.error;
qx.Bootstrap.trace=bn.trace;
}});
})();
(function(){var m="set",k="get",j="reset",h="qx.core.Object",g="]",f="[",d="$$user_",c="Object";
qx.Class.define(h,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:c},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+f+this.$$hash+g;
},base:function(y,z){{};

if(arguments.length===1){return y.callee.base.call(this);
}else{return y.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(o){return o.callee.self;
},clone:function(){var B=this.constructor;
var A=new B;
var D=qx.Class.getProperties(B);
var C=qx.core.Property.$$store.user;
var E=qx.core.Property.$$method.set;
var name;
for(var i=0,l=D.length;i<l;i++){name=D[i];

if(this.hasOwnProperty(C[name])){A[E[name]](this[C[name]]);
}}return A;
},set:function(bw,bx){var bz=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(bw)){if(!this[bz[bw]]){if(this[m+qx.Bootstrap.firstUp(bw)]!=undefined){this[m+qx.Bootstrap.firstUp(bw)](bx);
return;
}{};
}return this[bz[bw]](bx);
}else{for(var by in bw){if(!this[bz[by]]){if(this[m+qx.Bootstrap.firstUp(by)]!=undefined){this[m+qx.Bootstrap.firstUp(by)](bw[by]);
continue;
}{};
}this[bz[by]](bw[by]);
}return this;
}},get:function(bt){var bu=qx.core.Property.$$method.get;

if(!this[bu[bt]]){if(this[k+qx.Bootstrap.firstUp(bt)]!=undefined){return this[k+qx.Bootstrap.firstUp(bt)]();
}{};
}return this[bu[bt]]();
},reset:function(bo){var bp=qx.core.Property.$$method.reset;

if(!this[bp[bo]]){if(this[j+qx.Bootstrap.firstUp(bo)]!=undefined){this[j+qx.Bootstrap.firstUp(bo)]();
return;
}{};
}this[bp[bo]]();
},__bi:qx.event.Registration,addListener:function(v,w,self,x){if(!this.$$disposed){return this.__bi.addListener(this,v,w,self,x);
}return null;
},addListenerOnce:function(Q,R,self,S){var T=function(e){R.call(self||this,e);
this.removeListener(Q,T,this,S);
};
return this.addListener(Q,T,this,S);
},removeListener:function(q,r,self,s){if(!this.$$disposed){return this.__bi.removeListener(this,q,r,self,s);
}return false;
},removeListenerById:function(p){if(!this.$$disposed){return this.__bi.removeListenerById(this,p);
}return false;
},hasListener:function(G,H){return this.__bi.hasListener(this,G,H);
},dispatchEvent:function(I){if(!this.$$disposed){return this.__bi.dispatchEvent(this,I);
}return true;
},fireEvent:function(bq,br,bs){if(!this.$$disposed){return this.__bi.fireEvent(this,bq,br,bs);
}return true;
},fireNonBubblingEvent:function(J,K,L){if(!this.$$disposed){return this.__bi.fireNonBubblingEvent(this,J,K,L);
}return true;
},fireDataEvent:function(bk,bl,bm,bn){if(!this.$$disposed){if(bm===undefined){bm=null;
}return this.__bi.fireNonBubblingEvent(this,bk,qx.event.type.Data,[bl,bm,!!bn]);
}return true;
},__bj:null,setUserData:function(a,b){if(!this.__bj){this.__bj={};
}this.__bj[a]=b;
},getUserData:function(O){if(!this.__bj){return null;
}var P=this.__bj[O];
return P===undefined?null:P;
},__bk:qx.log.Logger,debug:function(U){this.__bk.debug(this,U);
},info:function(t){this.__bk.info(this,t);
},warn:function(bv){this.__bk.warn(this,bv);
},error:function(V){this.__bk.error(this,V);
},trace:function(){this.__bk.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bi,bg;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var bh=this.constructor;
var bf;

while(bh.superclass){if(bh.$$destructor){bh.$$destructor.call(this);
}if(bh.$$includes){bf=bh.$$flatIncludes;

for(var i=0,l=bf.length;i<l;i++){if(bf[i].$$destructor){bf[i].$$destructor.call(this);
}}}bh=bh.superclass;
}var bj=qx.Class.getProperties(this.constructor);

for(var i=0,l=bj.length;i<l;i++){delete this[d+bj[i]];
}{};
},_disposeFields:function(u){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(F){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(n){qx.util.DisposeUtil.disposeArray(this,n);
},_disposeMap:function(M){qx.util.DisposeUtil.disposeMap(this,M);
}},settings:{"qx.disposerDebugLevel":0},defer:function(N){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__bj=null;
var Y=this.constructor;
var bd;
var be=qx.core.Property.$$store;
var bb=be.user;
var bc=be.theme;
var W=be.inherit;
var ba=be.useinit;
var X=be.init;

while(Y){bd=Y.$$properties;

if(bd){for(var name in bd){if(bd[name].dispose){this[bb[name]]=this[bc[name]]=this[W[name]]=this[ba[name]]=this[X[name]]=undefined;
}}}Y=Y.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var d="qx.globalErrorHandling",c="on",b="qx.event.GlobalError";
qx.Class.define(b,{statics:{setErrorHandler:function(k,l){this.__fa=k||null;
this.__fb=l||window;

if(qx.core.Setting.get(d)===c){if(k&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__fc,this);
}
if(!k&&window.onerror){window.onerror=null;
}}},__fc:function(g,h,i){if(this.__fa){this.handleError(new qx.core.WindowError(g,h,i));
return true;
}},observeMethod:function(a){if(qx.core.Setting.get(d)===c){var self=this;
return function(){if(!self.__fa){return a.apply(this,arguments);
}
try{return a.apply(this,arguments);
}catch(e){self.handleError(new qx.core.GlobalError(e,arguments));
}};
}else{return a;
}},handleError:function(f){if(this.__fa){this.__fa.call(this.__fb,f);
}}},defer:function(j){qx.core.Setting.define(d,c);
j.setErrorHandler(null,null);
}});
})();
(function(){var m="ready",l="qx.client",k="mshtml",j="load",i="unload",h="qx.event.handler.Application",g="complete",f="gecko|opera|webkit",d="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(s){arguments.callee.base.call(this);
this._window=s.getWindow();
this.__br=false;
this.__bs=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__bt:false,onScriptLoaded:function(){this.__bt=true;
var r=qx.event.handler.Application.$$instance;

if(r){r.__bu();
}}},members:{canHandleEvent:function(n,o){},registerEvent:function(x,y,z){},unregisterEvent:function(u,v,w){},__bv:null,__br:null,__bs:null,__bw:null,__bu:function(){var p=qx.event.handler.Application;
if(!this.__bv&&this.__br&&p.__bt){if(qx.core.Variant.isSet(l,k)){if(qx.event.Registration.hasListener(this._window,m)){this.__bv=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__bv=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__bv;
},_initObserver:function(){if(qx.$$domReady||document.readyState==g){this.__br=true;
this.__bu();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(l,f)){qx.bom.Event.addNativeListener(this._window,c,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(l,k)){var self=this;
var a=function(){try{document.documentElement.doScroll(d);

if(document.body){self._onNativeLoadWrapped();
}}catch(q){window.setTimeout(a,100);
}};
a();
}qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,i,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,i,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__br=true;
this.__bu();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__bw){this.__bw=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(t){qx.event.Registration.addHandler(t);
}});
})();
(function(){var c="ready",b="qx.bom.Lifecycle",a="shutdown";
qx.Class.define(b,{statics:{onReady:function(f,g){var i=qx.event.Registration;
var h=i.getManager(window).getHandler(qx.event.handler.Application);
if(h&&h.isApplicationReady()){f.call(g);
}else{i.addListener(window,c,f,g);
}},onShutdown:function(d,e){qx.event.Registration.addListener(window,a,d,e);
}}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__dP:function(){this.QUIRKS_MODE=this.__fd();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__fd:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__dP();
}});
})();
(function(){var a="qx.lang.Object";
qx.Class.define(a,{statics:{empty:function(f){{};

for(var g in f){if(f.hasOwnProperty(g)){delete f[g];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(h){{};
return h.__count__===0;
}:
function(n){{};

for(var o in n){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(F,G){{};
return F.__count__>=G;
}:
function(r,s){{};

if(s<=0){return true;
}var length=0;

for(var t in r){if((++length)>=s){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(z){{};
var B=[];
var A=this.getKeys(z);

for(var i=0,l=A.length;i<l;i++){B.push(z[A[i]]);
}return B;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(p,q){{};
return qx.lang.Object.mergeWith(p,q,false);
},merge:function(H,I){{};
var J=arguments.length;

for(var i=1;i<J;i++){qx.lang.Object.mergeWith(H,arguments[i]);
}return H;
},clone:function(C){{};
var D={};

for(var E in C){D[E]=C[E];
}return D;
},invert:function(w){{};
var x={};

for(var y in w){x[w[y].toString()]=y;
}return x;
},getKeyFromValue:function(j,k){{};

for(var m in j){if(j.hasOwnProperty(m)&&j[m]===k){return m;
}}return null;
},contains:function(u,v){{};
return this.getKeyFromValue(u,v)!==null;
},select:function(d,e){{};
return e[d];
},fromArray:function(b){{};
var c={};

for(var i=0,l=b.length;i<l;i++){{};
c[b[i].toString()]=true;
}return c;
}}});
})();
(function(){var j="emulated",h="native",g='"',f="qx.lang.Core",e="\\\\",d="\\\"",c="[object Error]";
qx.Class.define(f,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==c)?j:h,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?h:j,{"native":Array.prototype.indexOf,"emulated":function(a,b){if(b==null){b=0;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i<this.length;i++){if(this[i]===a){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?h:j,{"native":Array.prototype.lastIndexOf,"emulated":function(k,m){if(m==null){m=this.length-1;
}else if(m<0){m=Math.max(0,this.length+m);
}
for(var i=m;i>=0;i--){if(this[i]===k){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?h:j,{"native":Array.prototype.forEach,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){y.call(z||window,A,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?h:j,{"native":Array.prototype.filter,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){if(u.call(v||window,x,i,this)){w.push(this[i]);
}}}return w;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?h:j,{"native":Array.prototype.map,"emulated":function(n,o){var p=[];
var l=this.length;

for(var i=0;i<l;i++){var q=this[i];

if(q!==undefined){p[i]=n.call(o||window,q,i,this);
}}return p;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?h:j,{"native":Array.prototype.some,"emulated":function(r,s){var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){if(r.call(s||window,t,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?h:j,{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?h:j,{"native":String.prototype.quote,"emulated":function(){return g+this.replace(/\\/g,e).replace(/\"/g,d)+g;
}})}});
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
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__bx:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__by:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bz:function(){var L=qx.lang.Generics.__bx;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__by(N,O);
}}}}},defer:function(Q){Q.__bz();
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(g){},setItem:function(e,f){},splice:function(h,i,j){},contains:function(d){},getLength:function(){},toArray:function(){}}});
})();
(function(){var j="qx.event.type.Event";
qx.Class.define(j,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(c,d){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!c;
this._cancelable=!!d;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(g){if(g){var h=g;
}else{var h=qx.event.Pool.getInstance().getObject(this.constructor);
}h._type=this._type;
h._target=this._target;
h._currentTarget=this._currentTarget;
h._relatedTarget=this._relatedTarget;
h._originalTarget=this._originalTarget;
h._stopPropagation=this._stopPropagation;
h._bubbles=this._bubbles;
h._preventDefault=this._preventDefault;
h._cancelable=this._cancelable;
return h;
},stop:function(){this.stopPropagation();
this.preventDefault();
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(m){this._type=m;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(i){this._eventPhase=i;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(b){this._target=b;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(f){this._currentTarget=f;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(a){this._relatedTarget=a;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(k){this._originalTarget=k;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(e){this._bubbles=e;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(l){this._cancelable=l;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__bB:null,__bC:null,init:function(b,c,d){arguments.callee.base.call(this,false,d);
this.__bB=b;
this.__bC=c;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f.__bB=this.__bB;
f.__bC=this.__bC;
return f;
},getData:function(){return this.__bB;
},getOldData:function(){return this.__bC;
}},destruct:function(){this.__bB=this.__bC=null;
}});
})();
(function(){var cq="get",cp="",co="[",cn="last",cm="change",cl="]",ck=".",cj="Number",ci="String",ch="set",cF="deepBinding",cE="item",cD="reset",cC="' (",cB="Boolean",cA=") to the object '",cz="Integer",cy="qx.data.SingleValueBinding",cx="No event could be found for the property",cw="Binding from '",cu="PositiveNumber",cv="PositiveInteger",cs="Binding does not exist!",ct=").",cr="Date";
qx.Class.define(cy,{statics:{DEBUG_ON:false,__bE:{},bind:function(b,c,d,f,g){var s=this.__fe(b,c,d,f,g);
var n=c.split(ck);
var k=this.__bL(n);
var r=[];
var o=[];
var p=[];
var l=[];
var m=b;
for(var i=0;i<n.length;i++){if(k[i]!==cp){l.push(cm);
}else{l.push(this.__bG(m,n[i]));
}r[i]=m;
if(i==n.length-1){if(k[i]!==cp){var v=k[i]===cn?m.length-1:k[i];
var h=m.getItem(v);
this.__bK(h,d,f,g,b);
p[i]=this.__bM(m,l[i],d,f,g,k[i]);
}else{if(n[i]!=null&&m[cq+qx.lang.String.firstUp(n[i])]!=null){var h=m[cq+qx.lang.String.firstUp(n[i])]();
this.__bK(h,d,f,g,b);
}p[i]=this.__bM(m,l[i],d,f,g);
}}else{var t={index:i,propertyNames:n,sources:r,listenerIds:p,arrayIndexValues:k,targetObject:d,targetPropertyChain:f,options:g,listeners:o};
var q=qx.lang.Function.bind(this.__bF,this,t);
o.push(q);
p[i]=m.addListener(l[i],q);
}if(m[cq+qx.lang.String.firstUp(n[i])]==null){m=null;
}else if(k[i]!==cp){m=m[cq+qx.lang.String.firstUp(n[i])](k[i]);
}else{m=m[cq+qx.lang.String.firstUp(n[i])]();
}
if(!m){break;
}}var u={type:cF,listenerIds:p,sources:r,targetListenerIds:s.listenerIds,targets:s.targets};
this.__bN(u,b,c,d,f);
return u;
},__bF:function(bw){if(bw.options&&bw.options.onUpdate){bw.options.onUpdate(bw.sources[bw.index],bw.targetObject);
}for(var j=bw.index+1;j<bw.propertyNames.length;j++){var bA=bw.sources[j];
bw.sources[j]=null;

if(!bA){continue;
}bA.removeListenerById(bw.listenerIds[j]);
}var bA=bw.sources[bw.index];
for(var j=bw.index+1;j<bw.propertyNames.length;j++){if(bw.arrayIndexValues[j-1]!==cp){bA=bA[cq+qx.lang.String.firstUp(bw.propertyNames[j-1])](bw.arrayIndexValues[j-1]);
}else{bA=bA[cq+qx.lang.String.firstUp(bw.propertyNames[j-1])]();
}bw.sources[j]=bA;
if(!bA){this.__bH(bw.targetObject,bw.targetPropertyChain);
break;
}if(j==bw.propertyNames.length-1){if(qx.Class.implementsInterface(bA,qx.data.IListData)){var bB=bw.arrayIndexValues[j]===cn?bA.length-1:bw.arrayIndexValues[j];
var by=bA.getItem(bB);
this.__bK(by,bw.targetObject,bw.targetPropertyChain,bw.options,bw.sources[bw.index]);
bw.listenerIds[j]=this.__bM(bA,cm,bw.targetObject,bw.targetPropertyChain,bw.options,bw.arrayIndexValues[j]);
}else{if(bw.propertyNames[j]!=null&&bA[cq+qx.lang.String.firstUp(bw.propertyNames[j])]!=null){var by=bA[cq+qx.lang.String.firstUp(bw.propertyNames[j])]();
this.__bK(by,bw.targetObject,bw.targetPropertyChain,bw.options,bw.sources[bw.index]);
}var bz=this.__bG(bA,bw.propertyNames[j]);
bw.listenerIds[j]=this.__bM(bA,bz,bw.targetObject,bw.targetPropertyChain,bw.options);
}}else{if(bw.listeners[j]==null){var bx=qx.lang.Function.bind(this.__bF,this,bw);
bw.listeners.push(bx);
}if(qx.Class.implementsInterface(bA,qx.data.IListData)){var bz=cm;
}else{var bz=this.__bG(bA,bw.propertyNames[j]);
}bw.listenerIds[j]=bA.addListener(bz,bw.listeners[j]);
}}},__fe:function(Y,ba,bb,bc,bd){var bh=bc.split(ck);
var bf=this.__bL(bh);
var bm=[];
var bl=[];
var bj=[];
var bi=[];
var bg=bb;
for(var i=0;i<bh.length-1;i++){if(bf[i]!==cp){bi.push(cm);
}else{try{bi.push(this.__bG(bg,bh[i]));
}catch(e){break;
}}bm[i]=bg;
var bk=function(){for(var j=i+1;j<bh.length-1;j++){var I=bm[j];
bm[j]=null;

if(!I){continue;
}I.removeListenerById(bj[j]);
}var I=bm[i];
for(var j=i+1;j<bh.length-1;j++){var G=qx.lang.String.firstUp(bh[j-1]);
if(bf[j-1]!==cp){var J=bf[j-1]===cn?I.getLength()-1:bf[j-1];
I=I[cq+G](J);
}else{I=I[cq+G]();
}bm[j]=I;
if(bl[j]==null){bl.push(bk);
}if(qx.Class.implementsInterface(I,qx.data.IListData)){var H=cm;
}else{try{var H=qx.data.SingleValueBinding.__bG(I,bh[j]);
}catch(e){break;
}}bj[j]=I.addListener(H,bl[j]);
}qx.data.SingleValueBinding.__ff(Y,ba,bb,bc);
};
bl.push(bk);
bj[i]=bg.addListener(bi[i],bk);
var be=qx.lang.String.firstUp(bh[i]);
if(bg[cq+be]==null){bg=null;
}else if(bf[i]!==cp){bg=bg[cq+be](bf[i]);
}else{bg=bg[cq+be]();
}
if(!bg){break;
}}return {listenerIds:bj,targets:bm};
},__ff:function(bU,bV,bW,bX){var cc=this.__bJ(bU,bV);

if(cc!=null){var ce=bV.substring(bV.lastIndexOf(ck)+1,bV.length);
if(ce.charAt(ce.length-1)==cl){var bY=ce.substring(ce.lastIndexOf(co)+1,ce.length-1);
var cb=ce.substring(0,ce.lastIndexOf(co));
var cd=cc[cq+qx.lang.String.firstUp(cb)]();

if(bY==cn){bY=cd.length-1;
}
if(cd!=null){var ca=cd.getItem(bY);
}}else{var ca=cc[cq+qx.lang.String.firstUp(ce)]();
}}this.__bI(bW,bX,ca);
},__bG:function(cR,cS){var cT=this.__bP(cR,cS);
if(cT==null){if(qx.Class.supportsEvent(cR.constructor,cS)){cT=cS;
}else if(qx.Class.supportsEvent(cR.constructor,cm+qx.lang.String.firstUp(cS))){cT=cm+qx.lang.String.firstUp(cS);
}else{throw new qx.core.AssertionError(cx,cS);
}}return cT;
},__bH:function(T,U){var V=this.__bJ(T,U);

if(V!=null){var W=U.substring(U.lastIndexOf(ck)+1,U.length);
if(W.charAt(W.length-1)==cl){this.__bI(T,U,null);
return;
}if(V[cD+qx.lang.String.firstUp(W)]!=undefined){V[cD+qx.lang.String.firstUp(W)]();
}else{V[ch+qx.lang.String.firstUp(W)](null);
}}},__bI:function(bJ,bK,bL){var bP=this.__bJ(bJ,bK);

if(bP!=null){var bQ=bK.substring(bK.lastIndexOf(ck)+1,bK.length);
if(bQ.charAt(bQ.length-1)==cl){var bM=bQ.substring(bQ.lastIndexOf(co)+1,bQ.length-1);
var bO=bQ.substring(0,bQ.lastIndexOf(co));
var bN=bP[cq+qx.lang.String.firstUp(bO)]();

if(bM==cn){bM=bN.length-1;
}
if(bN!=null){bN.setItem(bM,bL);
}}else{bP[ch+qx.lang.String.firstUp(bQ)](bL);
}}},__bJ:function(K,L){var O=L.split(ck);
var P=K;
for(var i=0;i<O.length-1;i++){try{var N=O[i];
if(N.indexOf(cl)==N.length-1){var M=N.substring(N.indexOf(co)+1,N.length-1);
N=N.substring(0,N.indexOf(co));
}P=P[cq+qx.lang.String.firstUp(N)]();

if(M!=null){if(M==cn){M=P.length-1;
}P=P.getItem(M);
M=null;
}}catch(X){return null;
}}return P;
},__bK:function(w,x,y,z,A){w=this.__bO(w,x,y,z);
if(w==null){this.__bH(x,y);
}if(w!=undefined){try{this.__bI(x,y,w);
if(z&&z.onUpdate){z.onUpdate(A,x,w);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(z&&z.onSetFail){z.onSetFail(e);
}else{this.warn("Failed so set value "+w+" on "+x+". Error message: "+e);
}}}},__bL:function(bG){var bH=[];
for(var i=0;i<bG.length;i++){var name=bG[i];
if(qx.lang.String.endsWith(name,cl)){var bI=name.substring(name.indexOf(co)+1,name.indexOf(cl));
if(name.indexOf(cl)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bI!==cn){if(bI==cp||isNaN(parseInt(bI))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(co)!=0){bG[i]=name.substring(0,name.indexOf(co));
bH[i]=cp;
bH[i+1]=bI;
bG.splice(i+1,0,cE);
i++;
}else{bH[i]=bI;
bG.splice(i,1,cE);
}}else{bH[i]=cp;
}}return bH;
},__bM:function(bn,bo,bp,bq,br,bs){var bt;
{};
var bv=function(cK,e){if(cK!==cp){if(cK===cn){cK=bn.length-1;
}var cN=bn.getItem(cK);
if(cN==undefined){qx.data.SingleValueBinding.__bH(bp,bq);
}var cL=e.getData().start;
var cM=e.getData().end;

if(cK<cL||cK>cM){return;
}}else{var cN=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bn+" by "+bo+" to "+bp+" ("+bq+")");
qx.log.Logger.debug("Data before conversion: "+cN);
}cN=qx.data.SingleValueBinding.__bO(cN,bp,bq,br);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+cN);
}try{if(cN!=undefined){qx.data.SingleValueBinding.__bI(bp,bq,cN);
}else{qx.data.SingleValueBinding.__bH(bp,bq);
}if(br&&br.onUpdate){br.onUpdate(bn,bp,cN);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(br&&br.onSetFail){br.onSetFail(e);
}else{this.warn("Failed so set value "+cN+" on "+bp+". Error message: "+e);
}}};
if(!bs){bs=cp;
}bv=qx.lang.Function.bind(bv,bn,bs);
var bu=bn.addListener(bo,bv);
return bu;
},__bN:function(B,C,D,E,F){if(this.__bE[C.toHashCode()]===undefined){this.__bE[C.toHashCode()]=[];
}this.__bE[C.toHashCode()].push([B,C,D,E,F]);
},__bO:function(cU,cV,cW,cX){if(cX&&cX.converter){var da;

if(cV.getModel){da=cV.getModel();
}return cX.converter(cU,da);
}else{var dc=this.__bJ(cV,cW);
var dd=cW.substring(cW.lastIndexOf(ck)+1,cW.length);
if(dc==null){return cU;
}var db=qx.Class.getPropertyDefinition(dc.constructor,dd);
var cY=db==null?cp:db.check;
return this.__bQ(cU,cY);
}},__bP:function(Q,R){var S=qx.Class.getPropertyDefinition(Q.constructor,R);

if(S==null){return null;
}return S.event;
},__bQ:function(cO,cP){var cQ=qx.lang.Type.getClass(cO);
if((cQ==cj||cQ==ci)&&(cP==cz||cP==cv)){cO=parseInt(cO);
}if((cQ==cB||cQ==cj||cQ==cr)&&cP==ci){cO=cO+cp;
}if((cQ==cj||cQ==ci)&&(cP==cj||cP==cu)){cO=parseFloat(cO);
}return cO;
},removeBindingFromObject:function(bR,bS){if(bS.type==cF){for(var i=0;i<bS.sources.length;i++){if(bS.sources[i]){bS.sources[i].removeListenerById(bS.listenerIds[i]);
}}for(var i=0;i<bS.targets.length;i++){if(bS.targets[i]){bS.targets[i].removeListenerById(bS.targetListenerIds[i]);
}}}else{bR.removeListenerById(bS);
}var bT=this.__bE[bR.toHashCode()];
if(bT!=undefined){for(var i=0;i<bT.length;i++){if(bT[i][0]==bS){qx.lang.Array.remove(bT,bT[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bE){{};
var bF=this.__bE[bE.toHashCode()];

if(bF!=undefined){for(var i=bF.length-1;i>=0;i--){this.removeBindingFromObject(bE,bF[i][0]);
}}},getAllBindingsForObject:function(a){if(this.__bE[a.toHashCode()]===undefined){this.__bE[a.toHashCode()]=[];
}return this.__bE[a.toHashCode()];
},removeAllBindings:function(){for(var cg in this.__bE){var cf=qx.core.ObjectRegistry.fromHashCode(cg);
if(cf==null){delete this.__bE[cg];
continue;
}this.removeAllBindingsForObject(cf);
}this.__bE={};
},getAllBindings:function(){return this.__bE;
},showBindingInLog:function(cG,cH){var cJ;
for(var i=0;i<this.__bE[cG.toHashCode()].length;i++){if(this.__bE[cG.toHashCode()][i][0]==cH){cJ=this.__bE[cG.toHashCode()][i];
break;
}}
if(cJ===undefined){var cI=cs;
}else{var cI=cw+cJ[1]+cC+cJ[2]+cA+cJ[3]+cC+cJ[4]+ct;
}qx.log.Logger.debug(cI);
},showAllBindingsInLog:function(){for(var bD in this.__bE){var bC=qx.core.ObjectRegistry.fromHashCode(bD);

for(var i=0;i<this.__bE[bD].length;i++){this.showBindingInLog(bC,this.__bE[bD][i][0]);
}}}}});
})();
(function(){var K="",J="g",I="0",H='\\$1',G="%",F='-',E="qx.lang.String",D=' ',C='\n',B="undefined";
qx.Class.define(E,{statics:{camelCase:function(m){return m.replace(/\-([a-z])/g,function(L,M){return M.toUpperCase();
});
},hyphenate:function(n){return n.replace(/[A-Z]/g,function(j){return (F+j.charAt(0).toLowerCase());
});
},capitalize:function(w){return w.replace(/\b[a-z]/g,function(Q){return Q.toUpperCase();
});
},clean:function(v){return this.trim(v.replace(/\s+/g,D));
},trimLeft:function(u){return u.replace(/^\s+/,K);
},trimRight:function(h){return h.replace(/\s+$/,K);
},trim:function(g){return g.replace(/^\s+|\s+$/g,K);
},startsWith:function(d,e){return d.indexOf(e)===0;
},endsWith:function(z,A){return z.substring(z.length-A.length,z.length)===A;
},repeat:function(x,y){return x.length>=0?new Array(y+1).join(x):K;
},pad:function(N,length,O){var P=length-N.length;

if(P>0){if(typeof O===B){O=I;
}return this.repeat(O,P)+N;
}else{return N;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(k,l){return k.indexOf(l)!=-1;
},format:function(a,b){var c=a;

for(var i=0;i<b.length;i++){c=c.replace(new RegExp(G+(i+1),J),b[i]);
}return c;
},escapeRegexpChars:function(o){return o.replace(/([.*+?^${}()|[\]\/\\])/g,H);
},toArray:function(t){return t.split(/\B|\b/g);
},stripTags:function(f){return f.replace(/<\/?[^>]+>/gi,K);
},stripScripts:function(p,q){var s=K;
var r=p.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){s+=arguments[1]+C;
return K;
});

if(q===true){qx.lang.Function.globalEval(s);
}return r;
}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__fg=c;
this.__fh=d||b;
this.__fi=e===undefined?-1:e;
},members:{__fg:null,__fh:null,__fi:null,toString:function(){return this.__fg;
},getUri:function(){return this.__fh;
},getLineNumber:function(){return this.__fi;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Class.define(a,{extend:Error,construct:function(c,d){{};
this.__fj=b+(c&&c.message?c.message:c);
Error.call(this,this.__fj);
this.__fk=d;
this.__fl=c;
},members:{__fl:null,__fk:null,__fj:null,toString:function(){return this.__fj;
},getArguments:function(){return this.__fk;
},getSourceException:function(){return this.__fl;
}},destruct:function(){this.__fl=null;
this.__fk=null;
this.__fj=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bR=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bR:null,message:null,getComment:function(){return this.__bR;
},toString:function(){return this.__bR+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__bT=qx.dev.StackTrace.getStackTrace();
},members:{__bT:null,getStackTrace:function(){return this.__bT;
}}});
})();
(function(){var k=":",j="qx.client",h="anonymous",g="...",f="qx.dev.StackTrace",e="",d="\n",c="/source/class/",b=".";
qx.Class.define(f,{statics:{getStackTrace:qx.core.Variant.select(j,{"gecko":function(){try{throw new Error();
}catch(U){var v=this.getStackTraceFromError(U);
qx.lang.Array.removeAt(v,0);
var t=this.getStackTraceFromCaller(arguments);
var r=t.length>v.length?t:v;

for(var i=0;i<Math.min(t.length,v.length);i++){var s=t[i];

if(s.indexOf(h)>=0){continue;
}var z=s.split(k);

if(z.length!=2){continue;
}var x=z[0];
var q=z[1];
var p=v[i];
var A=p.split(k);
var w=A[0];
var o=A[1];

if(qx.Class.getByName(w)){var u=w;
}else{u=x;
}var y=u+k;

if(q){y+=q+k;
}y+=o;
r[i]=y;
}return r;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var l;

try{l.bar();
}catch(C){var m=this.getStackTraceFromError(C);
qx.lang.Array.removeAt(m,0);
return m;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(j,{"opera":function(n){return [];
},"default":function(D){var I=[];
var H=qx.lang.Function.getCaller(D);
var E={};

while(H){var F=qx.lang.Function.getName(H);
I.push(F);

try{H=H.caller;
}catch(B){break;
}
if(!H){break;
}var G=qx.core.ObjectRegistry.toHashCode(H);

if(E[G]){I.push(g);
break;
}E[G]=H;
}return I;
}}),getStackTraceFromError:qx.core.Variant.select(j,{"gecko":function(V){if(!V.stack){return [];
}var bc=/@(.+):(\d+)$/gm;
var W;
var X=[];

while((W=bc.exec(V.stack))!=null){var Y=W[1];
var bb=W[2];
var ba=this.__bA(Y);
X.push(ba+k+bb);
}return X;
},"webkit":function(a){if(a.sourceURL&&a.line){return [this.__bA(a.sourceURL)+k+a.line];
}else{return [];
}},"opera":function(J){if(J.message.indexOf("Backtrace:")<0){return [];
}var L=[];
var M=qx.lang.String.trim(J.message.split("Backtrace:")[1]);
var N=M.split(d);

for(var i=0;i<N.length;i++){var K=N[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(K&&K.length>=2){var P=K[1];
var O=this.__bA(K[2]);
L.push(O+k+P);
}}return L;
},"default":function(){return [];
}}),__bA:function(Q){var T=c;
var R=Q.indexOf(T);
var S=(R==-1)?Q:Q.substring(R+T.length).replace(/\//g,b).replace(/\.js$/,e);
return S;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(i){return this.getClass(i)==d;
},isNumber:function(k){return (k!==null&&(this.getClass(k)==b||k instanceof Number));
},isBoolean:function(j){return (j!==null&&(this.getClass(j)==a||j instanceof Boolean));
},isDate:function(h){return (h!==null&&(this.getClass(h)==c||h instanceof Date));
},isError:function(g){return (g!==null&&(this.getClass(g)==e||g instanceof Error));
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
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(m){this._manager=m;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(b,event,c){return !event.getBubbles();
},dispatchEvent:function(d,event,e){var h,f;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var j=this._manager.getListeners(d,e,false);

if(j){for(var i=0,l=j.length;i<l;i++){var g=j[i].context||d;
j[i].handler.call(g,event);
}}}},defer:function(k){qx.event.Registration.addDispatcher(k);
}});
})();
(function(){var b="qx.event.handler.Object";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(c,d){return qx.Class.supportsEvent(c.constructor,d);
},registerEvent:function(h,i,j){},unregisterEvent:function(e,f,g){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var c="qx.util.DisposeUtil";
qx.Class.define(c,{statics:{disposeFields:function(n,o){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=o.length;i<l;i++){var name=o[i];

if(n[name]==null||!n.hasOwnProperty(name)){continue;
}n[name]=null;
}},disposeObjects:function(a,b){var name;

for(var i=0,l=b.length;i<l;i++){name=b[i];

if(a[name]==null||!a.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(a[name].dispose){a[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}a[name]=null;
}},disposeArray:function(p,q){var s=p[q];

if(!s){return;
}if(qx.core.ObjectRegistry.inShutDown){p[q]=null;
return;
}try{var r;

for(var i=s.length-1;i>=0;i--){r=s[i];

if(r){r.dispose();
}}}catch(d){throw new Error("The array field: "+q+" of object: "+p+" has non disposable entries: "+d);
}s.length=0;
p[q]=null;
},disposeMap:function(h,j){var k=h[j];

if(!k){return;
}if(qx.core.ObjectRegistry.inShutDown){h[j]=null;
return;
}try{for(var m in k){if(k.hasOwnProperty(m)){k[m].dispose();
}}}catch(t){throw new Error("The map field: "+j+" of object: "+h+" has non disposable entries: "+t);
}h[j]=null;
},disposeTriggeredBy:function(e,f){var g=f.dispose;
f.dispose=function(){g.call(f);
e.dispose();
};
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){arguments.callee.base.call(this);
this.__bD={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__bD:null,getObject:function(d){if(this.$$disposed){return;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__bD[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(k){if(!this.__bD){return;
}var m=k.classname;
var n=this.__bD[m];

if(k.$$pooled){throw new Error("Object is already pooled: "+k);
}
if(!n){this.__bD[m]=n=[];
}if(n.length>this.getSize()){if(k.destroy){k.destroy();
}else{k.dispose();
}return;
}k.$$pooled=true;
n.push(k);
}},destruct:function(){var j=this.__bD;
var g,h,i,l;

for(g in j){h=j[g];

for(i=0,l=h.length;i<l;i++){h[i].dispose();
}}delete this.__bD;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(u){this._manager=u;
},members:{_getParent:function(x){throw new Error("Missing implementation");
},canDispatchEvent:function(v,event,w){return event.getBubbles();
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
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(j){arguments.callee.base.call(this);
this.__bU=j;
this.__bV=j.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__bU:null,__bV:null,canHandleEvent:function(h,i){},registerEvent:function(e,f,g){},unregisterEvent:function(b,c,d){}},destruct:function(){this.__bU=this.__bV=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var bo="keydown",bn="qx.client",bm="keypress",bl="NumLock",bk="keyup",bj="Enter",bi="0",bh="9",bg="-",bf="PageUp",cv="+",cu="PrintScreen",ct="gecko",cs="A",cr="Z",cq="Left",cp="F5",co="Down",cn="Up",cm="F11",bv="F6",bw="useraction",bt="F3",bu="keyinput",br="Insert",bs="F8",bp="End",bq="/",bD="Delete",bE="*",bQ="F1",bM="F4",bY="Home",bT="F2",ci="F12",ce="PageDown",bI="F7",cl="F9",ck="F10",cj="Right",bH="text",bK="Escape",bL="webkit",bO="5",bR="3",bU="Meta",cb="7",cg="CapsLock",bx="input",by="Control",bJ="Space",bX="Tab",bW="Shift",bV="Pause",cd="Unidentified",cc="qx.event.handler.Keyboard",bS="mshtml",ca="mshtml|webkit",bc="6",cf="off",bz="Apps",bA="4",bN="Alt",bd="2",be="Scroll",bG="1",bB="8",bC="Win",bF="autoComplete",bP=",",ch="Backspace";
qx.Class.define(cc,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__bW=a;
this.__bX=a.getWindow();
if(qx.core.Variant.isSet(bn,ct)){this.__bY=this.__bX;
}else{this.__bY=this.__bX.document.documentElement;
}this.__ca={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(D){if(this._identifierToKeyCodeMap[D]){return true;
}
if(D.length!=1){return false;
}
if(D>=bi&&D<=bh){return true;
}
if(D>=cs&&D<=cr){return true;
}
switch(D){case cv:case bg:case bE:case bq:return true;
default:return false;
}}},members:{__cb:null,__bW:null,__bX:null,__bY:null,__ca:null,__fm:null,__cf:null,__cc:null,canHandleEvent:function(T,U){},registerEvent:function(cF,cG,cH){},unregisterEvent:function(Q,R,S){},_fireInputEvent:function(X,Y){var ba=this.__fn();
if(ba&&ba.offsetWidth!=0){var event=qx.event.Registration.createEvent(bu,qx.event.type.KeyInput,[X,ba,Y]);
this.__bW.dispatchEvent(ba,event);
}if(this.__bX){qx.event.Registration.fireEvent(this.__bX,bw,qx.event.type.Data,[bu]);
}},_fireSequenceEvent:function(G,H,I){var J=this.__fn();
var K=G.keyCode;
var event=qx.event.Registration.createEvent(H,qx.event.type.KeySequence,[G,J,I]);
this.__bW.dispatchEvent(J,event);
if(qx.core.Variant.isSet(bn,ca)){if(H==bo&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(K)&&!this._emulateKeyPress[K]){this._fireSequenceEvent(G,bm,I);
}}}if(this.__bX){qx.event.Registration.fireEvent(this.__bX,bw,qx.event.type.Data,[H]);
}},__fn:function(){var b=this.__bW.getHandler(qx.event.handler.Focus);
var c=b.getActive();
if(!c||c.offsetWidth==0){c=b.getFocus();
}if(!c||c.offsetWidth==0){c=this.__bW.getWindow().document.body;
}return c;
},_initKeyObserver:function(){this.__cb=qx.lang.Function.listener(this.__cd,this);
this.__cc=qx.lang.Function.listener(this.__cg,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__bY,bk,this.__cb);
Event.addNativeListener(this.__bY,bo,this.__cb);
Event.addNativeListener(this.__bY,bm,this.__cc);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__bY,bk,this.__cb);
Event.removeNativeListener(this.__bY,bo,this.__cb);
Event.removeNativeListener(this.__bY,bm,this.__cc);

for(var W in (this.__cf||{})){var V=this.__cf[W];
Event.removeNativeListener(V.target,bm,V.callback);
}delete (this.__cf);
},__cd:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bn,{"mshtml":function(u){u=window.event||u;
var x=u.keyCode;
var v=0;
var w=u.type;
if(!(this.__ca[x]==bo&&w==bo)){this._idealKeyHandler(x,v,w,u);
}if(w==bo){if(this._isNonPrintableKeyCode(x)||this._emulateKeyPress[x]){this._idealKeyHandler(x,v,bm,u);
}}this.__ca[x]=w;
},"gecko":function(j){var n=this._keyCodeFix[j.keyCode]||j.keyCode;
var l=0;
var m=j.type;
if(qx.bom.client.Platform.WIN){var k=n?this._keyCodeToIdentifier(n):this._charCodeToIdentifier(l);

if(!(this.__ca[k]==bo&&m==bo)){this._idealKeyHandler(n,l,m,j);
}this.__ca[k]=m;
}else{this._idealKeyHandler(n,l,m,j);
}this.__ce(j.target,m,n);
},"webkit":function(d){var g=0;
var e=0;
var f=d.type;
if(qx.bom.client.Engine.VERSION<525.13){if(f==bk||f==bo){g=this._charCode2KeyCode[d.charCode]||d.keyCode;
}else{if(this._charCode2KeyCode[d.charCode]){g=this._charCode2KeyCode[d.charCode];
}else{e=d.charCode;
}}this._idealKeyHandler(g,e,f,d);
}else{g=d.keyCode;
if(!(this.__ca[g]==bo&&f==bo)){this._idealKeyHandler(g,e,f,d);
}if(f==bo){if(this._isNonPrintableKeyCode(g)||this._emulateKeyPress[g]){this._idealKeyHandler(g,e,bm,d);
}}this.__ca[g]=f;
}},"opera":function(P){this.__fm=P.keyCode;
this._idealKeyHandler(P.keyCode,0,P.type,P);
}})),__ce:qx.core.Variant.select(bn,{"gecko":function(cA,cB,cC){if(cB===bo&&(cC==33||cC==34||cC==38||cC==40)&&cA.type==bH&&cA.tagName.toLowerCase()===bx&&cA.getAttribute(bF)!==cf){if(!this.__cf){this.__cf={};
}var cE=qx.core.ObjectRegistry.toHashCode(cA);

if(this.__cf[cE]){return;
}var self=this;
this.__cf[cE]={target:cA,callback:function(h){qx.bom.Event.stopPropagation(h);
self.__cg(h);
}};
var cD=qx.event.GlobalError.observeMethod(this.__cf[cE].callback);
qx.bom.Event.addNativeListener(cA,bm,cD);
}},"default":null}),__cg:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bn,{"mshtml":function(cz){cz=window.event||cz;

if(this._charCode2KeyCode[cz.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cz.keyCode],0,cz.type,cz);
}else{this._idealKeyHandler(0,cz.keyCode,cz.type,cz);
}},"gecko":function(cI){var cL=this._keyCodeFix[cI.keyCode]||cI.keyCode;
var cJ=cI.charCode;
var cK=cI.type;
this._idealKeyHandler(cL,cJ,cK,cI);
},"webkit":function(z){if(qx.bom.client.Engine.VERSION<525.13){var C=0;
var A=0;
var B=z.type;

if(B==bk||B==bo){C=this._charCode2KeyCode[z.charCode]||z.keyCode;
}else{if(this._charCode2KeyCode[z.charCode]){C=this._charCode2KeyCode[z.charCode];
}else{A=z.charCode;
}}this._idealKeyHandler(C,A,B,z);
}else{if(this._charCode2KeyCode[z.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[z.keyCode],0,z.type,z);
}else{this._idealKeyHandler(0,z.keyCode,z.type,z);
}}},"opera":function(cw){var cy=cw.keyCode;
var cx=cw.type;
if(cy!=this.__fm){this._idealKeyHandler(0,this.__fm,cx,cw);
}else{if(this._keyCodeToIdentifierMap[cw.keyCode]){this._idealKeyHandler(cw.keyCode,0,cw.type,cw);
}else{this._idealKeyHandler(0,cw.keyCode,cw.type,cw);
}}}})),_idealKeyHandler:function(p,q,r,s){var t;
if(p||(!p&&!q)){t=this._keyCodeToIdentifier(p);
this._fireSequenceEvent(s,r,t);
}else{t=this._charCodeToIdentifier(q);
this._fireSequenceEvent(s,bm,t);
this._fireInputEvent(s,q);
}},_specialCharCodeMap:{8:ch,9:bX,13:bj,27:bK,32:bJ},_emulateKeyPress:qx.core.Variant.select(bn,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bW,17:by,18:bN,20:cg,224:bU,37:cq,38:cn,39:cj,40:co,33:bf,34:ce,35:bp,36:bY,45:br,46:bD,112:bQ,113:bT,114:bt,115:bM,116:cp,117:bv,118:bI,119:bs,120:cl,121:ck,122:cm,123:ci,144:bl,44:cu,145:be,19:bV,91:bC,93:bz},_numpadToCharCode:{96:bi.charCodeAt(0),97:bG.charCodeAt(0),98:bd.charCodeAt(0),99:bR.charCodeAt(0),100:bA.charCodeAt(0),101:bO.charCodeAt(0),102:bc.charCodeAt(0),103:cb.charCodeAt(0),104:bB.charCodeAt(0),105:bh.charCodeAt(0),106:bE.charCodeAt(0),107:cv.charCodeAt(0),109:bg.charCodeAt(0),110:bP.charCodeAt(0),111:bq.charCodeAt(0)},_charCodeA:cs.charCodeAt(0),_charCodeZ:cr.charCodeAt(0),_charCode0:bi.charCodeAt(0),_charCode9:bh.charCodeAt(0),_isNonPrintableKeyCode:function(o){return this._keyCodeToIdentifierMap[o]?true:false;
},_isIdentifiableKeyCode:function(i){if(i>=this._charCodeA&&i<=this._charCodeZ){return true;
}if(i>=this._charCode0&&i<=this._charCode9){return true;
}if(this._specialCharCodeMap[i]){return true;
}if(this._numpadToCharCode[i]){return true;
}if(this._isNonPrintableKeyCode(i)){return true;
}return false;
},_keyCodeToIdentifier:function(E){if(this._isIdentifiableKeyCode(E)){var F=this._numpadToCharCode[E];

if(F){return String.fromCharCode(F);
}return (this._keyCodeToIdentifierMap[E]||this._specialCharCodeMap[E]||String.fromCharCode(E));
}else{return cd;
}},_charCodeToIdentifier:function(bb){return this._specialCharCodeMap[bb]||String.fromCharCode(bb).toUpperCase();
},_identifierToKeyCode:function(y){return qx.event.handler.Keyboard._identifierToKeyCodeMap[y]||y.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__fm=this.__bW=this.__bX=this.__bY=this.__ca=null;
},defer:function(L,M,N){qx.event.Registration.addHandler(L);
if(!L._identifierToKeyCodeMap){L._identifierToKeyCodeMap={};

for(var O in M._keyCodeToIdentifierMap){L._identifierToKeyCodeMap[M._keyCodeToIdentifierMap[O]]=parseInt(O,10);
}
for(var O in M._specialCharCodeMap){L._identifierToKeyCodeMap[M._specialCharCodeMap[O]]=parseInt(O,10);
}}
if(qx.core.Variant.isSet(bn,bS)){M._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(bn,ct)){M._keyCodeFix={12:M._identifierToKeyCode(bl)};
}else if(qx.core.Variant.isSet(bn,bL)){if(qx.bom.client.Engine.VERSION<525.13){M._charCode2KeyCode={63289:M._identifierToKeyCode(bl),63276:M._identifierToKeyCode(bf),63277:M._identifierToKeyCode(ce),63275:M._identifierToKeyCode(bp),63273:M._identifierToKeyCode(bY),63234:M._identifierToKeyCode(cq),63232:M._identifierToKeyCode(cn),63235:M._identifierToKeyCode(cj),63233:M._identifierToKeyCode(co),63272:M._identifierToKeyCode(bD),63302:M._identifierToKeyCode(br),63236:M._identifierToKeyCode(bQ),63237:M._identifierToKeyCode(bT),63238:M._identifierToKeyCode(bt),63239:M._identifierToKeyCode(bM),63240:M._identifierToKeyCode(cp),63241:M._identifierToKeyCode(bv),63242:M._identifierToKeyCode(bI),63243:M._identifierToKeyCode(bs),63244:M._identifierToKeyCode(cl),63245:M._identifierToKeyCode(ck),63246:M._identifierToKeyCode(cm),63247:M._identifierToKeyCode(ci),63248:M._identifierToKeyCode(cu),3:M._identifierToKeyCode(bj),12:M._identifierToKeyCode(bl),13:M._identifierToKeyCode(bj)};
}else{M._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__du:function(){var o=navigator.platform;
if(o==null||o===k){o=navigator.userAgent;
}
if(o.indexOf(e)!=-1||o.indexOf(l)!=-1||o.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(g)!=-1||o.indexOf(b)!=-1||o.indexOf(c)!=-1||o.indexOf(m)!=-1||o.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(a)!=-1||o.indexOf(i)!=-1||o.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(n){n.__du();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__dv:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__dw:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__dv){K.push(J);
}var M=new RegExp(l+K.join(C).replace(/\./g,r)+H,u);

if(!M.test(L)){this.UNKNOWN_SYSTEM=true;

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
}else{this.NAME=this.__dv[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__dw();
}});
})();
(function(){var v="qx.client",u="mouseup",t="click",s="mousedown",r="contextmenu",q="mousewheel",p="dblclick",o="mshtml",n="mouseover",m="mouseout",h="DOMMouseScroll",l="mousemove",k="on",g="mshtml|webkit|opera",f="useraction",j="gecko|webkit",i="qx.event.handler.Mouse";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(T){arguments.callee.base.call(this);
this.__ch=T;
this.__ci=T.getWindow();
this.__cj=this.__ci.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__ck:null,__cl:null,__cm:null,__cn:null,__co:null,__ch:null,__ci:null,__cj:null,canHandleEvent:function(d,e){},registerEvent:qx.bom.client.System.IPHONE?
function(Q,R,S){Q[k+R]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(F,G,H){F[k+G]=undefined;
}:qx.lang.Function.returnNull,__cp:function(N,O,P){if(!P){P=N.target||N.srcElement;
}if(P&&P.nodeType){qx.event.Registration.fireEvent(P,O||N.type,O==q?qx.event.type.MouseWheel:qx.event.type.Mouse,[N,P,null,true,true]);
}qx.event.Registration.fireEvent(this.__ci,f,qx.event.type.Data,[O||N.type]);
},_initButtonObserver:function(){this.__ck=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cj,s,this.__ck);
Event.addNativeListener(this.__cj,u,this.__ck);
Event.addNativeListener(this.__cj,t,this.__ck);
Event.addNativeListener(this.__cj,p,this.__ck);
Event.addNativeListener(this.__cj,r,this.__ck);
},_initMoveObserver:function(){this.__cl=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cj,l,this.__cl);
Event.addNativeListener(this.__cj,n,this.__cl);
Event.addNativeListener(this.__cj,m,this.__cl);
},_initWheelObserver:function(){this.__cm=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var z=qx.core.Variant.isSet(v,g)?q:h;
var A=qx.core.Variant.isSet(v,o)?this.__cj:this.__ci;
Event.addNativeListener(A,z,this.__cm);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cj,s,this.__ck);
Event.removeNativeListener(this.__cj,u,this.__ck);
Event.removeNativeListener(this.__cj,t,this.__ck);
Event.removeNativeListener(this.__cj,p,this.__ck);
Event.removeNativeListener(this.__cj,r,this.__ck);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cj,l,this.__cl);
Event.removeNativeListener(this.__cj,n,this.__cl);
Event.removeNativeListener(this.__cj,m,this.__cl);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var Y=qx.core.Variant.isSet(v,g)?q:h;
var ba=qx.core.Variant.isSet(v,o)?this.__cj:this.__ci;
Event.removeNativeListener(ba,Y,this.__cm);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(I){this.__cp(I);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(J){var K=J.type;
var L=J.target||J.srcElement;
if(qx.core.Variant.isSet(v,j)){if(L&&L.nodeType==3){L=L.parentNode;
}}
if(this.__cq){this.__cq(J,K,L);
}
if(this.__cs){this.__cs(J,K,L);
}this.__cp(J,K,L);

if(this.__cr){this.__cr(J,K,L);
}
if(this.__ct){this.__ct(J,K,L);
}this.__cn=K;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(M){this.__cp(M,q);
}),__cq:qx.core.Variant.select(v,{"webkit":function(B,C,D){if(qx.bom.client.Engine.VERSION<530){if(C==r){this.__cp(B,u,D);
}}},"default":null}),__cr:qx.core.Variant.select(v,{"opera":function(a,b,c){if(b==u&&a.button==2){this.__cp(a,r,c);
}},"default":null}),__cs:qx.core.Variant.select(v,{"mshtml":function(w,x,y){if(x==u&&this.__cn==t){this.__cp(w,s,y);
}else if(x==p){this.__cp(w,t,y);
}},"default":null}),__ct:qx.core.Variant.select(v,{"mshtml":null,"default":function(U,V,W){switch(V){case s:this.__co=W;
break;
case u:if(W!==this.__co){var X=qx.dom.Hierarchy.getCommonParent(W,this.__co);
this.__cp(U,t,X);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__ch=this.__ci=this.__cj=this.__co=null;
},defer:function(E){qx.event.Registration.addHandler(E);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var L="alias",K="copy",J="blur",I="mouseout",H="keydown",G="Ctrl",F="Shift",E="mousemove",D="move",C="mouseover",bc="Alt",bb="keyup",ba="mouseup",Y="dragend",X="on",W="mousedown",V="qxDraggable",U="drag",T="drop",S="qxDroppable",Q="qx.event.handler.DragDrop",R="droprequest",O="dragstart",P="dragchange",M="dragleave",N="dragover";
qx.Class.define(Q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){arguments.callee.base.call(this);
this.__cu=f;
this.__cv=f.getWindow().document.documentElement;
this.__cu.addListener(this.__cv,W,this._onMouseDown,this);
this.__cx();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__cu:null,__cv:null,__cM:null,__cI:null,__cy:null,__cz:null,__cA:null,__cB:null,__cw:null,__cD:null,__cK:false,__cN:0,__cO:0,canHandleEvent:function(v,w){},registerEvent:function(y,z,A){},unregisterEvent:function(o,p,q){},addType:function(bl){this.__cy[bl]=true;
},addAction:function(bd){this.__cz[bd]=true;
},supportsType:function(B){return !!this.__cy[B];
},supportsAction:function(g){return !!this.__cz[g];
},getData:function(d){if(!this.__cL||!this.__cM){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__cy[d]){throw new Error("Unsupported data type: "+d+"!");
}
if(!this.__cB[d]){this.__cw=d;
this.__cE(R,this.__cI,this.__cM,false);
}
if(!this.__cB[d]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__cB[d]||null;
},getCurrentAction:function(){return this.__cD;
},addData:function(be,bf){this.__cB[be]=bf;
},getCurrentType:function(){return this.__cw;
},__cx:function(){this.__cy={};
this.__cz={};
this.__cA={};
this.__cB={};
},__cC:function(){var bk=this.__cz;
var bi=this.__cA;
var bj=null;

if(this.__cL){if(bi.Shift&&bi.Ctrl&&bk.alias){bj=L;
}else if(bi.Shift&&bi.Alt&&bk.copy){bj=K;
}else if(bi.Shift&&bk.move){bj=D;
}else if(bi.Alt&&bk.alias){bj=L;
}else if(bi.Ctrl&&bk.copy){bj=K;
}else if(bk.move){bj=D;
}else if(bk.copy){bj=K;
}else if(bk.alias){bj=L;
}}
if(bj!=this.__cD){this.__cD=bj;
this.__cE(P,this.__cI,this.__cM,false);
}},__cE:function(h,i,j,k,l){var n=qx.event.Registration;
var m=n.createEvent(h,qx.event.type.Drag,[k,l]);

if(i!==j){m.setRelatedTarget(j);
}return n.dispatchEvent(i,m);
},__cF:function(bg){while(bg&&bg.nodeType==1){if(bg.getAttribute(V)==X){return bg;
}bg=bg.parentNode;
}return null;
},__cG:function(r){while(r&&r.nodeType==1){if(r.getAttribute(S)==X){return r;
}r=r.parentNode;
}return null;
},__cH:function(){this.__cI=null;
this.__cu.removeListener(this.__cv,E,this._onMouseMove,this,true);
this.__cu.removeListener(this.__cv,ba,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,J,this._onWindowBlur,this);
this.__cx();
},__cJ:function(){if(this.__cK){this.__cu.removeListener(this.__cv,C,this._onMouseOver,this,true);
this.__cu.removeListener(this.__cv,I,this._onMouseOut,this,true);
this.__cu.removeListener(this.__cv,H,this._onKeyDown,this,true);
this.__cu.removeListener(this.__cv,bb,this._onKeyUp,this,true);
this.__cE(Y,this.__cI,this.__cM,false);
this.__cK=false;
}this.__cL=false;
this.__cM=null;
this.__cH();
},__cL:false,_onWindowBlur:function(e){this.__cJ();
},_onKeyDown:function(e){var bm=e.getKeyIdentifier();

switch(bm){case bc:case G:case F:if(!this.__cA[bm]){this.__cA[bm]=true;
this.__cC();
}}},_onKeyUp:function(e){var u=e.getKeyIdentifier();

switch(u){case bc:case G:case F:if(this.__cA[u]){this.__cA[u]=false;
this.__cC();
}}},_onMouseDown:function(e){if(this.__cK){return;
}var x=this.__cF(e.getTarget());

if(x){this.__cN=e.getDocumentLeft();
this.__cO=e.getDocumentTop();
this.__cI=x;
this.__cu.addListener(this.__cv,E,this._onMouseMove,this,true);
this.__cu.addListener(this.__cv,ba,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,J,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__cL){this.__cE(T,this.__cM,this.__cI,false,e);
}if(this.__cK){e.stopPropagation();
}this.__cJ();
},_onMouseMove:function(e){if(this.__cK){if(!this.__cE(U,this.__cI,this.__cM,true,e)){this.__cJ();
}}else{if(Math.abs(e.getDocumentLeft()-this.__cN)>3||Math.abs(e.getDocumentTop()-this.__cO)>3){if(this.__cE(O,this.__cI,this.__cM,true,e)){this.__cK=true;
this.__cu.addListener(this.__cv,C,this._onMouseOver,this,true);
this.__cu.addListener(this.__cv,I,this._onMouseOut,this,true);
this.__cu.addListener(this.__cv,H,this._onKeyDown,this,true);
this.__cu.addListener(this.__cv,bb,this._onKeyUp,this,true);
var a=this.__cA;
a.Ctrl=e.isCtrlPressed();
a.Shift=e.isShiftPressed();
a.Alt=e.isAltPressed();
this.__cC();
}else{this.__cE(Y,this.__cI,this.__cM,false);
this.__cH();
}}}},_onMouseOver:function(e){var b=e.getTarget();
var c=this.__cG(b);

if(c&&c!=this.__cM){this.__cL=this.__cE(N,c,this.__cI,true,e);
this.__cM=c;
this.__cC();
}},_onMouseOut:function(e){var t=this.__cG(e.getTarget());
var s=this.__cG(e.getRelatedTarget());

if(t&&t!==s&&t==this.__cM){this.__cE(M,this.__cM,s,false,e);
this.__cM=null;
this.__cL=false;
qx.event.Timer.once(this.__cC,this,0);
}}},destruct:function(){this.__cI=this.__cM=this.__cu=this.__cv=this.__cy=this.__cz=this.__cA=this.__cB=null;
},defer:function(bh){qx.event.Registration.addHandler(bh);
}});
})();
(function(){var b="-",a="qx.event.handler.Element";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){arguments.callee.base.call(this);
this._manager=h;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,d){},registerEvent:function(u,v,w){var z=qx.core.ObjectRegistry.toHashCode(u);
var x=z+b+v;
var y=qx.lang.Function.listener(this._onNative,this,x);
qx.bom.Event.addNativeListener(u,v,y);
this._registeredEvents[x]={element:u,type:v,listener:y};
},unregisterEvent:function(j,k,l){var o=this._registeredEvents;

if(!o){return;
}var p=qx.core.ObjectRegistry.toHashCode(j);
var m=p+b+k;
var n=this._registeredEvents[m];
qx.bom.Event.removeNativeListener(j,k,n.listener);
delete this._registeredEvents[m];
},_onNative:qx.event.GlobalError.observeMethod(function(q,r){var t=this._registeredEvents;

if(!t){return;
}var s=t[r];
qx.event.Registration.fireNonBubblingEvent(s.element,s.type,qx.event.type.Native,[q]);
})},destruct:function(){var e;
var f=this._registeredEvents;

for(var g in f){e=f[g];
qx.bom.Event.removeNativeListener(e.element,e.type,e.listener);
}this._manager=this._registeredEvents=null;
},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var d="qx.event.handler.Appear",c="disappear",b="appear";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){arguments.callee.base.call(this);
this.__cP=q;
this.__cQ={};
qx.event.handler.Appear.__cR[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__cR:{},refresh:function(){var e=this.__cR;

for(var f in e){e[f].refresh();
}}},members:{__cP:null,__cQ:null,canHandleEvent:function(w,x){},registerEvent:function(g,h,i){var j=qx.core.ObjectRegistry.toHashCode(g)+h;
var k=this.__cQ;

if(k&&!k[j]){k[j]=g;
g.$$displayed=g.offsetWidth>0;
}},unregisterEvent:function(r,s,t){var u=qx.core.ObjectRegistry.toHashCode(r)+s;
var v=this.__cQ;

if(!v){return;
}
if(v[u]){delete v[u];
}},refresh:function(){var o=this.__cQ;
var p;

for(var n in o){p=o[n];
var l=p.offsetWidth>0;

if((!!p.$$displayed)!==l){p.$$displayed=l;
var m=qx.event.Registration.createEvent(l?b:c);
this.__cP.dispatchEvent(p,m);
}}}},destruct:function(){this.__cP=this.__cQ=null;
delete qx.event.handler.Appear.__cR[this.$$hash];
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var n="mshtml",m="",k="qx.client",h=">",g="<",f=" ",e="='",d="qx.bom.Element",c="div",b="' ",a="></";
qx.Class.define(d,{statics:{__cS:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,o,p){if(!p){p=window;
}
if(!name){throw new Error("The tag name is missing!");
}var r=this.__cS;
var q=m;

for(var t in o){if(r[t]){q+=t+e+o[t]+b;
}}var u;
if(q!=m){if(qx.bom.client.Engine.MSHTML){u=p.document.createElement(g+name+f+q+h);
}else{var s=p.document.createElement(c);
s.innerHTML=g+name+f+q+a+name+h;
u=s.firstChild;
}}else{u=p.document.createElement(name);
}
for(var t in o){if(!r[t]){qx.bom.element.Attribute.set(u,t,o[t]);
}}return u;
},empty:function(v){return v.innerHTML=m;
},addListener:function(A,B,C,self,D){return qx.event.Registration.addListener(A,B,C,self,D);
},removeListener:function(F,G,H,self,I){return qx.event.Registration.removeListener(F,G,H,self,I);
},removeListenerById:function(W,X){return qx.event.Registration.removeListenerById(W,X);
},hasListener:function(x,y,z){return qx.event.Registration.hasListener(x,y,z);
},focus:function(E){qx.event.Registration.getManager(E).getHandler(qx.event.handler.Focus).focus(E);
},blur:function(w){qx.event.Registration.getManager(w).getHandler(qx.event.handler.Focus).blur(w);
},activate:function(Y){qx.event.Registration.getManager(Y).getHandler(qx.event.handler.Focus).activate(Y);
},deactivate:function(V){qx.event.Registration.getManager(V).getHandler(qx.event.handler.Focus).deactivate(V);
},capture:function(bb,bc){qx.event.Registration.getManager(bb).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(bb,bc);
},releaseCapture:function(ba){qx.event.Registration.getManager(ba).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(ba);
},clone:function(J,K){var N;

if(K||(qx.core.Variant.isSet(k,n)&&!qx.xml.Document.isXmlDocument(J))){var R=qx.event.Registration.getManager(J);
var L=qx.dom.Hierarchy.getDescendants(J);
L.push(J);
}if(qx.core.Variant.isSet(k,n)){for(var i=0,l=L.length;i<l;i++){R.toggleAttachedEvents(L[i],false);
}}var N=J.cloneNode(true);
if(qx.core.Variant.isSet(k,n)){for(var i=0,l=L.length;i<l;i++){R.toggleAttachedEvents(L[i],true);
}}if(K===true){var U=qx.dom.Hierarchy.getDescendants(N);
U.push(N);
var M,P,T,O;

for(var i=0,S=L.length;i<S;i++){T=L[i];
M=R.serializeListeners(T);

if(M.length>0){P=U[i];

for(var j=0,Q=M.length;j<Q;j++){O=M[j];
R.addListener(P,O.type,O.handler,O.self,O.capture);
}}}}return N;
}}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(e,f,g,h,i){arguments.callee.base.call(this,h,i);
this._target=f||qx.bom.Event.getTarget(e);
this._relatedTarget=g||qx.bom.Event.getRelatedTarget(e);

if(e.timeStamp){this._timeStamp=e.timeStamp;
}this._native=e;
this._returnValue=null;
return this;
},clone:function(j){var k=arguments.callee.base.call(this,j);
var l={};
k._native=this._cloneNativeEvent(this._native,l);
k._returnValue=this._returnValue;
return k;
},_cloneNativeEvent:function(b,c){c.preventDefault=qx.lang.Function.empty;
return c;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(d){this._returnValue=d;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(b,c){var c=arguments.callee.base.call(this,b,c);
c.shiftKey=b.shiftKey;
c.ctrlKey=b.ctrlKey;
c.altKey=b.altKey;
c.metaKey=b.metaKey;
return c;
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
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._identifier=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._identifier=this._identifier;
return c;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var bg="qx.client",bf="blur",be="focus",bd="mousedown",bc="on",bb="mouseup",ba="DOMFocusOut",Y="DOMFocusIn",X="selectstart",W="onmousedown",bC="onfocusout",bB="onfocusin",bA="onmouseup",bz="onselectstart",by="draggesture",bx="gecko",bw="qx.event.handler.Focus",bv="_applyFocus",bu="deactivate",bt="textarea",bn="qxIsRootPage",bo="_applyActive",bl="input",bm="focusin",bj="qxSelectable",bk="tabIndex",bh="off",bi="activate",bp="1",bq="focusout",bs="qxKeepFocus",br="qxKeepActive";
qx.Class.define(bw,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){arguments.callee.base.call(this);
this._manager=o;
this._window=o.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bo,nullable:true},focus:{apply:bv,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__cW:null,__cX:null,__cY:null,__da:null,__db:null,__de:null,__dc:null,__dd:null,__di:null,__dj:null,canHandleEvent:function(I,J){},registerEvent:function(p,q,r){},unregisterEvent:function(K,L,M){},focus:function(b){try{b.focus();
}catch(a){}this.setFocus(b);
this.setActive(b);
},activate:function(V){this.setActive(V);
},blur:function(O){try{O.blur();
}catch(s){}
if(this.getActive()===O){this.resetActive();
}
if(this.getFocus()===O){this.resetFocus();
}},deactivate:function(x){if(this.getActive()===x){this.resetActive();
}},tryActivate:function(v){var w=this.__dr(v);

if(w){this.setActive(w);
}},__cT:function(g,h,i,j){var l=qx.event.Registration;
var k=l.createEvent(i,qx.event.type.Focus,[g,h,j]);
l.dispatchEvent(g,k);
},_windowFocused:true,__cU:function(){if(this._windowFocused){this._windowFocused=false;
this.__cT(this._window,null,bf,false);
}},__cV:function(){if(!this._windowFocused){this._windowFocused=true;
this.__cT(this._window,null,be,false);
}},_initObserver:qx.core.Variant.select(bg,{"gecko":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__cY=qx.lang.Function.listener(this.__dl,this);
this.__da=qx.lang.Function.listener(this.__dk,this);
this.__db=qx.lang.Function.listener(this.__df,this);
this._document.addEventListener(bd,this.__cW,true);
this._document.addEventListener(bb,this.__cX,true);
this._window.addEventListener(be,this.__cY,true);
this._window.addEventListener(bf,this.__da,true);
this._window.addEventListener(by,this.__db,true);
},"mshtml":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__dc=qx.lang.Function.listener(this.__dg,this);
this.__dd=qx.lang.Function.listener(this.__dh,this);
this.__de=qx.lang.Function.listener(this.__do,this);
this._document.attachEvent(W,this.__cW);
this._document.attachEvent(bA,this.__cX);
this._document.attachEvent(bB,this.__dc);
this._document.attachEvent(bC,this.__dd);
this._document.attachEvent(bz,this.__de);
},"webkit":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__dd=qx.lang.Function.listener(this.__dh,this);
this.__cY=qx.lang.Function.listener(this.__dl,this);
this.__da=qx.lang.Function.listener(this.__dk,this);
this.__de=qx.lang.Function.listener(this.__do,this);
this._document.addEventListener(bd,this.__cW,true);
this._document.addEventListener(bb,this.__cX,true);
this._document.addEventListener(X,this.__de,false);
this._window.addEventListener(ba,this.__dd,true);
this._window.addEventListener(be,this.__cY,true);
this._window.addEventListener(bf,this.__da,true);
},"opera":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__dc=qx.lang.Function.listener(this.__dg,this);
this.__dd=qx.lang.Function.listener(this.__dh,this);
this._document.addEventListener(bd,this.__cW,true);
this._document.addEventListener(bb,this.__cX,true);
this._window.addEventListener(Y,this.__dc,true);
this._window.addEventListener(ba,this.__dd,true);
}}),_stopObserver:qx.core.Variant.select(bg,{"gecko":function(){this._document.removeEventListener(bd,this.__cW,true);
this._document.removeEventListener(bb,this.__cX,true);
this._window.removeEventListener(be,this.__cY,true);
this._window.removeEventListener(bf,this.__da,true);
this._window.removeEventListener(by,this.__db,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,W,this.__cW);
qx.bom.Event.removeNativeListener(this._document,bA,this.__cX);
qx.bom.Event.removeNativeListener(this._document,bB,this.__dc);
qx.bom.Event.removeNativeListener(this._document,bC,this.__dd);
qx.bom.Event.removeNativeListener(this._document,bz,this.__de);
},"webkit":function(){this._document.removeEventListener(bd,this.__cW,true);
this._document.removeEventListener(X,this.__de,false);
this._window.removeEventListener(Y,this.__dc,true);
this._window.removeEventListener(ba,this.__dd,true);
this._window.removeEventListener(be,this.__cY,true);
this._window.removeEventListener(bf,this.__da,true);
},"opera":function(){this._document.removeEventListener(bd,this.__cW,true);
this._window.removeEventListener(Y,this.__dc,true);
this._window.removeEventListener(ba,this.__dd,true);
this._window.removeEventListener(be,this.__cY,true);
this._window.removeEventListener(bf,this.__da,true);
}}),__df:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bg,{"gecko":function(e){if(!this.__ds(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__dg:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bg,{"mshtml":function(e){this.__cV();
var bL=e.srcElement;
var bK=this.__dq(bL);

if(bK){this.setFocus(bK);
}this.tryActivate(bL);
},"opera":function(e){var t=e.target;

if(t==this._document||t==this._window){this.__cV();

if(this.__di){this.setFocus(this.__di);
delete this.__di;
}
if(this.__dj){this.setActive(this.__dj);
delete this.__dj;
}}else{this.setFocus(t);
this.tryActivate(t);
if(!this.__ds(t)){t.selectionStart=0;
t.selectionEnd=0;
}}},"default":null})),__dh:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bg,{"mshtml":function(e){if(!e.toElement){this.__cU();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bR=e.target;

if(bR===this.getFocus()){this.resetFocus();
}
if(bR===this.getActive()){this.resetActive();
}},"opera":function(e){var H=e.target;

if(H==this._document){this.__cU();
this.__di=this.getFocus();
this.__dj=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(H===this.getFocus()){this.resetFocus();
}
if(H===this.getActive()){this.resetActive();
}}},"default":null})),__dk:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bg,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__cU();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__cU();
this.__di=this.getFocus();
this.__dj=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__dl:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bg,{"gecko":function(e){var D=e.target;

if(D===this._window||D===this._document){this.__cV();
D=this._body;
}this.setFocus(D);
this.tryActivate(D);
},"webkit":function(e){var u=e.target;

if(u===this._window||u===this._document){this.__cV();

if(this.__di){this.setFocus(this.__di);
delete this.__di;
}
if(this.__dj){this.setActive(this.__dj);
delete this.__dj;
}}else{this.setFocus(u);
this.tryActivate(u);
}},"default":null})),__dm:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bg,{"gecko":function(e){var R=e.target;
var P=this.__dq(R);
var Q=this.__ds(R);

if(!Q){qx.bom.Event.preventDefault(e);
if(P){if(qx.core.Variant.isSet(bg,bx)){var S=qx.bom.element.Attribute.get(P,bn)===bp;

if(!S){P.focus();
}}else{P.focus();
}}}else if(!P){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var C=e.srcElement;
var B=this.__dq(C);

if(B){if(!this.__ds(C)){C.unselectable=bc;
try{document.selection.empty();
}catch(e){}try{B.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__ds(C)){C.unselectable=bc;
}}},"webkit":function(e){var bJ=e.target;
var bI=this.__dq(bJ);

if(bI){this.setFocus(bI);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var f=e.target;
var c=this.__dq(f);

if(!this.__ds(f)){qx.bom.Event.preventDefault(e);
if(c){var d=this.getFocus();

if(d&&d.selectionEnd){d.selectionStart=0;
d.selectionEnd=0;
d.blur();
}if(c){this.setFocus(c);
}}}else if(c){this.setFocus(c);
}},"default":null})),__dn:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bg,{"mshtml":function(e){var N=e.srcElement;

if(N.unselectable){N.unselectable=bh;
}this.tryActivate(this.__fo(N));
},"gecko":function(e){var E=e.target;

while(E&&E.offsetWidth===undefined){E=E.parentNode;
}
if(E){this.tryActivate(E);
}},"webkit|opera":function(e){this.tryActivate(this.__fo(e.target));
},"default":null})),__fo:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bg,{"mshtml|webkit":function(T){var U=this.getFocus();

if(U&&T!=U&&(U.nodeName.toLowerCase()===bl||U.nodeName.toLowerCase()===bt)){T=U;
}return T;
},"default":function(bQ){return bQ;
}})),__do:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bg,{"mshtml|webkit":function(e){var bF=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__ds(bF)){qx.bom.Event.preventDefault(e);
}},"default":null})),__dp:function(bM){var bN=qx.bom.element.Attribute.get(bM,bk);

if(bN>=1){return true;
}var bO=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bN>=0&&bO[bM.tagName]){return true;
}return false;
},__dq:function(bP){while(bP&&bP.nodeType===1){if(bP.getAttribute(bs)==bc){return null;
}
if(this.__dp(bP)){return bP;
}bP=bP.parentNode;
}return this._body;
},__dr:function(F){var G=F;

while(F&&F.nodeType===1){if(F.getAttribute(br)==bc){return null;
}F=F.parentNode;
}return G;
},__ds:function(bG){while(bG&&bG.nodeType===1){var bH=bG.getAttribute(bj);

if(bH!=null){return bH===bc;
}bG=bG.parentNode;
}return true;
},_applyActive:function(bD,bE){if(bE){this.__cT(bE,bD,bu,true);
}
if(bD){this.__cT(bD,bE,bi,true);
}},_applyFocus:function(m,n){if(n){this.__cT(n,m,bq,true);
}
if(m){this.__cT(m,n,bm,true);
}if(n){this.__cT(n,m,bf,false);
}
if(m){this.__cT(m,n,be,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fp=null;
},defer:function(y){qx.event.Registration.addHandler(y);
var z=y.FOCUSABLE_ELEMENTS;

for(var A in z){z[A.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var j="",i="qx.client",h="readOnly",g="accessKey",f="qx.bom.element.Attribute",e="rowSpan",d="vAlign",c="className",b="textContent",a="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",o="dateTime",m="maxLength",n="mshtml",k="cellPadding",l="colSpan";
qx.Class.define(f,{statics:{__dt:{names:{"class":c,"for":x,html:q,text:qx.core.Variant.isSet(i,n)?r:b,colspan:l,rowspan:e,valign:d,datetime:o,accesskey:g,tabindex:p,maxlength:m,readonly:h,longdesc:w,cellpadding:k,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,maxLength:10000000,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(F){var G=[];
var I=this.__dt.runtime;

for(var H in F){if(!I[H]){G.push(H,t,F[H],a);
}}return G.join(j);
},get:qx.core.Variant.select(i,{"mshtml":function(C,name){var E=this.__dt;
var D;
name=E.names[name]||name;
if(E.original[name]){D=C.getAttribute(name,2);
}else if(E.property[name]){if(E.propertyDefault[name]&&D==E.propertyDefault[name]){return null;
}D=C[name];
}else{D=C.getAttribute(name);
}if(E.bools[name]){return !!D;
}return D;
},"default":function(J,name){var L=this.__dt;
var K;
name=L.names[name]||name;
if(L.property[name]){if(L.propertyDefault[name]&&K==L.propertyDefault[name]){return null;
}K=J[name];

if(K==null){K=J.getAttribute(name);
}}else{K=J.getAttribute(name);
}if(L.bools[name]){return !!K;
}return K;
}}),set:function(z,name,A){var B=this.__dt;
name=B.names[name]||name;
if(B.bools[name]){A=!!A;
}if(B.property[name]){if(A==null){A=B.propertyDefault[name];

if(A===undefined){A=null;
}}z[name]=A;
}else{if(A===true){z.setAttribute(name,name);
}else if(A===false||A===null){z.removeAttribute(name);
}else{z.setAttribute(name,A);
}}},reset:function(y,name){this.set(y,name,null);
}}});
})();
(function(){var i="left",h="right",g="middle",f="qx.client",e="dblclick",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(j,k,l,m,n){arguments.callee.base.call(this,j,k,l,m,n);

if(!l){this._relatedTarget=qx.bom.Event.getRelatedTarget(j);
}return this;
},_cloneNativeEvent:function(q,r){var r=arguments.callee.base.call(this,q,r);
r.button=q.button;
r.clientX=q.clientX;
r.clientY=q.clientY;
r.pageX=q.pageX;
r.pageY=q.pageY;
r.screenX=q.screenX;
r.screenY=q.screenY;
r.wheelDelta=q.wheelDelta;
r.detail=q.detail;
r.srcElement=q.srcElement;
return r;
},__dx:qx.core.Variant.select(f,{"mshtml":{1:i,2:h,4:g},"default":{0:i,2:h,1:g}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case d:case e:return i;
case b:return h;
default:return this.__dx[this._native.button]||c;
}},isLeftPressed:function(){return this.getButton()===i;
},isMiddlePressed:function(){return this.getButton()===g;
},isRightPressed:function(){return this.getButton()===h;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(o);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){var p=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(p);
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
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var d="qx.client",c="qx.bom.Viewport";
qx.Class.define(c,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(g){if(qx.bom.client.Engine.VERSION<9.5){return (g||window).document.body.clientWidth;
}else{var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}},"webkit":function(l){if(qx.bom.client.Engine.VERSION<523.15){return (l||window).innerWidth;
}else{var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientWidth:m.body.clientWidth;
}},"default":function(q){var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientWidth:r.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(s){if(qx.bom.client.Engine.VERSION<9.5){return (s||window).document.body.clientHeight;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientHeight:t.body.clientHeight;
}},"webkit":function(a){if(qx.bom.client.Engine.VERSION<523.15){return (a||window).innerHeight;
}else{var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientHeight:b.body.clientHeight;
}},"default":function(i){var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientHeight:j.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(o){var p=(o||window).document;
return p.documentElement.scrollLeft||p.body.scrollLeft;
},"default":function(k){return (k||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(e){var f=(e||window).document;
return f.documentElement.scrollTop||f.body.scrollTop;
},"default":function(n){return (n||window).pageYOffset;
}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(i){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (i||window).document.compatMode!==f;
}},"webkit":function(g){if(document.compatMode===undefined){var h=(g||window).document.createElement(a);
h.style.cssText=e;
return h.style.width===c?true:false;
}else{return (g||window).document.compatMode!==f;
}},"default":function(j){return (j||window).document.compatMode!==f;
}}),isStandardMode:function(q){return !this.isQuirksMode(q);
},getWidth:function(n){var o=(n||window).document;
var p=qx.bom.Viewport.getWidth(n);
var scroll=this.isStandardMode(n)?o.documentElement.scrollWidth:o.body.scrollWidth;
return Math.max(scroll,p);
},getHeight:function(k){var l=(k||window).document;
var m=qx.bom.Viewport.getHeight(k);
var scroll=this.isStandardMode(k)?l.documentElement.scrollHeight:l.body.scrollHeight;
return Math.max(scroll,m);
}}});
})();
(function(){var k="qx.client",j="ie",i="msie",h="android",g="operamini",f="mobile chrome",e=")(/| )([0-9]+\.[0-9])",d="iemobile",c="opera mobi",b="Mobile Safari",y="operamobile",x="mobile safari",w="IEMobile|Maxthon|MSIE",v="qx.bom.client.Browser",u="opera mini",t="(",s="opera",r="mshtml",q="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",o="5.0",l="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",m="Mobile/";
qx.Bootstrap.define(v,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__fq:function(z){var A=navigator.userAgent;
var C=new RegExp(t+z+e);
var D=A.match(C);

if(!D){return;
}var name=D[1].toLowerCase();
var B=D[3];
if(A.match(/Version(\/| )([0-9]+\.[0-9])/)){B=RegExp.$2;
}
if(qx.core.Variant.isSet(k,n)){if(name===h){name=f;
}else if(A.indexOf(b)!==-1||A.indexOf(m)!==-1){name=x;
}}else if(qx.core.Variant.isSet(k,r)){if(name===i){name=j;
if(qx.bom.client.System.WINCE&&name===j){name=d;
B=o;
}}}else if(qx.core.Variant.isSet(k,s)){if(name===c){name=y;
}else if(name===u){name=g;
}}this.NAME=name;
this.FULLVERSION=B;
this.VERSION=parseFloat(B,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(k,{"webkit":function(E){E.__fq(p);
},"gecko":function(G){G.__fq(l);
},"mshtml":function(a){a.__fq(w);
},"opera":function(F){F.__fq(q);
}})});
})();
(function(){var j="qx.client",i="qx.dom.Hierarchy",h="previousSibling",g="*",f="nextSibling",e="parentNode";
qx.Class.define(i,{statics:{getNodeIndex:function(k){var l=0;

while(k&&(k=k.previousSibling)){l++;
}return l;
},getElementIndex:function(S){var T=0;
var U=qx.dom.Node.ELEMENT;

while(S&&(S=S.previousSibling)){if(S.nodeType==U){T++;
}}return T;
},getNextElementSibling:function(G){while(G&&(G=G.nextSibling)&&!qx.dom.Node.isElement(G)){continue;
}return G||null;
},getPreviousElementSibling:function(N){while(N&&(N=N.previousSibling)&&!qx.dom.Node.isElement(N)){continue;
}return N||null;
},contains:qx.core.Variant.select(j,{"webkit|mshtml|opera":function(P,Q){if(qx.dom.Node.isDocument(P)){var R=qx.dom.Node.getDocument(Q);
return P&&R==P;
}else if(qx.dom.Node.isDocument(Q)){return false;
}else{return P.contains(Q);
}},"gecko":function(t,u){return !!(t.compareDocumentPosition(u)&16);
},"default":function(H,I){while(I){if(H==I){return true;
}I=I.parentNode;
}return false;
}}),isRendered:function(A){if(!A.offsetParent){return false;
}var B=A.ownerDocument||A.document;
if(B.body.contains){return B.body.contains(A);
}if(B.compareDocumentPosition){return !!(B.compareDocumentPosition(A)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(L,M){return this.contains(M,L);
},getCommonParent:qx.core.Variant.select(j,{"mshtml|opera":function(a,b){if(a===b){return a;
}
while(a&&qx.dom.Node.isElement(a)){if(a.contains(b)){return a;
}a=a.parentNode;
}return null;
},"default":function(n,o){if(n===o){return n;
}var p={};
var s=qx.core.ObjectRegistry;
var r,q;

while(n||o){if(n){r=s.toHashCode(n);

if(p[r]){return p[r];
}p[r]=n;
n=n.parentNode;
}
if(o){q=s.toHashCode(o);

if(p[q]){return p[q];
}p[q]=o;
o=o.parentNode;
}}return null;
}}),getAncestors:function(C){return this._recursivelyCollect(C,e);
},getChildElements:function(y){y=y.firstChild;

if(!y){return [];
}var z=this.getNextSiblings(y);

if(y.nodeType===1){z.unshift(y);
}return z;
},getDescendants:function(V){return qx.lang.Array.fromCollection(V.getElementsByTagName(g));
},getFirstDescendant:function(m){m=m.firstChild;

while(m&&m.nodeType!=1){m=m.nextSibling;
}return m;
},getLastDescendant:function(d){d=d.lastChild;

while(d&&d.nodeType!=1){d=d.previousSibling;
}return d;
},getPreviousSiblings:function(J){return this._recursivelyCollect(J,h);
},getNextSiblings:function(O){return this._recursivelyCollect(O,f);
},_recursivelyCollect:function(D,E){var F=[];

while(D=D[E]){if(D.nodeType==1){F.push(D);
}}return F;
},getSiblings:function(K){return this.getPreviousSiblings(K).reverse().concat(this.getNextSiblings(K));
},isEmpty:function(c){c=c.firstChild;

while(c){if(c.nodeType===qx.dom.Node.ELEMENT||c.nodeType===qx.dom.Node.TEXT){return false;
}c=c.nextSibling;
}return true;
},cleanWhitespace:function(v){var w=v.firstChild;

while(w){var x=w.nextSibling;

if(w.nodeType==3&&!/\S/.test(w.nodeValue)){v.removeChild(w);
}w=x;
}}}});
})();
(function(){var c="qx.client",b="qx.event.type.Drag";
qx.Class.define(b,{extend:qx.event.type.Event,members:{init:function(d,e){arguments.callee.base.call(this,true,d);

if(e){this._native=e.getNativeEvent()||null;
this._originalTarget=e.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(h){var i=arguments.callee.base.call(this,h);
i._native=this._native;
return i;
},getDocumentLeft:qx.core.Variant.select(c,{"mshtml":function(){if(this._native==null){return 0;
}var j=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(j);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(c,{"mshtml":function(){if(this._native==null){return 0;
}var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(f);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(o){this.getManager().addType(o);
},addAction:function(k){this.getManager().addAction(k);
},supportsType:function(g){return this.getManager().supportsType(g);
},supportsAction:function(n){return this.getManager().supportsAction(n);
},addData:function(l,m){this.getManager().addData(l,m);
},getData:function(a){return this.getManager().getData(a);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(n){arguments.callee.base.call(this);
this.setEnabled(false);

if(n!=null){this.setInterval(n);
}var self=this;
this.__fr=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(p,q,r){var s=new qx.event.Timer(r);
s.addListener(h,function(e){s.stop();
p.call(q,e);
s.dispose();
q=null;
},q);
s.start();
return s;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__fs:null,__fr:null,_applyInterval:function(j,k){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(l,m){if(m){window.clearInterval(this.__fs);
this.__fs=null;
}else if(l){this.__fs=window.setInterval(this.__fr,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(i){this.setInterval(i);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(o){this.stop();
this.startWith(o);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__fs){window.clearInterval(this.__fs);
}this.__fs=this.__fr=null;
}});
})();
(function(){var j="losecapture",i="qx.client",h="blur",g="focus",f="click",e="qx.event.dispatch.MouseCapture",d="capture",c="scroll";
qx.Class.define(e,{extend:qx.event.dispatch.AbstractBubbling,construct:function(k,l){arguments.callee.base.call(this,k);
this.__dz=k.getWindow();
this.__ft=l;
k.addListener(this.__dz,h,this.releaseCapture,this);
k.addListener(this.__dz,g,this.releaseCapture,this);
k.addListener(this.__dz,c,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__ft:null,__dA:null,__fu:true,__dz:null,_getParent:function(m){return m.parentNode;
},canDispatchEvent:function(r,event,s){return (this.__dA&&this.__dB[s]);
},dispatchEvent:function(a,event,b){if(b==f){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fu||!qx.dom.Hierarchy.contains(this.__dA,a)){a=this.__dA;
}arguments.callee.base.call(this,a,event,b);
},__dB:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(p,q){var q=q!==false;

if(this.__dA===p&&this.__fu==q){return;
}
if(this.__dA){this.releaseCapture();
}this.nativeSetCapture(p,q);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(p,j,function(){qx.bom.Event.removeNativeListener(p,j,arguments.callee);
self.releaseCapture();
});
}this.__fu=q;
this.__dA=p;
this.__ft.fireEvent(p,d,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__dA;
},releaseCapture:function(){var v=this.__dA;

if(!v){return;
}this.__dA=null;
this.__ft.fireEvent(v,j,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(v);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(i,{"mshtml":function(o){o.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__dA=this.__dz=this.__ft=null;
},defer:function(n){qx.event.Registration.addDispatcher(n);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){arguments.callee.base.call(this);
this._manager=n;
this._window=n.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(l,m){},registerEvent:function(o,p,q){},unregisterEvent:function(c,d,f){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var u=qx.event.handler.Window.SUPPORTED_TYPES;

for(var t in u){qx.bom.Event.addNativeListener(this._window,t,this._onNativeWrapper);
}},_stopWindowObserver:function(){var s=qx.event.handler.Window.SUPPORTED_TYPES;

for(var r in s){qx.bom.Event.removeNativeListener(this._window,r,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var h=this._window;

try{var k=h.document;
}catch(e){return ;
}var i=k.documentElement;
var g=e.target||e.srcElement;

if(g==null||g===h||g===k||g===i){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,h]);
qx.event.Registration.dispatchEvent(h,event);
var j=event.getReturnValue();

if(j!=null){e.returnValue=j;
return j;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(F){if(F.nodeType===9){return F.documentElement.nodeName!==d;
}else if(F.ownerDocument){return this.isXmlDocument(F.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(w,x){var y=new ActiveXObject(this.DOMDOC);
y.setProperty(n,b);

if(x){var z=h;
z+=x;

if(w){z+=f+w+o;
}z+=k;
y.loadXML(z);
}return y;
},"default":function(D,E){return document.implementation.createDocument(D||q,E||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(s){var t=qx.xml.Document.create();
t.loadXML(s);
return t;
},"default":function(u){var v=new DOMParser();
return v.parseFromString(u,e);
}})},defer:function(A){if(qx.core.Variant.isSet(r,p)){var B=[a,j];
var C=[c,g];

for(var i=0,l=B.length;i<l;i++){try{new ActiveXObject(B[i]);
new ActiveXObject(C[i]);
}catch(G){continue;
}A.DOMDOC=B[i];
A.XMLHTTP=C[i];
break;
}}}});
})();
(function(){var f="(\\s|$)",e="(^|\\s)",d="",c="qx.bom.element.Class",b=" ",a="$2";
qx.Class.define(c,{statics:{add:function(i,name){if(!this.has(i,name)){i.className+=(i.className?b:d)+name;
}return name;
},get:function(q){return q.className;
},has:function(g,name){var h=new RegExp(e+name+f);
return h.test(g.className);
},remove:function(o,name){var p=new RegExp(e+name+f);
o.className=o.className.replace(p,a);
return name;
},replace:function(j,k,l){this.remove(j,k);
return this.add(j,l);
},toggle:function(m,name,n){if(n==null){n=!this.has(m,name);
}n?this.add(m,name):this.remove(m,name);
return name;
}}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(o){if(!o){return k;
}var t=o.left;
var top=o.top;
var s=o.width;
var r=o.height;
var p,q;

if(t==null){p=(s==null?n:s+m);
t=n;
}else{p=(s==null?n:t+s+m);
t=t+m;
}
if(top==null){q=(r==null?n:r+m);
top=n;
}else{q=(r==null?n:top+r+m);
top=top+m;
}return d+top+l+p+l+q+l+t+i;
},get:function(u,v){var x=qx.bom.element.Style.get(u,c,v,false);
var C,top,A,z;
var w,y;

if(typeof x===e&&x!==n&&x!==h){x=qx.lang.String.trim(x);
if(/\((.*)\)/.test(x)){var B=RegExp.$1.split(l);
top=qx.lang.String.trim(B[0]);
w=qx.lang.String.trim(B[1]);
y=qx.lang.String.trim(B[2]);
C=qx.lang.String.trim(B[3]);
if(C===n){C=null;
}
if(top===n){top=null;
}
if(w===n){w=null;
}
if(y===n){y=null;
}if(top!=null){top=parseInt(top,10);
}
if(w!=null){w=parseInt(w,10);
}
if(y!=null){y=parseInt(y,10);
}
if(C!=null){C=parseInt(C,10);
}if(w!=null&&C!=null){A=w-C;
}else if(w!=null){A=w;
}
if(y!=null&&top!=null){z=y-top;
}else if(y!=null){z=y;
}}else{throw new Error("Could not parse clip string: "+x);
}}return {left:C||null,top:top||null,width:A||null,height:z||null};
},set:function(D,E){if(!E){D.style.clip=a;
return;
}var J=E.left;
var top=E.top;
var I=E.width;
var H=E.height;
var F,G;

if(J==null){F=(I==null?n:I+m);
J=n;
}else{F=(I==null?n:J+I+m);
J=J+m;
}
if(top==null){G=(H==null?n:H+m);
top=n;
}else{G=(H==null?n:top+H+m);
top=top+m;
}D.style.clip=j+top+l+F+l+G+l+J+g;
},reset:function(K){K.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__dF:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(q){return f+(this.__dF[q]||q)+d;
},get:function(n,o){return qx.bom.element.Style.get(n,b,o,false);
},set:function(l,m){l.style.cursor=this.__dF[m]||m;
},reset:function(p){p.style.cursor=g;
}}});
})();
(function(){var n="",m="qx.client",l=";",k="filter",j="opacity:",i="opacity",h="MozOpacity",g=");",f=")",e="zoom:1;filter:alpha(opacity=",b="qx.bom.element.Opacity",d="alpha(opacity=",c="-moz-opacity:";
qx.Class.define(b,{statics:{compile:qx.core.Variant.select(m,{"mshtml":function(x){if(x>=1){return n;
}
if(x<0.00001){x=0;
}return e+(x*100)+g;
},"gecko":function(a){if(a==1){a=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return c+a+l;
}else{return j+a+l;
}},"default":function(s){if(s==1){return n;
}return j+s+l;
}}),set:qx.core.Variant.select(m,{"mshtml":function(A,B){var C=qx.bom.element.Style.get(A,k,qx.bom.element.Style.COMPUTED_MODE,false);
if(B>=1){A.style.filter=C.replace(/alpha\([^\)]*\)/gi,n);
return;
}
if(B<0.00001){B=0;
}if(!A.currentStyle||!A.currentStyle.hasLayout){A.style.zoom=1;
}A.style.filter=C.replace(/alpha\([^\)]*\)/gi,n)+d+B*100+f;
},"gecko":function(G,H){if(H==1){H=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){G.style.MozOpacity=H;
}else{G.style.opacity=H;
}},"default":function(y,z){if(z==1){z=n;
}y.style.opacity=z;
}}),reset:qx.core.Variant.select(m,{"mshtml":function(E){var F=qx.bom.element.Style.get(E,k,qx.bom.element.Style.COMPUTED_MODE,false);
E.style.filter=F.replace(/alpha\([^\)]*\)/gi,n);
},"gecko":function(D){if(qx.bom.client.Engine.VERSION<1.7){D.style.MozOpacity=n;
}else{D.style.opacity=n;
}},"default":function(o){o.style.opacity=n;
}}),get:qx.core.Variant.select(m,{"mshtml":function(t,u){var v=qx.bom.element.Style.get(t,k,u,false);

if(v){var w=v.match(/alpha\(opacity=(.*)\)/);

if(w&&w[1]){return parseFloat(w[1])/100;
}}return 1.0;
},"gecko":function(p,q){var r=qx.bom.element.Style.get(p,qx.bom.client.Engine.VERSION<1.7?h:i,q,false);

if(r==0.999999){r=1.0;
}
if(r!=null){return parseFloat(r);
}return 1.0;
},"default":function(I,J){var K=qx.bom.element.Style.get(I,i,J,false);

if(K!=null){return parseFloat(K);
}return 1.0;
}})}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__dG:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__dH:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__dI:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dJ:function(D){var E=this.__dI;
return E.tags[D.tagName.toLowerCase()]||E.types[D.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(r){{};
},"default":function(x){var z=this.__dH;
var y=p;

if(z){for(var i=0,l=z.length;i<l;i++){y+=z[i]+m+x+c;
}}return y;
}}),get:qx.core.Variant.select(q,{"mshtml":function(w){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(w))){if(!this.__dJ(w)){return d;
}}return k;
},"default":function(s){var u=this.__dG;
var t;

if(u){for(var i=0,l=u.length;i<l;i++){t=qx.bom.element.Style.get(s,u[i],null,false);

if(t!=null&&t!==p){return t;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(F,G){{};
},"default":function(A,B){var C=this.__dG;

if(C){for(var i=0,l=C.length;i<l;i++){A.style[C[i]]=B;
}}}}),reset:function(v){this.set(v,p);
}}});
})();
(function(){var x="",w="qx.client",v="hidden",u="-moz-scrollbars-none",r="overflow",q=";",p="overflowY",o=":",n="overflowX",m="overflow:",J="none",I="scroll",H="borderLeftStyle",G="borderRightStyle",F="div",E="borderRightWidth",D="overflow-y",C="borderLeftWidth",B="-moz-scrollbars-vertical",A="100px",y="qx.bom.element.Overflow",z="overflow-x";
qx.Class.define(y,{statics:{__dC:null,getScrollbarWidth:function(){if(this.__dC!==null){return this.__dC;
}var bM=qx.bom.element.Style;
var bO=function(T,U){return parseInt(bM.get(T,U))||0;
};
var bP=function(d){return (bM.get(d,G)==J?0:bO(d,E));
};
var bN=function(V){return (bM.get(V,H)==J?0:bO(V,C));
};
var bR=qx.core.Variant.select(w,{"mshtml":function(bB){if(bM.get(bB,p)==v||bB.clientWidth==0){return bP(bB);
}return Math.max(0,bB.offsetWidth-bB.clientLeft-bB.clientWidth);
},"default":function(cb){if(cb.clientWidth==0){var cc=bM.get(cb,r);
var cd=(cc==I||cc==B?16:0);
return Math.max(0,bP(cb)+cd);
}return Math.max(0,(cb.offsetWidth-cb.clientWidth-bN(cb)));
}});
var bQ=function(bA){return bR(bA)-bP(bA);
};
var t=document.createElement(F);
var s=t.style;
s.height=s.width=A;
s.overflow=I;
document.body.appendChild(t);
var c=bQ(t);
this.__dC=c?c:16;
document.body.removeChild(t);
return this.__dC;
},_compile:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bG,bH){if(bH==v){bH=u;
}return m+bH+q;
}:
function(N,O){return N+o+O+q;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bY,ca){return m+ca+q;
}:
function(R,S){return R+o+S+q;
},"default":function(ba,bb){return ba+o+bb+q;
}}),compileX:function(by){return this._compile(z,by);
},compileY:function(K){return this._compile(D,K);
},getX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(g,h){var i=qx.bom.element.Style.get(g,r,h,false);

if(i===u){i=v;
}return i;
}:
function(bg,bh){return qx.bom.element.Style.get(bg,n,bh,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bl,bm){return qx.bom.element.Style.get(bl,r,bm,false);
}:
function(bi,bj){return qx.bom.element.Style.get(bi,n,bj,false);
},"default":function(ce,cf){return qx.bom.element.Style.get(ce,n,cf,false);
}}),setX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bU,bV){if(bV==v){bV=u;
}bU.style.overflow=bV;
}:
function(bW,bX){bW.style.overflowX=bX;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bE,bF){bE.style.overflow=bF;
}:
function(P,Q){P.style.overflowX=Q;
},"default":function(bK,bL){bK.style.overflowX=bL;
}}),resetX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bk){bk.style.overflow=x;
}:
function(j){j.style.overflowX=x;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(e,f){e.style.overflow=x;
}:
function(bp,bq){bp.style.overflowX=x;
},"default":function(b){b.style.overflowX=x;
}}),getY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bv,bw){var bx=qx.bom.element.Style.get(bv,r,bw,false);

if(bx===u){bx=v;
}return bx;
}:
function(bC,bD){return qx.bom.element.Style.get(bC,p,bD,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(be,bf){return qx.bom.element.Style.get(be,r,bf,false);
}:
function(bt,bu){return qx.bom.element.Style.get(bt,p,bu,false);
},"default":function(bS,bT){return qx.bom.element.Style.get(bS,p,bT,false);
}}),setY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(W,X){if(X===v){X=u;
}W.style.overflow=X;
}:
function(bn,bo){bn.style.overflowY=bo;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(k,l){k.style.overflow=l;
}:
function(br,bs){br.style.overflowY=bs;
},"default":function(bI,bJ){bI.style.overflowY=bJ;
}}),resetY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bz){bz.style.overflow=x;
}:
function(a){a.style.overflowY=x;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bc,bd){bc.style.overflow=x;
}:
function(L,M){L.style.overflowY=x;
},"default":function(Y){Y.style.overflowY=x;
}})}});
})();
(function(){var j="",i="qx.client",h="user-select",g="userSelect",f="appearance",e="style",d="MozUserModify",c="px",b="-webkit-appearance",a="styleFloat",F="-webkit-user-select",E="-moz-appearance",D="pixelHeight",C="MozAppearance",B=":",A="pixelTop",z="pixelLeft",y="text-overflow",x="-moz-user-select",w="MozUserSelect",q="qx.bom.element.Style",r="-moz-user-modify",o="-webkit-user-modify",p="WebkitUserSelect",m="-o-text-overflow",n="pixelRight",k="cssFloat",l="pixelWidth",s="pixelBottom",t=";",v="WebkitUserModify",u="WebkitAppearance";
qx.Class.define(q,{statics:{__dD:{styleNames:{"float":qx.core.Variant.select(i,{"mshtml":a,"default":k}),"appearance":qx.core.Variant.select(i,{"gecko":C,"webkit":u,"default":f}),"userSelect":qx.core.Variant.select(i,{"gecko":w,"webkit":p,"default":g}),"userModify":qx.core.Variant.select(i,{"gecko":d,"webkit":v,"default":g})},cssNames:{"appearance":qx.core.Variant.select(i,{"gecko":E,"webkit":b,"default":f}),"userSelect":qx.core.Variant.select(i,{"gecko":x,"webkit":F,"default":h}),"userModify":qx.core.Variant.select(i,{"gecko":r,"webkit":o,"default":h}),"textOverflow":qx.core.Variant.select(i,{"opera":m,"default":y})},mshtmlPixel:{width:l,height:D,left:z,right:n,top:A,bottom:s},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__dE:{},compile:function(bq){var bu=[];
var by=this.__dD;
var bx=by.special;
var bv=by.cssNames;
var bt=this.__dE;
var bw=qx.lang.String;
var name,bs,br;

for(name in bq){br=bq[name];

if(br==null){continue;
}name=bv[name]||name;
if(bx[name]){bu.push(bx[name].compile(br));
}else{bs=bt[name];

if(!bs){bs=bt[name]=bw.hyphenate(name);
}bu.push(bs,B,br,t);
}}return bu.join(j);
},setCss:qx.core.Variant.select(i,{"mshtml":function(bn,bo){bn.style.cssText=bo;
},"default":function(Y,ba){Y.setAttribute(e,ba);
}}),getCss:qx.core.Variant.select(i,{"mshtml":function(bp){return bp.style.cssText.toLowerCase();
},"default":function(bz){return bz.getAttribute(e);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bb,name,bc,bd){{};
var be=this.__dD;
name=be.styleNames[name]||name;
if(bd!==false&&be.special[name]){return be.special[name].set(bb,bc);
}else{bb.style[name]=bc!==null?bc:j;
}},setStyles:function(P,Q,R){{};
var X=this.__dD;
var U=X.styleNames;
var W=X.special;
var S=P.style;

for(var V in Q){var T=Q[V];
var name=U[V]||V;

if(T===undefined){if(R!==false&&W[name]){W[name].reset(P);
}else{S[name]=j;
}}else{if(R!==false&&W[name]){W[name].set(P,T);
}else{S[name]=T!==null?T:j;
}}}},reset:function(M,name,N){var O=this.__dD;
name=O.styleNames[name]||name;
if(N!==false&&O.special[name]){return O.special[name].reset(M);
}else{M.style[name]=j;
}},get:qx.core.Variant.select(i,{"mshtml":function(bf,name,bg,bh){var bm=this.__dD;
name=bm.styleNames[name]||name;
if(bh!==false&&bm.special[name]){return bm.special[name].get(bf,bg);
}if(!bf.currentStyle){return bf.style[name]||j;
}switch(bg){case this.LOCAL_MODE:return bf.style[name]||j;
case this.CASCADED_MODE:return bf.currentStyle[name]||j;
default:var bl=bf.currentStyle[name]||j;
if(/^-?[\.\d]+(px)?$/i.test(bl)){return bl;
}var bk=bm.mshtmlPixel[name];

if(bk){var bi=bf.style[name];
bf.style[name]=bl||0;
var bj=bf.style[bk]+c;
bf.style[name]=bi;
return bj;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bl)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bl;
}},"default":function(G,name,H,I){var L=this.__dD;
name=L.styleNames[name]||name;
if(I!==false&&L.special[name]){return L.special[name].get(G,H);
}switch(H){case this.LOCAL_MODE:return G.style[name]||j;
case this.CASCADED_MODE:if(G.currentStyle){return G.currentStyle[name]||j;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var J=qx.dom.Node.getDocument(G);
var K=J.defaultView.getComputedStyle(G,null);
return K?K[name]:j;
}}})}});
})();
(function(){var n="mshtml",m="qx.client",l="qx.bom.element.Dimension",k="paddingRight",j="paddingLeft",i="paddingTop",h="paddingBottom";
qx.Class.define(l,{statics:{getWidth:qx.core.Variant.select(m,{"gecko":function(x){if(x.getBoundingClientRect){var y=x.getBoundingClientRect();
return Math.round(y.right)-Math.round(y.left);
}else{return x.offsetWidth;
}},"default":function(B){return B.offsetWidth;
}}),getHeight:qx.core.Variant.select(m,{"gecko":function(z){if(z.getBoundingClientRect){var A=z.getBoundingClientRect();
return Math.round(A.bottom)-Math.round(A.top);
}else{return z.offsetHeight;
}},"default":function(C){return C.offsetHeight;
}}),getSize:function(w){return {width:this.getWidth(w),height:this.getHeight(w)};
},__dQ:{visible:true,hidden:true},getContentWidth:function(a){var c=qx.bom.element.Style;
var d=qx.bom.element.Overflow.getX(a);
var e=parseInt(c.get(a,j),10);
var g=parseInt(c.get(a,k),10);

if(this.__dQ[d]){return a.clientWidth-e-g;
}else{if(a.clientWidth>=a.scrollWidth){return Math.max(a.clientWidth,a.scrollWidth)-e-g;
}else{var f=a.scrollWidth-e;
var b=qx.bom.client.Engine;

if(b.NAME===n&&b.VERSION==6){f-=g;
}return f;
}}},getContentHeight:function(p){var r=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getY(p);
var u=parseInt(r.get(p,i),10);
var s=parseInt(r.get(p,h),10);

if(this.__dQ[t]){return p.clientHeight-u-s;
}else{if(p.clientHeight>=p.scrollHeight){return Math.max(p.clientHeight,p.scrollHeight)-u-s;
}else{var v=p.scrollHeight-u;
var q=qx.bom.client.Engine;

if(q.NAME===n&&q.VERSION==6){v-=s;
}return v;
}}},getContentSize:function(o){return {width:this.getContentWidth(o),height:this.getContentHeight(o)};
}}});
})();
(function(){var s="number",r="0",q="px",p=";",o="background-image:url(",n=");",m="",l=")",k="background-repeat:",j=" ",g="qx.bom.element.Background",i="url(",h="background-position:";
qx.Class.define(g,{statics:{__dR:[o,null,n,h,null,p,k,null,p],__dS:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__dT:function(t,top){var u=qx.bom.client.Engine;

if(u.GECKO&&u.VERSION<1.9&&t==top&&typeof t==s){top+=0.01;
}
if(t){var v=(typeof t==s)?t+q:t;
}else{v=r;
}
if(top){var w=(typeof top==s)?top+q:top;
}else{w=r;
}return v+j+w;
},compile:function(D,E,F,top){var G=this.__dT(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I=this.__dR;
I[1]=H;
I[4]=G;
I[7]=E;
return I.join(m);
},getStyles:function(a,b,c,top){if(!a){return this.__dS;
}var d=this.__dT(c,top);
var e=qx.util.ResourceManager.getInstance().toUri(a);
var f={backgroundPosition:d,backgroundImage:i+e+l};

if(b!=null){f.backgroundRepeat=b;
}return f;
},set:function(x,y,z,A,top){var B=this.getStyles(y,z,A,top);

for(var C in B){x.style[C]=B[C];
}}}});
})();
(function(){var j="/",i="mshtml",h="",g="qx.client",f="?",e="string",d="qx.util.ResourceManager",c="singleton";
qx.Class.define(d,{extend:qx.core.Object,type:c,statics:{__dV:qx.$$resources||{},__fv:{}},members:{has:function(t){return !!arguments.callee.self.__dV[t];
},getData:function(s){return arguments.callee.self.__dV[s]||null;
},getImageWidth:function(k){var l=arguments.callee.self.__dV[k];
return l?l[0]:null;
},getImageHeight:function(A){var B=arguments.callee.self.__dV[A];
return B?B[1]:null;
},getImageFormat:function(y){var z=arguments.callee.self.__dV[y];
return z?z[2]:null;
},isClippedImage:function(a){var b=arguments.callee.self.__dV[a];
return b&&b.length>4;
},toUri:function(u){if(u==null){return u;
}var v=arguments.callee.self.__dV[u];

if(!v){return u;
}
if(typeof v===e){var x=v;
}else{var x=v[3];
if(!x){return u;
}}var w=h;

if(qx.core.Variant.isSet(g,i)&&qx.bom.client.Feature.SSL){w=arguments.callee.self.__fv[x];
}return w+qx.$$libraries[x].resourceUri+j+u;
}},defer:function(m){if(qx.core.Variant.isSet(g,i)){if(qx.bom.client.Feature.SSL){for(var q in qx.$$libraries){var o;

if(qx.$$libraries[q].resourceUri){o=qx.$$libraries[q].resourceUri;
}else{m.__fv[q]=h;
continue;
}if(o.match(/^\/\//)!=null){m.__fv[q]=window.location.protocol;
}else if(o.match(/^\.\//)!=null){var n=document.URL;
m.__fv[q]=n.substring(0,n.lastIndexOf(j)+1);
}else if(o.match(/^http/)!=null){}else{var r=window.location.href.indexOf(f);
var p;

if(r==-1){p=window.location.href;
}else{p=window.location.href.substring(0,r);
}m.__fv[q]=p.substring(0,p.lastIndexOf(j)+1);
}}}}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(K,stop,L){var parent=K.parentNode;
var Q=qx.dom.Node.getDocument(K);
var M=Q.body;
var Y,W,T;
var bb,R,bc;
var U,bd,bg;
var be,O,X,N;
var S,bf,V;
var P=L===g;
var ba=L===c;
stop=stop?stop.parentNode:Q;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){W=parent.scrollLeft;
T=W+qx.bom.Viewport.getWidth();
bb=qx.bom.Viewport.getWidth();
R=parent.clientWidth;
bc=parent.scrollWidth;
U=0;
bd=0;
bg=0;
}else{Y=qx.bom.element.Location.get(parent);
W=Y.left;
T=Y.right;
bb=parent.offsetWidth;
R=parent.clientWidth;
bc=parent.scrollWidth;
U=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
bd=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
bg=bb-R-U-bd;
}be=qx.bom.element.Location.get(K);
O=be.left;
X=be.right;
N=K.offsetWidth;
S=O-W-U;
bf=X-T+bd;
V=0;
if(P){V=S;
}else if(ba){V=bf+bg;
}else if(S<0||N>R){V=S;
}else if(bf>0){V=bf+bg;
}parent.scrollLeft+=V;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoViewY:function(l,stop,m){var parent=l.parentNode;
var s=qx.dom.Node.getDocument(l);
var n=s.body;
var A,o,w;
var C,z,u;
var q,r,p;
var E,F,B,v;
var y,t,G;
var D=m===d;
var x=m===e;
stop=stop?stop.parentNode:s;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){o=parent.scrollTop;
w=o+qx.bom.Viewport.getHeight();
C=qx.bom.Viewport.getHeight();
z=parent.clientHeight;
u=parent.scrollHeight;
q=0;
r=0;
p=0;
}else{A=qx.bom.element.Location.get(parent);
o=A.top;
w=A.bottom;
C=parent.offsetHeight;
z=parent.clientHeight;
u=parent.scrollHeight;
q=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
r=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
p=C-z-q-r;
}E=qx.bom.element.Location.get(l);
F=E.top;
B=E.bottom;
v=l.offsetHeight;
y=F-o-q;
t=B-w+r;
G=0;
if(D){G=y;
}else if(x){G=t+p;
}else if(y<0||v>z){G=y;
}else if(t>0){G=t+p;
}parent.scrollTop+=G;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
}}});
})();
(function(){var bc="borderTopWidth",bb="borderLeftWidth",ba="marginTop",Y="marginLeft",X="scroll",W="qx.client",V="border-box",U="borderBottomWidth",T="borderRightWidth",S="auto",br="padding",bq="qx.bom.element.Location",bp="paddingLeft",bo="static",bn="marginBottom",bm="visible",bl="BODY",bk="paddingBottom",bj="paddingTop",bi="marginRight",bg="position",bh="margin",be="overflow",bf="paddingRight",bd="border";
qx.Class.define(bq,{statics:{__dK:function(a,b){return qx.bom.element.Style.get(a,b,qx.bom.element.Style.COMPUTED_MODE,false);
},__dL:function(u,v){return parseInt(qx.bom.element.Style.get(u,v,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__dM:function(K){var N=0,top=0;
if(K.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var M=qx.dom.Node.getWindow(K);
N-=qx.bom.Viewport.getScrollLeft(M);
top-=qx.bom.Viewport.getScrollTop(M);
}else{var L=qx.dom.Node.getDocument(K).body;
K=K.parentNode;
while(K&&K!=L){N+=K.scrollLeft;
top+=K.scrollTop;
K=K.parentNode;
}}return {left:N,top:top};
},__dN:qx.core.Variant.select(W,{"mshtml":function(w){var y=qx.dom.Node.getDocument(w);
var x=y.body;
var z=0;
var top=0;
z-=x.clientLeft+y.documentElement.clientLeft;
top-=x.clientTop+y.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){z+=this.__dL(x,bb);
top+=this.__dL(x,bc);
}return {left:z,top:top};
},"webkit":function(O){var Q=qx.dom.Node.getDocument(O);
var P=Q.body;
var R=P.offsetLeft;
var top=P.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){R+=this.__dL(P,bb);
top+=this.__dL(P,bc);
}return {left:R,top:top};
},"gecko":function(bE){var bF=qx.dom.Node.getDocument(bE).body;
var bG=bF.offsetLeft;
var top=bF.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bG+=this.__dL(bF,Y);
top+=this.__dL(bF,ba);
}if(qx.bom.element.BoxSizing.get(bF)!==V){bG+=this.__dL(bF,bb);
top+=this.__dL(bF,bc);
}return {left:bG,top:top};
},"default":function(bI){var bJ=qx.dom.Node.getDocument(bI).body;
var bK=bJ.offsetLeft;
var top=bJ.offsetTop;
return {left:bK,top:top};
}}),__dO:qx.core.Variant.select(W,{"mshtml|webkit":function(bL){var bN=qx.dom.Node.getDocument(bL);
if(bL.getBoundingClientRect){var bO=bL.getBoundingClientRect();
var bP=bO.left;
var top=bO.top;
}else{var bP=bL.offsetLeft;
var top=bL.offsetTop;
bL=bL.offsetParent;
var bM=bN.body;
while(bL&&bL!=bM){bP+=bL.offsetLeft;
top+=bL.offsetTop;
bP+=this.__dL(bL,bb);
top+=this.__dL(bL,bc);
bL=bL.offsetParent;
}}return {left:bP,top:top};
},"gecko":function(m){if(m.getBoundingClientRect){var p=m.getBoundingClientRect();
var q=Math.round(p.left);
var top=Math.round(p.top);
}else{var q=0;
var top=0;
var n=qx.dom.Node.getDocument(m).body;
var o=qx.bom.element.BoxSizing;

if(o.get(m)!==V){q-=this.__dL(m,bb);
top-=this.__dL(m,bc);
}
while(m&&m!==n){q+=m.offsetLeft;
top+=m.offsetTop;
if(o.get(m)!==V){q+=this.__dL(m,bb);
top+=this.__dL(m,bc);
}if(m.parentNode&&this.__dK(m.parentNode,be)!=bm){q+=this.__dL(m.parentNode,bb);
top+=this.__dL(m.parentNode,bc);
}m=m.offsetParent;
}}return {left:q,top:top};
},"default":function(bB){var bD=0;
var top=0;
var bC=qx.dom.Node.getDocument(bB).body;
while(bB&&bB!==bC){bD+=bB.offsetLeft;
top+=bB.offsetTop;
bB=bB.offsetParent;
}return {left:bD,top:top};
}}),get:function(bs,bt){if(bs.tagName==bl){var location=this.__fw(bs);
var bA=location.left;
var top=location.top;
}else{var bu=this.__dN(bs);
var bz=this.__dO(bs);
var scroll=this.__dM(bs);
var bA=bz.left+bu.left-scroll.left;
var top=bz.top+bu.top-scroll.top;
}var bv=bA+bs.offsetWidth;
var bw=top+bs.offsetHeight;

if(bt){if(bt==br||bt==X){var bx=qx.bom.element.Overflow.getX(bs);

if(bx==X||bx==S){bv+=bs.scrollWidth-bs.offsetWidth+this.__dL(bs,bb)+this.__dL(bs,T);
}var by=qx.bom.element.Overflow.getY(bs);

if(by==X||by==S){bw+=bs.scrollHeight-bs.offsetHeight+this.__dL(bs,bc)+this.__dL(bs,U);
}}
switch(bt){case br:bA+=this.__dL(bs,bp);
top+=this.__dL(bs,bj);
bv-=this.__dL(bs,bf);
bw-=this.__dL(bs,bk);
case X:bA-=bs.scrollLeft;
top-=bs.scrollTop;
bv-=bs.scrollLeft;
bw-=bs.scrollTop;
case bd:bA+=this.__dL(bs,bb);
top+=this.__dL(bs,bc);
bv-=this.__dL(bs,T);
bw-=this.__dL(bs,U);
break;
case bh:bA-=this.__dL(bs,Y);
top-=this.__dL(bs,ba);
bv+=this.__dL(bs,bi);
bw+=this.__dL(bs,bn);
break;
}}return {left:bA,top:top,right:bv,bottom:bw};
},__fw:qx.core.Variant.select(W,{"default":function(I){var top=I.offsetTop+this.__dL(I,ba);
var J=I.offsetLeft+this.__dL(I,Y);
return {left:J,top:top};
},"mshtml":function(C){var top=C.offsetTop;
var D=C.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__dL(C,ba);
D+=this.__dL(C,Y);
}return {left:D,top:top};
},"gecko":function(G){var top=G.offsetTop+this.__dL(G,ba)+this.__dL(G,bb);
var H=G.offsetLeft+this.__dL(G,Y)+this.__dL(G,bc);
return {left:H,top:top};
}}),getLeft:function(k,l){return this.get(k,l).left;
},getTop:function(A,B){return this.get(A,B).top;
},getRight:function(c,d){return this.get(c,d).right;
},getBottom:function(E,F){return this.get(E,F).bottom;
},getRelative:function(e,f,g,h){var j=this.get(e,g);
var i=this.get(f,h);
return {left:j.left-i.left,top:j.top-i.top,right:j.right-i.right,bottom:j.bottom-i.bottom};
},getPosition:function(bH){return this.getRelative(bH,this.getOffsetParent(bH));
},getOffsetParent:function(r){var t=r.offsetParent||document.body;
var s=qx.bom.element.Style;

while(t&&(!/^body|html$/i.test(t.tagName)&&s.get(t,bg)===bo)){t=t.offsetParent;
}return t;
}}});
})();
(function(){var k="px",j="qx.client",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="scale-y",F="qx/icon",E="repeat",D=".png",C="crop",B="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",A='<div style="',z="repeat-y",y='<img src="',x="qx.bom.element.Decoration",w="', sizingMethod='",r="png",s="')",p='"></div>',q='"/>',n='" style="',o="none",l="webkit",m=" ",t="repeat-x",u="DXImageTransform.Microsoft.AlphaImageLoader",v="absolute";
qx.Class.define(x,{statics:{DEBUG:false,__fx:{},__dW:qx.core.Variant.isSet(j,c),__dX:qx.core.Variant.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__dY:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(L,M,N,O){var Q=this.getTagName(N,M);

if(Q!=L.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var R=this.getAttributes(M,N,O);

if(Q===h){L.src=R.src;
}if(L.style.backgroundPosition!=g&&R.style.backgroundPosition===undefined){R.style.backgroundPosition=null;
}if(L.style.clip!=g&&R.style.clip===undefined){R.style.clip=null;
}var P=qx.bom.element.Style;
P.setStyles(L,R.style);
if(this.__dW){try{L.filters[u].apply();
}catch(e){}}},create:function(ba,bb,bc){var bd=this.getTagName(bb,ba);
var bf=this.getAttributes(ba,bb,bc);
var be=qx.bom.element.Style.compile(bf.style);

if(bd===h){return y+bf.src+n+be+q;
}else{return A+be+p;
}},getTagName:function(bL,bM){if(qx.core.Variant.isSet(j,c)){if(bM&&this.__dW&&this.__dX[bL]&&qx.lang.String.endsWith(bM,D)){return i;
}}return this.__dY[bL];
},getAttributes:function(bh,bi,bj){if(!bj){bj={};
}
if(!bj.position){bj.position=v;
}
if(qx.core.Variant.isSet(j,c)){bj.fontSize=0;
bj.lineHeight=0;
}else if(qx.core.Variant.isSet(j,l)){bj.WebkitUserDrag=o;
}var bl=qx.util.ResourceManager.getInstance().getImageFormat(bh)||qx.io.ImageLoader.getFormat(bh);
{};
var bk;
if(this.__dW&&this.__dX[bi]&&bl===r){bk=this.__fA(bj,bi,bh);
}else{if(bi===b){bk=this.__fB(bj,bi,bh);
}else if(bi===d||bi===a){bk=this.__fC(bj,bi,bh);
}else{bk=this.__fF(bj,bi,bh);
}}return bk;
},__fy:function(bx,by,bz){if(bx.width==null&&by!=null){bx.width=by+k;
}
if(bx.height==null&&bz!=null){bx.height=bz+k;
}return bx;
},__fz:function(bA){var bB=qx.util.ResourceManager.getInstance().getImageWidth(bA)||qx.io.ImageLoader.getWidth(bA);
var bC=qx.util.ResourceManager.getInstance().getImageHeight(bA)||qx.io.ImageLoader.getHeight(bA);
return {width:bB,height:bC};
},__fA:function(T,U,V){var Y=this.__fz(V);
T=this.__fy(T,Y.width,Y.height);
var X=U==f?C:b;
var W=B+qx.util.ResourceManager.getInstance().toUri(V)+w+X+s;
T.filter=W;
T.backgroundImage=T.backgroundRepeat=g;
return {style:T};
},__fB:function(G,H,I){var J=qx.util.ResourceManager.getInstance().toUri(I);
var K=this.__fz(I);
G=this.__fy(G,K.width,K.height);
return {src:J,style:G};
},__fC:function(bR,bS,bT){var bX=qx.util.ResourceManager.getInstance();
var bW=bX.isClippedImage(bT);
var bY=this.__fz(bT);

if(bW){var bV=bX.getData(bT);
var bU=bX.toUri(bV[4]);

if(bS===d){bR=this.__fD(bR,bV,bY.height);
}else{bR=this.__fE(bR,bV,bY.width);
}return {src:bU,style:bR};
}else{{};

if(bS==d){bR.height=bY.height==null?null:bY.height+k;
}else if(bS==a){bR.width=bY.width==null?null:bY.width+k;
}var bU=bX.toUri(bT);
return {src:bU,style:bR};
}},__fD:function(bN,bO,bP){var bQ=qx.util.ResourceManager.getInstance().getImageHeight(bO[4]);
bN.clip={top:-bO[6],height:bP};
bN.height=bQ+k;
if(bN.top!=null){bN.top=(parseInt(bN.top,10)+bO[6])+k;
}else if(bN.bottom!=null){bN.bottom=(parseInt(bN.bottom,10)+bP-bQ-bO[6])+k;
}return bN;
},__fE:function(bt,bu,bv){var bw=qx.util.ResourceManager.getInstance().getImageWidth(bu[4]);
bt.clip={left:-bu[5],width:bv};
bt.width=bw+k;
if(bt.left!=null){bt.left=(parseInt(bt.left,10)+bu[5])+k;
}else if(bt.right!=null){bt.right=(parseInt(bt.right,10)+bv-bw-bu[5])+k;
}return bt;
},__fF:function(bD,bE,bF){var bK=qx.util.ResourceManager.getInstance().isClippedImage(bF);
var bJ=this.__fz(bF);
if(bK&&bE!==E){var bI=qx.util.ResourceManager.getInstance().getData(bF);
var bH=qx.bom.element.Background.getStyles(bI[4],bE,bI[5],bI[6]);

for(var bG in bH){bD[bG]=bH[bG];
}
if(bJ.width!=null&&bD.width==null&&(bE==z||bE===f)){bD.width=bJ.width+k;
}
if(bJ.height!=null&&bD.height==null&&(bE==t||bE===f)){bD.height=bJ.height+k;
}return {style:bD};
}else{{};
bD=this.__fy(bD,bJ.width,bJ.height);
bD=this.__fG(bD,bF,bE);
return {style:bD};
}},__fG:function(bm,bn,bo){var top=null;
var bs=null;

if(bm.backgroundPosition){var bp=bm.backgroundPosition.split(m);
bs=parseInt(bp[0]);

if(isNaN(bs)){bs=bp[0];
}top=parseInt(bp[1]);

if(isNaN(top)){top=bp[1];
}}var br=qx.bom.element.Background.getStyles(bn,bo,bs,top);

for(var bq in br){bm[bq]=br[bq];
}if(bm.filter){bm.filter=g;
}return bm;
},__fH:function(S){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(S)&&S.indexOf(F)==-1){if(!this.__fx[S]){qx.log.Logger.debug("Potential clipped image candidate: "+S);
this.__fx[S]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__dW;
},"default":function(){return false;
}})}});
})();
(function(){var j="qx.client",h="load",g="qx.io.ImageLoader";
qx.Bootstrap.define(g,{statics:{__fI:{},__fJ:{width:null,height:null},__fK:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(G){var H=this.__fI[G];
return !!(H&&H.loaded);
},isFailed:function(n){var o=this.__fI[n];
return !!(o&&o.failed);
},isLoading:function(w){var x=this.__fI[w];
return !!(x&&x.loading);
},getFormat:function(k){var m=this.__fI[k];
return m?m.format:null;
},getSize:function(y){var z=this.__fI[y];
return z?
{width:z.width,height:z.height}:this.__fJ;
},getWidth:function(C){var D=this.__fI[C];
return D?D.width:null;
},getHeight:function(u){var v=this.__fI[u];
return v?v.height:null;
},load:function(a,b,c){var d=this.__fI[a];

if(!d){d=this.__fI[a]={};
}if(b&&!c){c=window;
}if(d.loaded||d.loading||d.failed){if(b){if(d.loading){d.callbacks.push(b,c);
}else{b.call(c,a,d);
}}}else{d.loading=true;
d.callbacks=[];

if(b){d.callbacks.push(b,c);
}var f=new Image();
var e=qx.lang.Function.listener(this.__fL,this,f,a);
f.onload=e;
f.onerror=e;
f.src=a;
}},__fL:qx.event.GlobalError.observeMethod(function(event,p,q){var r=this.__fI[q];
if(event.type===h){r.loaded=true;
r.width=this.__fM(p);
r.height=this.__fN(p);
var s=this.__fK.exec(q);

if(s!=null){r.format=s[1];
}}else{r.failed=true;
}p.onload=p.onerror=null;
var t=r.callbacks;
delete r.loading;
delete r.callbacks;
for(var i=0,l=t.length;i<l;i+=2){t[i].call(t[i+1],q,r);
}}),__fM:qx.core.Variant.select(j,{"gecko":function(B){return B.naturalWidth;
},"default":function(F){return F.width;
}}),__fN:qx.core.Variant.select(j,{"gecko":function(E){return E.naturalHeight;
},"default":function(A){return A.height;
}})}});
})();
(function(){var a="qx.dom.Element";
qx.Class.define(a,{statics:{hasChild:function(parent,q){return q.parentNode===parent;
},hasChildren:function(r){return !!r.firstChild;
},hasChildElements:function(g){g=g.firstChild;

while(g){if(g.nodeType===1){return true;
}g=g.nextSibling;
}return false;
},getParentElement:function(p){return p.parentNode;
},isInDom:function(b,c){if(!c){c=window;
}var d=c.document.getElementsByTagName(b.nodeName);

for(var i=0,l=d.length;i<l;i++){if(d[i]===b){return true;
}}return false;
},insertAt:function(w,parent,x){var y=parent.childNodes[x];

if(y){parent.insertBefore(w,y);
}else{parent.appendChild(w);
}return true;
},insertBegin:function(o,parent){if(parent.firstChild){this.insertBefore(o,parent.firstChild);
}else{parent.appendChild(o);
}},insertEnd:function(v,parent){parent.appendChild(v);
},insertBefore:function(k,m){m.parentNode.insertBefore(k,m);
return true;
},insertAfter:function(A,B){var parent=B.parentNode;

if(B==parent.lastChild){parent.appendChild(A);
}else{return this.insertBefore(A,B.nextSibling);
}return true;
},remove:function(z){if(!z.parentNode){return false;
}z.parentNode.removeChild(z);
return true;
},removeChild:function(n,parent){if(n.parentNode!==parent){return false;
}parent.removeChild(n);
return true;
},removeChildAt:function(h,parent){var j=parent.childNodes[h];

if(!j){return false;
}parent.removeChild(j);
return true;
},replaceChild:function(e,f){if(!f.parentNode){return false;
}f.parentNode.replaceChild(e,f);
return true;
},replaceAt:function(s,t,parent){var u=parent.childNodes[t];

if(!u){return false;
}parent.replaceChild(s,u);
return true;
}}});
})();
(function(){var bm="",bl="string",bk="div",bj="previousSibling",bi="*",bh="href",bg="e",bf="[object Array]",be="Syntax error, unrecognized expression: ",bd="HTML",bT="text",bS="file",bR="+",bQ="'/>",bP="CLASS",bO="radio",bN="script",bM="className",bL="BUTTON",bK="TAG",bt="password",bu="htmlFor",br="reset",bs="<a href='#'></a>",bp="<a name='",bq="#",bn="qx.bom.Selector",bo="button",bv="parentNode",bw="NAME",bC="number",bB="submit",bE="image",bD="<div class='test e'></div><div class='test'></div>",bG="~",bF="checkbox",by="sourceIndex",bJ="\\",bI="hidden",bH=".TEST",bx="<p class='TEST'></p>",bz="undefined",bA="ID";
qx.Class.define(bn,{statics:{query:null,matches:null}});
(function(){var o=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,w=0,s=Object.prototype.toString,q=false,y=true;
var g=[0,0];
g.sort(function(){y=false;
return 0;
});
var h=function(eh,ei,ej,ek){ej=ej||[];
var et=ei=ei||document;

if(ei.nodeType!==1&&ei.nodeType!==9){return [];
}
if(!eh||typeof eh!==bl){return ej;
}var eq=[],m,en,el,ev,ep,eo=true,em=p(ei),es=eh;
while((o.exec(bm),m=o.exec(es))!==null){es=m[3];
eq.push(m[1]);

if(m[2]){ep=m[3];
break;
}}
if(eq.length>1&&r.exec(eh)){if(eq.length===2&&k.relative[eq[0]]){en=j(eq[0]+eq[1],ei);
}else{en=k.relative[eq[0]]?[ei]:h(eq.shift(),ei);

while(eq.length){eh=eq.shift();

if(k.relative[eh])eh+=eq.shift();
en=j(eh,en);
}}}else{if(!ek&&eq.length>1&&ei.nodeType===9&&!em&&k.match.ID.test(eq[0])&&!k.match.ID.test(eq[eq.length-1])){var er=h.find(eq.shift(),ei,em);
ei=er.expr?h.filter(er.expr,er.set)[0]:er.set[0];
}
if(ei){var er=ek?
{expr:eq.pop(),set:f(ek)}:h.find(eq.pop(),eq.length===1&&(eq[0]===bG||eq[0]===bR)&&ei.parentNode?ei.parentNode:ei,em);
en=er.expr?h.filter(er.expr,er.set):er.set;

if(eq.length>0){el=f(en);
}else{eo=false;
}
while(eq.length){var ew=eq.pop(),eu=ew;

if(!k.relative[ew]){ew=bm;
}else{eu=eq.pop();
}
if(eu==null){eu=ei;
}k.relative[ew](el,eu,em);
}}else{el=eq=[];
}}
if(!el){el=en;
}
if(!el){throw be+(ew||eh);
}
if(s.call(el)===bf){if(!eo){ej.push.apply(ej,el);
}else if(ei&&ei.nodeType===1){for(var i=0;el[i]!=null;i++){if(el[i]&&(el[i]===true||el[i].nodeType===1&&n(ei,el[i]))){ej.push(en[i]);
}}}else{for(var i=0;el[i]!=null;i++){if(el[i]&&el[i].nodeType===1){ej.push(en[i]);
}}}}else{f(el,ej);
}
if(ep){h(ep,et,ej,ek);
h.uniqueSort(ej);
}return ej;
};
h.uniqueSort=function(eI){if(t){q=y;
eI.sort(t);

if(q){for(var i=1;i<eI.length;i++){if(eI[i]===eI[i-1]){eI.splice(i--,1);
}}}}return eI;
};
h.matches=function(cH,cI){return h(cH,null,null,cI);
};
h.find=function(fu,fv,fw){var fx,fz;

if(!fu){return [];
}
for(var i=0,l=k.order.length;i<l;i++){var fy=k.order[i],fz;

if((fz=k.leftMatch[fy].exec(fu))){var fA=fz[1];
fz.splice(1,1);

if(fA.substr(fA.length-1)!==bJ){fz[1]=(fz[1]||bm).replace(/\\/g,bm);
fx=k.find[fy](fz,fv,fw);

if(fx!=null){fu=fu.replace(k.match[fy],bm);
break;
}}}}
if(!fx){fx=fv.getElementsByTagName(bi);
}return {set:fx,expr:fu};
};
h.filter=function(ci,cj,ck,cl){var cm=ci,cr=[],cn=cj,cw,cv,co=cj&&cj[0]&&p(cj[0]);

while(ci&&cj.length){for(var cu in k.filter){if((cw=k.match[cu].exec(ci))!=null){var cp=k.filter[cu],ct,cq;
cv=false;

if(cn==cr){cr=[];
}
if(k.preFilter[cu]){cw=k.preFilter[cu](cw,cn,ck,cr,cl,co);

if(!cw){cv=ct=true;
}else if(cw===true){continue;
}}
if(cw){for(var i=0;(cq=cn[i])!=null;i++){if(cq){ct=cp(cq,cw,i,cn);
var cs=cl^!!ct;

if(ck&&ct!=null){if(cs){cv=true;
}else{cn[i]=false;
}}else if(cs){cr.push(cq);
cv=true;
}}}}
if(ct!==undefined){if(!ck){cn=cr;
}ci=ci.replace(k.match[cu],bm);

if(!cv){return [];
}break;
}}}if(ci==cm){if(cv==null){throw be+ci;
}else{break;
}}cm=ci;
}return cn;
};
var k=h.selectors={order:[bA,bw,bK],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":bM,"for":bu},attrHandle:{href:function(ch){return ch.getAttribute(bh);
}},relative:{"+":function(eB,eC,eD){var eE=typeof eC===bl,eG=eE&&!/\W/.test(eC),eH=eE&&!eG;

if(eG&&!eD){eC=eC.toUpperCase();
}
for(var i=0,l=eB.length,eF;i<l;i++){if((eF=eB[i])){while((eF=eF.previousSibling)&&eF.nodeType!==1){}eB[i]=eH||eF&&eF.nodeName===eC?eF||false:eF===eC;
}}
if(eH){h.filter(eC,eB,true);
}},">":function(fa,fb,fc){var fd=typeof fb===bl;

if(fd&&!/\W/.test(fb)){fb=fc?fb:fb.toUpperCase();

for(var i=0,l=fa.length;i<l;i++){var fe=fa[i];

if(fe){var parent=fe.parentNode;
fa[i]=parent.nodeName===fb?parent:false;
}}}else{for(var i=0,l=fa.length;i<l;i++){var fe=fa[i];

if(fe){fa[i]=fd?fe.parentNode:fe.parentNode===fb;
}}
if(fd){h.filter(fb,fa,true);
}}},"":function(eQ,eR,eS){var eT=w++,eU=x;

if(!/\W/.test(eR)){var eV=eR=eS?eR:eR.toUpperCase();
eU=z;
}eU(bv,eR,eT,eQ,eV,eS);
},"~":function(eb,ec,ed){var ee=w++,ef=x;

if(typeof ec===bl&&!/\W/.test(ec)){var eg=ec=ed?ec:ec.toUpperCase();
ef=z;
}ef(bj,ec,ee,eb,eg,ed);
}},find:{ID:function(fr,fs,ft){if(typeof fs.getElementById!=="undefined"&&!ft){var m=fs.getElementById(fr[1]);
return m?[m]:[];
}},NAME:function(dn,dp,dq){if(typeof dp.getElementsByName!=="undefined"){var ds=[],dr=dp.getElementsByName(dn[1]);

for(var i=0,l=dr.length;i<l;i++){if(dr[i].getAttribute("name")===dn[1]){ds.push(dr[i]);
}}return ds.length===0?null:ds;
}},TAG:function(dA,dB){return dB.getElementsByTagName(dA[1]);
}},preFilter:{CLASS:function(cx,cy,cz,cA,cB,cC){cx=" "+cx[1].replace(/\\/g,"")+" ";

if(cC){return cx;
}
for(var i=0,cD;(cD=cy[i])!=null;i++){if(cD){if(cB^(cD.className&&(" "+cD.className+" ").indexOf(cx)>=0)){if(!cz)cA.push(cD);
}else if(cz){cy[i]=false;
}}}return false;
},ID:function(ey){return ey[1].replace(/\\/g,"");
},TAG:function(db,dc){for(var i=0;dc[i]===false;i++){}return dc[i]&&p(dc[i])?db[1]:db[1].toUpperCase();
},CHILD:function(fh){if(fh[1]=="nth"){var fi=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(fh[2]=="even"&&"2n"||fh[2]=="odd"&&"2n+1"||!/\D/.test(fh[2])&&"0n+"+fh[2]||fh[2]);
fh[2]=(fi[1]+(fi[2]||1))-0;
fh[3]=fi[3]-0;
}fh[0]=w++;
return fh;
},ATTR:function(dP,dQ,dR,dS,dT,dU){var name=dP[1].replace(/\\/g,"");

if(!dU&&k.attrMap[name]){dP[1]=k.attrMap[name];
}
if(dP[2]==="~="){dP[4]=" "+dP[4]+" ";
}return dP;
},PSEUDO:function(C,D,E,F,G){if(C[1]==="not"){if((o.exec(C[3])||"").length>1||/^\w/.test(C[3])){C[3]=h(C[3],null,null,D);
}else{var H=h.filter(C[3],D,E,true^G);

if(!E){F.push.apply(F,H);
}return false;
}}else if(k.match.POS.test(C[0])||k.match.CHILD.test(C[0])){return true;
}return C;
},POS:function(fn){fn.unshift(true);
return fn;
}},filters:{enabled:function(cY){return cY.disabled===false&&cY.type!==bI;
},disabled:function(ex){return ex.disabled===true;
},checked:function(dI){return dI.checked===true;
},selected:function(dO){dO.parentNode.selectedIndex;
return dO.selected===true;
},parent:function(J){return !!J.firstChild;
},empty:function(da){return !da.firstChild;
},has:function(T,i,U){return !!h(U[3],T).length;
},header:function(dV){return /h\d/i.test(dV.nodeName);
},text:function(eJ){return bT===eJ.type;
},radio:function(dw){return bO===dw.type;
},checkbox:function(bc){return bF===bc.type;
},file:function(bW){return bS===bW.type;
},password:function(fJ){return bt===fJ.type;
},submit:function(bX){return bB===bX.type;
},image:function(dW){return bE===dW.type;
},reset:function(dd){return br===dd.type;
},button:function(cJ){return bo===cJ.type||cJ.nodeName.toUpperCase()===bL;
},input:function(fm){return /input|select|textarea|button/i.test(fm.nodeName);
}},setFilters:{first:function(dE,i){return i===0;
},last:function(cE,i,cF,cG){return i===cG.length-1;
},even:function(fo,i){return i%2===0;
},odd:function(dD,i){return i%2===1;
},lt:function(ez,i,eA){return i<eA[3]-0;
},gt:function(bU,i,bV){return i>bV[3]-0;
},nth:function(eK,i,eL){return eL[3]-0==i;
},eq:function(eX,i,eY){return eY[3]-0==i;
}},filter:{PSEUDO:function(cc,cd,i,ce){var name=cd[1],cf=k.filters[name];

if(cf){return cf(cc,i,cd,ce);
}else if(name==="contains"){return (cc.textContent||cc.innerText||"").indexOf(cd[3])>=0;
}else if(name==="not"){var cg=cd[3];

for(var i=0,l=cg.length;i<l;i++){if(cg[i]===cc){return false;
}}return true;
}},CHILD:function(de,df){var dl=df[1],dg=de;

switch(dl){case 'only':case 'first':while((dg=dg.previousSibling)){if(dg.nodeType===1)return false;
}
if(dl=='first')return true;
dg=de;
case 'last':while((dg=dg.nextSibling)){if(dg.nodeType===1)return false;
}return true;
case 'nth':var dm=df[2],di=df[3];

if(dm==1&&di==0){return true;
}var dk=df[0],parent=de.parentNode;

if(parent&&(parent.sizcache!==dk||!de.nodeIndex)){var dh=0;

for(dg=parent.firstChild;dg;dg=dg.nextSibling){if(dg.nodeType===1){dg.nodeIndex=++dh;
}}parent.sizcache=dk;
}var dj=de.nodeIndex-di;

if(dm==0){return dj==0;
}else{return (dj%dm==0&&dj/dm>=0);
}}},ID:function(fp,fq){return fp.nodeType===1&&fp.getAttribute("id")===fq;
},TAG:function(cW,cX){return (cX==="*"&&cW.nodeType===1)||cW.nodeName===cX;
},CLASS:function(c,d){return (" "+(c.className||c.getAttribute("class"))+" ").indexOf(d)>-1;
},ATTR:function(V,W){var name=W[1],bb=k.attrHandle[name]?k.attrHandle[name](V):V[name]!=null?V[name]:V.getAttribute(name),ba=bb+"",Y=W[2],X=W[4];
return bb==null?Y==="!=":Y==="="?ba===X:Y==="*="?ba.indexOf(X)>=0:Y==="~="?(" "+ba+" ").indexOf(X)>=0:!X?ba&&bb!==false:Y==="!="?ba!=X:Y==="^="?ba.indexOf(X)===0:Y==="$="?ba.substr(ba.length-X.length)===X:Y==="|="?ba===X||ba.substr(0,X.length+1)===X+"-":false;
},POS:function(dJ,dK,i,dL){var name=dK[2],dM=k.setFilters[name];

if(dM){return dM(dJ,i,dK,dL);
}}}};
var r=k.match.POS;

for(var v in k.match){k.match[v]=new RegExp(k.match[v].source+/(?![^\[]*\])(?![^\(]*\))/.source);
k.leftMatch[v]=new RegExp(/(^(?:.|\r|\n)*?)/.source+k.match[v].source);
}var f=function(fj,fk){fj=Array.prototype.slice.call(fj,0);

if(fk){fk.push.apply(fk,fj);
return fk;
}return fj;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0);
}catch(e){f=function(cK,cL){var cM=cL||[];

if(s.call(cK)===bf){Array.prototype.push.apply(cM,cK);
}else{if(typeof cK.length===bC){for(var i=0,l=cK.length;i<l;i++){cM.push(cK[i]);
}}else{for(var i=0;cK[i];i++){cM.push(cK[i]);
}}}return cM;
};
}var t;

if(document.documentElement.compareDocumentPosition){t=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){q=true;
}return 0;
}var I=a.compareDocumentPosition(b)&4?-1:a===b?0:1;

if(I===0){q=true;
}return I;
};
}else if(by in document.documentElement){t=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){q=true;
}return 0;
}var fB=a.sourceIndex-b.sourceIndex;

if(fB===0){q=true;
}return fB;
};
}else if(document.createRange){t=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){q=true;
}return 0;
}var dy=a.ownerDocument.createRange(),dz=b.ownerDocument.createRange();
dy.setStart(a,0);
dy.setEnd(a,0);
dz.setStart(b,0);
dz.setEnd(b,0);
var dx=dy.compareBoundaryPoints(Range.START_TO_END,dz);

if(dx===0){q=true;
}return dx;
};
}(function(){var ea=document.createElement(bk),dY=bN+(new Date).getTime();
ea.innerHTML=bp+dY+bQ;
var dX=document.documentElement;
dX.insertBefore(ea,dX.firstChild);
if(!!document.getElementById(dY)){k.find.ID=function(fC,fD,fE){if(typeof fD.getElementById!=="undefined"&&!fE){var m=fD.getElementById(fC[1]);
return m?m.id===fC[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===fC[1]?[m]:undefined:[];
}};
k.filter.ID=function(bY,ca){var cb=typeof bY.getAttributeNode!=="undefined"&&bY.getAttributeNode("id");
return bY.nodeType===1&&cb&&cb.nodeValue===ca;
};
}dX.removeChild(ea);
dX=ea=null;
})();
(function(){var eW=document.createElement(bk);
eW.appendChild(document.createComment(bm));
if(eW.getElementsByTagName(bi).length>0){k.find.TAG=function(fF,fG){var fI=fG.getElementsByTagName(fF[1]);
if(fF[1]==="*"){var fH=[];

for(var i=0;fI[i];i++){if(fI[i].nodeType===1){fH.push(fI[i]);
}}fI=fH;
}return fI;
};
}eW.innerHTML=bs;

if(eW.firstChild&&typeof eW.firstChild.getAttribute!==bz&&eW.firstChild.getAttribute(bh)!==bq){k.attrHandle.href=function(dC){return dC.getAttribute(bh,2);
};
}eW=null;
})();

if(document.querySelectorAll)(function(){var dG=h,dF=document.createElement(bk);
dF.innerHTML=bx;
if(dF.querySelectorAll&&dF.querySelectorAll(bH).length===0){return;
}h=function(eM,eN,eO,eP){eN=eN||document;
if(!eP&&eN.nodeType===9&&!p(eN)){try{return f(eN.querySelectorAll(eM),eO);
}catch(e){}}return dG(eM,eN,eO,eP);
};

for(var dH in dG){h[dH]=dG[dH];
}dF=null;
})();

if(document.getElementsByClassName&&document.documentElement.getElementsByClassName)(function(){var dN=document.createElement(bk);
dN.innerHTML=bD;
if(dN.getElementsByClassName(bg).length===0)return;
dN.lastChild.className=bg;

if(dN.getElementsByClassName(bg).length===1)return;
k.order.splice(1,0,bP);
k.find.CLASS=function(dt,du,dv){if(typeof du.getElementsByClassName!=="undefined"&&!dv){return du.getElementsByClassName(dt[1]);
}};
dN=null;
})();
function z(K,L,M,N,O,P){var Q=K==bj&&!P;

for(var i=0,l=N.length;i<l;i++){var S=N[i];

if(S){if(Q&&S.nodeType===1){S.sizcache=M;
S.sizset=i;
}S=S[K];
var R=false;

while(S){if(S.sizcache===M){R=N[S.sizset];
break;
}
if(S.nodeType===1&&!P){S.sizcache=M;
S.sizset=i;
}
if(S.nodeName===L){R=S;
break;
}S=S[K];
}N[i]=R;
}}}function x(cN,cO,cP,cQ,cR,cS){var cT=cN==bj&&!cS;

for(var i=0,l=cQ.length;i<l;i++){var cV=cQ[i];

if(cV){if(cT&&cV.nodeType===1){cV.sizcache=cP;
cV.sizset=i;
}cV=cV[cN];
var cU=false;

while(cV){if(cV.sizcache===cP){cU=cQ[cV.sizset];
break;
}
if(cV.nodeType===1){if(!cS){cV.sizcache=cP;
cV.sizset=i;
}
if(typeof cO!==bl){if(cV===cO){cU=true;
break;
}}else if(h.filter(cO,[cV]).length>0){cU=cV;
break;
}}cV=cV[cN];
}cQ[i]=cU;
}}}var n=document.compareDocumentPosition?
function(a,b){return a.compareDocumentPosition(b)&16;
}:
function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
var p=function(fl){return fl.nodeType===9&&fl.documentElement.nodeName!==bd||!!fl.ownerDocument&&fl.ownerDocument.documentElement.nodeName!==bd;
};
var j=function(fK,fL){var fN=[],fM=bm,fP,fO=fL.nodeType?[fL]:fL;
while((fP=k.match.PSEUDO.exec(fK))){fM+=fP[0];
fK=fK.replace(k.match.PSEUDO,bm);
}fK=k.relative[fK]?fK+bi:fK;

for(var i=0,l=fO.length;i<l;i++){h(fK,fO[i],fN);
}return h.filter(fM,fN);
};
var u=qx.bom.Selector;
u.query=function(ff,fg){return h(ff,fg);
};
u.matches=function(A,B){return h(A,null,null,B);
};
})();
})();
(function(){var f="mshtml",e="pop.push.reverse.shift.sort.splice.unshift.join.slice",d="number",c="qx.type.BaseArray",b="qx.client",a=".";
qx.Class.define(c,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function s(g){if(qx.core.Variant.isSet(b,f)){r.prototype={length:0,$$isArray:true};
var k=e.split(a);

for(var length=k.length;length;){r.prototype[k[--length]]=Array.prototype[k[length]];
}}var l=Array.prototype.slice;
r.prototype.concat=function(){var u=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var t;

if(arguments[i] instanceof r){t=l.call(arguments[i],0);
}else if(arguments[i] instanceof Array){t=arguments[i];
}else{t=[arguments[i]];
}u.push.apply(u,t);
}return u;
};
r.prototype.toString=function(){return l.call(this,0).toString();
};
r.prototype.toLocaleString=function(){return l.call(this,0).toLocaleString();
};
r.prototype.constructor=r;
r.prototype.indexOf=qx.lang.Core.arrayIndexOf;
r.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
r.prototype.forEach=qx.lang.Core.arrayForEach;
r.prototype.some=qx.lang.Core.arraySome;
r.prototype.every=qx.lang.Core.arrayEvery;
var h=qx.lang.Core.arrayFilter;
var j=qx.lang.Core.arrayMap;
r.prototype.filter=function(){var m=new this.constructor;
m.push.apply(m,h.apply(this,arguments));
return m;
};
r.prototype.map=function(){var o=new this.constructor;
o.push.apply(o,j.apply(this,arguments));
return o;
};
r.prototype.slice=function(){var p=new this.constructor;
p.push.apply(p,Array.prototype.slice.apply(this,arguments));
return p;
};
r.prototype.splice=function(){var n=new this.constructor;
n.push.apply(n,Array.prototype.splice.apply(this,arguments));
return n;
};
r.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
r.prototype.valueOf=function(){return this.length;
};
return r;
}function r(length){if(arguments.length===1&&typeof length===d){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function q(){}q.prototype=[];
r.prototype=new q;
r.prototype.length=0;
qx.type.BaseArray=s(r);
})();
})();
(function(){var x="change",w="input",v="checkbox",u="radio",t="textarea",s="qx.client",r="text",q="password",p="keypress",n="propertychange",h="select-multiple",m="checked",k="value",g="select",f="qx.event.handler.Input",j="Enter";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(A,B){var C=A.tagName.toLowerCase();

if(B===w&&(C===w||C===t)){return true;
}
if(B===x&&(C===w||C===t||C===g)){return true;
}return false;
},registerEvent:qx.core.Variant.select(s,{"mshtml":function(Y,ba,bb){if(!Y.__eg){var bc=Y.tagName.toLowerCase();
var bd=Y.type;

if(bd===r||bd===q||bc===t||bd===v||bd===u){qx.bom.Event.addNativeListener(Y,n,this._onPropertyWrapper);
}
if(bd!==v&&bd!==u){qx.bom.Event.addNativeListener(Y,x,this._onChangeValueWrapper);
}this.__eh(Y,bd);
Y.__eg=true;
}},"default":function(E,F,G){if(F===w){this.__fO(E);
}else if(F===x){if(E.type===u||E.type===v){qx.bom.Event.addNativeListener(E,x,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(E,x,this._onChangeValueWrapper);
}this.__eh(E,E.type);
}}}),__fO:qx.core.Variant.select(s,{"mshtml":null,"webkit":function(Q){var R=Q.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&R==t){qx.bom.Event.addNativeListener(Q,p,this._onInputWrapper);
}qx.bom.Event.addNativeListener(Q,w,this._onInputWrapper);
},"default":function(L){qx.bom.Event.addNativeListener(L,w,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(s,{"mshtml":function(U,V){if(U.__eg){var W=U.tagName.toLowerCase();
var X=U.type;

if(X===r||X===q||W===t||X===v||X===u){qx.bom.Event.removeNativeListener(U,n,this._onPropertyWrapper);
}
if(X!==v&&X!==u){qx.bom.Event.removeNativeListener(U,x,this._onChangeValueWrapper);
}
try{delete U.__eg;
}catch(y){U.__eg=null;
}}},"default":function(S,T){if(T===w){this.__fO(S);
}else if(T===x){if(S.type===u||S.type===v){qx.bom.Event.removeNativeListener(S,x,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(S,x,this._onChangeValueWrapper);
}}}}),__fP:qx.core.Variant.select(s,{"mshtml":null,"webkit":function(O){var P=O.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&P==t){qx.bom.Event.removeNativeListener(O,p,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(O,w,this._onInputWrapper);
},"default":function(D){qx.bom.Event.removeNativeListener(D,w,this._onInputWrapper);
}}),__eh:qx.core.Variant.select(s,{"mshtml|opera":function(a,b){if(b===r||b===q){qx.event.Registration.addListener(a,p,function(e){if(e.getKeyIdentifier()===j){qx.event.Registration.fireEvent(a,x,qx.event.type.Data,[a.value]);
}});
}},"default":function(H,I){}}),_onInput:qx.event.GlobalError.observeMethod(function(e){var z=e.target;
qx.event.Registration.fireEvent(z,w,qx.event.type.Data,[z.value]);
}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var N=e.target||e.srcElement;
var M=N.value;

if(N.type===h){var M=[];

for(var i=0,o=N.options,l=o.length;i<l;i++){if(o[i].selected){M.push(o[i].value);
}}}qx.event.Registration.fireEvent(N,x,qx.event.type.Data,[M]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var c=e.target;

if(c.type===u){if(c.checked){qx.event.Registration.fireEvent(c,x,qx.event.type.Data,[c.value]);
}}else{qx.event.Registration.fireEvent(c,x,qx.event.type.Data,[c.checked]);
}}),_onProperty:qx.core.Variant.select(s,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var J=e.target||e.srcElement;
var K=e.propertyName;

if(K===k&&(J.type===r||J.type===q||J.tagName.toLowerCase()===t)){if(!J.__inValueSet){qx.event.Registration.fireEvent(J,w,qx.event.type.Data,[J.value]);
}}else if(K===m){if(J.type===v){qx.event.Registration.fireEvent(J,x,qx.event.type.Data,[J.checked]);
}else if(J.checked){qx.event.Registration.fireEvent(J,x,qx.event.type.Data,[J.value]);
}}}),"default":function(){}})},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var v="",u="select",t="soft",s="off",r="qx.client",q="wrap",p="text",o="mshtml",n="number",m="checkbox",d="select-one",k="input",g="option",c="value",b="radio",f="qx.bom.Input",e="nowrap",h="textarea",a="auto",j="normal";
qx.Class.define(f,{statics:{__ei:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(w,x,y){{};
var x=x?qx.lang.Object.clone(x):{};
var z;

if(w===h||w===u){z=w;
}else{z=k;
x.type=w;
}return qx.bom.Element.create(z,x,y);
},setValue:function(A,B){var G=A.nodeName.toLowerCase();
var D=A.type;
var Array=qx.lang.Array;
var H=qx.lang.Type;

if(typeof B===n){B+=v;
}
if((D===m||D===b)){if(H.isArray(B)){A.checked=Array.contains(B,A.value);
}else{A.checked=A.value==B;
}}else if(G===u){var C=H.isArray(B);
var I=A.options;
var E,F;

for(var i=0,l=I.length;i<l;i++){E=I[i];
F=E.getAttribute(c);

if(F==null){F=E.text;
}E.selected=C?Array.contains(B,F):B==F;
}
if(C&&B.length==0){A.selectedIndex=-1;
}}else if(D===p&&qx.core.Variant.isSet(r,o)){A.__ej=true;
A.value=B;
A.__ej=null;
}else{A.value=B;
}},getValue:function(P){var V=P.nodeName.toLowerCase();

if(V===g){return (P.attributes.value||{}).specified?P.value:P.text;
}
if(V===u){var Q=P.selectedIndex;
if(Q<0){return null;
}var W=[];
var Y=P.options;
var X=P.type==d;
var U=qx.bom.Input;
var T;
for(var i=X?Q:0,S=X?Q+1:Y.length;i<S;i++){var R=Y[i];

if(R.selected){T=U.getValue(R);
if(X){return T;
}W.push(T);
}}return W;
}else{return (P.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Variant.select(r,{"mshtml":function(ba,bb){ba.wrap=bb?t:s;
},"gecko|webkit":function(L,M){var O=M?t:s;
var N=M?v:a;
L.setAttribute(q,O);
L.style.overflow=N;
},"default":function(J,K){J.style.whiteSpace=K?j:e;
}})}});
})();
(function(){var cB="get",cA="set",cz="reset",cy=":not(",cx="getValue",cw="append",cv=")",cu="getPreviousSiblings",ct="#",cs="qx.bom.Collection",da="setValue",cY="prepend",cX="string",cW="getAncestors",cV="getOffsetParent",cU="remove",cT=">*",cS="add",cR="*",cQ="",cI="addListener",cJ="has",cG="toggle",cH="getSiblings",cE="replace",cF="after",cC="replaceWith",cD="setCss",cK="setStyles",cL="before",cN="getNextSiblings",cM="getPosition",cP="getCss",cO="removeListener";
(function(){var y=function(D,E){return function(H,I,J,K,L,M){var length=this.length;

if(length>0){var N=D[E];

for(var i=0;i<length;i++){if(this[i].nodeType===1){N.call(D,this[i],H,I,J,K,L,M);
}}}return this;
};
};
var x=function(z,A){return function(bu,bv,bw,bx,by,bz){if(this.length>0){var bA=this[0].nodeType===1?z[A](this[0],bu,bv,bw,bx,by,bz):null;

if(bA&&bA.nodeType){return this.__en([bA]);
}else{return bA;
}}return null;
};
};
qx.Class.define(cs,{extend:qx.type.BaseArray,statics:{query:function(cm,cn){var co=qx.bom.Selector.query(cm,cn);
return qx.lang.Array.cast(co,qx.bom.Collection);
},id:function(dn){var dp=document.getElementById(dn);
if(dp&&dp.id!=dn){return qx.bom.Collection.query(ct+dn);
}return new qx.bom.Collection(dp);
},html:function(bV,bW){var bX=qx.bom.Html.clean([bV],bW);
return qx.lang.Array.cast(bX,qx.bom.Collection);
},__ek:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(bL,bM){var bO=qx.bom.Collection;
if(bL.nodeType){return new bO(bL);
}else if(typeof bL===cX){var bN=bO.__ek.exec(bL);

if(bN){return bN[1]?bO.html(bN[1],bM):bO.id(bN[3].substring(1));
}else{return bO.query(bL,bM);
}}else{return qx.lang.Array.cast(bL,qx.bom.Collection);
}}},members:{__eo:null,setAttribute:y(qx.bom.element.Attribute,cA),resetAttribute:y(qx.bom.element.Attribute,cz),getAttribute:x(qx.bom.element.Attribute,cB),addClass:y(qx.bom.element.Class,cS),getClass:x(qx.bom.element.Class,cB),hasClass:x(qx.bom.element.Class,cJ),removeClass:y(qx.bom.element.Class,cU),replaceClass:y(qx.bom.element.Class,cE),toggleClass:y(qx.bom.element.Class,cG),setValue:y(qx.bom.Input,da),getValue:x(qx.bom.Input,cx),setStyle:y(qx.bom.element.Style,cA),setStyles:y(qx.bom.element.Style,cK),resetStyle:y(qx.bom.element.Style,cz),getStyle:x(qx.bom.element.Style,cB),setCss:y(qx.bom.element.Style,cD),getCss:y(qx.bom.element.Style,cP),getOffset:x(qx.bom.element.Location,cB),getPosition:x(qx.bom.element.Location,cM),getOffsetParent:x(qx.bom.element.Location,cV),setScrollLeft:function(o){var Node=qx.dom.Node;

for(var i=0,l=this.length,p;i<l;i++){p=this[i];

if(Node.isElement(p)){p.scrollLeft=o;
}else if(Node.isWindow(p)){p.scrollTo(o,this.getScrollTop(p));
}else if(Node.isDocument(p)){Node.getWindow(p).scrollTo(o,this.getScrollTop(p));
}}return this;
},setScrollTop:function(cb){var Node=qx.dom.Node;

for(var i=0,l=this.length,cc;i<l;i++){cc=this[i];

if(Node.isElement(cc)){cc.scrollTop=cb;
}else if(Node.isWindow(cc)){cc.scrollTo(this.getScrollLeft(cc),cb);
}else if(Node.isDocument(cc)){Node.getWindow(cc).scrollTo(this.getScrollLeft(cc),cb);
}}return this;
},getScrollLeft:function(){var q=this[0];

if(!q){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(q)||Node.isDocument(q)){return qx.bom.Viewport.getScrollLeft();
}return q.scrollLeft;
},getScrollTop:function(){var bB=this[0];

if(!bB){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(bB)||Node.isDocument(bB)){return qx.bom.Viewport.getScrollTop();
}return bB.scrollTop;
},getWidth:function(){var w=this[0];
var Node=qx.dom.Node;

if(w){if(Node.isElement(w)){return qx.bom.element.Dimension.getWidth(w);
}else if(Node.isDocument(w)){return qx.bom.Document.getWidth(Node.getWindow(w));
}else if(Node.isWindow(w)){return qx.bom.Viewport.getWidth(w);
}}return null;
},getContentWidth:function(){var ch=this[0];

if(qx.dom.Node.isElement(ch)){return qx.bom.element.Dimension.getContentWidth(ch);
}return null;
},getHeight:function(){var dt=this[0];
var Node=qx.dom.Node;

if(dt){if(Node.isElement(dt)){return qx.bom.element.Dimension.getHeight(dt);
}else if(Node.isDocument(dt)){return qx.bom.Document.getHeight(Node.getWindow(dt));
}else if(Node.isWindow(dt)){return qx.bom.Viewport.getHeight(dt);
}}return null;
},getContentHeight:function(){var r=this[0];

if(qx.dom.Node.isElement(r)){return qx.bom.element.Dimension.getContentHeight(r);
}return null;
},addListener:y(qx.bom.Element,cI),removeListener:y(qx.bom.Element,cO),eq:function(bU){return this.slice(bU,+bU+1);
},filter:function(br,bs){var bt;

if(qx.lang.Type.isFunction(br)){bt=qx.type.BaseArray.prototype.filter.call(this,br,bs);
}else{bt=qx.bom.Selector.matches(br,this);
}return this.__en(bt);
},is:function(cg){return !!cg&&qx.bom.Selector.matches(cg,this).length>0;
},__el:/^.[^:#\[\.,]*$/,not:function(ce){if(this.__el.test(ce)){var cf=qx.bom.Selector.matches(cy+ce+cv,this);
return this.__en(cf);
}var cf=qx.bom.Selector.matches(ce,this);
return this.filter(function(dm){return cf.indexOf(dm)===-1;
});
},add:function(R,S){var T=qx.bom.Selector.query(R,S);
var U=qx.lang.Array.unique(this.concat(T));
return this.__en(U);
},children:function(ci){var cj=[];

for(var i=0,l=this.length;i<l;i++){cj.push.apply(cj,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(ci){cj=qx.bom.Selector.matches(ci,cj);
}return this.__en(cj);
},closest:function(bP){var bQ=new qx.bom.Collection(1);
var bS=qx.bom.Selector;
var bR=this.map(function(bT){while(bT&&bT.ownerDocument){bQ[0]=bT;

if(bS.matches(bP,bQ).length>0){return bT;
}bT=bT.parentNode;
}});
return this.__en(qx.lang.Array.unique(bR));
},contents:function(){var bm=[];
var bl=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bm.push.apply(bm,bl.fromCollection(this[i].childNodes));
}return this.__en(bm);
},find:function(O){var Q=qx.bom.Selector;
if(this.length===1){return this.__en(Q.query(O,this[0]));
}else{var P=[];

for(var i=0,l=this.length;i<l;i++){P.push.apply(P,Q.query(O,this[i]));
}return this.__en(qx.lang.Array.unique(P));
}},next:function(V){var W=qx.dom.Hierarchy;
var X=this.map(W.getNextElementSibling,W);
if(V){X=qx.bom.Selector.matches(V,X);
}return this.__en(X);
},nextAll:function(bn){return this.__em(cN,bn);
},prev:function(dw){var dx=qx.dom.Hierarchy;
var dy=this.map(dx.getPreviousElementSibling,dx);
if(dw){dy=qx.bom.Selector.matches(dw,dy);
}return this.__en(dy);
},prevAll:function(bK){return this.__em(cu,bK);
},parent:function(bo){var Element=qx.dom.Element;
var bp=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(bo){bp=qx.bom.Selector.matches(bo,bp);
}return this.__en(bp);
},parents:function(cp){return this.__em(cW,cp);
},siblings:function(a){return this.__em(cH,a);
},__em:function(bF,bG){var bI=[];
var bH=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){bI.push.apply(bI,bH[bF](this[i]));
}var bJ=qx.lang.Array.unique(bI);
if(bG){bJ=qx.bom.Selector.matches(bG,bJ);
}return this.__en(bJ);
},__en:function(F){var G=new qx.bom.Collection;
G.__eo=this;
F=Array.prototype.slice.call(F,0);
G.push.apply(G,F);
return G;
},andSelf:function(){return this.add(this.__eo);
},end:function(){return this.__eo||new qx.bom.Collection();
},__ep:function(ba,bb){var bg=this[0];
var bf=bg.ownerDocument||bg;
var be=bf.createDocumentFragment();
var bi=qx.bom.Html.clean(ba,bf,be);
var bk=be.firstChild;
if(bk){var bc=this.length-1;

for(var i=0,l=bc;i<l;i++){bb.call(this,this[i],be.cloneNode(true));
}bb.call(this,this[bc],be);
}if(bi){var bd;
var bj=qx.io.ScriptLoader;
var bh=qx.lang.Function;

for(var i=0,l=bi.length;i<l;i++){bd=bi[i];
if(bd.src){bj.get().load(bd.src);
}else{bh.globalEval(bd.text||bd.textContent||bd.innerHTML||cQ);
}if(bd.parentNode){bd.parentNode.removeChild(bd);
}}}return this;
},__eq:function(df,dg){var di=qx.bom.Selector;
var dh=qx.lang.Array;
var dk=[];

for(var i=0,l=df.length;i<l;i++){{};
dk.push.apply(dk,di.query(df[i]));
}dk=dh.cast(dh.unique(dk),qx.bom.Collection);
for(var i=0,dj=this.length;i<dj;i++){dk[dg](this[i]);
}return this;
},append:function(dc){return this.__ep(arguments,this.__er);
},prepend:function(k){return this.__ep(arguments,this.__es);
},__er:function(B,C){B.appendChild(C);
},__es:function(du,dv){du.insertBefore(dv,du.firstChild);
},appendTo:function(bE){return this.__eq(arguments,cw);
},prependTo:function(ck){return this.__eq(arguments,cY);
},before:function(bq){return this.__ep(arguments,this.__et);
},after:function(dl){return this.__ep(arguments,this.__eu);
},__et:function(bC,bD){bC.parentNode.insertBefore(bD,bC);
},__eu:function(dr,ds){dr.parentNode.insertBefore(ds,dr.nextSibling);
},insertBefore:function(cr){return this.__eq(arguments,cL);
},insertAfter:function(cq){return this.__eq(arguments,cF);
},wrapAll:function(content){var n=this[0];

if(n){var m=qx.bom.Collection.create(content,n.ownerDocument).clone();
if(n.parentNode){n.parentNode.insertBefore(m[0],n);
}m.map(this.__ev).append(this);
}return this;
},__ev:function(db){while(db.firstChild){db=db.firstChild;
}return db;
},wrapInner:function(content){var cd=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){cd[0]=this[i];
cd.contents().wrapAll(content);
}return this;
},wrap:function(content){var bY=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){bY[0]=this[i];
bY.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(ca){return this.__eq(arguments,cC);
},remove:function(s){var u=this;

if(s){u=this.filter(s);

if(u.length==0){return this;
}}for(var i=0,v=u.length,t;i<v;i++){t=u[i];

if(t.parentNode){t.parentNode.removeChild(t);
}}return u;
},destroy:function(b){if(this.length==0){return this;
}var d=qx.bom.Selector;
var g=this;

if(b){g=this.filter(b);

if(g.length==0){return this;
}}var f=qx.event.Registration.getManager(this[0]);

for(var i=0,l=g.length,e,h;i<l;i++){e=g[i];
f.removeAllListeners(e);
h=d.query(cR,e);

for(var j=0,c=h.length;j<c;j++){f.removeAllListeners(h[j]);
}if(e.parentNode){e.parentNode.removeChild(e);
}}if(b){g.end();
qx.lang.Array.exclude(this,g);
}else{this.length=0;
}return this;
},empty:function(){var Y=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){Y.query(cT,this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(dq){var Element=qx.bom.Element;
return dq?
this.map(function(cl){return Element.clone(cl,true);
}):this.map(Element.clone,Element);
}},defer:function(dd,de){if(window.$==null){window.$=dd.create;
}}});
})();
})();
(function(){var m="qx.client",k="string",h="script",g="<table>",f="<fieldset>",e="<select multiple='multiple'>",d="</div>",c="</select>",b="</tr></tbody></table>",a="<col",J="div",I="<table><tbody><tr>",H=">",G="<table><tbody></tbody><colgroup>",F="<th",E="</tbody></table>",D="<td",C="</colgroup></table>",B="<opt",A="text/javascript",t="",u="</fieldset>",r="<table><tbody>",s="div<div>",p="<table",q="mshtml",n="qx.bom.Html",o="<leg",v="tbody",w="<tr",y="</table>",x="undefined",z="></";
qx.Class.define(n,{statics:{__ew:function(be,bf,bg){return bg.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?be:bf+z+bg+H;
},__ex:{opt:[1,e,c],leg:[1,f,u],table:[1,g,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Variant.select(m,{"mshtml":[1,s,d],"default":null})},__ey:function(K,L){var R=L.createElement(J);
K=K.replace(/(<(\w+)[^>]*?)\/>/g,this.__ew);
var N=K.replace(/^\s+/,t).substring(0,5).toLowerCase();
var Q,M=this.__ex;

if(!N.indexOf(B)){Q=M.opt;
}else if(!N.indexOf(o)){Q=M.leg;
}else if(N.match(/^<(thead|tbody|tfoot|colg|cap)/)){Q=M.table;
}else if(!N.indexOf(w)){Q=M.tr;
}else if(!N.indexOf(D)||!N.indexOf(F)){Q=M.td;
}else if(!N.indexOf(a)){Q=M.col;
}else{Q=M.def;
}if(Q){R.innerHTML=Q[1]+K+Q[2];
var P=Q[0];

while(P--){R=R.lastChild;
}}else{R.innerHTML=K;
}if(qx.core.Variant.isSet(m,q)){var S=/<tbody/i.test(K);
var O=!N.indexOf(p)&&!S?R.firstChild&&R.firstChild.childNodes:Q[1]==g&&!S?R.childNodes:[];

for(var j=O.length-1;j>=0;--j){if(O[j].tagName.toLowerCase()===v&&!O[j].childNodes.length){O[j].parentNode.removeChild(O[j]);
}}if(/^\s/.test(K)){R.insertBefore(L.createTextNode(K.match(/^\s*/)[0]),R.firstChild);
}}return qx.lang.Array.fromCollection(R.childNodes);
},clean:function(T,U,V){U=U||document;
if(typeof U.createElement===x){U=U.ownerDocument||U[0]&&U[0].ownerDocument||document;
}if(!V&&T.length===1&&typeof T[0]===k){var bd=/^<(\w+)\s*\/?>$/.exec(T[0]);

if(bd){return [U.createElement(bd[1])];
}}var W,Y=[];

for(var i=0,l=T.length;i<l;i++){W=T[i];
if(typeof W===k){W=this.__ey(W,U);
}if(W.nodeType){Y.push(W);
}else if(W instanceof qx.type.BaseArray){Y.push.apply(Y,Array.prototype.slice.call(W,0));
}else if(W.toElement){Y.push(W.toElement());
}else{Y.push.apply(Y,W);
}}if(V){var bc=[],bb=qx.lang.Array,ba,X;

for(var i=0;Y[i];i++){ba=Y[i];

if(ba.nodeType==1&&ba.tagName.toLowerCase()===h&&(!ba.type||ba.type.toLowerCase()===A)){if(ba.parentNode){ba.parentNode.removeChild(Y[i]);
}bc.push(ba);
}else{if(ba.nodeType===1){X=bb.fromCollection(ba.getElementsByTagName(h));
Y.splice.apply(Y,[i+1,0].concat(X));
}V.appendChild(ba);
}}return bc;
}return Y;
}}});
})();
(function(){var n="success",m="head",l="complete",k="error",j="load",i="fail",h="loaded",g="readystatechange",f="qx.io.ScriptLoader",d="script",a="qx.client",c="text/javascript",b="abort";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__fQ=qx.lang.Function.bind(this.__fW,this);
this.__fR=document.createElement(d);
},members:{__fS:null,__fT:null,__fU:null,__fQ:null,__fR:null,load:function(o,p,q){if(this.__fS){throw new Error("Another request is still running!");
}this.__fS=true;
var r=document.getElementsByTagName(m)[0];
var s=this.__fR;
this.__fT=p||null;
this.__fU=q||window;
s.type=c;
s.onerror=s.onload=s.onreadystatechange=this.__fQ;
s.src=o;
r.appendChild(s);
},abort:function(){if(this.__fS){this.__fV(b);
}},__fV:function(status){var u=this.__fR;
u.onerror=u.onload=u.onreadystatechange=null;
document.getElementsByTagName(m)[0].removeChild(u);
delete this.__fS;
if(this.__fT){this.__fT.call(this.__fU,status);
delete this.__fT;
}},__fW:qx.event.GlobalError.observeMethod(qx.core.Variant.select(a,{"mshtml":function(e){var t=this.__fR.readyState;

if(t==h){this.__fV(n);
}else if(t==l){this.__fV(n);
}else{return;
}},"opera":function(e){if(qx.lang.Type.isString(e)||e.type===k){return this.__fV(i);
}else if(e.type===j){return this.__fV(n);
}else{return;
}},"default":function(e){if(qx.lang.Type.isString(e)||e.type===k){this.__fV(i);
}else if(e.type===j){this.__fV(n);
}else if(e.type===g&&(e.target.readyState===l||e.target.readyState===h)){this.__fV(n);
}else{return;
}}}))},destruct:function(){this.__fR=this.__fQ=this.__fT=this.__fU=null;
}});
})();


qx.$$loader.init();

