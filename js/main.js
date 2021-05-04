import schema from "./schema.js";


window.onload = init;

//------------------------------------------------------------
function init () {
  const outputEn = document.querySelector('.output_en');
  const btnNewWord = document.querySelector('#btnNewWord');
  const btnCheckWord = document.querySelector('#btnCheckWord');
  const el = document.getElementById('input');


  let startText = schema[Math.floor(Math.random() * schema.length)]();
  outputEn.textContent = startText
  el.value = startText;
  el.classList.add('hidden');

  btnNewWord.addEventListener('click', () => {
    outputEn.classList.add('animate')
    let randomSchema = Math.floor(Math.random() * schema.length)
    let enText = schema[randomSchema]();
    outputEn.textContent = enText;
    el.value = enText;
    el.classList.add('hidden');
    outputEn.classList.remove('animate')
  })

//анимировать ключевыми кадрами затухание и появление

  btnCheckWord.addEventListener('click', () => {
    el.classList.remove('hidden')
  })

}

