// requireds
const fs = require('fs');
// const fs = require('express'); importados
// const fs = require('./fs'); nuestros

let base = 2;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${ base } * ${ i } = ${ base * i }\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo /tablas/tabla-${base}.txt ha sido creado`);
});