

let avenger = {
    id: "Steve",
    clave: "Capitan America",
    poder: "Droga"
}

//Destructuración de objetos
let { id, clave, poder } = avenger;

console.log(id, clave, poder);


//Destructuración de arreglos

let avengers:string[] = [ "Thor", "Steve", "Tony"];
let [ martillo, capi, ironman ] = avengers;

console.log(martillo, capi, ironman);
