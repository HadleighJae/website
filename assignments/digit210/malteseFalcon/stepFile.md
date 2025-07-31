# Maltese Falcon

## Begin by testing the following regular expression Find and Replace patterns.

<sub>Note before I answer, when I first copied the **Find** and **Replace** and tried it after doing the stuff in the beginning, it didn't give me anything no matter if *dot matches all* was checked. I had to undo the **Find** `\n{2,}` in order to get any answer at all. So these answers will be answered with the `\n{2,}` not done.</sub>
1. 
-With *dot matches all* turned off, only the lines that have two newlines after it will get a <sp> element surrounding it. With *dot matches all* turned on, it gathers every paragraph instead of just the single line before the two newlines.
-The `\1` refers to the text inside the *first* set of `()`, while the `\2` represents the text inside of the *second* set of `()`
-I decided my best course of action was to keep *dot matches all* on to gather each paragraph of text.

1. To find the *stage directions*, with *dot matches all* turned on, I put `\((.+?)\)` in the **Find** window and `<desc>\1</desc>` in the **Replace**. This is because all of the *stage directions* are inside of `()` within the document.

1. Because all of the speakers are capitalized and placed before a `:`, I did `<sp>([A-Z]+):` in the **Find** to find the capital letters located after the <sp> tag and after the `:`. In the **replace**, I did `<sp speaker="\1">` to insert the speaker into the `speaker` attribute. I did not use a `.`.

1. Personally, my *XML* file immediately showed a green square, meaning I had made a well-formed XML document!

1. To get rid of the <sp> elements that held only a block of stage direction, I entered `<sp( speaker="SOUND")?> ?(<desc>.+?</desc>)</sp>` into the **Find** and put `\2` into the replace. That way, the <sp> tags are left out, leaving only the <desc> tags.

### Submit two files on Canvas to complete this test:
### Your markdown or text file in which you have recorded your responses these exam questions (saved with .md or .txt file extension as in stepFile.md).
### Your resulting file, saved with .xml file extension as in MalteseFalcon.xml.