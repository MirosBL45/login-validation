const parag = document.querySelector('#skupljac');

const parametri = new URLSearchParams(window.location.search);

parametri.forEach((vrednost, kljuc) => {
    parag.append(`${kljuc} = ${vrednost}`);
    parag.append(document.createElement('br'));
})
