<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xpath-default-namespace="http://www.tei-c.org/ns/1.0"
    xmlns:cbml="http://www.cbml.org/ns/1.0"
    xmlns="http://www.w3.org/1999/xhtml"
    version="3.0">
    
    <xsl:output method="xhtml" html-version="5" omit-xml-declaration="yes" 
        include-content-type="no" indent="yes"/>
    
    <!-- COLLECTION VARIABLES: Uncomment one of these if you need to process a collection!  -->
<xsl:variable name="cbml-collection" as="document-node()+" select="collection('cbml/?select=*.xml')"/>
    
    <!-- 2023-11-08 ebb: MAKE SURE THERE ARE NO EXTRA SPACES in the collection() variable!   -->
    <!-- Alternative collection variable if your files are nested deeply below where your XSLT is saved: -->    
  <!-- <xsl:variable name="cbml-DeepNested" as="document-node()+" select="collection('.?select=*.xml;recurse=yes')"/>-->
 
   
   <xsl:template match="/">
       <html>
           <head>
               <title>A New CBML Transformation!</title>
               <link rel="stylesheet" type="text/css" href="style.css"/> 
           </head>
           <body>
         
               <h1><xsl:apply-templates select="descendant::titleStmt/title"/></h1> 
               
          <div id="characterTable">
           
              <!-- We're going to need this in the panel lookup! -->
              
              <!-- TBD:  XSLT to find the characters by page or panel here. -->
 
      
          </div>     
 
          <div id="reading-view">        
            <!-- READING VIEW PROCESSING STARTS HERE. -->
            <xsl:apply-templates select="descendant::body"/>
              
          <!--   IF PROCESSING A COLLECTION of XML files, uncomment this / adapt as needed:
              <xsl:apply-templates select="$cbml-collection//div"/>
          -->
          
          </div>
   
           </body>
       </html>
   </xsl:template> 
    
    
    <xsl:template match="div[@type='page']">
        <section class="{@type}" id="{@xml:id}">
            <!-- ebb: Let's output some elements with @id attributes on HTML elements
                that can serve as targets for internal links.  -->
             <xsl:apply-templates/>
        </section>
    </xsl:template>
    
  
   <!--ebb: Most <figure> and <figdesc> elements from CBML  can be handled with the HTML <figure> element,
       which is a top-level block HTML element (not allowed inside an HTML <p>).
       
       But in the Sonic XML files there are some figure and figDescs coded inside <p> elements, so 
       if we processed all of them this way, the HTML output will have errors and not be valid HTML. 
       I'm using an XPath predicate filter to exclude the figDesc and figure elements that are housed inside <p> elements from
   processing as <figure> and <p> for this project. 
   -->

    <xsl:template match="figure">
        <figure class="{@type}">
            <xsl:apply-templates/>
            
        </figure>
  
    </xsl:template>
    
    <xsl:template match="p">
        <p>
            <xsl:apply-templates/>
        </p>
    </xsl:template>
    
    <xsl:template match="figDesc">
        <p class="figDesc">
            <xsl:apply-templates/>
        </p>
    </xsl:template>

 <xsl:template match="cbml:panel">
     <div class="panel" id="{parent::div/@xml:id}-panel-{@n}">
         <xsl:apply-templates/>
     </div>
 </xsl:template>
   
   
   <xsl:template match="cbml:caption">
       <p class="caption">
           <xsl:apply-templates/>
       </p>
   </xsl:template>
    
    <xsl:template match="note">
        <p class="{@type}">
            <xsl:apply-templates/>
        </p>  
    </xsl:template>
    
    <xsl:template match="sound">
        <span class="{name()}">
            <xsl:apply-templates/>
        </span>
    </xsl:template>
    
    <xsl:template match="cbml:balloon">
        <p class="{@type}">
            <xsl:apply-templates/>
        </p>
    </xsl:template>
    
    <xsl:template match="cbml:balloon[@type='speech']">
        <p class="speech">
           <b><xsl:value-of select="@who ! replace(., '#', '') ! upper-case(.)"/>: </b>
            
            
            <xsl:apply-templates/>
        </p>
    </xsl:template>
    
    <xsl:template match="desc"/>
    
    <xsl:template match="lb">
        <br/>
    </xsl:template>
    
</xsl:stylesheet>