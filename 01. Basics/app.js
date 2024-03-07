// Méthodes

let prenom = "Pierre";
let nom = "Leroy";
let age = 30;

// concat (sert à concaténer deux variables, attention aux espaces)
// let nomComplet = prenom.concat(nom);
// console.log(nomComplet);

// append (permet d'ajouter un élément avec l'opérateur +=)
// prenom += " Leroy";
// console.log(prenom);

// length (permet de savoir la longueur d'une chaîne de caractères, renvoie undefined si la variable est un nbr)
// console.log(prenom.length);

// cases (permet avec toLowerCase() de passer une string en minuscule et avec toUpperCase() de passer une string en majuscule)
// console.log(prenom.toLowerCase(), nom.toUpperCase());

// slice (permet de récupérer l'index de ma variable si c'est une string, slice n'est pas une méthode pour un number)
// console.log(prenom.slice(0, 1));

// split & join (split passe une string en array, si je ne mets rien en param ça va renvoyer Pierre dans un array de taille 1, si je mets ("") en paramètre, ça va séparer les lettres et renvoyer les lettres dans un array de taille 6)
// (join permet de passer un array en string, si je veux que les éléments ne soient pas séparés par une virgule (qui est le param par défaut de join), je dois mettre ("") en param)
// console.log(prenom.split("").join(""));

// includes (voir si la variable de type string contient un caractère, ne marche pas avec un number), on peut aussi combiner avec toLowerCase() car c'est sensible à la case, P != p
// console.log(prenom.toLowerCase().includes("p"));

// trim (permet de retirer les espaces avant le premier et après le dernier caractère)
// console.log(prenom.trim());

// utilisation des backticks : ``
// let nomComplet = `Vous êtes : ${prenom} ${nom}`;
// console.log(nomComplet);

// Exercice :
// let favActorFirstName = "Ewan";
// let favActorLastName = "McGregor";
// let fullName = favActorFirstName + " " + favActorLastName;
// let uppercase = fullName.toUpperCase();
// let msg = `My favorite actor is ${uppercase} because he's Obi-Wan Kenobi`;
// msg += ` and he's better than Anakin`;
// console.log(msg);

// string to number
// parseInt() est une fonction qui permet de convertir une chaîne de caractère en un entier. Elle analyse une string et retourne un entier en extrayant la partie numérique du début de la chaîne, par ex "15 + 8" renvoie 15 et "21 ans bientôt 22" renvoie 21
// let money = "15";
// money = parseInt(money);
// console.log(money);
// console.log(typeof money);

// 2 autres moyens de convertir une string en number avec x = +x OU avec Number()
// let money = "20";
// money = +money;
// money = Number(money);
// console.log(money);
// console.log(typeof money);

// number to string
// avec toString() ou avec String(variable)
// let money = 50;
// money = money.toString()
// money = String(money)
// console.log(money);
// console.log(typeof money);

// string to decimal avec parseFloat()
// let decimal = "20.20";
// decimal = parseFloat(decimal);
// console.log(decimal);
// console.log(typeof decimal);