"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8316],{6838:(e,i,t)=>{t.r(i),t.d(i,{default:()=>A});var a=t(8e3);const n=(0,a._)("h2",{id:"please-improve",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#please-improve","aria-hidden":"true"},"#"),(0,a.Uk)(" Please Improve")],-1),l=(0,a._)("p",null,"This is just trying to make sense of the power of the AD. By no means authoritative yet. Any ideas and graphics are welcome! - Red1 21:04, 25 September 2008 (EDT)",-1),r=(0,a._)("h2",{id:"introduction",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),(0,a.Uk)(" Introduction")],-1),o=(0,a.Uk)("Basically the architecture or model of "),s={href:"https://wiki.adempiere.net/ADempiere",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("ADempiere"),c=(0,a.Uk)(" is based on Compiere's Application Dictionary or AD Engine. It resolves the Model-View-Logic model of modern software design."),h=(0,a._)("li",null,[(0,a._)("strong",null,"AD's Model Layer:"),(0,a.Uk)(" Manages all entities, including the core database table and field structure, data types, references, and validation rules.")],-1),u=(0,a._)("li",null,[(0,a._)("strong",null,"AD's View Layer:"),(0,a.Uk)(" Handles presentation in both Java and HTML clients, eliminating the need for developers to write any extra user interface code.")],-1),p=(0,a._)("li",null,[(0,a._)("strong",null,"AD's Logic Layer:"),(0,a.Uk)(" Houses all business logic and auxiliary activities.")],-1),m=(0,a._)("li",null,"The software is constructed from the ground up with inherent capabilities, including the MULTIs features such as multi-language, multi-org, multi-currencies, and the Log4Java debugging set. It also employs powerful Java Objects like Environment & Context, Persistence, Web, and Application Service.",-1),g=(0,a._)("li",null,"The CRM and Webstore components are custom-built, reducing reliance on AD, especially the AD Menu and AD Window.",-1),y=(0,a._)("li",null,"The AD Framework is highly significant as it enforces discipline in the software application, segregating tasks into distinct layers and enabling developers to focus directly on business functionality without distractions from the underlying structure.",-1),f=(0,a.uE)('<h3 id="at-the-model-layer" tabindex="-1"><a class="header-anchor" href="#at-the-model-layer" aria-hidden="true">#</a> At the Model Layer</h3><ul><li>All Table and Field structure are defined in the AD Table &amp; Column window.</li><li>Each field&#39;s properties such as datatype and reference are defined in the same window.</li><li>Such a reference can call up any resident Database table to return any defined value.</li><li>A field can possess a validation rule defined in the AD Validation window.</li><li>Such validation can inject JavaScript, Java code, or SQL script into the application to filter the returning value of a reference.</li><li>A field can update other fields on the window or the underlying database via core callouts. The Java framework to introduce such callouts is simply by extending the CalloutEngine.java and accessing the MTab to getValue or setValue.</li><li>Any changes to the model, such as introducing a new table to the database, are done via the AD Table &amp; Column window.</li><li>The AD Engine resolves the preparation of the table and field structure for the View level, such as displaying via standard user interfaces or reporting formats.</li></ul><h3 id="at-the-view-layer" tabindex="-1"><a class="header-anchor" href="#at-the-view-layer" aria-hidden="true">#</a> At the View Layer</h3><ul><li>As the Model is taken care of, the View Layer presents the Model to the UI, whether it&#39;s the Java Swing or HTML Clients.</li><li>All CRUD (create, read, update, delete) functions are automatically handled and appear in the client interfaces without additional changes or effort during the definition of new model changes.</li><li>The UI is aware of new records, mandatory fields, and saving errors.</li><li>It enables powerful search functions and field preference settings according to the User ID.</li><li>The View Layer is managed by AD Menu, AD Window, and AD Process &amp; Report.</li></ul><h3 id="at-the-logic-layer" tabindex="-1"><a class="header-anchor" href="#at-the-logic-layer" aria-hidden="true">#</a> At the Logic Layer</h3><ul><li>A lot of the visible power of the ERP Application occurs here, starting with auxiliary and accessory functions such as User Login, Role Access, and Workflow reactions.</li><li>In a way, the Logic Layer is further separated from this Accessory portion, forming its own Business Logic area which the functional developer is most interested in.</li><li>The Accessory portion is isolated from all the other layers to function independently, avoiding introduction of bugs from other layers. Developers are free to modify the Application Dictionary to meet business demands.</li><li>Logic that isn&#39;t handled in the above layers is managed by Callouts and Model Classes under the control of the ModelValidator.</li><li>Core business logic processes like Aging Analysis, Converting Requisition to Purchase Order, or Completing Orders are managed by Java classes called by the AD Report &amp; Process engine. Input parameter selection is facilitated for easy configuration by the developer in the fully Object Oriented Java environment.</li><li>The ADempiere project has further refined the logic portion of the application by introducing: <ul><li>Separation of extended logic from core logic <ul><li>This is acheived by strictly extending the ModelValidator scheme to cover dynamic usage instead of just static as inherited from Compiere.</li><li>This is used in the Table and Column window where a 3rd tab for Table Script Validator is allocated.</li></ul></li><li>Introduction of JSR223 Scripting in Rule Engine. <ul><li>A callout may now utilise different programming scripting such as Groovy, Python or Ruby if compliable.</li><li>This gives scalability of application design and also &#39;developer scalability&#39; can improve tremendously.</li></ul></li></ul></li></ul><h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h2><ul><li>ERP is complex and an ERP Software Application can be even more complex. The role of the AD is very vital and ingenious in dealing away with as much complexity of the software components as possible to leave the users a clearer learning curve into the application.</li></ul><h2 id="please-see" tabindex="-1"><a class="header-anchor" href="#please-see" aria-hidden="true">#</a> Please See</h2>',9),v=(0,a.Uk)("ADempiere Rapid Development"),w=(0,a.Uk)(" shows how ADempiere acts as a development framework to do fast prototyping and eventual enterprise software development."),b={},A=(0,t(3860).Z)(b,[["render",function(e,i){const t=(0,a.up)("ExternalLinkIcon"),b=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[n,l,r,(0,a._)("ul",null,[(0,a._)("li",null,[o,(0,a._)("a",s,[d,(0,a.Wm)(t)]),c]),h,u,p,m,g,y]),f,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(b,{to:"/community/wiki/developers-guide/adempiere-rapid-development.html"},{default:(0,a.w5)((()=>[v])),_:1}),w])])])}]])},9726:(e,i,t)=>{t.r(i),t.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-1ff399d4","path":"/community/wiki/developers-guide/application-dictionary-layers.html","title":"Application Dictionary Layers","lang":"en-US","frontmatter":{"title":"Application Dictionary Layers","category":["Community"],"star":9,"sticky":9,"tag":["Wiki","Developer\'s Guide"],"article":false,"summary":"Please Improve This is just trying to make sense of the power of the AD. By no means authoritative yet. Any ideas and graphics are welcome! - Red1 21:04, 25 September 2008 (EDT) In","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/developers-guide/application-dictionary-layers.html"}],["meta",{"property":"og:title","content":"Application Dictionary Layers"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-21T19:56:54.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Developer\'s Guide"}],["meta",{"property":"article:modified_time","content":"2023-08-21T19:56:54.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Please Improve","slug":"please-improve","children":[]},{"level":2,"title":"Introduction","slug":"introduction","children":[{"level":3,"title":"At the Model Layer","slug":"at-the-model-layer","children":[]},{"level":3,"title":"At the View Layer","slug":"at-the-view-layer","children":[]},{"level":3,"title":"At the Logic Layer","slug":"at-the-logic-layer","children":[]}]},{"level":2,"title":"Conclusion","slug":"conclusion","children":[]},{"level":2,"title":"Please See","slug":"please-see","children":[]}],"git":{"createdTime":1692647814000,"updatedTime":1692647814000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.69,"words":807},"filePathRelative":"community/wiki/developers-guide/application-dictionary-layers.md","localizedDate":"August 21, 2023"}')}}]);