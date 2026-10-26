score_p1 = int(input("Score de Mr Banane: "))
score_p2 = int(input("Score de Mme Citrouille: "))
score_p3 = int(input("Score de Mr Abricot: "))
score_p4 = int(input("Score de Mme Cerise: "))


suffrage = 500
liste_candidat = [[score_p1, "Mr Banane"], [score_p2, "Mme Citrouille"], [score_p3, "Mr Abricot"], [score_p4, "Mme Cerise"]]
liste_candidat_retenu = []
liste_candidat_2ndtour_fav = []
liste_candidat_2ndtour_defav = []
liste_candidat_battu = []
max = [0, "tkt"]


for elt in liste_candidat:
    if elt[0] >= suffrage/2:
        liste_candidat_retenu.append(elt)

if liste_candidat_retenu == []:
    for elt in liste_candidat:
        if elt[0] > max[0]:
            max = elt
    for elt in liste_candidat:
        if elt[0] == max[0]:
            liste_candidat_2ndtour_fav.append(elt)
        else:
            liste_candidat_2ndtour_defav.append(elt)

if len(liste_candidat_retenu) == 1:
    for elt in liste_candidat:
        if elt == liste_candidat_retenu[0]:
            pass
        else:
            liste_candidat_battu.append(elt)
    print(f"candidat gagnant: {liste_candidat_retenu}\ncandidats perdant: {liste_candidat_battu}")
else:
    print(f"candidats en balotage favorable: {liste_candidat_2ndtour_fav}\n candidats en balotage defavorable: {liste_candidat_2ndtour_defav}")