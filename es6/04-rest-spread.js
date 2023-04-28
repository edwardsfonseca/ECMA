// arrays destructuring
let fruist = ["Apple", "Banana"];
let [a, b] = fruist
console.log(a, fruist[1])


// object destructuring

let user = { username: "Oscar", age: 34 }
let { username, age } = user
console.log(username, age)


/// spread operator s

/* Una diferencia importante de ambos parámetros, como dice la documentación, es que el spread syntax (…), lo que hace es desestructurar elementos de un objeto o array.
.
Sin embargo lo que hace la rest syntax (… pero usada como parámetro en una función), es “empaquetar” o “condensar” los valores enviados como un elemento, sea array u objeto.
.
Spread syntax: desestructura -> deconstruye
Rest syntax: empaqueta -> construye  */

let person = { name: " oscar", age: 28 };
let country = "MX";
let data = { ...person, country }
console.log(data)
// paramentros rest
function sum(num, ...values) {
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}
sum(1, 2, 3, 4, 5)
export function solution(json1 = { name: "Mr. Michi", food: "Pescado" }, json2 = { age: 12, color: "Blanco" }) {
    // Tu código aquí 👈
      return {...json1,...json2}
      
    }
    