# XML Exercise 2

1. `//div[@type="historical_people"]`
2. 
    - `//div[@type="historical_people"]//*`
    - `//div[@type="Mitford_Team"]//*`
    - `count(//div/*)`
3. 
    - `//list[@sortKey="animals"]/item => count()` 67
    - `//list[@sortKey="animals"]/item[last()]` Crested Wren
    - `//list[@sortKey="plants"]/item[5]` Apricot Tree
    - `//list[@sortKey="plants"]/item[position() le 6]`
4. `//person/occupation[1]` returns every person's first listed occupation. `(//person/occupation)[1]` returns the first listed person's occupation.
5. 
    - `//person` 1503
    - `//person[@sex]` 1378
    - `count(//person[@sex]) div count(//person) * 100` 91.6833000665335995%
    - `count(//person[@sex="f"]) div count(//person[@sex]) * 100` 29.6806966618287373%
