// requireds
const fs = require('fs');
const colors = require('colors');
//const { resolve4 } = require('dns');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });

};

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        console.log('==============='.green);
        console.log(`Tabla de ${base}`.green);
        console.log('==============='.green);

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        console.log(data);

        /*                    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                                if (err)
                                    reject(err)
                                else
                                    resolve(`tabla-${base}.txt`);
                            });*/

    });
};

module.exports = {
    crearArchivo,
    listarTabla
}

// module.exports.crearArchivo es lo mismo que lo anterior