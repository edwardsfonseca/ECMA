let hello = "Hello";
let world = "World";

// anteriormente antes del ES6 se hacia asi

let epicPharse = hello + " " + world +"!";
console.log(epicPharse)

// ahora con template literals
//comillas francesas `` , dentro de las comillas francesas para llamar a la variable usamos el llamado simbolo de pregunta mas handlebar mas variable ${variable}
let epicPharse2 = `${hello} ${world}!`;
console.log(epicPharse2)

// multi-lines strings se trabaja con multiple lineas asignadas dentro de un string , para hacer salto segun sea el caso

let lorem= "esto es un string \n " + " esto es otra linea" // no es amigable dependemos de estar concatenando los string 

// en ES6 con template literales sacamos los bloques con un enter

let lorem2 = `Esta es una frase epica
esta es la continuacion de la frase epica`
console.log(lorem)
console.log(lorem2)