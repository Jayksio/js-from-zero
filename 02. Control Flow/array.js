// Nested array
// let nestArr = ['one', ['nest', 'array'], 'two', 3, 4];
// console.log(nestArr[1][0]);

// les méthodes des arrays
// concat() permet de fusionner deux arrays
// let array1 = [1, 2, 3];
// let array2 = [4, true, 'coucou'];
// let concatArray = array1.concat(array2)
// console.log(concatArray);

// includes() permet de voir si un array contient une valeur
// let array = [1, "2", 3];
// console.log(array.includes("2"));

// push() permet d'ajouter un élément à la fin de l'array
// let array = [1, 2, 3];
// array.push(4, 5, 'coucou')
// console.log(array);

// unshift() ajoute un élément au début de l'array
// let array = [3, 4, 5];
// array.unshift(1, 2);
// console.log(array);

// pop() retire le dernier élément de l'array
// let array = [1, 2, 3, 4];
// array.pop();
// console.log(array);

// shift() retire le premier élément de l'array
// let array = [0, 1, 2, 3];
// array.shift()
// console.log(array);

// sort() tri l'array par ordre alphabétique
// let array = ['coucou', 'animaux', 'bonjour'];
// array.sort()
// console.log(array);

// slice() permet de sortir des éléments du tableau en créant une copie superficielle du tableau d'origine, celui d'origine ne sera pas modifié, l'ex suivant ne fonctionne donc pas :
// let array = [1, 2, 3, 4, 5];
// array.slice(2);
// console.log(array);

// si un seul param slice(2), ça retire les 2 premiers éléments
// let array = [1, 2, 3, 4, 5];
// let sliceArray = array.slice(2);
// console.log(sliceArray);

// si 2 params slice(2, 4), le 2 retire les deux premiers élément (le 1 et 2) comme pour un seul param et le 4 retire les éléments après le 4e (le 5)
// let array = [1, 2, 3, 4, 5];
// let sliceArray = array.slice(2, 4);
// console.log(sliceArray);

// join() permet de choisir un caractère qui sera entre nos valeurs dans notre tableau, un tableau avec [1, 2, 3] si on utilise join("") renverra 123, si on utilise join("-") renverra 1-2-3
// let array = [1, 2, 3]
// console.log(array.join('-'));

// reverse() permet d'inverser l'ordre du tableau
// let array = [1, 2, 3];
// console.log(array.reverse());

/* Exercice :  // let array = [1, 2, 3, 4, 5]; utiliser la bonne méthode pour retirer les 2 premiers chiffres du tableau */