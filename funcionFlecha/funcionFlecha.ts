

let miFuncion = function( a:any ) {
    return a;
}
let miFuncionF = (a:number) => a;

/**   */
let miFuncion2 = function( a:number, b:number ){
    return a+b;
}
let miFuncion2F = ( a:number, b:number ) => a+b;

let miFuncion3 = function( name:string ){
    name = name.toUpperCase();
    return name;
}
let miFuncion3F = ( name:string ) => {
    name = name.toUpperCase();
    return name;
}

//Ejemplo de uso funcion flecha!

let hulk = {
    name: "Hulk",
    smash(){
        setTimeout(() =>
            console.log(this.name + " smash!!"), 1500 );

    }
}

hulk.smash();