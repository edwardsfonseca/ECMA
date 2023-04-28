// inicio en 2015 en la nueva actulizacion de ECMA - ES6

var lastName = "David"; // declaramos la variable lastName asiganamos a david

lastName = "Oscar" // reaccinamos el valor 

console.log(lastName); // vemos en consola el valor

/// es posible por utilizar VAR global

// con LET tambien podemos reasignar valores alcance de bloque
let fruit = "Apple"; // declaramos y asignamos

fruit = "Kiwi"

console.log(fruit)

// con const no se puede reasignar un valor con const alcance de bloque
/* 
const animal = "Dog";
animal = "Cat"
console.log(animal) */

const fruist = () =>{
    if(true){
        var fruit1 = "Apple"
        let fruit2 = "Kiwi"
        const fruit3 = "Banana"
    }
    console.log(fruit1) // Existe de forma global - Function Scope dentro de la funcion podemos acceder a la variable
    console.log(frut2) //  block scope - no podemos acceder por que no esta global , se accede dentro de bloque declara en este caso el if igual const!
    console.log(fruit3) // block scope - no podemos acceder  porque no es global 
}

fruist();