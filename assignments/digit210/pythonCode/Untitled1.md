# Regex

As shown in the python code, there are a lot of added Regex Patterns to the code. I did this to try to make this mark as many entities as possible while also being as accurate as possible.

```
patterns = [
    {"label": "PERSON", "pattern": [{"TEXT": {"REGEX": "BILL HAMILTON"}}]},
    {"label": "PERSON", "pattern": [{"TEXT": {"REGEX": "Gramm"}}]},
    {"label": "PERSON", "pattern": [{"TEXT": {"REGEX": "DeConcini"}}]},
    {"label": "ORG", "pattern": [{"TEXT": {"REGEX": "([Tt]he )?The Anglo-American Establishment"}}]},
    {"label": "ORG", "pattern": [{"TEXT": {"REGEX": "([Tt]he )?Centre of Eternity"}}]},
    {"label": "ORG", "pattern": [{"TEXT": {"REGEX": "([Tt]he )?Life magazine"}}]},    
```

I also added some extra entities to gather, such as LOC, ORG, EVENT, GPE, etc.
```
            for entity in dictEntities.keys():
                if dictEntities[entity] == "PERSON" or dictEntities[entity] == "LOC" or dictEntities[entity] == "ORG" or dictEntities[entity] == "GPE" or dictEntities[entity] == "NORP" or dictEntities[entity] == "EVENT" or dictEntities[entity] == "LAW":
```