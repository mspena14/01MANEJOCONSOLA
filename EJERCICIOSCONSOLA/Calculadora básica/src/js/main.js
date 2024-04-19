/* 1. Calculadora básica:
Crea una calculadora que permita al usuario ingresar dos números y realizar las operaciones
básicas (suma, resta, multiplicación y división). Imprime el resultado de cada operación en la
consola utilizando los métodos de impresión adecuados (info, error, warn, debug, table, log) según
corresponda. */

let num1 = Number(prompt("Enter the first number"))

let num2 = Number(prompt("Enter the second number"))

if (isNaN(num1)) {
    console.error("Number one is not a number")
    }

if
   (isNaN(num2)) {
    console.error("Number two is not a number")
   }
console.log("La suma es = ", num1+num2)
console.info("La resta es = ",num1-num2)
console.warn("La multiplicación es = ", num1*num2)
console.info("La división es = ", num1/num2)