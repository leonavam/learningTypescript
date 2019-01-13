
//Promesas sirven para ejecutar algo asincronamente

let promesa = new Promise( function( resolve, reject ){

    setTimeout( () => {
        console.log("Promesa Terminada");

        // resolve();

        reject();

    }, 1500);

} );

promesa.then( function(){
    console.log("Ejecutar si termina bien");
}, 
    function(){
        console.error("Ejecutar si algo sale mal!");
        
    })