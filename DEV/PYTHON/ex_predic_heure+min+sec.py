heure = int(input("Entrez L'heure qu'il est: "))
minute = int(input("Entrez Les minutes actuelles: "))
seconde = int(input("Entrez Les secondes actuelles: "))


seconde += 1 # prédiction de l'heure dans 1 seconde


while seconde >60:
    minute += 1
    seconde = seconde - 60
while minute > 60:
    heure += 1
    minute = minute - 60
if heure >= 24:
    heure = 0

print(f"Dans 1 minute il sera: {heure}H{minute}:{seconde}")