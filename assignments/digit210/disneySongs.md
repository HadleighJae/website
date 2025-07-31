# Will try to get more later, I haven't had much time to really put into this so this is temporary

Find Songs
```
xquery version "3.1";
<html>
    <head><title>Composers and Songs</title></head>
    <body>
    <h1>Composers and Songs in the Disney Songs Collection</h1>
    
    <table>
        <tr>
            <th>No.</th>
            <th>Composers</th>
            <th>Movie</th>
            <th>Voice Actors</th>
                
            </tr>
    {
    let $disneySongs := collection('/db/disneySongs/')
    let $songs := $disneySongs//title ! normalize-space() => distinct-values() => sort()
     for $s at $pos in $songs
       let $sComposer := $disneySongs[.//title ! normalize-space() = $s]//composer ! normalize-space() => distinct-values() => sort() => string-join(', ')
       let $sMovies := $disneySongs[.//title ! normalize-space() = $s]//movie ! normalize-space() => distinct-values() => sort() => string-join(', ')
       let $sVoice := $disneySongs[.//title ! normalize-space() = $s]//voiceActor ! normalize-space() => distinct-values() => sort() => string-join(', ')
    return 
       <tr>
          <td>{$pos}</td>
          <td>{$s}</td>
          <td>{$sComposer}</td> 
          <td>{$sMovies}</td>
          <td>{$sVoice}</td>
               
        </tr> 
   }
   </table>
</body>
</html>
```

```
xquery version "3.1";
<html>
    <head><title>Voice Actors and Songs</title></head>
    <body>
    <h1>Voice Actors and Songs in the Disney Songs Collection</h1>
    
    <table>
        <tr>
            <th>No.</th>
            <th>Voice Actors</th>
            <th>Movies</th>
            <th>Songs</th>
                
            </tr>
    {
    let $disneySongs := collection('/db/disneySongs/')
    let $voice := $disneySongs//voiceActor ! normalize-space() => distinct-values() => sort()
     for $v at $pos in $voice
       let $vMovies := $disneySongs[.//voiceActor ! normalize-space() = $v]//movie ! normalize-space() => distinct-values() => sort() => string-join(', ')
       let $vSongs := $disneySongs[.//voiceActor ! normalize-space() = $v]//title ! normalize-space() => distinct-values() => sort() => string-join(', ')
    return 
       <tr>
          <td>{$pos}</td>
          <td>{$v}</td>
          <td>{$vMovies}</td>
          <td>{$vSongs}</td>
               
        </tr> 
   }
   </table>
</body>
</html>
```

```
xquery version "3.1";
<html>
    <head>
        <title>Min and Max Song Length</title>
            
    </head>
    <body>
    <h1>Min and Max Song Length</h1>
    
    <table>
        <tr>
            <th>Min and Max Song</th>
            <th>Length</th>
                
        </tr>
    {
    let $disneySongs := collection('/db/disneySongs/')/xml
    let $songCount :=
        for $d in $disneySongs
        let $songLength := $d//song/string-length()
        return $songLength
        
    let $maxCount := $songCount => max()
    let $minCount := $songCount => min()
    for $d in $disneySongs
        let $dTitle := $d//metadata/title
        let $dLength := $d//song ! string-length()
        where $dLength = $minCount or $dLength = $maxCount
        return
       <tr>
          <td>{$dTitle ! string()}</td>
          <td>{$dLength}</td>
               
        </tr> 
   }
   </table>
</body>
</html>
```

```
xquery version "3.1";
<html>
    <head><title>Song Length</title></head>
    <body>
    <h1>Song Length</h1>
    
    <table>
        <tr>
            <th>Length</th>
            <th>Min Length</th>
            <th>Max Length</th>
                
            </tr>
    {
    let $disneySongs := collection('/db/disneySongs/')/xml
    let $songCount :=
        for $d in $disneySongs
        let $songLength := $d//song/string-length()
        return $songLength
        
    let $maxCount := $songCount => max()
    let $minCount := $songCount => min()
    return 
       <tr>
          <td>{$songCount}</td>
          <td>{$minCount}</td>
          <td>{$maxCount}</td> 
               
        </tr> 
   }
   </table>
</body>
</html>
```


declare variable $ThisFileContent :=

let $fileName := "bluesArtistTable.html"
let $filePath := "/db/00-students-00/hadleigh/"
let $doc-db-uri := xmldb:store($filePath, $fileName, $ThisFileContent, "html")
return $doc-db-uri  
  (: output at :http://newtfire.org:8338/exist/rest/db/00-students-00/hadleigh/bluesArtistTable.html ) :)  