# Dracula MD

First, I had to get rid of any `&` symbol in the document. This is because this character cannot be represented directly in text[^1]. To do this, I did the following:
```
Find: &
Replace with: &amp;
```

The same applies here. I did the same with any `<` symbol:
```
Find: <
Replace with: &lt;
```

Then, I did the same with any `>` symbol:
```
Find: >
Replace with: &gt;
```

I wanted to get rid of unnecessary new lines by doing the following:
```
Find: \n\n
Replace with: \n
```

To mark each line, I did the following:
```
Find: .+
Replace with: <p>\0</p>
```

To create headings and their sub-headings, I did the following:
```
Find: <p>(.+[A-Z]+)</p>\n<p>(.+)</p>
Replace with: <heading>\1</heading>\n<heading>\2</heading>
```

To find every quote, I found this:
```
Find: "(.+?)"
Replace with: <quote>\1</quote>
```

In order to find each chapter, I did the following:
```
Find: <heading>CHAPTER\s([IVXCL]+)</heading>
Replace with: </chapter>\n<chapter num="\1">
```

In order to find the time, I typed the following:
```
Find: \d?\d:?\d?\d?\s(o’clock|P. M.|A. M.)
Replace with: <time>\0</time>
```

To find the date, I did the following:
```
Find: (\d?\d([a-z]+)?\s(January|February|March|April|May|June|July|August|September|October|November|December))|((January|February|March|April|May|June|July|August|September|October|November|December)\s\d?\d([a-z]+)?)
Replace with: <date>\0</date>
```

[^1](http://dh.obdurodon.org/what-is-xml.xhtml)