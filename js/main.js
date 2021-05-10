import phraseGenerate from "./phraseGenerate.js"
import allEngSchema from "./all-eng-schema.js";

window.onload = init;

//------------------------------------------------------------
function init () {
  const outputEn = document.querySelector('.output_en');
  const btnNewWord = document.querySelector('#btnNewWord');
  const btnCheckWord = document.querySelector('#btnCheckWord');
  const el = document.getElementById('input');

  const outAllWords = document.querySelector('.out_allWords');
  const btnAllWords = document.querySelector('.btnAllWords');

  createNewText ();
  btnNewWord.addEventListener('click', createNewText);
  btnCheckWord.addEventListener('click', () => {
    el.classList.remove('hidden')
  })
  btnAllWords.addEventListener('click', creatAllPhrases)

  function createNewText () {
    let enText = phraseGenerate();
    outputEn.textContent = enText;
    el.value = enText;
    el.classList.add('hidden');
  }
  function creatAllPhrases () {
    for(let i = 0; i < allEngSchema.length; i++) {
      allEngSchema[i]().forEach(item => {
        let enPhrase = item;
        let valuePhrase = `&quot; en &quot; : &quot;${enPhrase}&quot;`;
        outAllWords.innerHTML += `
        { <input type="text" readonly='readonly' value="${valuePhrase}" class="input-text" />,
        "ru" : "${enPhrase}"
        }</br>
        `
      })
    }
  }

}


