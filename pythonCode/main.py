import spacy
# nlp = spacy.cli.download('en_core_web_md')
nlp = spacy.load('en_core_web_md')

import os

movieScripts = open("textFiles/aiMovieScripts.txt", "r", encoding='utf8')
movieLines = movieScripts.read()
movieStrings = str(movieLines)
print(movieStrings) # Prints all movie lines

songLyrics = open("textFiles/aiSongLyrics.txt", "r", encoding='utf8')
songLines = songLyrics.read()
songStrings = str(songLines)
print(songStrings) # Prints all song lyrics

whiteDressStory1 = open("textFiles/chatgptwhitedress1.txt", "r", encoding='utf8')
whiteDressLines1 = whiteDressStory1.read()
whiteDressStrings1 = str(whiteDressLines1)
print(whiteDressStrings1)

whiteDressStory2 = open("textFiles/chatgptwhitedress2.txt", "r", encoding='utf8')
whiteDressLines2 = whiteDressStory2.read()
whiteDressStrings2 = str(whiteDressLines2)
print(whiteDressStrings2)

whiteDressStory3 = open("textFiles/chatgptwhitedress2.txt", "r", encoding='utf8')
whiteDressLines3 = whiteDressStory3.read()
whiteDressStrings3 = str(whiteDressLines3)
print(whiteDressStrings3)

songWords = nlp(songStrings)
for token in songWords:
        print(token.text, "->", token.pos_) # Prints each word and assigns their part of speech (like verbs and nouns)

