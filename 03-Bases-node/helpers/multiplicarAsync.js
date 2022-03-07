const fs = require('fs');

const crearArchivo = async(base = 8, listar = false) => {
    let salida = '';

    try {
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        if (listar) {
            console.log("============================");
            console.log(`TABLA DE MULTIPLICAR DEL ${base}`);
            console.log("============================");
            console.log(salida);
        }

        fs.writeFileSync(`newFiles/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

}

module.exports = { crearArchivo }