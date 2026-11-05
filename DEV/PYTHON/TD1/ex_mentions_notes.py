note = float(input("Entrez la note: "))

if note >= 18:
    print("Très Bien!")
elif note >= 16:
    print("Bien")
elif note >= 14:
    print("Assez Bien")
elif note >= 10:
    print("Passable")
else:
    print("Echec, non validé")