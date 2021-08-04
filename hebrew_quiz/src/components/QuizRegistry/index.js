import {URL_QAL_PERFECT, URL_VOCAB_4} from '../URLs/index';
import QalPerfect from '../QalPerfectQatal/index';
import VocabularyQuiz from '../VocabularyQuiz/index';
import chapter_1 from "../VocabularyQuiz/data/chapter_1.json";
import { shuffle } from "../Utils/index";

export default function QuizRegistry({ inverted }){
    return [
        {
            "title": "Qal Perfects (Qatal)",
            "chapter": 12,
            "path": URL_QAL_PERFECT,
            "render": <QalPerfect inverted={inverted} />
        },
        {
            "title": "Chapter 4 Vocabulary",
            "chapter": 4,
            "path": URL_VOCAB_4,
            "render": <VocabularyQuiz inverted={inverted} title={"Vocabulary quiz for chapter 4"} questionSet={shuffle(chapter_1)} />
        }
    ];
}
