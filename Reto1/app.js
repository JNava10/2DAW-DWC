// TODO: Unico alert con todos los mensajes. Unicamente se muestra un mensaje.
function validPersonData() {
    let name = document.getElementById("name");
    const surnames = document.getElementById("surnames");
    const birthDate = document.getElementById("birthDate");
    const dni = document.getElementById("dni");
    const surnameList = surnames.value.split(' ');
    const rangeName = [3, 30];
    const rangeSurname = [2, 30];
    const dateValidationCode = getDateErrorCode(birthDate.value, "dd/mm/aaaa");
    const dniValidationCode = getDniErrorCode(dni.value);
    const elements = document.getElementsByTagName("input");
    let errorMsg;

    let emptyErrorMsg;
    for (let i = 0; i < elements.length; i++) {
        if (
            elements[i].value === undefined ||
            elements[i].value === ''
        ) {
            emptyErrorMsg += `Te falta el campo ${elements[i].placeholder} por rellenar\n`;
        }
    }

    if (emptyErrorMsg !== undefined) {
        alert(emptyErrorMsg);
    } else {
        if (!fieldLengthIsValid(name.value, 3, 30)) {
            errorMsg = `El nombre es demasiado pequeño o demasiado grande. (${rangeName[0]} - ${rangeName[1]})\n`;
        } else if (
            surnameList.length < 2 ||
            !fieldLengthIsValid(surnameList[0], 2, 30) ||
            !fieldLengthIsValid(surnameList[1], 2, 30)
        ) {
            errorMsg = `Se han introducido los apellidos incorrectamente.\n`;
        } else if (dateValidationCode !== 0) {
            errorMsg = getDateErrorMsg(dateValidationCode);
        } else if (dniValidationCode !== 0) {
            errorMsg = getDniErrorMsg(dniValidationCode);
        }

        alert(errorMsg);
    }
}

function fieldLengthIsValid(fieldValue, min, max) {
    let isValid = false;
    if (fieldValue.length >= min || fieldValue <= max) {
        isValid = true;
    }

    return isValid;
}

function getDateErrorCode(fieldValue, dateFormat) {
    let validYearLength = 4;
    let validMonthLength = 2;
    let validDayLength = 2;
    let validDateFormats = ["dd/mm/yyyy", "dd/mm/aaaa"];
    let dateSplitted = fieldValue.split('/');
    let errorCode;

    if (fieldValue.length < dateFormat.length) {
        errorCode = 1;
    } else if (fieldValue.length > dateFormat.length) {
        errorCode = 2;
    } else if (!fieldValue.includes('/')) {
        errorCode = 3;
    } else if (!validDateFormats.includes(dateFormat)) {
        errorCode = 4;
    } else if (dateSplitted[0].length !== validDayLength) {
        errorCode = 5;
    } else if (dateSplitted[1].length !== validMonthLength) {
        errorCode = 6;
    } else if (dateSplitted[2].length !== validYearLength) {
        errorCode = 7;
    } else {
        errorCode = -1;
    }

    return errorCode;
}

function getDniErrorCode(dniValue) {
    let maxDniLength = 9;
    let dniNumber;
    let dniLetter = dniValue[dniValue.length--];
    let letterList = "TRWAGMYFPDXBNJZSQVHLCKE";
    let errorCode;

    if (dniValue.value === '') {
        dniNumber = dniValue.splice(0, maxDniLength--);
    }

    if (dniValue.length > maxDniLength) {
        errorCode = 2;
    } else if (dniValue.length < maxDniLength) {
        errorCode = 3;
    } else if (dniValue.length < 1) {
        errorCode = 4;
    } else if (dniLetter !== letterList[dniNumber % 23]) {
        errorCode = 5;
    } else {
        errorCode = -1;
    }

    return errorCode;
}

function getDateErrorMsg(dateValidationCode) {
    let errorMsg;
    switch (dateValidationCode) {
        case 1:
            errorMsg = `La fecha introducida es demasiado corta.\n`;
            break;
        case 2:
            errorMsg = `La fecha introducida es demasiado larga.\n`;
            break;
        case 3:
            errorMsg = `La fecha introducida no contiene caracteres validos.\n`;
            break;
        case 4:
            errorMsg = `(Dev error) Formato introducido incorrecto.\n`;
            break;
        case 5:
            errorMsg = `El dia de la fecha es demasiado largo o demasiado corto.\n`;
            break;
        case 6:
            errorMsg = `El mes de la fecha es demasiado largo o demasiado corto..\n`;
            break;
        case 7:
            errorMsg = `El año de la fecha es demasiado largo o demasiado corto.\n`;
            break;
        default:
            errorMsg = "Error desconocido con la fecha.";
            break;
    }

    return errorMsg;
}

function getDniErrorMsg(dniValidationCode) {
    let errorMsg;
    switch (dniValidationCode) {
        case 1:
            errorMsg = `El campo del DNI está vacio.\n`;
            break;
        case 2:
            errorMsg = `El DNI introducido es demasiado largo. (9 caracteres como maximo)\n`;
            break;
        case 3:
            errorMsg = `La fecha introducida no contiene caracteres validos.\n`;
            break;
        default:
            errorMsg = "Error desconocido.";
            break;
    }

    return errorMsg;
}

function clean() {
    const elements = document.getElementsByTagName("input");

    for (let i = 0; i < elements.length; i++) {
        elements[i].value = '';
    }
}