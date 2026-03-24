from random import* 
seed=randint(1,20) 
skobki=["[","]","{","}","(",")"] 
stroka="" 
krug=["(",")"] 
kvad=["[","]"] 
fig=["{","}"] 
for i in range(seed): 
    j=randint(0,len(skobki)-1) 
    stroka+=skobki[j] 
stroka="([{})]" 
print(stroka) 
if stroka[-1]=="{" or stroka[-1]=="(" or stroka[-1]=="[" or stroka[0]=="]" or stroka[0]==")" or stroka[0]=="}": 
    print("неверный синтаксис") 
     
if len(stroka)%2==1: 
    print("неверно, нечётная длина строки") 
for j in range(0,len(stroka)-2): 
    if stroka[j]=="{" and stroka[j+2]=="}": 
        print("Неверно, единичный разрыв скобок {}") 
        break 
    elif stroka[j]=="[" and stroka[j+2]=="]": 
        print("Неверно, единичный разрыв скобок []") 
        break 
    elif stroka[j]=="(" and stroka[j+2]==")": 
        print("Неверно,единичный разрыв скобок ()") 
        break 
for c in range(0,len(stroka)-1): 
    if stroka.count("{")!=stroka.count("}"): 
        print("Неверно, количественное несовпадение {}") 
        break 
    elif stroka.count("[")!=stroka.count("]"): 
        print("Неверно, количественное несовпадение[]") 
        break 
    elif stroka.count("(")!=stroka.count(")"): 
        print("Неверно, количественное несовпадение()") 
        break 
 
for o in range(0,len(stroka)-1): 
     
    if stroka[o]=="(": 
        stroka1=stroka[o:80000] 
        if stroka1.find(")")==-1: 
            print("нет закрывающей скобки )") 
    elif stroka[o]=="{": 
        stroka1=stroka[o:80000] 
        if stroka1.find("}")==-1: 
            print("нет закрывающей скобки }") 
    elif stroka[o]=="[": 
        stroka1=stroka[o:80000] 
        if stroka1.find("]")==-1: 
            print("нет закрывающей скобки ]") 
if "{]" in stroka or "{)" in stroka or "[}" in stroka or "[)" in stroka or "(]" in stroka or "(}" in stroka: 
    print("Множественный разрыв")
print("Якобы все нормально")