// 2.1 Analysez le résultat de ces comparaisons dans votre tête ou via la console, puis expliquez la différence
console.log(5 == "5") 
console.log(5 === "5")

// 2.2 Structures conditionnelles

let score;
do {
score = prompt("Entrez la note entre 0 et 20");
} while(score < 0 || score > 20);

if (score >= 16){
    console.log("Très bien.")
}
else if (score >= 12){
    console.log("Bien.")
}
else if (score >= 10){
    console.log("Passable")
}
else{
    console.log("Echec")
}

// Réécrivez la condition d'attribution d'une mention simple (majeur/mineur selon l'âge) en utilisant un opérateur ternaire. 
let age = prompt("Quel age as-tu :") >= 18 ? "Majeur" : "Mineur"
console.log(age)

// Exercice 2.3 : Opérateurs logiques: Créez une condition complexe pour l'accès à un site : un utilisateur peut
//                                     entrer s'il est majeur OU s'il possède une autorisation parentale,
//                                     ET s'il n'est pas banni. 

let isOver18 = prompt("Avez vous plus de 18ans [OUI / NON]: ") === "OUI" ? true : false
let as_authorization = prompt("Avez vous une autorisation parentale [OUI / NON]: ")  === "OUI" ? true : false
let first_name = prompt("ton identifiant: ")
let banned = ["jean","john"]
let temp = false;

if ((isOver18 === true || as_authorization === true) && first_name != null){
    for (let i=0; i < banned.length; i+=1){
        if (first_name === banned[i]){
            console.log("Vous etes bannis, vous pouvez pas vous connecter")
            temp = true;
            break;
        }
    }
    if(temp === false){
        console.log("Vous avez réussi !")
    }
}