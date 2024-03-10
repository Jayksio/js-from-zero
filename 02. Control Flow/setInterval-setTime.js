
//  setInterval() permet d'exécuter une fonction donnée à intervalles réguliers. Elle prend deux arguments : la fonction à exécuter et l'intervalle en millisecondes entre chaque exécution.
// setInterval(() => {
//     console.log("Ma fonction est exécutée toutes les 1 seconde");
// }, 1000);

// setTimeout() permet d'exécuter une fonction une fois après un temps donné. Elle prend donc deux arguments : la fonction à exécuter et le temps en millisecondes

// setTimeout(() => {
//     console.log("Ma fonction est exécutée après 1 seconde");
// }, 1000);

// stopper un setInterval() grâce à setTimeout() et clearInterval()
// let interval = setInterval(() => {
//     console.log("Fonction exécutée toutes les 1 seconde");
// }, 1000)

// setTimeout(() => {
//     clearInterval(interval);
//     console.log("setInterval stoppé après 3 secondes");
// }, 3000)