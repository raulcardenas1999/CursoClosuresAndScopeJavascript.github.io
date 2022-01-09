const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruits3 = 'kiwi';
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}
fruits();
//////////////// En este caso solo muestra la variable var, let y const como esta dentro del bloque solo se puede acceder dentro de él.
const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2); //Forma correcta
        console.log(fruits3); //Forma correcta
    }
    console.log(fruits1);
    //console.log(fruits2); //Forma incorrecta
    //console.log(fruits3); //Forma incorrecta
}
fruits();
////////////////// pasa que dentro del bloque se sobreescribe la variable local, mas no la global
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);
////////////////// Con var si se sobreescribe tanto la global como la local
var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);
//////////////// Con var solo me muestra el ultimo numero que ha salido, se muestra 10 veces el 10
const anotherFunction = () => {
    for (var i = 0;i < 10; i++){
        setTimeout(() => {
            console.log(i);
        },1000)
    }
}
anotherFunction();
//////////////// En cambio con let si se muestra cada vez que hace una iteración
const anotherFunction = () => {
    for (let i = 0;i < 10; i++){
        setTimeout(() => {
            console.log(i);
        },1000)
    }
}
anotherFunction();