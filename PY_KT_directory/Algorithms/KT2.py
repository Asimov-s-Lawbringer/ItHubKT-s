#KT 2 
# Zadacha odin
def recursia(arr):
    if len(arr)== 0:
        return 0
    else:
        return arr[0] + recursia(arr[1:])
    
integers = [1,2,3,4,5]
print(recursia(integers))