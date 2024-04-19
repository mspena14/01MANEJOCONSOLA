/*---------------------------------------------- variables---------------------------------------------------- */
/* var userName = "Marlon" No se usa */

/*
variables using js

let userName = "Marlon"
let lastName = "Peña Naranjo"
const age = "23 years old"
const email = "marlono1naranjo@gmail.com"
let phoneNumber = "+573194746457"
let address = "Cr 50a # 89a - 08"
*/

// Variables with prompt 

let userName = prompt("Enter your name")
let lastName = prompt("Enter your last name")
const age = prompt("Enter your age")
const email = prompt("Enter your email address")
let phoneNumber = prompt("Enter your phone number")
let address = prompt("Enter your address")


/*---------------------------------------------- Consoles---------------------------------------------------- */

// console methods
console.log(userName)
console.info(lastName)
console.warn(age)
console.log(email)
console.error(phoneNumber)
console.debug(address)
/* let message1 = "Hola mi nombre es " + userName + " " + lastName + " tengo " + age + ", mi correo es " + email + ". Me puedes llamar al " + phoneNumber + " o encontrar en la " + address + "."
let message2 = "Hola mi nombre es", userName, lastName + "tengo", age + ", mi correo es " + email + ". Me puedes llamar al " + phoneNumber + " o encontrar en la " + address + "."
 */
console.log(`%c${address}`, "background-color:black;color:white; border-radius:15px; padding: 5px; margin-top: 20px;")

// Ways to use the console
console.info ("Hi! My name is " + userName + " " + lastName + " I'm " + age + ", my email address is " + email + ". You can call me to " + phoneNumber + " or find me in " + address + ".")
console.info ("Hi! My name is", userName, lastName, "I'm", age, " my email address is", email, ". You can call me to", phoneNumber, "or find me in", address)
console.info (`Hi! My name is ${userName} ${lastName} I'm ${age}, my email address is ${email}. You can call me to ${phoneNumber} or find me in ${address}.`)

// Console's groups

console.group("Data basic")
console.info(userName)
console.info(lastName)
console.info(age)
console.groupEnd()

console.group("Data contac")
console.info(email)
console.info(phoneNumber)
console.info(address)
console.groupEnd()

// consoles's end


// Lists

const coders = ["Lupe Ortiz", "Mateo Duarte", "Marlon Peña"]

console.info(coders)
console.log(coders)
console.table(coders)