import random
import pandas as pd
import numpy as np

import {selectedTopics} from src/components/TopicsCheckboxes.jsx

NUM_ANIMAL = 11235
NUM_VOCAB = 6000
NUM_FACTS = NUM_ANIMAL + NUM_VOCAB

random_fact = random.randint(0, NUM_FACTS)
user_pref = []

animalfile = open('data/animals.csv', mode ='r')
animaldf = pd.read_csv(animalfile)
print("Learn about the", 
      animaldf.loc[(random_fact % NUM_ANIMAL), "animal_name"], end = "")
print("!")
print(animaldf.loc[(random_fact % NUM_ANIMAL), "text"].replace("\n", " "))

vocabfile = open('data/vocabs.csv', mode ='r')
vocabdf = pd.read_csv(vocabfile, sep = '|').drop('Index', axis=1)
print("The definition of the word", 
      vocabdf.loc[(random_fact % NUM_VOCAB), "Word"], "is",
      vocabdf.loc[(random_fact % NUM_VOCAB), "Definition"])