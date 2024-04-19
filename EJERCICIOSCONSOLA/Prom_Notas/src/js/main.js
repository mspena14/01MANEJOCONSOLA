/* 3. Calcular el promedio de notas:
Crea un programa que permita al usuario ingresar las notas de un estudiante en cinco asignaturas.
Almacena las notas en un arreglo. Calcula el promedio de las notas y determina si el estudiante
aprobó o reprobó el curso (aprobando con un promedio mayor o igual a 3.0). Imprime en la
consola el promedio, la clasificación final (aprobado o reprobado) y todas las notas utilizando los
métodos de impresión adecuados. */


let numNotes = 5
let notes = []
let i = 0
let sumNotes = 0

while (i <= 4) {
    notes.push(Number(prompt(`Enter note number ${i+1}`)))
    i++
}

for (let note of notes) {
    sumNotes+=note
}

let promNotes = (sumNotes/notes.length)

if (promNotes >= 3) {
    console.info(`You approved your average is ${promNotes}`)
    } else {
        console.warn(`You disapproved your average is ${promNotes}`);
    }

console.log(`Your notes are ${notes}`)


