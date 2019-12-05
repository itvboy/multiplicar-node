let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

/*
let getEmpleado = (id, callback) => {
    let empleado = empleados.find(empleado => empleado.id === id);
    if (!empleado) {
        callback(`No se encontro el empleado id:${id}`);
    } else {
        callback(null, empleado);
    }
};
*/

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salario = salarios.find(salario => salario.id === empleado.id);

        if (!salario) {
            reject(`El empleado ${ empleado.nombre } no tiene salario.`);
        } else {
            resolve({ id: empleado.id, nombre: empleado.nombre, salario: salario.salario });
        }
    });
}

/*
getEmpleado(1, (err, empleado) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(empleado);
});
*/
/*
let getSalario = (empleado, callback) => {

    let salario = salarios.find(salario => salario.id === empleado.id);

    if (!salario) {
        callback(`El empleado ${ empleado.nombre } no tiene salario.`);
    } else {
        callback(null, { nombre: empleado.nombre, salario: salario.salario });
    }
}

getSalario(empleados[2], (err, salario) => {
    if (err) {
        console.log(err);
    } else {
        console.log(salario);
    }
});
*/
/*
getEmpleado(1).then(empleado => {
    getSalario(empleado).then(resp => {
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }`);
    }, err => console.log(err));
}, err => console.log(err));
*/

getEmpleado(12).then(empleado => {
        return getSalario(empleado);
    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    });