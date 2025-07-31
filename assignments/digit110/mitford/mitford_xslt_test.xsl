<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xpath-default-namespace="http://www.tei-c.org/ns/1.0"
    xmlns:cbml="http://www.cbml.org/ns/1.0"
    xmlns="http://www.w3.org/1999/xhtml"
    version="3.0">
    
    <xsl:output method="xhtml" html-version="5" omit-xml-declaration="yes" 
        include-content-type="no" indent="yes"/>


    <xsl:template match="/">
        <html>
            <head>
                <title>Digital Mitford Journal!</title>
                <link rel="stylesheet" type="text/css" href="mitford.css"/> 
            </head>
            <body>
                <h1 class="siteTitle"><xsl:apply-templates select="descendant::titleStmt/title"/></h1>
                <div class="table">
                    <xsl:variable name="docTree" as="document-node()" select="current()"/>
                    <!-- Gets all the distinct people -->
                    <xsl:variable name="myData" as="item()+" select=".//div[@type='entry']//persName/@ref ! normalize-space() ! 
                        tokenize(., ' ') => distinct-values() => sort()"/>
                    <table>
                        <tr>
                            <th>Person</th>
                            <th>Links to Entries</th>
                        </tr>
                        <xsl:for-each select="$myData"> 
                            <tr>
                                <!-- Table that lists distinct people -->
                                <td><xsl:value-of select="current()"/></td>
                                <td>
                                    <ul>
                                        <xsl:apply-templates select="$docTree//div[@type='entry' and p/persName[contains(@ref, current()) ]]" mode="toc">
                                            <xsl:with-param name="currentCharacter" as="item()" select="current()"/>  
                                        </xsl:apply-templates>
                                        <!-- TREE WALKER VARIABLE  -->
                                    </ul>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>
                <div class="notebook">
                    <xsl:apply-templates select="descendant::body"/>
                </div>
            </body>
        </html>
    </xsl:template>
    

 
    
   <xsl:template match="div[@type='entry']" mode="toc">
        <xsl:param name="currentCharacter"/>
       <xsl:if test=".//p/persName[@ref ! contains(., $currentCharacter)]">
           <li>
               <a href="#{@xml:id}">Entry <xsl:value-of select="@xml:id ! substring-after(., '-')"/>
               </a>
           </li>
       </xsl:if>
    </xsl:template> 
    

    
    <xsl:template match="div[@type='year']">
        <div class="yearSection">
            <h1 class="year"><xsl:apply-templates select="head/date"/></h1>
            <xsl:apply-templates select="descendant::div[not(head/date)]"/>
        </div>
    </xsl:template>
    
    
    
    <xsl:template match="div[@type='month']">
        <div class="month" id="{@xml:id}">
            <h1>
                <xsl:value-of select="@xml:id ! substring-before(., '-')"/>
            </h1>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    
    
    <xsl:template match="div[@type='entry']">
        <div class="entry" id="{@xml:id}">
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    
    
    <xsl:template match="div[@type='entry']/head/date">
        <time>
            <xsl:if test="@when">
                <xsl:attribute name="datetime">
                    <xsl:value-of select="@when"/>
                </xsl:attribute>
                </xsl:if>
            <xsl:apply-templates/>
        </time>
    </xsl:template>
        
    
    
    <xsl:template match="div[@type='entry']/head">
        <h1>
            <xsl:apply-templates/>
        </h1>
    </xsl:template>
    
    
    
    <xsl:template match="p">
        <p>
            <xsl:apply-templates/>
        </p>
    </xsl:template>
    
    
    
    <xsl:template match="persName">
        <span class="persName">
            <xsl:if test="@ref">
                <xsl:attribute name="title">
                    <xsl:value-of select="@ref"/>
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates/>
        </span>
    </xsl:template>
    
    
    
    <xsl:template match="placeName">
        <span class="placeName">
            <xsl:if test="@ref">
                <xsl:attribute name="title">
                    <xsl:value-of select="@ref"/>
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates/>
        </span>
    </xsl:template>
    
    
    
    <xsl:template match="orgName">
        <span class="orgName">
            <xsl:if test="@ref">
                <xsl:attribute name="title">
                    <xsl:value-of select="@ref"/>
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates/>
        </span>
    </xsl:template>
    
    
    
    <xsl:template match="p//title">
        <span class="title">
            <xsl:if test="@ref">
                <xsl:attribute name="title">
                    <xsl:value-of select="@ref"/>
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates/>
        </span>
    </xsl:template>
    
    
    
    <xsl:template match="p//name">
        <span class="name">
            <xsl:if test="@ref">
                <xsl:attribute name="title">
                    <xsl:value-of select="@ref"/>
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates/>
        </span>
    </xsl:template>
    
    
    
    <xsl:template match="unclear">
        <span class="unclear">
            <xsl:apply-templates></xsl:apply-templates>
        </span>
    </xsl:template>
        
    <!-- 
    <xsl:template match="note">
                    <b><xsl:value-of select="@resp ! replace(., '#', '')"/>: </b>
                    <xsl:apply-templates/>
    </xsl:template>
    -->
    <!-- Possibly make note a subscript? Or hover to see note? -->
    
    <xsl:template match="p/note"/>
   
    

        
    
</xsl:stylesheet>