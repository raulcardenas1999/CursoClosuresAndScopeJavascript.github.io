const buildCount = (i) => { //Función para aumentar un numero cada vez que se repita la función, closure = alcance
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
}
const myCount = buildCount(1); // Prueba1
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10); //Prueba2
myOtherCount();
myOtherCount();
myOtherCount();