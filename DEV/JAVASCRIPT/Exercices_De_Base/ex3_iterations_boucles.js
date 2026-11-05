// Exercice 3.1 utiliser une boucle for pour afficher dans la console tout les chiffres pairs de 0 a 10 inclus
// 1.0

for (let i=0; i<=10; i+=2){
    // console.log(i)
}

// 1.1 modifier le pas pour faire de 3 en 3

for (let i=0; i<=30; i+=3){
    // console.log(i)
}

// Exercice 3.2 Écrivez un mini-programme de validation de mot de passe à l'aide d'une boucle do...while :

let password;
do{
    password = prompt("Entrez votre mdp, minimum 8charactères")
}while(password.length <= 8)

console.log(`votrez mot de passe est: ${password}`)