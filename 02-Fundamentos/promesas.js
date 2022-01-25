//Video 23
const empleados = [{
    id: 1,
    nombre: 'Agustinita'
}, {
    id: 2,
    nombre: 'Andres'
}, {
    id: 3,
    nombre: 'Gatricio'
}];

const salarios = [{
    id: 1,
    salario: '1000'
}, {
    id: 2,
    salario: '1500'
}];

/*const getEmpleado = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find( e => e.id === id )?.nombre

        if (empleado) {
            resolve(empleado);
        } else {
            reject(`Empleado con id ${id} no existe`);
        }
    });
    return promesa;
}*/

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id) ? .nombre;

        (empleado) ?
        resolve(empleado): reject(`Empleado con id ${id} no existe`)
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id) ? .salario;

        (salario) ?
        resolve(salario): reject(`Empleado con id ${id} no tiene asignado salario`)
    });
}

const id = 1;
/*getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));*/

getEmpleado(id)
    .then(empleado => {

        getSalario(id)
            .then(salario => {
                console.log('El empleado: ', empleado, ' tiene un salario de: ', salario)
            })
            .catch(err => console.log(err))

    })
    .catch(err => console.log(err));