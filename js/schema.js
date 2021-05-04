import {verbs, pronoun, askWord} from './parts.js';
import getRandomWord from "./getRandomWord.js";

const schema = [
    () => `${getRandomWord(askWord)} ${getRandomWord(pronoun)} ${getRandomWord(verbs).v1}?`, //вопрос будущее
    () => `${getRandomWord(pronoun, 0, 3)} ${getRandomWord(verbs).v1}?`, //вопрос настоящиее
    () => `${getRandomWord(pronoun, 4, 5)} ${getRandomWord(verbs).v1}?`, //вопрос настоящее он-она
    () => `${getRandomWord(pronoun)} ${getRandomWord(verbs).v1}?`, //вопрос прошедшее
    () => `${getRandomWord(pronoun)} will ${getRandomWord(verbs).v1}.`, //утверждение будущее
    () => `${getRandomWord(pronoun, 0, 3)} ${getRandomWord(verbs).v1}.`, //утверждение настоящее
    () => {
         let tryVerb = getRandomWord(verbs)
         if (tryVerb.v3 !== undefined) { return getRandomWord(pronoun, 4, 5) + ' ' + tryVerb.v3 }
         else { return getRandomWord(pronoun, 4, 5) + ' ' + tryVerb.v1 + 's.' }
     }, //утверждение настоящее он-она
    () => `${getRandomWord(pronoun)} ${getRandomWord(verbs).v2 || getRandomWord(verbs).v1+'ed'}.`, //утверждение прошедшее
    () => `${getRandomWord(pronoun)} will not ${getRandomWord(verbs).v1}.`, //отрицание будущее
    () => `${getRandomWord(pronoun, 0, 3)} don\'t ${getRandomWord(verbs).v1}.`, //отрицание настоящее
    () => `${getRandomWord(pronoun, 4, 5)} doesn't ${getRandomWord(verbs).v1}.`, //отрицание настоящее он-она
    () => `${getRandomWord(pronoun)} did not ${getRandomWord(verbs).v1}.` //отрицание прошедшее
]

//------------------------------------------------------------------------------------------------------------------


export default schema;