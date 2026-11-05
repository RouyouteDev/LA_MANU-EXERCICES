tarif_normal = 12
tarif_etudiant = 8
tarif_senior = 9


age = int(input("quel est votre age: "))
est_etudiant = input("Etes vous étudiant ? [True / False]")

if age >= 65:
    prix_final = tarif_senior
elif age<18:
    prix_final = tarif_etudiant
elif est_etudiant == "True":
    prix_final = tarif_etudiant
else:
    prix_final = tarif_normal

print(f'Vous devez payer: {prix_final}')