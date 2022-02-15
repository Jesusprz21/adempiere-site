"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[65838],{50848:(n,s,a)=>{a.r(s),a.d(s,{default:()=>Q});var e=a(66252);const p=(0,e.Uk)("JavaScript 的类型分为两种: 原始数据类型("),t={href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("Primitive data types"),l=(0,e.Uk)(")和对象类型(Object types)。"),r=(0,e.Uk)("原始数据类型包括: 布尔值、数值、字符串、"),c=(0,e._)("code",null,"null",-1),i=(0,e.Uk)("、"),u=(0,e._)("code",null,"undefined",-1),d=(0,e.Uk)(" 以及 "),k={href:"http://es6.ruanyifeng.com/#docs/symbol",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Uk)("ES6 中的新类型 "),m=(0,e._)("code",null,"Symbol",-1),y=(0,e.Uk)("。"),g=(0,e.uE)('<p>本节主要介绍<strong>前五种</strong>原始数据类型在 TypeScript 中的应用。</p><h2 id="布尔值" tabindex="-1"><a class="header-anchor" href="#布尔值" aria-hidden="true">#</a> 布尔值</h2><p>布尔值是最基础的数据类型，在 TypeScript 中，使用 <code>boolean</code> 定义布尔值类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> isDone<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 编译通过</span>\n<span class="token comment">// 后面约定，未强调编译错误的代码片段，默认为编译通过</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>注意，使用构造函数 <code>Boolean</code> 创造的对象<strong>不是</strong>布尔值:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> createdByNewBoolean<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Type &#39;Boolean&#39; is not assignable to type &#39;boolean&#39;.</span>\n<span class="token comment">//   &#39;boolean&#39; is a primitive, but &#39;Boolean&#39; is a wrapper object. Prefer using &#39;boolean&#39; when possible.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>事实上 <code>new Boolean()</code> 返回的是一个 <code>Boolean</code> 对象:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> createdByNewBoolean<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>直接调用 <code>Boolean</code> 也可以返回一个 <code>boolean</code> 类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> createdByBoolean<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在 TypeScript 中，<code>boolean</code> 是 JavaScript 中的基本类型，而 <code>Boolean</code> 是 JavaScript 中的构造函数。其他基本类型(除了 <code>null</code> 和 <code>undefined</code>)一样，不再赘述。</p><h2 id="数值" tabindex="-1"><a class="header-anchor" href="#数值" aria-hidden="true">#</a> 数值</h2><p>使用 <code>number</code> 定义数值类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> decLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> hexLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>\n<span class="token comment">// ES6 中的二进制表示法</span>\n<span class="token keyword">let</span> binaryLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span>\n<span class="token comment">// ES6 中的八进制表示法</span>\n<span class="token keyword">let</span> octalLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o744</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> notANumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> infinityNumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>编译结果:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> decLiteral <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> hexLiteral <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>\n<span class="token comment">// ES6 中的二进制表示法</span>\n<span class="token keyword">var</span> binaryLiteral <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token comment">// ES6 中的八进制表示法</span>\n<span class="token keyword">var</span> octalLiteral <span class="token operator">=</span> <span class="token number">484</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> notANumber <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> infinityNumber <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',16),v=(0,e.Uk)("其中 "),h=(0,e._)("code",null,"0b1010",-1),f=(0,e.Uk)(" 和 "),w=(0,e._)("code",null,"0o744",-1),B=(0,e.Uk)(" 是 "),E={href:"http://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},_=(0,e.Uk)("ES6 中的二进制和八进制表示法"),U=(0,e.Uk)("，它们会被编译为十进制数字。"),x=(0,e.uE)('<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><p>使用 <code>string</code> 定义字符串类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> myAge<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 模板字符串</span>\n<span class="token keyword">let</span> sentence<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.\nI&#39;ll be </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myAge <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old next month.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>编译结果:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> myAge <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>\n<span class="token comment">// 模板字符串</span>\n<span class="token keyword">var</span> sentence <span class="token operator">=</span>\n  <span class="token string">&quot;Hello, my name is &quot;</span> <span class="token operator">+</span>\n  myName <span class="token operator">+</span>\n  <span class="token string">&quot;.\\nI&#39;ll be &quot;</span> <span class="token operator">+</span>\n  <span class="token punctuation">(</span>myAge <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span>\n  <span class="token string">&quot; years old next month.&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',5),A=(0,e.Uk)("其中 "),S=(0,e._)("code",null,"`",-1),N=(0,e.Uk)(" 用来定义 "),T={href:"http://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2",target:"_blank",rel:"noopener noreferrer"},q=(0,e.Uk)("ES6 中的模板字符串"),C=(0,e.Uk)("，"),W=(0,e._)("code",null,"${expr}",-1),j=(0,e.Uk)(" 用来在模板字符串中嵌入表达式。"),L=(0,e.uE)('<h2 id="空值" tabindex="-1"><a class="header-anchor" href="#空值" aria-hidden="true">#</a> 空值</h2><p>JavaScript 没有空值(Void)的概念，在 TypeScript 中，可以用 <code>void</code> 表示没有任何返回值的函数:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">alertName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;My name is Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>声明一个 <code>void</code> 类型的变量没有什么用，因为您只能将它赋值为 <code>undefined</code> 和 <code>null</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> unusable<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="null-和-undefined" tabindex="-1"><a class="header-anchor" href="#null-和-undefined" aria-hidden="true">#</a> Null 和 Undefined</h2><p>在 TypeScript 中，可以使用 <code>null</code> 和 <code>undefined</code> 来定义这两个原始数据类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> n<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>与 <code>void</code> 的区别是，<code>undefined</code> 和 <code>null</code> 是所有类型的子类型。也就是说 <code>undefined</code> 类型的变量，可以赋值给 <code>number</code> 类型的变量:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 这样不会报错</span>\n<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 这样也不会报错</span>\n<span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>而 <code>void</code> 类型的变量不能赋值给 <code>number</code> 类型的变量:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>\n\n<span class="token comment">// Type &#39;void&#39; is not assignable to type &#39;number&#39;.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',14),P={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"},z=(0,e.Uk)("Basic Types"),D=(0,e.Uk)("("),F={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html",target:"_blank",rel:"noopener noreferrer"},I=(0,e.Uk)("中文版"),J=(0,e.Uk)(")"),H={href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive",target:"_blank",rel:"noopener noreferrer"},$=(0,e.Uk)("Primitive data types"),G={href:"http://es6.ruanyifeng.com/#docs/symbol",target:"_blank",rel:"noopener noreferrer"},M=(0,e.Uk)("ES6 中的新类型 "),O=(0,e._)("code",null,"Symbol",-1),R={href:"http://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},V=(0,e.Uk)("ES6 中的二进制和八进制表示法"),Y={href:"http://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2",target:"_blank",rel:"noopener noreferrer"},Z=(0,e.Uk)("ES6 中的模板字符串"),K={},Q=(0,a(83744).Z)(K,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("p",null,[p,(0,e._)("a",t,[o,(0,e.Wm)(a)]),l]),(0,e._)("p",null,[r,c,i,u,d,(0,e._)("a",k,[b,m,(0,e.Wm)(a)]),y]),g,(0,e._)("p",null,[v,h,f,w,B,(0,e._)("a",E,[_,(0,e.Wm)(a)]),U]),x,(0,e._)("p",null,[A,S,N,(0,e._)("a",T,[q,(0,e.Wm)(a)]),C,W,j]),L,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",P,[z,(0,e.Wm)(a)]),D,(0,e._)("a",F,[I,(0,e.Wm)(a)]),J]),(0,e._)("li",null,[(0,e._)("a",H,[$,(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e._)("a",G,[M,O,(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e._)("a",R,[V,(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e._)("a",Y,[Z,(0,e.Wm)(a)])])])],64)}]])},37181:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-85f3d8a2",path:"/code/language/typescript/basics/primitive-data-types.html",title:"原始数据类型",lang:"zh-CN",frontmatter:{title:"原始数据类型",icon:"type",category:["TypeScript"],head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/typescript/basics/primitive-data-types.html"}],["meta",{property:"og:title",content:"原始数据类型"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:"<p>JavaScript 的类型分为两种: 原始数据类型([Primitive data types][])和对象类型(Object types)。</p>\n<p>原始数据类型包括: 布尔值、数值、字符串、<code>null</code>、<code>undefined</code> 以及 [ES6 中的新类型 <code>Symbol</code>][]。</p>\n<p>本节主要介绍<strong>前五种</strong>原始数据类型在 TypeScript 中的应用。</p>\n",headers:[{level:2,title:"布尔值",slug:"布尔值",children:[]},{level:2,title:"数值",slug:"数值",children:[]},{level:2,title:"字符串",slug:"字符串",children:[]},{level:2,title:"空值",slug:"空值",children:[]},{level:2,title:"Null 和 Undefined",slug:"null-和-undefined",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],git:{createdTime:1591204114e3,updatedTime:1591204114e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:2.74,words:821},filePathRelative:"code/language/typescript/basics/primitive-data-types.md"}}}]);