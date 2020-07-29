// requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');



/*
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Graba en archivo la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
*/

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        //        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            //        .then(archivo => console.log(`Tabla: ${archivo}`))
            .catch(e => console.log(e));

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo =>
                console.log(`Archivo creado: ${archivo.green}`))
            // EL COLOR FUNCIONA TAMBIEN CON ESTAS DOS FORMAS
            //                console.log('Archivo creado:', `${archivo}`.green))
            // .then(archivo => console.log('Archivo creado: ', colors.green(archivo)))

        .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

/*
console.log('Base ', argv.base);
console.log('Limite ', argv.limite);
*/