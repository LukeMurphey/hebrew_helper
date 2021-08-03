import {URL_QAL_PERFECT} from '../URLs/index';
import QalPerfect from '../QalPerfectQatal/index';

export function QuizUrls({ inverted }){
    return [
        {
            "title": "Qal Perfects (Qatal)",
            "chapter": 12,
            "path": URL_QAL_PERFECT,
            "render": <QalPerfect inverted={inverted} />
        }
    ];
}
