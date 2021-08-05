import {
  URL_QAL_PERFECT,
  URL_VOCAB_4,
  URL_VOCAB_5,
  URL_VOCAB_7,
  URL_VOCAB_8,
  URL_VOCAB_9,
  URL_VOCAB_11,
  URL_VOCAB_13,
  URL_VOCAB_14,
  URL_VOCAB_15,
  URL_VOCAB_16,
  URL_VOCAB_17,
  URL_VOCAB_18,
  URL_VOCAB_19,
  URL_VOCAB_20,
  URL_VOCAB_22,
} from "../URLs/index";
import QalPerfect from "../../quizzes/QalPerfectQatal/index";
import VocabularyQuiz from "../../quizzes/VocabularyQuiz/index";
import chapter_4 from "../../quizzes/VocabularyQuiz/data/chapter_4.json";
import chapter_5 from "../../quizzes/VocabularyQuiz/data/chapter_5.json";
import chapter_7 from "../../quizzes/VocabularyQuiz/data/chapter_7.json";
import chapter_8 from "../../quizzes/VocabularyQuiz/data/chapter_8.json";
import chapter_9 from "../../quizzes/VocabularyQuiz/data/chapter_9.json";
import chapter_11 from "../../quizzes/VocabularyQuiz/data/chapter_11.json";
import chapter_13 from "../../quizzes/VocabularyQuiz/data/chapter_13.json";
import chapter_14 from "../../quizzes/VocabularyQuiz/data/chapter_14.json";
import chapter_15 from "../../quizzes/VocabularyQuiz/data/chapter_15.json";
import chapter_16 from "../../quizzes/VocabularyQuiz/data/chapter_16.json";
import chapter_17 from "../../quizzes/VocabularyQuiz/data/chapter_17.json";
import chapter_18 from "../../quizzes/VocabularyQuiz/data/chapter_18.json";
import chapter_19 from "../../quizzes/VocabularyQuiz/data/chapter_19.json";
import chapter_20 from "../../quizzes/VocabularyQuiz/data/chapter_20.json";
import chapter_22 from "../../quizzes/VocabularyQuiz/data/chapter_22.json";

import { shuffle, vocabularyQuizTitle } from "../Utils/index";

export default function QuizRegistry({ inverted }) {
  return [
    {
      title: "Chapter 4 Vocabulary",
      chapter: 4,
      path: URL_VOCAB_4,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(4)}
          questionSet={shuffle(chapter_4)}
        />
      ),
    },
    {
      title: "Chapter 5 Vocabulary",
      chapter: 5,
      path: URL_VOCAB_5,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(5)}
          questionSet={shuffle(chapter_5)}
        />
      ),
    },
    {
      title: "Chapter 7 Vocabulary",
      chapter: 7,
      path: URL_VOCAB_7,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(7)}
          questionSet={shuffle(chapter_7)}
        />
      ),
    },
    {
      title: "Chapter 8 Vocabulary",
      chapter: 8,
      path: URL_VOCAB_8,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(8)}
          questionSet={shuffle(chapter_8)}
        />
      ),
    },
    {
      title: "Chapter 9 Vocabulary",
      chapter: 9,
      path: URL_VOCAB_9,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(9)}
          questionSet={shuffle(chapter_9)}
        />
      ),
    },
    {
      title: "Chapter 11 Vocabulary",
      chapter: 11,
      path: URL_VOCAB_11,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(11)}
          questionSet={shuffle(chapter_11)}
        />
      ),
    },
    {
      title: "Qal Perfects (Qatal)",
      chapter: 12,
      path: URL_QAL_PERFECT,
      render: <QalPerfect inverted={inverted} />,
    },
    {
      title: "Chapter 13 Vocabulary",
      chapter: 13,
      path: URL_VOCAB_13,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(13)}
          questionSet={shuffle(chapter_13)}
        />
      ),
    },
    {
      title: "Chapter 14 Vocabulary",
      chapter: 14,
      path: URL_VOCAB_14,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(14)}
          questionSet={shuffle(chapter_14)}
        />
      ),
    },
    {
      title: "Chapter 15 Vocabulary",
      chapter: 15,
      path: URL_VOCAB_15,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(15)}
          questionSet={shuffle(chapter_15)}
        />
      ),
    },
    {
      title: "Chapter 16 Vocabulary",
      chapter: 16,
      path: URL_VOCAB_16,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(16)}
          questionSet={shuffle(chapter_16)}
        />
      ),
    },
    {
      title: "Chapter 17 Vocabulary",
      chapter: 17,
      path: URL_VOCAB_17,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(17)}
          questionSet={shuffle(chapter_17)}
        />
      ),
    },
    {
      title: "Chapter 18 Vocabulary",
      chapter: 18,
      path: URL_VOCAB_18,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(18)}
          questionSet={shuffle(chapter_18)}
        />
      ),
    },
    {
      title: "Chapter 19 Vocabulary",
      chapter: 19,
      path: URL_VOCAB_19,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(19)}
          questionSet={shuffle(chapter_19)}
        />
      ),
    },
    {
      title: "Chapter 20 Vocabulary",
      chapter: 20,
      path: URL_VOCAB_20,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(20)}
          questionSet={shuffle(chapter_20)}
        />
      ),
    },
    {
      title: "Chapter 22 Vocabulary",
      chapter: 22,
      path: URL_VOCAB_22,
      render: (
        <VocabularyQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(22)}
          questionSet={shuffle(chapter_22)}
        />
      ),
    },
  ];
}
