// Etape 1: Creation, indexation et taille
const waitinLine = ["Alice", "Bon", "Charlie"];

// console.log(waitinLine[0])
// console.log(waitinLine[waitinLine.length-1])
// console.log(waitinLine[10]) //ca met undefined

// Etape 2: Ajouter et retirer a la fin
waitinLine.push("David")
// console.log(waitinLine)

let partant = waitinLine.pop(waitinLine)
// console.log(partant, waitinLine)

// Etape 3 : Manipuler le début du tableau
waitinLine.unshift("Zoe")
called = waitinLine.shift()


// Étape 4 : Rechercher une valeur 
// console.log(waitinLine.includes("Bob"))
function rechercher(liste,elt){
    let compteur = 0
    for (compteur = 0; compteur < liste.length-1; compteur +=1);{
        if (liste[compteur]===elt){
            return compteur
        }
    }
    return false
}

// console.log(rechercher(waitinLine, "Charlie"))
// console.log(waitinLine.findIndex(elt => elt ==="Charlie"))

// Étape 5 : Transformer un tableau de nombres
const scoreOutOfTen = [4,7,2,9,5];

let noteFinale = 0
let cpt = 0
for (cpt; cpt < scoreOutOfTen.length - 1; cpt += 1){
    noteFinale += scoreOutOfTen[cpt]*2
}