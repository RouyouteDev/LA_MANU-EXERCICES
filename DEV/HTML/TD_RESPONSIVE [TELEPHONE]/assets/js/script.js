function burgerbar(){
    const newDiv = document.createElement("div");
    let text = document.createTextNode("TEST")
    newDiv.classList.add("burgermenu");
    newDiv.appendChild(text);

    const ulList = document.createElement("ul");
    const liUn = document.createElement("li");
    let texteu = document.createTextNode("element texte1");
    ulList.appendChild(liUn);
    liUn.appendChild(texteu)

    const liDeux = document.createElement("li");
    texteu = document.createTextNode("element texte1");
    ulList.appendChild(liDeux);
    liDeux.appendChild(texteu)

    const liTrois = document.createElement("li");
    texteu = document.createTextNode("element texte1");
    ulList.appendChild(liTrois);
    liTrois.appendChild(texteu)

    const liQuatres = document.createElement("li");
    texteu = document.createTextNode("element texte1");
    liQuatres.appendChild(texteu)
    ulList.appendChild(liQuatres);


    const menupop = document.getElementById("btn-menu");
    newDiv.appendChild(ulList);
    menupop.appendChild(newDiv);

    console.log("FONCTION EXECUTE: ", newDiv)
};