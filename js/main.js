import {phraseGeneratorService} from './phraseGeneratorService.js';
import {translationService} from './translationService.js';
import {stringService} from './stringService.js';

let textToTranslateElement;
let textToCheckElement;
let resultElement;
let checkButtonElement;
let nextButtonElement;
let inputElement;

let currentPhrase;
let currentPhraseTranslation;
let loading = false;

document.addEventListener('DOMContentLoaded', () => {
  textToTranslateElement = document.getElementById('textToTranslate');
  textToCheckElement = document.getElementById('textToCheck');
  resultElement = document.getElementById('result');
  checkButtonElement = document.getElementById('checkButton');
  nextButtonElement = document.getElementById('nextButton');
  inputElement = document.getElementById('suggestionInput');

  nextButtonElement.onclick = () => generateNewPhrase();
  checkButtonElement.onclick = () => checkPhrase();

  generateNewPhrase();
});

function generateNewPhrase() {
  if (loading) {
    return;
  }

  currentPhrase = phraseGeneratorService.generate()
    .trim()
    .replace(/\s+(?= )/g, '');

  checkButtonElement.classList.remove('hidden');
  checkButtonElement.classList.add('loading');
  nextButtonElement.classList.add('hidden');
  textToCheckElement.classList.add('hidden');
  resultElement.classList.add('hidden');
  inputElement.value = '';
  inputElement.focus();

  loading = true;
  translationService.translate(currentPhrase)
    .then((translation) => {
      loading = false;
      currentPhraseTranslation = translation;
      checkButtonElement.classList.remove('loading');
      textToTranslateElement.innerHTML = translation;
    }, (err) => {
      loading = false;
      console.warn(err);
      alert("Не могу получить перевод. Что-то пошло не так.")
      checkButtonElement.classList.remove('loading');
      checkButtonElement.classList.add('hidden');
      nextButtonElement.classList.remove('hidden');
    });
}

function checkPhrase() {
  if (loading) {
    return;
  }
  let suggestion = (inputElement.value || '')
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, ' ')
    .trim()
    .toLocaleLowerCase();

  let translation = currentPhraseTranslation
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, ' ')
    .trim()
    .toLocaleLowerCase();

  // Удаляем лишние символы, чтобы сравнить варианты.

  if (suggestion === translation) {
    resultElement.innerHTML = "Успех!";
  } else {
    let levDistance = stringService.levenshteinDistance(suggestion, translation);
    if (levDistance <= 1) {
      resultElement.innerHTML = "Опечатка";
    } else if (levDistance <= 3) {
      resultElement.innerHTML = "Много ошибок";
    } else {
      resultElement.innerHTML = "Полный провал!";
    }
  }

  textToCheckElement.classList.remove('hidden');
  resultElement.classList.remove('hidden');
  checkButtonElement.classList.add('hidden');
  nextButtonElement.classList.remove('hidden');
}
