// requireds
const { crearArchivo } = require('./multiplicar/multiplicar');
// const fs = require('express'); importados
// const fs = require('./fs'); nuestros

//let base = 7;

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

//console.log(base);


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));



// console.log(module)
// console.log(process)
// console.log(process.argv)
// npm install express
// node apps --base=5 a b c d --> se reciben en argv