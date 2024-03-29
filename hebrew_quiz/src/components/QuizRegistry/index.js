import {
  URL_LETTERS,
  URL_QAL_PERFECT,
  URL_QAL_IMPERFECT,
  URL_VOCAB_4,
  URL_NOUN_PARSING,
  URL_CONJUNCTION,
  URL_VOCAB_5,
  URL_TRANSLATIONS_5,
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
  URL_FORMS_20,
  URL_VOCAB_20,
  URL_VOCAB_22,
  URL_TRANSLATIONS_22,
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
import chapter_5_translations from "../../data/chapter_5_translations.json";
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
import chapter_20_forms from "../../data/chapter_20_forms.json";
import chapter_20 from "../../data/chapter_20.json";
import chapter_22 from "../../data/chapter_22.json";
import chapter_22_translations from "../../data/chapter_22_translations.json";
import qal_perfect_qatal from "../../data/chapter_12_qal_perfect_qatal.json";
import qal_imperfect_qatal from "../../data/chapter_13_qal_imperfect_qatal.json";

import { shuffle, vocabularyQuizTitle, getQuizIDFromURL } from "../Utils/index";
import { setQuizStatus } from "../Persistence";
import SelectCorrectTranslationQuiz from "../../quizzes/SelectCorrectTranslationQuiz";
import { VOCAB_MATCHING_QUESTION_FONT_SIZE, VOCAB_MATCHING_ANSWER_FONT_SIZE, HEBREW_TEXT_FONT_SIZE} from "../Utils/constants"

export default function QuizRegistry({ inverted }) {
  const quizList = [
    {
      title: "Letters",
      chapter: 2,
      quizzes: [
        {
          path: URL_LETTERS,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={"Letters"}
              questionSet={shuffle(chapter_2_letters)}
              maxPerPage={15}
              answersFontSize={HEBREW_TEXT_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_LETTERS), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Passage Memorization (Gen. 1 and Dt. 6)",
      chapter: 3,
      quizzes: [
        {
          path: URL_BASIC_READINGS,
          render: (
            <MakeSentenceQuiz
              inverted={inverted}
              title={"Test your memorization of Genesis and Deuteronomy 6:4-5"}
              questionSet={genesis_1_shema}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_BASIC_READINGS), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 4 Vocabulary",
      chapter: 4,
      quizzes: [
        {
          path: URL_VOCAB_4,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(4)}
              questionSet={shuffle(chapter_4)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_4), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Noun Parsing",
      chapter: 4,
      quizzes: [
        {
          path: URL_NOUN_PARSING,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={"Noun Parsing"}
              subtitle={"Match the noun with the correct form"}
              questionSet={shuffle(chapter_4_nouns)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              maxPerPage={10}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_NOUN_PARSING), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Conjunction",
      chapter: 4,
      quizzes: [
        {
          path: URL_CONJUNCTION,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={"Conjunction"}
              subtitle={"Match the conjunction with the word"}
              questionSet={shuffle(chapter_4_conjunction)}
              maxPerPage={10}
              // The font-sizes are reversed from the usual because the English is in the answers list
              answersFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_CONJUNCTION), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 5 Vocabulary (including this/that)",
      chapter: 5,
      quizzes: [
        {
          path: URL_VOCAB_5,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(5)}
              questionSet={shuffle(chapter_5)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_5), status)
              }
            />
          ),
        },
        {
          path: URL_TRANSLATIONS_5,
          render: (
            <SelectCorrectTranslationQuiz
              inverted={inverted}
              title={"Translations for Chapter 5"}
              questionSet={shuffle(chapter_5_translations)}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_TRANSLATIONS_5), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 7 Vocabulary",
      chapter: 7,
      quizzes: [
        {
          path: URL_VOCAB_7,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(7)}
              questionSet={shuffle(chapter_7)}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_7), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 8 Vocabulary",
      chapter: 8,
      quizzes: [
        {
          path: URL_VOCAB_8,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(8)}
              questionSet={shuffle(chapter_8)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_8), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Pronominal",
      chapter: 8,
      quizzes: [
        {
          path: URL_PRONOMINAL,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={"Pronominal"}
              questionSet={shuffle(chapter_8_pronominal)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_PRONOMINAL), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 9 Vocabulary",
      chapter: 9,
      quizzes: [
        {
          path: URL_VOCAB_9,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(9)}
              questionSet={shuffle(chapter_9)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_9), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 11 Vocabulary",
      chapter: 11,
      quizzes: [
        {
          path: URL_VOCAB_11,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(11)}
              questionSet={shuffle(chapter_11)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_11), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Qal Perfects (Qatal)",
      chapter: 12,
      quizzes: [
        {
          path: URL_QAL_PERFECT,
          render: (
            <ParsingQuiz
              inverted={inverted}
              questionSet={shuffle(qal_perfect_qatal)}
              title={"Qal Perfect (Qatal)"}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_QAL_PERFECT), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 13 Vocabulary",
      chapter: 13,
      quizzes: [
        {
          path: URL_VOCAB_13,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(13)}
              questionSet={shuffle(chapter_13)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_13), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Qal Imperfects (Qatal)",
      chapter: 12,
      quizzes: [
        {
          path: URL_QAL_IMPERFECT,
          render: (
            <ParsingQuiz
              inverted={inverted}
              questionSet={shuffle(qal_imperfect_qatal)}
              allowMultiplePerson={true}
              title={"Qal Imperfect (Qatal)"}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_QAL_IMPERFECT), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 14 Vocabulary",
      chapter: 14,
      quizzes: [
        {
          path: URL_VOCAB_14,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(14)}
              questionSet={shuffle(chapter_14)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_14), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 15 Vocabulary",
      chapter: 15,
      quizzes: [
        {
          path: URL_VOCAB_15,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(15)}
              questionSet={shuffle(chapter_15)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_15), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 16 Vocabulary",
      chapter: 16,
      quizzes: [
        {
          path: URL_VOCAB_16,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(16)}
              questionSet={shuffle(chapter_16)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_16), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 17 Vocabulary",
      chapter: 17,
      quizzes: [
        {
          path: URL_VOCAB_17,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(17)}
              questionSet={shuffle(chapter_17)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_17), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 18 Vocabulary",
      chapter: 18,
      quizzes: [
        {
          path: URL_VOCAB_18,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(18)}
              questionSet={shuffle(chapter_18)}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_18), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 19 Vocabulary",
      chapter: 19,
      quizzes: [
        {
          path: URL_VOCAB_19,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(19)}
              questionSet={shuffle(chapter_19)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_19), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Piel, Pual, and Hithpael",
      chapter: 19,
      quizzes: [
        {
          path: URL_FORMS_19,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={"Piel, Pual, and Hithpael"}
              questionSet={chapter_19_forms}
              maxPerPage={4}
              // The Hebrew is in in the answer, not the question
              answersFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_FORMS_19), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 20 Vocabulary",
      chapter: 20,
      quizzes: [
        {
          path: URL_VOCAB_20,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(20)}
              questionSet={shuffle(chapter_20)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_20), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Hiphil and Hophal",
      chapter: 20,
      quizzes: [
        {
          path: URL_FORMS_20,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={"Hiphil and Hophal"}
              questionSet={chapter_20_forms}
              maxPerPage={4}
              // The Hebrew is in in the answer, not the question
              answersFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_FORMS_20), status)
              }
            />
          ),
        },
      ],
    },
    {
      title: "Chapter 22 Vocabulary",
      chapter: 22,
      quizzes: [
        {
          path: URL_VOCAB_22,
          render: (
            <MatchingQuiz
              inverted={inverted}
              title={vocabularyQuizTitle(22)}
              questionSet={shuffle(chapter_22)}
              answersFontSize={VOCAB_MATCHING_ANSWER_FONT_SIZE}
              questionsFontSize={VOCAB_MATCHING_QUESTION_FONT_SIZE}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_VOCAB_22), status)
              }
            />
          ),
        },
        {
          path: URL_TRANSLATIONS_22,
          render: (
            <SelectCorrectTranslationQuiz
              inverted={inverted}
              title={"Translations for Chapter 22"}
              questionSet={shuffle(chapter_22_translations)}
              onQuizDone={(status) =>
                setQuizStatus(getQuizIDFromURL(URL_TRANSLATIONS_22), status, 2)
              }
            />
          ),
        },
      ],
    },
  ];

  // Sort them by chapter
  quizList.sort((first, second) => first.chapter - second.chapter);

  return quizList;
}
