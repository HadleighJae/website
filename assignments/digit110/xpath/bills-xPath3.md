# xPath Exersize 3

`//div/*/count(*) => max()` gives max # 1071

1a. `//div/count(*)` counts the number of elements inside each div element (9 div elements, all adding up to 20 child elements)
1b. `//div/*/count(*)` counts the number inside the children of the elements counted previously (20 elements)

2. `//div/*/count(*)` = 1071 `//div/*/count(*) => min()` = 3

3. `//div[max(count(*))]` = Fictional and Archetypal
`//div/*[(count(*) = 1071)]` = "histPersons"

4a. `//occupation/@type => distinct-values()`
4b. `count(//occupation/@type => distinct-values())` = 15

5a. `//person/occupation[@type="artist"]`
5b. `//person[occupation[@type="artist"]]`
5c. `//person[@sex="f"][occupation[@type="artist"]]`
5d. `//person[occupation[@subtype="engraver"]]`
5e. `//person[occupation[@subtype="engraver"]][birth[@when="1787"]]`
5f. `//person[occupation[@subtype="engraver"]]/birth/@when`
5g. `sort(//person[occupation[@subtype="engraver"]]/birth/@when ! normalize-space(.)) => min()` = 1667

6a. `//*/name()`
6b. `distinct-values(//*/name()) => count()` = 78