import{_ as t,r as p,o as l,c,a as n,b as i,e as a,d as s}from"./app.b43460b0.js";const o={},r=a('<h1 id="_1-node\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-node\u6982\u8FF0" aria-hidden="true">#</a> 1.node\u6982\u8FF0</h1><h2 id="_1-1-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4ECB\u7ECD" aria-hidden="true">#</a> 1.1 \u4ECB\u7ECD</h2><p>https://nodejs.org/zh-cn/</p><p>http://nodejs.cn/</p><p>\u67E5\u770B\u81EA\u5DF1\u7684node\u7248\u672C\uFF0C\u5FC5\u987B\u786E\u4FDD\u7248\u672C\u572812\u4EE5\u4E0A\uFF0C\u5982\u679C\u4E0D\u5728\uFF0C\u5378\u8F7Dnode\u7136\u540E\u91CD\u65B0\u4E0B\u8F7D\u5B89\u88C5</p><p>Node.js \u662F\u4E00\u4E2A\u5F00\u6E90\u4E0E\u8DE8\u5E73\u53F0\u7684JavaScript \u8FD0\u884C\u65F6\u73AF\u5883\uFF0C\u4F7F\u7528C++\u8BED\u8A00\u7F16\u5199</p><p>\u5B83\u662F\u5728\u6D4F\u89C8\u5668\u5916\u8FD0\u884C\uFF0C\u5B83\u662F\u4E00\u4E2A \u4E8B\u4EF6\u9A71\u52A8\u5F02\u6B65I/O \u5355\u8FDB\u7A0B\u7684\u670D\u52A1\u7AEFJS\u73AF\u5883\uFF0C\u57FA\u4E8EGoogle\u7684V8\u5F15\u64CE\uFF0CV8\u5F15\u64CE\u6267\u884CJavascript\u7684\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u6027\u80FD\u975E\u5E38\u597D\u3002</p><p>\u5B83\u4F7F\u7528\u65B0\u7684 ECMAScript \u6807\u51C6\uFF0C\u4E0D\u5FC5\u7B49\u5F85\u6240\u6709\u7528\u6237\u66F4\u65B0\u5176\u6D4F\u89C8\u5668\uFF0C\u53EF\u4EE5\u901A\u8FC7\u66F4\u6539\u5176\u7248\u672C\u6765\u51B3\u5B9A\u8981\u4F7F\u7528\u65B0\u7684\u6807\u51C6\u7279\u6027\u3002</p><p><strong>\u6CE8\u610F</strong></p><ul><li>\u6D4F\u89C8\u5668\u662FJS\u7684\u524D\u7AEF\u8FD0\u884C\u73AF\u5883</li><li>Node.js\u662FJS\u7684\u540E\u7AEF\u8FD0\u884C\u73AF\u5883\uFF0C\u5728\u540E\u7AEF\u4E2D\u8FD0\u884C\u65E0\u6CD5\u8C03\u7528 DOM \u548C BOM \u7B49\u6D4F\u89C8\u5668\u5185\u7F6E API</li><li>nodejs\u8C03\u7528\u670D\u52A1\u67E5\u770B\u670D\u52A1\u5668\u76F8\u5173api gulp\u57FA\u7840 -&gt;node\u73AF\u5883</li></ul><p>\u524D\u7AEF\u5F88\u591A\u4E1C\u897F\u4E0Enode\u76F8\u5173</p><h2 id="_1-2-node\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_1-2-node\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 1.2 node\u5E94\u7528\u573A\u666F</h2><ul><li>\u521B\u5EFA\u5E94\u7528\u670D\u52A1</li><li>web\u5F00\u53D1</li><li>\u63A5\u53E3\u5F00\u53D1</li><li>\u5BA2\u6237\u7AEF\u5E94\u7528\u5DE5\u5177 gulp webpack vue\u811A\u624B\u67B6 react\u811A\u624B\u67B6 \u5C0F\u7A0B\u5E8F\u7B49</li></ul><h2 id="_1-3-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5B89\u88C5" aria-hidden="true">#</a> 1.3 \u5B89\u88C5</h2><p>nodejs\u73AF\u5883\u5B89\u88C5\u975E\u5E38\u4FBF\u6377\uFF0C\u76F4\u63A5\u53EF\u901A\u8FC7\u5B98\u7F51\u5730\u5740\uFF0C\u4E0B\u8F7D\u5BF9\u5E94\u7684\u5B89\u88C5\u8F6F\u4EF6\u5305\u5373\u53EF\u5B89\u88C5\u4F7F\u7528\u3002</p><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/1 install.png" alt="img"></p>',16),d=s("\u5982\u679C\u5728\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u9700\u8981\u5B89\u88C5\u591A\u4E2Anode\u7684\u7248\u672C\u4EE5\u652F\u6301 \u591A\u4E2A\u9879\u76EE\u7684\u4F7F\u7528\uFF0C\u5EFA\u8BAE\u4F7F\u7528 "),u={href:"https://www.runoob.com/w3cnote/nvm-manager-node-versions.html",target:"_blank",rel:"noopener noreferrer"},v=s("nvm node\u73AF\u5883\u7BA1\u7406\u5DE5\u5177"),m=s("\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u7535\u8111\u7CFB\u7EDF\u9009\u62E9\u5B89\u88C5\u3002"),k=a(`<h2 id="_1-4-\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#_1-4-\u6A21\u5757\u5316" aria-hidden="true">#</a> 1.4 \u6A21\u5757\u5316</h2><p><strong>\u542C\u8FC7\u54EA\u4E9B\u6A21\u5757\u5316\u89C4\u8303</strong>\uFF1A</p><p>Es6\u7684\u6A21\u5757\u5316\uFF08export import\uFF09. ----- vue. React. Minpro ....</p><p>Commonjs \u89C4\u8303. ------- node --- (vue react,minpro....)</p><p>AMD\u89C4\u8303 --- \u6DD8\u6C70 ---- require.js</p><p>CMD\u89C4\u8303 --- \u6DD8\u6C70. ---- sea.js</p><p>NodeJs\u57FA\u4E8E Commonjs \u6A21\u5757\u5316\u5F00\u53D1\u7684\u89C4\u8303\uFF0C\u5B83\u5B9A\u4E49\u4E00\u4E2AJS\u6587\u4EF6\u5C31\u79F0\u4E4B\u4E3A\u4E00\u4E2A\u6A21\u5757</p><p>node\u7684\u6A21\u5757\u7C7B\u578B</p><ul><li>\u6838\u5FC3\u6A21\u5757 - \u5B89\u88C5nodejs\u81EA\u5E26\u7684\u6A21\u5757</li><li>\u7B2C\u4E09\u65B9\u6A21\u5757 - \u9700\u8981\u624B\u52A8\u901A\u8FC7\uFF08npm/cnpm/yarn\uFF09\u5B89\u88C5\u7684\u6A21\u5757</li><li>\u81EA\u5B9A\u4E49\u6A21\u5757 - \u5F00\u53D1\u8005\u81EA\u5DF1\u7F16\u5199\u7684\u6A21\u5757</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6A21\u5757\u5BFC\u51FA
module.exports
exports

// \u6A21\u5757\u5BFC\u5165
require
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Demo1:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 01app.js
// \u5F00\u53D1\u8005A\u5199\u7684\u5927\u91CF\u4EE3\u7801
var obj = { // \u5B57\u9762\u91CF
  name: &#39;\u5343\u950B\u5317\u79D1\u6821\u533AH5-2007&#39;,
  sayName: function () {
    console.log(this.name)
  }
}

// \u66B4\u9732\u5BF9\u8C61 --- \u66B4\u9732\u8BED\u6CD5
module.exports = obj
// obj.sayName()

// 01index.js
// \u5F00\u53D1\u8005B\u8C03\u7528
// ./ \u76F8\u5BF9\u8DEF\u5F84\u4E4B \u5F53\u524D\u8DEF\u5F84
// ../ \u76F8\u5BF9\u8DEF\u5F84\u4E4B \u4E0A\u4E00\u5C42\u7EA7\u8DEF\u5F84
// \u5F15\u5165\u8BED\u6CD5
var obj = require(&#39;./01app.js&#39;) // \u5F15\u5165\u7684\u662F\u76F8\u5BF9\u8DEF\u5F84 ---- \u4E0D\u53EF\u4EE5\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84

// \u8C03\u7528\u529F\u80FD
obj.sayName()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Demo2:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 02app.js
var fun1 = function () {
  console.log(&#39;function1&#39;)
}

var fun2 = function () {
  console.log(&#39;function2&#39;)
}

var num = 100

var str = &#39;2007\u7684\u5C0F\u4F19\u4F34\u4EEC\uFF0C\u975E\u5E38\u68D2&#39;

// \u5982\u679C\u53EA\u9700\u8981\u66B4\u9732\u4E00\u4E2A  \u4F7F\u7528 module.exports 
// \u5982\u679C\u8981\u66B4\u9732\u591A\u4E2A  \u4F7F\u7528 exports
// exports.fun1 = fun1
// exports.fun2 = fun2
// exports.num = num
// exports.str = str

module.exports = {
  fun1: fun1,
  fun2: fun2,
  num: num,
  str: str
}

// 02index.js
// commonjs\u89C4\u8303\uFF0C\u81EA\u5B9A\u4E49\u6A21\u5757\u5F15\u5165\u65F6\u540E\u7F00\u540D\u53EF\u4EE5\u7701\u7565
// var app = require(&#39;./02app&#39;)

// app.fun1()
// app.fun2()

// console.log(app.num)
// console.log(app.str)

// \u5982\u679C\u7ED3\u5408 es6 \u7684\u89E3\u6784\u8D4B\u503C
// \u590D\u4E60 es6 \u89E3\u6784\u8D4B\u503C 
// https://es6.ruanyifeng.com/#docs/destructuring
var { fun1, fun2, num, str } = require(&#39;./02app&#39;)

fun1()
fun2()
console.log(num)
console.log(str)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5177\u4F53\u4EE3\u7801\u67E5\u770Bcode</p><h1 id="_2-node\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#_2-node\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> 2.node\u5FEB\u901F\u5F00\u59CB</h1><h2 id="_2-1-\u8FD0\u884Cjs\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-1-\u8FD0\u884Cjs\u6587\u4EF6" aria-hidden="true">#</a> 2.1 \u8FD0\u884Cjs\u6587\u4EF6</h2><p>\u68C0\u6D4Bnodejs\u662F\u5426\u5B89\u88C5\u6210\u529F,\u547D\u4EE4\u884C\u8F93\u5165\u5982\u4E0B\u8BED\u53E5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ node -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u9700\u8981\u67E5\u770Bnode\u7684\u76F8\u5173\u8BED\u6CD5\u4EE5\u53CA\u4F7F\u7528\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-2-\u6838\u5FC3\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6838\u5FC3\u6A21\u5757" aria-hidden="true">#</a> 2.2 \u6838\u5FC3\u6A21\u5757</h2>`,22),b={id:"_2-2-1-os\u64CD\u4F5C\u7CFB\u7EDF",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_2-2-1-os\u64CD\u4F5C\u7CFB\u7EDF","aria-hidden":"true"},"#",-1),g=s(" 2.2.1 "),x={href:"http://nodejs.cn/api/os.html",target:"_blank",rel:"noopener noreferrer"},f=s("os\u64CD\u4F5C\u7CFB\u7EDF"),w=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const os = require(&#39;os&#39;);
// \u64CD\u4F5C\u7CFB\u7EDF\u7279\u5B9A\u7684\u884C\u672B\u6807\u5FD7\u3002\u6839\u636E\u64CD\u4F5C\u7CFB\u7EDF\u751F\u6210\u5BF9\u5E94\u7684\u6362\u884C\u7B26. 
// console.log(os.EOL) // window \u4E3A \\r\\n\uFF0Clinux\u4E3A \\n

// \u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5176\u4E2D\u5305\u542B\u6709\u5173\u6BCF\u4E2A\u903B\u8F91 CPU \u5185\u6838\u7684\u4FE1\u606F\u3002
// console.log(os.cpus())

// \u4EE5\u6574\u6570\u7684\u5F62\u5F0F\u8FD4\u56DE\u7CFB\u7EDF\u7684\u5185\u5B58\u603B\u91CF\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09\u3002
// console.log(os.totalmem() / 1024 / 1024 / 1024) // 16    \u4EE5\u81EA\u5DF1\u7684\u7535\u8111\u4E3A\u4F8B

// \u4EE5\u6574\u6570\u7684\u5F62\u5F0F\u8FD4\u56DE\u7A7A\u95F2\u7684\u7CFB\u7EDF\u5185\u5B58\u91CF\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09\u3002
// console.log(os.freemem()  / 1024 / 1024 / 1024) // 2.79    \u4EE5\u81EA\u5DF1\u7684\u7535\u8111\u4E3A\u4F8B

// \u5176\u4F59\u5C5E\u6027\u67E5\u770B
// http://nodejs.cn/api/os.html
console.log(os.platform()) // \u8FD4\u56DE\u6807\u8BC6\u64CD\u4F5C\u7CFB\u7EDF\u5E73\u53F0\u7684\u5B57\u7B26\u4E32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7528\u9014</strong></p><p>\u5224\u65AD\u7528\u6237\u7684\u4F7F\u7528\u5E73\u53F0\uFF0C\u7ED9\u4E88\u63D0\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if (os.platform() === &#39;darwin&#39;) {
  console.log(&#39;\u8FD9\u91CC\u662Fmac\u5E73\u53F0&#39;)
} else {
  console.log(&#39;\u4E0D\u662Fmac\u7CFB\u7EDF&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u573A\u666F\uFF1A</p><p>\u200B \u767B\u5F55\u7F51\u7AD9\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF \u663E\u793A\u4E0D\u540C\u7684\u4E0B\u8F7D\u94FE\u63A5</p><p>\u200B \u4E0B\u8F7D\u6587\u4EF6\u65F6\uFF0C\u63D0\u793A\u6587\u4EF6\u8FC7\u5927\uFF0C\u8BF7\u5148\u6E05\u9664\u7A7A\u95F4</p></blockquote>`,5),_={id:"_2-2-2-path\u6A21\u5757",tabindex:"-1"},y=n("a",{class:"header-anchor",href:"#_2-2-2-path\u6A21\u5757","aria-hidden":"true"},"#",-1),q=s(" 2.2.2 "),j={href:"http://nodejs.cn/api/path.html",target:"_blank",rel:"noopener noreferrer"},S=s("path\u6A21\u5757"),N=a(`<p>path\u6A21\u5757\u7528\u4E8E\u5904\u7406\u6587\u4EF6\u548C\u76EE\u5F55(\u6587\u4EF6\u5939)\u7684\u8DEF\u5F84</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// path\u6A21\u5757\u7528\u4E8E\u5904\u7406\u6587\u4EF6\u548C\u76EE\u5F55(\u6587\u4EF6\u5939)\u7684\u8DEF\u5F84

var path = require(&#39;path&#39;)

// console.log(path)
// \u83B7\u53D6\u8DEF\u5F84\u6700\u540E\u4E00\u90E8\u5185\u5BB9  \u4E00\u822C\u7528\u5B83\u6765\u83B7\u53D6\u6587\u4EF6\u540D\u79F0
// console.log(path.basename(&#39;c:/a/b/c/d.html&#39;))  // d.html

// \u83B7\u53D6\u76EE\u5F55\u540D\uFF0C\u8DEF\u5F84\u6700\u540E\u5206\u9694\u7B26\u90E8\u5206\u88AB\u5FFD\u7565
// console.log(path.dirname(&#39;c:/a/b/c/d.html&#39;)) // c:/a/b/c

// \u83B7\u53D6\u8DEF\u5F84\u4E2D\u6587\u4EF6\u6269\u5C55\u540D
// console.log(path.extname(&#39;c:/a/b/c/d.html&#39;)) // .html

// \u7ED9\u5B9A\u7684\u8DEF\u5F84\u8FDE\u63A5\u5728\u4E00\u8D77
// console.log(path.join(&#39;c&#39;, &#39;a&#39;, &#39;d&#39;)) // c/a/d

// path.parse() \u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5176\u5C5E\u6027\u8868\u793A path \u7684\u6709\u6548\u5143\u7D20
// console.log(path.parse(&#39;/\u76EE\u5F551/\u76EE\u5F552/\u6587\u4EF6.txt&#39;)) // { root: &#39;/&#39;, dir: &#39;/\u76EE\u5F551/\u76EE\u5F552&#39;, base: &#39;\u6587\u4EF6.txt&#39;, ext: &#39;.txt&#39;, name: &#39;\u6587\u4EF6&#39; }


// \u6CE8\u610F\u67E5\u770B http://nodejs.cn/api/path.html#path_path_resolve_paths \u4E2D\u7684\u4E2D\u6587 \u90E8\u5206
// path.resolve() \u65B9\u6CD5\u4F1A\u5C06\u8DEF\u5F84\u6216\u8DEF\u5F84\u7247\u6BB5\u7684\u5E8F\u5217\u89E3\u6790\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\u3002
// \u7ED9\u5B9A\u7684\u8DEF\u5F84\u5E8F\u5217\u4F1A\u4ECE\u53F3\u5230\u5DE6\u8FDB\u884C\u5904\u7406\uFF0C\u540E\u9762\u7684\u6BCF\u4E2A path \u4F1A\u88AB\u8FFD\u52A0\u5230\u524D\u9762\uFF0C\u76F4\u5230\u6784\u9020\u51FA\u7EDD\u5BF9\u8DEF\u5F84
// console.log(path.resolve(&#39;/\u76EE\u5F551/\u76EE\u5F552&#39;, &#39;./\u76EE\u5F553&#39;)) // /\u76EE\u5F551/\u76EE\u5F552/\u76EE\u5F553

// console.log(path.resolve(&#39;/\u76EE\u5F551/\u76EE\u5F552&#39;, &#39;/\u76EE\u5F553/\u76EE\u5F554/&#39;)) // /\u76EE\u5F553/\u76EE\u5F554
// console.log(path.resolve(&#39;\u76EE\u5F551&#39;, &#39;\u76EE\u5F552/\u76EE\u5F553/&#39;, &#39;../\u76EE\u5F554/\u6587\u4EF6.gif&#39;)) // ../ \u4E0A\u7EA7\u8DEF\u5F84
// /Users/wudaxun/Desktop/workspace/code/sz2108/code/week4/day01/\u76EE\u5F551/\u76EE\u5F552/\u76EE\u5F554/\u6587\u4EF6.gif

console.log(__dirname)


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),P={id:"_2-2-3-url\u6A21\u5757",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#_2-2-3-url\u6A21\u5757","aria-hidden":"true"},"#",-1),D=s(" 2.2.3 "),R={href:"http://nodejs.cn/api/url.html",target:"_blank",rel:"noopener noreferrer"},C=s("url\u6A21\u5757"),E=a(`<p>URL\u5B57\u7B26\u4E32\u662F\u7ED3\u6784\u5316\u7684\u5B57\u7B26\u4E32\uFF0C\u5305\u542B\u591A\u4E2A\u542B\u4E49\u4E0D\u540C\u7684\u7EC4\u6210\u90E8\u5206\u3002 \u89E3\u6790\u5B57\u7B26\u4E32\u540E\u8FD4\u56DE\u7684 URL \u5BF9\u8C61\uFF0C\u6BCF\u4E2A\u5C5E\u6027\u5BF9\u5E94\u5B57\u7B26\u4E32\u7684\u5404\u4E2A\u7EC4\u6210\u90E8\u5206\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502                                              href                                              \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 protocol \u2502  \u2502        auth         \u2502          host          \u2502           path            \u2502 hash  \u2502
\u2502          \u2502  \u2502                     \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524       \u2502
\u2502          \u2502  \u2502                     \u2502    hostname     \u2502 port \u2502 pathname \u2502     search     \u2502       \u2502
\u2502          \u2502  \u2502                     \u2502                 \u2502      \u2502          \u251C\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524       \u2502
\u2502          \u2502  \u2502                     \u2502                 \u2502      \u2502          \u2502 \u2502    query     \u2502       \u2502
<span class="token string">&quot;  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash &quot;</span>
\u2502          \u2502  \u2502          \u2502          \u2502    hostname     \u2502 port \u2502          \u2502                \u2502       \u2502
\u2502          \u2502  \u2502          \u2502          \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2524          \u2502                \u2502       \u2502
\u2502 protocol \u2502  \u2502 username \u2502 password \u2502          host          \u2502          \u2502                \u2502       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524          \u2502                \u2502       \u2502
\u2502   origin    \u2502                     \u2502         origin         \u2502 pathname \u2502     search     \u2502 hash  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502                                              href                                              \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518


<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> urlStr <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com:8080/a/b/c?name=wudaxun&amp;age=18#test&#39;</span>

<span class="token comment">// const obj = url.parse(urlStr)</span>
<span class="token comment">// console.log(obj)</span>
<span class="token doc-comment comment">/**
 * Url <span class="token punctuation">{</span>
  protocol: &#39;https:&#39;,
  slashes: true,
  auth: null,
  host: &#39;www.baidu.com:8080&#39;,
  port: &#39;8080&#39;,
  hostname: &#39;www.baidu.com&#39;,
  hash: &#39;#test&#39;,
  search: &#39;?name=wudaxun&amp;age=18&#39;,
  query: &#39;name=wudaxun&amp;age=18&#39;,
  pathname: &#39;/a/b/c&#39;,
  path: &#39;/a/b/c?name=wudaxun&amp;age=18&#39;,
  href: &#39;https://www.baidu.com:8080/a/b/c?name=wudaxun&amp;age=18#test&#39;
<span class="token punctuation">}</span>
 */</span>
<span class="token comment">// const obj = url.parse(urlStr)</span>
<span class="token comment">// console.log(obj.query) // name=wudaxun&amp;age=18</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>urlStr<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>query<span class="token punctuation">)</span> <span class="token comment">// { name: &#39;wudaxun&#39;, age: &#39;18&#39; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),F={id:"_2-2-4-querystring\u6A21\u5757",tabindex:"-1"},M=n("a",{class:"header-anchor",href:"#_2-2-4-querystring\u6A21\u5757","aria-hidden":"true"},"#",-1),z=s(" 2.2.4 "),A={href:"http://nodejs.cn/api/querystring.html",target:"_blank",rel:"noopener noreferrer"},U=s("querystring\u6A21\u5757"),B=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> querystirng <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;querystring&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> urlStr <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com:8080/a/b/c?name=wudaxun&amp;age=18#test&#39;</span>

<span class="token keyword">const</span> queryStr <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>urlStr<span class="token punctuation">)</span><span class="token punctuation">.</span>query <span class="token comment">// name=wudaxun&amp;age=18</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> querystirng<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>queryStr<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// { name: &#39;wudaxun&#39;, age: &#39;18&#39; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),L={id:"_2-2-5-global\u5168\u5C40\u53D8\u91CF",tabindex:"-1"},J=n("a",{class:"header-anchor",href:"#_2-2-5-global\u5168\u5C40\u53D8\u91CF","aria-hidden":"true"},"#",-1),H=s(" 2.2.5 "),T={href:"http://nodejs.cn/api/globals.html",target:"_blank",rel:"noopener noreferrer"},V=s("global\u5168\u5C40\u53D8\u91CF"),W=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// const global = require(&#39;global&#39;)</span>
<span class="token comment">// console.log(global) // Cannot find module &#39;global&#39;</span>

<span class="token comment">// \u65E0\u9700\u5F15\u5165gloabl</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span> <span class="token comment">// \u8DEF\u5F84</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__filename<span class="token punctuation">)</span> <span class="token comment">// \u8DEF\u5F84 + \u540D\u79F0</span>
<span class="token comment">// \u4F7F\u7528\u573A\u666F\uFF1A \u5982\u679C\u9700\u8981\u83B7\u53D6\u6587\u4EF6\u7684\u8DEF\u5F84 \u4EE5\u53CA \u540D\u79F0\u65F6\u4F7F\u7528</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),O={id:"_2-2-6-fs\u6A21\u5757",tabindex:"-1"},$=n("a",{class:"header-anchor",href:"#_2-2-6-fs\u6A21\u5757","aria-hidden":"true"},"#",-1),Y=s(" 2.2.6 "),G={href:"http://nodejs.cn/api/fs.html",target:"_blank",rel:"noopener noreferrer"},K=s("fs\u6A21\u5757"),X=a(`<p>fs\u6A21\u5757\u63D0\u4F9B\u4E86\u7528\u4E8E\u4E0E\u6587\u4EF6\u8FDB\u884C\u4EA4\u4E92\u76F8\u5173\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const fs = require(&#39;fs&#39;)

# \u5199\u5165\u6570\u636E
fs.writeFile(\u6587\u4EF6,\u6570\u636E,err=&gt;{})

# \u8BFB\u53D6\u6587\u4EF6\u4E2D\u6570\u636E
fs.readFile(\u6587\u4EF6, &#39;utf8\u2019,(err,data)=&gt;{})

# \u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5B58\u5728    \u8FD4\u56DEtrue/false
fs.existsSync(path)

# \u83B7\u53D6\u6587\u4EF6\u4FE1\u606F
fs.stat(\u6587\u4EF6,(err,stats)=&gt;{
	stats.isDirectory() // \u662F\u5426\u662F\u76EE\u5F55
	stats.isFile()       // \u662F\u5426\u4E3A\u6587\u4EF6
	stats.size            // \u6587\u4EF6\u5927\u5C0F(\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D)
})

# \u5220\u9664\u6587\u4EF6
fs.unlink(\u6587\u4EF6,err=&gt;{})

# \u91CD\u547D\u540D
fs.rename(\u65E7\u6587\u4EF6\u540D\uFF0C\u65B0\u6587\u4EF6\u540D, err =&gt; {})


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5199\u5165\u6587\u4EF6</span>
<span class="token comment">// fs.writeFile(&#39;test.txt&#39;, &#39;\u4F60\u597D\uFF0C\u6587\u4EF6&#39;, err =&gt; {</span>
<span class="token comment">//   if (err) {</span>
<span class="token comment">//     console.log(err)</span>
<span class="token comment">//   }</span>
<span class="token comment">// })</span>
<span class="token comment">// \u8FFD\u52A0</span>
<span class="token comment">// fs.appendFile(&#39;test.txt&#39;, &#39;\u8FFD\u52A0&#39;, err =&gt; {</span>
<span class="token comment">//   if (err) throw err // \u629B\u51FA\u5F02\u5E38</span>
<span class="token comment">// })</span>

<span class="token comment">// \u91CD\u547D\u540D</span>
<span class="token comment">// fs.rename(&#39;test.txt&#39;, &#39;test.md&#39;, err =&gt; {</span>
<span class="token comment">//   if (err) throw err // \u629B\u51FA\u5F02\u5E38</span>
<span class="token comment">// })</span>

<span class="token comment">// fs.unlink(&#39;test.md&#39;, err =&gt; {</span>
<span class="token comment">//   if (err) throw err // \u629B\u51FA\u5F02\u5E38</span>
<span class="token comment">// })</span>

<span class="token comment">// \u67E5\u770B\u72B6\u6001</span>
<span class="token comment">// fs.stat(&#39;test.txt&#39;, (err, data) =&gt; {</span>
<span class="token comment">//   if (err) throw err</span>
<span class="token comment">//   console.log(data)</span>
<span class="token comment">//   console.log(data.size)</span>
<span class="token comment">//   console.log(data.isFile()) // true</span>
<span class="token comment">//   console.log(data.isDirectory()) // false</span>
<span class="token comment">// })</span>

<span class="token comment">// \u521B\u5EFA\u6587\u4EF6\u5939</span>
<span class="token comment">// fs.mkdir(&#39;src&#39;, err =&gt; {</span>
<span class="token comment">//   if (err) throw err</span>
<span class="token comment">// })</span>

<span class="token comment">// \u8BFB\u53D6\u6587\u4EF6\u4FE1\u606F</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">// \u4F60\u597D\uFF0C\u6587\u4EF6</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-web\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_3-web\u670D\u52A1\u5668" aria-hidden="true">#</a> 3.web\u670D\u52A1\u5668</h1><h2 id="_3-1-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4ECB\u7ECD" aria-hidden="true">#</a> 3.1 \u4ECB\u7ECD</h2><p>Web\u670D\u52A1\u5668\u4E00\u822C\u6307\u7684\u662F\u7F51\u7AD9\u670D\u52A1\u5668\uFF0C\u662F\u6307\u9A7B\u7559\u56E0\u7279\u7F51\u4E0A\u67D0\u4E00\u53F0\u6216N\u53F0\u8BA1\u7B97\u673A\u7684\u7A0B\u5E8F\uFF0C\u53EF\u4EE5\u5904\u7406\u6D4F\u89C8\u5668\u7B49Web\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u5E76\u8FD4\u56DE\u76F8\u5E94\u54CD\u5E94\uFF0C\u76EE\u524D\u6700\u4E3B\u6D41\u7684\u4E09\u4E2AWeb\u670D\u52A1\u5668\u662FApache\u3001 Nginx \u3001IIS\u3002</p><h2 id="_3-2-\u4F20\u7EDF\u5F00\u53D1\u548C\u524D\u540E\u7AEF\u5206\u79BB\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#_3-2-\u4F20\u7EDF\u5F00\u53D1\u548C\u524D\u540E\u7AEF\u5206\u79BB\u5F00\u53D1" aria-hidden="true">#</a> 3.2 \u4F20\u7EDF\u5F00\u53D1\u548C\u524D\u540E\u7AEF\u5206\u79BB\u5F00\u53D1</h2><ul><li><p>\u4F20\u7EDF\u7684\u5F00\u53D1\u4E5F\u53EB\u505A\u524D\u540E\u7AEF\u8026\u5408\u5F00\u53D1</p><p>\u524D\u7AEF\u5199\u5B8C\u9875\u9762\uFF0C\u4EA4\u7ED9\u540E\u7AEF\uFF0C\u540E\u7AEF\u628Ahtml\u9875\u9762\u540E\u7F00\u540D\u6539\u4E3A\u81EA\u5DF1\u9700\u8981\u7684\u9875\u9762\u6A21\u7248\uFF0C\u7136\u540E\u6E32\u67D3\u6570\u636E\uFF0C\u793A\u610F\u56FE\u5982\u4E0B</p></li><li><p>\u524D\u540E\u7AEF\u5206\u79BB\u5F00\u53D1</p><p>\u524D\u7AEF\u5F00\u53D1\u8005\u7F16\u5199html\u9875\u9762\u901A\u8FC7Ajax\u8C03\u7528\u540E\u7AEF\u7684RestFul API(get/post...)\u63A5\u53E3\u8FDB\u884C\u6570\u636E\u8FDB\u884C\u4EA4\u4E92\uFF0C\u540E\u7AEF\u8D1F\u8D23\u63A5\u53E3\u5F00\u53D1\u65E0\u9700\u5173\u5FC3\u9875\u9762\u7ED3\u6784\uFF0C\u793A\u610F\u56FE\u5982\u4E0B</p></li></ul><h2 id="_3-3-\u670D\u52A1\u5668\u76F8\u5173\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_3-3-\u670D\u52A1\u5668\u76F8\u5173\u6982\u5FF5" aria-hidden="true">#</a> 3.3 \u670D\u52A1\u5668\u76F8\u5173\u6982\u5FF5</h2><h3 id="_3-3-1-ip\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_3-3-1-ip\u5730\u5740" aria-hidden="true">#</a> 3.3.1 IP\u5730\u5740</h3><p>IP\u5730\u5740\u5C31\u662F\u4E92\u8054\u7F51\u4E0A\u6BCF\u53F0\u8BA1\u7B97\u673A\u7684\u552F\u4E00\u5730\u5740\uFF0C\u56E0\u6B64IP\u5730\u5740\u5177\u6709\u552F\u4E00\u6027\u3002\u5728\u5F00\u53D1\u671F\u95F4\uFF0C\u81EA\u5DF1\u7684\u7535\u8111\u65E2\u662F\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u4E5F\u662F\u4E00\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u53EF\u4EE5\u5728\u672C\u673A\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165127.0.0.1\u8FDB\u884C\u8BBF\u95EE</p><h3 id="_3-3-2-\u57DF\u540D" tabindex="-1"><a class="header-anchor" href="#_3-3-2-\u57DF\u540D" aria-hidden="true">#</a> 3.3.2 \u57DF\u540D</h3><p>\u5C3D\u7BA1 IP\u5730\u5740\u80FD\u591F\u552F\u4E00\u5730\u6807\u8BB0\u7F51\u7EDC\u4E0A\u7684\u8BA1\u7B97\u673A\uFF0C\u4F46IP\u5730\u5740\u662F\u4E00\u957F\u4E32\u6570\u5B57\uFF0C\u4E0D\u76F4\u89C2\uFF0C\u800C\u4E14\u4E0D\u4FBF\u4E8E\u8BB0\u5FC6\uFF0C\u4E8E\u662F\u4EBA\u4EEC\u53C8\u53D1\u660E\u4E86\u53E6\u4E00\u5957\u5B57\u7B26\u578B\u7684\u5730\u5740\u65B9\u6848\uFF0C\u53EB\u57DF\u540D\u5730\u5740\u3002IP\u5730\u5740\u548C\u57DF\u540D\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\u5173\u7CFB\uFF0C\u8FD9\u4EFD\u5BF9\u5E94\u5173\u7CFB\u5B58\u653E\u5728\u4E00\u79CD\u53EB\u505A\u57DF\u540D\u670D\u52A1\u5668(DNS)\u7684\u7535\u8111\u4E2D\u3002\u5728\u5F00\u53D1\u6D4B\u8BD5\u671F\u95F4\uFF0C 127.0.0.1 \u5BF9\u5E94\u7684\u57DF\u540D\u662F localhost\u3002</p><p>\u672C\u5730\u5982\u679Clocalhost\u65E0\u6CD5\u4F7F\u7528\uFF0C\u5219\u662F\u56E0\u4E3A\u672C\u673A\u4E2D\u7684hosts\u6587\u4EF6\u4E2D\u6CA1\u6709\u5339\u914D\u4E0Aip\u5730\u5740</p><ul><li>mac: /etc \u4E0B hosts</li><li>windows\uFF1A c/<strong>windows</strong>/<strong>System32</strong>/<strong>drivers</strong>/<strong>etc</strong> \u4E0Bhosts</li></ul><p>\u6DFB\u52A0 127.0.0.1 localhost</p><h3 id="_3-3-3-\u7F51\u7EDC\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#_3-3-3-\u7F51\u7EDC\u534F\u8BAE" aria-hidden="true">#</a> 3.3.3 \u7F51\u7EDC\u534F\u8BAE</h3><p>\u7F51\u7EDC\u4E0A\u7684\u8BA1\u7B97\u673A\u4E4B\u95F4\u4EA4\u6362\u4FE1\u606F,\u5C31\u50CF\u6211\u4EEC\u8BF4\u8BDD\u7528\u67D0\u79CD\u8BED\u8A00\u4E00\u6837\uFF0C\u5728\u7F51\u7EDC\u4E0A\u7684\u5404\u53F0\u8BA1\u7B97\u673A\u4E4B\u95F4\u4E5F\u6709\u4E00\u79CD\u8BED\u8A00\uFF0C\u8FD9\u5C31\u662F\u7F51\u7EDC\u534F\u8BAE\uFF0C\u4E0D\u540C\u7684\u8BA1\u7B97\u673A\u4E4B\u95F4\u5FC5\u987B\u4F7F\u7528\u76F8\u540C\u7684\u7F51\u7EDC\u534F\u8BAE\u624D\u80FD\u8FDB\u884C\u901A\u4FE1\u3002\u5982\uFF1ATCP\u3001UDP\u3001HTTP\u3001FTP\u7B49\u7B49\u3002</p><h3 id="_3-3-4-\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#_3-3-4-\u7AEF\u53E3" aria-hidden="true">#</a> 3.3.4 \u7AEF\u53E3</h3><p>\u670D\u52A1\u5668\u7684\u7AEF\u53E3\u53F7\u5C31\u50CF\u662F\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u95E8\u724C\u53F7\u4E00\u6837\u3002\u901A\u8FC7\u95E8\u724C\u53F7\uFF0C\u5916\u5356\u5458\u5C31\u53EF\u4EE5\u51C6\u786E\u628A\u5916\u5356</p><p>\u9001\u5230\u4F60\u7684\u624B\u4E2D\u3002\u540C\u6837\u7684\u9053\u7406\uFF0C\u5728\u4E00\u53F0\u7535\u8111\u4E2D\uFF0C\u53EF\u4EE5\u8FD0\u884CN\u591A\u4E2Aweb \u670D\u52A1\u3002\u6BCF\u4E2A web \u670D\u52A1\u90FD\u5BF9\u5E94\u4E00\u4E2A\u552F\u4E00\u7684\u7AEF\u53E3\u53F7\u3002\u5BA2\u6237\u7AEF\u53D1\u9001\u8FC7\u6765\u7684\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u901A\u8FC7\u7AEF\u53E3\u53F7\uFF0C\u53EF\u4EE5\u88AB\u51C6\u786E\u5730\u4EA4\u7ED9\u5BF9\u5E94\u7684 web \u670D\u52A1\u8FDB\u884C\u5904\u7406</p><p><strong>\u6CE8\u610F</strong></p><ul><li>http \u9ED8\u8BA4\u7AEF\u53E3\u4E3A 80</li><li>https \u9ED8\u8BA4\u7AEF\u53E3\u4E3A443</li></ul><h2 id="_3-4-\u521B\u5EFAweb\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_3-4-\u521B\u5EFAweb\u670D\u52A1\u5668" aria-hidden="true">#</a> 3.4 \u521B\u5EFAweb\u670D\u52A1\u5668</h2><p>NodeJs\u662F\u901A\u8FC7\u5B98\u65B9\u63D0\u4F9B\u7684http\u6A21\u5757\u6765\u521B\u5EFA web\u670D\u52A1\u5668\u7684\u6A21\u5757\u3002</p><p>\u901A\u8FC7\u51E0\u884C\u7B80\u5355\u7684\u4EE3\u7801\uFF0C\u5C31\u80FD\u8F7B\u677E\u7684\u624B\u5199\u4E00\u4E2Aweb\u670D\u52A1\uFF0C\u4ECE\u800C\u5BF9\u5916\u63D0\u4F9B web \u670D\u52A1\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/html;charset=utf-8&#39;</span>
    <span class="token comment">// &#39;content-type&#39;: &#39;text/plain;charset=utf-8&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;h1&gt;hello world&lt;/h1&gt;&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;\u60A8\u597D&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-5-\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_3-5-\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668" aria-hidden="true">#</a> 3.5 \u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668</h2>`,28),Q=s("phpstudy \u5B89\u88C5\u597D\u4E4B\u540E\uFF0C\u4F1A\u5728 www \u6587\u4EF6\u5939\u4E0B\u653E\u7F6E \u9759\u6001\u7684\u8D44\u6E90\uFF0C\u542F\u52A8phpstudy\uFF0C\u7136\u540E\u901A\u8FC7 "),Z={href:"http://localhost/",target:"_blank",rel:"noopener noreferrer"},nn=s("http://localhost:80"),sn=s(" \u518D\u52A0\u4E0A\u9700\u8981\u7684\u4FE1\u606F\u5373\u53EF\u8BBF\u95EE\uFF0C\u5176\u4E2Dwww\u6587\u4EF6\u5939\u5C31\u88AB\u79F0\u4E4B\u4E3A\u9759\u6001\u8D44\u6E90\u6587\u4EF6\u5939"),an=a(`<p>\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6BCF\u4E2A\u8D44\u6E90uri\u5730\u5740\uFF0C\u4F5C\u4E3A\u5728\u672C\u673A\u670D\u52A1\u5668\u6307\u5B9A\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u3002</p><p>\u901A\u8FC7\u76F8\u5173\u6A21\u5757\u8FDB\u884C\u8BFB\u53D6\u6587\u4EF6\u4E2D\u6570\u636E\u8FDB\u884C\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u4ECE\u800C\u5B9E\u73B0\u9759\u6001\u670D\u52A1\u5668\u3002</p><p>\u5047\u8BBE\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A</p><p>07static</p><p>-app.js</p><p>www</p><p>-read.txt</p><p>-index.html</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B66php\u7684\u65F6\u5019\uFF0C\u662F\u4E0D\u662F\u628A\u5199\u597D\u7684\u9875\u9762\u653E\u5230\u670D\u52A1\u5668\u7684 www \u7684\u6587\u4EF6\u5939\u4E0B --- \u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668</span>
<span class="token comment">// \u60F3\u8981\u8FBE\u6210\u76EE\u6807 \u8BBF\u95EE\u65F6\u4E0D\u9700\u8981\u52A0www  ---- www\u5C31\u662F\u9759\u6001\u8D44\u6E90\u7684\u76EE\u5F55</span>
<span class="token doc-comment comment">/**
 * http://localhost:3000/  			# \u663E\u793A index.html
  http://localhost:3000/index.html	# \u663E\u793A index.html
  http://localhost:3000/read.txt		# \u663E\u793A read.txt
 */</span>
<span class="token keyword">var</span> wwwDir <span class="token operator">=</span> __dirname <span class="token comment">// \u5F53\u524D\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span>
    <span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/html;charset=utf-8&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  <span class="token comment">// console.log(req.url) // /   /favicon.ico   \u8FC7\u6EE4</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">!==</span> <span class="token string">&#39;/favicon.ico&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(req.url)</span>
    <span class="token comment">// 1.\u83B7\u53D6\u7528\u6237\u8BF7\u6C42\u7684\u5730\u5740</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> req<span class="token punctuation">.</span>url
    <span class="token comment">// 2.\u9ED8\u8BA4\u503C</span>
    <span class="token keyword">var</span> filePath <span class="token operator">=</span> <span class="token string">&#39;/index.html&#39;</span><span class="token punctuation">;</span>		<span class="token comment">// \u8DEF\u5F84\u4E3A &#39;/&#39; \u65F6 \u6587\u4EF6\u8DEF\u5F84\u6307\u5411index.html</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>url <span class="token operator">!==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      filePath <span class="token operator">=</span> url
    <span class="token punctuation">}</span>
    <span class="token comment">// \u8BFB\u53D6www\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>wwwDir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/www</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>filePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err
      <span class="token comment">// console.log(data)</span>
      res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5730\u5740\u680F\u8F93\u5165\u5982\u4E0B\u6D4B\u8BD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://localhost:3000/  			# \u663E\u793A index.html
http://localhost:3000/index.html	# \u663E\u793A index.html
http://localhost:3000/read.txt		# \u663E\u793A read.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-6-\u83B7\u53D6\u6570\u636E-get" tabindex="-1"><a class="header-anchor" href="#_3-6-\u83B7\u53D6\u6570\u636E-get" aria-hidden="true">#</a> 3.6 \u83B7\u53D6\u6570\u636E-get</h2><p>get\u6570\u636E\u901A\u8FC7\u5730\u5740\u680F\u4F7F\u7528query\u65B9\u5F0F\u8FDB\u884C\u4F20\u9012\u7684\u6570\u636E</p><p>\u4F8B\u5982\u8BF7\u6C42\u5730\u5740http://localhost:3000/login?userName=wudaxun&amp;password=123</p><p>08get/app.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/html;charset=utf-8&#39;</span>
    <span class="token comment">// &#39;content-type&#39;: &#39;text/plain;charset=utf-8&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">!==</span> <span class="token string">&#39;/favicon.ico&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> query <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span>query
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;\u59D3\u540D:&#39;</span> <span class="token operator">+</span>  query<span class="token punctuation">.</span>userName <span class="token operator">+</span> <span class="token string">&#39;&lt;br /&gt;&#39;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;\u5BC6\u7801:&#39;</span> <span class="token operator">+</span>  query<span class="token punctuation">.</span>password<span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u8FD0\u884C\u4EE3\u7801\uFF0C\u5730\u5740\u680F\u8F93\u5165 http://localhost:3000/login?userName=wudaxun&amp;password=123 \u67E5\u770B\u6548\u679C</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-7-\u83B7\u53D6\u6570\u636E-post" tabindex="-1"><a class="header-anchor" href="#_3-7-\u83B7\u53D6\u6570\u636E-post" aria-hidden="true">#</a> 3.7 \u83B7\u53D6\u6570\u636E-post</h2>`,17),en=s("\u8868\u5355\u6570\u636E\u591A\u6570\u4E3Apost\u8FDB\u884C\u63D0\u4EA4\u5230\u670D\u52A1\u5668\u7AEF,\u53EF\u4EE5\u901A\u8FC7"),tn={href:"https://www.postman.com/",target:"_blank",rel:"noopener noreferrer"},pn=s("postman"),ln=s("\u6D4B\u8BD5"),cn=a(`<p>\u9664\u975E\u540E\u7AEF\u544A\u8BC9\u4F60\u4EE5form\u8868\u5355\u7684\u5F62\u5F0F\u63D0\u4EA4\u6570\u636E\uFF0C\u5426\u5219\u5C31\u9009\u62E9x-www-form-urlencoded</p><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/17.png" alt="img"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 09post.js</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> querystring <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;querystring&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/html;charset=utf-8&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// post \u63A5\u6536\u6570\u636E \u901A\u8FC7  data \u4E8B\u4EF6\u63A5\u6536</span>
  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// data \u9ED8\u8BA4\u4E3ABuffer\u6570\u636E</span>
    <span class="token comment">// console.log(data.toString())</span>
    str <span class="token operator">+=</span> data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u7D2F\u52A0\u6570\u636E</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> querystring<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token comment">// \u5904\u7406\u6570\u636E</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;\u59D3\u540D:&#39;</span> <span class="token operator">+</span>  obj<span class="token punctuation">.</span>userName <span class="token operator">+</span> <span class="token string">&#39;&lt;br /&gt;&#39;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;\u5BC6\u7801:&#39;</span> <span class="token operator">+</span>  obj<span class="token punctuation">.</span>password<span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-npm\u5305\u7BA1\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#_4-npm\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a> 4.NPM\u5305\u7BA1\u7406\u5668</h1><p>npm</p><p>\u4F7F\u7528npm/cnpm/yarn\u5B89\u88C5\u7684\u8D44\u6E90\uFF0C\u90FD\u4F1A\u663E\u793A\u5230\u5F53\u524D\u6587\u4EF6\u5939\u4E0B\u7684 node_modules \u6587\u4EF6\u5939\u5185\uFF0C\u4E00\u822C\u5728\u4E0A\u4F20\u6587\u4EF6\u65F6\uFF0C\u5FFD\u7565 node_modules</p><h2 id="_4-1\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_4-1\u4ECB\u7ECD" aria-hidden="true">#</a> 4.1\u4ECB\u7ECD</h2><p>npm\u662F\u5F53\u524D\u5E02\u573A\u4E0A\u6700\u5927\u7684\u5305\u8D44\u6E90\u7BA1\u7406\u5668\u3002\u4F60\u80FD\u60F3\u5230\u7684\u90FD\u53EF\u4EE5\u53BB\u8FD9\u91CC\u4E0B\u8F7D\u3002\u5176\u4ED6\u7684\u5305\u7BA1\u7406\u5668\u76F8\u5F53\u4E8E\u662F\u4E00\u4E2A\u5C0F\u5356\u90E8\uFF0Cnpm\u5305\u7BA1\u7406\u5668\u76F8\u5F53\u4E8E\u6C83\u5C14\u739B\u8D85\u5E02</p><p>npm\u662FNodeJs\u9879\u76EE\u6A21\u5757\u7BA1\u7406\u5DE5\u5177\uFF0C\u5B83\u5DF2\u7ECF\u96C6\u6210\u4E86nodejs\u5B89\u88C5\u5305\u4E2D\uFF0C\u5728npm\u4ECE\u4ECE5.2\u7248\u5F00\u59CB\uFF0C\u589E\u52A0\u4E86 npx \u547D\u4EE4(\u89E3\u51B3\u7684\u4E3B\u8981\u95EE\u9898\uFF0C\u5C31\u662F\u8C03\u7528\u9879\u76EE\u5185\u90E8\u5B89\u88C5\u7684\u6A21\u5757\uFF0C\u5F88\u591A\u5DE5\u5177\u4E0D\u518D\u9700\u8981npm -g \u5168\u5C40\u6765\u5B8C\u6210\u4F7F\u7528\u4E86)\uFF0C\u4F7F\u7528npm\u53EF\u4EE5\u5B9E\u73B0\u4ECENPM\u670D\u52A1\u5668\u4E0B\u8F7D\u522B\u4EBA\u7F16\u5199\u7684\u7B2C\u4E09\u65B9\u5305\u5230\u672C\u5730\u4F7F\u7528\u3002</p><p>npm\u4ED3\u5E93\u5730\u5740\uFF1Ahttps://www.npmjs.com/</p><p>\u5F53\u7136\u9664\u4E86npm\u4EE5\u5916\u8FD8\u6709Facebook\u8D21\u732E\u7684Yarn\uFF0C\u529F\u80FD\u548Cnpm\u4E00\u6837\u3002</p><h2 id="_4-2\u5207\u6362npm\u6E90" tabindex="-1"><a class="header-anchor" href="#_4-2\u5207\u6362npm\u6E90" aria-hidden="true">#</a> 4.2\u5207\u6362npm\u6E90</h2><p>npm\u4F7F\u7528\u56FD\u5916\u955C\u50CF\u6E90\u5730\u5740\uFF0C\u5728\u6709\u7684\u65F6\u5019\u53EF\u80FD\u7F51\u7EDC\u4E0D\u662F\u5F88\u901A\u987A\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u4F7F\u7528\u56FD\u5185\u955C\u50CF\u6E90\u6765\u5B8C\u6210npm\u4E0B\u8F7D\u6A21\u5757\u529F\u80FD</p><p>\u5207\u6362\u5230\u963F\u91CC\u63D0\u4F9B\u7684npm\u955C\u50CF\u6E90</p><p>\u5730\u5740\uFF1Ahttps://developer.aliyun.com/mirror/NPM?from=tnpm</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6267\u884C\u5982\u4E0B\u547D\u4EE4
npm install -g cnpm --registry=https://registry.npm.taobao.org

\u6267\u884C\u5B8C\u6BD5\u4E0A\u8FF0\u547D\u540D\u540E\uFF0C\u5728\u7CFB\u7EDF\u4E2D\u63D0\u4F9B\u4E86\u4E00\u4E2Acnpm\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u529F\u80FD\u548Cnpm\u4E00\u6837\uFF0C\u6240\u4E0D\u540C\u7684\u662Fcnpm\u955C\u50CF\u6E90\u5730\u5740\u4E3A \u963F\u91CC\u63D0\u4F9B\u7684\u6E90\u5730\u5740\u3002

\u63A8\u8350 \u65E5\u540E\u5DE5\u4F5C\u662F\u5B89\u88C5\u8F6F\u4EF6\u90FD\u4F7F\u7528cnpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528nrm\u7BA1\u7406npm\u955C\u50CF\u6E90</strong></p><p>nrm \u662F\u4E00\u4E2A npm \u6E90\u7BA1\u7406\u5668\uFF0C\u5141\u8BB8\u4F60\u5FEB\u901F\u5730\u5728 npm\u6E90\u95F4\u5207\u6362\u3002npm\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u4F7F\u7528npm\u5B98\u65B9\u6E90(npm config list \u6765\u67E5\u770B),\u5982\u679C\u76F4\u63A5\u4FEE\u6539npm\u6E90\uFF0C\u5982\u679C\u540E\u7EED\u9700\u8981\u8FDE\u63A5\u5230\u5B98\u65B9\u6E90\u624D\u80FD\u5DE5\u4F5C\uFF0C\u8FD9\u6837\u6765\u56DE\u5207\u6362\u6E90\u5C31\u53D8\u5F97\u9EBB\u70E6\u4E86\uFF0Cnrm\u901A\u8FC7\u7B80\u5355\u7684\u547D\u4EE4\u5C31\u53EF\u4EE5\u89E3\u51B3\u6B64\u95EE\u9898</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5B89\u88C5  \u901A\u8FC7cnpm\u6765\u5B89\u88C5\uFF0Ccnpm\u4F7F\u7528\u7684\u5C31\u662F\u56FD\u5185\u955C\u50CF\u6E90
cnpm i nrm -g
\u6CE8 -g global \u5168\u5C40\uFF0C\u8BA9nrm\u4E0D\u9650\u4E8E\u5230\u67D0\u4E00\u4E2A\u9879\u76EE\u4E2D\uFF0C\u800C\u662F\u5728\u6240\u6709\u7684\u9879\u76EE\u4E2D\u90FD\u53EF\u4F7F\u7528
# \u67E5\u770B\u53EF\u7528\u6E90
nrm ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/18.png" alt="img"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5207\u6362
nrm use \u540D\u79F0(npm)
nrm use cnpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-3-npm\u76F8\u5173\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-3-npm\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a> 4.3 npm\u76F8\u5173\u547D\u4EE4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm init     \u751F\u6210\u9879\u76EE\u7684\u63CF\u8FF0\u6587\u4EF6 package.json ---- \u4E00\u8DEF\u6572\u56DE\u8F66\u5373\u53EF

# \u5982\u679C\u5ACC\u9EBB\u70E6
\u521B\u5EFA\u6587\u4EF6\u5939 08npm
npm init -y   \u4E0D\u518D\u8BE2\u95EE\u4F60\u7684\u610F\u89C1\uFF0C\u76F4\u63A5\u751F\u6210
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/19.png" alt="img"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u67E5\u770B\u672C\u9879\u76EE\u5DF2\u5B89\u88C5\u6A21\u5757
npm list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/20.png" alt="img"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5B89\u88C5\u6A21\u5757
npm install \u6A21\u5757\u540D[@\u7248\u672C\u53F7 \u53EF\u9009]  \u6216  npm i \u6A21\u5757\u540D[@\u7248\u672C\u53F7 \u53EF\u9009]

cnpm i bootstrap 

npm list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/21.png" alt="img"></p><p><strong>\u53EA\u8981\u51FA\u73B0\u6A21\u5757\u4EE5\u53CA\u4ED6\u7684\u7248\u672C\u53F7\u5373\u4EE3\u8868\u6210\u529F\uFF0C\u53EF\u80FD\u5C55\u793A\u5F62\u5F0F\u4E0D\u592A\u4E00\u6837</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5378\u8F7D\u5DF2\u5B89\u88C5\u6A21\u5757
npm uninstall \u6A21\u5757\u540D

cnpm uninstall bootstrap

# \u53D1\u73B0node_modules\u6587\u4EF6\u5939\u5185\u5BB9\u6E05\u7A7A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5 \u5168\u5C40\u4F9D\u8D56 ---- \u672C\u7535\u8111\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\u4F4D\u7F6E\u90FD\u53EF\u4EE5\u8BBF\u95EE\u7684 ---- cnpm</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cnpm i \u6A21\u5757 -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5 \u9879\u76EE\u4F9D\u8D56 --- \u9879\u76EE\u8FD0\u884C\u65F6\u5FC5\u4E0D\u53EF\u5C11\u7684\u4F9D\u8D56 --- \u6240\u6709\u7684\u4F9D\u8D56\u90FD\u53EF\u4EE5\u5B89\u88C5\u6210\u9879\u76EE\u4F9D\u8D56 --- \u9ED8\u8BA4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cnpm i \u6A21\u5757 --save
cnpm i \u6A21\u5757 -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5 \u5F00\u53D1\u4F9D\u8D56 --- \u9879\u76EE\u5F00\u53D1\u65F6\u9700\u8981\uFF0C\u4E0A\u7EBF\u4EE5\u540E\u4E0D\u9700\u8981\u7684\u4F9D\u8D56 --- \u4EE3\u7801\u683C\u5F0F\u7684\u6821\u9A8C\u4F9D\u8D56\uFF08\u5F00\u53D1\u65F6\u6821\u9A8C\u597D\u4EE3\u7801\u89C4\u5219\uFF0C\u9879\u76EE\u4E0A\u7EBF\u5C31\u662F\u7B26\u5408\u89C4\u5219\u7684\uFF0C\u4E0D\u9700\u8981\u628A\u5B83\u88C5\u5230\u9879\u76EE\u4F9D\u8D56\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cnpm i \u6A21\u5757 --save-dev
cnpm i \u6A21\u5757 -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/22.png" alt="img"></p><p>\u5047\u5982\u67D0\u4E00\u5929\uFF0C\u5FD8\u8BB0\u4E86\u81EA\u5DF1\u5168\u5C40\u5B89\u88C5\u8FC7\u7684\u6A21\u5757\u7684\u8DEF\u5F84\uFF0C\u60F3\u8981\u67E5\u770B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u67E5\u770B\u5168\u5C40node_modules\u7684\u5730\u5740
npm root -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/23.png" alt="img"></p><p>\u5982\u679C\u662Fwindows\u7CFB\u7EDF\uFF0C<strong>\u5168\u5C40\u5B89\u88C5</strong>\u7684\u6A21\u5757\u4F1A\u6709\u4E00\u5B9A\u7684\u5C0F\u95EE\u9898\uFF08\u5B89\u88C5\u6CA1\u95EE\u9898\uFF0C\u4F46\u662F\u4F7F\u7528\u4F1A\u6709\u95EE\u9898\uFF0C\u4F46\u5E76\u4E0D\u662F\u6240\u6709\u4EBA\u90FD\u4F1A\u6709\u95EE\u9898\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cnpm i @vue/cli -g     # \u5168\u5C40\u5B89\u88C5\u7684vue\u7684\u811A\u624B\u67B6

vue -V    # @vue/cli 4.5.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662Fwindows\u7684\u7528\u6237\uFF0C\u90E8\u5206\u4EBA\u4F1A\u62A5\u5982\u4E0B\u7684\u9519\u8BEF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6 C://****/vue.psl,\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u4E0A\u7981\u6B62\u8FD0\u884C\u811A\u672C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/24.png" alt="img"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm root -g  # \u627E\u5230\u5168\u5C40\u5B89\u88C5\u7684\u6A21\u5757\u7684\u6587\u4EF6\u5939
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76F4\u63A5\u8FDB\u5165\u5230\u8FD9\u4E2A\u6587\u4EF6\u5939\u7684\u5185\u90E8\uFF0C\u8C03\u6574\u663E\u793A\u6587\u4EF6\u7684\u540E\u7F00\u540D\uFF0C\u7136\u540E\u5220\u9664vue.psl\u6587\u4EF6\u5373\u53EF\uFF0C\u91CD\u65B0\u6267\u884C\u5C31\u53EF\u4EE5</p><p><strong>\u5F90\u6653\u6625\u8D21\u732E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8FD8\u6709\u4E2A\u6CD5\u5B50win10\u8FD9\u4E2A\u8BBE\u7F6E \u66F4\u65B0\u5B89\u5168\u91CC\u5F00\u53D1\u8005\u6709\u8FD9\u4E2A\u9009\u9879 \u9ED8\u8BA4\u662F\u5173\u95ED\u7684 \u6253\u5F00\u5C31\u597D\u4E86
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/25.png" alt="img"></p><h2 id="_4-4-npm-\u81EA\u5B9A\u4E49\u811A\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-4-npm-\u81EA\u5B9A\u4E49\u811A\u672C\u547D\u4EE4" aria-hidden="true">#</a> 4.4 npm \u81EA\u5B9A\u4E49\u811A\u672C\u547D\u4EE4</h2><p>\u901A\u8FC7package.json\u6587\u4EF6\u4E2D\u7684scripts\u81EA\u5B9A\u4E49\u811A\u672C\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;node main.js&quot;
  },
}

# \u8FD0\u884C\u547D\u4EE4
npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-\u81EA\u52A8\u91CD\u542F\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_4-5-\u81EA\u52A8\u91CD\u542F\u5E94\u7528" aria-hidden="true">#</a> 4.5 \u81EA\u52A8\u91CD\u542F\u5E94\u7528</h2><p>\u5728\u7F16\u5199\u8C03\u8BD5Node.js\u9879\u76EE\uFF0C\u4FEE\u6539\u4EE3\u7801\u540E\u9700\u8981\u9891\u7E41\u7684\u624B\u52A8\u91CD\u542F\u5E94\u7528\uFF0C\u975E\u5E38\u7E41\u7410\u3002nodemon\u8FD9\u4E2A\u5DE5\u5177\uFF0C\u5B83\u7684\u4F5C\u7528\u662F\u76D1\u542C\u4EE3\u7801\u6587\u4EF6\u7684\u53D8\u52A8\uFF0C\u5F53\u4EE3\u7801\u6539\u53D8\u4E4B\u540E\uFF0C\u81EA\u52A8\u91CD\u542F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5168\u5C40\u5B89\u88C5nodemon
cnpm i -g nodemon

# \u6267\u884Cnode\u811A\u672C
nodemon app.js

# \u914D\u7F6E\u811A\u672C package.json
{
  &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;nodemon main.js&quot;
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD8\u53EF\u4EE5\u4F7F\u7528\u5176\u4F59\u7684\u6A21\u5757\u3002supervisor</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cnpm i supervisor -g
# \u6267\u884Cnode\u811A\u672C
supervisor app.js

# \u914D\u7F6E\u811A\u672C package.json
{
  &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;supervisor main.js&quot;
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-express" tabindex="-1"><a class="header-anchor" href="#_5-express" aria-hidden="true">#</a> 5.express</h1><h2 id="_5-1-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_5-1-\u4ECB\u7ECD" aria-hidden="true">#</a> 5.1 \u4ECB\u7ECD</h2><p>\u7F51\u5740\uFF1Ahttps://www.expressjs.com.cn/</p><p>Express \u662F\u57FA\u4E8E Node.js \u5E73\u53F0\uFF0C\u5FEB\u901F\u3001\u5F00\u653E\u3001\u6781\u7B80\u7684 Web \u5F00\u53D1\u6846\u67B6\u3002\u642D\u5EFAweb\u670D\u52A1\u5668</p><p>Express \u7684\u672C\u8D28\uFF1A\u5C31\u662F\u4E00\u4E2A npm \u4E0A\u7684\u7B2C\u4E09\u65B9\u5305\uFF0C\u63D0\u4F9B\u4E86\u5FEB\u901F\u521B\u5EFA Web \u670D\u52A1\u5668\u7684\u4FBF\u6377\u65B9\u6CD5\u3002</p><p>\u4F7F\u7528Express\u5F00\u53D1\u6846\u67B6\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u3001\u5FEB\u901F\u7684\u521B\u5EFAWeb\u7F51\u7AD9\u7684\u670D\u52A1\u5668\u6216API\u63A5\u53E3\u7684\u670D\u52A1\u5668</p><h2 id="_5-2-\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_5-2-\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> 5.2 \u57FA\u672C\u4F7F\u7528</h2><h3 id="_5-2-1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_5-2-1-\u5B89\u88C5" aria-hidden="true">#</a> 5.2.1 \u5B89\u88C5</h3><p>\u5728\u9879\u76EE\u76EE\u5F55express_course\u4E2D\uFF0C\u6253\u5F00cmd\u547D\u4EE4\u7A97\u53E3\uFF0C\u6267\u884C\u5982\u4E0B\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cnpm init -y
cnpm i -S express
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6587\u4EF6\u5939\u540D\u79F0\u4E0D\u8981\u542B\u6709\u4E2D\u6587\u5B57\u7B26</strong></p><h3 id="_5-2-2-\u521B\u5EFAweb\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_5-2-2-\u521B\u5EFAweb\u670D\u52A1" aria-hidden="true">#</a> 5.2.2 \u521B\u5EFAweb\u670D\u52A1</h3><p>\u5148\u7528 node \u670D\u52A1\u5668\u5B9E\u73B0\u591A\u4E2A\u9875\u9762\u7684\u8DEF\u7531</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token comment">// 10express_course/old.js</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">!==</span> <span class="token string">&#39;/favicon.ico&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span>
      <span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/html;charset=utf-8&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> pathname <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>pathname

    <span class="token comment">// node\u539F\u751F\u8DEF\u7531\u5B9E\u73B0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pathname <span class="token operator">===</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pathname <span class="token operator">===</span> <span class="token string">&#39;/kind&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;\u5206\u7C7B&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pathname <span class="token operator">===</span> <span class="token string">&#39;/cart&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;\u8D2D\u7269\u8F66&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pathname <span class="token operator">===</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u7684&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;404&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528express\u5B9E\u73B0\u540C\u6837\u7684\u529F\u80FD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 10express_course/express.js
const express = require(&#39;express&#39;)
const app = express()

app.get(&#39;/home&#39;, (req, res, next) =&gt; {
  res.send(&#39;express\u9996\u9875&#39;)
})
app.get(&#39;/kind&#39;, (req, res, next) =&gt; {
  res.send(&#39;express\u5206\u7C7B&#39;)
})
app.get(&#39;/cart&#39;, (req, res, next) =&gt; {
  res.send(&#39;express\u8D2D\u7269\u8F66&#39;)
})
app.get(&#39;/user&#39;, (req, res, next) =&gt; {
  res.send(&#39;express\u4E2A\u4EBA\u4E2D\u5FC3&#39;)
})

app.listen(3000)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u5F53\u524D\u670D\u52A1\u5668\u7684\u7AEF\u53E3\u53F7\u662F\u5426\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// windows
netstat -ano | findstr 3000

// linux/mac
lsof -i:3000      # \u67E5\u8BE2\u51FA\u54EA\u4E2A\u8FDB\u7A0B\u5360\u7528\u8BE5\u7AEF\u53E3\u53F7
kill -9 \u8FDB\u7A0B\u53F7			# \u5173\u95ED\u8BE5\u8FDB\u7A0B

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u63A5\u53E3\u8C03\u8BD5\u5DE5\u5177</strong></p><p><strong>postman/apipost/apizza \u524D\u4E24\u8005\u662F\u8F6F\u4EF6\u9700\u5B89\u88C5\uFF0C\u540E\u5728\u7EBF\u5373\u53EF\u4F7F\u7528</strong></p><p>RestFul\u8DEF\u7531\u89C4\u5219\u5B9A\u4E49</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 10express_couse/restful.js</span>
<span class="token comment">// \u8BF7\u6C42 get / post / put / patch / delete</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/proList&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&#39;/update&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span> <span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;/delete&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u8BD5\u53EF\u4EE5\u4F7F\u7528\u4E0A\u9762\u6240\u8BF4\u4E09\u4E2A\u8F6F\u4EF6\u4E2D\u4E4B\u4E00\u6765\u8FDB\u884C\u8C03\u8BD5\u5373\u53EF</p><h3 id="_5-2-3-\u83B7\u53D6\u63A5\u53E3\u7684\u76F8\u5173\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_5-2-3-\u83B7\u53D6\u63A5\u53E3\u7684\u76F8\u5173\u53C2\u6570" aria-hidden="true">#</a> 5.2.3 \u83B7\u53D6\u63A5\u53E3\u7684\u76F8\u5173\u53C2\u6570</h3><p>\u901A\u8FC7 req.query \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u8BBF\u95EE\u5230\u5BA2\u6237\u7AEF\u901A\u8FC7\u67E5\u8BE2\u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\u53D1\u9001\u5230\u670D\u52A1\u5668\u7684\u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>app.get(&#39;/&#39;,(req,res)=&gt;{
	console.log(req.query)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7 req.body \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u8BBF\u95EE\u5230post\u8BF7\u6C42\u53D1\u9001\u5230\u670D\u52A1\u5668\u7684\u53C2\u6570\uFF0C\u4F46\u662F\u5F97\u914D\u7F6E\u4E2D\u95F4\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// post \u8BF7\u6C42 \u9700\u8981\u989D\u5916\u7684\u914D\u7F6E\u4FE1\u606F ---- express \u81EA\u5E26\u7684</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// for parsing application/json json\u683C\u5F0F\u5316</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// for parsing application/x-www-form-urlencoded</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-4-url\u4E2D\u52A8\u6001\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_5-2-4-url\u4E2D\u52A8\u6001\u53C2\u6570" aria-hidden="true">#</a> 5.2.4 URL\u4E2D\u52A8\u6001\u53C2\u6570</h3><p>\u901A\u8FC7 req.params \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u8BBF\u95EE\u5230 URL \u4E2D\u52A8\u6001\u53C2\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// http://localhost:3000/detail/1</span>
<span class="token comment">// http://localhost:3000/detail/2</span>
<span class="token comment">// http://localhost:3000/detail/3</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/detail/:proid&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-5-\u9759\u6001\u8D44\u6E90\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_5-2-5-\u9759\u6001\u8D44\u6E90\u7BA1\u7406" aria-hidden="true">#</a> 5.2.5 \u9759\u6001\u8D44\u6E90\u7BA1\u7406</h3><p>express\u63D0\u4F9B\u4E86\u4E00\u4E2A\u975E\u5E38\u597D\u7528\u7684\u65B9\u6CD5\uFF0C\u53EB\u505A express.static()\uFF0C\u901A\u8FC7\u6B64\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5730\u521B\u5EFA\u4E00\u4E2A\u9759\u6001web\u8D44\u6E90\u670D\u52A1\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const express = require(&#39;express&#39;)
const app = express()

// http://localhost:3000/a.js
// http://localhost:3000/b.js
// \u8BBE\u7F6Epublic\u76EE\u5F55\u4E3A\u9759\u6001\u8D44\u6E90\u76EE\u5F55
app.use(&#39;/&#39;, express.static(&#39;public&#39;))

app.listen(3000)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-3-\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#_5-3-\u8DEF\u7531" aria-hidden="true">#</a> 5.3 \u8DEF\u7531</h2><h3 id="_5-3-1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_5-3-1-\u6982\u8FF0" aria-hidden="true">#</a> 5.3.1 \u6982\u8FF0</h3><p>\u8DEF\u7531\u5728\u751F\u6D3B\u4E2D\u5982\u62E8\u6253\u670D\u52A1\u7535\u8BDD\u65F6\uFF0C\u6309\u6570\u5B57\u51E0\u80FD\u5904\u7406\u4EC0\u4E48\u6837\u7684\u5904\u7406\uFF0C\u5B83\u5C31\u662F\u7C7B\u4F3C\u4E8E\u6309\u952E\u4E0E\u670D\u52A1\u4E4B\u95F4\u7684\u6620\u5C04\u5173\u7CFB\u3002</p><p>\u5728Express\u4E2D\uFF0C\u8DEF\u7531\u6307\u7684\u5C31\u662F\u5BA2\u6237\u7AEF\u53D1\u8D77\u7684\u8BF7\u6C42\u4E0E\u670D\u52A1\u5668\u7AEF\u5904\u7406\u65B9\u6CD5\u4E4B\u95F4\u7684\u6620\u5C04\u5173\u7CFB\u3002</p><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/26.png" alt="img"></p><h3 id="_5-3-2-\u5B9A\u4E49\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#_5-3-2-\u5B9A\u4E49\u8DEF\u7531" aria-hidden="true">#</a> 5.3.2 \u5B9A\u4E49\u8DEF\u7531</h3><p>express\u4E2D\u7684\u8DEF\u7531\u52063\u90E8\u4EFD\u7EC4\u4EF6\uFF0C\u5206\u522B\u662F\u8BF7\u6C42\u7C7B\u578B\u3001\u8BF7\u6C42uri\u548C\u5BF9\u5E94\u7684\u5904\u7406\u51FD\u6570\u3002</p><p>\u5F53\u4E00\u4E2A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5230\u8FBE\u670D\u52A1\u7AEF\u4E4B\u540E\uFF0C\u5148\u7ECF\u8FC7\u8DEF\u7531\u89C4\u5219\u5339\u914D\uFF0C\u53EA\u6709\u5339\u914D\u6210\u529F\u4E4B\u540E\uFF0C\u624D\u4F1A\u8C03\u7528\u5BF9\u5E94\u7684\u5904\u7406\u51FD\u6570\u3002\u5728\u5339\u914D\u65F6\uFF0C\u4F1A\u6309\u7167\u8DEF\u7531\u7684\u987A\u5E8F\u8FDB\u884C\u5339\u914D\uFF0C\u5982\u679C\u8BF7\u6C42\u7C7B\u578B\u548C\u8BF7\u6C42\u7684 URL \u540C\u65F6\u5339\u914D\u6210\u529F\uFF0C\u5219 Express \u4F1A\u5C06\u8FD9\u6B21\u8BF7\u6C42\uFF0C\u8F6C\u4EA4\u7ED9\u5BF9\u5E94\u7684\u51FD\u6570\u8FDB\u884C\u5904\u7406\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>app.&lt;get/post/put/delete/use&gt;(uri,(req,res)=&gt;{})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-3-3-\u6A21\u5757\u5316\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#_5-3-3-\u6A21\u5757\u5316\u8DEF\u7531" aria-hidden="true">#</a> 5.3.3 \u6A21\u5757\u5316\u8DEF\u7531</h3><p>\u5728\u5F00\u53D1\u9879\u76EE\u65F6\uFF0C\u5982\u679C\u5C06\u6240\u6709\u7684\u8DEF\u7531\u89C4\u5219\u90FD\u6302\u8F7D\u5230\u5165\u53E3\u6587\u4EF6\u4E2D\uFF0C\u7A0B\u5E8F\u7F16\u5199\u548C\u7EF4\u62A4\u90FD\u53D8\u5316\u66F4\u52A0\u56F0\u96BE\u3002\u6240\u4EE5express\u4E3A\u4E86\u8DEF\u7531\u7684\u6A21\u5757\u5316\u7BA1\u7406\u529F\u80FD\uFF0C\u901A\u8FC7express.Router()\u65B9\u6CD5\u521B\u5EFA\u8DEF\u7531\u6A21\u5757\u5316\u5904\u7406\u7A0B\u5E8F\uFF0C\u53EF\u4EE5\u5C06\u4E0D\u540C\u4E1A\u52A1\u9700\u6C42\u5206\u5F00\u5230\u4E0D\u540C\u7684\u6A21\u5757\u4E2D\uFF0C\u4ECE\u800C\u4FBF\u4E8E\u4EE3\u7801\u7684\u7EF4\u62A4\u548C\u9879\u76EE\u6269\u5C55\u3002</p><p>\u8DEF\u7531\u6A21\u5757\u5316\u5904\u7406\u53EF\u4EE5\u5206\u4E3A\u4EE5\u4E0B\u6B65\u9AA4\u6765\u5B8C\u6210</p><p>\xD8 \u521B\u5EFA\u72EC\u7ACBjs\u7A7A\u767D\u6587\u4EF6(\u6700\u597D\u662F\u7EDF\u4E00\u653E\u5728\u4E00\u4E2A\u76EE\u5F55\u4E0B)</p><p>\xD8 \u5728js\u4E2D\u4F7F\u7528express.Router()\u65B9\u6CD5\u521B\u5EFA\u8DEF\u7531\u6A21\u5757\u5BF9\u8C61</p><p>\xD8 \u4F7F\u7528\u8DEF\u7531\u5BF9\u8C61\u5B8C\u6210\u8DEF\u7531\u89C4\u5219\u7684\u5BF9\u5E94\u7684\u4E1A\u52A1\u7F16\u5199</p><p>\xD8 \u4F7F\u7528\u6A21\u5757\u5316\u5BFC\u51FA(module.exports=router)</p><p>\xD8 \u5728\u4E3B\u5165\u53E3\u6587\u4EF6\u4E2D\u80FD\u8FC7app.use\u65B9\u6CD5\u6765\u6CE8\u518C\u5B9A\u4E49\u7684\u8DEF\u7531\u6A21\u5757</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 09router/pro.js
const express = require(&#39;express&#39;)
// \u5728js\u4E2D\u4F7F\u7528express.Router()\u65B9\u6CD5\u521B\u5EFA\u8DEF\u7531\u6A21\u5757\u5BF9\u8C61
const router = express.Router()
// \u4F7F\u7528\u8DEF\u7531\u5BF9\u8C61\u5B8C\u6210\u8DEF\u7531\u89C4\u5219\u7684\u5BF9\u5E94\u7684\u4E1A\u52A1\u7F16\u5199
router.get(&#39;/list&#39;, (req, res, next) =&gt; {
  res.send(&#39;\u4EA7\u54C1\u5217\u8868&#39;)
})
router.get(&#39;/detail/:id&#39;, (req, res, next) =&gt; {
  res.send(&#39;\u4EA7\u54C1\u8BE6\u60C5&#39;)
})
router.get(&#39;/category&#39;, (req, res, next) =&gt; {
  res.send(&#39;\u4EA7\u54C1\u5206\u7C7B&#39;)
})
// \u4F7F\u7528\u6A21\u5757\u5316\u5BFC\u51FA(module.exports=router)
module.exports = router
// 09router/user.js
const express = require(&#39;express&#39;)
// \u5728js\u4E2D\u4F7F\u7528express.Router()\u65B9\u6CD5\u521B\u5EFA\u8DEF\u7531\u6A21\u5757\u5BF9\u8C61
const router = express.Router()
// \u4F7F\u7528\u8DEF\u7531\u5BF9\u8C61\u5B8C\u6210\u8DEF\u7531\u89C4\u5219\u7684\u5BF9\u5E94\u7684\u4E1A\u52A1\u7F16\u5199
router.get(&#39;/list&#39;, (req, res, next) =&gt; {
  res.send(&#39;\u7528\u6237\u5217\u8868&#39;)
})
router.get(&#39;/detail/:id&#39;, (req, res, next) =&gt; {
  res.send(&#39;\u7528\u6237\u8BE6\u60C5&#39;)
})
router.get(&#39;/role&#39;, (req, res, next) =&gt; {
  res.send(&#39;\u7528\u6237\u89D2\u8272&#39;)
})
// \u4F7F\u7528\u6A21\u5757\u5316\u5BFC\u51FA(module.exports=router)
module.exports = router
// 09 express_router.js
const express = require(&#39;express&#39;)

const app = express()

// \u4EA7\u54C1\u76F8\u5173\u8DEF\u7531   -----  A
// \u7528\u6237\u76F8\u5173\u8DEF\u7531   -----  B
// \u4E3A\u4E86\u56E2\u961F\u5408\u4F5C\uFF0C\u591A\u4EBA\u5408\u4F5C\u3002\u63D0\u9AD8\u5F00\u53D1\u6548\u7387
// \u5F15\u5165\u6A21\u5757
const pro = require(&#39;./09router/pro&#39;)
const user = require(&#39;./09router/user&#39;)
// \u5728\u4E3B\u5165\u53E3\u6587\u4EF6\u4E2D\u80FD\u8FC7app.use\u65B9\u6CD5\u6765\u6CE8\u518C\u5B9A\u4E49\u7684\u8DEF\u7531\u6A21\u5757
app.use(&#39;/pro&#39;, pro)
app.use(&#39;/user&#39;, user)

// \u5171\u540C\u7684\u8DEF\u7531
app.get(&#39;/&#39;, (req, res, next) =&gt; {
  res.send(&#39;\u9996\u9875&#39;)
})

app.listen(3000, (req, res) =&gt; {
  console.log(&#39;your server is running at http://localhost:3000&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4F\u89C8\u5668\u5206\u522B\u8F93\u5165\u5982\u4E0B\u4EE3\u7801\u6D4B\u8BD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://localhost:3000/      				\u9996\u9875
http://localhost:3000/pro/list      \u4EA7\u54C1\u5217\u8868
http://localhost:3000/pro/detail/1  \u4EA7\u54C1\u8BE6\u60C5
http://localhost:3000/pro/category  \u4EA7\u54C1\u5206\u7C7B
http://localhost:3000/user/list     \u7528\u6237\u5217\u8868
http://localhost:3000/user/detail/1 \u7528\u6237\u8BE6\u60C5
http://localhost:3000/pro/role      \u7528\u6237\u89D2\u8272
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u601D\u8003\uFF1A 09 express_router.js \u6587\u4EF6\u4E2D \u6709\u5982\u4E0B\u4EE3\u7801,\u662F\u4E0D\u662F\u53EF\u4EE5\u968F\u610F\u7684\u653E\u7F6E\u4F4D\u7F6E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5171\u540C\u7684\u8DEF\u7531
app.get(&#39;/&#39;, (req, res, next) =&gt; {
  res.send(&#39;\u9996\u9875&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/27.png" alt="img"></p><p>\u4E3A\u4EC0\u4E48 \u5F88\u591A\u4EBA\u559C\u6B22\u653E\u540E\u9762\uFF1F</p><p><strong>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5F88\u591A\u4F1A\u7406\u89E3\u4E3A \u8DEF\u7531\u662F\u4ECE\u4E0A\u5230\u4E0B\u5339\u914D\uFF0C\u5339\u914D\u5230\u5C31\u505C\u6B62</strong> ---- \u7406\u5FF5\u5728 vue react \u4E2D\u5B58\u5728 ----- \u5751</p><h2 id="_5-4-\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-4-\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> 5.4 \u4E2D\u95F4\u4EF6</h2><h3 id="_5-4-1-\u4E2D\u95F4\u4EF6\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_5-4-1-\u4E2D\u95F4\u4EF6\u7406\u89E3" aria-hidden="true">#</a> 5.4.1 \u4E2D\u95F4\u4EF6\u7406\u89E3</h3><p>\u4E2D\u95F4\u4EF6\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E1A\u52A1\u6D41\u7A0B\u7684\u4E2D\u95F4\u5904\u7406\u73AF\u8282\u3002\u5982\u751F\u6D3B\u4E2D\u5403\u4E00\u822C\u7092\u9752\u83DC\uFF0C\u5927\u7EA6\u5206\u4E3A\u5982\u4E0B\u51E0\u6B65\u9AA4</p><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/14.png" alt="img"></p><p>express\u4E2D\u5F53\u4E00\u4E2A\u8BF7\u6C42\u5230\u8FBE\u7684\u670D\u52A1\u5668\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u7ED9\u5BA2\u6237\u54CD\u5E94\u4E4B\u524D\u8FDE\u7EED\u8C03\u7528\u591A\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u6765\u5BF9\u672C\u6B21\u8BF7\u6C42\u548C\u8FD4\u56DE\u54CD\u5E94\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002</p><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/15.png" alt="img"></p><h3 id="_5-4-2-\u4E2D\u95F4\u4EF6\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#_5-4-2-\u4E2D\u95F4\u4EF6\u5206\u7C7B" aria-hidden="true">#</a> 5.4.2 \u4E2D\u95F4\u4EF6\u5206\u7C7B</h3><p>\u4E2D\u95F4\u4EF6\u53EF\u4EE5\u5206\u7C7B\u53EF\u5206\u5982\u4E0B\u51E0\u7C7B</p><p>\xD8 \u5185\u7F6E\u4E2D\u95F4\u4EF6 \u4E5F\u5C31\u662Fexpress\u672C\u8EAB\u81EA\u5E26 \u65E0\u5E26npm\u5B89\u88C5</p><p>\xD8 \u7B2C\u4E09\u65B9\u4E2D\u95F4\u4EF6</p><p>\u975E Express \u5B98\u65B9\u5185\u7F6E\u7684\uFF0C\u800C\u662F\u7531\u7B2C\u4E09\u65B9\u5F00\u53D1\u51FA\u6765\u7684\u4E2D\u95F4\u4EF6\uFF0C\u53EB\u505A\u7B2C\u4E09\u65B9\u4E2D\u95F4\u4EF6\u3002</p><p>\u5728\u9879\u76EE\u4E2D\u53EF\u4EE5\u901A\u8FC7npm\u8FDB\u884C\u5B89\u88C5\u7B2C\u4E09\u65B9\u4E2D\u95F4\u4EF6\u5E76\u914D\u7F6E\uFF0C\u4ECE\u800C\u63D0\u9AD8\u9879\u76EE\u7684\u5F00\u53D1\u6548\u7387\u3002</p><p>\u4F8B\u5982body-parser \u6B64\u4E2D\u95F4\u4EF6\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5E2E\u52A9\u6211\u4EEC\u83B7\u53D6\u5230post\u63D0\u4EA4\u8FC7\u6765\u7684\u6570\u636E\u3002</p><p><strong>\u5751\uFF1A\u540E\u671F\u9879\u76EE\u4E2D\u90E8\u5206\u540C\u5B66\u7535\u8111\u4E0A\u4F1A\u9700\u8981\u4F7F\u7528body-parser\uFF0C \u4E0A\u4F20\u5927\u56FE\uFF0C\u4EE5\u524D\u7684\u7248\u672C\u7528\u8FD9\u4E2A\uFF0C\u968F\u7740express\u7684\u5347\u7EA7\uFF0C\u901A\u8FC7 express.json()\u548Cexpress.urlencoded()\u5B9E\u73B0</strong></p><p>\xD8 \u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6 \u5F00\u53D1\u8005\u81EA\u5DF1\u7F16\u5199\u7684</p><h3 id="_5-4-3-\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-4-3-\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> 5.4.3 \u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6</h3><p>\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\uFF0C\u5176\u672C\u8D28\u5C31\u662F\u5B9A\u4E49\u4E00\u4E2A\u5904\u7406\u8BF7\u6C42\u7684\u51FD\u6570\uFF0C\u53EA\u662F\u6B64\u51FD\u6570\u4E2D\u9664\u4E86\u6709request\u548Cresponse\u53C2\u6570\u5916\u8FD8\u5FC5\u987B\u5305\u542B\u4E00\u4E2Anext\u53C2\u6570\uFF0C\u6B64\u53C2\u6570\u4F5C\u7528\u8BA9\u4E2D\u95F4\u4EF6\u80FD\u591F\u8BA9\u6D41\u7A0B\u5411\u4E0B\u6267\u884C\u4E0B\u53BB\u76F4\u5230\u5339\u914D\u5230\u7684\u8DEF\u7531\u4E2D\u53D1\u9001\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7ED9request\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u6765\u8FDB\u884C\u4E2D\u95F4\u4EF6\u6570\u636E\u7684\u5411\u4E0B\u4F20\u9012</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function mfn(req,res,next){
	
	// \u4E2D\u95F4\u4EF6\u6700\u540E\u4E00\u5B9A\u8981\u6267\u884C\u6B64\u51FD\u6570\uFF0C\u5426\u5219\u7A0B\u5E8F\u65E0\u6CD5\u5411\u4E0B\u6267\u884C\u4E0B\u53BB
	next()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/daxunxun/bk-2007-course/raw/master/note/week1-node/img/16.png" alt="img"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const express = require(&#39;express&#39;)
const app = express()

app.use((req, res, next) =&gt; {
  req.a = 10
  next()
})
app.use((req, res, next) =&gt; {
  req.b = 20
  next()
})
app.use((req, res, next) =&gt; {
  req.c = 30
  next()
})
app.get(&#39;/&#39;, (req, res, next) =&gt; {
  res.send({
    a: req.a,
    b: req.b,
    c: req.c
  })
})
app.listen(3000)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528\u4E2D\u95F4\u4EF6\u6765\u5B9E\u73B0\u9519\u8BEF\u7684\u7EDF\u4E00\u5904\u7406,\u5373\u9519\u8BEF\u7EA7\u522B\u4E2D\u95F4\u4EF6</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>app.get(uri,(req,res)=){
	// \u5982\u679C\u5904\u7406\u6709\u5F02\u5E38 \u629B\u51FA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u9519\u8BEF
	throw new Error(&#39;\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF&#39;)

	res.send(&#39;hello&#39;)
})

// \u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\u5B8C\u6210\u9519\u8BEF\u7EA7\u522B\u4E2D\u95F4\u4EF6 --- \u5982\u679C\u4E0D\u8BBE\u7F6E\u3002\u8D70\u9ED8\u8BA4\u8DEF\u7EBF\uFF0C\u5982\u679C\u8BBE\u7F6E\uFF0C\u8D70\u8BBE\u7F6E\u8DEF\u7EBF --- \u653E\u5230\u4E0A\u4E00\u4E2A\u6848\u4F8B\u4E2D
app.use((err,req,res,next)=&gt;{
	// \u6B64\u5904err\u5FC5\u987B\u4E3A\u7B2C1\u4E2A\u53C2\u6570\uFF0C\u5B83\u4F1A\u83B7\u53D6\u5F97\u5230 throw\u629B\u51FA\u7684\u5F02\u5E38\u4FE1\u606F
	console.log(err.message)
	res.send(err.message)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-4-\u5185\u7F6E\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-4-4-\u5185\u7F6E\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> 5.4.4 \u5185\u7F6E\u4E2D\u95F4\u4EF6</h3><p>express\u4E5F\u63D0\u4F9B\u4E86\u597D\u7528\u7684\u5185\u7F6E\u4E2D\u95F4\u4EF6\uFF0C\u5982\u63D0\u4F9B\u4E00\u4E2A\u9759\u6001\u8D44\u6E90\u7BA1\u7406\u7684\u4E2D\u95F4\u4EF6\uFF0C\u901A\u8FC7\u6B64\u4E2D\u95F4\u4EF6\u5C31\u53EF\u4EE5\u5E2E\u52A9\u4E3A\u6211\u4EEC\u5FEB\u901F\u642D\u5EFA\u4E00\u4E2A\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>app.use(express.static(&#39;\u6258\u7BA1\u76EE\u5F55\u5730\u5740&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-4-5-\u7B2C\u4E09\u65B9\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-4-5-\u7B2C\u4E09\u65B9\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> 5.4.5 \u7B2C\u4E09\u65B9\u4E2D\u95F4\u4EF6</h3><p>express\u642D\u5EFA\u7684web\u670D\u52A1\u5668\u4E2D\u60F3\u8981\u63A5\u53D7\u8868\u5355\u4E2D\u7684post\u6570\u636E\u53EF\u4EE5\u901A\u8FC7\u7B2C3\u65B9\u4E2D\u95F4\u4EF6\u5E2E\u52A9\u89E3\u6790\u83B7\u53D6post\u6570\u636E</p><p>\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><p>\xD8 \u5B89\u88C5\u7B2C3\u65B9\u4E2D\u95F4\u4EF6 cnpm i -S body-parser</p><p>\xD8 \u5728\u5E94\u7528\u6587\u4EF6\u4E2D\u5BFC\u5165 require</p><p>\xD8 \u901A\u8FC7\u4E2D\u95F4\u4EF6\u8C03\u7528 app.use(body.urlencoded({extended: false}))</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u521B\u5EFA application/x-www-form-urlencoded \u89E3\u6790
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\xD8 \u5728\u5339\u914D\u7684\u8DEF\u7531\u4E2D\u901A\u8FC7 req.body\u83B7\u6570post\u4E2D\u6570\u636E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6CE8\u610F\uFF1AExpress \u5185\u7F6E\u7684 express.urlencoded \u4E2D\u95F4\u4EF6\uFF0C\u5C31\u662F\u57FA\u4E8E body-parser \u8FD9\u4E2A\u7B2C\u4E09\u65B9\u4E2D\u95F4\u4EF6\u8FDB\u4E00\u6B65\u5C01\u88C5\u51FA\u6765\u7684\u3002\u4F46\u5185\u7F6E\u7684\u6709\u7248\u672C\u517C\u5BB9\u95EE\u9898\uFF0C\u6240\u4EE5\u4E00\u822C\u9879\u76EE\u9009\u62E9\u5B89\u88C5\u4F7F\u7528\u7B2C3\u65B9
// 11 express_next_install.js
const express = require(&#39;express&#39;)
const BodyParser = require(&#39;body-parser&#39;); // cnpm i body-parser -S
const app = express()
// \u901A\u8FC7\u4E2D\u95F4\u4EF6\u8C03\u7528  ----  post \u901A\u8FC7req.body \u83B7\u53D6\u5230\u6570\u636E
app.use(BodyParser.urlencoded({extended: false})) // \u4EE5\u524D\u89E3\u51B3\u7684\u65B9\u6848

// http://localhost:3000/register
// postman - body - x-www-from-urlencoded 
// username  \u5927\u52CB\u52CB
// password  654321
app.post(&#39;/register&#39;, (req, res) =&gt; {
  console.log(req.body) // \u9ED8\u8BA4\u662F undefined ---- body-parser
  res.send(req.body)
})
app.listen(3000, (req, res) =&gt; {
  console.log(&#39;your server is running at http://localhost:3000&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u89C2\u5BDF 06 demo \u4EE5\u53CA 11 demo\u7684\u533A\u522B</p><h2 id="_5-5-cookie\u548Csession" tabindex="-1"><a class="header-anchor" href="#_5-5-cookie\u548Csession" aria-hidden="true">#</a> 5.5 cookie\u548Csession</h2><h3 id="_5-5-1-cookie" tabindex="-1"><a class="header-anchor" href="#_5-5-1-cookie" aria-hidden="true">#</a> 5.5.1 cookie</h3><p>HTTP\u662F\u4E00\u4E2A\u65E0\u72B6\u6001\u534F\u8BAE\uFF0C\u5BA2\u6237\u7AEF\u6BCF\u6B21\u53D1\u51FA\u8BF7\u6C42\u65F6\u5019\uFF0C\u4E0B\u4E00\u6B21\u8BF7\u6C42\u5F97\u4E0D\u5230\u4E0A\u4E00\u6B21\u8BF7\u6C42\u7684\u6570\u636E\uFF0C\u6211\u4EEC\u5982\u4F55\u5C06\u4E0A\u4E00\u6B21\u8BF7\u6C42\u548C\u4E0B\u4E00\u6B21\u8BF7\u6C42\u7684\u6570\u636E\u5173\u8054\u8D77\u6765\u5462\uFF1F</p><p>\u5982\u7528\u6237\u767B\u5F55\u6210\u529F\u540E\uFF0C\u8DF3\u8F6C\u5230\u5176\u4ED6\u9875\u9762\u65F6\u5019\uFF0C\u5176\u4ED6\u7684\u9875\u9762\u662F\u5982\u4F55\u77E5\u9053\u8BE5\u7528\u6237\u5DF2\u7ECF\u767B\u5F55\u4E86\u5462\uFF1F</p><p>\u6B64\u65F6\u5C31\u53EF\u4EE5\u4F7F\u7528\u5230cookie\u4E2D\u7684\u503C\u6765\u5224\u65AD\u7528\u6237\u662F\u5426\u767B\u5F55\uFF0Ccookie\u53EF\u4EE5\u4FDD\u5B58\u7528\u6237\u6570\u636E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cookie \u65E2\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u5728\u670D\u52A1\u7AEF\u4F7F\u7528
cookie \u53EF\u4EE5\u5B58\u50A8\u7684\u5927\u5C0F\u4E3A4K
cookie \u5B58\u5728\u6709\u6548\u671F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cookie\u5B83\u662F\u4E00\u4E2A\u7531\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u5171\u540C\u534F\u4F5C\u5B9E\u73B0\u7684\u3002cookie\u5206\u4E3A\u5982\u4E0B\u51E0\u6B65\u5B9E\u73B0\uFF1A</p><p>\xD8 \u670D\u52A1\u5668\u7AEF\u5411\u5BA2\u6237\u7AEF\u53D1\u9001cookie\u5E76\u6307\u5B9Acookie\u7684\u8FC7\u671F\u65F6\u95F4\u3002</p><p>\xD8 \u6D4F\u89C8\u5668\u5C06cookie\u4FDD\u5B58\u8D77\u6765\u3002</p><p>\xD8 \u4E4B\u540E\u6BCF\u6B21\u8BF7\u6C42\u90FD\u4F1A\u5C06cookie\u53D1\u5411\u670D\u52A1\u5668\u7AEF\uFF0C\u5728cookie\u6CA1\u6709\u8FC7\u671F\u65F6\u95F4\u5185\u670D\u52A1\u5668\u90FD\u53EF\u4EE5\u5F97\u5230cookie\u4E2D\u7684\u503C\u3002</p><p>express\u4E2D\u64CD\u4F5C\u7684cookie\u4F7F\u7528 cookie-parser\u6A21\u5757 cnpm i -S cookie-parser</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> CookieParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cookie-parser&#39;</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">CookieParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/ list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cookies <span class="token operator">=</span> req<span class="token punctuation">.</span>cookies <span class="token comment">// \u83B7\u53D6cookie</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookies<span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wudaxun&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6Ecookie</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;\u524D\u7AEF\u83B7\u53D6\u5230\u7684cookie\u4E3A\uFF1A&#39;</span> <span class="token operator">+</span> cookies<span class="token punctuation">.</span>username
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-2-session" tabindex="-1"><a class="header-anchor" href="#_5-5-2-session" aria-hidden="true">#</a> 5.5.2 session</h3><p>cookie\u64CD\u4F5C\u5F88\u65B9\u4FBF\uFF0C\u4F46\u662F\u4F7F\u7528cookie\u5B89\u5168\u6027\u4E0D\u9AD8\uFF0Ccookie\u4E2D\u7684\u6240\u6709\u6570\u636E\u5B58\u50A8\u5728\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u4E2D\uFF0C\u6570\u636E\u5F88\u5BB9\u6613\u88AB\u4F2A\u9020\uFF1B</p><p>\u6240\u4EE5\u4E00\u4E9B\u91CD\u8981\u7684\u6570\u636E\u5C31\u4E0D\u80FD\u653E\u5728cookie\u5F53\u4E2D\u4E86\uFF0C\u5E76\u4E14cookie\u8FD8\u6709\u4E00\u4E2A\u7F3A\u70B9\u5C31\u662F\u4E0D\u80FD\u5B58\u653E\u592A\u591A\u7684\u6570\u636E\uFF0C\u4E00\u822C\u6D4F\u89C8\u5927\u7EA6\u57284k\u5DE6\u53F3\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898\uFF0Csession\u5C31\u4EA7\u751F\u4E86\uFF0Csession\u4E2D\u7684\u6570\u636E\u4FDD\u7559\u5728\u670D\u52A1\u7AEF\u7684 ---- \u5185\u5B58\u4E2D\u3002</p><p>\u628A\u6570\u636E\u653E\u5230cookie\u4E2D\u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728cookie\u4E2D\u5B58\u653E\u4E00\u4E2AsessionId\u503C,\u8BE5sessionId\u4F1A\u4E0E\u670D\u52A1\u5668\u7AEF\u4E4B\u95F4\u4F1A\u4EA7\u751F\u6620\u5C04\u5173\u7CFB\uFF0C\u5982\u679CsessionId\u88AB\u7BE1\u6539\u7684\u8BDD\uFF0C\u90A3\u4E48\u5B83\u5C31\u4E0D\u4F1A\u4E0E\u670D\u52A1\u5668\u7AEF\u6570\u636E\u4E4B\u95F4\u4EA7\u751F\u6620\u5C04\uFF0C\u56E0\u6B64\u5B89\u5168\u6027\u5C31\u66F4\u597D\uFF0C\u5E76\u4E14session\u7684\u6709\u6548\u671F\u4E00\u822C\u6BD4\u8F83\u77ED\uFF0C\u4E00\u822C\u90FD\u662F\u8BBE\u7F6E\u662F20\u5206\u949F\u5DE6\u53F3\uFF0C\u5982\u679C\u572820\u5206\u949F\u5185\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u6CA1\u6709\u4EA7\u751F\u4EA4\u4E92\uFF0C\u670D\u52A1\u7AEF\u5C31\u4F1A\u5C06\u6570\u636E\u5220\u9664\u3002</p><p><strong>session\u7684\u539F\u7406\u662F\u901A\u8FC7\u4E00\u4E2Asessionid\u6765\u8FDB\u884C\u7684\uFF0Csessionid\u662F\u653E\u5728\u5BA2\u6237\u7AEF\u7684cookie\u4E2D\uFF0C\u5F53\u8BF7\u6C42\u5230\u6765\u65F6\u5019\uFF0C\u670D\u52A1\u7AEF\u4F1A\u68C0\u67E5cookie\u4E2D\u4FDD\u5B58\u7684sessionid\u662F\u5426\u6709\uFF0C\u5E76\u4E14\u4E0E\u670D\u52A1\u7AEF\u7684session\u6570\u636E\u6620\u5C04\u8D77\u6765\uFF0C\u8FDB\u884C\u6570\u636E\u7684\u4FDD\u5B58\u548C\u4FEE\u6539\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5F53\u6211\u4EEC\u6D4F\u89C8\u4E00\u4E2A\u7F51\u9875\u65F6\u5019\uFF0C\u670D\u52A1\u7AEF\u4F1A\u968F\u673A\u751F\u6210\u4E00\u4E2A1024\u6BD4\u7279\u957F\u7684\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u5B58\u5728cookie\u4E2D\u7684sessionid\u5B57\u6BB5\u4E2D\uFF0C\u5F53\u6211\u4EEC\u4E0B\u6B21\u8BBF\u95EE\u65F6\uFF0Ccookie\u4F1A\u5E26\u6709sessionid\u8FD9\u4E2A\u5B57\u6BB5\u3002</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express-session&#39;</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token string">&#39;sz2108&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5BC6\u94A5  \u81EA\u5DF1\u968F\u4FBF\u5236\u5B9A</span>
  <span class="token literal-property property">resave</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">saveUninitialized</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cookie</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> session <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token comment">// \u83B7\u53D6 session</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>session<span class="token punctuation">)</span>
  req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&#39;wudaxun11111&#39;</span> <span class="token comment">// \u8BBE\u7F6E session</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;\u524D\u7AEF\u83B7\u53D6\u5230\u7684 session \u4E3A\uFF1A&#39;</span> <span class="token operator">+</span> session<span class="token punctuation">.</span>username
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u4F5C\u4E1A" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E1A" aria-hidden="true">#</a> \u4F5C\u4E1A</h1><h2 id="day01\u4F5C\u4E1A" tabindex="-1"><a class="header-anchor" href="#day01\u4F5C\u4E1A" aria-hidden="true">#</a> day01\u4F5C\u4E1A</h2><ul><li>\u590D\u4E60 es6 \u7684\u89E3\u6784\u8D4B\u503C</li></ul><p>https://es6.ruanyifeng.com/#docs/destructuring</p><ul><li><p>\u67E5\u627E\u9762\u8BD5\u9898\uFF1A \u8BF4\u8BF4AMD\uFF0CCMD\u4EE5\u53CACommonjs\u89C4\u8303\uFF0C\u4EE5\u53CAes6\u6A21\u5757\u5316\u4E4B\u95F4\u7684\u533A\u522B\uFF1F</p></li><li><p>\u4E0B\u8F7D\u8D44\u6E90</p><p>\u4E0B\u8F7Dbootstrap\u9879\u76EE\u6A21\u677F \u767E\u5EA6\u7F51\u76D8\u4E0B\u8F7D \u94FE\u63A5\uFF1Ahttps://pan.baidu.com/s/128UX3FzlkkNNYc3IoR5jvA \u63D0\u53D6\u7801\uFF1Albbg</p><p>\u5B89\u88C5\u6570\u636E\u5E93\u76F8\u5173\u8F6F\u4EF6 --- windows \u5B89\u88C5mongodb \u767E\u5EA6\u7F51\u76D8\u4E0B\u8F7D: \u94FE\u63A5\uFF1Ahttps://pan.baidu.com/s/1mIbNrhzFMzMzB3jLs92Dsg \u63D0\u53D6\u7801\uFF1Ao8pw</p><p>mac</p><p>https://www.cnblogs.com/cbowen/p/11748922.html</p></li></ul><h2 id="day02\u4F5C\u4E1A" tabindex="-1"><a class="header-anchor" href="#day02\u4F5C\u4E1A" aria-hidden="true">#</a> day02\u4F5C\u4E1A</h2><ul><li><p>\u9AD8\u9891\u9762\u8BD5\u9898\uFF1Anodejs\u4E2D\u7684\u9519\u8BEF\u4F18\u5148\u56DE\u8C03</p><p><strong>\u901A\u4FD7\u8BB2\uFF0C\u5728node\u4E2D\uFF0C\u6211\u4EEC\u5728\u8BBE\u8BA1\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u8981\u4F18\u5148\u89E3\u51B3\u9519\u8BEF\uFF0C\u7136\u540E\u518D\u4F20\u53C2</strong></p><p>\u5982\u679C\u6709\u9519\uFF0C\u6211\u8FD8\u8C08\u4EC0\u4E48\u7EE7\u7EED</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if (err) throw err
.....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u719F\u7EC3web\u670D\u52A1\u5668\u7684\u642D\u5EFA</p></li><li><p>\u4E86\u89E3\u5E76\u4E14\u77E5\u9053npm\u76F8\u5173\u6982\u5FF5</p></li><li><p>\u9884\u4E60\u7B2C5\u4E2A\u6B65\u9AA4express</p></li></ul><h2 id="day03\u4F5C\u4E1A" tabindex="-1"><a class="header-anchor" href="#day03\u4F5C\u4E1A" aria-hidden="true">#</a> day03\u4F5C\u4E1A</h2><ul><li>\u7ECF\u5178\u9762\u8BD5\u9898\uFF1A\u5C3D\u53EF\u80FD\u5168\u9762\u6BD4\u8F83 webStorage \u4EE5\u53CAcookie</li><li>\u719F\u8BB0 cookie \u4EE5\u53CA session \u7684\u533A\u522B</li><li>\u9884\u4E60 --- \u9884\u4E60\u7B14\u8BB0\u4E2D\u7B2C\u4E8C\u5929\u7B2C6\u70B9\u5F00\u59CB</li><li>\u597D\u597D\u7EC3\u4E60\u4ECA\u5929\u7684\u4EE3\u7801</li></ul>`,179);function on(rn,dn){const e=p("ExternalLinkIcon");return l(),c("div",null,[r,n("p",null,[d,n("a",u,[v,i(e)]),m]),k,n("h3",b,[h,g,n("a",x,[f,i(e)])]),w,n("h3",_,[y,q,n("a",j,[S,i(e)])]),N,n("h3",P,[I,D,n("a",R,[C,i(e)])]),E,n("h3",F,[M,z,n("a",A,[U,i(e)])]),B,n("h3",L,[J,H,n("a",T,[V,i(e)])]),W,n("h3",O,[$,Y,n("a",G,[K,i(e)])]),X,n("p",null,[Q,n("a",Z,[nn,i(e)]),sn]),an,n("p",null,[en,n("a",tn,[pn,i(e)]),ln]),cn])}var vn=t(o,[["render",on],["__file","node.html.vue"]]);export{vn as default};
