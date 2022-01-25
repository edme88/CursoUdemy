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

const getEmpleado = (id) => {
    const promesa = new Promise((resolve, reject) => {


        const empleado = empleados.find(e => e.id === id) ? .nombre

        if (empleado) {
            resolve(empleado);
        } else {
            reject(`Empleado con id ${id} no existe`);
        }
    });
    return promesa;
}

const id = 1;
getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));