import {askWords} from './parts/askWords.js';
import {pronouns} from './parts/pronouns.js';
import {verbs} from './parts/verbs.js';

class PhraseGeneratorService {

  #schema = [
    // вопрос будущее
    () => `${askWords[0]} ${this.#randomElement(pronouns)} ${this.#randomElement(verbs).v1}?`,

    // вопрос настоящее
    () => `${askWords[1]} ${this.#randomElement(pronouns, 0, 3)} ${this.#randomElement(verbs).v1}?`,

    // вопрос настоящее он-она
    () => `${askWords[2]} ${this.#randomElement(pronouns, 4, 5)} ${this.#randomElement(verbs).v1}?`,

    // вопрос прошедшее
    () => `${askWords[3]} ${this.#randomElement(pronouns)} ${this.#randomElement(verbs).v1}?`,

    // утверждение будущее
    () => `${this.#randomElement(pronouns)} will ${this.#randomElement(verbs).v1}.`,

    // утверждение настоящее
    () => `${this.#randomElement(pronouns, 0, 3)} ${this.#randomElement(verbs).v1}.`,

    // утверждение настоящее он-она
    () => {
      let tryVerb = this.#randomElement(verbs)
      if (tryVerb.v3 !== undefined) {
        return `${this.#randomElement(pronouns, 4, 5)} ${tryVerb.v3}`;
      } else {
        return `${this.#randomElement(pronouns, 4, 5)} ${tryVerb.v1}s.`;
      }
    },

    // утверждение прошедшее
    () => `${this.#randomElement(pronouns)} ${this.#randomElement(verbs).v2 || this.#randomElement(verbs).v1 + 'ed'}.`,

    // отрицание будущее
    () => `${this.#randomElement(pronouns)} will not ${this.#randomElement(verbs).v1}.`,

    // отрицание настоящее
    () => `${this.#randomElement(pronouns, 0, 3)} don't ${this.#randomElement(verbs).v1}.`,

    // отрицание настоящее он-она
    () => `${this.#randomElement(pronouns, 4, 5)} doesn't ${this.#randomElement(verbs).v1}.`,

    // отрицание прошедшее
    () => `${this.#randomElement(pronouns)} did not ${this.#randomElement(verbs).v1}.`,
  ]

  /**
   * Generate random EN phrase
   * @return {string}
   */
  generate() {
    let randomSchema = this.#randomElement(this.#schema);
    let phrase = randomSchema();
    phrase = phrase.charAt(0).toUpperCase() + phrase.slice(1) // capitalize
    return phrase.trim();
  }

  /**
   * Get random array element
   * @param {Array<any>} array
   * @param {number} min min index
   * @param {number} max max index
   * @return {any}
   */
  #randomElement(array, min = 0, max = array.length - 1) {
    return array[Math.floor(Math.random() * ((max - min) + 1) + min)];
  }

}

export const phraseGeneratorService = new PhraseGeneratorService();
