# Example XPath Expressions 

## Predicate filters

In [movieData.xml](movieData.xml), find all of the movies marked with the year 1930.

```
//movie[child::year = "1930"]
```

Where do we **NOT** find a year inside a movie? Use the `not()`

```
//movie[not(year)]
```
or
```
//movie[not(descendant::year)]
```

To get rid of any duplicate years, you can use `distinct-values()`

```
//movie/year=>distinct-values()
```
<sub>This gives you a list of values rather than a specific XPath value</sub>

To find the runtime, you use:

```
//runTime[@unit="min"]
```


### Filtering by [contains(., "string")]  
When used in an expression to filter elements, this filters based on what literal text is found inside the current node.

In [stoker-dracula.xml](stoker-dracula.xml), find all of the paragraphs that contain the word "thousand".

```
//p[contains(., 'thousand')]
```

Single quotes or double quotes are fine to indicate a string. 

### Filtering by [matches(., "regex")]  
This is similar to `contains()`, but filters based on a regular expression

```
//p[matches(., '\d')]
```

## Tem.xml stuff

Finding all Acts:

```
//body/div
```

Finding all Scenes:

```
//body/div/div
```

Finding scenes in just Act 2:

```
//body/div[2]/div
```

Find all Stage Directions:

```
//stage
```

Getting stage directions from Act 3:

```
//body/div[3]//stage
```
<sub>Gotta go deeper, so you use two slashes instead of one for `//stage`</sub>

## Mafalda.xml

Get Panels (cbml:panel) that contain Mafalda (@who="#mafalda") Balloons (cbml:balloon)
```
//cbml:panel[cbml:balloon[@who="#mafalda"]]
```
