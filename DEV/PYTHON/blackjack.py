import random

quit_game = False
bet = 0
cash = 200
liste_cards = [
    # Coeurs
    ('2', 'Coeur'), ('3', 'Coeur'), ('4', 'Coeur'), ('5', 'Coeur'), 
    ('6', 'Coeur'), ('7', 'Coeur'), ('8', 'Coeur'), ('9', 'Coeur'), 
    ('10', 'Coeur'), ('Valet', 'Coeur'), ('Dame', 'Coeur'), ('Roi', 'Coeur'), ('As', 'Coeur'),
    
    # Carreaux
    ('2', 'Carreau'), ('3', 'Carreau'), ('4', 'Carreau'), ('5', 'Carreau'), 
    ('6', 'Carreau'), ('7', 'Carreau'), ('8', 'Carreau'), ('9', 'Carreau'), 
    ('10', 'Carreau'), ('Valet', 'Carreau'), ('Dame', 'Carreau'), ('Roi', 'Carreau'), ('As', 'Carreau'),
    
    # Piques
    ('2', 'Pique'), ('3', 'Pique'), ('4', 'Pique'), ('5', 'Pique'), 
    ('6', 'Pique'), ('7', 'Pique'), ('8', 'Pique'), ('9', 'Pique'), 
    ('10', 'Pique'), ('Valet', 'Pique'), ('Dame', 'Pique'), ('Roi', 'Pique'), ('As', 'Pique'),
    
    # Trèfles
    ('2', 'Trèfle'), ('3', 'Trèfle'), ('4', 'Trèfle'), ('5', 'Trèfle'), 
    ('6', 'Trèfle'), ('7', 'Trèfle'), ('8', 'Trèfle'), ('9', 'Trèfle'), 
    ('10', 'Trèfle'), ('Valet', 'Trèfle'), ('Dame', 'Trèfle'), ('Roi', 'Trèfle'), ('As', 'Trèfle')
]

def init_cards (lst_cards :list) -> list:
    temp = []

    while lst_cards != []:
        i = random.randint(0, len(lst_cards)-1)
        tempo = lst_cards[i]
        temp.append(tempo)
        del lst_cards[i]
    return temp

def draw (lst_cards :list) -> tuple:
    return lst_cards.pop(0)

def get_value_cards (lst_cards :list) -> int:
    liste_values = ['1','2','3','4','5','6','7','9','10']
    value_10 = ["Valet","Dame","Roi"]
    res = 0
    for cards in lst_cards:
        if cards[0] in liste_values:
            res += int(cards[0])
        elif cards[0] in value_10:
            res += 10
        elif cards[0] == "As":
            if res >= 11:
                res += 1
            else:
                boucle = False
                while boucle == False:                    
                    temp = int(input("Vous avez un AS, choisisez que sa valeur soit 1 ou 11 (1 / 11): "))
                    if temp == 1:
                        res += 1
                        boucle = True
                    elif temp == 11:
                        res += 11
                        boucle = True
                    else:
                        boucle = False
    return res

def display_cards(player :str, lst_card) -> tuple:
    if player == "joueur":
        return f'Joueur: {lst_card}     ({get_value_cards(lst_card)})'
    elif player == "croupier":
        return f'Croupeir: {lst_card}   ({get_value_cards(lst_card)})'
    else:
        return r"veuillez rentrer 'joueur' ou 'croupier' "

def display_game(cash :int):
    coin = str(cash)
    line = f"│ CASH: {coin}"
    while len(line) <= 59:
        line += ' '
    line += '│'
    print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
    print("┌─BLACKJACK ────────────────────────────────────────────────┐")
    print(line)
    print("│                                                           │")
    print("│ 1 - Jouer au jeu                                          │")
    print("│ 2 - Quitter le jeu                                        │")
    print("└───────────────────────────────────────────────────────────┘")

def game (lst_cards :list, bet :int, cash :int, quit_game :bool):
    while quit_game == False:
        display_game(100)
        choice = input(">>> ")
        if choice == "1":
            win = False
            cards = init_cards(init_cards(lst_cards))
            p1_cards, p2_cards = [], []
            p1_cards.append(draw(cards))
            p1_cards.append(draw(cards))

            score_p1 = get_value_cards(p1_cards)
            if score_p1 == 21:
                win = True
                cash = cash*2.5
            else:
                pass
            print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
            print("┌─BLACKJACK ────────────────────────────────────────────────┐")
            line = f"| Mes cartes:  ({score_p1})"
            while len(line) <= 59:
                line += ' '
            line += '│'
            print(line)
            for elt in p1_cards:
                line = f"│ - {elt}"
                while len(line) <= 59:
                    line += " "
                line += "│"
                print(line)
            print("│                                                           │")
            print("└───────────────────────────────────────────────────────────┘")
            print("[1] Tirer une carte")
            print("[2] Se retirer ne pas tirer de cartes, tour au croupier")
            print("[3] Doubler (double la mise et tire une carte)")
            print("[4] Split, diviser le score des cartes")
            a = input("\n>>>")
            if a == "1":
                p1_cards.append(draw(cards))
                cards = init_cards(init_cards(lst_cards))
                if cards > 21:
                    pass
        elif choice == "2":
            quit_game = True
        else:
            if quit_game == True:
                break

game(liste_cards, bet, cash, quit_game)