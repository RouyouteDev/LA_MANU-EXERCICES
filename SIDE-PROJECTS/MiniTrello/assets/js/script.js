function newTab(){

    // CREATION DE LA DIV QUI SERT DE COLONNE
    const newDivTab = document.createElement("div");
    newDivTab.classList.add('column-task-list');// AJOUT DE LA CLASSE DE LA DIV

    // CREATION DU TITRE DE LA COLONNE
    const newDivContent = document.createElement("h2");
    let newDivContentTextChar = prompt('nom de liste'); // DEMANDE A L UTILISATEUR LE NOM DE LA COLLONE EX: "A FAIRE URGENT"
    const newDivContentText = document.createTextNode(newDivContentTextChar); // ENGREGISTREMENT DU TEXTE MIS PAR L UTILISATEUR DANS LE TITRE
    newDivContent.classList.add('column-task-list-title'); // AJOUT DE LA CLASSE AU TITRE

    const newDivForTasks = document.createElement("div") // CREATION DE LA DIV QUI ACCEUILLERAS LES TASKS
    newDivForTasks.classList.add("column-task-list-div") // AJOUT DE LA CLASSE A LA DIV

    // CREATION D UN BOUTON POUR CREER DES TACHES
    const buttonCreateTask = document.createElement("button");
    const buttonCreateTaskText = document.createTextNode('➕ Ajouter une carte'); // emoji: ➕ en attendant d'avoir un truc mieux
    buttonCreateTask.classList.add('column-task-list-btn') // AJOUT DE LA CLASSE AU BOUTON
    buttonCreateTask.setAttribute("onclick", "createTask()")

    //AJOUT DE TEXTE
    buttonCreateTask.appendChild(buttonCreateTaskText) // AJOUT DU TEXTE AU BOUTON
    newDivContent.appendChild(newDivContentText); // AJOUT DU TEXTE AU TITRE DE COLONNE

    //AJOUT DES ELEMENTS A LA DIV
    newDivTab.appendChild(newDivContent); // AJOUT DU TITRE DE COLLONE A LA DIV
    newDivTab.appendChild(newDivForTasks) // AJOUT DE LA DIV QUI ACCEUILLERAS LES TASKS
    newDivTab.appendChild(buttonCreateTask); // AJOUT DU BOUTON A LA DIV DE COLLONE

    const currentDiv = document.getElementById("trello-app") // SELECTION DE LA DIV PRINCIPALE QUI GARDES LES COLLONES
    currentDiv.appendChild(newDivTab); // AJOUT DE LA DIV COMPLETE
}

function createTask(){
    const newTextArea = document.createElement("textarea");
    newTextArea.classList.add("task-textarea");

    const currentDiv = newTextArea.closest('.column-task-list-div');
    currentDiv.appendChild(newTextArea)
}