# Helpful xPath Functions for Project

To find last entry in Journal
```xPath
(//div[@type="entry"])[last()]
```

Finds where Mitford was in each entry
```xPath
//div[@type="entry"]/p/placeName/@ref
```

Finds entries where Miss James is mentioned
```xPath
//div[@type="entry"][./p/persName/@ref="#James_Miss"]
```