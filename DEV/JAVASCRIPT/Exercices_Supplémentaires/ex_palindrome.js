// Exercice 1 : Le test du palindrome 

// - Objectif :        Créer une fonction classique ou fléchée nommée isPalindrome(word) qui prend un mot en paramètre
//                     et retourne un booléen (true si c'est un palindrome, false sinon).
// - Règles du cours : Parcourez la chaîne de caractères à l'aide d'une boucle for (en comparant le 
//                     premier caractère avec le dernier, le deuxième avec l'avant-dernier, etc...). 

function isPalindrome(word){
    let temp = "";
    for (let letter = 0; letter < word.length; letter+=1){
        temp += word[word.length-(letter+1)];
    }
    if (temp === word){
        console.log(`${word} is a palindrome`)
        return true;
    }
    else{
        console.log(`${word} is not a palindrome`)
        return false;
    }
}

isPalindrome("txt");
isPalindrome("palindrome");
isPalindrome("droord");