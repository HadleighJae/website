# 3

Finding Title:
```
for $d in $disneySongs
let $title := $d//metadata/title
return $title
```

Counting Lines:
```
for $d in $disneySongs
let $line := $d//ln
let $lineCount := count($line)
return $lineCount
```

String-Length:
```
for $d in $disneySongs
let $line := $d//lg/ln
let $stringLine := $line/string-length()
return $stringLine
```

Entire Song String-Length:
```
for $d in $disneySongs
let $title := $d//title
let $line := $d//lg/ln
let $entireSong := $d[.//$line]/string-length()
order by $entireSong descending
return concat ($title, ' has ', $entireSong , ' characters.')
```

Max Song Length:
```
let $songLengthsAll :=
    for $d in $disneySongs
    let $line := $d//lg/ln
    let $length := $d[.//$line]/string-length()
    return $length
let $maxSongLength := max($songLengthsAll)
return $maxSongLength
```

Min Song Length:
```
let $songLengthsAll :=
    for $d in $disneySongs
    let $line := $d//lg/ln
    let $length := $d[.//$line]/string-length()
    return $length
let $minSongLength := min($songLengthsAll)
return $minSongLength
```

Find the Max song:
```
let $songLengthsAll :=
    for $d in $disneySongs
    let $line := $d//lg/ln
    let $length := $d[.//$line]/string-length()
    return $length
let $maxSongLength := max($songLengthsAll)
for $d in $disneySongs
let $title := $d//metadata/title
let $line := $d//lg/ln
let $length := $d[.//$line]/string-length()
where $maxSongLength = $length
return concat($title , ' has ' , $length , ' characters.')
```

Find the Min song:
```
let $songLengthsAll :=
    for $d in $disneySongs
    let $line := $d//lg/ln
    let $length := $d[.//$line]/string-length()
    return $length
let $minSongLength := min($songLengthsAll)
for $d in $disneySongs
let $title := $d//metadata/title
let $line := $d//lg/ln
let $length := $d[.//$line]/string-length()
where $minSongLength = $length
return concat($title , ' has ' , $length , ' characters.')
```