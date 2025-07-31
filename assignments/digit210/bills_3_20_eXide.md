# Shakespeare eXide p.2

## Count number of Speaker elements:
```
    let $plays := collection('/db/apps/shakespeare/data/')//TEI
    let $sp := $plays//sp
    let $speaker := $sp/speaker
    let $speakercount := count ($speaker)
    return $speakercount
```
Output:`31054`

## Count distinct values for Speaker element:
```
    let $distinctspeakers := distinct-values($speaker)
    return $distinctspeakers
```
Output: `"King John"` `"Chatillon"` `"Eleanor"` `"Essex"` etc.
<sub>This seems like it does a pretty good job with gathering all different names, and I don't see any glaring issues within the first 10 outputs</sub>

## Count distinct values:
```
    let $distinctspeakers := distinct-values($speaker)
    let $distinctspeakerscount := count($distinctspeakers)
    return $distinctspeakerscount
```
Output: `966`

## Each plays distinct value characters:
```
    for $p in $plays
    let $speaker := $p//speaker
    let $speakers := distinct-values($speaker)
    let $countspeakers := count($speakers)
    return $countspeakers
```
Output: `42 items

## Finding more than 50 distinct items:
```
    let $countspeakers := count($speakers)
    where $countspeakers > 50
    return $countspeakers
```
Output: `7 items`

## Finding the titles to the previous:
```
    for $p in $plays
    let $title := $p//titleStmt/title/text()
    let $speaker := $p//speaker
    let $speakers := distinct-values($speaker)
    let $countspeakers := count($speakers)
    where $countspeakers > 50
    return $title
```
Output: `Timon of Athens` `Coriolanus` `Antony and Cleopatra` etc.

## Gathering file info:
```
    let $base := base-uri($title)
    return $base
```
Output: `"/db/apps/shakespeare/data/tim.xml"` `"/db/apps/shakespeare/data/cor.xml"` `"/db/apps/shakespeare/data/ant.xml"` etc.
<sub>This gives us the file directories</sub>

## Creating a concat:
```
    let $countspeakers := count($speakers)
    return concat ($title, ' has ', $countspeakers , ' characters.')
```
Output: `"The Life and Death of King John has 28 characters."` `"Timon of Athens has 59 characters."` `"Measure for Measure has 24 characters."` etc.