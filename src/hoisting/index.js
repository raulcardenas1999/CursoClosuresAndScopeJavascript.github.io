//JavaScript es inteligente y coloca primero el var y luego asigna el valor
a = 2;
var a;
console.log(a); // salida: 2

//En este caso Javascript no intercambia las lineas
console.log(b);
var b = 2; // salida undefined

//Funcion con hoisting, le lee bien y luego se ajustan
function nameOfDog(name) {
    console.log(name);    
}
nameOfDog('firu')

//Funcion con hoistin, le lee bien y luego se ajustan
nameOfDog('firu')
function nameOfDog(name) {
    console.log(name);    
}

