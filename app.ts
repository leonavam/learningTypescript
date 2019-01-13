

let numero:number = 1234;
let bool:boolean = true;

let hoy:Date = new Date();

//console.log(hoy);

hoy = new Date('2020-01-04');
//console.log(hoy);


let texto = "Hola, "
let nombreNM:string = "Leo";
let apellido:string = "Navarrete";

//Plantillas de literales se usan con ``
let imprime = `Hola, 
${ nombreNM } ${ apellido }
(${ numero })`;

let imprime2:string = `${ 1+2 }`

console.log(imprime2);


