# xPath Exersize 4

## 1. 

```xPath
//cbml:panel/@characters => distinct-values()
```

This is not really removing the duplicates because there are multiple values in one attribute. Since the distinct value is based on the exact wording of the attribute value, there are some repeats

## 2.

Find true distinct character values
```xPath
//cbml:panel/@characters ! tokenize(.) => distinct-values()
```

## 3.

Find all the panels that contain "drkelly" in @characters value
```xPath
//cbml:panel[@characters[contains(., 'drkelly')]]
```
```xPath
//cbml:panel[@characters ! contains(., 'drkelly')]
```
<sub>5 cbml:panel elements contain #drkelly</sub>

Use `starts-with()` in place of `contains()`
```xPath
//cbml:panel[@characters[starts-with(., 'drkelly')]]
```
```xPath
//cbml:panel[@characters ! starts-with(., 'drkelly')]
```
<sub>No results</sub>

Use `ends-with()` in place of `contains()`
```xPath
//cbml:panel[@characters[ends-with(., 'drkelly')]]
```
```xPath
//cbml:panel[@characters ! ends-with(., 'drkelly')]
```
<sub>4 cbmlLpanel elements end with #drkelly</sub>

## 4. 

Find longest speech in cbml:balloon
```xPath
//cbml:balloon ! normalize-space() ! string-length() => max()
```
<sub>The longest speech is 104</sub>

Find who said longest speech
```xPath

```
<sub></sub>

Find who said the shortest speech
```xPath

```
<sub></sub>

## 5. 

Find which cbml:panel contains a note that contains the word "skull"
```xPath
//cbml:panel[note[contains(., 'skull')]]
```
```xPath
//cbml:panel[.//note[contains(., 'skull')]]
```

Notation without .
```xPath
//div[//cbml:balloon[contains(., 'NO')]]
```
<sub>Says it is true that at some point in the document (not in that particular div element), there is a 'NO' even if it's not in that particular div element</sub>

Notation with .
```xPath
//div[.//cbml:balloon[contains(., 'NO')]]
```
<sub>Tells function to stop and only look inside its own div element</sub>







## etc.

Get the distinct character list without #
```xPath
//cbml:panel/@characters ! tokenize(.) ! substring-after(., '#') => distinct-values()
```

Make string lowercase
```xPath
//cbml:balloon ! lower-case(.)
```

Make string lowercase AND remove extra spaces
```xPath
//cbml:balloon ! lower-case(.) ! normalize-space(.)
```
