//Videos 10 y 11
console.log('Comienzo del programa'); //1

setTimeout(() => {
    console.log('Primer timeOut'); //5
}, 3000);

setTimeout(() => {
    console.log('Segundo timeOut'); //3
}, 0);

setTimeout(() => {
    console.log('Tercero timeOut'); //4
}, 0);

console.log('Fin del programa'); //2