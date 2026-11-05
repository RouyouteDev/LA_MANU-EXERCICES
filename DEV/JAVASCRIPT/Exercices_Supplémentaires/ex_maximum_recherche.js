// Exercice 2 : Recherche de position et valeur maximale

// - Objectif        :   Soit un tableau de notes non triées : let scores = [12, 5, 19, 8, 20, 14, 20];.
// - Travail demandé :   1. Écrivez un algorithme avec une boucle for pour trouver la valeur maximale présente dans
//                          le tableau ainsi que tous les index où cette valeur apparaît (au cas où il y aurait des
//                          doublons comme le 20).
//                       2. Encapsulez cette logique dans une fonction qui retourne un objet contenant le maximum et
//                          le tableau des index trouvés. 

function maximum (n){
    let temp_max = n[0];
    let temp_indices = [];
    for (let indice = 0; indice < n.length; indice += 1){
        if (n[indice] >= temp_max){
            if (n[indice] > temp_max){
                temp_max = n[indice];
                temp_indices = [indice];
            }
            else{
                temp_max = n[indice];
                temp_indices.push(indice);
            }
        }
    }
    return [temp_max, temp_indices] 
}

let scores = [12, 5, 19, 8, 20, 14, 20];
console.log(maximum(scores));