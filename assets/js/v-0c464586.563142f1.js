"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2723],{20010:(e,t,a)=>{a.r(t),a.d(t,{default:()=>de});var s=a(78e3);const n=(0,s.uE)('<h2 id="things-to-think-about" tabindex="-1"><a class="header-anchor" href="#things-to-think-about" aria-hidden="true">#</a> Things to Think About</h2><p>he ADempiere scripts will need to find the database command line utilities, so set your path to point to the &quot;bin&quot; directory of the database install. You can do this in the same way <strong>JAVA_HOME</strong> was used above. Create an environment variable such as <strong>DATABASE_HOME</strong> set to the database install directory, and add <strong>DATABASE_HOME/bin</strong> to your path according to the methods for your system</p><div class="custom-container info"><p class="custom-container-title">Note</p><p>The ADempiere application utility scripts need access to the database binary commands from the application server machine. You may need to install an empty version of database on the ADempiere application server or, at least, a copy of the necessary binary executable files.</p></div><div class="custom-container info"><p class="custom-container-title">Note</p><p>If for some twisted reason you also have Oracle running on the same machine as PostgreSQL, be aware that the two databases include some executables with the same name. If you have both POSTGRES_HOME and the equivalent ORACLE_HOME on the path, you might have errors when running some of the ADempiere scripts. Try to keep the path pointing to one or the other database at a time and switch between the two as required.</p></div><h2 id="postgresql-installation-setup" tabindex="-1"><a class="header-anchor" href="#postgresql-installation-setup" aria-hidden="true">#</a> PostgreSQL Installation &amp; Setup</h2>',5),i=(0,s.Uk)("It is recommended that you read the "),o={href:"http://www.postgresql.org/docs/manuals",target:"_blank",rel:"noopener noreferrer"},r=(0,s.Uk)("PostgreSQL Manuals"),l=(0,s.Uk)(" carefully. There are many useful tips and tricks in the documentation and user comments."),d=(0,s._)("p",null,"If you use the Postgres Windows Installer, many of the following steps will be done for you by the installer but you will have to pay attention to the security settings.",-1),p=(0,s._)("p",null,"The following is from the PostgreSQL installation guide after the software has been built and installed from source.",-1),c=(0,s._)("p",null,'Create a unpriviledged user on the database server computer that is unique to the PostgreSQL installation and has sole access to/ownership of the data the database creates but little else. Don\'t use this user to install the software but ensure the PostgreSQL server daemon runs under this account. The user "postgres" is a common choice.',-1),u=(0,s.Uk)('Log in as the "postgres" user and '),h={href:"http://www.postgresql.org/docs/8.4/interactive/creating-cluster.html",target:"_blank",rel:"noopener noreferrer"},m=(0,s.Uk)("create the database cluster"),b=(0,s.Uk)(" - a group of databases. This is done by defining the location where the databases will be stored. This can be anywhere on the file system. The cluster is created with the command initdb which comes with PostgreSQL. The format is"),g=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ initdb -D /usr/local/pgsql/data\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>where <strong><code>/usr/local/pgsql/data</code></strong> is the location of the database cluster. As an alternative to the -D option, the environment variable PGDATA can be defined.</p><div class="custom-container info"><p class="custom-container-title">Note</p><p>If the postgres user is unpriviledged, the initdb command may not be able to create the data directory if it doesn&#39;t already exists. In that case, log in as root/administrator and create the data directory before you run the command as the postgres user. The initdb command will remove all access permissions to the data directory for everyone but the postgres user. See the PostgreSQL manuals for additional security settings.</p></div>',3),v=(0,s.Uk)("It is important to properly set up the "),f={href:"http://www.postgresql.org/docs/8.4/interactive/auth-pg-hba-conf.html",target:"_blank",rel:"noopener noreferrer"},y=(0,s.Uk)("pg_hba.conf"),k=(0,s.Uk)(" file to ensure the ADempiere application server can talk with the database. Remote TCP/IP connections will not be possible until this file is modified since the default behavior is to listen for TCP/IP connections only on the local loopback address "),_=(0,s._)("strong",null,'"localhost"',-1),w=(0,s.Uk)(". When the application server and the database server are separate machines, the pg_hba.conf file must be set to allow connections from the application server. For security, use as restrictive a connection as possible."),S=(0,s._)("p",null,"Follow the instructions to start the database server.",-1),A=(0,s.Uk)("Move on to "),U=(0,s.Uk)("Application Server Installation & Setup"),E=(0,s.Uk)("."),D=(0,s._)("h2",{id:"oracle-installation-setup",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#oracle-installation-setup","aria-hidden":"true"},"#"),(0,s.Uk)(" Oracle Installation & Setup")],-1),q=(0,s._)("div",{class:"custom-container info"},[(0,s._)("p",{class:"custom-container-title"},"Note"),(0,s._)("p",null,"The Oracle XE version (Express Edition) is available for free but there are limitations on its use in terms of maximum database size, number of running instances allowed, amount of RAM used, number of CPUs used to process queries (only 1 used) and a lack of https support. While these limitations are acceptable for demonstrations and development, use in production and multi-user environments is not recommended. Please review the Oracle Database Express Edition documentation on Licensing Restrictions prior to making your choice. If you require Oracle, consider purchasing licenses for the Standard Editions.")],-1),T=(0,s._)("p",null,"Oracle installation is straight forward. Follow the instructions in the Oracle documentation.",-1),I=(0,s.Uk)("Move on to "),L=(0,s.Uk)("Application Server Installation & Setup"),M=(0,s.Uk)("."),P=(0,s._)("h2",{id:"mysql-installation-setup",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#mysql-installation-setup","aria-hidden":"true"},"#"),(0,s.Uk)(" MySQL Installation & Setup")],-1),x=(0,s._)("div",{class:"custom-container info"},[(0,s._)("p",{class:"custom-container-title"},"Note"),(0,s._)("p",null,"ADempiere integration with MySQL requires developer support. Please verify in the repository and forums if MySQL is supported by the version of ADempiere you wish to use.")],-1),O=(0,s.Uk)("This section is from "),Q={href:"http://wiki.adempiere.net/User:Naquib13",target:"_blank",rel:"noopener noreferrer"},R=(0,s.Uk)("Naquib13"),N=(0,s.Uk)(". He is documenting from Trifon's "),W={href:"http://sourceforge.net/projects/adempiere/forums/forum/610546/topic/3854274",target:"_blank",rel:"noopener noreferrer"},C=(0,s.Uk)("SF thread"),H=(0,s.Uk)("."),F=(0,s._)("p",null,[(0,s._)("strong",null,"SUN JDK")],-1),$={href:"http://www.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"},J=(0,s.Uk)("MySQL 5.x"),j=(0,s.Uk)(" (I recommend using "),B={href:"http://www.mysql.com/downloads/workbench/",target:"_blank",rel:"noopener noreferrer"},Y=(0,s.Uk)("Workbench"),G=(0,s.Uk)(")"),Z=(0,s.uE)('<p>Do the following after installing the above:</p><ol><li>Change my.cnf file. <ul><li>Set tables names to be lower case.</li><li>Enable recursive stored procedures.</li><li>Enable MySQL ANSI mode.<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/mysql/my.cnf\n<span class="token assign-left variable">lower_case_table_names</span><span class="token operator">=</span><span class="token number">1</span>\n<span class="token assign-left variable">max_sp_recursion_depth</span><span class="token operator">=</span><span class="token number">128</span>\n<span class="token assign-left variable">sql_mode</span><span class="token operator">=</span><span class="token string">&#39;ANSI&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>Restart MySQL server.<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> /etc/init.d/mysql restart\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><ul><li>Create &quot;adempiere&quot; database.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ mysql -u root -p\nmysql<span class="token operator">&gt;</span> create database adempiere DEFAULT CHARACTER SET <span class="token operator">=</span> utf8 DEFAULT COLLATE <span class="token operator">=</span> utf8_bin<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create &quot;adempiere&quot; MySQL DB user.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ mysql -u root -p\nmysql<span class="token operator">&gt;</span> GRANT ALL ON adempiere.* TO <span class="token string">&#39;adempiere&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;adempiere&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Import Initial MySQL DB Seed (ADempiere version 3.6.0LTS).</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ mysql -u adempiere -p -h localhost adempiere <span class="token operator">&lt;</span> <span class="token operator">&lt;</span>ADEMPIERE_HOME<span class="token operator">&gt;</span>/data/Adempiere_mysql.dmp\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Follow the standard ADempiere installation process.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token operator">&lt;</span>ADEMPIERE_HOME<span class="token operator">&gt;</span>/RUN_setup.sh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Start ADempiere Server.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token operator">&lt;</span>ADEMPIERE_HOME<span class="token operator">&gt;</span>/utils/RUN_Server2.sh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Start ADempiere Swing client.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token operator">&lt;</span>ADEMPIERE_HOME<span class="token operator">&gt;</span>/RUN_Adempiere.sh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',14),z=(0,s.Uk)("Move on to "),K=(0,s.Uk)("Application Server Installation & Setup"),V=(0,s.Uk)("."),X=(0,s._)("h2",{id:"links",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#links","aria-hidden":"true"},"#"),(0,s.Uk)(" Links")],-1),ee={href:"http://sourceforge.net/projects/adempiere/forums/forum/610546/topic/3854274",target:"_blank",rel:"noopener noreferrer"},te=(0,s.Uk)("ADempiere on MySQL"),ae=(0,s.Uk)("- SF.net thread by Trifon on 2010 & 2011."),se={href:"http://blogs.sun.com/praneet/entry/mysqling_adempiere",target:"_blank",rel:"noopener noreferrer"},ne=(0,s.Uk)("Running ADempiere on MySQL"),ie=(0,s.Uk)(" by Praneet on Jul 03, 2009."),oe={href:"http://www.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"},re=(0,s.Uk)("MySQL Download"),le={},de=(0,a(13860).Z)(le,[["render",function(e,t){const a=(0,s.up)("ExternalLinkIcon"),le=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",null,[n,(0,s._)("p",null,[i,(0,s._)("a",o,[r,(0,s.Wm)(a)]),l]),d,p,c,(0,s._)("p",null,[u,(0,s._)("a",h,[m,(0,s.Wm)(a)]),b]),g,(0,s._)("p",null,[v,(0,s._)("a",f,[y,(0,s.Wm)(a)]),k,_,w]),S,(0,s._)("p",null,[A,(0,s.Wm)(le,{to:"/docs/system-administration/installation/application-server-installation-and-setup.html"},{default:(0,s.w5)((()=>[U])),_:1}),E]),D,q,T,(0,s._)("p",null,[I,(0,s.Wm)(le,{to:"/docs/system-administration/installation/application-server-installation-and-setup.html"},{default:(0,s.w5)((()=>[L])),_:1}),M]),P,x,(0,s._)("p",null,[O,(0,s._)("a",Q,[R,(0,s.Wm)(a)]),N,(0,s._)("a",W,[C,(0,s.Wm)(a)]),H]),F,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",$,[J,(0,s.Wm)(a)]),j,(0,s._)("a",B,[Y,(0,s.Wm)(a)]),G])]),Z,(0,s._)("p",null,[z,(0,s.Wm)(le,{to:"/docs/system-administration/installation/application-server-installation-and-setup.html"},{default:(0,s.w5)((()=>[K])),_:1}),V]),X,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("p",null,[(0,s._)("a",ee,[te,(0,s.Wm)(a)]),ae])]),(0,s._)("li",null,[(0,s._)("p",null,[(0,s._)("a",se,[ne,(0,s.Wm)(a)]),ie])]),(0,s._)("li",null,[(0,s._)("p",null,[(0,s._)("a",oe,[re,(0,s.Wm)(a)])])])])])}]])},22933:(e,t,a)=>{a.r(t),a.d(t,{data:()=>s});const s=JSON.parse('{"key":"v-0c464586","path":"/docs/system-administration/installation/database-server-installation-and-setup.html","title":"Database Server Installation and Setup","lang":"en-US","frontmatter":{"title":"Database Server Installation and Setup","category":["Documentation"],"star":9,"sticky":9,"article":false,"author":"Jesús Albujas","summary":"Things to Think About he ADempiere scripts will need to find the database command line utilities, so set your path to point to the \\"bin\\" directory of the database install. You can ","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/system-administration/installation/database-server-installation-and-setup.html"}],["meta",{"property":"og:title","content":"Database Server Installation and Setup"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-12-26T20:09:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:author","content":"Jesús Albujas"}],["meta",{"property":"article:modified_time","content":"2023-12-26T20:09:37.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Things to Think About","slug":"things-to-think-about","children":[]},{"level":2,"title":"PostgreSQL Installation & Setup","slug":"postgresql-installation-setup","children":[]},{"level":2,"title":"Oracle Installation & Setup","slug":"oracle-installation-setup","children":[]},{"level":2,"title":"MySQL Installation & Setup","slug":"mysql-installation-setup","children":[]},{"level":2,"title":"Links","slug":"links","children":[]}],"git":{"createdTime":1703621377000,"updatedTime":1703621377000,"contributors":[{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.32,"words":995},"filePathRelative":"docs/system-administration/installation/database-server-installation-and-setup.md","localizedDate":"December 26, 2023"}')}}]);