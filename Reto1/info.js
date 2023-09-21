const name = document.getElementById("name");
const surnames = document.getElementById("surnames");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthDate");
const dni = document.getElementById("dni");
const surnameList = surnames.split(' ');

function fieldLengthIsValid(fieldValue, min, max) {
    let isValid = false;
    if (fieldValue.length > min && fieldValue < max) {
        isValid = true;
    }
}
2
function fieldDateIsValid(fieldValue, dateFormat) {
    let isValid = true;
    let validYearLength = 4;
    let validMonthLength = 2;
    let validDayLength = 2;
    let dateFormats = ["dd/mm/yyyy", "dd/mm/aaaa"];
    let dateSplitted = fieldValue.split('/');

    if (
        fieldValue.length !== dateFormat.length ||
        !fieldValue.contains('/') ||
        !dateFormats.includes(dateFormat) ||
        dateSplitted[0].length !== validDayLength ||
        dateSplitted[1].length !== validMonthLength ||
        dateSplitted[2].length !== validYearLength
    ) {
        isValid = false;
    }

    return isValid;
}

function dniFieldIsValid(dniValue) {
    let maxDniLength = 9;
    let dniNumber = dniValue.splice(0, maxDniLength - 1);
    let dniLetter = dniValue[dniValue.length];
    let letterList = "TRWAGMYFPDXBNJZSQVHLCKE";
    let isValid = true;
    if (
        dniValue.length > maxDniLength ||
        dniValue.length < 1 ||
        dniLetter !== letterList[dniNumber % 23]
    ) {
        isValid = true;
    }
    return isValid;
}

function validPersonData() {
    if (
        fieldLengthIsValid(name.value, 3, 30) &&
        fieldLengthIsValid(surnameList[0], 2, 30) &&
        fieldLengthIsValid(surnameList[1], 2, 30) &&
        fieldDateIsValid(birthDate.value, 'dd/mm/yyyy') &&
        dniFieldIsValid(dni.value)
    ) {
        return {
            name: name.value,
            password: surnames.value,
            email: email.value,
            dni: birthDate.value
        };
    } else {

    }
}
