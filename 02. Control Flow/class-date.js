// création d'un objet de la class Date() : année, mois (commence à 0), jour, heures, minutes, secondes, millisecondes

// const currentDate = new Date(2024, 1, 10, 15, 0, 0, 0);
// console.log(currentDate);

// plusieurs méthodes sont liées à cet objet, par exemple getFullYear(), getDate() (qui commence à 0 et le dimanche), ...

// let date = new Date();
// let annee = date.getFullYear();
// let mois = date.getMonth();
// let jourDeLaSemaine = date.getDay();
// let jourDuMois = date.getDate();
// let minutes = date.getMinutes();
// let secondes = date.getSeconds();

// console.log(`Année : ${annee}`);
// console.log(`Mois : ${mois}`);
// console.log(`Jour de la semaine : ${jourDeLaSemaine}`);
// console.log(`Jour du mois : ${jourDuMois}`);
// console.log(`Minutes : ${minutes}`);
// console.log(`Secondes : ${secondes}`);

// toDateString() renvoie la date (jour semaine, mois, jour mois, année) sans les autres infos (heures minutes secondes GMT)
// let date = new Date();
// let dateToString = date.toDateString();
// console.log(date);
// console.log(dateToString);

// toLocaleDateString() pour renvoyer la date au format local, toLocaleTimeString() pour renvoyer l'heure au format local et toLocaleString() pour renvoyer les deux
// let date = new Date();
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleString());