const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error';
    small.innerText = message
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username ne peut etre vide');
    } else {
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email ne peut etre vide');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email invalide')
    } else{
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password ne peut etre vide');
    }else{
        setSuccessFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Password2 ne peut etre vide');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Password2 ne correspond pas')
    } else{
        setSuccessFor(password2);
    }

}