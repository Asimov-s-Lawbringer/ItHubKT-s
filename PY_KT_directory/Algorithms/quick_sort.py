array = [9,3,5,2,6,8,12,4]
def quicksort(arr):
    arr_big = []
    arr_mid = []
    arr_min = []

    if len(arr) <= 1:
        return arr

    for i in arr:
        if i > arr[0]:
            arr_big.append(i)
        elif i == arr[0]:
            arr_mid.append(i)
        elif i < arr[0]:
            arr_min.append(i)


    big_result = quicksort(arr_big)
    min_result = quicksort(arr_min)

    
    return min_result + arr_mid + big_result

    #print(arr_big)
    #print(arr_mid)
    #print(arr_min)




print(quicksort(array))