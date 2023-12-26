"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8726],{80988:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var a=r(78e3);const l=(0,a.uE)('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>This article is a follow-on to Create your ADempiere development environment and describes how to modify the ADempiere project and your development environment to enable debugging of the zk webui using the Eclipse Webtool. Eclipse Webtool support was added in version 341. This additions allows you to run or debug the Zk web client using Eclipse webtool (Europa JEE and above ) and Apache Tomcat.</p><h2 id="setup-the-project-to-include-the-webtool-support" tabindex="-1"><a class="header-anchor" href="#setup-the-project-to-include-the-webtool-support" aria-hidden="true">#</a> Setup the Project to Include the Webtool Support</h2><p>Before you start, see Create your ADempiere development environment and ensure you can build and debug the swing client.</p><h3 id="aditional-checklist" tabindex="-1"><a class="header-anchor" href="#aditional-checklist" aria-hidden="true">#</a> Aditional checklist</h3>',5),i=(0,a._)("li",null,"If you do not have an Eclipse Java EE version, you have to install in your Eclipse the plugins Eclipse Java EE Tools, JST Server Adapters and JST Server Adapters - Extensions. Otherwise, you will not see nor configure the Server view in Eclipse.",-1),o=(0,a.Uk)("Make sure you call the menu entry Help/Install new Software and in the field Work with the url for your version, e.g. for Luna: "),n={href:"http://download.eclipse.org/releases/luna",target:"_blank",rel:"noopener noreferrer"},s=(0,a.Uk)("http://download.eclipse.org/releases/luna"),c=(0,a.Uk)("."),m=(0,a.Uk)("It may be necessary that you have to configure Tomcat manually (according to "),u={href:"http://www.coreservlets.com/Apache-Tomcat-Tutorial/tomcat-7-with-eclipse.html",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("http://www.coreservlets.com/Apache-Tomcat-Tutorial/tomcat-7-with-eclipse.html"),h=(0,a.Uk)("): Copy directory /your-tomcat-base-directory/webapps/ROOT to /your-workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps."),d=(0,a._)("p",null,"As the webtool is not setup by default, there is a bit of work to do each time you update the main project branch. Here are the steps:",-1),g=(0,a._)("ol",null,[(0,a._)("li",null,"Checkout the ADempiere branch of interest and build it using the ant build in utils_dev/build.xml."),(0,a._)("li",null,"Open the Properties for the ADempiere project"),(0,a._)("li",null,'Select Project Facets and click the link, "Convert to faceted form..."'),(0,a._)("li",null,"Confirm that Dynamic Web Module is selected (Version 2.5 is OK.)"),(0,a._)("li",null,"Confirm that Java is selected (select a JAVA version compatible with the code in the project)"),(0,a._)("li",null,[(0,a.Uk)('Close the Project Facets and click Web Project Settings in the Project Properties dialog. This will show an error :"Contect Root cannot be empty". This is a problem with the eclipse luna version and you\'ll need to check that the following "natures" are included in the eclipse .project file (there may be others but you need at least these two): '),(0,a._)("code",null,"<natures>"),(0,a._)("code",null,"<nature>org.eclipse.wst.common.modulecore.ModuleCoreNature</nature>"),(0,a._)("code",null,"<nature>org.eclipse.wst.common.project.facet.core.nature</nature>"),(0,a._)("code",null,"</natures>")]),(0,a._)("li",null,'Refresh the project and look at the Project Properties, Web Project Settings again. You should see the context root as "webui".'),(0,a._)("li",null,'Now add servers. Its easiest to do this by right clicking in the server tab and selecting "New" or clicking the link to add servers if you see it. In the dialog that appears you can select the server you want to use and download it to a directory. Apache Tomcat V6.0. installed in a directory like c:\\dev\\apache will work. The server should identify the available web projects and you can add the ADempiere project to the server.'),(0,a._)("li",null,"Right click the server and select Run. Note that this won't work but it will publish the project and create a launch configuration for it."),(0,a._)("li",null,[(0,a.Uk)("Edit the launch configuration and add the following to the arguments: -DPropertyFile="),(0,a._)("span",{class:"katex"},[(0,a._)("span",{class:"katex-mathml"},[(0,a._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,a._)("semantics",null,[(0,a._)("mrow",null,[(0,a._)("mrow",null,[(0,a._)("mi",null,"a"),(0,a._)("mi",null,"d"),(0,a._)("mi",null,"e"),(0,a._)("mi",null,"m"),(0,a._)("mi",null,"p"),(0,a._)("mi",null,"i"),(0,a._)("mi",null,"e"),(0,a._)("mi",null,"r"),(0,a._)("mi",null,"e"),(0,a._)("mi",null,"P"),(0,a._)("mi",null,"r"),(0,a._)("mi",null,"o"),(0,a._)("mi",null,"p"),(0,a._)("mi",null,"e"),(0,a._)("mi",null,"r"),(0,a._)("mi",null,"t"),(0,a._)("mi",null,"i"),(0,a._)("mi",null,"e"),(0,a._)("mi",null,"s"),(0,a._)("mi",null,"F"),(0,a._)("mi",null,"i"),(0,a._)("mi",null,"l"),(0,a._)("mi",null,"e")]),(0,a._)("mo",null,"−"),(0,a._)("mi",null,"D"),(0,a._)("mi",null,"A"),(0,a._)("mi",null,"D"),(0,a._)("mi",null,"E"),(0,a._)("mi",null,"M"),(0,a._)("mi",null,"P"),(0,a._)("mi",null,"I"),(0,a._)("mi",null,"E"),(0,a._)("mi",null,"R"),(0,a._)("msub",null,[(0,a._)("mi",null,"E"),(0,a._)("mi",null,"H")]),(0,a._)("mi",null,"O"),(0,a._)("mi",null,"M"),(0,a._)("mi",null,"E"),(0,a._)("mo",null,"=")]),(0,a._)("annotation",{encoding:"application/x-tex"},"{adempierePropertiesFile} -DADEMPIERE_HOME=")])])]),(0,a._)("span",{class:"katex-html","aria-hidden":"true"},[(0,a._)("span",{class:"base"},[(0,a._)("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),(0,a._)("span",{class:"mord"},[(0,a._)("span",{class:"mord mathnormal"},"a"),(0,a._)("span",{class:"mord mathnormal"},"d"),(0,a._)("span",{class:"mord mathnormal"},"e"),(0,a._)("span",{class:"mord mathnormal"},"m"),(0,a._)("span",{class:"mord mathnormal"},"p"),(0,a._)("span",{class:"mord mathnormal"},"i"),(0,a._)("span",{class:"mord mathnormal"},"ere"),(0,a._)("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),(0,a._)("span",{class:"mord mathnormal"},"ro"),(0,a._)("span",{class:"mord mathnormal"},"p"),(0,a._)("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"er"),(0,a._)("span",{class:"mord mathnormal"},"t"),(0,a._)("span",{class:"mord mathnormal"},"i"),(0,a._)("span",{class:"mord mathnormal"},"es"),(0,a._)("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"F"),(0,a._)("span",{class:"mord mathnormal"},"i"),(0,a._)("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),(0,a._)("span",{class:"mord mathnormal"},"e")]),(0,a._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,a._)("span",{class:"mbin"},"−"),(0,a._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,a._)("span",{class:"base"},[(0,a._)("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),(0,a._)("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),(0,a._)("span",{class:"mord mathnormal"},"A"),(0,a._)("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),(0,a._)("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"EMP"),(0,a._)("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),(0,a._)("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"ER"),(0,a._)("span",{class:"mord"},[(0,a._)("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"E"),(0,a._)("span",{class:"msupsub"},[(0,a._)("span",{class:"vlist-t vlist-t2"},[(0,a._)("span",{class:"vlist-r"},[(0,a._)("span",{class:"vlist",style:{height:"0.3283em"}},[(0,a._)("span",{style:{top:"-2.55em","margin-left":"-0.0576em","margin-right":"0.05em"}},[(0,a._)("span",{class:"pstrut",style:{height:"2.7em"}}),(0,a._)("span",{class:"sizing reset-size6 size3 mtight"},[(0,a._)("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.08125em"}},"H")])])]),(0,a._)("span",{class:"vlist-s"},"​")]),(0,a._)("span",{class:"vlist-r"},[(0,a._)("span",{class:"vlist",style:{height:"0.15em"}},[(0,a._)("span")])])])])]),(0,a._)("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"OME"),(0,a._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),(0,a._)("span",{class:"mrel"},"=")])])]),(0,a.Uk)("{ADEMPIERE_HOME} (Note: These arguments use variables but you could replace the variable with the relevant paths. The adempiere.properties file needs to exist which is why you need to build and install ADempiere.)")]),(0,a._)("li",null,"Save the configuration."),(0,a._)("li",null,"Run the server launcher again from the debug configuration. Check the console for errors. It should startup normally."),(0,a._)("li",null,"Once the server has started, open a browser and go to localhost:port/webui. Usually, Tomcat uses port 8080. You should see the standard login page. You can now insert breakpoints in the webui code and interact with the code from the browser."),(0,a._)("li",null,"To make it easier to reproduce these steps, make a stash of these changes in git and reapply them from the stash when you switch to a new branch.")],-1),_=(0,a._)("p",null,"To customize the zk interface, see Create your ADempiere customization environment.",-1),b=(0,a.Uk)("If you have any questions, please join our chat "),w={href:"http://www.adempiere.net/web/guest/chat-on-line",target:"_blank",rel:"noopener noreferrer"},v=(0,a.Uk)("(http://www.adempiere.net/web/guest/chat-on-line)"),y=(0,a.Uk)("."),f=(0,a.uE)('<ul><li>If you want that ADempiere ZK opens in Eclipse</li><li>select ADempiere Project</li><li>Right mouse click</li><li>select as you please Run As/Run on Server or Debug As/Debug on Server</li><li>In the opening dialog select server and resource, press finish</li><li>The Adempiere ZK login dialog opens in an Eclipse view.</li><li>Result</li></ul><p><img src="/assets/img/community/developers-guide/Tomcat_running_in_Eclipse.png" alt="Tomcat_running_in_Eclipse"></p><h2 id="older-instructions" tabindex="-1"><a class="header-anchor" href="#older-instructions" aria-hidden="true">#</a> Older Instructions</h2><div class="custom-container info"><p class="custom-container-title">Note</p><p>This article is based on an older version of eclipse. While the screen shots will not match exactly, the process is similar.</p></div><p>You can verify that everything is in place by checking the project properties:</p><ul><li>Project Facets (do not change anything here.)</li></ul><p><img src="/assets/img/community/developers-guide/Project_Facets.jpg" alt="Project_Facets"></p><ul><li>Web Project Settings</li></ul><p><img src="/assets/img/community/developers-guide/Web_Project_Settings.jpg" alt="Web Project Settings"></p><h2 id="install-tomcat-runtimes" tabindex="-1"><a class="header-anchor" href="#install-tomcat-runtimes" aria-hidden="true">#</a> Install Tomcat Runtimes</h2><p>First, you need to install a Tomcat runtime for the deploying and running of the zk Web Client. Use Tomcat 5.5+</p><p>To install a new Tomcat runtime, open the preferences dialog <strong>Window-&gt;Preferences</strong> and select the <strong>Server-&gt;Installed Runtimes</strong>. Use the <strong>Search</strong> button to locate your tomcat installation home folder.</p><p><img src="/assets/img/community/developers-guide/Installed_Runtimes.jpg" alt="Installed_Runtimes"></p><h2 id="define-a-new-server" tabindex="-1"><a class="header-anchor" href="#define-a-new-server" aria-hidden="true">#</a> Define a New Server</h2><p>At the Servers view, right click to open the context menu and select New-&gt;Server.</p><p>If server view is not visible then you can use Window→Show View→Others ... to open it.</p><p><img src="/assets/img/community/developers-guide/New_Server.jpg" alt="New_Server"></p><ul><li>Select the correct server type and the server runtime you have setup earlier.</li></ul><p><img src="/assets/img/community/developers-guide/Define_a_New_Server.jpg" alt="Define_a_new_server"></p><ul><li>Add your project to the server instance to be created</li></ul><p><img src="/assets/img/community/developers-guide/Add_Project.jpg" alt="Add_Project"></p><ul><li>The created server instance is now ready for use. Just Start the server once and then stop it. Do not try to debug it at this moment.</li></ul><p><img src="/assets/img/community/developers-guide/Start_Server.jpg" alt="start_server"></p><h2 id="define-location-of-adempiere-property-file-and-adempiere-home" tabindex="-1"><a class="header-anchor" href="#define-location-of-adempiere-property-file-and-adempiere-home" aria-hidden="true">#</a> Define location of ADempiere property file and ADempiere home</h2><p>Now you have to define the location of your existng working &#39;Adempiere.properties&#39; file and ADEMPIERE_HOME as system parameter for your Tomcat Instance. To do so, select Run-&gt;Open Run Dialog... and select the server instance you have created. Note Note that the entries for your server instance in the Run dialog will only be created after you have start it for at least one time. Select the arguments tab and append your property file path and home parameter at the end of VM arguments.</p><p>It is highlighted in the pictures below:</p><p><img src="/assets/img/community/developers-guide/Tomcat_Run_Profile.jpg" alt="tomcat_run_profile"></p>',27),k={href:"https://wiki.adempiere.net/User:Hengsin",target:"_blank",rel:"noopener noreferrer"},E=(0,a.Uk)("Hengsin"),j=(0,a.Uk)(" 01:11, 4 August 2008 (EDT)"),A=(0,a.uE)('<p>To avoid the problme &quot;NoClassDefFoundError&quot; you need to following the guidlinse suggested below in &#39;Trouble Shooting&#39;. So, first follow that instruction, before you debug the zk webui.</p><h2 id="trouble-shooting" tabindex="-1"><a class="header-anchor" href="#trouble-shooting" aria-hidden="true">#</a> Trouble Shooting</h2><p>I had a problem to start Tomcat with &quot;NoClassDefFoundError&quot;. Missing class path to adempiere jars. Solved by editing run configuration. Go to classpath section at user entries add external libs from tomcat\\lib (or tomcat\\server\\lib) than add project - AdempiereTrunk</p><p>Apache jars needs to be at the first place in the classpath. See the image carefully along with the description below.</p><ul><li>Bootstrap Entries <ul><li>JRE Library</li></ul></li><li>User Entries <ul><li>tomcat_dir/bin/*.jar</li><li>tomcat_dir/server/lib/*.jar</li><li>Adempiere Project</li><li>Adempiere Libraries</li></ul></li></ul><p><img src="/assets/img/community/developers-guide/WebUI_Classpath.png" alt="webui_classhpath"></p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',7),S={href:"http://www.youtube.com/watch?v=EOkN5IPoJVs",target:"_blank",rel:"noopener noreferrer"},T=(0,a.Uk)("Youtube: Servlet development using Eclipse and Tomcat"),D={href:"http://books.zkoss.org/wiki/ZK_Installation_Guide/Quick_Start/Create_and_Run_Your_First_ZK_Application_with_Eclipse_and_ZK_Studio",target:"_blank",rel:"noopener noreferrer"},I=(0,a.Uk)("Create and Run Your First ZK Application with Eclipse"),P=(0,a.Uk)("Q: "),W={href:"http://sourceforge.net/projects/adempiere/forums/forum/610548/topic/4852616",target:"_blank",rel:"noopener noreferrer"},R=(0,a.Uk)("Debugging ZK webUI"),U={},x=(0,r(13860).Z)(U,[["render",function(e,t){const r=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[l,(0,a._)("ul",null,[i,(0,a._)("li",null,[o,(0,a._)("a",n,[s,(0,a.Wm)(r)]),c]),(0,a._)("li",null,[m,(0,a._)("a",u,[p,(0,a.Wm)(r)]),h])]),d,g,_,(0,a._)("p",null,[b,(0,a._)("a",w,[v,(0,a.Wm)(r)]),y]),f,(0,a._)("p",null,[(0,a._)("a",k,[E,(0,a.Wm)(r)]),j]),A,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",S,[T,(0,a.Wm)(r)])]),(0,a._)("li",null,[(0,a._)("a",D,[I,(0,a.Wm)(r)])]),(0,a._)("li",null,[P,(0,a._)("a",W,[R,(0,a.Wm)(r)])])])])}]])},54624:(e,t,r)=>{r.r(t),r.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-b277aa88","path":"/docs/developer-guide/creating-webui-workspace-using-eclipse-webtool.html","title":"Creating WebUI Workspace using Eclipse Webtool","lang":"en-US","frontmatter":{"title":"Creating WebUI Workspace using Eclipse Webtool","category":["Community"],"star":9,"sticky":9,"tag":["Wiki","Developer\'s Guide","Releasing New Versions"],"article":false,"summary":"Overview This article is a follow-on to Create your ADempiere development environment and describes how to modify the ADempiere project and your development environment to enable d","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/developer-guide/creating-webui-workspace-using-eclipse-webtool.html"}],["meta",{"property":"og:title","content":"Creating WebUI Workspace using Eclipse Webtool"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-12-26T20:09:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Developer\'s Guide"}],["meta",{"property":"article:tag","content":"Releasing New Versions"}],["meta",{"property":"article:modified_time","content":"2023-12-26T20:09:37.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Overview","slug":"overview","children":[]},{"level":2,"title":"Setup the Project to Include the Webtool Support","slug":"setup-the-project-to-include-the-webtool-support","children":[{"level":3,"title":"Aditional checklist","slug":"aditional-checklist","children":[]}]},{"level":2,"title":"Older Instructions","slug":"older-instructions","children":[]},{"level":2,"title":"Install Tomcat Runtimes","slug":"install-tomcat-runtimes","children":[]},{"level":2,"title":"Define a New Server","slug":"define-a-new-server","children":[]},{"level":2,"title":"Define location of ADempiere property file and ADempiere home","slug":"define-location-of-adempiere-property-file-and-adempiere-home","children":[]},{"level":2,"title":"Trouble Shooting","slug":"trouble-shooting","children":[]},{"level":2,"title":"See Also","slug":"see-also","children":[]}],"git":{"createdTime":1703621377000,"updatedTime":1703621377000,"contributors":[{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.19,"words":1257},"filePathRelative":"docs/developer-guide/creating-webui-workspace-using-eclipse-webtool.md","localizedDate":"December 26, 2023"}')}}]);