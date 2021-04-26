const schema = [
    {
        text() {
            return `${askWord[0]} ${pronoun[getRandomWord(pronoun)]} ${verbs[getRandomWord(verbs)].v1}?`
        }
    }, //вопрос будущее
    {
        text() {
            return `${askWord[1]} ${pronoun[getRandomWord(pronoun, 0, 3)]} ${verbs[getRandomWord(verbs)].v1}?`
        }
    }, //вопрос настоящиее
    {
        text() {
            return `${askWord[2]} ${pronoun[getRandomWord(pronoun, 4, 5)]} ${verbs[getRandomWord(verbs)].v1}?`
        }
    }, //вопрос настоящее он-она
    {
        text() {
            return `${askWord[3]} ${pronoun[getRandomWord(pronoun)]} ${verbs[getRandomWord(verbs)].v1}?`
        }
    }, //вопрос прошедшее
    {
        text() {
            return `${pronoun[getRandomWord(pronoun)]} will ${verbs[getRandomWord(verbs)].v1}.`
        }
    },  //утверждение будущее
    {
        text() {
            return `${pronoun[pronoun, 0, 3]} ${verbs[getRandomWord(verbs)].v1}.`
        }
    }, //утверждение настоящее
    {
        text () {
            let tryVerb = verbs[getRandomWord(verbs)]
            if (tryVerb.v3 !== undefined) {
                return pronoun[pronoun, 4, 5] + ' ' + tryVerb.v3
            } else {
                return pronoun[pronoun, 4, 5] + ' ' + tryVerb.v1 + 's.'
            }
        }
    }, //утверждение настоящее он-она
    {
        text() {
            return `${pronoun[getRandomWord(pronoun)]} ${verbs[getRandomWord(verbs)].v2 || verbs[getRandomWord(verbs)].v1+'ed'}.`
        }
    }, //утверждение прошедшее
    {
        text() {
            return `${pronoun[getRandomWord(pronoun)]} will not ${verbs[getRandomWord(verbs)].v1}.`
        }
    }, //отрицание будущее
    {
        text() {
            return `${pronoun[getRandomWord(pronoun, 0, 3)]} don\'t ${verbs[getRandomWord(verbs)].v1}.`
        }
    }, //отрицание настоящее
    {
        text() {
            return `${pronoun[pronoun, 4, 5]} doesn\'t ${verbs[getRandomWord(verbs)].v1}.`
        }
    }, //отрицание настоящее он-она
    {
        text() {
            return `${pronoun[getRandomWord(pronoun)]} did not ${verbs[getRandomWord(verbs)].v1}.`
        }
    } //отрицвние прошедшее
]