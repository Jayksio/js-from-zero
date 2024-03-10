// Enhanced object literals. Permet d'améliorer la lisibilité du code, mais aussi le réduire
// function user(name, age, work) {
//     return {
//         name,
//         age,
//         work,
//         intro() {
//             return `Je m'appelle ${name}, j'ai ${age} ans et je suis ${work}`;
//         }
//     };
// }
// let user1 = user("Pierre", 30, "Programmer");
// console.log(user1.intro());

// autre exemple d'objet amélioré
// let a = 1;
// let b = 2;
// let c = 3;
// let obj = { a, b, c };
// console.log(obj);

// autre exemple
// let lib = {
//     sum(a, b) { return a + b },
//     mult(a, b) { return a * b }
// };
// console.log(lib.sum(3, 4));
// console.log(lib.mult(3, 4));
// OU en fonction fléchée (pour le même résultat, c'est mieux si on veut être concis mais les fonctions fléchées ne permettent pas d'utiliser le keyword this)
// let lib = {
//     sum: (a, b) => a + b,
//     mult: (a, b) => a * b
// };
// console.log(lib.sum(3, 4));
// console.log(lib.mult(3, 4));