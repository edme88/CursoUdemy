const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicarAsync');


console.clear();

const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');


crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, ' creado'))
    .catch(err => console.log(err));