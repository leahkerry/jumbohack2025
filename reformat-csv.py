import pandas as pd
import numpy as np
import json

NUM_ANIMAL = 7734
NUM_VOCAB = 6000

# animalfile = open('data/animals.csv', mode ='r')
# animaldf = pd.read_csv(animalfile)
# animalsdict = []
# for i in range(0, len(animaldf) - 1):
#     factstr = ("Learn about the " + 
#       animaldf.loc[i, "animal_name"] + "!\n" + 
#       (animaldf.loc[i, "text"]).replace("\n", " "))
#     animalsdict.append({"content":factstr})
# with open('data/animals.json', 'w') as f:
#     json.dump(animalsdict, f)

vocabfile = open('data/vocabs.csv', mode ='r')
vocabdf = pd.read_csv(vocabfile, sep = '|').drop('Index', axis=1)
vocabsdict = []
for i in range(0, len(vocabdf)):
    print(vocabdf.loc[i, "Word"])
    factstr = ("The definition of the word " +
      ("\"" + vocabdf.loc[i, "Word"].lower() + "\""), " is ",
      ("\"" + vocabdf.loc[i, "Definition"].lower() + "\""))
    vocabsdict.append({"content":factstr})
with open('data/vocabs.json', 'w') as f:
    json.dump(vocabsdict, f)