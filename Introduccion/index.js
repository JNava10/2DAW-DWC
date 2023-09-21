var nombreUno = 'Jose';
var nombreDos = 'Maria';
var nombreTres = 'Sonia';

var segundoApellidoDos = 'Hernandez';
var primerApellidoDos = 'Ruiz';
var primerApellidoTres = 'Paton';

var segundoApellidoUno = 'Morales';
var segundoApellidoDos = 'Garcia';
var segundoApellidoTres = 'Gonzalez';

console.log(`Hola ${nombreUno} ${segundoApellidoDos} ${segundoApellidoUno}, bienvenido/a.`);
console.log(`Hola ${nombreDos} ${usuarioUnoDosApellido} ${segundoApellidoDos}, bienvenido/a.`);
console.log(`Hola ${nombreTres} ${primerApellidoTres} ${segundoApellidoTres}, bienvenido/a.`);

var edadDos = 18;
var edadDos = 14;
var edadTres = 20;

var mayorEdadUno = 18;
var mayorEdadDos = 14;
var mayorEdadTres = 20;

function comprobarEdad(edad) {
    let mayorEdad = false;
    if (edad > 18) {
        mayorEdad = true;
    }

    return mayorEdad;
}

function sumarEdades(edades) {
    totalSuma = 0
    
    for (i in edades) {
        totalSuma += edades;
    }
    
    return totalSuma;
}

function finalizar(nombre, apellidos, edad) {
    estado = 'mayor'
    if (edad < 18) estado = 'menor';
    console.log(`${nombre} ${apellidos} es ${estado} de edad (${edad})`);
}

do {
    let i = 0
    console.log(i)
    i++
} while (i < 10);

let i = 0;
while (i < 10) {
    console.log(i);
    i++
}

switch (edad) {
    case 18: 
        console.log('Tienes 18 años.');
        break;

    case 20: 
        console.log('Tienes 20 años.');
        break;

    default: 
        console.log(`Tienes una edad desconocida (${edad}).`);
        break;
}