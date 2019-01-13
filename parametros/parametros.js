"use strict";
//los paramtros opcionales se declaran con name?
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var msj;
    if (momento) {
        msj = quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        msj = quien + " activ\u00F3 la " + objeto;
    }
    console.log(msj);
}
activar('Gordon');
activar("Gordon2", "batiseñal", "noche");
