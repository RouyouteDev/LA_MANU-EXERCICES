// Exercice 3 : GESTION D'UN INVENTAIRE DE BOUTIQUE 
// Objectif : Manipuler des structures de données combinant tableaux et objets.
// Travail demandé :

// 1.Créez un tableau nommé inventory contenant au moins 3 objets représentant des articles
//     (chaque article possède un name, un price, et un quantity).
let inventory = [
    {"name":"assietes","price":9,"quantity":3},
    {"name":"fourchettes","price":12,"quantity":0},
    {"name":"cuilleres","price":12,"quantity":0},
    {"name":"couteaux","price":23,"quantity":10}
];

// 2.Écrivez une fonction qui calcule le stock en parcourant le tableau avec une boucle, multiplie le prix par
//     la quantité de chaque article, et retourne la valeur totale de l'inventaire.
function stockCalc(list_article){
    let result = 0;
    for (let indice = 0; indice < list_article.length; indice +=1){
        result += list_article[indice]['quantity']*list_article[indice]["price"];
    };
    return result;
};
console.log(stockCalc(inventory));

// 3.Écrivez une fonction qui retourne un tableau (ou une liste) des noms de produits dont la quantité est égale à 0,
//     en utilisant des conditions if/else. 

function outOfStock (list_article){
    result = [];
    for (let indice = 0; indice < list_article.length; indice +=1){
        if (list_article[indice]['quantity'] === 0){
            result.push(list_article[indice]["name"])
        };
    };
    if (result.length === 0){
        return "No item is out of stock";
    }
    else{
        return result;
    };
};

console.log(outOfStock(inventory))