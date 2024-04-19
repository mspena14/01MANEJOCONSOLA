/* . Juego de adivinanzas:
Crea un juego de adivinanzas donde el usuario deba intentar adivinar un número secreto generado
aleatoriamente. Proporciona pistas al usuario indicando si su suposición es mayor, menor o igual al
número secreto. Utiliza los métodos log, warn y error para imprimir mensajes informativos al
usuario durante el juego. */



while (true) {
    let secretNumber = Number(52)
    let userNumber = Number(prompt(`Try to guess the number! 
Tell me what you think the secret number is in a range of 0 to 100:`))

    if (userNumber === secretNumber) {
        console.log(`You won!
You guessed it, yeah the secret number is ${userNumber}`)
        break

    } else if (userNumber > secretNumber) {
        console.error(`Try again your number is bigger tham the secret number`)

    } else if (userNumber < secretNumber) {
        console.warn(`Try again your number is smaller tham the secret number`)
    }
}