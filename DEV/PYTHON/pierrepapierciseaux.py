import random
game_end = False

def game ():
    while game_end == False:
        choix = input("pierre, papier ou ciseaux: ")
        if choix == "quit":
            break
        choix_bot = random.randint(0,2)
        if choix_bot == 0: # pierre = 0
            if choix == "ciseaux":
                print("YOU LOOSE")
            elif choix == "papier":
                print("YOU WIN !!")
            else:
                print("EVEN")

        elif choix_bot == 1: # ciseaux = 1
            if choix == "ciseaux":
                print("EVEN")
            elif choix == "papier":
                print("YOU LOOSE")
            else:
                print("YOU WIN !!")

        elif choix_bot == 3: # papier = 2
            if choix == "ciseaux":
                print("YOU WIN !!")
            elif choix == "papier":
                print("EVEN")
            else:
                print("YOU LOOSE")
        

game()