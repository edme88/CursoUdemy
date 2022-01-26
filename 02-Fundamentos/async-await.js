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

const getInfoUsuario = async() => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado> ${empleado} es ${salario}`;
    } catch (error) {
        throw error; //llama al reject de la función async
    }

}

const id = 1;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));