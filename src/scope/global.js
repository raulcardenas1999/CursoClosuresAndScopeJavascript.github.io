var hello = 'Hello'; //variable global
var hello = 'Hello + '; //Si podemos sobreescribir esta variable
let world = 'Hello World'; //variable global
//let world = 'Hello World +'; //No podemos sobreescribir esta variable
const helloWorld = 'Hello World!'; //variable global
//const helloWorld = 'Hello World! +'; //No podemos sobreescribir esta variable
// console.log(hello);

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
//////////////// mala practica
anotherFunction();

const helloWorld = () => {
    globalVar = 'im global'; // Podemos convertir una variable local a global XXX mala practica
}
helloWorld();
console.log(globalVar);
/////////////////// Mala practica doble asignación de variable.
const anotherFunction = () => {
    var locarVar = globalVar = 'Im Global';
}
anotherFunction()
console.log(globalVar);