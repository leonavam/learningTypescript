
//Así se crea una interface
interface Xmen{
    nombre:string,
    poder:string
}

function enviarMision( xmen:Xmen ) {
    console.log("Enviando a: " + xmen.nombre);
}

function enviarCuartel( xmen:Xmen ) {
    console.log("Regresa a cuartel: " + xmen.nombre);
}


let wolverine:Xmen = {
    nombre: "Wolverine",
    poder: "Regeneración"
};


enviarMision(wolverine);
enviarCuartel(wolverine)