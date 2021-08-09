# Creating new quizzes
Here are some tips for making new quizzes.

There is a list of flashcards for the book here: https://github.com/LukeMurphey/learning_biblical_hebrew_flashcards
You can convert them to JSON using the following website: https://csvjson.com/csv2json.
Make sure that the header in the CSV starts with the following:

```
word,definition
```

You can type Hebrew characters in with https://www.lexilogos.com/keyboard/hebrew.htm.

There is a PDF at https://hebrewsyntax.org/bbh2/bbh2_study_guide.pdf that can be helpful for fiding content that is useful for making new quizzes.

## Limitations

* Parsing quizzes that have multiple answers due to supporting more than one person (e.g. the parse could be both second and third person) need to have the answer listed in the order of the persons. The answer of "2fp/3fp" will work but specifying the answer of "3fp/2fp" won't match correctly since the UI will always put the persons in order.
