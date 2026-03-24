raw_arr = [5,7,2,12,4,1,9,8]

def bubble(arr):
    flag = True
    for i in range(len(arr)):#8 длина и от 0 до 7 i
        if flag == True:
            flag = False
            for j in range(len(arr)-1):#7 длина И от 0 до 6 i
                if arr[j] > arr[j+1]:
                    arr[j],arr[j+1] = arr[j+1],arr[j]
                    flag = True
        else:
            return arr
                #print(arr)
    #return arr
print(bubble(raw_arr))

def inserter(arr):
    print("Hello")

def chooser(arr):
    print("Hello")
