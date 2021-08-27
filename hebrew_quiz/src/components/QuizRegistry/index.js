import {
  URL_LETTERS,
  URL_QAL_PERFECT,
  URL_QAL_IMPERFECT,
  URL_VOCAB_4,
  URL_NOUN_PARSING,
  URL_CONJUNCTION,
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
  URL_FORMS_19,
  URL_VOCAB_20,
  URL_VOCAB_22,
  URL_PRONOMINAL,
  URL_BASIC_READINGS,
} from "../URLs/index";
import ParsingQuiz from "../../quizzes/ParsingQuiz/index";
import MatchingQuiz from "../../quizzes/MatchingQuiz/index";
import MakeSentenceQuiz from "../../quizzes/MakeSentenceQuiz/index";

import genesis_1_shema from "../../data//genesis_1_shema.json";
import chapter_2_letters from "../../data/chapter_2_letters.json";
import chapter_4 from "../../data/chapter_4.json";
import chapter_4_nouns from "../../data/chapter_4_nouns.json";
import chapter_4_conjunction from "../../data/chapter_4_conjunction.json";
import chapter_5 from "../../data/chapter_5.json";
import chapter_7 from "../../data/chapter_7.json";
import chapter_8 from "../../data/chapter_8.json";
import chapter_8_pronominal from "../../data/chapter_8_pronominal.json";
import chapter_9 from "../../data/chapter_9.json";
import chapter_11 from "../../data/chapter_11.json";
import chapter_13 from "../../data/chapter_13.json";
import chapter_14 from "../../data/chapter_14.json";
import chapter_15 from "../../data/chapter_15.json";
import chapter_16 from "../../data/chapter_16.json";
import chapter_17 from "../../data/chapter_17.json";
import chapter_18 from "../../data/chapter_18.json";
import chapter_19 from "../../data/chapter_19.json";
import chapter_19_forms from "../../data/chapter_19_forms.json";
import chapter_20 from "../../data/chapter_20.json";
import chapter_22 from "../../data/chapter_22.json";
import qal_perfect_qatal from "../../data/chapter_12_qal_perfect_qatal.json";
import qal_imperfect_qatal from "../../data/chapter_13_qal_imperfect_qatal.json";

import { shuffle, vocabularyQuizTitle } from "../Utils/index";

export default function QuizRegistry({ inverted }) {
  return [
    {
      title: "Passage Memorization (Gen 1 and Dt. 6)",
      chapter: 1,
      path: URL_BASIC_READINGS, 
      render: (
        <MakeSentenceQuiz
          inverted={inverted}
          title={"Test your memorization of Genesis and Deuteronomy 6:4-5"}
          questionSet={genesis_1_shema}
        />
      ),
    },
    {
      title: "Letters",
      chapter: 2,
      path: URL_LETTERS,
      render: (
        <MatchingQuiz
          inverted={inverted}
          title={"Letters"}
          questionSet={shuffle(chapter_2_letters)}
          maxPerPage={15}
        />
      ),
    },
    {
      title: "Chapter 4 Vocabulary",
      chapter: 4,
      path: URL_VOCAB_4,
      render: (
        <MatchingQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(4)}
          questionSet={shuffle(chapter_4)}
        />
      ),
    },
    {
      title: "Noun Parsing",
      chapter: 4,
      path: URL_NOUN_PARSING,
      render: (
        <MatchingQuiz
          inverted={inverted}
          title={"Noun Parsing"}
          subtitle={"Match the noun with the correct form"}
          questionSet={shuffle(chapter_4_nouns)}
          maxPerPage={10}
        />
      ),
    },
    {
      title: "Conjunction",
      chapter: 4,
      path: URL_CONJUNCTION,
      render: (
        <MatchingQuiz
          inverted={inverted}
          title={"Conjunction"}
          subtitle={"Match the conjunction with the word"}
          questionSet={shuffle(chapter_4_conjunction)}
          maxPerPage={10}
        />
      ),
    },
    {
      title: "Chapter 5 Vocabulary (including this/that)",
      chapter: 5,
      path: URL_VOCAB_5,
      render: (
        <MatchingQuiz
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
        <MatchingQuiz
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
        <MatchingQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(8)}
          questionSet={shuffle(chapter_8)}
        />
      ),
    },
    {
      title: "Pronominal",
      chapter: 8,
      path: URL_PRONOMINAL,
      render: (
        <MatchingQuiz
          inverted={inverted}
          title={"Pronominal"}
          questionSet={shuffle(chapter_8_pronominal)}
        />
      ),
    },
    {
      title: "Chapter 9 Vocabulary",
      chapter: 9,
      path: URL_VOCAB_9,
      render: (
        <MatchingQuiz
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
        <MatchingQuiz
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
      render: <ParsingQuiz inverted={inverted} questionSet={shuffle(qal_perfect_qatal)} title={"Qal Perfect (Qatal)"} />,
    },
    {
      title: "Chapter 13 Vocabulary",
      chapter: 13,
      path: URL_VOCAB_13,
      render: (
        <MatchingQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(13)}
          questionSet={shuffle(chapter_13)}
        />
      ),
    },
    {
      title: "Qal Imperfects (Qatal)",
      chapter: 12,
      path: URL_QAL_IMPERFECT,
      render: <ParsingQuiz inverted={inverted} questionSet={shuffle(qal_imperfect_qatal)} allowMultiplePerson={true} title={"Qal Imperfect (Qatal)"} />,
    },
    {
      title: "Chapter 14 Vocabulary",
      chapter: 14,
      path: URL_VOCAB_14,
      render: (
        <MatchingQuiz
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
        <MatchingQuiz
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
        <MatchingQuiz
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
        <MatchingQuiz
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
        <MatchingQuiz
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
        <MatchingQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(19)}
          questionSet={shuffle(chapter_19)}
        />
      ),
    },
    {
      title: "Piel, Pual, and Hithpael",
      chapter: 19,
      path: URL_FORMS_19,
      render: (
        <MatchingQuiz
          inverted={inverted}
          title={"Piel, Pual, and Hithpael"}
          questionSet={chapter_19_forms}
          maxPerPage={4}
        />
      ),
    },
    {
      title: "Chapter 20 Vocabulary",
      chapter: 20,
      path: URL_VOCAB_20,
      render: (
        <MatchingQuiz
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
        <MatchingQuiz
          inverted={inverted}
          title={vocabularyQuizTitle(22)}
          questionSet={shuffle(chapter_22)}
        />
      ),
    },
  ];
}
