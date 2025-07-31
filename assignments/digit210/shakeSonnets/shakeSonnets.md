# ShakeSonnets Step File

First, I had to get rid of any `&` symbol in the document. To do this, I did the following:
```
Find: &
Replace with: &amp;
```

Then, I did the same with any `<` symbol:
```
Find: <
Replace with: &lt;
```

Then, I did the same with any `>` symbol:
```
Find: >
Replace with: &gt;
```

Once that was finished, I could begin auto-tagging the ShakeSonnet.txt file.

First, I deleted any unnecessary lines manually (lines that were not part of a sonnet)

Then, I cleaned up the extra spaces used in the file:
```
Find: ^\s+
Replace with: 
```

Next, I tagged each line with `<line></line>` by doing the following:
```
Find: .+
Replace with: <line>\0</line>
```

Then, to separate the sonnets, I looked for the roman numerals featured in the file and replaced them with `<sonnet></sonnet>` tags:
```
Find: <line>([IVXCL]+)</line>
Replace with: </sonnet>\n<sonnet num="\1">
```
<sub>Note: I used `</sonnet>` before the rest of the replace to put an ending to the previous sonnet. Then, I used`\n` to make a new line, then added `<sonnet num="\1">` so the number would be the roman numerals</sub>

Once all of that was finished, I manually deleted the first `</sonnet>` that didn't correspond to an actual sonnet, added a `</sonnet>` to the ending to finish the last sonnet, then added the root element `<xml>` to the beginning of the file then `</xml>` to the end of the file.