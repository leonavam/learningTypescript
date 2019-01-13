
function consola( recibe:Function ) {
    console.log( recibe );
    
}

@consola
class Villano {
    constructor( public nombre:string ) {
        
    }
}