let participantes = ["Maria", "Sonia", "Clara", "Maria Jose", "Eva", "Pilar"];

//1
participantes[1] = "Maria";
participantes[2] = "Sonia";

//2
let eliminados = participantes.splice(participantes.length - 4, participantes.length - 1);
let eliminadosAnteriores = ["Bea", "Miriam"];
let listaEliminados = eliminados.concat(eliminadosAnteriores);

console.log(listaEliminados);

// 3
var premios = [150, 100, 50];

// 4
for (let i = 0; i < premios.length; i++) {
    console.log(`El/la participante ${participantes[i]} ha acabado en ${i}ª posicion ha ganado ${premios[i]}.`);
}

// 5
var max = 100;
var aleatorios = [];
for (let i = 0; aleatorios.length < max; i++) {
    var numAleatorio = Math.round(Math.random() * max);

    if (!aleatorios.includes(numAleatorio)) {
        aleatorios[i] = numAleatorio;
    }
}

// aleatorios.sort()

for (let i = 0; i < aleatorios.length; i++) {
    for (let j = i + 1; j < aleatorios.length; j++) {
        if (aleatorios[j] < aleatorios[i]) {
            const aux = aleatorios[i];
            aleatorios[i] = aleatorios[j];
            aleatorios[j] = aux;
        }
    }
}

console.log(aleatorios);