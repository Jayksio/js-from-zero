/* find() permet de ressortir le premier élément d'un array qui remplit une condition spécifique */

/* avec une function */
// const songs = [
//     { name: "Lucky you", singer: "Joyner", duration: 4.34 },
//     { name: "Just like you", singer: "NF", duration: 3.23 },
//     { name: "Humble singer", singer: "Kendrick Lamar", duration: 2.33 },
//     { name: "Old Town Road", singer: "Lil Nas X", duration: 1.34 },
//     { name: "Cold Sholder", singer: "Central cee", duration: 5.23 },
// ];
// function findKendrickLamer(singer) {
//     return songs.find(singer => singer.singer === "Kendrick Lamar");
// }
// console.log(findKendrickLamer());

/* avec une variable */
// const songs = [
//     { name: "Lucky you", singer: "Joyner", duration: 4.34 },
//     { name: "Just like you", singer: "NF", duration: 3.23 },
//     { name: "Humble singer", singer: "Kendrick Lamar", duration: 2.33 },
//     { name: "Old Town Road", singer: "Lil Nas X", duration: 1.34 },
//     { name: "Cold Sholder", singer: "Central cee", duration: 5.23 },
// ];
// let res = songs.find(singer => singer.singer === "Kendrick Lamar");
// console.log(res);

/* pour un array */
// const ages = [3, 10, 18, 20];
// let res = ages.filter((age) => age >= 18);
// console.log(res);

// let products = [
//     { name: "Checkers", category: "Toys" },
//     { name: "Harry Potter", category: "Books" },
//     { name: "iPhone", category: "Mobile" },
//     { name: "Learn PHP", category: "Books" },
// ];

/* function findBook(product) {
    return category == "Books";
} */

// const result = products.filter((product) => product.category === "Books");
// console.log(result);