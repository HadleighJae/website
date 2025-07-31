# Shakespeare eXide

## Beginning
```
xquery version "3.1";
declare default element namespace "http://www.tei-c.org/ns/1.0";
```

## Find all title tags
```
collection('/db/apps/shakespeare/data/')/TEI//titleStmt/title
```

## Find text of Title tags
```
collection('/db/apps/shakespeare/data/')/TEI//titleStmt/title/text()
```

## Get Falstaffs Speeches
```
collection('/db/apps/shakespeare/data/')/TEI//sp[speaker="Falstaff"]
```

## Get Plays with Falstaff
```
collection('/db/apps/shakespeare/data/')/TEI[.//sp[speaker="Falstaff"]]
```
or
```
collection('/db/apps/shakespeare/data/')/TEI[descendant::sp[speaker="Falstaff"]]
```

## Get Just Tags of the Names of Plays with Falstaff
```
collection('/db/apps/shakespeare/data/')/TEI[descendant::sp[speaker="Falstaff"]]//titleStmt/title
```
```
<title xmlns="http://www.tei-c.org/ns/1.0">The First Part of King Henry the Fourth</title>
<title xmlns="http://www.tei-c.org/ns/1.0">The First Part of King Henry the Sixth</title>
<title xmlns="http://www.tei-c.org/ns/1.0">The Merry Wives of Windsor</title>
<title xmlns="http://www.tei-c.org/ns/1.0">The Second Part of King Henry the Fourth</title>
```

## Get just the Name of the Plays with Falstaff
```
collection('/db/apps/shakespeare/data/')/TEI[descendant::sp[speaker="Falstaff"]]//titleStmt/title/text()
```
```
The First Part of King Henry the Fourth
The First Part of King Henry the Sixth
The Merry Wives of Windsor
The Second Part of King Henry the Fourth
```

## Count the number of times Falstaff has a Speech
```
collection('/db/apps/shakespeare/data/')/TEI//sp[speaker="Falstaff"] => count()
```
```
473
```

Other Way!

## Beginning
```
let $willyshakes := collection('/db/apps/shakespeare/data/')
let $show := $willyshakes/TEI
```

## Find all title tags
```
let $title := $show//title/text()
return $title
```

## Find text of Title tags
```
let $title := $show//title
return $title
```

## Get Falstaffs Speeches
```
let $sp := $show//sp
let $falstaff := $sp[speaker="Falstaff"]
return $falstaff
```

## Get Plays with Falstaff
```
let $sp := $show//sp
let $falstaff := $sp[speaker="Falstaff"]
let $falfeatures := $show[.//$falstaff]
return $falfeatures
```


## Get Just Tags of the Names of Plays with Falstaff
```
let $sp := $show//sp
let $falstaff := $sp[speaker="Falstaff"]
let $falfeatures := $show[.//$falstaff]
let $falshows := $falfeatures//titleStmt/title
return $falshows
```

## Get just the Name of the Plays with Falstaff
```
let $sp := $show//sp
let $falstaff := $sp[speaker="Falstaff"]
let $falfeatures := $show[.//$falstaff]
let $falshows := $falfeatures//titleStmt/title/text()
return $falshows
```

## Count the number of times Falstaff has a Speech
```
let $sp := $show//sp
let $falstaff := $sp[speaker="Falstaff"]
let $countfal := count($falstaff)
return $countfal
```