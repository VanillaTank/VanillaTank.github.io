import {verbs, pronoun, askWord} from './parts.js';

const schema = [
    () => `${askWord[0]} ${pronoun[getRandomWord(pronoun)]} ${verbs[getRandomWord(verbs)].v1}?`, //вопрос будущее
    () => `${askWord[1]} ${pronoun[getRandomWord(pronoun, 0, 3)]} ${verbs[getRandomWord(verbs)].v1}?`, //вопрос настоящиее
    () => `${askWord[2]} ${pronoun[getRandomWord(pronoun, 4, 5)]} ${verbs[getRandomWord(verbs)].v1}?`, //вопрос настоящее он-она
    () => `${askWord[3]} ${pronoun[getRandomWord(pronoun)]} ${verbs[getRandomWord(verbs)].v1}?`, //вопрос прошедшее
    () => `${pronoun[getRandomWord(pronoun)]} will ${verbs[getRandomWord(verbs)].v1}.`, //утверждение будущее
    () => `${pronoun[pronoun, 0, 3]} ${verbs[getRandomWord(verbs)].v1}.`, //утверждение настоящее
    () => {
        let tryVerb = verbs[getRandomWord(verbs)]
        if (tryVerb.v3 !== undefined) { return pronoun[pronoun, 4, 5] + ' ' + tryVerb.v3 }
        else { return pronoun[pronoun, 4, 5] + ' ' + tryVerb.v1 + 's.' }
    }, //утверждение настоящее он-она
    () => `${pronoun[getRandomWord(pronoun)]} ${verbs[getRandomWord(verbs)].v2 || verbs[getRandomWord(verbs)].v1+'ed'}.`, //утверждение прошедшее
    () => `${pronoun[getRandomWord(pronoun)]} will not ${verbs[getRandomWord(verbs)].v1}.`, //отрицание будущее
    () => `${pronoun[getRandomWord(pronoun, 0, 3)]} don\'t ${verbs[getRandomWord(verbs)].v1}.`, //отрицание настоящее
    () => `${pronoun[pronoun, 4, 5]} doesn\'t ${verbs[getRandomWord(verbs)].v1}.`, //отрицание настоящее он-она
    () => `${pronoun[getRandomWord(pronoun)]} did not ${verbs[getRandomWord(verbs)].v1}.` //отрицвние прошедшее
]

//------------------------------------------------------------------------------------------------------------------

function getRandomWord  (arr, min = 0, max = 0)  {
    if (max === 0) { return Math.floor(Math.random() * arr.length) }
    else {
        var offset = min;
        var range = (max - min) + 1;
        var randomNumber = Math.floor(Math.random() * range) + offset;
        return randomNumber;
    }
}

export default schema;