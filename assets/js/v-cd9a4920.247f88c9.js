"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2466],{6730:(e,i,n)=>{n.r(i),n.d(i,{default:()=>w});var r=n(8e3);const o=(0,r.uE)('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>The followings are the sequences of method invocations for different actions in ADempiere, e.g. when you click on a tree node to open a window.</p><h2 id="the-sequence" tabindex="-1"><a class="header-anchor" href="#the-sequence" aria-hidden="true">#</a> The Sequence</h2><p><em>Note: Indentation means levels of invocation.</em></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>org.compiere.Adempiere.main()\n 1 org.compiere.util.Splash.getSplash(): Gets an instance of the splash window.\n   1.1 org.compiere.util.Splash.getSplash(String): Gets a new instance of the splash window.\n     1.1.1 org.compiere.util.Splash.Splash(): Creates a new instance of the splash window.\n       1.1.1.1 org.compiere.util.Splash.jbInit(): Statically initialise the ADempiere splash window.\n       1.1.1.2 org.compiere.util.Splash.display(): Shows the ADempiere splash window.\n 2 org.compiere.Adempiere.startup(): Startup Client/Server, prints greeting, checks for Java version and load ini parameters.\n   2.1 org.compiere.util.Login.isJavaOK(): Checks the JDK version.\n   2.2 org.compiere.util.CLogMgt.initialize(): Initialises all log related objects.\n     2.2.1 org.compiere.util.CLogErrorBuffer.get(): Gets an instance of the client error buffer.\n       2.2.1.1 org.compiere.util.CLogErrorBuffer.CLogErrorBuffer(): Creates a new instance of the client error buffer.\n         2.2.1.1.1 org.compiere.util.CLogErrorBuffer.initialize(): Sets level, filter and formatter.\n           2.2.1.1.1.1 org.compiere.util.CLogFormatter.get():Gets an instance of the formatter.\n             2.2.1.1.1.1.1 org.compiere.util.CLogFormatter.CLogFormatter(): Creates a new instance of the formatter.\n           2.2.1.1.1.2 org.compiere.util.CLogFilter.get(): Gets  an instance of the filter.\n             2.2.1.1.1.2.1 org.compiere.util.CLogFilter.CLogFilter(): Creates a new instance of the filter.\n     2.2.2 org.compiere.util.CLogConsol.get(): Gets an instance of ADempiere console logger.\n       2.2.2.1 org.compiere.util.ClogConsol.CLogConsole(): Creates a new instance of ADempiere console logger.\n         2.2.2.1.1 org.compiere.util.ClogConsol.initialize(): Sets writers, filter, level and formatter.\n           2.2.2.1.1.1 org.compiere.util.CLogFormatter.get():Gets an instance of the formatter.\n             2.2.2.1.1.1.1 org.compiere.util.CLogFormatter.CLogFormatter(): Creates a new instance of the formatter.\n           2.2.2.1.1.2 org.compiere.util.CLogFilter.get(): Gets  an instance of the filter.\n             2.2.2.1.1.2.1 org.compiere.util.CLogFilter.CLogFilter(): Creates a new instance of the filter.\n     2.2.3 org.compiere.util.CLogFile.get(): Gets an instance of log file for server.\n       2.2.3.1 org.compiere.util.CLogFile.CLogFile(): Creates a new instance of log file for server.\n     2.2.4 org.compiere.util.CLogFormatter.get(): Gets an instance of the formatter.\n     2.2.5 org.compiere.util.CLogMgt.setFormatter(): Sets formatter for all handlers.\n     2.2.6 org.compiere.util.CLogFilter.get(): Gets  an instance of the filter.\n     2.2.7 org.compiere.util.CLogMgt.setFilter(): Sets filter for all handlers.\n     2.2.8 org.compiere.CLogMgtLog4J.initialize(): Initialises log4j logging mechanism.\n   2.3 org.compiere.Ini.setClient(): Sets client mode.\n   2.4 org.compiere.util.CLogger.getCLogger(Class): Gets an instance of the logger.\n     2.4.1 org.compiere.util.CLogger.getCLogger(String): Gets an instance of the logger.\n       2.4.1.1 org.compiere.util.CLogger.CLogger(): Creates a new instance of the logger.\n   2.5 org.compiere.util.Ini.loadProperties(boolean): Loads INI parameters.\n     2.5.1 org.compiere.util.Ini.getFileName(): Returns name of the INI file.\n     2.5.2 org.compiere.Ini.loadProperties(String): Loads INI parameters from file.\n       2.5.2.1 org.compiere.Ini.checkProperty(): Loads a property and sets it to default if does not exist.\n         2.5.2.1.1 org.compiere.util.SecureEngine.encrypt(): Encrypts a clear text value.\n           2.5.2.1.1.1 org.compiere.util.SecureEngine.init(): Initialises cipher and security engine.\n             2.5.2.1.1.1.1 org.compiere.util.SecureEngine.SecureEngine(): Creates a new instance of the cipher engine.\n               2.5.2.1.1.1.1.1 org.compiere.util.Secure.Secure(): Creates a new instance of cipher object.\n                 2.5.2.1.1.1.1.1.1 org.compiere.util.Secure.initCipher(): Initialises cipher and related key.\n   2.6 org.compiere.util.CLogMgt.setLevel(): Sets log level.\n   2.7 org.compiere.util.CLogMgt.isLevelAll(): Checks if FINEST level is logged.\n   2.8 org.adempiere.plaf.setPLAF(): Sets application look and feel.\n     2.8.1 org.compiere.util.Ini.getProperty(): Gets the value of a property.\n     2.8.2 org.adempiere.plaf.setPLAF(ValueNamePair, ValueNamePair, boolean): Sets application look and feel.\n       2.8.2.1 org.compiere.util.Ini.setProperty(): Sets a property.\n       2.8.2.2 org.adempiere.plaf.AdempiereTheme.newInstance(): Creates a new instance of the theme.\n       2.8.2.3 org.adempiere.plaf.AdempiereLookAndFeel.setCurrentTheme(): Sets current theme.\n   2.9 org.compiere.Adempiere.getCodeBaseHost(): Gets JNLP CodeBase host.\n     2.9.1 org.compiere.Adempiere.getCodeBase(): Gets JNLP CodeBase.\n   2.10 org.compiere.db.CConnection.get(): Gets default cient-server connection.\n     2.10.1 org.compiere.util.Ini.getProperty(): Gets the value of a property.\n     2.10.2 org.compiere.db.CConnection.CConnection(): Creates a new instance of the connection object.\n     2.10.3 org.compiere.db.CConnection.setAttributes(): Sets connection attributes.\n   2.11 org.compiere.util.DB.setDBTarget(): Sets default database connection.\n     2.11.1 org.compiere.util.DB.closeTartget(): Closes target connections.\n     2.11.2 org.compiere.db.CConnection.setDataSource(): Creates database connection.\n       2.11.2.1 org.compiere.db.CConnection.getDataBase(): Gets database.\n 3 org.compiere.apps.AMenu.AMenu(): Creates a new instance of application menu.\n   3.1 org.compiere.Adempiere.getCodeBase(): Gets JNLP CodeBase host.\n   3.2 org.compiere.util.Splash.getSplash(): Gets an instance of the splash window.\n     3.2.1 org.compiere.util.Splash.getSplash(String): Gets an instance of the splash window.\n       3.2.1.1 org.compiere.util.Splash.setText(): Sets splash text.\n   3.3 org.compiere.util.Env.createWindowNo(): Adds current instance of Amenu to the list of active windows.\n   3.4 org.compiere.AMenu.initSystem():\n     3.4.1 org.compiere.Adempiere.getImage16(): Gets ADempiere 16x16 image.\n     3.4.2 org.compiere.apps.ALogin.ALogin():\n       3.4.2.1 org.compiere.util.CLogger.getCLogger(Class): Gets an instance of the Clogger class.\n         3.4.2.1.1 org.compiere.util.CLogger.getCLogger(String): Gets an instance of the Clogger class.\n           3.4.2.1.1.1 org.compiere.util.CLogger.CLogger(): Creates a new instance of the logger.\n           3.4.2.1.1.2 org.compiere.util.CLogger.setLevel(): Sets logger level.\n             3.4.2.1.1.2.1 org.compiere.util.CLogMgt.getLevel(): Gets handlers&#39; logging level.\n     3.4.3 org.compiere.apps.ALogin(Frame): Creates a new instance of ALogin dialogue.\n       3.4.3.1 org.compiere.util.Env.createWindowNo(): Adds a container to the list of active windows.\n       3.4.3.2 Org.compiere.apps.ALogin.jbInit(): Initialises Alogin components.\n     3.4.4 org.compiere.apps.AEnv.showCenterScreen(): Shows a windows centered in the screen. (At his point the login window shows up. After accepting all values, the flow continues to the line below.)\n     3.4.5 org.compiere.util.isDatabaseOK(): Checks database version.\n     3.4.6 org.compiere.Adempiere.startupEnvironment(): Loads environment.\n       3.4.6.1 org.compiere.util.DB.isConnected(): Checks if the client is connected to the database.\n         3.4.6.1.1 org.compiere.util.CLogErrorBuffer.get(): Gets an instance of the client error buffer.\n         3.4.6.1.2 org.compiere.util.DB.getConnectionRW(): Gets a R/W connection.\n       3.4.6.2 org.compiere.model.ModelValidationEngine.get(): Initialises main cached Singletons.\n       3.4.6.3 org.compiere.model.MSystem.get(): Initialises base context.\n       3.4.6.4 org.compiere.model.MSystem.getEncryptionKey(): Gets system encryption key.\n       3.4.6.5 org.compiere.util.SecureEngine.init(): Tests security engine.\n       3.4.6.6 org.compiere.wf.DocWorkflowManager.DocWorkflowManager():\n         3.4.6.6.1 org.compiere.model.PO.setDocWorkflowMgr(): Sets document workflow manager.\n         3.4.6.6.2 org.compiere.wf.DocWorkflowManager.get(): Gets an instance of DocWorkFlowManager.\n           3.4.6.6.2.1 org.compiere.wf.DocWorkflowManager.DocWorkflowManager(): Creates a new instance of the class.\n       3.4.6.7 org.compiere.print.ArchiveEngine.ArchiveEngine(): Creates a new instance of archive engine.\n     3.4.7 org.compiere.model.MSession.get(): Gets an instance of local session.\n       3.4.7.1 org.compiere.model.MSession.MSession(): Creates a new instance of local session.\n         3.4.7.1.1 org.compiere.model.X_AD_Session.setRemote_Addr(): Sets remote address.\n         3.4.7.1.2 org.compiere.model.X_AD_Session.setRemote_Host(): Sets remote host.\n       3.4.7.2 org.compiere.model.MSession.get(): Updates the record or insets a new one into database.\n         3.4.7.2.1 org.compiere.model.PO.save():\n           3.4.7.2.1.1 org.compiere.model.PO.beforeSave(): Does pre-save operations.\n           3.4.7.2.1.2 org.compiere.model.ModelValidationEngine.get(): Gets an instance of the model validation engine.\n           3.4.7.2.1.3 org.compiere.model.ModelValidationEngine.fireModelChange(): Calls modelChange method of added validators.\n           3.4.7.2.1.4 org.compiere.model.PO.saveNew(): Creates a new record.\n             3.4.7.2.1.4.1 org.compiere.util.DB.getNextID(): Gets next number for key column.\n             3.4.7.2.1.4.2 org.compiere.util.DB.lobReset(): Resets LOB info.\n             3.4.7.2.1.4.3 org.compiere.util.DB.executeUpdate(String, String): Executes an update statement.\n               3.4.7.2.1.4.3.1 org.compiere.util.DB.executeUpdate(String, Object[], boolean, String): Execute an update statement.\n             3.4.7.2.1.4.4 org.compiere.util.DB.lobSave(): Saves LOB.\n               3.4.7.2.1.4.4.1 org.compiere.util.DB.lobReset(): Resets LOB info.\n             3.4.7.2.1.4.5 org.compiere.util.DB.load(): Reloads the record.\n             3.4.7.2.1.4.6 org.compiere.util.DB.saveFinish(): Finishes the save process.\n               3.4.7.2.1.4.6.1 org.compiere.util.DB.insertTranslations(): Insert translation records.\n               3.4.7.2.1.4.6.2 org.compiere.util.DB.afterSave(): Does the post-save operations.\n               3.4.7.2.1.4.6.3 org.compiere.wf.DocWorkflowManager.process(): Processes document value workflow.\n                 3.4.7.2.1.4.6.3.1 org.compiere.model.MWorkflow.GetDocValue(): Gets document value work flow.\n   3.5 org.compiere.apps.WFActivity.WFActivity(): Creates a new instance of workflow activity.\n     3.5.1 org.compiere.apps.WFActivity.dynInit(): Dynamic initialisation.\n       3.5.1.1 org.compiere.apps.WFActivity.loadActivities(): Loads work flow activities.\n       3.5.1.2 org.compiere.grid.ed.VLookup.createUser(): Creates an optional user search lookup.\n     3.5.2 org.compiere.apps.WFActivity.jbInit(): Static initialisation.\n   3.6 org.compiere.apps.WFPanel.WFPanel(): Creates a new instance of workflow panel.\n     3.6.1 org.compiere.apps.WFPanel.jbInit(): Static initialisation.\n   3.7 org.compiere.grid.tree.VTreePanel.VTreePanel(): Creates a tree panel for browsing and editing a tree.\n     3.7.1 org.compiere.grid.tree.VTreePanel.jbInit(): Static Initialisation.\n   3.8 org.compiere.apps.AMenu.jbInit(): Static Initialisation.\n   3.9 org.compiere.apps.AMenu.createMenu(): Creates the menu bar.\n   3.10 org.compiere.grid.tree.VTreePanel.initTree(): Initialises the tree.\n       3.10.1.1 org.compiere.model.MTree.MTree_Base(): Base tree model.\n         3.10.1.1.1 org.compiere.util.CCache.CCache(): Creates a new instance of ADempiere&#39;s cache.\n           3.10.1.1.1.1 org.compiere.util.CacheMgt.register(): Register the cache instance.\n     3.10.2 org.compiere.model.MTree.MTree(): Constructs and loads a tree.\n       3.10.2.1 org.compiere.model.MTree.loadNodes(): Load tree nodes and bar.\n         3.10.2.1.1 org.compiere.model.MTree.getNodeDetails(): Loads node details.\n   3.11 org.compiere.apps.AMenu.updateInfo(): Shows Memory Info, runs GC if required and updates Requests/Memos/Activities.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="other-formats" tabindex="-1"><a class="header-anchor" href="#other-formats" aria-hidden="true">#</a> Other Formats</h3>',6),t=(0,r.Uk)("PDF: "),s={href:"http://www.adempiere.com/wiki/images/6/69/Startup-Invocation-Sequence.pdf",target:"_blank",rel:"noopener noreferrer"},a=(0,r.Uk)("[1]"),l=(0,r.Uk)("DOC: "),c={href:"http://www.adempiere.com/wiki/images/d/d3/Startup-Invocation-Sequence.doc",target:"_blank",rel:"noopener noreferrer"},d=(0,r.Uk)("[2]"),m=(0,r.uE)('<h3 id="tree-node-click" tabindex="-1"><a class="header-anchor" href="#tree-node-click" aria-hidden="true">#</a> Tree Node Click</h3><p><a href="a">Wiki Format</a></p><h2 id="accounting-server-initialisation" tabindex="-1"><a class="header-anchor" href="#accounting-server-initialisation" aria-hidden="true">#</a> Accounting Server Initialisation</h2><p><em>Note: This section documents&#39; may contain some bugs or errors. Feel free to edit the DOC and replace the PDF in case of errors.</em></p>',4),g=(0,r._)("li",null,[(0,r._)("p",null,[(0,r._)("a",{href:"a"},"Wiki Format")])],-1),u=(0,r.Uk)("PDF: "),v={href:"http://www.adempiere.com/wiki/images/6/6f/AcctServerInit.pdf",target:"_blank",rel:"noopener noreferrer"},p=(0,r.Uk)("[5]"),h=(0,r.Uk)("DOC: "),b={href:"http://www.adempiere.com/wiki/images/8/8a/AcctServerInit.doc",target:"_blank",rel:"noopener noreferrer"},f=(0,r.Uk)("[6]"),C={},w=(0,n(3860).Z)(C,[["render",function(e,i){const n=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[o,(0,r._)("ul",null,[(0,r._)("li",null,[t,(0,r._)("a",s,[a,(0,r.Wm)(n)])]),(0,r._)("li",null,[l,(0,r._)("a",c,[d,(0,r.Wm)(n)])])]),m,(0,r._)("ul",null,[g,(0,r._)("li",null,[(0,r._)("p",null,[u,(0,r._)("a",v,[p,(0,r.Wm)(n)])])]),(0,r._)("li",null,[(0,r._)("p",null,[h,(0,r._)("a",b,[f,(0,r.Wm)(n)])])])])])}]])},5013:(e,i,n)=>{n.r(i),n.d(i,{data:()=>r});const r=JSON.parse('{"key":"v-cd9a4920","path":"/community/wiki/developers-guide/method-invocation-sequence.html","title":"Method Invocation Sequence","lang":"en-US","frontmatter":{"title":"Method Invocation Sequence","category":["Community"],"star":9,"sticky":9,"tag":["Wiki","Developer\'s Guide"],"article":false,"summary":"Introduction The followings are the sequences of method invocations for different actions in ADempiere, e.g. when you click on a tree node to open a window. The Sequence Note: Inde","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/developers-guide/method-invocation-sequence.html"}],["meta",{"property":"og:title","content":"Method Invocation Sequence"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-21T19:56:54.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Developer\'s Guide"}],["meta",{"property":"article:modified_time","content":"2023-08-21T19:56:54.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Introduction","slug":"introduction","children":[]},{"level":2,"title":"The Sequence","slug":"the-sequence","children":[{"level":3,"title":"Other Formats","slug":"other-formats","children":[]},{"level":3,"title":"Tree Node Click","slug":"tree-node-click","children":[]}]},{"level":2,"title":"Accounting Server Initialisation","slug":"accounting-server-initialisation","children":[]}],"git":{"createdTime":1692647814000,"updatedTime":1692647814000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.72,"words":1117},"filePathRelative":"community/wiki/developers-guide/method-invocation-sequence.md","localizedDate":"August 21, 2023"}')}}]);