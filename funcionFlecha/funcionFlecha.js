"use strict";
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
/**   */
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
var miFuncion3 = function (name) {
    name = name.toUpperCase();
    return name;
};
var miFuncion3F = function (name) {
    name = name.toUpperCase();
    return name;
};
//Ejemplo de uso funcion flecha!
var hulk = {
    name: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () {
            return console.log(_this.name + " smash!!");
        }, 1500);
    }
};
hulk.smash();
