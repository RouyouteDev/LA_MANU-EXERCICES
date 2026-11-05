// Exercice 4 : SIMULATION DE DISTRIBUTEUR DE BILLETS
// - Objectif : Créer une logique métier robuste basée sur des conditions strictes et des opérateurs logiques.
// - Travail demandé :
//     1 - Écrivez une fonction withdrawMoney(accountBalance, requestedAmount) qui simule un retrait bancaire.
//     2 - Le retrait ne peut réussir que si :
//         - Le montant demandé est inférieur ou égal au solde du compte. 
//         - Le montant demandé est supérieur à 0 et est un multiple de 10.
//         - Le nombre de retraits journaliers autorisés n'est pas dépassé (gérez un compteur à l'aide d'une variable globale ou locale).
//    3 - Utilisez des structures if / else if / else pour renvoyer des messages d'erreur précis selon la règle brisée.


function withdrawMoney(accountBalance, requestedAmount) {
    if (requestedAmount > accountBalance) {
        return "ERREUR: Vous navez pas assez sur votre compte bancaire.";
    } 

    else if (requestedAmount <= 0 || requestedAmount % 10 !== 0) {
        return "ERREUR: Vous ne pouvez pas retirer cette somme, essayez avec des multiples de 10 supérieurs à 0.";
    } 

    else if (daily_withdraw >= 5) {
        return "ERREUR: Vous avez dépassé la quantité maximale de retraits pr aujourd'hui.";
    } 

    else {
        daily_withdraw+= 1;
        return accountBalance - requestedAmount;
    }
}

let daily_withdraw = 0;

console.log(withdrawMoney(1000, 100))
console.log(withdrawMoney(1000, 20))
console.log(withdrawMoney(1000, 10.75))
console.log(withdrawMoney(1000, 5))