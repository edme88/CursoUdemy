const fs = require('fs');

const crearArchivo = (base = 8) => {
    let salida = '';

    return new Promise((resolve, reject) => {
        console.log("============================");
        console.log(`TABLA DE MULTIPLICAR DEL ${base}`);
        console.log("============================");
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        (salida) ?
        resolve(`tabla-${base}.txt`): reject(`Base mal ingresada`)
    });
}

module.exports = { crearArchivo }