const fs = require('fs');
const argv = require('yargs').argv;
const { crearArchivo } = require('./helpers/multiplicarAsync');


console.clear();

//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');

console.log(process.argv)
console.log(argv)

console.log('base: yargs', argv.base)

//crearArchivo(base)
//    .then(nombreArchivo => console.log(nombreArchivo, ' creado'))
//    .catch(err => console.log(err));