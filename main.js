const outputEn = document.querySelector('.output_en');
const btnNewWord = document.querySelector('#btnNewWord');
const btnCheckWord = document.querySelector('#btnCheckWord');
const el = document.getElementById('input');
const verbs = [
  { v1: 'work', v2: 'worked' },
  { v1: 'open', v2: 'opened' },
  { v1: 'love', v2: 'loved' },
  { v1: 'see', v2: 'saw' },
  { v1: 'go', v2: 'went', v3: 'goes' },
  { v1: 'know', v2: 'knew' },
  { v1: 'start', v2: 'started' },
  { v1: 'finish', v2: 'finished' },
  { v1: 'close', v2: 'closed' },
  { v1: 'live', v2: 'lived' },
  { v1: 'come', v2: 'came' },
  { v1: 'think', v2: 'thought' },
  { v1: 'help', v2: 'helped' },
  { v1: 'ask', v2: 'asked' },
  { v1: 'answer', v2: 'answered' },
  { v1: 'give', v2: 'gave' },
  { v1: 'take', v2: 'took' },
  { v1: 'hope', v2: 'hoped' },
  { v1: 'speak', v2: 'spoke' },
  { v1: 'travel', v2: 'traveled' },
  { v1: 'write', v2: 'wrote' },
  { v1: 'play', v2: 'played' },
  { v1: 'apologize', v2: 'apologized' },
  { v1: 'read', v2: 'read' },
  { v1: 'sleep', v2: 'slept' },
  { v1: 'spend', v2: 'spent' },
  { v1: 'accompany', v2: 'accompanied', v3: 'accompanies' },
  { v1: 'promise', v2: 'promised' },
  { v1: 'have rest', v2: 'had rest', v3: 'has rest' },
  { v1: 'get', v2: 'got' },
  { v1: 'hide', v2: 'hid' }
]
const pronoun = ["I", 'you', 'we', 'they', 'he', 'she'];
const askWord = ['Will', "Do", "Does", "Did"];


const getRandomWord = (arr, min = 0, max = 0) => {
  if (max === 0) { return Math.floor(Math.random() * arr.length) }
  else {
    var offset = min;
    var range = (max - min) + 1;
    var randomNumber = Math.floor(Math.random() * range) + offset;
    return randomNumber;
  }
}


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

let startText = schema[Math.floor(Math.random() * schema.length)].text();
outputEn.textContent = startText
el.value = startText;
el.classList.add('hidden');



btnNewWord.addEventListener('click', () => {
  outputEn.classList.add('animate')
  let randomSchema = Math.floor(Math.random() * schema.length)
  let enText = schema[randomSchema].text();
  outputEn.textContent = enText;
  el.value = enText;
  el.classList.add('hidden');
  outputEn.classList.remove('animate')
})

//анимировать ключевыми кадрами затухание и появление

btnCheckWord.addEventListener('click', () => {
  el.classList.remove('hidden')
})
