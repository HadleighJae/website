# ReadMe

Although I'm aware I don't need to do all this, I feel that it would be helpful to have this for future reference. Plus it might be helpful for students struggling to understand exactly why certain code is used. As someone who always needs an overdetailed explanation of things, I understand the struggle. This will hopefully help not only me, but others in the DIGIT program or for others learning code.

### Explanation of [Scraper Code](https://github.com/HadleighJae/portfolio/blob/main/pythonCode/politicalScraper.py):

Before starting in PyCharm, open your shell (this could be your GitBash, Command Prompt, Terminal, etc.) and type the command:

```
pip install BeautifulSoup4
```

- `BeautifulSoup4` is a Python library for pulling data out of HTML and XML files. This makes it possible to gather the data located on these file types.[^1]

Once that is downloaded, you may start editing a new **Python document** on PyCharm. 

At the beginning of the new Python document, start by importing the following:

```python
import bs4
import requests
import os
```

- `import bs4` puts BeautifulSoup4 into your Python Document
- `import requests` returns a Response Object with all the response data (content, encoding, status, etc) [^2]
- `import os` allows access to your local directories

Next, define `archive_url` by inserting the link you would like to scrape. For this, I used the textfiles website to gather multiple political text files.

```python
archive_url = "http://textfiles.com/politics/"
```

We can now move onto the actual scraping of the link. To do this, we must create a define function as follows:

```python
def get_files():
```

Next, create the **r** variable as follows:

```python
    r = requests.get(archive_url)
```

This gathers the response data from the source you'd like to scrape. Next, create a **soup** variable as follows:

```python
    soup = bs4.BeautifulSoup(r.content, 'html.parser')
```

The **html.parser** involves tokenization and tree construction of HTML files. HTML tokens include start and end tags, as well as attribute names and values. [^3]

In this example, the html code for the text file website looks similar to this:

```html
<tab indent=60 id=T><br>
<TR VALIGN=TOP><TD VALIGN=TOP><B><A HREF="INGERSOLL">INGERSOLL</A></B><TAB TO=T><TD WIDTH=20></TD><TD><B>Files Written by or with Robert G. Ingersoll</B></TD></TR>
<TR VALIGN=TOP><TD VALIGN=TOP><B><A HREF="SPUNK">SPUNK</A></B><TAB TO=T><TD WIDTH=20></TD><TD><B>The Myriad Files of the Spunk Press</B></TD></TR>
<TR><TD>&nbsp;</TD></TR>
<TR VALIGN=TOP><TD ALIGN=TOP><A HREF="0596af07.txt">0596af07.txt</A>  <tab to=T><TD> 4161<BR><TD> Big Business is Promoting Socialism by F.R. Duplantier (May, 1996)
<TR VALIGN=TOP><TD ALIGN=TOP><A HREF="0596af11.txt">0596af11.txt</A>  <tab to=T><TD> 4364<BR><TD> Change the Orientation of Welfare, by F.R. Duplantier (May, 1996)
<TR VALIGN=TOP><TD ALIGN=TOP><A HREF="10batf">10batf</A>  <tab to=T><TD> 973<BR><TD> Top Ten Lessons Learned by the BATF in the Waco Raid
```

You will notice multiple href links provided, but we only want the text files. To do this, start a **for loop** as follows:

```python
    for item in soup.select('TD[ALIGN="TOP"]'):
```

This gathers the html code only associated with the **TD** tags with **ALIGN=TOP** inside of it. This then eliminates the href links we do not need:

```html
<TR VALIGN=TOP><TD ALIGN=TOP><A HREF="0596af07.txt">0596af07.txt</A>  <tab to=T><TD> 4161<BR><TD> Big Business is Promoting Socialism by F.R. Duplantier (May, 1996)
<TR VALIGN=TOP><TD ALIGN=TOP><A HREF="0596af11.txt">0596af11.txt</A>  <tab to=T><TD> 4364<BR><TD> Change the Orientation of Welfare, by F.R. Duplantier (May, 1996)
<TR VALIGN=TOP><TD ALIGN=TOP><A HREF="10batf">10batf</A>  <tab to=T><TD> 973<BR><TD> Top Ten Lessons Learned by the BATF in the Waco Raid
```

Next, we can gather all the links using this indented variable:
```python
        link = item.find('a')
```

This eliminates unnecessary tags, leaving us only with the **A** tags:

```html
<A HREF="0596af07.txt">0596af07.txt</A>
<A HREF="0596af11.txt">0596af11.txt</A>
<A HREF="10batf">10batf</A>
```

In order to download the files, we must be sure to add the href link to the website link. This way, Python has a way to find the files you'd like to download:

```python
        href = archive_url + link[href]
```

Before we can officially download the files, we want to make sure the files are just **.txt** files. You'll notice one of the links in the html code is not a **.txt** file. In order to not download those files, insert the following **if function**, then prepare to download the files:
```python
        if href.endswith(".txt"):
            download_links(href)
```

If you would like to have an indication that every file was downloaded, you may add `print("Al files downloaded!)`

All of the `def get_files()` should end up looking like this:

```python
def get_files():
    r = requests.get(archive_url)
    soup = bs4.BeautifulSoup(r.content, 'html.parser')
    for item in soup.select('TD[ALIGN="TOP"]'):
        link = item.find('a')
        href = archive_url + link['href']
        if href.endswith(".txt"):
            download_links(href)
    print("All files downloaded!")
```

Before we can truly download the files, we must first create another **define function** as follows:

```python
def download_links(href)
```

This will help us with the downloading of the files and placing the files where we want.

Instead of having all the files named `http://textfiles.com/politics/file_name`, we can change it to just be called `file_name` because this variable splits the url and gets only the last string:

```python
    file_name = href.split('/')[-1]
```

To show which files are downloading, you may insert the following:

```python
    print("Downloading file: " + file_name)
```

Now we must create a new response object to gather the href links. To make sure each file is downloaded without UX issues, we add `stream=True`:

```python
    r = requests.get(href, stream=True)
```

To put these files in a specific directory, we use `os.getcwd` to access the local file directory we are currently working in:

```python
    workingDir = os.getcwd()
    print("current working directory: " + workingDir)
```

This prints `current working directory: C:\Users\hadle\Documents\GitHub\portfolio\pythonCode`

Once you have access to your directory, we can put the files into a directory inside of our current working directory. The folder in my directory I'd like to place my files into is called *politicalTextFiles*, so I insert the following:

```python
    fileDeposit = os.path.join(workingDir, 'politicalTextFiles', file_name)
    print(fileDeposit)
```

This prints `C:\Users\hadle\Documents\GitHub\portfolio\pythonCode\politicalTextFiles`, showing I am directing these downloaded files to the correct directory.

Now I can download the files with the following function:

```python
    with open(fileDeposit, 'wb') as f:
        for chunk in r.iter_content(chunk_size = 1024 * 1024):
            if chunk:
                f.write(chunk)
                print("Downloaded " + file_name)

    return
```

All of the `def download_links(href)` python code should look like this:

```python
def download_links(href):
    file_name = href.split('/')[-1]
    print("Downloading file: " + file_name)
    r = requests.get(href, stream=True)

    workingDir = os.getcwd()
    print("current working directory: " + workingDir)
    fileDeposit = os.path.join(workingDir, 'politicalTextFiles', file_name)
    print(fileDeposit)

    with open(fileDeposit, 'wb') as f:
        for chunk in r.iter_content(chunk_size = 1024 * 1024):
            if chunk:
                f.write(chunk)
                print("Downloaded " + file_name)

    return
```

Lastly, we must initiate the whole program with this last function. This gets all the links to the files:

```python
if __name__ == "__main__":
    get_files = get_files()
```

You can view this [python scraper here](https://github.com/HadleighJae/portfolio/blob/main/pythonCode/politicalScraper.py).

### Explanation of [Topic Modeling Code](https://github.com/HadleighJae/portfolio/blob/main/pythonCode/topicModeling.py)

Before starting in the new Python Document, open your shell (this could be your GitBash, Command Prompt, Terminal, etc.) and type these commands:

```
pip install gensim
pip install pyldavis
pip install nltk
pip install ipython
```

- `gensim` is an open source natural language processing (NLP) library used for unsupervised topic modeling [^4]
- `pyldavis` helps us visualize the topics [^5]
- `nltk` provides Python programs to work with human language data [^6]
- `ipython` is an interactive shell to provide interactive and exploratory computing [^7]


After starting a new Python document for Topic modeling, insert the following:

```python
import pandas as pd
import nltk
from nltk.corpus import stopwords
import string
import gensim.corpora as corpora
from gensim.models import LdaModel
import pyLDAvis.gensim_models
import os

nltk.download('stopwords')
```

If you have ran the program at least once, you may comment out the download:

```python
# nltk.download('stopwords')
```

Next, we pull in the nltk stopwords by inserting the following:

```python
stop_words = stopwords.words('english')
```

If you would like to see the stop words, you may print this:

```python
print(f"{stop_words=}")
```

If you would like to add words like "without" or "like," you may do the following:

```python
newStopWords = ["without", "like"]
stop_words.extend(newStopWords)
```

You may then optionally print the updated stop words:

```python
print("UPDATED: " + f"{stop_words=}")
```

If you would like to see the punctuation that will be taken out of your files, print:

```python
print(f"{string.punctuation=}")
```

Then, we must allow it to read the desired files in our file directory (in my case 'politicalTextFiles'). You can do this by entering this (You can read a more detailed explanation of these functions in the Scraper section):

```python
workingDir = os.getcwd()
print("current working directory: " + workingDir)
politicalTextPath = os.path.join(workingDir, 'politicalTextFiles')
print(politicalTextPath)
```

Next, we prepare to take all the stop words and punctuation out of the files. This is also known as "taking files to the cleaners." To do this, we must create a defined function as follows:

```python
def clean_doc(doc)
```

To allow the function to clean the files, we must open the files using this variable:

```python
    text = open(doc, encoding=''utf8).read()
```

Next, create a variable to represent the lack of punctuation:

```python
    no_punct = ''
```

Then we need to make sure words with punctuation in them are transformed so they're not turned into two separate words (such as ain't turning into aint and not ain t):

```python
    for c in text:
        if c not in string.punctuation:
            no_punct = no_punct + c
```

Once we have that, we can create the **words** variable to represent all words in the files:

```python
    words = no_punct.lower().split()
```

Finally, to take out the stop words, we must enter this:

```python
    final_words = []
    for word in words:
        if word not in stop_words:
            final_words.append(word)

    return final_words
```

All of the `def clean_doc(doc)` should end up looking like this:

```python
def clean_doc(doc):
    text = open(doc, encoding='utf8').read()
    no_punct = ''
    for c in text:
        if c not in string.punctuation:
            no_punct = no_punct + c

    words = no_punct.lower().split()

    final_words = []
    for word in words:
        if word not in stop_words:
            final_words.append(word)

    return final_words
```

Once we have all the desired words from the text files, we must control our file handling using this **for loop**, which collects the files:

```python
allDocs = []
for file in os.listdir(politicalTextPath):
    if file.endswith(".txt"):
        filepath = f"{politicalTextPath}/{file}"
        allDocs.append(filepath)
```

This variable then takes all the docs to be cleaned:

```python
cleaned_docs = [clean_doc(doc) for doc in allDocs]
```

If you are getting any encoding errors, this optional function locates the buggy files by showing what files are downloaded and where the download ends (typically the buggy file is the last file listed). To do this, comment out the cleaned_docs variable and enter the following:

```python
# cleaned_docs = [clean_doc(doc) for doc in allDocs]

cleaned_docs = []
for doc in allDocs:
    print("This doc is going to the cleaners: " + f"{doc=}")
    clean_doc(doc)
```

Once that's all figured out, the next function prepares each word to get an **id**:

```python
id2word = corpora.Dictionary(cleaned_docs)
```

To assign **id values** to each word, enter this:

```python
corpus = [id2word.doc2bow(cleaned_doc) for cleaned_doc in cleaned_docs]
```

Now that we finally have our desired words from our text files, we can now get into topic modeling. 

Enter this code and play around with the `num_topics` number. For now, I will just use 15 topics:

```python
num_topics = 15
lda_model = LdaModel(corpus=corpus, id2word=id2word, num_topics=num_topics)
```

Now we can gather the topics using the assigned id's of the words:

```python
documents = lda_model.get_document_topics(corpus)
```

To see how many text files are used, use:

```python
print(f"{len(documents)=}")
``` 

This gives me:

```
len(documents)=457
```

Because I have 457 documents in my directory, to see the topics in each file, we must enter:

```python
print(f"{documents[456]=}")
```

Although there are 457 documents, we must use 456 as our number because  it counts from 0 instead of 1

This prints:

```
documents[456]=[(3, 0.6489933), (5, 0.25597394), (7, 0.011438947), (9, 0.0822958)]
```

This shows the **topic number** and the **weight of topic**

However, we want to sort these documents by weight. To do this, insert the following variable:

```python
sorted_documents = sorted(documents[456], key=lambda x: x[1], reverse=True)
print(f"{sorted_documents=}")
```

This prints:

```
sorted_documents=[(3, 0.676415), (5, 0.21917745), (9, 0.08718153), (7, 0.0123966895)]
```

Although this is what I gathered this time, it will be a different random assortment of topics on each run. This is because randomization is built into LDA topic modeling

To see what's in a topic, we can enter this. It asks for up to 10 topics in document 457:

```python
for topic in documents[456][:10]:
```

We can now ask for the topic terms using:

```python
    terms = lda_model.get_topic_terms(topic[0], 20)
```

Now we can get the topics and their assigned id:

```python
    print(topic)
    for num in terms:
        num = num[0]
        print(num, id2word[num])
    print()
```    

To **visualize** the topic models, we use pyLDAvis to output an interactive visualization HTML file. This HTML file will end up in your working directory. To do this, enter:

```python
vis = pyLDAvis.gensim_models.prepare(lda_model, corpus, id2word, mds="mmds", R=30)
pyLDAvis.save_html(vis, 'topicModel_Visualization.html')
```

You can view this [python topic modeling file here](file:///C:/Users/hadle/Documents/GitHub/portfolio/docs/topicModel_Visualization.html#topic=0&lambda=1&term=).

### Analysis of [pyLDAvis Visualization](http://localhost:63342/pythonCode/topicModel_Visualization.html#topic=9&lambda=0&term=)

Below shows the **left panel** of my topic model. Each circle represents a topic while the circle size  represents the relative statistical weight of the topic. The distance between the topics represents the similarities between the documents. 

<picture>
  <img alt="Left Panel of pyLDAvis Topic Visualization" src="https://raw.githubusercontent.com/HadleighJae/portfolio/main/docs/images/pyLDAvis_topic0_leftpanel.jpg" style="max-width: 80%">
</picture>

Below shows the **right panel** of my topic model. This shows the top words and their weight. The blue bar represents the word's frequency in the overall topic model. 

<picture>
  <img alt="Right Panel of pyLDAvis Topic Visualization" src="https://raw.githubusercontent.com/HadleighJae/portfolio/main/docs/images/pyLDAvis_topic0_rightpanel_1relevance.jpg" style="max-width: 80%">
</picture>

As you can see above, the word *wall* has the highest frequency among the topics. There were a lot more names than I had originally anticipated going into this project, but as I think about it, it makes sense. Having politician's names or influential people mentioned in these text files make complete sense. 

Now, I happened to notice a huge gap between some of the topics in the left panel. Topics **2** and **15** are very far away from the others, so I'd like to see why. 

As I hover over the word *wall* I notice that **topic 2** immediately increases in size. Because the first thing that comes to mind when I hear *wall* and *politics* is Donald Trump, I decide to hover over the word *donald* as well.

<picture>
  <img alt="Hovering over the word Wall" src="https://raw.githubusercontent.com/HadleighJae/portfolio/main/docs/images/pyLDAvis_topic0_hoverWall.jpg" style="max-width: 80%">
</picture>

<picture>
  <img alt="Hovering over the word Donald" src="https://raw.githubusercontent.com/HadleighJae/portfolio/main/docs/images/pyLDAvis_topic0_hoverDonald.jpg" style="max-width: 80%">
</picture>

I do wonder if **topic 2** is specifically about Donald Trump and his controversial stance over the wall. So I decide to click on **topic 2's** circle to see.

<picture>
  <img alt="Topic 2 Right Panel with 1 relevance" src="https://raw.githubusercontent.com/HadleighJae/portfolio/main/docs/images/pyLDAvis_topic2_rightpanel_1relevance.jpg" style="max-width: 80%">
</picture>

Because the **red bar** represents the word's frequency within the selected topic, it is clear that the term *wall* is important. Let's lower the overall relevance meter to see what words are frequent in just **topic 2**

<picture>
  <img alt="Topic 2 Right Panel with 0 relevance" src="https://raw.githubusercontent.com/HadleighJae/portfolio/main/docs/images/pyLDAvis_topic2_rightpanel_0relevance.jpg" style="max-width: 80%">
</picture>

Now that I can see topics more specific to **topic 2**, I notice a lack of the word *donald* among them. Maybe this isn't a document about Donald Trump, but maybe just about the wall itself. Or possibly something completely different. Who knows.

Now lets see why the topics **2** and **15** differ greatly from the others. Let's analyze **topic 9** and see what we get.

<picture>
  <img alt="Topic 9 Right Panel with 1 relevance" src="https://raw.githubusercontent.com/HadleighJae/portfolio/main/docs/images/pyLDAvis_topic9_rightpanel_1revelance.jpg" style="max-width: 80%">
</picture>

It seems as though **topic 9** does not have many similar words to the other documents, but lets try lowering the relevance.

<picture>
  <img alt="Topic 9 Right Panel with 0 relevance" src="https://raw.githubusercontent.com/HadleighJae/portfolio/main/docs/images/pyLDAvis_topic9_rightpanel_0relevance.jpg" style="max-width: 80%">
</picture>

After seeing the large amounts of numbers listed, it gave me the impression that this could be a data set, possibly similar to the census Americans take every 10 years. This also leads me to believe the documents near **topic 9** also contain many numbers, unlike **topic 2**.

You can view this [Topic Model Visualization code here](https://github.com/HadleighJae/portfolio/blob/main/pythonCode/topicModel_Visualization.html)

This is an interesting resource, but I am still confused by it. I don't like that I can't tell which document each word is from or if that's even what it analyzes. I feel like I need more explanation on the data visualization, but I enjoyed making all of this! 

[^1]: http://omz-software.com/pythonista/docs/ios/beautifulsoup.html#:~:text=Beautiful%20Soup%20is%20a%20Python,hours%20or%20days%20of%20work.
[^2]: https://www.w3schools.com/python/module_requests.asp
[^3]: https://developer.mozilla.org/en-US/docs/Glossary/Parse
[^4]: https://www.tutorialspoint.com/gensim/gensim_introduction.htm
[^5]: https://neptune.ai/blog/pyldavis-topic-modelling-exploration-tool-that-every-nlp-data-scientist-should-know
[^6]: https://www.nltk.org
[^7]: https://ipython.org/ipython-doc/3/overview.html#:~:text=The%20goal%20of%20IPython%20is,An%20enhanced%20interactive%20Python%20shell.