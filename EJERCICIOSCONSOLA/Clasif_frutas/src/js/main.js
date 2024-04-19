/* 2. Clasificación de frutas:
Crea una variable que almacene un arreglo de frutas. Recorre el arreglo e imprime en la consola
cada fruta utilizando el método log. Luego, clasifica las frutas en dos categorías (cítricas y no
cítricas) y crea dos nuevos arreglos para almacenarlas. Imprime ambos arreglos en la consola
utilizando el método table. */

let fruits = ["Mango", "Lemon", "Pineapple", "Apple", "Orange"]

let arr = [ "fred", "tom", "bob" ];

for (let i of fruits) {
    console.log(i);
}
/* console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4]) */

let citrus = [fruits[1], fruits[4]]

let notCitrus = [fruits[0], fruits[2], fruits[3]]

console.table(citrus)

console.table(notCitrus)