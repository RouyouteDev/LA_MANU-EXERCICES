products = [{"nom": "Stylo", "prix": 2.5},
            {"nom": "Cahier", "prix": 1.8},
            {"nom": "Classeur", "prix": 4.5},
            {"nom": "Gomme", "prix": 1.8},
            {"nom": "Trousse", "prix": 3.2}
]

def min_func (list_product :list):
    prix_min_actuel = list_product[0]["prix"]
    indice_min_actuel = None
    i = 0

    for produit_courant in list_product:
        if produit_courant['prix'] <= prix_min_actuel:
            prix_min_actuel = produit_courant['prix']
            indice_min_actuel = i
        i += 1

    return prix_min_actuel, indice_min_actuel


def max_func (list_product :list):
    prix_max_actuel = list_product[0]["prix"]
    indice_max_actuel = None
    i = 0

    for produit_courant in list_product:
        if produit_courant['prix'] >= prix_max_actuel:
            prix_max_actuel = produit_courant['prix']
            indice_max_actuel = i
        i += 1

    return prix_max_actuel, indice_max_actuel

print(min_func(products))
print(max_func(products))