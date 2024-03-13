//  la méthode every() permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument

// const isMajor = (age) => age >= 18;
// let arrayAge = [22, 19, 30, 51];
// console.log(arrayAge.every(isMajor));

// const fruits = ['banane', 'pomme', 'poire'];
// const containLetterE = (fruit) => fruit.includes('e');
// let res = fruits.every(containLetterE);
// console.log(res);

// la méthode some() permet de tester si au moins un élément d'un tableau vérifie une condition donnée par une fonction en argument
// const fruits = ['banane', 'pomme', 'poire'];
// const wordBeginWithLetterB = (word) => word.startsWith('b');
// let res = fruits.some(wordBeginWithLetterB);
// console.log(res);

// tester si un objet contient une catégorie spécifique
// let products = [
//     { name: "Checkers", category: "Toys" },
//     { name: "Harry Potter", category: "Books" },
//     { name: "iPhone", category: "Tech" },
//     { name: "Learn PHP", category: "Books" },
// ];

// const areProductsBooks = ((item) => item.category === "Books");

// let allProductsBooks = products.every(areProductsBooks);
// let someProductsBooks = products.some(areProductsBooks);
// console.log(allProductsBooks);
// console.log(someProductsBooks);

/* Exercice :
let products = [
     { name: "Checkers", category: "Toys" },
     { name: "Harry Potter", category: "Books" },
     { name: "iPhone", category: "Tech" },
     { name: "Learn PHP", category: "Books" },
];
sortez tous les objets qui sont des "Books"
*/