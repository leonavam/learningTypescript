"use strict";
//Promesas sirven para ejecutar algo asincronamente
var promesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa Terminada");
        // resolve();
        reject();
    }, 1500);
});
promesa.then(function () {
    console.log("Ejecutar si termina bien");
}, function () {
    console.error("Ejecutar si algo sale mal!");
});
