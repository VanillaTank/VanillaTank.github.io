function createNewData () {
    const createdData = document.querySelector('.createdData');
    const v1 = document.querySelector('#v1').value;
    const v2 = document.querySelector('#v2').value;
    const v3 = document.querySelector('#v3').value;
    let verbsString = `v1 : '${v1}', v2 : '${v2}'`
    if(v3 != "") {
        verbsString += `, v3 : '${v3}'`
    }
    if(v1 == "" || v2 == "") {
        alert('Пропущено v1 или v2')
        return
    }
    createdData.innerHTML +=
        `<input type="text" readonly='readonly' value="{${verbsString}}," class="input-text-create"/>`
}
export default createNewData;