"use strict";
var avenger = {
    id: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
//Destructuración de objetos
var id = avenger.id, clave = avenger.clave, poder = avenger.poder;
console.log(id, clave, poder);
//Destructuración de arreglos
var avengers = ["Thor", "Steve", "Tony"];
var martillo = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(martillo, capi, ironman);
