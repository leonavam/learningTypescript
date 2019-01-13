
//los paramtros opcionales se declaran con name?

function activar( quien:string, objeto:string = "batiseñal", momento?:string ) {
    let msj:string;

    if (momento) {
        msj = `${ quien } activó la ${ objeto } en la ${ momento }`;
    } else{
        msj = `${ quien } activó la ${ objeto }`;
    }


    console.log(msj);
    
}


activar('Gordon');
activar("Gordon2", "batiseñal", "noche");
