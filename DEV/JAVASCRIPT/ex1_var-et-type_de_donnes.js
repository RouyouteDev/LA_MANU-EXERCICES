// 1. Declarations et bonnes pratiques:

// Declarer une constante qui permet de stocker un nombre et assignez lui 3
const number = 3;

// Déclarez une variable pour stocker le nom d'un utilisateur initialisé à null, puis réeassignez lui
let username =  null;
username = "Alice";

// Corriger les erreurs de nomage des déclarations suivantes:
let firstUser = "Bob";
let nameClient = "Dupont";
let isAdmin = true;


// 2. Template literals

// Declarez deux variables prénom ("John") et âge (30).
let nameUser = "John";
let age = 30;

console.log("Bonjour", nameUser, "vous avez", age, "ans !")
console.log(`Bonjour ${nameUser} vous avez ${age} ans !`)