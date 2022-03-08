const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 8, listar = false, hasta = 10) => {
    let salida = '';
    let consola = '';

    try {
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${ 'x'.green } ${i} ${ '='.green } ${base*i}\n`;
        }

        if (listar) {
            console.log("============================".rainbow);
            console.log(`TABLA DE MULTIPLICAR DEL ${base}`.rainbow);
            console.log("============================".rainbow);
            console.log(consola);
        }

        fs.writeFileSync(`salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

}

module.exports = { crearArchivo }