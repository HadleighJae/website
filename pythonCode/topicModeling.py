# ####################################################
# INTRODUCTION TO LDA TOPIC MODELING
# ebb: This introductory Python script is designed to read a collection of 457 text files
# each one holding a political text. We'll explore topic modeling
# the collection, to see if we can "distant read" topics based on clusters of frequently repeated words.
#######################################################
# PIP INSTALLS TO MAKE FOR NLTK LDA TOPIC MODELING
# In your Git Bash or Terminal, start with the following installs to your Python environment:
# pip install gensim
# pip install pyldavis
# pip install nltk
# pip install ipython
# ####################################################
import pandas as pd
import nltk
from nltk.corpus import stopwords
import string
import gensim.corpora as corpora
from gensim.models import LdaModel
import pyLDAvis.gensim_models
import os

# After the first time you run this, you may comment this out:
# nltk.download('stopwords')

# ############ STOP WORDS AND PUNCTUATION CUSTOMIZED HERE ###################
# First, we pull in the nltk library's standard stop word list for English.
stop_words = stopwords.words('english')
newStopWords = ["jr", "without", "many", "like", "would", "must", "1", "made", "0the", "may", "us", "2", "said", "get", "could", "shall", "use", "great", "may", "one", "new", "also", "3", "4", "5", "even", "every", "iii"]
stop_words.extend(newStopWords)
print("UPDATED: " + f"{stop_words=}")
# print(stop_words)
print(f"{stop_words=}")
# ebb: Above line is an "f-string" or formatted print.
# This is a fancy way of saying print(stop_words) only tell me WHAT you're printing.
# When we do a lot of printing, it's helpful to have the information come out labeled.
# f"{var=}" gives you a special "formatted print" in the console
# and this formatting will let us tag the output as "stop words" since we
# print a lot of output there.
print(f"{string.punctuation=}")

# ADDING WORDS TO THE STOP WORD LIST
# ebb: You'll see some words that get repeated a lot, like "said" in your topic modeling
# output. Adding these to the stop word list may improve the topic model clustering.
# stop_words is just a list of words that we imported,
# so you can just append a new value to the list like this:
# stop_words = stop_words.append('said')
# You can extend it to add a list of new stopwords with:

# REMEMBER TO CHANGE YOUR EXTENDED STOP WORD LIST FOR NEW COLLECTIONS!
# ##################################################################

# Set up to read our file directory ###
workingDir = os.getcwd()
print("current working directory: " + workingDir)
politicalTextPath = os.path.join(workingDir, 'politicalTextFiles')
print(politicalTextPath)


# big filtering function that removes punctuation and stop_words
# cleaning documents:
def clean_doc(doc):
    text = open(doc, encoding='utf8').read()
    no_punct = ''
    # no_punct = ''.join([c for c in doc if c not in string.punctuation])
    for c in text:
        if c not in string.punctuation and c not in string.digits:
            no_punct = no_punct + c

    # with list comprehension

    words = no_punct.lower().split()

    final_words = []
    for word in words:
        if word not in stop_words:
            final_words.append(word)

    # with list comprehension
    # final_words = [word for word in words if word not in stop_words]
    return final_words


# ebb: This controls our file handling as a for loop over the directory (collects docs):
allDocs = []
for file in os.listdir(politicalTextPath):
    if file.endswith(".txt"):
        filepath = f"{politicalTextPath}/{file}"
        # print(filepath)
        allDocs.append(filepath)
        # clean_doc(filepath)
# print(allDocs)

# PREPARING THE CORPUS FOR TOPIC MODELING ########################
# says "for every doc, clean all the docs"
cleaned_docs = [clean_doc(doc) for doc in allDocs]

# if you're having trouble with encoding, these next lines locate buggy files (will be the last file listed):
# first comment out last cleaned_docs, then uncomment this function:

# cleaned_docs = []
# for doc in allDocs:
    # print("This doc is going to the cleaners: " + f"{doc=}")
    # clean_doc(doc)
id2word = corpora.Dictionary(cleaned_docs)

# print(id2word[260])
# assigns id values to each word:
corpus = [id2word.doc2bow(cleaned_doc) for cleaned_doc in cleaned_docs]
# corpus is the clean words
# print(corpus)

# Show the words and numbers in just the first document:
# for num in corpus[0]:
#     num = num[0]
#     print(f"{num}\t{id2word[num]}")

# TOPIC MODELING with LDA ########################
# ebb: Here in the next line, we set the parameters for LDA topic modeling.
# This is sometimes compared to rolling dice, because we start the process by
# predicting the number of topics we expect to see in the results.
# You can take this backwards and forwards and see how it affects the distribution and
# assignment of topics in the corpus. The num_topics is the parameter you keep adjusting.
# In this assignment I'd like you to:
#   * Try a few different num_topics and notice how that changes
# your results. Find a number you think works well for showing topics in this corpus.
#   * Also, I'd like you to experiment with adjusting the stop_words list (above) when you see a lot
# of the same words repeating across topics.
# where the topic modeling happens
num_topics = 15
lda_model = LdaModel(corpus=corpus, id2word=id2word, num_topics=num_topics)
# Suggestion: Try 10 - 50 topics and vary in 5s
documents = lda_model.get_document_topics(corpus)
print(f"{len(documents)=}")
# ebb: len(topics) appears to be the number of documents. There are
# 457 documents in the Political Text collection.
# Stops at the last document's Bag Of Words
# documents[456] represents the documents in document 457 because it counts from 0
print(f"{documents[456]=}")
# Prints: topics[456]=[(11, 0.065304734), (12, 0.21792202), (15, 0.71204776)]
# Notice our format string: called "f-printing":
# Topics is a dictionary with the keys as the document numbers and values are the
# list of topics for that document. The values are tuples: (Topic number, weight of topic).
# HEY, don't we want to sort these by weight?
sorted_documents = sorted(documents[456], key=lambda x: x[1], reverse=True)
# This says, sort the topics, and the sort key is x, and then you'll get the second member
print(f"{sorted_documents=}")
# Prints: sorted_topics=[(15, 0.7185962), (12, 0.19057396), (11, 0.08708332)]
# ebb: Notice, every time we run this, we get a different random assortment of topics present in the document we chose.
# Our returns here are a sign of the randomization built into LDA topic modeling!

# ebb: So, let's see what's in a topic:
for topic in documents[456][:10]:
    # This asks for up to 10 topics in document 457. It'll be fine if 10 topic clusters aren't really available there.
    terms = lda_model.get_topic_terms(topic[0], 20)
    # topic[0] is not the same as topics. (topics are documents). topic is an actual topic.
    # topic[0] is probably the heaviest weighted "top" topic.
    print(topic)
    for num in terms:
        num = num[0]
        print(num, id2word[num])
    print()

# ###### VISUALIZING THE TOPIC MODELS ####################
# ebb: We're using the pyLDAvis (python LDA topic modeling vis) library to output an HTML file
# that shows an interactive visualization. It will output an HTML file in your working directory.
# You want to go and open that file in a web browser to view the model and adjust it.
# Then come back to this script and experiment with adding stop words and adjusting the number of
# topics to model.
vis = pyLDAvis.gensim_models.prepare(lda_model, corpus, id2word, mds="mmds", R=30)
pyLDAvis.save_html(vis, 'topicModel_Visualization.html')
