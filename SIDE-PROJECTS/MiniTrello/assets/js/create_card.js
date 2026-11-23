let main = document.querySelector("#trello-app")
let btn = document.querySelector("#btn-header")

let CptEltsListe = 0

btn.addEventListener('click', () => {
    // <div class="col"></div>
    let div = document.createElement("div")
    div.className = "col"

    // <input class="title cardName" placeholder="Titre de la carte">
    let inputTitle = document.createElement("input")
    inputTitle.classList.add("title")
    inputTitle.classList.add("cardName")
    inputTitle.setAttribute("placeholder","Titre de la carte")
    inputTitle.setAttribute("name","createelt")

    // <div class="containerList"></div>
    let divContainerList = document.createElement("div")
    divContainerList.classList.add("containerList")

    // <button class="btn-addcard"+ Ajouter une carte</button>
    let btnAddCard = document.createElement("button")
    btnAddCard.classList.add("btn-addcard")
    btnAddCard.textContent = "+ Ajouter une carte"

    // <div class="col">
    //    <input class="title cardName" placeholder="Titre de la carte">
    //    <button class="btn-addcard">+ Ajouter une carte </button>
    // </div>
    div.appendChild(inputTitle)
    div.appendChild(divContainerList)
    div.appendChild(btnAddCard)
    main.appendChild(div)
});



// <input class="%number%" placeholder="Ajoutez une tâche %number%">

let btnAddCard = document.querySelector(".btn-addcard")
btnAddCard.addEventListener('click', () => {
    let addingSpace = document.querySelector(".containerList")
    console.log(addingSpace)
    let elt_list = document.createElement("input")
    CptEltsListe += 1
    elt_list.setAttribute(placeholder, `Ajoutez un tâche ${CptEltsListe}`)
    elt_list.classList.add(String(CptEltsListe))
    addingSpace.appendChild(elt_list)
})
