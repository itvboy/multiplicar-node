const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${archivo.yellow} a sido creado.`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}


/*
let base = 8;
crearArchivo(base)
    .then(archivo => console.log(`El archivo ${archivo} a sido creado.`))
    .catch(e => console.log(e));
*/