// les arrow functions (fonctions fléchées) sont une syntaxe consive pour déclarer des fonctions.

// function classique
// function greet(username) {
//     return `Hi ${username}`;
// }
// console.log(greet("Pierre"));

// la même en arrow function
// greet = (username) => {
//     return `Hi ${username}`;
// };
// console.log(greet("Pierro"));

// const double = (number) => {
//     return number * 2;
// };
// console.log(double(5));

// pour raccourcir encore plus, on peut retirer les parenthèses s'il n'y a qu'un paramètre, mais aussi le keyword return ainsi que les accolades
// const double = n => n * 2;
// console.log(double(5));


// setTimeout(() => {
//     console.log("Hello");
//     setTimeout(() => {
//         console.log("Coucou");
//         setTimeout(() => {
//             console.log("Namaste");
//             setTimeout(() => {
//                 console.log("Hi");
//                 setTimeout(() => {
//                     console.log("Bonjour");
//                 }, 1000)
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000); 