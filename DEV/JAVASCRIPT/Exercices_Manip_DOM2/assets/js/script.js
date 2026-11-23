//  NIVEAU 1
let titleCommand = document.querySelector(".titre-commande")
titleCommand.textContent = "Commande # 404 - Expédition express"

let clientName = document.querySelector(".nom-client")
clientName.textContent = "Camille Laurent"

let adresse = document.querySelector(".adresse-livraison")
adresse.textContent = "14 rue des Lilas, 80000 Amiens"

let idk = document.querySelector("#commande-404")
idk.classList.replace("statut-attente","statut-validee")
idk.classList.add("prioritaire")

let statut = document.querySelector(".etiquette-statut")
statut.textContent = "Validée"


// NIVEAU 2
let produits = document.querySelectorAll("li")
let articlename = document.querySelectorAll("li .nom-article")
let etatArticle = document.querySelectorAll("li .etat-article")

cpt = 0
produits.forEach(elt => {
    if (cpt == 0){
        elt.classList.remove("rupture")
        elt.classList.add("remplace")
        articlename[0].textContent = "Sac à dos urbain (Modèle V2)"
        etatArticle[0].textContent = "Remplacé sans frais"
    }
    if (cpt == 1){
        etatArticle[1].textContent = "Prêt a emballer"
        elt.classList.add("disponible")
    }
    if (cpt == 2){
        elt.classList.add("disponible")
        etatArticle[2].textContent = "Inclus"
    }
    cpt += 1
});

// NIVEAU 3
let totalht = document.querySelector(".total-ht")
totalht.textContent = "Total HT : 74,00 €"
let totalttc = document.querySelector(".total-ttc")
totalttc.innerHTML = "Total TTC : <span class='montant-fort'>88,80 €</span>"
let note = document.querySelector(".note-interne")
note.classList.remove("masquee")
note.innerHTML = "<strong>Note:</strong> Code promo appliqué automatiquement"