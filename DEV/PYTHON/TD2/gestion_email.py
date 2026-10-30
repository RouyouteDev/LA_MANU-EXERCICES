def is_upper (char :str) -> bool:
    """Detecte si un element d'une chaine de charactère est en majuscule

    :param chaine_char: chaine de charactere str
    :return: str"""
    upper_char =['A','B','C','D','E','F','G','H','I',
                'J','K','L','M','N','O','P','Q','R',
                'S','T','U','V','W','X','Y','Z']
    for elt in char:
        if elt in upper_char:
            return True
        else:
            return False
        
def is_lower (char :str) -> bool:
    """Detecte si un element d'une chaine de charactère est en minuscule

    :param chaine_char: chaine de charactere str
    :return: str"""
    lower_char =['a','b','c','d','e','f','g','h','i',
                'j','k','l','m','n','o','p','q','r',
                's','t','u','v','w','x','y','z']
    for elt in char:
        if elt in lower_char:
            return True
        else:
            return False
        
def validate_email (email :str) -> bool:       
    """Verifie si le mail est au format valide

    :param email: l'email sous chaine de charactère
    :return: bool """
    count_at :int= 0
    count_dot :int= 0
    count_char_before_at :int= 0
    for elt in email:
        if elt == "@":
            count_at += 1
        elif elt == "." and count_at >=1 :
            count_dot += 1
        elif count_at < 1:
            count_char_before_at +=1
    print(f"count_at: {count_at}, count_dot: {count_dot}, count_char_before_at: {count_char_before_at}")
    if count_at == 1 and count_dot == 1 and count_char_before_at >=1:
        return True
    else:
        return False

def elt_char_upper(char :str) -> str:
    """Transforme un charactère en majuscule

    :param char: 1 seul charactere a transformer en majuscule
    :return: str"""
    temp = ord(char)
    temp = temp - 32
    return chr(temp)

def char_upper (chaine_char :str) -> str:
    """Transforme une chaine de charactere en majuscule

    :param chaine_char: chaine de charactere a transformer en majuscule
    :return: str"""
    res = ""
    for elt in chaine_char:
        if is_upper(elt) == True:
            res += elt_char_upper(elt)
        else:
            res += elt
    return res


def elt_char_lower(char :str) -> str:
    """Transforme un charactère en minuscule

    :param char: 1 seul charactere a transformer en minuscule
    :return: str"""
    temp = ord(char)
    temp += 32
    return chr(temp)

def char_lower (chaine_char :str) -> str:
    """Transforme une chaine de charactere en miniuscule

    :param chaine_char: chaine de charactere a transformer en minuscule
    :return: str"""
    res = ""
    for elt in chaine_char:
        if is_upper(elt) == True:
            res += elt_char_lower(elt)
        else:
            res += elt
    return res

def format_name(char :str) -> str:
    """Nettoie le nom d'utilisateur [met une maj a la premiere lettre et le reste minuscule et sans espaces]
    
    :param char: chaine de charactere a nettoyer
    :return: str"""
    char = char_lower(char)
    temp = char[0]
    temp = elt_char_upper(temp)
    res = temp
    compteur = 0
    for elt in char:
        if compteur == 0:
            pass
        elif elt == " ":
            pass
        else:
            res += elt
        compteur += 1
    return res

def is_unique_mail(email :str, user_bdd :list) -> bool:
    """verifie si l'email n'est pas deja pris

    :param email: chaine de charactere du mail
    :param user_bdd: list de dict des utilisateurs
    :return: bool"""
    for elt in user_bdd:
        if email == elt["email"]:
            return False # mail pas unique
        else:
            pass
    return True # mail unique


def register_info (email :str, name :str) -> list:
    """ enregistrement de l'utilisateur sous forme de dictionnaire email - nom
    
        :param email: chaine de charactere pour le mail
        :param name: chaine de charactere pour le nom
        :return: dict"""
    global user_bdd
    if validate_email(email) == True:
        name = format_name(name)
    else:
        print('Format non respecté:\n Format attendu: nom.prenom@exemple.com ou exemple@exemple.com')
        return False
    if is_unique_mail(email, user_bdd) == True:   
        return {"name":name, "email": email}
    else:
        print('Email deja utilise, veuillez en utiliser un autre.')
        return False


def register ():
    global user_bdd
    info = False
    while info == False:
        email :str = input('\n\nEntrez votre Email: ')
        name :str = input('Entrez votre Nom: ')
        info = register_info(email, name)
    return info


user_bdd = [{'name':'grenier', 'email':'grenier.wyatt@gmail.com'},
            {'name':'alex', 'email':'alex.magnier@lamanu-student.fr'},
            {'name':'tkt', 'email':'tkt@lamanu-student.fr'}
]