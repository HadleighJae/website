<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="3.0"
    xmlns="http://www.w3.org/1999/xhtml">
        
    <xsl:output method="xhtml" html-version="5" omit-xml-declaration="yes" include-content-type="no" indent="yes"/>
    
    <xsl:variable name="cbml-collection" as="document-node()+" select="collection('skyrim.xml')"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>
                    <xsl:apply-templates select="descendant::title"/>
                </title>
                <link rel="stylesheet" type="text/css" href="style.css"/>
            </head>
            <body>
                    <xsl:apply-templates select="descendant::body"/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="paragraph">
        <p>
            <xsl:apply-templates/>
        </p>
    </xsl:template>
    
    <xsl:template match="QuestEvent">
        <i>
            <xsl:apply-templates/>
        </i>
    </xsl:template>
    
    <xsl:template match="QuestItem">
        <span class="item">
            <xsl:apply-templates/>
        </span>
    </xsl:template>
    
    <xsl:template match="character">
        <span class="character">

                <xsl:apply-templates/>
        </span>
    </xsl:template>
    
    <xsl:template match="epithet">
        <b>

                <xsl:apply-templates/>
        </b>
    </xsl:template>
    
    <xsl:template match="faction">
        <span class="faction">

                <xsl:apply-templates/>
        </span>
    </xsl:template>
    
    <xsl:template match="location">
        <em>
            <xsl:apply-templates/>
        </em>
    </xsl:template>
    
    
</xsl:stylesheet>
