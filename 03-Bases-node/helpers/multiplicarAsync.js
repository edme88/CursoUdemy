const fs = require('fs');

const crearArchivo = async(base = 8) => {
    let salida = '';

    try {
        console.log("============================");
        console.log(`TABLA DE MULTIPLICAR DEL ${base}`);
        console.log("============================");
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        fs.writeFileSync(`newFiles/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

}

module.exports = { crearArchivo }