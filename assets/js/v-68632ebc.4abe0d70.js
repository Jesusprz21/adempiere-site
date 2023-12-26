"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1875],{70218:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var a=i(78e3);const n=[(0,a.uE)('<p>he Application Dictionary in ADempiere is a powerful tool that allows the System Administrator to define the application&#39;s meta-data or how the application looks and behaves. Virtually every aspect of the application can be changed via the Application Dictionary. New functionality can be added by creating new entries in the Dictionary, often without the need for adding software. In fact, it is through the Application Dictionary that the ADempiere Developers add new functionaliy with every release.</p><p>There are many ways the application can be changed but the most common changes involve:</p><h2 id="customization-in-adempiere" tabindex="-1"><a class="header-anchor" href="#customization-in-adempiere" aria-hidden="true">#</a> Customization in ADempiere</h2><ol><li><p><strong>Adding Tables and Columns:</strong></p><ul><li>Extend the data model by introducing new tables and columns.</li><li>Define the structure that aligns with specific business needs.</li></ul></li><li><p><strong>Adding Windows, Tabs, and Fields:</strong></p><ul><li>Create new user interfaces by adding windows and tabs.</li><li>Introduce additional fields to capture relevant information.</li></ul></li><li><p><strong>Changing Data Display:</strong></p><ul><li>Customize the way data is presented to users.</li><li>Modify layouts and formats to enhance user experience.</li></ul></li><li><p><strong>Limiting Values to Lists:</strong></p><ul><li>Control and limit the values that users can input.</li><li>Utilize lists to enforce data integrity and standardize entries.</li></ul></li><li><p><strong>Creating Reports and Processes:</strong></p><ul><li>Develop new reports to extract meaningful insights.</li><li>Implement custom processes to automate specific business workflows.</li></ul></li></ol><p>At the core of these changes is an &quot;Entity Type&quot;. This is description of who owns the change and is responsible for it. There are two Entity Types that are reserved: Dictionary and Adempiere. These are used by the application developers and any entry in the application dictionary that uses them risks being overwritten at the next migration.</p><p>Another important concept is the &quot;Element&quot; which is a common definition of a field that includes the name, data type, references, description and comments associated with the field. This is a helpful tool as all this information can be set once and then applied everywhere the field is defined or used as a column. Further, any changes to the Element can be propagated to every field or column that uses that element.</p><ol><li>Create or select the Entity Type to use for every change</li><li>Create Element definitions for the custom columns you will be adding</li><li>Create a Table to hold the data</li><li>Create Columns in the Table using the Elements from step 2.</li><li>Create a new Window and add a Tab that draws data from the Table</li><li>Create the Fields for the Columns and order them in the tab</li><li>Add the Window to the menu</li><li>Run the Role Access Update process to ensure users can see the new window.</li><li>Log-out and in to see the changes</li></ol><p>You can now use the window to collect and manage the data as in any other window.</p><p>This example is pretty trivial as it has no functionality associated with it. The real power of ADempiere comes from the processes that operate on the data. These processes do the work, the automation, that make an ERP system so valuable.</p><p>The following sections will outline the use of the Application Dictionary in detail.</p>',10)],o={},s=(0,i(13860).Z)(o,[["render",function(e,t){return(0,a.wg)(),(0,a.iD)("div",null,n)}]])},59932:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-68632ebc","path":"/docs/system-administration/the-application-dictionary.html","title":"The Application Dictionary","lang":"en-US","frontmatter":{"title":"The Application Dictionary","category":["Documentation"],"star":9,"sticky":9,"article":false,"author":"Jesús Albujas","summary":"he Application Dictionary in ADempiere is a powerful tool that allows the System Administrator to define the application\'s meta-data or how the application looks and behaves. Virtu","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/system-administration/the-application-dictionary.html"}],["meta",{"property":"og:title","content":"The Application Dictionary"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-12-26T20:09:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:author","content":"Jesús Albujas"}],["meta",{"property":"article:modified_time","content":"2023-12-26T20:09:37.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Customization in ADempiere","slug":"customization-in-adempiere","children":[]}],"git":{"createdTime":1703621377000,"updatedTime":1703621377000,"contributors":[{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.7,"words":510},"filePathRelative":"docs/system-administration/the-application-dictionary.md","localizedDate":"December 26, 2023"}')}}]);