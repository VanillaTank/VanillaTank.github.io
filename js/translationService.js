class TranslationService {

  /**
   * Translate from EN to RU
   * @param {string} str
   * @return {Promise<string>}
   */
  translate(str) {
    // TODO request to 3rd party translation API
    return new Promise(resolve => resolve(str));
  }

}

export const translationService = new TranslationService();
