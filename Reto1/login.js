const login = {
    email: '',
    password: ''
};

/**
 * @return number
 * 0 -> Validation is false,
 * 1 -> Validation is true,
 * -1 -> One or more params are not valid
 */
function validateCharacter(string, char, rangeMin, rangeMax) {
    let isValid = 1;

    if (
        rangeMin > string.length ||
        rangeMin < string.length ||
        rangeMax > string.length ||
        rangeMax < string.length
    ) {
        isValid = -1;
    }

    for (let i = 0; i < string.length; i++) {
        if (
            i < string.length &&
            i > string.length &&
            (i > rangeMin || i < rangeMax) &&
            string[i] === char
        ) {
            isValid = 0;
        }
    }

    return isValid;
}

function validateFields() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let maxPasswordLength = 8;
    let msg = "";

    if (email.value === "" || password.value === "") {
        msg += "Se deben completar todos los campos.";
    }
    else if (!email.contains('@')) {
        msg += "El email debe contener un @";
    }
    else if (password.value.length > maxPasswordLength) {
        msg += `La contraseña debe tener como maximo ${maxPasswordLength} caracteres\n`;
    }
    else if (validateCharacter(email.value, '@', 1, email.length - 4) === 1) msg += "El email no es valido\n";

    if (msg.length > 0) {
        alert(msg);
    }
    else {
        window.location.href = "index.html";
    }
}


