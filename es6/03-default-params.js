//metodo 1
function newUser(name, age, country) { // pasamos argumentos o paramentros
    var name = name || "Oscar" // valores por defecto name tiene valor por defecto oscar referencia base o default que podria tener name es oscar
    var age = age || 32 // Pasa lo mismo age 
    var country = country || "MX" //pasa lo mismo country
    console.log(name,age,country) // mostramos nuestro valores 
}
newUser(); // llamamos a la funcion sin valores act , se asigna por defecto arriba
newUser("David",32,"COL"); // aca agregamos un nuevo usuario con nuevos valores que reemplzaran los valores por defectos
// metodo 2 mas amigable 
function newAdm (name = "Oscar",age = 23,country ="CL"){ // es mas directo , sin validar elementos , facil de entender , asigna valore segun sea el caso
    console.log(name,age,country)
}
newAdm();
newAdm("Maria",32,"PE");