/* Nombre d'exo actuel : 8 */

/* Les bases : 6 exercices */

/* 1 */
// let x = 11;
// let y = 5;
// let result = x + y;
// console.log("result");
// output : result
// explication : ce qui est contenu entre "" renvoie une chaîne de caractères. Pour afficher le résultat de result, il aurait fallu mettre console.log(result) sans les ""

/* 2 */
// let prenom = "Michel";
// console.log(prenom.length);
// output : 6
// explication : la variable "Michel" contient 6 caractères

/* 3 */
// let nbr = "15";
// let newNbr = nbr.parseInt()
// console.log(newNbr);
// output : Uncaught TypeError: nbr.parseInt is not a function
// explication : parseInt() n'est pas utilisé de la bonne façon, il aurait fallu écrire let newNbr = parseInt(nbr)

/* 4 */
// let calcul = "21 + 22";
// let result = parseInt(calcul);
// console.log(result);
// output : 21
// explication : parseInt() renvoie seulement la première partie numérique d'une string

/* 5 */
// let prenom = "Yves";
// console.log(prenom.slice(1, 2));
// output : v
// explication : slice() permet d'extraire les index d'une chaîne de caractère, ça prend l'index 1 (donc v) du mot "Yves" puis ça retire l'index 2 et ce qu'il y a après

/* 6 */
// let prenom = "Pierre";
// console.log(prenom.split("-"));
// output : ['Pierre']
// explication : split() passe une string en array. Si on met split(""), ça renverrait ['p', 'i', 'e', 'r', 'r', 'e'], mais si on met autre chose entre ("") ça fait comme si on n'avait rien mis.

/* Functions : 2 exercices */

/* 1 */
// function greet() {
//     console.log("hello function");
// }
// output :
// explication : rien n'apparait dans la console, car la function n'est pas appelée. Pour se faire, il aurait fallu ajouter greet();

/* 2 */
// sayHello("John");
// function sayHello(nom) {
//     console.log(`Salut ${nom}`);
// }
// output : Salut John
// explication : si une fonction est déclarée, on peut y accéder avant sa déclaration, ce n'est pas le cas lorsqu'il s'agit d'une expression de function, c'est-à-dire une function stockée dans une variable

/* Scope : 1 exercice */
/* 1 */
// let msg = "global variable"
// console.log(msg);
// function msgLocal() {
//     let msg = "local variable";
//     console.log(msg);
// }
// msgGlobal();
// output : global variable local variable
// explication : deux variables peuvent avoir le même nom, si l'une est globale et l'autre est locale, le code s'affiche donc normalement