// déclaration de fonction
// function greet() {
//     console.log("hello function");
// }
// greet()

// les paramètres entre parenthèses sont des variables accessibles seulement à l'intérieur de la function. Pour attribuer une valeur à cette variable, il faut la définir ensuite, on appelle alors ça un argument.
// function sayHello(nom) {
//     console.log(`Salut ${nom}`);
// }
// sayHello("Pierre");

// return keyword
// function add(x, y) {
//     return x + y;
// }
// const result1 = add(20, 10);
// const result2 = add(200, 100);
// const result3 = add(200, 10);
// console.log(result1);
// console.log(result2);
// console.log(result3);

// expression de fonction, c'est-à-dire une fonction stockée dans une variable
// let greet = function (nom) {
//     console.log(`Salut ${nom}`);
// }
// greet("Pierre")

// callback function : lorsqu'on met une function en argument d'une autre function
// function add(a, b, callback) {
//     let result = a + b;
//     callback(result);
// }
// function multiplierParTrois(result) {
//     let produit = result * 3;
//     console.log(`Le résultat multiplié par 3 est égal à ${produit}`);
// }
// add(5, 7, multiplierParTrois);