// 4.1
// 4.1.1. Écrivez une fonction classique nommée calculateArea qui prend en paramètre la largeur et la hauteur d'un rectangle et retourne son aire. 
function calculateArea (l, h){
    return l*h;
}
// console.log(calculateArea(10, 10))


// 4.1.1 Réécrivez cette même fonction sous forme de fonction fléchée sur une seule ligne avec un retour implicite.
const calculateArea2 = (l, h) =>{
    return l*h;
}
// console.log(calculateArea2(5,5))


//  4.2
// 4.2.1 Créez une fonction greetUser(name) qui retourne "Bonjour " + name. Testez-la en lui passant un argument puis
//       sans aucun argument. Faite en sorte de ne pas avoir d’erreur. 
function greetUser(name="Not defined user"){
    let msg = `Bonjour ${name} !` 
    return msg
}
// console.log(greetUser("Rouyoute"))
// console.log(greetUser())


// 4.2.2 Écrivez une fonction sumAll(...numbers) qui utilise le paramètre rest pour additionner dynamiquement un nombre infini
//       de notes passées en arguments. 

function sumAll(ex_numbers){
    let res = 0;
    for (let i = 0; i < ex_numbers.length ; i+=1){
        res += ex_numbers[i]
    }
    return res
}

console.log(sumAll([2,3,10,50]))