var numeros = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[1]);
// }
//
// numeros.push(5);
// console.log(numeros);
//
// console.log(getRandomInt(50));
//
// function getRandomInt(number) {
//     let multiplier = 50;
//     return Math.round(Math.random() * number);
//     // Tambien vale ceil para redondear hacia arriba
// }
//

var num = numeros.find((e) => e < 2);

var sublist = numeros.splice(numeros.length - 3, numeros.length - 1);

console.log(sublist);
console.log(numeros);


