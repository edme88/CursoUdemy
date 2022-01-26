const fs = require('fs');
console.clear();
const base = 5;
let salida = '';

console.log("============================");
console.log(`TABLA DE MULTIPLICAR DEL ${base}`);
console.log("============================");
for (let i = 1; i <= 10; i++) {
    salida += `${base} x ${i} = ${5*i}\n`;
}

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`tabla-${base}.txt creada`);
})

console.log(salida);