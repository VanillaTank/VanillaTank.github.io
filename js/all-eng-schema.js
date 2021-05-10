import {verbs, pronoun, askWord} from './parts.js';

const allEngSchema = [
    //будущее вопросительное
    () => {
        let expression = '';
        let allExpressions = []
            for(let i = 0; i < pronoun.length; i ++) {
                expression = "Will " +  pronoun[i] + ' '
                for(let i = 0; i < verbs.length; i ++) {
                    let finishedExpression = expression + verbs[i].v1 + '?'
                    finishedExpression = finishedExpression.charAt(0).toUpperCase() + finishedExpression.slice(1)
                    allExpressions.push( finishedExpression )
                }
            }
        return allExpressions
    },
    //Настоящее вопросительное
    () => {
        let expression = '';
        let allExpressions = []
        for(let i = 0; i < pronoun.length - 2; i ++) {
            expression = "Do " + pronoun[i] + ' '
            for(let i = 0; i < verbs.length; i ++) {
                let finishedExpression = expression + verbs[i].v1 + '?'
                allExpressions.push( finishedExpression )
            }
        }
        for (let j = 4; j < pronoun.length; j ++) {
            expression = "Does " + pronoun[j] + ' '
            for(let i = 0; i < verbs.length; i ++) {
                let finishedExpression = expression + verbs[i].v1 + '?'
                finishedExpression = finishedExpression.charAt(0).toUpperCase() + finishedExpression.slice(1)
                allExpressions.push( finishedExpression )
            }
        }
        return allExpressions
    },
    //Прощедшее вопросительное
    () => {
        let expression = '';
        let allExpressions = []
        for(let i = 0; i < pronoun.length; i ++) {
            expression = "Did " +  pronoun[i] + ' '
            for(let i = 0; i < verbs.length; i ++) {
                let finishedExpression = expression + verbs[i].v1 + '?'
                finishedExpression = finishedExpression.charAt(0).toUpperCase() + finishedExpression.slice(1)
                allExpressions.push( finishedExpression )
            }
        }
        return allExpressions
    },
    //будущее утвердительное
    () => {
        let expression = '';
        let allExpressions = []
        for(let i = 0; i < pronoun.length; i ++) {
            expression = pronoun[i] + ' will '
            for(let i = 0; i < verbs.length; i ++) {
                let finishedExpression = expression + verbs[i].v1
                finishedExpression = finishedExpression.charAt(0).toUpperCase() + finishedExpression.slice(1)
                allExpressions.push( finishedExpression )
            }
        }
        return allExpressions
    },
    //Настоящее утведтительное
    () => {
        let expression = '';
        let allExpressions = [];
        let verb = ''
        for(let i = 0; i < pronoun.length - 2; i ++) {
            expression = pronoun[i] + ' '
            for(let i = 0; i < verbs.length; i ++) {
                let finishedExpression = expression + verbs[i].v1
                finishedExpression = finishedExpression.charAt(0).toUpperCase() + finishedExpression.slice(1)
                allExpressions.push( finishedExpression )
            }
        }
        for (let j = 4; j < pronoun.length; j ++) {
            expression = pronoun[j] + ' '
            for(let i = 0; i < verbs.length; i ++) {
                if(verbs[i].v3) {
                    verb = verbs[i].v3
                } else {
                    verb = verbs[i].v1+'es'
                }

                let finishedExpression = expression + verb;
                finishedExpression = finishedExpression.charAt(0).toUpperCase() + finishedExpression.slice(1)
                allExpressions.push( finishedExpression )
            }
        }
        return allExpressions
    },
    //Прощедшее утвердительное
    () => {
        let expression = '';
        let allExpressions = []
        for(let i = 0; i < pronoun.length; i ++) {
            expression = pronoun[i] + ' '
            for(let i = 0; i < verbs.length; i ++) {
                let finishedExpression = expression + verbs[i].v2
                finishedExpression = finishedExpression.charAt(0).toUpperCase() + finishedExpression.slice(1)
                allExpressions.push( finishedExpression )
            }
        }
        return allExpressions
    },
    //будущее отрицательное
    () => {
        let expression = '';
        let allExpressions = []
        for(let i = 0; i < pronoun.length; i ++) {
            expression = pronoun[i] + ' will not '
            for(let i = 0; i < verbs.length; i ++) {
                let finishedExpression = expression + verbs[i].v1
                finishedExpression = finishedExpression.charAt(0).toUpperCase() + finishedExpression.slice(1)
                allExpressions.push( finishedExpression )
            }
        }
        return allExpressions
    },
    //Настоящее отрицательное
    () => {
        let expression = '';
        let allExpressions = [];
        for(let i = 0; i < pronoun.length - 2; i ++) {
            expression = pronoun[i] + " don't "
            for(let i = 0; i < verbs.length; i ++) {
                let finishedExpression = expression + verbs[i].v1
                finishedExpression = finishedExpression.charAt(0).toUpperCase() + finishedExpression.slice(1)
                allExpressions.push( finishedExpression )
            }
        }
        for (let j = 4; j < pronoun.length; j ++) {
            expression = pronoun[j] + " doesn't "
            for(let i = 0; i < verbs.length; i ++) {
                let finishedExpression = expression +  verbs[i].v1;
                finishedExpression = finishedExpression.charAt(0).toUpperCase() + finishedExpression.slice(1)
                allExpressions.push( finishedExpression )
            }
        }
        return allExpressions
    },
    //Прощедшее отрицательное
    () => {
        let expression = '';
        let allExpressions = []
        for(let i = 0; i < pronoun.length; i ++) {
            expression = pronoun[i] + " didn't "
            for(let i = 0; i < verbs.length; i ++) {
                let finishedExpression = expression + verbs[i].v1
                finishedExpression = finishedExpression.charAt(0).toUpperCase() + finishedExpression.slice(1)
                allExpressions.push( finishedExpression )
            }
        }
        return allExpressions
    }
]

export default allEngSchema;