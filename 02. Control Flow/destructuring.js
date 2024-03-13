// destructuring permet de "unpack" des valeurs issues de structures de données (arrays, objects) en variables distinctes

// array
// const foo = ["Pierre", "Leroy", 30];
// const [prenom, nom, age] = foo;
// console.log(prenom, nom, age);

// ça marche aussi au sein d'une function
// function user() {
//     return ["Pierre", "Leroy", 30];
// };
// let [a, b, c] = user();
// console.log(a, b, c);

// on peut sauter un ou plusieurs éléments de notre array, ça ne marche pas sur objects
// function f() {
//     return ["Pierre", "Leroy", 30];
// }
// let [, , age] = f();
// console.log(age);

// assigné le reste d'un array à une unique variable grâce au spread operator
// let num = [1, 2, 3];
// let [a, ...b] = num;
// console.log(b);

// object destructuring : l'ordre n'importe pas mais le nom importe
// const foo = {
//     nom: "Pierre",
//     age: 30,
// }
// const { nom, age } = foo;
// console.log(nom, age);

// renommer les variables en object destructuring
// const user = {
//     firstName: "Pierre",
//     age: 30
// };
// const { firstName: prenom, age } = user;
// console.log(prenom, age);

// object destructuring et rest operator
// let user = {
//     nom: "Leroy",
//     prenom: "Pierre",
//     age: 30,
//     estMajeur: true,
// };
// let { age, ...rest } = user;
// console.log(rest);

// function destructuring
// let user = {
//     firstName: "Pierre",
//     age: 30,
//     country: "France"
// }
// function printUserInfo({ firstName, age, country }) {
//     return `Your name is ${firstName}, you are ${age} years old and you live in ${country}`;
// }
// let info = printUserInfo(user);
// console.log(info);

// autre exemple
// let menu = {
//     titre: "Cours JS",
//     menuItems: ['Accueil', 'À propos', 'Contact'],
// };
// function showMenu({ titre, partie: p = `destructuring`, greet: g = `${titre} : ${p} !`, menuItems: [item1, item2, item3] }) {
//     console.log(`${g}`);
//     console.log(item1, item2, item3);
// }
// showMenu(menu);

// destructuring d'objets dans un array
// const songs = [
//     { name: "Lucky you", singer: "Joyner", duration: 4.34 },
//     { name: "Just like you", singer: "NF", duration: 3.23 },
//     { name: "Humble singer", singer: "Kendrick Lamar", duration: 2.33 },
//     { name: "Old Town Road", singer: "Lil Nas X", duration: 1.34 },
//     { name: "Cold Sholder", singer: "Central cee", duration: 5.23 },
// ];
// const [, { singer: s2 }, , { singer: s4 }] = songs;

// autre exemple
// const data = {
//     user: {
//         id: 233,
//         name: "Pierre",
//         age: 30,
//         email: "pierre@mail.com",
//         address: {
//             city: "Paris",
//             country: "France",
//         },
//         hobbies: ["Coding", "Swimming"]
//     }
// }
// const {
//     user: { name, age, email, address: { city, country }, hobbies: [, hobby2] }
// } = data;
// console.log(hobby2);

/* Exercice :
const user = {
    firstName: "Pierre",
    age: 30
};
destructurer l'objet suivant en attribuant le firstName à une variable prenom et l'age à une variable age
*/
