# TEI Elements




# TEI All

## Module
- tei
- header
- core
- textstructure
- gaiji
- verse
- drama
- spoken
- analysis
- dictionaries
- msdescription
- transcr
- textcrit
- namesdates
- figures
- corpus
- linking
- iso-fs
- nets
- certainty
- tagdocs

## Datatypes NOT Included
- teidata.nullOrName

## Model Classes NOT Included
- model.orgStateLike


### 

# Header

## teiHeader
TEI Header. Supplies descriptive and declarative metadata associated with a digital resource or set of resources.

```xml
<teiHeader>
    <fileDesc></fileDesc>
    <encodingDesc></encodingDesc>
    <profileDesc></profileDesc>
    <xenoData></xenoData>
    <revisionDesc></revisionDesc>    
</teiHeader>
```

Contains (In Order):
- fileDesc
- encodingDesc
- profileDesc
- xenoData
- revisionDesc

### fileDesc
File Description. Contains a full bibliographic description of an electronic file.

```xml
<fileDesc>
    <titleStmt></titleStmt>
    <editionStmt></editionStmt>
    <extent></extent>
    <publicationStmt></publicationStmt>
    <seriesStmt></seriesStmt>
    <notesStmt></notesStmt>
    <sourceDesc></sourceDesc>
</fileDesc>        
```

Contains (In Order):
- titleStmt (needed)
- editionStmt
- extent
- publicationStmt (needed)
- seriesStmt
- notesStmt
- sourceDesc

#### titleStmt
Title Statement. Groups information about the title of a work and those responsible for its content.

```xml
<titleStmt>
    <title></title>
    <author></author>
    <editor></editor>
    <sponsor></sponsor>
    <funder></funder>
    <principal></principal>
    <respStmt></respStmt>
    <resp></resp>
    <name></name>    
</titleStmt>
```

May Contain (One or More):
- author
- editor
- sponsor
- funder
- principal
- respStmt
- resp
- name

#### editionStmt
Edition Statement. Groups information relating to one edition of a text.

```xml
<editionStmt>
    <edition></edition>
    <respStmt></respStmt>
    <name></name>
    <resp></resp>    
</editionStmt>
```


#### extent

#### publicationStmt

#### seriesStmt

#### notesStmt

#### sourceDesc

### encodingDesc
Encoding Description. Documents the relationship between an electronic text and the source or sources from which it was derived.

```xml
<encodingDesc>
    <projectDesc></projectDesc>
    <samplingDecl></samplingDecl>
    <editorialDecl></editorialDecl>
    <tagsDecl></tagsDecl>
    <styleDefDecl></styleDefDecl>
    <refsDecl></refsDecl>
    <classDecl></classDecl>
    <geoDecl></geoDecl>
    <unitDecl></unitDecl>
    <schemaSpec></schemaSpec>
    <schemaRef></schemaRef>
</encodingDesc>
```

May contain any combination of paragraphs of text, marked up using the p element:
- projectDesc
- samplingDecl
- editorialDecl
- tagsDecl
- styleDefDecl
- refsDecl
- classDecl
- geoDecl
- unitDecl
- schemaSpec
- schemaRef

### profileDesc
Text-Profile Description. Provides a detailed description of non-bibliographic aspects of a text, specifically the languages and sublanguages used, the situation in which it was produced, the participants and their setting.

```xml
<profileDesc>
    <abstract></abstract>
    <creation></creation>
    <langUsage></langUsage>
    <textClass></textClass>
    <correspDesc></correspDesc>
    <calendarDesc></calendarDesc>    
</profileDesc>
```

May Contain:
- abstract
- creation
- langUsage
- textClass
- correspDesc
- calendarDesc

If Corpus Module Is Included In Schema, May Contain:
- textDesc
- particDesc
- settingDesc

If Transcr Module Is Included In Schema, May Contain:
- handNotes
- listTranspose

### xenoData
Non-TEI Metadata. Provides a container element into which metadata in non-TEI formats may be placed.

In the following example, the prefix rdf is bound to the namespace http://www.w3.org/1999/02/22-rdf-syntax-ns#, the prefix dc is bound to the namespace http://purl.org/dc/elements/1.1/, and the prefix cc is bound to the namespace http://web.resource.org/cc/.
```xml
<xenoData>
    <rdf:RDF>
        <cc:Work rdf:about="">
            <dc:title>Applied Software Project Management - review</dc:title>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/Text"/>
            <dc:license rdf:resource="http://creativecommons.org/licenses/by-sa/2.0/uk/"/>
        </cc:Work>
        <cc:License rdf:about="http://creativecommons.org/licenses/by-sa/2.0/uk/">
            <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>
            <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>
            <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>
            <cc:requires rdf:resource="http://web.resource.org/cc/Attribution"/>
            <cc:permits rdf:resource="http://web.resource.org/cc/DerivativeWorks"/>
            <cc:requires rdf:resource="http://web.resource.org/cc/ShareAlike"/>
        </cc:License>
    </rdf:RDF>
</xenoData>
```

### revisionDesc
Revision Description. Summarizes the revision history for a file.

```xml
<revisionDesc>
    <listChange>    
        <change when="1996-01-22" who="#MSM"> finished proofreading </change>
        <change when="1995-10-30" who="#LB"> finished proofreading </change>
        <change notBefore="1995-07-04" who="#RG"> finished data entry at end of term </change>
        <change notAfter="1995-01-01" who="#RG"> began data entry before New Year 1995 </change>
    </listChange>            
</revisionDesc>
```

Contains:
- listChange (optional-ish)
- change

## Stmt

### editionStmt
Edition Statement. Groups information relating to one edition of a text.

```xml
<editionStmt>
    <edition n="S2">Students' edition</edition>
        <respStmt>
            <resp>Adapted by </resp>
            <name>Elizabeth Kirk</name>
        </respStmt>
</editionStmt>
```

Contained By:
- header: biblFull fileDesc

May Contain: 
- core: author editor meeting p respStmt
- header: edition funder principal sponsor
- linking: ab

### notesStmt
Notes Statement. Collects together any notes providing information about a text additional to that recorded in other parts of the bibliographic description.

```xml
<notesStmt>
    <note>Historical commentary provided by Mark Cohen</note>
    <note>OCR scanning done at University of Toronto</note>
</notesStmt>
```

Contained By:
- header: biblFull fileDesc

May Contain: 
- core: note noteGrp relatedItem

### publicationStmt
Publication Statement. Groups information concerning the publication or distribution of an electronic or other text. 

```xml
<publicationStmt>
    <publisher>Zea Books</publisher>
    <pubPlace>Lincoln, NE</pubPlace>
    <date when="2017">2017</date>
    <availability>
        <p>This is an open access work licensed under a Creative Commons Attribution 4.0 International license.</p>
    </availability>
    <ptr target="http://digitalcommons.unl.edu/zeabook/55"/>
</publicationStmt>
```

Contained By:
- header: biblFull fileDesc

May Contain:
- core: address date p ptr pubPlace publisher ref
- header: authority availability distributor idno
- linking: ab
- tagdocs: listRef

### recordingStmt 
Recording Statement. Describes a set of recordings used as the basis for transcription of a spoken text.

```xml
<recordingStmt>
    <recording type="audio" dur="P30M">
    <respStmt>
        <resp>Location recording by</resp>
        <name>Sound Services Ltd.</name>
    </respStmt>
    <equipment>
        <p>Multiple close microphones mixed down to stereo Digital Audio Tape, standard play, 44.1 KHz sampling frequency</p>
    </equipment>
    <date when="1987-01-12">12 Jan 1987</date>
    </recording>
</recordingStmt>
```

Module
- Spoken

Contained By:
- header: sourceDesc

May Contain:
- core: p
- linking: ab
- spoken: recording

### respStmt
Statement of responsibility. Supplies a statement of responsibility for the intellectual content of a text, edition, recording, or series, where the specialized elements for authors, editors, etc. do not suffice or do not apply. May also be used to encode information about individuals or organizations which have played a role in the production or distribution of a bibliographic work.

```xml
<respStmt>
    <resp>converted to XML encoding</resp>
    <name>Alan Morrison</name>
</respStmt>
```

Module:
- Core

Contained By:
- core: analytic bibl imprint monogr series
- header: editionStmt seriesStmt titleStmt
- linking: annotation
- msdescription: msItem msItemStruct
- spoken: recording

May Contain: 
- core: name note resp
- namesdates: orgName persName

### scriptStmt
Script Statement. Contains a citation giving details of the script used for a spoken text.

```xml
<scriptStmt>
    <bibl>
        <author>Craig Warner</author>
        <title>Strangers on a Train</title>
        <title type="sub">Based on the novel by Patricia Highsmith</title>
        <edition>French's acting edition</edition>
        <idno type="ISBN">978 0 573 01972 2</idno>
        <publisher>Samuel French Ltd</publisher>
    </bibl>
</scriptStmt>
```

Module:
- Spoken

Contained By:
- header: sourceDesc

May Contain:
- core: bibl biblStruct listBibl p
- header: biblFull
- linking: ab
- msdescription: msDesc

### seriesStmt
Series Statement. Groups information about the series, if any, to which a publication belongs.

```xml
<seriesStmt>
    <title>Machine-Readable Texts for the Study of Indian Literature</title>
    <respStmt>
        <resp>ed. by</resp>
        <name>Jan Gonda</name>
    </respStmt>
    <biblScope unit="volume">1.2</biblScope>
    <idno type="ISSN">0 345 6789</idno>
</seriesStmt>
```

Module:
- header

Contained By:
- header: biblFull fileDesc

May Contain:
- core: biblScope editor p respStmt title
- header: idno
- linking: ab

### titleStmt
Title Statement. Groups information about the title of a work and those responsible for its content.

```xml
<titleStmt>
    <title>Capgrave's Life of St. John Norbert: a machine-readable transcription</title>
    <respStmt>
        <resp>compiled by</resp>
        <name>P.J. Lucas</name>
    </respStmt>
</titleStmt>
```

Module:
- header

Contained By:
- header: biblFull fileDesc

May Contain:	
- core: author editor meeting respStmt title
- header: funder principal sponsor