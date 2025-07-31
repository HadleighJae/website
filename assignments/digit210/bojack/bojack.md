# Bojack

It seems as though `{\an8}` is used for subtitles that appear at the top of the screen rather than the bottom.

Everything inside the `[]` brackets are sound effects, explanation of what's happening, or a character name of someone not located on screen

To clean up the document, I found all the unnecessary `\n`:
```
Find: \n+
Replace with: \n
```

Then I got rid of unnecessary `\s`:
```
Find: \s{3,}
Replace with:
```

First, I changed the `<html>` tags to `<xml>`:
```
Find: <html>(.+)</html>
Replace with: <xml>\1</xml>
```

Because most of the head tag as well as the beggining info at the start of the `<article>` tag, I decided to remove them (using `dot matches all`):
```
Find: <head>(<title>.+</title>).+(<article>).+</h1>(.+)</body>
Replace with: \1\n\2\3
```

To get rid of the extra information on the timestamps, I did the following (without using `dot matches all`):
```
Find: <a.+">
Replace with: <a>
```

I inevitably decided to get rid of the `{\an8}` tag because I only wanted to gather the subtitle and had no need for where the subtitles for those lines would be. I unchecked the `regular expression` box and did the following:
```
Find: {\an8}
Replace with:
```

Because all of the words inside the `[]` were descriptions, I added a new `<description>` tag around them:
```
Find: \[(.+?)\]
Replace with: <description>\1</description>
```

The `<i>` tags represent italicized words, but I feel as though having this included is unnecessary since I just want the exact subtitle for moments like this (with `dot matches all` on):
```
Find: <i>(.+?)</i>
Replace with: \1
```

To give tags to the music, I did the following (with `dot matches all` on):
```
Find: ♪(.+?)♪
Replace with: <music>\1</music>
```

Since two different characters talking in one subtitle is represented by `-`, I wanted to replace that and separate the two lines:
```
Find: <p>\n?^-\s(.+?)\n?-\s(.+?)\n?</p>
Replace with: <p>\n\1\n</p>\n<p>\n\2\n</p>
```

To separate the show title and episode title, I wanted to create/replace tags, so I did the following:
```
Find: <title>(.+?)\s-\s(.+?)</title>\n<article>(.+)</article>
Replace with: <show title="\2">\n<episode title="\1">\3</episode>\n</show>
```

Since a few of the end `<p>` tags do not finish correctly, I did this:
```
Find: (</episode>\n</show>)
Replace with: </p>\1
```

I also wanted to change the name of the `<p>` tag:
```
Find: <p>(.+?)</p>
Replace with: <subtitle>\1</subtitle>
```

I also wanted to change the name and format of the `<a>` tag:
```
Find: <a>(.+?)</a>
Replace with: </timestamp>\n<timestamp time="\1">
```

To fix it up, I do this:
```
Find: (</music>)(\n</timestamp>\n</episode)>
Replace with: /1\n</subtitle>\2
```
```
Find: </episode>
Replace with: </timestamp>\0
```

For example:
```
Find:
Replace with:
```