const outputEn = document.querySelector('.output_en');
const btnNewWord = document.querySelector('#btnNewWord');
const btnCheckWord = document.querySelector('#btnCheckWord');
const el = document.getElementById('input');

const getRandomWord = (arr, min = 0, max = 0) => {
  if (max === 0) { return Math.floor(Math.random() * arr.length) }
  else {
    var offset = min;
    var range = (max - min) + 1;
    var randomNumber = Math.floor(Math.random() * range) + offset;
    return randomNumber;
  }
}


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
