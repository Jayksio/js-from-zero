/* ...rest parameter permet à une fonction de recevoir un nombre variable d'arguments sous la forme d'un tableau. Un rest parameter est toujours le dernier paramètre */

// là ça va me renvoyer name en premier donc "Pierre", puis le reste des paramètres (d'où rest parameter)
// function user(name, ...userData) {
//     console.log(name);
//     console.log(userData);
// }
// user("Pierre", 30, "Paris")

// function user(firstName, lastName, ...hobbies) {
//     return `My name is ${firstName} ${lastName} and my hobbies are ${hobbies}.`
// }
// let res = user("Pierre", "Leroy", "Tennis", "Football", "Coding");
// console.log(res);