require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
console.clear();

const main = async() => {
    console.log('Hola Mundo!!!');
    let opt = '';

    do {
        //opt = await inquirerMenu();
        //console.log({ opt });
        const tareas = new Tareas();
        console.log(tareas);
        const tarea = new Tarea('Comprar comida');
        console.log(tarea);

        tareas._listado[tarea.id] = tarea;
        console.log(tareas);
        await pausa();
    } while (opt !== '0');
}

main();