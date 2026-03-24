def merge(arr1,arr2):
    arr3 = []
    i = j = 0
    while i != len(arr1) and j != len(arr2):
        if arr1[i]< arr2[j]:
            arr3.append(arr1[i])
            i+=1 
        else:
            arr3.append(arr2[j])
            j+=1 
    
    arr3.extend(arr1[i:])
    arr3.extend(arr2[j:])
    #print(arr3)
    return arr3

arr = [1,3,8,9]
arr2 = [2,5,7,12]
merge(arr,arr2)

def Merge_Sort(array):  
    if len(array)<=1:
        return array
    i = 0

    arr_left = array[i:len(array)//2]
    arr_right = array[len(array)//2:]

    left_result = Merge_Sort(arr_left)
    right_result = Merge_Sort(arr_right)

    
    return merge(left_result,right_result)    
    
print(Merge_Sort([12,7,2,5,6,4,15,9]))