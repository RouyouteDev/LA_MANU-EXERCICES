temp = False
dico = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
while temp == False:
    secret_letters = input("J1 | Entrez votre combinaison de lettres: ")
    if len(secret_letters) >= 1:
        temp = True
        secret_letters = secret_letters.lower()
        for elt in secret_letters:
            if elt not in dico:
                temp = False
                print("Il doit y avoir uniquement des lettres, pas de characteres spéciaux")
    else:
        print("mot pas assez long")

showed_letter = []
for i in range(len(secret_letters)):
    showed_letter.append("_")
temp = []
compteur = 0
win = False

for elt in secret_letters:
    temp.append(elt)
secret_letters = temp

def clear ():
    for i in range(100):
        print(" ")

letters = " "
for elt in showed_letter:
    letters += elt
while compteur < 7:
    clear()
    print("------------------------------")
    print(f"Lettre restante: {letters}")
    print(f"Essais restants: {7 - compteur}")
    print("------------------------------")
    guess = input("J2 | Devinez une lettre de la combinaison: ")
    guess = guess.lower()
    if guess in secret_letters:
        for i in range(len(secret_letters)):
            if secret_letters[i] == guess:
                showed_letter[i] = guess
                print("Lettre trouvée !")
    else:
        compteur += 1
        print("Lettre non présente")
    pause = input("> appuyez sur entre pour continuer...")
    letters = " "
    for elt in showed_letter:
        letters += elt
    if secret_letters == showed_letter:
        win = True
        break
if win == True:
    print(f"Vous avez gagné !! Le mot était {secret_letters} !")
else:
    print('Vous avez perdu')