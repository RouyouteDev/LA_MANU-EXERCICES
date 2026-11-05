nbr_copies = int(input("Nombre de copie a imprimer: "))
prix_final = 0.0

for i in range(nbr_copies):
    if i <= 9:
        prix_final += 0.1
    elif i <= 29:
        prix_final += 0.09
    else:
        prix_final += 0.08

prix_final = round(prix_final, 2)

print(f"le prix pour {nbr_copies} copies est de {prix_final}")