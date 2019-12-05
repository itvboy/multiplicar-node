// const math = require("./math.js")
// console.log("El resultado de la suma de 2 y 5 es "+math.add(2,5));

// const os = require('os');
// console.log(os.platform());
// console.log(os.release());
// console.log(os.freemem()/(1024*1024));

const fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');
});

console.log('Ultima linea de codigo');