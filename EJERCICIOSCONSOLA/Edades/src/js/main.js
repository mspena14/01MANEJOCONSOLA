/* Analizador de edad:
Crea un programa que solicite al usuario su edad y, en función de la edad ingresada, muestre un
mensaje personalizado utilizando los métodos de impresión adecuados. Por ejemplo, si el usuario
es menor de 18 años, muestra un mensaje indicando que es menor de edad. Si tiene entre 18 y 24
años, muestra un mensaje de bienvenida a la juventud. Si tiene 25 años o más, muestra un
mensaje genérico de saludo. */


let userAge = Number(prompt(`Give me you age:`))

if (userAge < 18) {
    console.error(`You can't continue you are under-age`)

} else if ( userAge >= 18 && userAge <= 24) {
    console.warn(`Welcome to the youth`)

} else if (userAge >= 25) {
    console.info(`You are getting old`)
}
