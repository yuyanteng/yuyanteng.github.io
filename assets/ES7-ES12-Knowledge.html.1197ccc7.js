import{_ as a,r as l,o as r,c as t,a as e,b as s,d as n,e as d}from"./app.b43460b0.js";const c={},o=e("h1",{id:"es7-es12\u7684\u77E5\u8BC6\u70B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#es7-es12\u7684\u77E5\u8BC6\u70B9","aria-hidden":"true"},"#"),n(" ES7-ES12\u7684\u77E5\u8BC6\u70B9")],-1),v={href:"https://juejin.cn/post/7046217976176967711",target:"_blank",rel:"noopener noreferrer"},u=n("2022\u5E74\u4E86\uFF0C\u8FD9\u4E9BES7-ES12\u7684\u77E5\u8BC6\u70B9\u4F60\u90FD\u638C\u63E1\u4E86\u561B\uFF1F - \u6398\u91D1"),m=d(`<h1 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h1><p>\u542C\u8BF4\u73B0\u5728\u5927\u5BB6\u5728\u5DE5\u4F5C\u4E2DES6\u8BED\u6CD5\u90FD\u5DF2\u7ECF\u7528\u7684\u7089\u706B\u7EAF\u9752\u4E86\uFF0C\u90A3ES7-ES12\u7684\u65B0\u7279\u6027\u4F60\u73B0\u5728\u90FD\u7528\u4E0A\u4E86\u561B\uFF1F\u5F88\u591A\u7684\u65B0\u7279\u6027\u5728\u5F00\u53D1\u4E2D\u8FD8\u662F\u5F88\u5B9E\u7528\u7684\uFF0C\u4E5F\u89E3\u51B3\u4E86\u5F88\u591Ajs\u5B58\u5728\u7684\u95EE\u9898\u3002\u81EA\u5DF1\u71AC\u591C\u7206\u809D\u4E00\u4E2A\u5468\u672B,\u603B\u7ED3\u51FA\u4E86ES7-ES12\u7684\u8BED\u6CD5\uFF0C\u5E0C\u671B\u5BF9\u4F60\u80FD\u6709\u4E00\u5B9A\u7684\u5E2E\u52A9\u3002\u6700\u540E\uFF0C\u4E86\u89E3\u771F\u76F8\uFF0C\u4F60\u624D\u80FD\u83B7\u5F97\u771F\u6B63\u7684\u81EA\u7531\uFF01</p><h1 id="\u4E00\u3001es2016-es7" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001es2016-es7" aria-hidden="true">#</a> \u4E00\u3001ES2016(ES7)</h1><h2 id="_1\u3001array-prototype-includes" tabindex="-1"><a class="header-anchor" href="#_1\u3001array-prototype-includes" aria-hidden="true">#</a> 1\u3001Array.prototype.includes()</h2><p><code>includes()</code>\xA0\u65B9\u6CD5\u7528\u6765\u5224\u65AD\u4E00\u4E2A\u6570\u7EC4\u662F\u5426\u5305\u542B\u4E00\u4E2A\u6307\u5B9A\u7684\u503C\uFF0C\u5982\u679C\u5305\u542B\u5219\u8FD4\u56DE\xA0<code>true</code>\uFF0C\u5426\u5219\u8FD4\u56DE\xA0<code>false</code>\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arr.includes(valueToFind[, fromIndex])
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>valueToFind</code>\uFF0C\u9700\u8981\u67E5\u627E\u7684\u5143\u7D20\u503C\u3002</p><p><code>fromIndex</code>\xA0\u53EF\u9009 \u4ECE<code>fromIndex</code>\xA0\u7D22\u5F15\u5904\u5F00\u59CB\u67E5\u627E\xA0<code>valueToFind</code>\u3002\u5982\u679C\u4E3A\u8D1F\u503C\uFF08\u5373\u4ECE\u672B\u5C3E\u5F00\u59CB\u5F80\u524D\u8DF3\xA0<code>fromIndex</code>\xA0\u7684\u7EDD\u5BF9\u503C\u4E2A\u7D22\u5F15\uFF0C\u7136\u540E\u5F80\u540E\u641C\u5BFB\uFF09\u3002\u9ED8\u8BA4\u4E3A 0\u3002</p><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [&#39;es6&#39;, &#39;es7&#39;, &#39;es8&#39;]
console.log(arr.includes(&#39;es7&#39;)) // true
console.log(arr.includes(&#39;es7&#39;, 1)) // true
console.log(arr.includes(&#39;es7&#39;, 2)) // false
console.log(arr.includes(&quot;es7&quot;, -1)); // false
console.log(arr.includes(&quot;es7&quot;, -2)); // true
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CE8\u610F\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u70B9" aria-hidden="true">#</a> \u6CE8\u610F\u70B9</h3><p>\u4F7F\u7528 <code>includes()</code>\u67E5\u627E\u5B57\u7B26\u4E32\u662F\u533A\u5206\u5927\u5C0F\u5199\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [&quot;es6&quot;, &quot;es7&quot;, &quot;es8&quot;, &quot;a&quot;];
console.log(arr.includes(&quot;A&quot;)); // false
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 <code>includes()</code>\u53EA\u80FD\u5224\u65AD\u7B80\u5355\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5BF9\u4E8E\u590D\u6742\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u6BD4\u5982\u5BF9\u8C61\u7C7B\u578B\u7684\u6570\u7EC4\uFF0C\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u8FD9\u4E9B\u662F\u65E0\u6CD5\u5224\u65AD\u7684.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [&#39;es6&#39;, [&#39;es7&#39;, &#39;es8&#39;], &#39;es9&#39;,{name:&quot;jimmy&quot;}]
console.log(arr.includes([&quot;es7&quot;, &quot;es8&quot;])); // false
console.log(arr.includes({name:&quot;jimmy&quot;})); // false
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u80FD\u8BC6\u522BNaN\uFF0CindexOf\u662F\u4E0D\u80FD\u8BC6\u522BNaN\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [&#39;es6&#39;, &#39;es7&#39;, NaN, &#39;es8&#39;]
console.log(arr.includes(NaN)) // true
console.log(arr.indexOf(NaN)) // -1
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\uFF0C\u5982\u679C\u53EA\u60F3\u77E5\u9053\u67D0\u4E2A\u503C\u662F\u5426\u5728\u6570\u7EC4\u4E2D\u5B58\u5728\uFF0C\u800C\u5E76\u4E0D\u5173\u5FC3\u5B83\u7684\u7D22\u5F15\u4F4D\u7F6E\uFF0C\u5EFA\u8BAE\u4F7F\u7528includes(),\u5982\u679C\u60F3\u83B7\u53D6\u4E00\u4E2A\u503C\u5728\u6570\u7EC4\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u90A3\u4E48\u4F7F\u7528indexOf\u65B9\u6CD5\u3002</p><h2 id="_2\u3001\u5E42\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5E42\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 2\u3001\u5E42\u8FD0\u7B97\u7B26 **</h2><p>\u6BD4\u5982\u6211\u4EEC\u60F3\u6C422\u768410\u6B21\u65B9\u3002</p><h3 id="\u81EA\u5DF1\u5199\u51FD\u6570\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5DF1\u5199\u51FD\u6570\u5B9E\u73B0" aria-hidden="true">#</a> \u81EA\u5DF1\u5199\u51FD\u6570\u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function pow(x, y) {
    let result = 1
    for (let i = 0; i &lt; y; i++) {
        result *= x
    }
    return result
}
console.log(pow(2, 10)) // 1024
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-pow" tabindex="-1"><a class="header-anchor" href="#math-pow" aria-hidden="true">#</a> Math.pow()</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(Math.pow(2, 10)); // 1024
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E42\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5E42\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u5E42\u8FD0\u7B97\u7B26 **</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(2 ** 10); // 1024
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u57FA\u672C\u6C42\u5E42</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2 ** 3   // 8
3 ** 2   // 9
3 ** 2.5 // 15.588457268119896
10 ** -1 // 0.1
NaN ** 2 // NaN
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F</strong></p><p>\u5E42\u8FD0\u7B97\u7B26\u7684\u4E24\u4E2A*\u53F7\u4E4B\u95F4\u4E0D\u80FD\u51FA\u73B0\u7A7A\u683C\uFF0C\u5426\u5219\u8BED\u6CD5\u4F1A\u62A5\u9519\u3002</p><h1 id="\u4E8C\u3001es2017-es8" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001es2017-es8" aria-hidden="true">#</a> \u4E8C\u3001ES2017(ES8)</h1><h2 id="_1\u3001object-values" tabindex="-1"><a class="header-anchor" href="#_1\u3001object-values" aria-hidden="true">#</a> 1\u3001Object.values()</h2><p><code>Object.values</code> \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6210\u5458\u662F\u53C2\u6570\u5BF9\u8C61\u81EA\u8EAB\u7684\uFF08\u4E0D\u542B\u7EE7\u627F\u7684\uFF09\u6240\u6709\u53EF\u904D\u5386\uFF08enumerable\uFF09\u5C5E\u6027\u7684\u952E\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const obj = {
  name: &quot;jimmy&quot;,
  age: 18,
  height: 188,
};
console.log(Object.values(obj)); // [ &#39;jimmy&#39;, 18, 188 ]
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2\u3001object-entries" tabindex="-1"><a class="header-anchor" href="#_2\u3001object-entries" aria-hidden="true">#</a> 2\u3001Object.entries()</h2><p>Object.entries() \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6210\u5458\u662F\u53C2\u6570\u5BF9\u8C61\u81EA\u8EAB\u7684\uFF08\u4E0D\u542B\u7EE7\u627F\u7684\uFF09\u6240\u6709\u53EF\u904D\u5386\u5C5E\u6027\u7684\u952E\u503C\u5BF9\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const obj = {
  name: &quot;jimmy&quot;,
  age: 18,
  height: 188,
};
console.log(Object.entries(obj)); // [ [ &#39;name&#39;, &#39;jimmy&#39; ], [ &#39;age&#39;, 18 ], [ &#39;height&#39;, 188 ] ]
console.log(Object.entries([1, 2, 3])); // [ [ &#39;0&#39;, 1 ], [ &#39;1&#39;, 2 ], [ &#39;2&#39;, 3 ] ]
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3\u3001object-getownpropertydescriptors" tabindex="-1"><a class="header-anchor" href="#_3\u3001object-getownpropertydescriptors" aria-hidden="true">#</a> 3\u3001Object.getOwnPropertyDescriptors()</h2><p><code>Object.getOwnPropertyDescriptors()</code> \xA0\u65B9\u6CD5\u7528\u6765\u83B7\u53D6\u4E00\u4E2A\u5BF9\u8C61\u7684\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const obj = {
  name: &quot;jimmy&quot;,
  age: 18,
};
const desc = Object.getOwnPropertyDescriptors(obj);
console.log(desc);
// \u6253\u5370\u7ED3\u679C
{
  name: {
    value: &#39;jimmy&#39;,
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
   value: 18,
   writable: true,
   enumerable: true,
   configurable: true
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u6253\u5370\u7ED3\u679C\u4E2D\u7684</p><ul><li><code>value</code>\u8868\u793A\u5F53\u524D\u5BF9\u8C61\u7684\u9ED8\u8BA4\u503C</li><li><code>writable</code>\u8868\u793A\u5BF9\u8C61\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u4FEE\u6539</li><li><code>enumerable</code>\u8868\u793A\u5F53\u524D\u8FD9\u4E2A\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u51FA\u73B0\u5728\u5BF9\u8C61\u7684\u679A\u4E3E\u5C5E\u6027\u4E2D</li><li><code>configurable</code>\u8868\u793A\u5F53\u524D\u5BF9\u8C61\u7684\u5C5E\u6027\u80FD\u5426\u7528delete\u5220\u9664</li></ul><p>\u90A3\u8FD9\u4E9B\u5BF9\u8C61\u7684\u5C5E\u6027\u6211\u4EEC\u600E\u4E48\u8BBE\u7F6E\u548C\u4FEE\u6539\u4ED6\u4EEC\u5462\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528es5\u7684 <code>Object.defineProperty()</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const obj = {};
Object.defineProperty(obj, &quot;name&quot;, {
  value: &quot;jimmy&quot;,
  writable: true,
  configurable: true,
  enumerable: true,
});
Object.defineProperty(obj, &quot;age&quot;, {
  value: 34,
  writable: true,
  configurable: true,
  enumerable: true,
});
console.log(obj); // { name: &#39;jimmy&#39;, age: 34 }
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6F14\u793A\u4E0B\uFF0C\u4E00\u4E9B\u5C5E\u6027\u8BBE\u7F6E\u4E3Afalse\u7684\u60C5\u51B5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const obj = {};
Object.defineProperty(obj, &quot;name&quot;, {
  value: &quot;jimmy&quot;,
  writable: false,
  configurable: false,
  enumerable: true,
});
console.log(obj); // { name: &#39;jimmy&#39; }
obj.name = &quot;chimmy&quot;;
console.log(obj); // { name: &#39;jimmy&#39; }
delete obj.name
console.log(obj); // { name: &#39;jimmy&#39; }
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u8BBE\u7F6E writable: false\u548Cconfigurable: false,\u4E3Afalse\u65F6\uFF0C\u5BF9\u8C61\u7684name\u5BF9\u8C61\u7684\u503C\u4E0D\u80FD\u6539\u53D8\u548C\u4E0D\u80FD\u88AB\u5220\u9664\uFF0C\u6253\u5370\u51FA\u6765\u8FD8\u662F\u539F\u6765\u7684\u5BF9\u8C61\u3002</p><p><strong>\u8BBE\u7F6Eenumerable\u4E3Afalse\u65F6</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const obj = {};
Object.defineProperty(obj, &quot;name&quot;, {
  value: &quot;jimmy&quot;,
  writable: true,
  configurable: true,
  enumerable: false,
});
console.log(obj); // { }
for (let key in obj) {
  console.log(key); // &quot;&quot;
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u8BBE\u7F6Eenumerable: false\u65F6\uFF0C\u8868\u793A\u5BF9\u8C61\u7684\u5C5E\u6027\u4E0D\u53EF\u88AB\u679A\u4E3E\uFF0C\u8FD9\u65F6\u6253\u5370\u5BF9\u8C61\u4E3A\u7A7A\uFF0C\u904D\u5386\u5BF9\u8C61\u7684\u952E\u4E5F\u4E3A\u7A7A\u3002</p><h2 id="_4\u3001string-prototype-padstart" tabindex="-1"><a class="header-anchor" href="#_4\u3001string-prototype-padstart" aria-hidden="true">#</a> 4\u3001String.prototype.padStart</h2><p>\u628A\u6307\u5B9A\u5B57\u7B26\u4E32\u586B\u5145\u5230\u5B57\u7B26\u4E32\u5934\u90E8\uFF0C\u8FD4\u56DE\u65B0\u5B57\u7B26\u4E32\u3002</p><h3 id="\u8BED\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5-1" aria-hidden="true">#</a> \u8BED\u6CD5</h3><p>str.padStart(targetLength [, padString])</p><ul><li><code>targetLength</code></li></ul><p>\u5F53\u524D\u5B57\u7B26\u4E32\u9700\u8981\u586B\u5145\u5230\u7684\u76EE\u6807\u957F\u5EA6\u3002\u5982\u679C\u8FD9\u4E2A\u6570\u503C\u5C0F\u4E8E\u5F53\u524D\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u5219\u8FD4\u56DE\u5F53\u524D\u5B57\u7B26\u4E32\u672C\u8EAB\u3002</p><ul><li><code>padString</code>\xA0\u53EF\u9009</li></ul><p>\u586B\u5145\u5B57\u7B26\u4E32\u3002\u5982\u679C\u5B57\u7B26\u4E32\u592A\u957F\uFF0C\u4F7F\u586B\u5145\u540E\u7684\u5B57\u7B26\u4E32\u957F\u5EA6\u8D85\u8FC7\u4E86\u76EE\u6807\u957F\u5EA6\uFF0C\u5219\u53EA\u4FDD\u7559\u6700\u5DE6\u4FA7\u7684\u90E8\u5206\uFF0C\u5176\u4ED6\u90E8\u5206\u4F1A\u88AB\u622A\u65AD\u3002\u6B64\u53C2\u6570\u7684\u9ED8\u8BA4\u503C\u4E3A &quot; &quot;</p><h3 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;abc&#39;.padStart(10);         // &quot;       abc&quot;
&#39;abc&#39;.padStart(10, &quot;foo&quot;);  // &quot;foofoofabc&quot;
&#39;abc&#39;.padStart(6,&quot;123465&quot;); // &quot;123abc&quot;
&#39;abc&#39;.padStart(8, &quot;0&quot;);     // &quot;00000abc&quot;
&#39;abc&#39;.padStart(1);          // &quot;abc&quot;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u5E94\u7528\u573A\u666F</h3><p>\u65E5\u671F\u683C\u5F0F\u5316\uFF1Ayyyy-mm-dd\u7684\u683C\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const now = new Date()
const year = now.getFullYear()
// \u6708\u4EFD\u548C\u65E5\u671F \u5982\u679C\u662F\u4E00\u4F4D\u524D\u9762\u7ED9\u5B83\u586B\u5145\u4E00\u4E2A0
const month = (now.getMonth() + 1).toString().padStart(2, &#39;0&#39;)
const day = (now.getDate()).toString().padStart(2, &#39;0&#39;)
console.log(year, month, day)
console.log( \`\${year}-\${month}-\${day}\` ) //\u8F93\u5165\u4ECA\u5929\u7684\u65E5\u671F 2021-12-31
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6570\u5B57\u66FF\u6362(\u624B\u673A\u53F7\uFF0C\u94F6\u884C\u5361\u53F7\u7B49\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const tel = &#39;18781268679&#39;
const newTel = tel.slice(-4).padStart(tel.length, &#39;*&#39;)
console.log(newTel) // *******5678
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5\u3001string-prototype-padend" tabindex="-1"><a class="header-anchor" href="#_5\u3001string-prototype-padend" aria-hidden="true">#</a> 5\u3001String.prototype.padEnd</h2><p>\u628A\u6307\u5B9A\u5B57\u7B26\u4E32\u586B\u5145\u5230\u5B57\u7B26\u4E32\u5C3E\u90E8\uFF0C\u8FD4\u56DE\u65B0\u5B57\u7B26\u4E32\u3002</p><p>\u8BED\u6CD5\u540C\u4E0A</p><h3 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;abc&#39;.padEnd(10);          // &quot;abc       &quot;
&#39;abc&#39;.padEnd(10, &quot;foo&quot;);   // &quot;abcfoofoof&quot;
&#39;abc&#39;.padEnd(6, &quot;123456&quot;); // &quot;abc123&quot;
&#39;abc&#39;.padEnd(1);           // &quot;abc&quot;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E94\u7528\u573A\u666F-1" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u573A\u666F-1" aria-hidden="true">#</a> \u5E94\u7528\u573A\u666F</h3><p>\u5728JS\u524D\u7AEF\u6211\u4EEC\u5904\u7406\u65F6\u95F4\u6233\u7684\u65F6\u5019\u5355\u4F4D\u662Fms\u6BEB\u79D2\uFF0C\u4F46\u662F\uFF0C\u540E\u7AEF\u540C\u5B66\u8FD4\u56DE\u7684\u65F6\u95F4\u6233\u5219\u4E0D\u4E00\u6837\u662F\u6BEB\u79D2\uFF0C\u53EF\u80FD\u53EA\u670910\u4F4D\uFF0C\u4EE5s\u79D2\u4E3A\u5355\u4F4D\u3002\u6240\u4EE5\uFF0C\u6211\u4EEC\u5728\u524D\u7AEF\u5904\u7406\u8FD9\u4E2A\u65F6\u95F4\u6233\u7684\u65F6\u5019\uFF0C\u4FDD\u9669\u8D77\u89C1\uFF0C\u8981\u5148\u505A\u4E00\u4E2A13\u4F4D\u7684\u8865\u5168\uFF0C\u4FDD\u8BC1\u5355\u4F4D\u662F\u6BEB\u79D2\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4F2A\u4EE3\u7801
console.log(new Date().getTime()) // \u65F6\u95F4\u6233 13\u4F4D\u7684
timestamp = +String(timestamp).padEnd(13, &#39;0&#39;)
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6\u3001\u5C3E\u9017\u53F7-trailing-commas" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u5C3E\u9017\u53F7-trailing-commas" aria-hidden="true">#</a> 6\u3001\u5C3E\u9017\u53F7 Trailing commas</h2><p>ES8 \u5141\u8BB8\u51FD\u6570\u7684\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u6709\u5C3E\u9017\u53F7\uFF08Trailing comma\uFF09\u3002 \u6B64\u524D\uFF0C\u51FD\u6570\u5B9A\u4E49\u548C\u8C03\u7528\u65F6\uFF0C\u90FD\u4E0D\u5141\u8BB8\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u540E\u9762\u51FA\u73B0\u9017\u53F7\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function clownsEverywhere(
    param1,
    param2
) {
    /* ... */
}

clownsEverywhere(
    &#39;foo&#39;,
    &#39;bar&#39;
)
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5982\u679C\u5728param2\u6216bar\u540E\u9762\u52A0\u4E00\u4E2A\u9017\u53F7\uFF0C\u5C31\u4F1A\u62A5\u9519\u3002</p><p>\u5982\u679C\u50CF\u4E0A\u9762\u8FD9\u6837\uFF0C\u5C06\u53C2\u6570\u5199\u6210\u591A\u884C\uFF08\u5373\u6BCF\u4E2A\u53C2\u6570\u5360\u636E\u4E00\u884C\uFF09\uFF0C\u4EE5\u540E\u4FEE\u6539\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u60F3\u4E3A\u51FD\u6570clownsEverywhere\u6DFB\u52A0\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u6216\u8005\u8C03\u6574\u53C2\u6570\u7684\u6B21\u5E8F\uFF0C\u5C31\u52BF\u5FC5\u8981\u5728\u539F\u6765\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u540E\u9762\u6DFB\u52A0\u4E00\u4E2A\u9017\u53F7\u3002\u8FD9\u5BF9\u4E8E\u7248\u672C\u7BA1\u7406\u7CFB\u7EDF\u6765\u8BF4\uFF0C\u5C31\u4F1A\u663E\u793A\u6DFB\u52A0\u9017\u53F7\u7684\u90A3\u4E00\u884C\u4E5F\u53D1\u751F\u4E86\u53D8\u52A8\u3002\u8FD9\u770B\u4E0A\u53BB\u6709\u70B9\u5197\u4F59\uFF0C\u56E0\u6B64\u65B0\u7684\u8BED\u6CD5\u5141\u8BB8\u5B9A\u4E49\u548C\u8C03\u7528\u65F6\uFF0C\u5C3E\u90E8\u76F4\u63A5\u53EF\u4EE5\u52A0\u4E0A\u4E00\u4E2A\u9017\u53F7\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function clownsEverywhere(
    param1,
    param2,
) {
    /* ... */
}

clownsEverywhere(
    &#39;foo&#39;,
    &#39;bar&#39;,
)
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u7684\u89C4\u5B9A\u4E5F\u4F7F\u5F97\uFF0C\u51FD\u6570\u53C2\u6570\u4E0E\u6570\u7EC4\u548C\u5BF9\u8C61\u7684\u5C3E\u9017\u53F7\u89C4\u5219\uFF0C\u4FDD\u6301\u4E00\u81F4\u4E86\u3002</p><h2 id="_7\u3001async-await" tabindex="-1"><a class="header-anchor" href="#_7\u3001async-await" aria-hidden="true">#</a> 7\u3001async/await</h2><h3 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h3><p>\u6211\u4EEC\u90FD\u77E5\u9053\u4F7F\u7528 Promise \u80FD\u5F88\u597D\u5730\u89E3\u51B3\u56DE\u8C03\u5730\u72F1\u7684\u95EE\u9898\uFF0C\u4F46\u5982\u679C\u5904\u7406\u6D41\u7A0B\u6BD4\u8F83\u590D\u6742\u7684\u8BDD\uFF0C\u90A3\u4E48\u6574\u6BB5\u4EE3\u7801\u5C06\u5145\u65A5\u7740 then\uFF0C\u8BED\u4E49\u5316\u4E0D\u660E\u663E\uFF0C\u4EE3\u7801\u4E0D\u80FD\u5F88\u597D\u5730\u8868\u793A\u6267\u884C\u6D41\u7A0B\uFF0C\u90A3\u6709\u6CA1\u6709\u6BD4 Promise \u66F4\u4F18\u96C5\u7684\u5F02\u6B65\u65B9\u5F0F\u5462\uFF1F\u90A3\u5C31\u662Fasync/await\uFF01\u6211\u4EEC\u4E00\u8D77\u6765\u63ED\u5F00\u5B83\u795E\u79D8\u7684\u9762\u6492\u5427\uFF01</p><p>\u524D\u9762\u6DFB\u52A0\u4E86async\u7684\u51FD\u6570\u5728\u6267\u884C\u540E\u90FD\u4F1A\u81EA\u52A8\u8FD4\u56DE\u4E00\u4E2APromise\u5BF9\u8C61:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function foo() {
    return &#39;jimmy&#39;
}
console.log(foo()) // &#39;jimmy&#39;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0async\u540E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function foo() {
    return &#39;jimmy&#39; // Promise.resolve(&#39;jimmy&#39;)
}
console.log(foo()) // Promise
foo()
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>async\u51FD\u6570\u4E2D\u4F7F\u7528await\uFF0C\u90A3\u4E48await\u8FD9\u91CC\u7684\u4EE3\u7801\u5C31\u4F1A\u53D8\u6210\u540C\u6B65\u7684\u4E86\uFF0C\u610F\u601D\u5C31\u662F\u8BF4\u53EA\u6709\u7B49await\u540E\u9762\u7684Promise\u6267\u884C\u5B8C\u6210\u5F97\u5230\u7ED3\u679C\u624D\u4F1A\u7EE7\u7EED\u4E0B\u53BB\uFF0Cawait\u5C31\u662F\u7B49\u5F85\u3002\u8BF7\u770B\u4E0B\u9762\u7684\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function timeout() {
    return new Promise(resolve =&gt; {
        setTimeout(() =&gt; {
            console.log(1)
            resolve()
        }, 1000)
    })
}

// \u4E0D\u52A0async\u548Cawait\u662F2\u30011   \u52A0\u4E86\u662F1\u30012
async function foo() {
    await timeout()
    console.log(2)
}
foo()
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h3><p>\u5047\u5982\u6709\u8FD9\u6837\u4E00\u4E2A\u4F7F\u7528\u573A\u666F\uFF1A\u9700\u8981\u5148\u8BF7\u6C42 a \u94FE\u63A5\uFF0C\u7B49\u8FD4\u56DE\u4FE1\u606F\u4E4B\u540E\uFF0C\u518D\u8BF7\u6C42 b \u94FE\u63A5\u7684\u53E6\u5916\u4E00\u4E2A\u8D44\u6E90\u3002\u4E0B\u9762\u4EE3\u7801\u5C55\u793A\u7684\u662F\u4F7F\u7528 fetch \u6765\u5B9E\u73B0\u8FD9\u6837\u7684\u9700\u6C42\uFF0Cfetch \u88AB\u5B9A\u4E49\u5728 window \u5BF9\u8C61\u4E2D\uFF0C\u5B83\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A Promise \u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>fetch(&#39;https://blog.csdn.net/&#39;)
  .then(response =&gt; {
    console.log(response)
    return fetch(&#39;https://juejin.im/&#39;)
  })
  .then(response =&gt; {
    console.log(response)
  })
  .catch(error =&gt; {
    console.log(error)
  })
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u867D\u7136\u4E0A\u8FF0\u4EE3\u7801\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u4E2A\u9700\u6C42\uFF0C\u4F46\u8BED\u4E49\u5316\u4E0D\u660E\u663E\uFF0C\u4EE3\u7801\u4E0D\u80FD\u5F88\u597D\u5730\u8868\u793A\u6267\u884C\u6D41\u7A0B\u3002\u57FA\u4E8E\u8FD9\u4E2A\u539F\u56E0\uFF0CES8 \u5F15\u5165\u4E86 async/await\uFF0C\u8FD9\u662F JavaScript \u5F02\u6B65\u7F16\u7A0B\u7684\u4E00\u4E2A\u91CD\u5927\u6539\u8FDB\uFF0C\u63D0\u4F9B\u4E86\u5728\u4E0D\u963B\u585E\u4E3B\u7EBF\u7A0B\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\u540C\u6B65\u4EE3\u7801\u5B9E\u73B0\u5F02\u6B65\u8BBF\u95EE\u8D44\u6E90\u7684\u80FD\u529B\uFF0C\u5E76\u4E14\u4F7F\u5F97\u4EE3\u7801\u903B\u8F91\u66F4\u52A0\u6E05\u6670\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function foo () {
  try {
    let response1 = await fetch(&#39;https://blog.csdn.net/&#39;)
    console.log(response1)
    let response2 = await fetch(&#39;https://juejin.im/&#39;)
    console.log(response2)
  } catch (err) {
    console.error(err)
  }
}
foo()
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u4E0A\u9762\u4EE3\u7801\uFF0C\u4F60\u4F1A\u53D1\u73B0\u6574\u4E2A\u5F02\u6B65\u5904\u7406\u7684\u903B\u8F91\u90FD\u662F\u4F7F\u7528\u540C\u6B65\u4EE3\u7801\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u7684\uFF0C\u800C\u4E14\u8FD8\u652F\u6301 try catch \u6765\u6355\u83B7\u5F02\u5E38\uFF0C\u8FD9\u611F\u89C9\u5C31\u5728\u5199\u540C\u6B65\u4EE3\u7801\uFF0C\u6240\u4EE5\u662F\u975E\u5E38\u7B26\u5408\u4EBA\u7684\u7EBF\u6027\u601D\u7EF4\u7684\u3002</p><h3 id="\u6CE8\u610F\u70B9-1" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u70B9-1" aria-hidden="true">#</a> \u6CE8\u610F\u70B9</h3><ul><li>await \u53EA\u80FD\u5728 async \u6807\u8BB0\u7684\u51FD\u6570\u5185\u90E8\u4F7F\u7528\uFF0C\u5355\u72EC\u4F7F\u7528\u4F1A\u89E6\u53D1 Syntax error\u3002</li><li>await\u540E\u9762\u9700\u8981\u8DDF\u5F02\u6B65\u64CD\u4F5C\uFF0C\u4E0D\u7136\u5C31\u6CA1\u6709\u610F\u4E49\uFF0C\u800C\u4E14await\u540E\u9762\u7684Promise\u5BF9\u8C61\u4E0D\u5FC5\u5199then\uFF0C\u56E0\u4E3Aawait\u7684\u4F5C\u7528\u4E4B\u4E00\u5C31\u662F\u83B7\u53D6\u540E\u9762Promise\u5BF9\u8C61\u6210\u529F\u72B6\u6001\u4F20\u9012\u51FA\u6765\u7684\u53C2\u6570\u3002</li></ul><h3 id="async-await\u7684\u7F3A\u9677" tabindex="-1"><a class="header-anchor" href="#async-await\u7684\u7F3A\u9677" aria-hidden="true">#</a> async/await\u7684\u7F3A\u9677</h3><p>\u4E86\u89E3<code>Async/await</code>\u662F\u975E\u5E38\u6709\u7528\u7684\uFF0C\u4F46\u8FD8\u6709\u4E00\u4E9B\u7F3A\u70B9\u9700\u8981\u8003\u8651\u3002</p><p><code>Async/await</code>\xA0\u8BA9\u4F60\u7684\u4EE3\u7801\u770B\u8D77\u6765\u662F\u540C\u6B65\u7684\uFF0C\u5728\u67D0\u79CD\u7A0B\u5EA6\u4E0A\uFF0C\u4E5F\u4F7F\u5F97\u5B83\u7684\u884C\u4E3A\u66F4\u52A0\u5730\u540C\u6B65\u3002\xA0<code>await</code>\xA0\u5173\u952E\u5B57\u4F1A\u963B\u585E\u5176\u540E\u7684\u4EE3\u7801\uFF0C\u76F4\u5230promise\u5B8C\u6210\uFF0C\u5C31\u50CF\u6267\u884C\u540C\u6B65\u64CD\u4F5C\u4E00\u6837\u3002\u5B83\u786E\u5B9E\u53EF\u4EE5\u5141\u8BB8\u5176\u4ED6\u4EFB\u52A1\u5728\u6B64\u671F\u95F4\u7EE7\u7EED\u8FD0\u884C\uFF0C\u4F46\u60A8\u81EA\u5DF1\u7684\u4EE3\u7801\u88AB\u963B\u585E\u3002</p><p>\u8FD9\u610F\u5473\u7740\u60A8\u7684\u4EE3\u7801\u53EF\u80FD\u4F1A\u56E0\u4E3A\u5927\u91CF<code>await</code>\u7684promises\u76F8\u7EE7\u53D1\u751F\u800C\u53D8\u6162\u3002\u6BCF\u4E2A<code>await</code>\u90FD\u4F1A\u7B49\u5F85\u524D\u4E00\u4E2A\u5B8C\u6210\uFF0C\u800C\u4F60\u5B9E\u9645\u60F3\u8981\u7684\u662F\u6240\u6709\u7684\u8FD9\u4E9Bpromises\u540C\u65F6\u5F00\u59CB\u5904\u7406\uFF08\u5C31\u50CF\u6211\u4EEC\u6CA1\u6709\u4F7F\u7528<code>async/await</code>\u65F6\u90A3\u6837\uFF09\u3002</p>`,102),b=n("\u6709\u4E00\u79CD\u6A21\u5F0F\u53EF\u4EE5\u7F13\u89E3\u8FD9\u4E2A\u95EE\u9898\u2014\u2014\u901A\u8FC7\u5C06\xA0"),p=e("code",null,"Promise",-1),h=n("\xA0\u5BF9\u8C61\u5B58\u50A8\u5728\u53D8\u91CF\u4E2D\u6765\u540C\u65F6\u5F00\u59CB\u5B83\u4EEC\uFF0C\u7136\u540E\u7B49\u5F85\u5B83\u4EEC\u5168\u90E8\u6267\u884C\u5B8C\u6BD5\u3002\u5982\u679C\u60F3\u66F4\u52A0\u6DF1\u5165\u7684\u4E86\u89E3\uFF0C\u8BF7\u53C2\u8003 "),g={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FLearn%2FJavaScript%2FAsynchronous%2FAsync_await%23asyncawait%25E7%259A%2584%25E7%25BC%25BA%25E9%2599%25B7",target:"_blank",rel:"noopener noreferrer"},x=n("MDN"),f=d(`<h1 id="\u4E09\u3001es2018-es9" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001es2018-es9" aria-hidden="true">#</a> \u4E09\u3001ES2018(ES9)</h1><h2 id="_1\u3001object-rest-spread" tabindex="-1"><a class="header-anchor" href="#_1\u3001object-rest-spread" aria-hidden="true">#</a> 1\u3001Object Rest &amp; Spread</h2><p>\u5728 ES9 \u65B0\u589E Object \u7684 Rest &amp; Spread \u65B9\u6CD5\uFF0C\u76F4\u63A5\u770B\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const input = {
  a: 1,
  b: 2,
  c: 3,
}

const output = {
  ...input,
  c: 4
}

console.log(output) // {a: 1, b: 2, c: 4}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5757\u4EE3\u7801\u5C55\u793A\u4E86 spread \u8BED\u6CD5\uFF0C\u53EF\u4EE5\u628A input \u5BF9\u8C61\u7684\u6570\u636E\u90FD\u62D3\u5C55\u5230 output \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u529F\u80FD\u5F88\u5B9E\u7528\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C<strong>\u5982\u679C\u5B58\u5728\u76F8\u540C\u7684\u5C5E\u6027\u540D\uFF0C\u53EA\u6709\u6700\u540E\u4E00\u4E2A\u4F1A\u751F\u6548</strong>\u3002</p><h3 id="\u6CE8\u610F\u70B9-2" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u70B9-2" aria-hidden="true">#</a> \u6CE8\u610F\u70B9</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const obj = { x: { y: 10 } };
const copy1 = { ...obj };
const copy2 = { ...obj };
obj.x.y = &quot;jimmy&quot;;
console.log(copy1, copy2); // x: {y: &quot;jimmy&quot;} x: {y: &quot;jimmy&quot;}
console.log(copy1.x === copy2.x); // \u2192 true
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5C5E\u6027\u7684\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\u7684\u8BDD\uFF0C\u8BE5\u5BF9\u8C61\u7684\u5F15\u7528\u4F1A\u88AB\u62F7\u8D1D\uFF0C\u800C\u4E0D\u662F\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u3002</p><p>\u6211\u4EEC\u518D\u6765\u770B\u4E0B <code>Object rest</code> \u7684\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const input = {
  a: 1,
  b: 2,
  c: 3
}

let { a, ...rest } = input

console.log(a, rest) // 1 {b: 2, c: 3}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u5BF9\u8C61 key-value \u4E0D\u786E\u5B9A\u7684\u65F6\u5019\uFF0C\u628A\u5FC5\u9009\u7684 key \u8D4B\u503C\u7ED9\u53D8\u91CF\uFF0C\u7528\u4E00\u4E2A\u53D8\u91CF\u6536\u655B\u5176\u4ED6\u53EF\u9009\u7684 key \u6570\u636E\uFF0C\u8FD9\u5728\u4E4B\u524D\u662F\u505A\u4E0D\u5230\u7684\u3002\u6CE8\u610F\uFF0C<strong>rest \u5C5E\u6027\u5FC5\u987B\u59CB\u7EC8\u51FA\u73B0\u5728\u5BF9\u8C61\u7684\u672B\u5C3E</strong>\uFF0C\u5426\u5219\u5C06\u629B\u51FA\u9519\u8BEF\u3002</p><h2 id="_2\u3001for-await-of" tabindex="-1"><a class="header-anchor" href="#_2\u3001for-await-of" aria-hidden="true">#</a> 2\u3001for await of</h2><p>\u5F02\u6B65\u8FED\u4EE3\u5668(for-await-of)\uFF1A\u5FAA\u73AF\u7B49\u5F85\u6BCF\u4E2APromise\u5BF9\u8C61\u53D8\u4E3Aresolved\u72B6\u6001\u624D\u8FDB\u5165\u4E0B\u4E00\u6B65\u3002</p><p>\u6211\u4EEC\u77E5\u9053 for...of \u662F\u540C\u6B65\u8FD0\u884C\u7684\uFF0C\u770B\u5982\u4E0B\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function TimeOut(time){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(time)
        }, time)
    })
}

async function test() {
    let arr = [TimeOut(2000), TimeOut(1000), TimeOut(3000)]
    for (let item of arr) {
     console.log(Date.now(),item.then(console.log))
    }
}

test()
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u6253\u5370\u7ED3\u679C\u5982\u4E0B\u56FE</p>`,16),y={href:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e9770e5600d0455c987be604f0d623cb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?",target:"_blank",rel:"noopener noreferrer"},q=n("https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e9770e5600d0455c987be604f0d623cb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?"),_=d(`<p>\u4E0A\u8FF0\u4EE3\u7801\u8BC1\u5B9E\u4E86 for of \u65B9\u6CD5\u4E0D\u80FD\u904D\u5386\u5F02\u6B65\u8FED\u4EE3\u5668\uFF0C\u5F97\u5230\u7684\u7ED3\u679C\u5E76\u4E0D\u662F\u6211\u4EEC\u6240\u671F\u5F85\u7684\uFF0C\u4E8E\u662F for await of \u5C31\u7C89\u58A8\u767B\u573A\u5566\uFF01</p><p><strong>ES9 \u4E2D\u53EF\u4EE5\u7528 for...await...of \u7684\u8BED\u6CD5\u6765\u64CD\u4F5C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function TimeOut(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(time)
        }, time)
    })
}

async function test() {
    let arr = [TimeOut(2000), TimeOut(1000), TimeOut(3000)]
    for await (let item of arr) {
        console.log(Date.now(), item)
    }
}
test()
// 1560092345730 2000
// 1560092345730 1000
// 1560092346336 3000

\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for await of \u73AF\u7B49\u5F85\u6BCF\u4E2APromise\u5BF9\u8C61\u53D8\u4E3Aresolved\u72B6\u6001\u624D\u8FDB\u5165\u4E0B\u4E00\u6B65\u3002\u6240\u6709\u6253\u5370\u7684\u7ED3\u679C\u4E3A 2000\uFF0C1000\uFF0C3000</p><h2 id="_3\u3001promise-prototype-finally" tabindex="-1"><a class="header-anchor" href="#_3\u3001promise-prototype-finally" aria-hidden="true">#</a> 3\u3001Promise.prototype.finally()</h2><p>Promise.prototype.finally() \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2APromise\uFF0C\u5728promise\u6267\u884C\u7ED3\u675F\u65F6\uFF0C\u65E0\u8BBA\u7ED3\u679C\u662Ffulfilled\u6216\u8005\u662Frejected\uFF0C\u5728\u6267\u884Cthen()\u548Ccatch()\u540E\uFF0C\u90FD\u4F1A\u6267\u884Cfinally\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u3002\u8FD9\u4E3A\u6307\u5B9A\u6267\u884C\u5B8Cpromise\u540E\uFF0C\u65E0\u8BBA\u7ED3\u679C\u662Ffulfilled\u8FD8\u662Frejected\u90FD\u9700\u8981\u6267\u884C\u7684\u4EE3\u7801\u63D0\u4F9B\u4E86\u4E00\u79CD\u65B9\u5F0F\uFF0C\u907F\u514D\u540C\u6837\u7684\u8BED\u53E5\u9700\u8981\u5728then()\u548Ccatch()\u4E2D\u5404\u5199\u4E00\u6B21\u7684\u60C5\u51B5\u3002</p><h3 id="\u793A\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-3" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
        resolve(&#39;success&#39;)
        // reject(&#39;fail&#39;)
    }, 1000)
}).then(res =&gt; {
    console.log(res)
}).catch(err =&gt; {
    console.log(err)
}).finally(() =&gt; {
    console.log(&#39;finally&#39;)
})
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u573A\u666F-1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F-1" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h3><p><strong>loading\u5173\u95ED</strong></p><p>\u9700\u8981\u6BCF\u6B21\u53D1\u9001\u8BF7\u6C42\uFF0C\u90FD\u4F1A\u6709loading\u63D0\u793A\uFF0C\u8BF7\u6C42\u53D1\u9001\u5B8C\u6BD5\uFF0C\u5C31\u9700\u8981\u5173\u95EDloading\u63D0\u793A\u6846\uFF0C\u4E0D\u7136\u754C\u9762\u5C31\u65E0\u6CD5\u88AB\u70B9\u51FB\u3002\u4E0D\u7BA1\u8BF7\u6C42\u6210\u529F\u6216\u662F\u5931\u8D25\uFF0C\u8FD9\u4E2Aloading\u90FD\u9700\u8981\u5173\u95ED\u6389\uFF0C\u8FD9\u65F6\u628A\u5173\u95EDloading\u7684\u4EE3\u7801\u5199\u5728finally\u91CC\u518D\u5408\u9002\u4E0D\u8FC7\u4E86</p><h2 id="_4\u3001string-\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#_4\u3001string-\u6269\u5C55" aria-hidden="true">#</a> 4\u3001String \u6269\u5C55</h2><p>\u653E\u677E\u5BF9\u6807\u7B7E\u6A21\u677F\u91CC\u5B57\u7B26\u4E32\u8F6C\u4E49\u7684\u9650\u5236, \u9047\u5230\u4E0D\u5408\u6CD5\u7684\u5B57\u7B26\u4E32\u8F6C\u4E49\u4F1A\u8FD4\u56DEundefined\uFF0C\u5E76\u4E14\u4ECEraw\u4E0A\u53EF\u83B7\u53D6\u539F\u5B57\u7B26\u4E32\u3002</p>`,13),j=n("\u4E0B\u9762\u662F\u4E00\u4E2Aes6 \u7684\u6807\u7B7E\u6A21\u677F \u5982\u679C\u5BF9\u8FD9\u4E2A\u8BED\u6CD5\u611F\u5230\u964C\u751F\uFF0C\u8BF7\u53C2\u8003 "),w={href:"https://link.juejin.cn/?target=https%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fstring%23%25E6%25A0%2587%25E7%25AD%25BE%25E6%25A8%25A1%25E6%259D%25BF",target:"_blank",rel:"noopener noreferrer"},S=n("\u6807\u7B7E\u6A21\u677F"),E=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const foo = (a, b, c) =&gt; {
    console.log(a)
    console.log(b)
    console.log(c)
}
const name = &#39;jimmy&#39;
const age = 18
foo \`\u8FD9\u662F\${name},\u4ED6\u7684\u5E74\u9F84\u662F\${age}\u5C81\`

\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u6570\u6253\u5370\u5982\u4E0B\uFF1A</p>`,2),O={href:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6db7b7356279465d85c197b9d284425d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?",target:"_blank",rel:"noopener noreferrer"},P=n("https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6db7b7356279465d85c197b9d284425d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?"),k=d(`<p>ES9\u5F00\u59CB\uFF0C\u6A21\u677F\u5B57\u7B26\u4E32\u5141\u8BB8\u5D4C\u5957\u652F\u6301\u5E38\u89C1\u8F6C\u4E49\u5E8F\u5217\uFF0C\u79FB\u9664\u5BF9ECMAScript\u5728\u5E26\u6807\u7B7E\u7684\u6A21\u7248\u5B57\u7B26\u4E32\u4E2D\u8F6C\u4E49\u5E8F\u5217\u7684\u8BED\u6CD5\u9650\u5236\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function foo(a, b, c) {
    console.log(a, b, c)
}
// \u5728\u6807\u7B7E\u51FD\u6570\u4E2D\u4F7F\u7528
// unicode\u5B57\u7B26\\u{61} \u5BF9\u5E94\u7684\u503C\u4E3A a
// unicode\u5B57\u7B26\\u{62} \u5BF9\u5E94\u7684\u503C\u4E3A b
// \\unicode \u662F\u4E00\u4E2A\u65E0\u6548\u7684unicode\u5B57\u7B26
foo \`\\u{61} and \\u{62}\`
foo \`\\u{61} and \\unicode\`
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),F={href:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d484a5ff27d4001948e2f7955d3ba7c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?",target:"_blank",rel:"noopener noreferrer"},N=n("https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d484a5ff27d4001948e2f7955d3ba7c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?"),T=d(`<h3 id="\u6CE8\u610F\u70B9-3" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u70B9-3" aria-hidden="true">#</a> \u6CE8\u610F\u70B9</h3><p>\u5728\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\uFF0C\u5982\u679C\u8F93\u5165\u65E0\u6548\u7684unicode\u5B57\u7B26\uFF0C\u8FD8\u662F\u4F1A\u62A5\u9519\u3002\u53EA\u6709\u5728\u4FBF\u7B7E\u6A21\u677F\u4E2D \u4ECEes9\u5F00\u59CB\u624D\u4E0D\u4F1A\u62A5\u9519\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> let string = \`\\u{61} and \\unicode\`;
 console.log(string); // Uncaught SyntaxError: Invalid Unicode escape sequence
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u56DB\u3001es2019-es10" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001es2019-es10" aria-hidden="true">#</a> \u56DB\u3001ES2019(ES10)</h1><h2 id="_1\u3001object-fromentries" tabindex="-1"><a class="header-anchor" href="#_1\u3001object-fromentries" aria-hidden="true">#</a> 1\u3001Object.fromEntries()</h2><p>\u65B9\u6CD5 Object.fromEntries() \u628A\u952E\u503C\u5BF9\u5217\u8868\u8F6C\u6362\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u662F\u548C Object.entries() \u76F8\u5BF9\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Object.fromEntries([
    [&#39;foo&#39;, 1],
    [&#39;bar&#39;, 2]
])
// {foo: 1, bar: 2}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6848\u4F8B1-object-\u8F6C\u6362\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B1-object-\u8F6C\u6362\u64CD\u4F5C" aria-hidden="true">#</a> \u6848\u4F8B1\uFF1AObject \u8F6C\u6362\u64CD\u4F5C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const obj = {
    name: &#39;jimmy&#39;,
    age: 18
}
const entries = Object.entries(obj)
console.log(entries)
// [Array(2), Array(2)]

// ES10
const fromEntries = Object.fromEntries(entries)
console.log(fromEntries)
// {name: &quot;jimmy&quot;, age: 18}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6848\u4F8B2-map-\u8F6C-object" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B2-map-\u8F6C-object" aria-hidden="true">#</a> \u6848\u4F8B2\uFF1AMap \u8F6C Object</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const map = new Map()
map.set(&#39;name&#39;, &#39;jimmy&#39;)
map.set(&#39;age&#39;, 18)
console.log(map) // {&#39;name&#39; =&gt; &#39;jimmy&#39;, &#39;age&#39; =&gt; 18}

const obj = Object.fromEntries(map)
console.log(obj)
// {name: &quot;jimmy&quot;, age: 18}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6848\u4F8B3-\u8FC7\u6EE4" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B3-\u8FC7\u6EE4" aria-hidden="true">#</a> \u6848\u4F8B3\uFF1A\u8FC7\u6EE4</h3><p>course\u8868\u793A\u6240\u6709\u8BFE\u7A0B\uFF0C\u60F3\u8BF7\u6C42\u8BFE\u7A0B\u5206\u6570\u5927\u4E8E80\u7684\u8BFE\u7A0B\u7EC4\u6210\u7684\u5BF9\u8C61\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const course = {
    math: 80,
    english: 85,
    chinese: 90
}
const res = Object.entries(course).filter(([key, val]) =&gt; val &gt; 80)
console.log(res) // [ [ &#39;english&#39;, 85 ], [ &#39;chinese&#39;, 90 ] ]
console.log(Object.fromEntries(res)) // { english: 85, chinese: 90 }
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6848\u4F8B4-url\u7684search\u53C2\u6570\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B4-url\u7684search\u53C2\u6570\u8F6C\u6362" aria-hidden="true">#</a> \u6848\u4F8B4\uFF1Aurl\u7684search\u53C2\u6570\u8F6C\u6362</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// let url = &quot;https://www.baidu.com?name=jimmy&amp;age=18&amp;height=1.88&quot;
// queryString \u4E3A window.location.search
const queryString = &quot;?name=jimmy&amp;age=18&amp;height=1.88&quot;;
const queryParams = new URLSearchParams(queryString);
const paramObj = Object.fromEntries(queryParams);
console.log(paramObj); // { name: &#39;jimmy&#39;, age: &#39;18&#39;, height: &#39;1.88&#39; }
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2\u3001array-prototype-flat" tabindex="-1"><a class="header-anchor" href="#_2\u3001array-prototype-flat" aria-hidden="true">#</a> 2\u3001Array.prototype.flat()</h2><h3 id="\u8BED\u6CD5-2" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5-2" aria-hidden="true">#</a> \u8BED\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let newArray = arr.flat([depth])
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>depth</code>\xA0\u53EF\u9009</li></ul><p>\u6307\u5B9A\u8981\u63D0\u53D6\u5D4C\u5957\u6570\u7EC4\u7684\u7ED3\u6784\u6DF1\u5EA6\uFF0C\u9ED8\u8BA4\u503C\u4E3A 1\u3002</p><h3 id="\u793A\u4F8B-4" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-4" aria-hidden="true">#</a> \u793A\u4F8B</h3><p><code>flat()</code> \xA0\u65B9\u6CD5\u4F1A\u6309\u7167\u4E00\u4E2A\u53EF\u6307\u5B9A\u7684\u6DF1\u5EA6\u9012\u5F52\u904D\u5386\u6570\u7EC4\uFF0C\u5E76\u5C06\u6240\u6709\u5143\u7D20\u4E0E\u904D\u5386\u5230\u7684\u5B50\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u5408\u5E76\u4E3A\u4E00\u4E2A\u65B0\u6570\u7EC4\u8FD4\u56DE\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());  //  [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));  //  [0, 1, 2, [3, 4]]

//\u4F7F\u7528 Infinity\uFF0C\u53EF\u5C55\u5F00\u4EFB\u610F\u6DF1\u5EA6\u7684\u5D4C\u5957\u6570\u7EC4
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// \`flat()\` \u65B9\u6CD5\u4F1A\u79FB\u9664\u6570\u7EC4\u4E2D\u7684\u7A7A\u9879:
var arr5 = [1, 2, , 4, 5];
arr5.flat(); // [1, 2, 4, 5]
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3\u3001array-prototype-flatmap" tabindex="-1"><a class="header-anchor" href="#_3\u3001array-prototype-flatmap" aria-hidden="true">#</a> 3\u3001Array.prototype.flatMap()</h2><p>flatMap() \u65B9\u6CD5\u9996\u5148\u4F7F\u7528\u6620\u5C04\u51FD\u6570\u6620\u5C04\u6BCF\u4E2A\u5143\u7D20\uFF0C\u7136\u540E\u5C06\u7ED3\u679C\u538B\u7F29\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\u3002\u4ECE\u65B9\u6CD5\u7684\u540D\u5B57\u4E0A\u4E5F\u53EF\u4EE5\u770B\u51FA\u6765\u5B83\u5305\u542B\u4E24\u90E8\u5206\u529F\u80FD\u4E00\u4E2A\u662F map\uFF0C\u4E00\u4E2A\u662F flat\uFF08\u6DF1\u5EA6\u4E3A1\uFF09\u3002</p><h3 id="\u8BED\u6CD5-3" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5-3" aria-hidden="true">#</a> \u8BED\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // \u8FD4\u56DE\u65B0\u6570\u7EC4\u7684\u5143\u7D20
}[, thisArg])
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>callback</code></li></ul><p>\u53EF\u4EE5\u751F\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u7684\u51FD\u6570\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E09\u4E2A\u53C2\u6570\uFF1A</p><p><code>currentValue</code></p><p>\u5F53\u524D\u6B63\u5728\u6570\u7EC4\u4E2D\u5904\u7406\u7684\u5143\u7D20</p><p><code>index</code></p><p>\u53EF\u9009 \u6570\u7EC4\u4E2D\u6B63\u5728\u5904\u7406\u7684\u5F53\u524D\u5143\u7D20\u7684\u7D22\u5F15\u3002</p><p><code>array</code></p><p>\u53EF\u9009 \u88AB\u8C03\u7528\u7684\xA0<code>map</code>\xA0\u6570\u7EC4</p><ul><li><code>thisArg</code>\u53EF\u9009</li></ul><p>\u6267\u884C\xA0<code>callback</code>\xA0\u51FD\u6570\u65F6\xA0\u4F7F\u7528\u7684<code>this</code>\xA0\u503C\u3002</p><h3 id="\u793A\u4F8B-5" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-5" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const numbers = [1, 2, 3]
numbers.map(x =&gt; [x * 2]) // [[2], [4], [6]]
numbers.flatMap(x =&gt; [x * 2]) // [2, 4, 6]
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u793A\u4F8B\u53EF\u4EE5\u7B80\u5355\u5BF9\u6BD4\u4E0B map \u548C flatMap \u7684\u533A\u522B\u3002\u5F53\u7136\u8FD8\u53EF\u4EE5\u770B\u4E0B\u4E0B\u9762\u7684\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [&#39;\u4ECA\u5929\u5929\u6C14\u4E0D\u9519&#39;, &#39;&#39;, &#39;\u65E9\u4E0A\u597D&#39;]
arr.map(s =&gt; s.split(&#39;&#39;))
// [[&quot;\u4ECA&quot;, &quot;\u5929&quot;, &quot;\u5929&quot;, &quot;\u6C14&quot;, &quot;\u4E0D&quot;, &quot;\u9519&quot;],[&quot;&quot;],[&quot;\u65E9&quot;, &quot;\u4E0A&quot;, &quot;\u597D&quot;]]
arr.flatMap(s =&gt; s.split(&#39;&#39;))
// [&quot;\u4ECA&quot;, &quot;\u5929&quot;, &quot;\u5929&quot;, &quot;\u6C14&quot;, &quot;\u4E0D&quot;, &quot;\u9519&quot;, &quot;&quot;, &quot;\u65E9&quot;, &quot;\u4E0A&quot;, &quot;\u597D&quot;]
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>flatMap</code>\xA0\u65B9\u6CD5\u4E0E\xA0<code>map</code>\xA0\u65B9\u6CD5\u548C\u6DF1\u5EA6depth\u4E3A1\u7684\xA0<code>flat</code>\xA0\u51E0\u4E4E\u76F8\u540C.</p><h2 id="_4\u3001string-prototype-trimstart" tabindex="-1"><a class="header-anchor" href="#_4\u3001string-prototype-trimstart" aria-hidden="true">#</a> 4\u3001String.prototype.trimStart()</h2><p>trimStart() \u65B9\u6CD5\u4ECE\u5B57\u7B26\u4E32\u7684\u5F00\u5934\u5220\u9664\u7A7A\u683C\uFF0CtrimLeft()\u662F\u6B64\u65B9\u6CD5\u7684\u522B\u540D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let str = &#39;   foo  &#39;
console.log(str.length) // 8
str = str.trimStart() // \u6216str.trimLeft()
console.log(str.length) // 5
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5\u3001string-prototype-trimend" tabindex="-1"><a class="header-anchor" href="#_5\u3001string-prototype-trimend" aria-hidden="true">#</a> 5\u3001String.prototype.trimEnd()</h2><p>trimEnd() \u65B9\u6CD5\u4ECE\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u53F3\u7AEF\u79FB\u9664\u7A7A\u767D\u5B57\u7B26\uFF0CtrimRight \u662F trimEnd \u7684\u522B\u540D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let str = &#39;   foo  &#39;
console.log(str.length) // 8
str = str.trimEnd() // \u6216str.trimRight()
console.log(str.length) // 6
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6\u3001\u53EF\u9009\u7684catch-binding" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u53EF\u9009\u7684catch-binding" aria-hidden="true">#</a> 6\u3001\u53EF\u9009\u7684Catch Binding</h2><p>\u5728 ES10 \u4E4B\u524D\u6211\u4EEC\u90FD\u662F\u8FD9\u6837\u6355\u83B7\u5F02\u5E38\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>try {
    // tryCode
} catch (err) {
    // catchCode
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u91CC err \u662F\u5FC5\u987B\u7684\u53C2\u6570\uFF0C\u5728 ES10 \u53EF\u4EE5\u7701\u7565\u8FD9\u4E2A\u53C2\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>try {
    console.log(&#39;Foobar&#39;)
} catch {
    console.error(&#39;Bar&#39;)
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528" aria-hidden="true">#</a> \u5E94\u7528</h3><p><strong>\u9A8C\u8BC1\u53C2\u6570\u662F\u5426\u4E3Ajson\u683C\u5F0F</strong></p><p>\u8FD9\u4E2A\u9700\u6C42\u6211\u4EEC\u53EA\u9700\u8981\u8FD4\u56DEtrue\u6216false\uFF0C\u5E76\u4E0D\u5173\u5FC3catch\u7684\u53C2\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const validJSON = json =&gt; {
    try {
        JSON.parse(json)
        return true
    } catch {
        return false
    }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7\u3001symbol-prototype-description" tabindex="-1"><a class="header-anchor" href="#_7\u3001symbol-prototype-description" aria-hidden="true">#</a> 7\u3001Symbol.prototype.description</h2><p>\u6211\u4EEC\u77E5\u9053\uFF0CSymbol \u7684\u63CF\u8FF0\u53EA\u88AB\u5B58\u50A8\u5728\u5185\u90E8\u7684\xA0<code>Description</code>\xA0\uFF0C\u6CA1\u6709\u76F4\u63A5\u5BF9\u5916\u66B4\u9732\uFF0C\u6211\u4EEC\u53EA\u6709\u8C03\u7528 Symbol \u7684 toString() \u65F6\u624D\u53EF\u4EE5\u8BFB\u53D6\u8FD9\u4E2A\u5C5E\u6027\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const name = Symbol(&#39;es&#39;)
console.log(name.toString()) // Symbol(es)
console.log(name) // Symbol(es)
console.log(name === &#39;Symbol(es)&#39;) // false
console.log(name.toString() === &#39;Symbol(es)&#39;) // true
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u53EF\u4EE5\u901A\u8FC7 description \u65B9\u6CD5\u83B7\u53D6 Symbol \u7684\u63CF\u8FF0:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const name = Symbol(&#39;es&#39;)
console.log(name.description) // es
name.description = &quot;es2&quot; // \u53EA\u8BFB\u5C5E\u6027 \u5E76\u4E0D\u80FD\u4FEE\u6539\u63CF\u8FF0\u7B26
console.log(name.description === &#39;es&#39;) // true
// \u5982\u679C\u6CA1\u6709\u63CF\u8FF0\u7B26 \u8F93\u5165undefined
const s2 = Symbol()
console.log(s2.description) // undefined

\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8\u3001json-stringify-\u589E\u5F3A\u80FD\u529B" tabindex="-1"><a class="header-anchor" href="#_8\u3001json-stringify-\u589E\u5F3A\u80FD\u529B" aria-hidden="true">#</a> 8\u3001JSON.stringify() \u589E\u5F3A\u80FD\u529B</h2><p>JSON.stringify \u5728 ES10 \u4FEE\u590D\u4E86\u5BF9\u4E8E\u4E00\u4E9B\u8D85\u51FA\u8303\u56F4\u7684 Unicode \u5C55\u793A\u9519\u8BEF\u7684\u95EE\u9898\u3002\u56E0\u4E3A JSON \u90FD\u662F\u88AB\u7F16\u7801\u6210 UTF-8\uFF0C\u6240\u4EE5\u9047\u5230 0xD800\u20130xDFFF \u4E4B\u5185\u7684\u5B57\u7B26\u4F1A\u56E0\u4E3A\u65E0\u6CD5\u7F16\u7801\u6210 UTF-8 \u8FDB\u800C\u5BFC\u81F4\u663E\u793A\u9519\u8BEF\u3002\u5728 ES10 \u5B83\u4F1A\u7528\u8F6C\u4E49\u5B57\u7B26\u7684\u65B9\u5F0F\u6765\u5904\u7406\u8FD9\u90E8\u5206\u5B57\u7B26\u800C\u975E\u7F16\u7801\u7684\u65B9\u5F0F\uFF0C\u8FD9\u6837\u5C31\u4F1A\u6B63\u5E38\u663E\u793A\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \\uD83D\\uDE0E  emoji \u591A\u5B57\u8282\u7684\u4E00\u4E2A\u5B57\u7B26
console.log(JSON.stringify(&#39;\\uD83D\\uDE0E&#39;)) // \u6253\u5370\u51FA\u7B11\u8138

// \u5982\u679C\u6211\u4EEC\u53EA\u53BB\u5176\u4E2D\u7684\u4E00\u90E8\u5206  \\uD83D \u8FD9\u5176\u5B9E\u662F\u4E2A\u65E0\u6548\u7684\u5B57\u7B26\u4E32
// \u4E4B\u524D\u7684\u7248\u672C \uFF0C\u8FD9\u4E9B\u5B57\u7B26\u5C06\u66FF\u6362\u4E3A\u7279\u6B8A\u5B57\u7B26\uFF0C\u800C\u73B0\u5728\u5C06\u672A\u914D\u5BF9\u7684\u4EE3\u7406\u4EE3\u7801\u70B9\u8868\u793A\u4E3AJSON\u8F6C\u4E49\u5E8F\u5217
console.log(JSON.stringify(&#39;\\uD83D&#39;)) // &quot;\\ud83d&quot;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9\u3001\u4FEE\u8BA2-function-prototype-tostring" tabindex="-1"><a class="header-anchor" href="#_9\u3001\u4FEE\u8BA2-function-prototype-tostring" aria-hidden="true">#</a> 9\u3001\u4FEE\u8BA2 Function.prototype.toString()</h2><p>\u4EE5\u524D\u51FD\u6570\u7684toString\u65B9\u6CD5\u6765\u81EAObject.prototype.toString(),\u73B0\u5728\u7684 Function.prototype.toString() \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u8868\u793A\u5F53\u524D\u51FD\u6570\u6E90\u4EE3\u7801\u7684\u5B57\u7B26\u4E32\u3002\u4EE5\u524D\u53EA\u4F1A\u8FD4\u56DE\u8FD9\u4E2A\u51FD\u6570\uFF0C\u4E0D\u5305\u542B\u6CE8\u91CA\u3001\u7A7A\u683C\u7B49\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function foo() {
    // es10\u65B0\u7279\u6027
    console.log(&#39;imooc&#39;)
}
console.log(foo.toString())
// \u6253\u5370\u5982\u4E0B
// function foo() {
//  // es10\u65B0\u7279\u6027
//  console.log(&quot;imooc&quot;);
// }
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u8FD4\u56DE\u6CE8\u91CA\u3001\u7A7A\u683C\u548C\u8BED\u6CD5\u7B49\u8BE6\u7EC6\u4FE1\u606F\u3002</p><h1 id="\u4E94\u3001es2020-es11" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001es2020-es11" aria-hidden="true">#</a> \u4E94\u3001ES2020(ES11)</h1><h2 id="_1\u3001\u7A7A\u503C\u5408\u5E76\u8FD0\u7B97\u7B26-nullish-coalescing-operator" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u7A7A\u503C\u5408\u5E76\u8FD0\u7B97\u7B26-nullish-coalescing-operator" aria-hidden="true">#</a> 1\u3001\u7A7A\u503C\u5408\u5E76\u8FD0\u7B97\u7B26\uFF08Nullish coalescing Operator\uFF09</h2><p><strong>\u7A7A\u503C\u5408\u5E76\u64CD\u4F5C\u7B26</strong>\uFF08 <code>??</code> \uFF09\u662F\u4E00\u4E2A\u903B\u8F91\u64CD\u4F5C\u7B26\uFF0C\u5F53\u5DE6\u4FA7\u7684\u64CD\u4F5C\u6570\u4E3A\xA0<code>null</code>\u6216\u8005<code>undefined</code>\u65F6\uFF0C\u8FD4\u56DE\u5176\u53F3\u4FA7\u64CD\u4F5C\u6570\uFF0C\u5426\u5219\u8FD4\u56DE\u5DE6\u4FA7\u64CD\u4F5C\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const foo = undefined ?? &quot;foo&quot;
const bar = null ?? &quot;bar&quot;
console.log(foo) // foo
console.log(bar) // bar
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0E\u903B\u8F91\u6216\u64CD\u4F5C\u7B26\uFF08<code>||</code>\uFF09\u4E0D\u540C\uFF0C\u903B\u8F91\u6216\u64CD\u4F5C\u7B26\u4F1A\u5728\u5DE6\u4FA7\u64CD\u4F5C\u6570\u4E3A\u5047\u503C\u65F6\u8FD4\u56DE\u53F3\u4FA7\u64CD\u4F5C\u6570\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u4F7F\u7528\xA0<code>||</code>\xA0\u6765\u4E3A\u67D0\u4E9B\u53D8\u91CF\u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230\u610F\u6599\u4E4B\u5916\u7684\u884C\u4E3A\u3002\u6BD4\u5982\u4E3A\u5047\u503C\uFF08\u4F8B\u5982<code>&#39;&#39;</code>,<code>0</code>,<code>NaN</code>,<code>false</code>\uFF09\u65F6\u3002\u89C1\u4E0B\u9762\u7684\u4F8B\u5B50\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const foo = &quot;&quot; ?? &#39;default string&#39;;
const foo2 = &quot;&quot; || &#39;default string&#39;;
console.log(foo); // &quot;&quot;
console.log(foo2); // &quot;default string&quot;

const baz = 0 ?? 42;
const baz2 = 0 || 42;
console.log(baz); // 0
console.log(baz2); // 42

\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CE8\u610F\u70B9-4" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u70B9-4" aria-hidden="true">#</a> \u6CE8\u610F\u70B9</h3><p>\u5C06\xA0<code>??</code>\xA0\u76F4\u63A5\u4E0E\xA0AND\uFF08<code>&amp;&amp;</code>\uFF09\u548C OR\uFF08<code>||</code>\uFF09\u64CD\u4F5C\u7B26\u7EC4\u5408\u4F7F\u7528\u662F\u4E0D\u53EF\u53D6\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>null || undefined ?? &quot;foo&quot;; // \u629B\u51FA SyntaxError
true || undefined ?? &quot;foo&quot;; // \u629B\u51FA SyntaxError
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2\u3001\u53EF\u9009\u94FE-optional-chaining" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u53EF\u9009\u94FE-optional-chaining" aria-hidden="true">#</a> 2\u3001\u53EF\u9009\u94FE Optional chaining</h2><h3 id="\u4ECB\u7ECD-1" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD-1" aria-hidden="true">#</a> \u4ECB\u7ECD</h3><p><strong>\u53EF\u9009\u94FE</strong>\u64CD\u4F5C\u7B26(\xA0<code>?.</code>\xA0)\u5141\u8BB8\u8BFB\u53D6\u4F4D\u4E8E\u8FDE\u63A5\u5BF9\u8C61\u94FE\u6DF1\u5904\u7684\u5C5E\u6027\u7684\u503C\uFF0C\u800C\u4E0D\u5FC5\u660E\u786E\u9A8C\u8BC1\u94FE\u4E2D\u7684\u6BCF\u4E2A\u5F15\u7528\u662F\u5426\u6709\u6548\u3002<code>?.</code>\xA0\u64CD\u4F5C\u7B26\u7684\u529F\u80FD\u7C7B\u4F3C\u4E8E\xA0<code>.</code>\xA0\u94FE\u5F0F\u64CD\u4F5C\u7B26\uFF0C\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\uFF0C\u5728\u5F15\u7528\u4E3A\xA0<code>null</code>\xA0\u6216\u8005\xA0<code>undefined</code> \u7684\u60C5\u51B5\u4E0B\u4E0D\u4F1A\u5F15\u8D77\u9519\u8BEF\uFF0C\u8BE5\u8868\u8FBE\u5F0F\u77ED\u8DEF\u8FD4\u56DE\u503C\u662F\xA0<code>undefined</code>\u3002\u4E0E\u51FD\u6570\u8C03\u7528\u4E00\u8D77\u4F7F\u7528\u65F6\uFF0C\u5982\u679C\u7ED9\u5B9A\u7684\u51FD\u6570\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE\xA0<code>undefined</code>\u3002</p><p>\u5F53\u5C1D\u8BD5\u8BBF\u95EE\u53EF\u80FD\u4E0D\u5B58\u5728\u7684\u5BF9\u8C61\u5C5E\u6027\u65F6\uFF0C\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26\u5C06\u4F1A\u4F7F\u8868\u8FBE\u5F0F\u66F4\u77ED\u3001\u66F4\u7B80\u660E\u3002\u5728\u63A2\u7D22\u4E00\u4E2A\u5BF9\u8C61\u7684\u5185\u5BB9\u65F6\uFF0C\u5982\u679C\u4E0D\u80FD\u786E\u5B9A\u54EA\u4E9B\u5C5E\u6027\u5FC5\u5B9A\u5B58\u5728\uFF0C\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26\u4E5F\u662F\u5F88\u6709\u5E2E\u52A9\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const user = {
    address: {
        street: &#39;xx\u8857\u9053&#39;,
        getNum() {
            return &#39;80\u53F7&#39;
        }
    }
}

\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E4B\u524D\u7684\u8BED\u6CD5\u4E2D\uFF0C\u60F3\u83B7\u53D6\u5230\u6DF1\u5C42\u5C5E\u6027\u6216\u65B9\u6CD5\uFF0C\u4E0D\u5F97\u4E0D\u505A\u524D\u7F6E\u6821\u9A8C\uFF0C\u5426\u5219\u5F88\u5BB9\u6613\u547D\u4E2D\xA0<code>Uncaught TypeError: Cannot read property...</code>\xA0\u8FD9\u79CD\u9519\u8BEF\uFF0C\u8FD9\u6781\u6709\u53EF\u80FD\u8BA9\u4F60\u6574\u4E2A\u5E94\u7528\u6302\u6389\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const street = user &amp;&amp; user.address &amp;&amp; user.address.street
const num = user &amp;&amp; user.address &amp;&amp; user.address.getNum &amp;&amp; user.address.getNum()
console.log(street, num)
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528\u4E86 Optional Chaining \uFF0C\u4E0A\u9762\u4EE3\u7801\u4F1A\u53D8\u6210</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const street2 = user?.address?.street
const num2 = user?.address?.getNum?.()
console.log(street2, num2)
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u9009\u94FE\u4E2D\u7684 ? \u8868\u793A\u5982\u679C\u95EE\u53F7\u5DE6\u8FB9\u8868\u8FBE\u5F0F\u6709\u503C, \u5C31\u4F1A\u7EE7\u7EED\u67E5\u8BE2\u95EE\u53F7\u540E\u9762\u7684\u5B57\u6BB5\u3002\u6839\u636E\u4E0A\u9762\u53EF\u4EE5\u770B\u51FA\uFF0C\u7528\u53EF\u9009\u94FE\u53EF\u4EE5\u5927\u91CF\u7B80\u5316\u7C7B\u4F3C\u7E41\u7410\u7684\u524D\u7F6E\u6821\u9A8C\u64CD\u4F5C\uFF0C\u800C\u4E14\u66F4\u5B89\u5168\u3002</p><h3 id="\u5E38\u89C1\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u7528\u6CD5" aria-hidden="true">#</a> \u5E38\u89C1\u7528\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  // \u5BF9\u8C61\u4E2D\u4F7F\u7528
  let obj = {
    name: &quot;jimmy&quot;,
    age: &quot;18&quot;,
  };
  let property = &quot;age&quot;;
  let name = obj?.name;
  let age = obj?.age;
  let ages = obj?.[property];
  let sex = obj?.sex;
  console.log(name); // jimmy
  console.log(age); // 18
  console.log(ages); // 18
  console.log(sex); // undefined

  // \u6570\u7EC4\u4E2D\u4F7F\u7528
  let arr = [1,2,2];
  let arrayItem = arr?.[42]; // undefined

  // \u51FD\u6570\u4E2D\u4F7F\u7528
  let obj = {
   func: function () {
     console.log(&quot;I am func&quot;);
   },
  };
  obj?.func(); // I am func
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E0E\u7A7A\u503C\u5408\u5E76\u64CD\u4F5C\u7B26\u4E00\u8D77\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u7A7A\u503C\u5408\u5E76\u64CD\u4F5C\u7B26\u4E00\u8D77\u4F7F\u7528" aria-hidden="true">#</a> \u4E0E\u7A7A\u503C\u5408\u5E76\u64CD\u4F5C\u7B26\u4E00\u8D77\u4F7F\u7528</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let customer = {
  name: &quot;jimmy&quot;,
  details: { age: 18 }
};
let customerCity = customer?.city ?? &quot;\u6210\u90FD&quot;;
console.log(customerCity); // &quot;\u6210\u90FD&quot;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CE8\u610F\u70B9-5" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u70B9-5" aria-hidden="true">#</a> \u6CE8\u610F\u70B9</h3><p><strong>\u53EF\u9009\u94FE\u4E0D\u80FD\u7528\u4E8E\u8D4B\u503C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let object = {};
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3\u3001globalthis" tabindex="-1"><a class="header-anchor" href="#_3\u3001globalthis" aria-hidden="true">#</a> 3\u3001globalThis</h2><p>\u5728\u4EE5\u524D\uFF0C\u4ECE\u4E0D\u540C\u7684 JavaScript \u73AF\u5883\u4E2D\u83B7\u53D6\u5168\u5C40\u5BF9\u8C61\u9700\u8981\u4E0D\u540C\u7684\u8BED\u53E5\u3002\u5728 Web \u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\xA0<code>window</code>\u3001<code>self</code>\xA0\u53D6\u5230\u5168\u5C40\u5BF9\u8C61\uFF0C\u5728 Node.js \u4E2D\uFF0C\u5B83\u4EEC\u90FD\u65E0\u6CD5\u83B7\u53D6\uFF0C\u5FC5\u987B\u4F7F\u7528\xA0<code>global</code>\u3002</p><p>\u5728\u677E\u6563\u6A21\u5F0F\u4E0B\uFF0C\u53EF\u4EE5\u5728\u51FD\u6570\u4E2D\u8FD4\u56DE\xA0<code>this</code>\xA0\u6765\u83B7\u53D6\u5168\u5C40\u5BF9\u8C61\uFF0C\u4F46\u662F\u5728\u4E25\u683C\u6A21\u5F0F\u548C\u6A21\u5757\u73AF\u5883\u4E0B\uFF0C<code>this</code>\xA0\u4F1A\u8FD4\u56DE\xA0<code>undefined</code>\u3002</p><p>\u4EE5\u524D\u60F3\u8981\u83B7\u53D6\u5168\u5C40\u5BF9\u8C61\uFF0C\u53EF\u901A\u8FC7\u4E00\u4E2A\u5168\u5C40\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const getGlobal = () =&gt; {
    if (typeof self !== &#39;undefined&#39;) {
        return self
    }
    if (typeof window !== &#39;undefined&#39;) {
        return window
    }
    if (typeof global !== &#39;undefined&#39;) {
        return global
    }
    throw new Error(&#39;\u65E0\u6CD5\u627E\u5230\u5168\u5C40\u5BF9\u8C61&#39;)
}

const globals = getGlobal()
console.log(globals)
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728<code>globalThis</code>\xA0\u63D0\u4F9B\u4E86\u4E00\u4E2A\u6807\u51C6\u7684\u65B9\u5F0F\u6765\u83B7\u53D6\u4E0D\u540C\u73AF\u5883\u4E0B\u7684\u5168\u5C40\xA0<code>this</code>\xA0 \u5BF9\u8C61\uFF08\u4E5F\u5C31\u662F\u5168\u5C40\u5BF9\u8C61\u81EA\u8EAB\uFF09\u3002\u4E0D\u50CF\xA0<code>window</code>\xA0\u6216\u8005\xA0<code>self</code>\xA0\u8FD9\u4E9B\u5C5E\u6027\uFF0C\u5B83\u786E\u4FDD\u53EF\u4EE5\u5728\u6709\u65E0\u7A97\u53E3\u7684\u5404\u79CD\u73AF\u5883\u4E0B\u6B63\u5E38\u5DE5\u4F5C\u3002\u6240\u4EE5\uFF0C\u4F60\u53EF\u4EE5\u5B89\u5FC3\u7684\u4F7F\u7528\xA0<code>globalThis</code>\uFF0C\u4E0D\u5FC5\u62C5\u5FC3\u5B83\u7684\u8FD0\u884C\u73AF\u5883\u3002</p><p>\u4E3A\u4FBF\u4E8E\u8BB0\u5FC6\uFF0C\u4F60\u53EA\u9700\u8981\u8BB0\u4F4F\uFF0C\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u7684\xA0<code>this</code>\xA0\u5C31\u662F<code>globalThis</code>\u3002\u4EE5\u540E\u5C31\u7528globalThis\u5C31\u884C\u4E86\u3002</p><h2 id="_4\u3001bigint" tabindex="-1"><a class="header-anchor" href="#_4\u3001bigint" aria-hidden="true">#</a> 4\u3001BigInt</h2><p><strong><code>BigInt</code></strong>\xA0\u662F\u4E00\u79CD\u5185\u7F6E\u5BF9\u8C61\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E00\u79CD\u65B9\u6CD5\u6765\u8868\u793A\u5927\u4E8E\xA0<code>2\u768453\u6B21\u65B9\xA0- 1</code>\xA0\u7684\u6574\u6570\u3002\u8FD9\u539F\u672C\u662F Javascript\u4E2D\u53EF\u4EE5\u7528\xA0<code>Number</code>\xA0\u8868\u793A\u7684\u6700\u5927\u6570\u5B57\u3002<strong><code>BigInt</code></strong>\xA0\u53EF\u4EE5\u8868\u793A\u4EFB\u610F\u5927\u7684\u6574\u6570\u3002</p><p><strong>\u4F7F\u7528 BigInt \u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</strong></p><h3 id="\u65B9\u5F0F\u4E00-\u6570\u5B57\u540E\u9762\u589E\u52A0n" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E00-\u6570\u5B57\u540E\u9762\u589E\u52A0n" aria-hidden="true">#</a> \u65B9\u5F0F\u4E00\uFF1A\u6570\u5B57\u540E\u9762\u589E\u52A0n</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const bigInt = 9007199254740993n
console.log(bigInt)
console.log(typeof bigInt) // bigint

// \`BigInt\` \u548C [\`Number\`]\u4E0D\u662F\u4E25\u683C\u76F8\u7B49\u7684\uFF0C\u4F46\u662F\u5BBD\u677E\u76F8\u7B49\u7684\u3002
console.log(1n == 1) // true
console.log(1n === 1) // false

// \`Number\` \u548C \`BigInt\` \u53EF\u4EE5\u8FDB\u884C\u6BD4\u8F83\u3002
1n &lt; 2 // \u21AA true
2n &gt; 1 // \u21AA true

\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B9\u5F0F\u4E8C-\u4F7F\u7528-bigint-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E8C-\u4F7F\u7528-bigint-\u51FD\u6570" aria-hidden="true">#</a> \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 BigInt \u51FD\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const bigIntNum = BigInt(9007199254740993n)
console.log(bigIntNum)
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97" aria-hidden="true">#</a> \u8FD0\u7B97</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let number = BigInt(2);
let a = number + 2n; // 4n
let b = number * 10n; // 20n
let c = number - 10n; // -8n
console.log(a);
console.log(b);
console.log(c);
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CE8\u610F\u70B9-6" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u70B9-6" aria-hidden="true">#</a> \u6CE8\u610F\u70B9</h3><p>BigInt\u4E0D\u80FD\u7528\u4E8E\xA0[<code>Math</code>]\xA0\u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5\uFF1B\u4E0D\u80FD\u548C\u4EFB\u4F55\xA0[<code>Number</code>]\xA0\u5B9E\u4F8B\u6DF7\u5408\u8FD0\u7B97\uFF0C\u4E24\u8005\u5FC5\u987B\u8F6C\u6362\u6210\u540C\u4E00\u79CD\u7C7B\u578B\u3002\u5728\u4E24\u79CD\u7C7B\u578B\u6765\u56DE\u8F6C\u6362\u65F6\u8981\u5C0F\u5FC3\uFF0C\u56E0\u4E3A\xA0<code>BigInt</code>\xA0\u53D8\u91CF\u5728\u8F6C\u6362\u6210\xA0[<code>Number</code>]\xA0\u53D8\u91CF\u65F6\u53EF\u80FD\u4F1A\u4E22\u5931\u7CBE\u5EA6\u3002</p><h2 id="_5\u3001string-prototype-matchall" tabindex="-1"><a class="header-anchor" href="#_5\u3001string-prototype-matchall" aria-hidden="true">#</a> 5\u3001String.prototype.matchAll()</h2><p><strong><code>matchAll()</code></strong> \xA0\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u6240\u6709\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u53CA\u5206\u7EC4\u6355\u83B7\u7EC4\u7684\u8FED\u4EE3\u5668\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const regexp = /t(e)(st(\\d?))/g;
const str = &#39;test1test2&#39;;

const array = [...str.matchAll(regexp)];
console.log(array[0]);  // [&quot;test1&quot;, &quot;e&quot;, &quot;st1&quot;, &quot;1&quot;]
console.log(array[1]); // [&quot;test2&quot;, &quot;e&quot;, &quot;st2&quot;, &quot;2&quot;]
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6\u3001promise-allsettled" tabindex="-1"><a class="header-anchor" href="#_6\u3001promise-allsettled" aria-hidden="true">#</a> 6\u3001Promise.allSettled()</h2><p>\u6211\u4EEC\u90FD\u77E5\u9053 Promise.all() \u5177\u6709\u5E76\u53D1\u6267\u884C\u5F02\u6B65\u4EFB\u52A1\u7684\u80FD\u529B\u3002\u4F46\u5B83\u7684\u6700\u5927\u95EE\u9898\u5C31\u662F\u5982\u679C\u5176\u4E2D\u67D0\u4E2A\u4EFB\u52A1\u51FA\u73B0\u5F02\u5E38(reject)\uFF0C\u6240\u6709\u4EFB\u52A1\u90FD\u4F1A\u6302\u6389\uFF0CPromise\u76F4\u63A5\u8FDB\u5165reject \u72B6\u6001\u3002</p><p>\u573A\u666F\uFF1A\u73B0\u5728\u9875\u9762\u4E0A\u6709\u4E09\u4E2A\u8BF7\u6C42\uFF0C\u5206\u522B\u8BF7\u6C42\u4E0D\u540C\u7684\u6570\u636E\uFF0C\u5982\u679C\u4E00\u4E2A\u63A5\u53E3\u670D\u52A1\u5F02\u5E38\uFF0C\u6574\u4E2A\u90FD\u662F\u5931\u8D25\u7684\uFF0C\u90FD\u65E0\u6CD5\u6E32\u67D3\u51FA\u6570\u636E</p><p>\u6211\u4EEC\u9700\u8981\u4E00\u79CD\u673A\u5236\uFF0C\u5982\u679C\u5E76\u53D1\u4EFB\u52A1\u4E2D\uFF0C\u65E0\u8BBA\u4E00\u4E2A\u4EFB\u52A1\u6B63\u5E38\u6216\u8005\u5F02\u5E38\uFF0C\u90FD\u4F1A\u8FD4\u56DE\u5BF9\u5E94\u7684\u7684\u72B6\u6001\uFF0C\u8FD9\u5C31\u662F<code>Promise.allSettled</code>\u7684\u4F5C\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const promise1 = () =&gt; {
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      resolve(&quot;promise1&quot;);
      //   reject(&quot;error promise1 &quot;);
    }, 3000);
  });
};
const promise2 = () =&gt; {
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      resolve(&quot;promise2&quot;);
      //   reject(&quot;error promise2 &quot;);
    }, 1000);
  });
};
const promise3 = () =&gt; {
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      //   resolve(&quot;promise3&quot;);
      reject(&quot;error promise3 &quot;);
    }, 2000);
  });
};

//  Promise.all \u4F1A\u8D70\u5230catch\u91CC\u9762
Promise.all([promise1(), promise2(), promise3()])
  .then((res) =&gt; {
    console.log(res);
  })
  .catch((error) =&gt; {
    console.log(&quot;error&quot;, error); // error promise3
  });

// Promise.allSettled \u4E0D\u7BA1\u6709\u6CA1\u6709\u9519\u8BEF\uFF0C\u4E09\u4E2A\u7684\u72B6\u6001\u90FD\u4F1A\u8FD4\u56DE
Promise.allSettled([promise1(), promise2(), promise3()])
  .then((res) =&gt; {
    console.log(res);
    // \u6253\u5370\u7ED3\u679C
    // [
    //    {status: &#39;fulfilled&#39;, value: &#39;promise1&#39;},
    //    {status: &#39;fulfilled&#39;,value: &#39;promise2&#39;},
    //    {status: &#39;rejected&#39;, reason: &#39;error promise3 &#39;}
    // ]
  })
  .catch((error) =&gt; {
    console.log(&quot;error&quot;, error);
  });
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7\u3001dynamic-import-\u6309\u9700-import" tabindex="-1"><a class="header-anchor" href="#_7\u3001dynamic-import-\u6309\u9700-import" aria-hidden="true">#</a> 7\u3001Dynamic Import\uFF08\u6309\u9700 import\uFF09</h2><p><code>import()</code>\u53EF\u4EE5\u5728\u9700\u8981\u7684\u65F6\u5019\uFF0C\u518D\u52A0\u8F7D\u67D0\u4E2A\u6A21\u5757\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>button.addEventListener(&#39;click&#39;, event =&gt; {
  import(&#39;./dialogBox.js&#39;)
  .then(dialogBox =&gt; {
    dialogBox.open();
  })
  .catch(error =&gt; {
    /* Error handling */
  })
});
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>import()</code>\u65B9\u6CD5\u653E\u5728<code>click</code>\u4E8B\u4EF6\u7684\u76D1\u542C\u51FD\u6570\u4E4B\u4E2D\uFF0C\u53EA\u6709\u7528\u6237\u70B9\u51FB\u4E86\u6309\u94AE\uFF0C\u624D\u4F1A\u52A0\u8F7D\u8FD9\u4E2A\u6A21\u5757\u3002</p><h1 id="\u516D\u3001es2021-es12" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001es2021-es12" aria-hidden="true">#</a> \u516D\u3001ES2021(ES12)</h1><h2 id="_1\u3001\u903B\u8F91\u8FD0\u7B97\u7B26\u548C\u8D4B\u503C\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u903B\u8F91\u8FD0\u7B97\u7B26\u548C\u8D4B\u503C\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 1\u3001\u903B\u8F91\u8FD0\u7B97\u7B26\u548C\u8D4B\u503C\u8868\u8FBE\u5F0F\uFF08&amp;&amp;=\uFF0C||=\uFF0C??=\uFF09</h2><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> &amp;&amp;=</h3><p>\u903B\u8F91\u4E0E\u8D4B\u503C <code>x &amp;&amp;= y</code>\u7B49\u6548\u4E8E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>x &amp;&amp; (x = y);
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u610F\u601D\u662F\uFF0C\u5F53x\u4E3A\u771F\u65F6\uFF0Cx=y\u3002 \u5177\u4F53\u8BF7\u770B\u4E0B\u9762\u7684\u793A\u4F8B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let a = 1;
let b = 0;

a &amp;&amp;= 2;
console.log(a); // 2

b &amp;&amp;= 2;
console.log(b);  // 0
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> ||=</h3><p>\u903B\u8F91\u6216\u8D4B\u503C\uFF08<code>x ||= y</code>\uFF09\u8FD0\u7B97\u4EC5\u5728\xA0<code>x</code>\xA0\u4E3Afalse\u65F6\u8D4B\u503C\u3002</p><p><strong><code>x ||= y</code>\xA0\u7B49\u540C\u4E8E\uFF1Ax || (x = y);</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const a = { duration: 50, title: &#39;&#39; };

a.duration ||= 10;
console.log(a.duration); // 50

a.title ||= &#39;title is empty.&#39;;
console.log(a.title); // &quot;title is empty&quot;

\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> ??=</h3>`,138),A=n("\u903B\u8F91\u7A7A\u8D4B\u503C\u8FD0\u7B97\u7B26\xA0("),I=e("code",null,"x ??= y",-1),D=n(") \u4EC5\u5728\xA0"),B=e("code",null,"x",-1),z=n("\xA0\u662F\xA0"),J={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FGlossary%2FNullish",target:"_blank",rel:"noopener noreferrer"},M=n("nullish"),C=n("\xA0("),R=e("code",null,"null",-1),L=n("\xA0\u6216\xA0"),U=e("code",null,"undefined",-1),V=n(") \u65F6\u5BF9\u5176\u8D4B\u503C\u3002"),W=d(`<p><strong><code>x ??= y</code>\xA0\u7B49\u4EF7\u4E8E\uFF1A x ?? (x = y);</strong></p><p><strong>\u793A\u4F8B\u4E00</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration); // 50

a.speed ??= 25;
console.log(a.speed); // 25
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u793A\u4F8B\u4E8C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function config(options) {
  options.duration ??= 100;
  options.speed ??= 25;
  return options;
}

config({ duration: 125 }); // { duration: 125, speed: 25 }
config({}); // { duration: 100, speed: 25 }
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2\u3001string-prototype-replaceall" tabindex="-1"><a class="header-anchor" href="#_2\u3001string-prototype-replaceall" aria-hidden="true">#</a> 2\u3001String.prototype.replaceAll()</h2><h3 id="\u4ECB\u7ECD-2" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD-2" aria-hidden="true">#</a> \u4ECB\u7ECD</h3><p><code>replaceAll()</code> \xA0\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u5B57\u7B26\u4E32\uFF0C\u65B0\u5B57\u7B26\u4E32\u4E2D\u6240\u6709\u6EE1\u8DB3\xA0<code>pattern</code>\xA0\u7684\u90E8\u5206\u90FD\u4F1A\u88AB<code>replacement</code>\xA0\u66FF\u6362\u3002<code>pattern</code>\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A<code>RegExp</code>\uFF0C<code>replacement</code>\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A\u5728\u6BCF\u6B21\u5339\u914D\u88AB\u8C03\u7528\u7684\u51FD\u6570\u3002</p><p>\u539F\u59CB\u5B57\u7B26\u4E32\u4FDD\u6301\u4E0D\u53D8\u3002</p><h3 id="\u793A\u4F8B-6" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-6" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;aabbcc&#39;.replaceAll(&#39;b&#39;, &#39;.&#39;); // &#39;aa..cc&#39;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u641C\u7D22\u503C\u65F6\uFF0C\u5B83\u5FC5\u987B\u662F\u5168\u5C40\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;aabbcc&#39;.replaceAll(/b/, &#39;.&#39;);
TypeError: replaceAll must be called with a global RegExp
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C06\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;aabbcc&#39;.replaceAll(/b/g, &#39;.&#39;);
&quot;aa..cc&quot;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u5B57\u5206\u9694\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u5206\u9694\u7B26" aria-hidden="true">#</a> <strong>\u6570\u5B57\u5206\u9694\u7B26</strong></h2><p>\u6B27\u7F8E\u8BED\u8A00\u4E2D\uFF0C\u8F83\u957F\u7684\u6570\u503C\u5141\u8BB8\u6BCF\u4E09\u4F4D\u6DFB\u52A0\u4E00\u4E2A\u5206\u9694\u7B26\uFF08\u901A\u5E38\u662F\u4E00\u4E2A\u9017\u53F7\uFF09\uFF0C\u589E\u52A0\u6570\u503C\u7684\u53EF\u8BFB\u6027\u3002\u6BD4\u5982\uFF0C<code>1000</code>\u53EF\u4EE5\u5199\u4F5C<code>1,000</code>\u3002</p><p><code>ES2021</code>\u4E2D\u5141\u8BB8 JavaScript \u7684\u6570\u503C\u4F7F\u7528\u4E0B\u5212\u7EBF\uFF08<code>_</code>\uFF09\u4F5C\u4E3A\u5206\u9694\u7B26\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let budget = 1_000_000_000_000;
budget === 10 ** 12 // true
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u6570\u503C\u5206\u9694\u7B26\u6CA1\u6709\u6307\u5B9A\u95F4\u9694\u7684\u4F4D\u6570\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EF\u4EE5\u6BCF\u4E09\u4F4D\u6DFB\u52A0\u4E00\u4E2A\u5206\u9694\u7B26\uFF0C\u4E5F\u53EF\u4EE5\u6BCF\u4E00\u4F4D\u3001\u6BCF\u4E24\u4F4D\u3001\u6BCF\u56DB\u4F4D\u6DFB\u52A0\u4E00\u4E2A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>123_00 === 12_300 // true

12345_00 === 123_4500 // true
12345_00 === 1_234_500 // true
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C0F\u6570\u548C\u79D1\u5B66\u8BA1\u6570\u6CD5\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6570\u503C\u5206\u9694\u7B26\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5C0F\u6570
0.000_001

// \u79D1\u5B66\u8BA1\u6570\u6CD5
1e10_000
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6570\u503C\u5206\u9694\u7B26\u6709\u51E0\u4E2A\u4F7F\u7528\u6CE8\u610F\u70B9\u3002</p><ul><li>\u4E0D\u80FD\u653E\u5728\u6570\u503C\u7684\u6700\u524D\u9762\uFF08leading\uFF09\u6216\u6700\u540E\u9762\uFF08trailing\uFF09\u3002</li><li>\u4E0D\u80FD\u4E24\u4E2A\u6216\u4E24\u4E2A\u4EE5\u4E0A\u7684\u5206\u9694\u7B26\u8FDE\u5728\u4E00\u8D77\u3002</li><li>\u5C0F\u6570\u70B9\u7684\u524D\u540E\u4E0D\u80FD\u6709\u5206\u9694\u7B26\u3002</li><li>\u79D1\u5B66\u8BA1\u6570\u6CD5\u91CC\u9762\uFF0C\u8868\u793A\u6307\u6570\u7684<code>e</code>\u6216<code>E</code>\u524D\u540E\u4E0D\u80FD\u6709\u5206\u9694\u7B26\u3002</li></ul><p>\u4E0B\u9762\u7684\u5199\u6CD5\u90FD\u4F1A\u62A5\u9519\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5168\u90E8\u62A5\u9519
3_.141
3._141
1_e12
1e_12
123__456
_1464301
1464301_
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3\u3001promise-any" tabindex="-1"><a class="header-anchor" href="#_3\u3001promise-any" aria-hidden="true">#</a> 3\u3001<strong>Promise.any</strong></h2><p>\u65B9\u6CD5\u63A5\u53D7\u4E00\u7EC4 Promise \u5B9E\u4F8B\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5305\u88C5\u6210\u4E00\u4E2A\u65B0\u7684 Promise \u5B9E\u4F8B\u8FD4\u56DE\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const promise1 = () =&gt; {
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      resolve(&quot;promise1&quot;);
      //  reject(&quot;error promise1 &quot;);
    }, 3000);
  });
};
const promise2 = () =&gt; {
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      resolve(&quot;promise2&quot;);
      // reject(&quot;error promise2 &quot;);
    }, 1000);
  });
};
const promise3 = () =&gt; {
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      resolve(&quot;promise3&quot;);
      // reject(&quot;error promise3 &quot;);
    }, 2000);
  });
};
Promise.any([promise1(), promise2(), promise3()])
  .then((first) =&gt; {
    // \u53EA\u8981\u6709\u4E00\u4E2A\u8BF7\u6C42\u6210\u529F \u5C31\u4F1A\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u8BF7\u6C42\u6210\u529F\u7684
    console.log(fimu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EA\u8981\u53C2\u6570\u5B9E\u4F8B\u6709\u4E00\u4E2A\u53D8\u6210<code>fulfilled</code>\u72B6\u6001\uFF0C\u5305\u88C5\u5B9E\u4F8B\u5C31\u4F1A\u53D8\u6210<code>fulfilled</code>\u72B6\u6001\uFF1B\u5982\u679C\u6240\u6709\u53C2\u6570\u5B9E\u4F8B\u90FD\u53D8\u6210<code>rejected</code>\u72B6\u6001\uFF0C\u5305\u88C5\u5B9E\u4F8B\u5C31\u4F1A\u53D8\u6210<code>rejected</code>\u72B6\u6001\u3002</p><p><code>Promise.any()</code>\u8DDF<code>Promise.race()</code>\u65B9\u6CD5\u5F88\u50CF\uFF0C\u53EA\u6709\u4E00\u70B9\u4E0D\u540C\uFF0C\u5C31\u662F<code>Promise.any()</code>\u4E0D\u4F1A\u56E0\u4E3A\u67D0\u4E2A Promise \u53D8\u6210<code>rejected</code>\u72B6\u6001\u800C\u7ED3\u675F\uFF0C\u5FC5\u987B\u7B49\u5230\u6240\u6709\u53C2\u6570 Promise \u53D8\u6210<code>rejected</code>\u72B6\u6001\u624D\u4F1A\u7ED3\u675F\u3002</p><h2 id="_4\u3001weakref-and-finalizers" tabindex="-1"><a class="header-anchor" href="#_4\u3001weakref-and-finalizers" aria-hidden="true">#</a> 4\u3001WeakRef and Finalizers</h2><p>\u8FD9\u4E24\u4E2A\u65B0\u7279\u6027\uFF0C\u90FD\u5E94\u8BE5\u5C3D\u91CF\u907F\u514D\u4F7F\u7528\uFF0C\u6240\u4EE5\u8FD9\u91CC\u4E0D\u505A\u8FC7\u591A\u7684\u8BB2\u89E3\u3002\u5982\u611F\u5174\u8DA3\uFF0C\u8BF7\u53C2\u8003</p>`,34),G={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FWeakRef",target:"_blank",rel:"noopener noreferrer"},$=n("WeakRef"),K={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FFinalizationRegistry",target:"_blank",rel:"noopener noreferrer"},Y=n("Finalizers"),H=e("h1",{id:"\u5199\u5728\u6700\u540E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5199\u5728\u6700\u540E","aria-hidden":"true"},"#"),n(" \u5199\u5728\u6700\u540E")],-1),Q=e("p",null,[n("\u672C\u4EBA\u6C34\u5E73\u6709\u9650\uFF0C\u5982\u6709\u9519\u8BEF\uFF0C\u6B22\u8FCE\u8BC4\u8BBA\u533A\u6307\u51FA\u3002(ps:"),e("code",null,"ES6"),n("\u7CFB\u5217\u6B63\u5728\u5199)")],-1),X=e("p",null,"\u4F5C\u8005\uFF1AJimmy_fx",-1),Z=e("p",null,"\u94FE\u63A5\uFF1Ahttps://juejin.cn/post/7046217976176967711",-1),ee=e("p",null,"\u6765\u6E90\uFF1A\u7A00\u571F\u6398\u91D1",-1),ne=e("p",null,"\u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002",-1),ie=e("hr",null,null,-1);function se(de,ae){const i=l("ExternalLinkIcon");return r(),t("div",null,[o,e("p",null,[e("a",v,[u,s(i)])]),m,e("p",null,[b,p,h,e("a",g,[x,s(i)])]),f,e("p",null,[e("a",y,[q,s(i)])]),_,e("p",null,[j,e("a",w,[S,s(i)])]),E,e("p",null,[e("a",O,[P,s(i)])]),k,e("p",null,[e("a",F,[N,s(i)])]),T,e("p",null,[A,I,D,B,z,e("a",J,[M,s(i)]),C,R,L,U,V]),W,e("p",null,[e("a",G,[$,s(i)])]),e("p",null,[e("a",K,[Y,s(i)])]),H,Q,X,Z,ee,ne,ie])}var re=a(c,[["render",se],["__file","ES7-ES12-Knowledge.html.vue"]]);export{re as default};
