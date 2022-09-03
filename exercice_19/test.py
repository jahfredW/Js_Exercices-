def factorielle(nombre):
    if nombre > 1:
        return nombre * factorielle(nombre - 1)
    else :
        return 1


nombre = int(input("nombre ? "))
print(factorielle(nombre))