# xPath Exercise 1

1. 
- `//div`
- `//listPerson`
- `//div//listPerson`
- `//div[child::listPerson]`, 4 div elements
- `//listPlace/place` 204 Items
- `//place/placeName` gets the immediate children of the place element while `//place//placeName` finds all placeName elements anywhere inside the place element

2. 
- `//div/element()[1]`
- `//list[@sortKey="animals"]/*`
- `//list[@sortKey]`

3. 
- `//person` 1223
- `//person[@sex]` 1107
- `count(//person[@sex])`
- `count(//person[@sex]) div count(//person) * 100` 90.5151267375306623
- `//person[@sex="f"]` 327
- `count(//person[@sex="f"]) div count(//person) * 100` 26.7375306623058054

