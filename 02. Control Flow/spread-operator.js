/* un ...spread operator permet de déployer les éléments d'une function, d'un array ou les propriétés d'un objet dans un nouvel ensemble. Ca facilite la copie, la concaténation ou la création de structures de données */

// function
// function giveMe4(a, b, c, d) {
//     console.log("a = ", a);
//     console.log("b = ", b);
//     console.log("c = ", c);
//     console.log("d = ", d);
// }
// const colors = ['red', 'green', 'blue', 'purple'];
// giveMe4(...colors);

// array 1
// const nums = [1, 2, 3];
// const otherNums = [4, 5, 6];
// const concat = [...nums, ...otherNums];
// console.log(concat);

// array 2
// let users = ['Mathieu', 'Jacques', 'Michel'];
// const ppls = ['Greg', ...users, 'John'];
// console.log(ppls);

// objects
// const obj1 = {
//     x: 1,
//     y: 2,
// };
// const obj2 = {
//     z: 3,
// }
// const concat = { ...obj1, ...obj2 };
// console.log(concat);