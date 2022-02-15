"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[21125],{6730:(n,a,s)=>{s.r(a),s.d(a,{default:()=>d});var p=s(66252);const t=(0,p._)("h2",{id:"未启动时更新",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#未启动时更新","aria-hidden":"true"},"#"),(0,p.Uk)(" 未启动时更新")],-1),e=(0,p._)("p",null,"开发者在管理后台发布新版本的小程序之后，如果某个用户本地有小程序的历史版本，此时打开的可能还是旧版本。微信客户端会有若干个时机去检查本地缓存的小程序有没有更新版本，如果有则会静默更新到新版本。总的来说，开发者在后台发布新版本之后，无法立刻影响到所有现网用户，但最差情况下，也在发布之后 24 小时之内下发新版本信息到用户。用户下次打开时会先更新最新版本再打开。",-1),o=(0,p._)("h2",{id:"启动时更新",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#启动时更新","aria-hidden":"true"},"#"),(0,p.Uk)(" 启动时更新")],-1),c=(0,p._)("p",null,"小程序每次冷启动时，都会检查是否有更新版本，如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上。",-1),l=(0,p.Uk)("如果需要马上应用最新版本，可以使用 "),u={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html",target:"_blank",rel:"noopener noreferrer"},r=(0,p._)("code",null,"wx.getUpdateManager",-1),i=(0,p.Uk)(" API 进行处理。"),k=(0,p.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> updateManager <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getUpdateManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nupdateManager<span class="token punctuation">.</span><span class="token function">onCheckForUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 请求完新版本信息的回调</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>hasUpdate<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nupdateManager<span class="token punctuation">.</span><span class="token function">onUpdateReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  wx<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;更新提示&quot;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;新版本已经准备好，是否重启应用？&quot;</span><span class="token punctuation">,</span>\n    <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启</span>\n        updateManager<span class="token punctuation">.</span><span class="token function">applyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nupdateManager<span class="token punctuation">.</span><span class="token function">onUpdateFailed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 新版本下载失败</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>',1),m={},d=(0,s(83744).Z)(m,[["render",function(n,a){const s=(0,p.up)("ExternalLinkIcon");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,e,o,c,(0,p._)("p",null,[l,(0,p._)("a",u,[r,(0,p.Wm)(s)]),i]),k],64)}]])},38469:(n,a,s)=>{s.r(a),s.d(a,{data:()=>p});const p={key:"v-37957440",path:"/code/mini-app/guide/frame/update.html",title:"小程序更新机制",lang:"zh-CN",frontmatter:{title:"小程序更新机制",icon:"update",category:["小程序"],head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/frame/update.html"}],["meta",{property:"og:title",content:"小程序更新机制"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:"",headers:[{level:2,title:"未启动时更新",slug:"未启动时更新",children:[]},{level:2,title:"启动时更新",slug:"启动时更新",children:[]}],git:{createdTime:1611033126e3,updatedTime:1611033126e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:1.21,words:362},filePathRelative:"code/mini-app/guide/frame/update.md"}}}]);