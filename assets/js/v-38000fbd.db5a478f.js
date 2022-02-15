"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[15684],{54492:(n,a,s)=>{s.r(a),s.d(a,{default:()=>E});var e=s(66252);const t=(0,e._)("p",null,"小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。",-1),p=(0,e.Uk)("整个小程序框架系统分为两部分: "),o=(0,e._)("strong",null,"逻辑层",-1),l=(0,e.Uk)(" (App Service) 和 "),i=(0,e._)("strong",null,"视图层",-1),c=(0,e.Uk)(" (../view)。小程序提供了自己的视图层描述语言 "),r=(0,e.Uk)("WXML"),u=(0,e.Uk)(" 和 "),d=(0,e.Uk)("WXSS"),m=(0,e.Uk)("，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。"),k={id:"响应的数据绑定",tabindex:"-1"},g=(0,e._)("a",{class:"header-anchor",href:"#响应的数据绑定","aria-hidden":"true"},"#",-1),h=(0,e.Uk)(" 响应的数据绑定 "),b=(0,e._)("p",null,"框架的核心是一个响应的数据绑定系统，可以让数据与视图非常简单地保持同步。当做数据修改的时候，只需要在逻辑层修改数据，视图层就会做相应的更新。",-1),v={href:"https://developers.weixin.qq.com/s/l0gLEKmv6gZa",target:"_blank",rel:"noopener noreferrer"},w=(0,e.Uk)("在开发者工具中预览效果"),_=(0,e.uE)('<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- This is our View --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> Hello {{name}}! <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Click me! <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// This is our App Service.</span>\n<span class="token comment">// This is our data.</span>\n<span class="token keyword">const</span> helloData <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;WeChat&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Register a Page.</span>\n<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">data</span><span class="token operator">:</span> helloData<span class="token punctuation">,</span>\n  <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// sent data change to view</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;MINA&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol><li>开发者通过框架将逻辑层数据中的 <code>name</code> 与视图层的 <code>name</code> 进行了绑定，所以在页面一打开的时候会显示 <code>Hello WeChat!</code>；</li><li>当点击按钮的时候，视图层会发送 <code>changeName</code> 的事件给逻辑层，逻辑层找到并执行对应的事件处理函数；</li><li>回调函数触发后，逻辑层执行 <code>setData</code> 的操作，将 <code>data</code> 中的 <code>name</code> 从 <code>WeChat</code> 变为 <code>MINA</code>，因为该数据和视图层已经绑定了，从而视图层会自动改变为 <code>Hello MINA!</code>。</li></ol><h2 id="页面管理" tabindex="-1"><a class="header-anchor" href="#页面管理" aria-hidden="true">#</a> 页面管理</h2>',4),f=(0,e._)("strong",null,"框架",-1),U=(0,e.Uk)(" 管理了整个小程序的页面路由，可以做到页面间的无缝切换，并给以页面完整的 "),x=(0,e.Uk)("生命周期"),y=(0,e.Uk)("。开发者需要做的只是将页面的数据、方法、生命周期函数注册到 "),W=(0,e._)("strong",null,"框架",-1),L=(0,e.Uk)(" 中，其他的一切复杂的操作都交由 "),A=(0,e._)("strong",null,"框架",-1),R=(0,e.Uk)(" 处理。"),P=(0,e._)("h2",{id:"基础组件",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#基础组件","aria-hidden":"true"},"#"),(0,e.Uk)(" 基础组件")],-1),q=(0,e._)("strong",null,"框架",-1),S=(0,e.Uk)(" 提供了一套基础的 "),C=(0,e.Uk)("组件"),N=(0,e.Uk)("，"),I=(0,e.Uk)("这些组件"),M=(0,e.Uk)(" 自带微信风格的样式以及特殊的逻辑，开发者可以通过组合基础组件，创建出强大的微信小程序 。"),T=(0,e._)("h2",{id:"丰富的-api",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#丰富的-api","aria-hidden":"true"},"#"),(0,e.Uk)(" 丰富的 API")],-1),D=(0,e._)("strong",null,"框架",-1),H=(0,e.Uk)(" 提供丰富的 "),X=(0,e.Uk)("微信原生 API"),j=(0,e.Uk)("，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。"),z={},E=(0,s(83744).Z)(z,[["render",function(n,a){const s=(0,e.up)("RouterLink"),z=(0,e.up)("Badge"),E=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[p,(0,e.Wm)(s,{to:"/code/mini-app/guide/service/"},{default:(0,e.w5)((()=>[o])),_:1}),l,(0,e.Wm)(s,{to:"/code/mini-app/guide/view/"},{default:(0,e.w5)((()=>[i])),_:1}),c,(0,e.Wm)(s,{to:"/code/mini-app/guide/view/wxml.html"},{default:(0,e.w5)((()=>[r])),_:1}),u,(0,e.Wm)(s,{to:"/code/mini-app/guide/view/wxss.html"},{default:(0,e.w5)((()=>[d])),_:1}),m]),(0,e._)("h2",k,[g,h,(0,e.Wm)(z,{text:"务必理解",type:"error"})]),b,(0,e._)("p",null,[(0,e._)("a",v,[w,(0,e.Wm)(E)])]),_,(0,e._)("p",null,[f,U,(0,e.Wm)(s,{to:"/code/mini-app/guide/service/lifetime.html"},{default:(0,e.w5)((()=>[x])),_:1}),y,W,L,A,R]),P,(0,e._)("p",null,[q,S,(0,e.Wm)(s,{to:"/code/mini-app/guide/view/component.html"},{default:(0,e.w5)((()=>[C])),_:1}),N,(0,e.Wm)(s,{to:"/code/mini-app/guide/view/component.html"},{default:(0,e.w5)((()=>[I])),_:1}),M]),T,(0,e._)("p",null,[D,H,(0,e.Wm)(s,{to:"/code/mini-app/guide/service/api/"},{default:(0,e.w5)((()=>[X])),_:1}),j])],64)}]])},38894:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-38000fbd",path:"/code/mini-app/guide/frame/intro.html",title:"框架",lang:"zh-CN",frontmatter:{title:"框架",icon:"frame",category:["小程序"],head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/frame/intro.html"}],["meta",{property:"og:title",content:"框架"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:'<p>小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。</p>\n<p>整个小程序框架系统分为两部分: <RouterLink to="/code/mini-app/guide/service/"><strong>逻辑层</strong></RouterLink> (App Service) 和 <RouterLink to="/code/mini-app/guide/view/"><strong>视图层</strong></RouterLink> (../view)。小程序提供了自己的视图层描述语言 <RouterLink to="/code/mini-app/guide/view/wxml.html">WXML</RouterLink> 和 <RouterLink to="/code/mini-app/guide/view/wxss.html">WXSS</RouterLink>，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。</p>\n',headers:[{level:2,title:"响应的数据绑定",slug:"响应的数据绑定",children:[]},{level:2,title:"页面管理",slug:"页面管理",children:[]},{level:2,title:"基础组件",slug:"基础组件",children:[]},{level:2,title:"丰富的 API",slug:"丰富的-api",children:[]}],git:{createdTime:1610439651e3,updatedTime:1644163298e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:4}]},readingTime:{minutes:2.13,words:638},filePathRelative:"code/mini-app/guide/frame/intro.md"}}}]);