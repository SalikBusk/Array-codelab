let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');
const removeExtrasInput = document.getElementById('removeExtraUdstyr');

myExtrasInput.addEventListener("change", addExtra);
removeExtrasInput.addEventListener("change", removeExtra);

function addExtra(e) {
    const selectedExtra = e.target.value;
    myExtras.push(selectedExtra);
    updateExtras();
    updateRemoveExtras();
}

function removeExtra(e) {
    const selectedExtra = e.target.value;
    const index = myExtras.indexOf(selectedExtra);
    if (index > -1) {
        myExtras.splice(index, 1);
    }
    updateExtras();
    updateRemoveExtras();
}

function updateExtras() {
    const extrasHTML = myExtras.map(extra => `<li>${extra}</li>`).join('');
    myExtrasListElement.innerHTML = extrasHTML;
}

function updateRemoveExtras() {
    const removeExtrasHTML = myExtras.map(extra => `<option value="${extra}">${extra}</option>`).join('');
    removeExtrasInput.innerHTML = `<option value="" disabled selected>vælg fra listen</option>` + removeExtrasHTML;
}
