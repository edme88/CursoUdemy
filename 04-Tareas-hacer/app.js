require('colors');
const {
    inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
console.clear();

const main = async() => {
    console.log('Hola Mundo!!!');
    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //crear opción
                const desc = await leerInput('Descripción: ');
                console.log(desc);
                break;
            case '2':
                console.log(tareas._listado);
                break;
            default:
                break;
        }
        /*const tareas = new Tareas();
        console.log(tareas);
        const tarea = new Tarea('Comprar comida');
        console.log(tarea);

        tareas._listado[tarea.id] = tarea;
        console.log(tareas);*/
        await pausa();
    } while (opt !== '0');
}

main();