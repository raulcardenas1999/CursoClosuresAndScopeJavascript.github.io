const helloWorld = () => {
    const hello = 'hello World';
    console.log(hello); // Variable local
}
helloWorld();
// console.log(hello); //No podemos acceder a hello

//////////////////

var scope = 'i am global';
const functionScope = () => {
    var scope = "Ahora soy una variable local"; // es como si se creara otra variable pero no sobreescribe la global
    const func = () => {
        return scope
    }
    console.log(func());
}
functionScope();
console.log(scope);