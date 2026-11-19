# EXERCICE 1
print("\n- EXERCICE 1 --------\n")

player_gold = 50
potion_price = 30
isOpen = True

if isOpen == True:
    if player_gold >= potion_price:
        print("Achat réussi")
    else:
        print("Fonds insufisants")
else:
    print("Marchand fermé")


# EXERCICE 2
print("\n- EXERCICE 2 --------\n")

def pseudo (char:str) -> bool:
    """verifie si une chaine de charactere est conforme poru etre un pseudo

    :param char: str qui est le pseudo a verifier
    :return: True ou False [valide ou non valide]
    """
    if len(char) >=4 and len(char) <= 12 and " " not in char:
        return True
    else:
        return False

print("Rouyoute: ",pseudo("Rouyoute"))
print("Rou ille out: ", pseudo("Rou ille out"))


# EXERCICE 3
print("\n- EXERCICE 3 --------\n")

def create_user (nom :str, classe:str="Guerrier", niveau:int="1") -> str:
    """permet de créer un joueur

    :param nom: :str
    :param classe: str
    :param niveau: int
    :return: f string"""
    return f"Héros: {nom} | Classe: {classe} | Niveau: {niveau}"

print(create_user("Rouyoute", "Healer", 150))
print(create_user("Rouyoute"))


# EXERCICE 4
print("\n- EXERCICE 4 --------\n")
inventory = {"potion":3, "epee":1, "or":150}

def control_inventory(inventory:dict, item_name:str, qte:int) -> dict:
    """fonction qui controle l'inventaire

    :param inventory: dictionnaire des items
    :param item_name: str qui est le nom d'item recherche
    :param qte: int qui est la quantité voulue
    :return: le dictionnaire des items a jour"""
    for elt in inventory:
        if elt == item_name:
            inventory[item_name] += qte
    if item_name not in elt:
        inventory[item_name] = qte
    return inventory

def lower_qte_item (inventory:dict) -> tuple:
    """Recherche l'item en plus basse quantité

    :param inventory: dictionnaire qui contient l'inventaire
    :return: retourne un tuple au format (qte, item name)
    """
    for elt in inventory: # BOUCLE UN SEUL ELEMENT POUR RECUP SA QUANTITE
        min = inventory[elt]
        break
    min_name = None
    for elt in inventory:
        if inventory[elt] <= min:
            min = inventory[elt]
            min_name = elt
    return min, min_name

print(control_inventory(inventory, "potion", 4))
print(control_inventory(inventory, "super potion", 2))
print(lower_qte_item(inventory))