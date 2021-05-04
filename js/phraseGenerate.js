import schema from "./schema.js";

function phraseGenerate() {
    let randomSchema = Math.floor(Math.random() * schema.length)
    let enText = schema[randomSchema]();
    return enText;
}


export default phraseGenerate;