import schema from "./schema.js";
import phraseGenerate from "./phraseGenerate.js"

window.onload = init;

//------------------------------------------------------------
function init () {
  const outputEn = document.querySelector('.output_en');
  const btnNewWord = document.querySelector('#btnNewWord');
  const btnCheckWord = document.querySelector('#btnCheckWord');
  const el = document.getElementById('input');

  createNewText ();
  btnNewWord.addEventListener('click', createNewText);
  btnCheckWord.addEventListener('click', () => {
    el.classList.remove('hidden')
  })

  function createNewText () {
    let enText = phraseGenerate();
    outputEn.textContent = enText;
    el.value = enText;
    el.classList.add('hidden');
  }
}


