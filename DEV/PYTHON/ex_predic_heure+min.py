heure = int(input("Entrez L'heure qu'il est: "))
minute = int(input("Entrez Les minutes actuelles: "))

minute += 300 # prédiction de l'heure dans 1 min

while minute >= 60:
    heure += 1
    minute = minute - 60
if heure >= 24:
    heure = 0

print(f"Dans 1 minute il sera: {heure}H{minute}")