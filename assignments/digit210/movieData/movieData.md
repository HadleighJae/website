# RegEx Tagging of Movie Data

First, I had to get rid of any `&` symbol in the document. To do this, I did the following:
```
Find: &
Replace with: &amp;
```

To put all the movies together, I used the following in the Find/Replace window
```
Find: .+
Replace with: <movie>\0</movie>
```

To tag the movie titles together:
```
Find: ^(.+?)\t
Replace with: <title>\1</title>
```

To tag the movie dates:
```
Find: (</title>)(\d{4})
Replace with: \1<date>\2</date>
```

Tag the place:
```
Find: (</date>)(\t)(.+?)\t
Replace with: \1<location>\3</location>
```

Tag the length of movie:
```
Find: (</location>)(\d+)(.+)
Replace with: \1<time unit="min">\2</time>
```

Start adding in newline and tabs
```
Find: (<movie>)(<title>)
Find: (</title>)(<date>)
Find: (</date>)(<location>)
Find: (</location>)(<time unit="min">)
Replace with: \1\n\t\2
```

Finally, I saved the .txt file as an .xml file, and pretty printed it!







Find: .+
Replace with: <line>.+</line>

Find: <line>([IVXCL]+)</line>
Replace with: </sonnet>\n<sonnet num="\1">
