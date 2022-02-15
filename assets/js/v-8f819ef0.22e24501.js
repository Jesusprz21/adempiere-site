"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[23525],{44670:(e,t,o)=>{o.r(t),o.d(t,{default:()=>E});var i=o(66252);const n=(0,i.uE)('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>in 东师小程序的大部分页面都均由 YAML 文件生成。开发者只需要使用编辑器编辑 YAML，即可增添或修改小程序页面。</p><div class="custom-container info"><p class="custom-container-title">YAML</p><p>YAML 是专门用来写配置文件的语言，非常简洁和强大，其设计目标，就是方便人类读写。</p></div><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2>',4),l=(0,i.Uk)("为了编写小程序页面配置文件，您需要先学习 "),r=(0,i.Uk)("YAML 的规则"),a=(0,i.Uk)("，同时简单浏览一下一款编辑器 "),d=(0,i.Uk)("VSCode 的介绍"),c=(0,i.Uk)("掌握上述两个内容之后，您就可以尝试对照 "),h=(0,i.Uk)("小程序简易参数表"),s=(0,i.Uk)(" 通过 VSCode 编写页面 YAML 文件了，如果您觉得直接上手太难，您可以参阅 "),u=(0,i.Uk)("交互式教程"),p=(0,i.Uk)(" 来体验一个示例。"),m={class:"custom-container tip"},g=(0,i._)("p",{class:"custom-container-title"},"更多参考",-1),f=(0,i.Uk)("所有的小程序页面都在 "),k={href:"https://github.com/Hope-Studio/innenu-res/blob/main/res/",target:"_blank",rel:"noopener noreferrer"},b=(0,i.Uk)("https://github.com/Hope-Studio/innenu-res/blob/main/res/"),_=(0,i.Uk)(" 下，您可以尽情的进行参考。"),v=(0,i.uE)('<h2 id="开发注意事项" tabindex="-1"><a class="header-anchor" href="#开发注意事项" aria-hidden="true">#</a> 开发注意事项</h2><p>下面是开发中需要注意的一些问题。</p><h3 id="文件命名" tabindex="-1"><a class="header-anchor" href="#文件命名" aria-hidden="true">#</a> 文件命名</h3><p>由于小程序的访问是通过网址进行的，需要避免中文。页面 YAML 和媒体文件的文件名，请遵守以下命名规则:</p><ol><li>文件名只包含英文与数字和 <code>-</code>，不要包含特殊符号、空格或者中文字符。由多个单词组成的文件名建议使用 <code>-</code> 链接。如 <code>厚普公益学校</code> 可以表示为 <code>hope-good-school</code>。</li><li>尽可能使用简短的单词，必要时可缩写，比如使用 <code>intro</code> <code>desc</code> <code>guide</code> 而不是 <code>introduction</code> <code>description</code>，<code>handbook</code>。</li><li>表达相同或相近内容的多个媒体文件用 &quot;短词组+编号&quot; 的形式即可，不要试图用很长的文字命名。</li></ol><h3 id="文本排版" tabindex="-1"><a class="header-anchor" href="#文本排版" aria-hidden="true">#</a> 文本排版</h3><ol><li>中文和英文之间最好使用空格隔开</li><li>尽量使用英文的括号</li></ol><h3 id="注意高亮" tabindex="-1"><a class="header-anchor" href="#注意高亮" aria-hidden="true">#</a> 注意高亮</h3><p>如果您在使用 VSCode 进行编辑，您可能会注意到，数字和布尔值、字符串、对象的键名使用三种不同的颜色进行高亮。</p><p>如果您编写的文件出现“红色波浪线”，或您编写的内容的高亮颜色，和其类型不符，那么说明您编写的格式出现了错误。</p><h3 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩" aria-hidden="true">#</a> 图片压缩</h3>',11),U=(0,i.Uk)("图片在拍摄需使用 "),x={href:"https://squoosh.app/",target:"_blank",rel:"noopener noreferrer"},w=(0,i.Uk)("Squoosh"),M=(0,i.Uk)(" 进行压缩。"),L=(0,i.uE)('<ul><li>含有透明区域的图片需要压缩至 Brower PNG 格式</li><li>Gif 无需压缩</li><li>其他图片压缩到 MozJpeg</li></ul><p>不含有文字、不需要细节的图片保持 4 万左右分辨率即可，如果图片使用后置摄像机拍摄，即 12 万或 20 万像素，压缩时可酌情考虑 50%缩放。</p><h3 id="文件转码" tabindex="-1"><a class="header-anchor" href="#文件转码" aria-hidden="true">#</a> 文件转码</h3><p>由于 QQ 小程序对 2003 版本 Office 格式支持极差，即 <code>.doc</code> <code>.xls</code> <code>.ppt</code>。如遇到此类文件，请尝试用 Office 打开，并转换为最新版格式 (<code>docx</code>、<code>xlsx</code>、<code>pptx</code>)。具体方式为 “文件” - “信息” - “转换”。</p><h3 id="媒体文件存放" tabindex="-1"><a class="header-anchor" href="#媒体文件存放" aria-hidden="true">#</a> 媒体文件存放</h3><p>由于 YAML 是纯文本文件，所有的图片、文件等需单独列出，并在对应的配置项处填入对应的网址。</p><p>如:</p><ul><li><strong>img</strong> 组件的 <code>src</code></li><li><strong>doc</strong> 组件的 <code>url</code></li></ul><p>in 东师服务器文件结构如下:</p><ul><li>文件存放在 <code>https://mp.innenu.com/file/</code> 下</li><li>图片存放在 <code>https://mp.innenu.com/img/</code> 下</li><li>页面 YAML 存放在 <code>https://mp.innenu.com/res/</code> 下</li><li>图标存放在 <code>https://mp.innenu.com/res/icon/</code> 下</li></ul>',10),A={class:"custom-container info"},Y=(0,i._)("p",{class:"custom-container-title"},"相关信息",-1),y=(0,i.Uk)("关于完整的服务器文件结构，请访问 "),S={href:"https://github.com/Hope-Studio/innenu-res",target:"_blank",rel:"noopener noreferrer"},C=(0,i.Uk)("https://github.com/Hope-Studio/innenu-res"),W={},E=(0,o(83744).Z)(W,[["render",function(e,t){const o=(0,i.up)("RouterLink"),W=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i._)("ol",null,[(0,i._)("li",null,[l,(0,i.Wm)(o,{to:"/note/innenu/yaml.html"},{default:(0,i.w5)((()=>[r])),_:1}),a,(0,i.Wm)(o,{to:"/software/vscode/simple.html"},{default:(0,i.w5)((()=>[d])),_:1})]),(0,i._)("li",null,[c,(0,i.Wm)(o,{to:"/note/innenu/tag-list.html"},{default:(0,i.w5)((()=>[h])),_:1}),s,(0,i.Wm)(o,{to:"/note/innenu/get-started.html"},{default:(0,i.w5)((()=>[u])),_:1}),p])]),(0,i._)("div",m,[g,(0,i._)("p",null,[f,(0,i._)("a",k,[b,(0,i.Wm)(W)]),_])]),v,(0,i._)("p",null,[U,(0,i._)("a",x,[w,(0,i.Wm)(W)]),M]),L,(0,i._)("div",A,[Y,(0,i._)("p",null,[y,(0,i._)("a",S,[C,(0,i.Wm)(W)])])])],64)}]])},95490:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-8f819ef0",path:"/note/innenu/",title:"in东师小程序贡献指南",lang:"zh-CN",frontmatter:{title:"in东师小程序贡献指南",icon:"info",category:["小程序"],head:[["meta",{property:"og:url",content:"https://mrhope.site/note/innenu/"}],["meta",{property:"og:title",content:"in东师小程序贡献指南"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:"",headers:[{level:2,title:"简介",slug:"简介",children:[]},{level:2,title:"快速上手",slug:"快速上手",children:[]},{level:2,title:"开发注意事项",slug:"开发注意事项",children:[{level:3,title:"文件命名",slug:"文件命名",children:[]},{level:3,title:"文本排版",slug:"文本排版",children:[]},{level:3,title:"注意高亮",slug:"注意高亮",children:[]},{level:3,title:"图片压缩",slug:"图片压缩",children:[]},{level:3,title:"文件转码",slug:"文件转码",children:[]},{level:3,title:"媒体文件存放",slug:"媒体文件存放",children:[]}]}],git:{createdTime:1644163298e3,updatedTime:1644163298e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:2.88,words:864},filePathRelative:"note/innenu/README.md"}}}]);