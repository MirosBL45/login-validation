const forma = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

forma.addEventListener('click', (ev)=> {
    
    validirajFormu();

    if (isFormaDobra() == true) {
        forma.submit();
    } else {
        ev.preventDefault();
    }
})

function isFormaDobra() {
    const ulazniPodaci = forma.querySelectorAll('.input-group');
    let rezultat = true;
    ulazniPodaci.forEach((imalac) => {
        if (imalac.classList.contains('error')) {
            rezultat = false;
        }
    });
    
    return rezultat;
}

function validirajFormu() {
    //username
    if (usernameInput.value.trim() == '') {
        dajGresku(usernameInput, 'Name can not be empty')
    } else if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15) {
        dajGresku(usernameInput, 'Name must be min 5 and max 15 characters');
    } else {
        dajIspravno(usernameInput);
    }
    //email
    if (emailInput.value.trim() == '') {
        dajGresku(emailInput, 'Provide email address');
    } else if (isEmailDobra(emailInput.value)) {
        dajIspravno(emailInput);
    } else {
        dajGresku(emailInput, 'Provide valid email address');
    }
    //password
    if (passwordInput.value.trim() == '') {
        dajGresku(passwordInput, 'Password can not be empty');
    } else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20) {
        dajGresku(passwordInput, 'Password min 6 and max 20 characters');
    } else {
        dajIspravno(passwordInput);
    }
    //confirm password
    if (confirmPasswordInput.value.trim() == '') {
        dajGresku(confirmPasswordInput, 'Password can not be empty');
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        dajGresku(confirmPasswordInput, 'Password does not match');
    } else {
        dajIspravno(confirmPasswordInput);
    }
}


function dajGresku(element, poruka) {
    const iznadElem = element.parentElement;
    if (iznadElem.classList.contains('success')) {
        iznadElem.classList.remove('success');
    }
    iznadElem.classList.add('error');
    const paragraf = iznadElem.querySelector('p');
    paragraf.textContent = poruka;
}


function dajIspravno(element) {
    const iznadElem = element.parentElement;
    if (iznadElem.classList.contains('error')) {
        iznadElem.classList.remove('error');
    }
    iznadElem.classList.add('success');
}


function isEmailDobra(email) {
    const registracija = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return registracija.test(email);
}