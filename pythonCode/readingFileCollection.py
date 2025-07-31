# Read in multiple text files from a directory:

import spacy
# nlp = spacy.cli.download("en_core_web_md")
nlp = spacy.load('en_core_web_md')

import os

# OBJECTIVE: Find out which words in my document are most similar to a particular word of interest

# os.cwd returns the current working directory (pythonCode) path
workingDir = os.getcwd()
print("Current Working Directory: " + workingDir)

# os.listdir lists files and folders inside a path:
insideDir = os.listdir(workingDir)
print("Files Inside Directory: " + str(insideDir))

# use os.path.join to connect the subdirectory (textFiles) to the working directory (pythonCode):
CollPath = os.path.join(workingDir, 'textFiles')
# print(CollPath)

def readTextFiles(filepath):
    with open(filepath, 'r', encoding='utf8') as f:
        readFile = f.read()
        # print(readFile)
        stringFile = str(readFile)
        lengthFile = len(readFile)
        # print(lengthFile)
# Add that utf8 encoding argument to the open() function to ensure that reading works on everyone's systems
        tokens = nlp(stringFile)
        # playing with vectors here
        vectors = tokens.vector

        # IMPORTANT: This is where you add the Word of Interest
        wordOfInterest = nlp(u'shame')
        # print(wordOfInterest, ': ', wordOfInterest.vector_norm)

        highSimilarityDict = {}
        for token in tokens:
            if(token and token.vector_norm):
                # if wordOfInterest.similarity(token) > .3:
                # The line above makes the dictionary smaller
                    highSimilarityDict[token] = wordOfInterest.similarity(token)
                    # The line above creates the structure for each entry in my dictionary.
        # print(highSimilarityDict)

        # This code makes it so words don't repeat:
        highSimilarityReduced = {}
        for key, value in highSimilarityDict.items():
            if value not in highSimilarityReduced.values():
                highSimilarityReduced[key] = value
                    # print(token.text, "about this much similar to", wordOfInterest, ": ", wordOfInterest.similarity(token))
        # print(highSimilarityReduced)
        # print(len(highSimilarityReduced.items()), " vs ", len(highSimilarityDict.items()))

        # We should sort the highSimilarityReduced dictionary by values from high to low,

        SortedWordValues = sorted(highSimilarityReduced.items(), key=lambda x: x[1])
        # print(SortedWordValues)
        print("Dict of words not similar to the word " + "\"" + wordOfInterest.text + "\"" + " in " + file + ":")

        SortedWordValuesDict = dict(SortedWordValues)
        print(SortedWordValuesDict)

        SortedWordValuesReversed = sorted(highSimilarityReduced.items(), key=lambda x: x[1], reverse=True)
        # print(SortedWordValuesReversed)
        print("Dict of words similar to the word " + "\"" + wordOfInterest.text + "\"" + " in " + file + ":")

        SortedWordValuesReversedDict = dict(SortedWordValuesReversed)
        print(SortedWordValuesReversedDict)

# This controls our file handling as a for loop over the directory:
# Aka putting the CollPath over the dictionaries AND calling the tokens:
for file in os.listdir(CollPath):
    if file.endswith(".txt"):
        filepath = f"{CollPath}/{file}"
        # print(filepath)
        readTextFiles(filepath)