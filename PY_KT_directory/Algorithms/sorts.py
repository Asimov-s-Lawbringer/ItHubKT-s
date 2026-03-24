from merge_sort import *
from quick_sort import *
from bubble_sort import *

import random
import time
import sys
sys.setrecursionlimit(20000)


random_array = random.sample(range(1, 100000), 10000)
array_with_dupes = [random.randint(1, 1000) for _ in range(10000)]
sorted_array = sorted(random_array)
reversed_array = sorted_array[::-1]

random_array1 = random.sample(range(1, 100000), 10000)
array_with_dupes1 = [random.randint(1, 1000) for _ in range(10000)]
sorted_array1 = sorted(random_array1)
reversed_array1 = sorted_array1[::-1]

random_array2 = random.sample(range(1, 100000), 10000)
array_with_dupes2 = [random.randint(1, 1000) for _ in range(10000)]
sorted_array2 = sorted(random_array2)
reversed_array2 = sorted_array2[::-1]

start_time = time.perf_counter()
bubble(random_array)
bubble(array_with_dupes)
bubble(sorted_array)
bubble(reversed_array)
end_time = time.perf_counter()
print(f"Затрачено времени: {end_time - start_time:.4f} сек")

start_time = time.perf_counter()
quicksort(random_array1)
quicksort(array_with_dupes1)
quicksort(sorted_array1)
quicksort(reversed_array1)
end_time = time.perf_counter()
print(f"Затрачено времени: {end_time - start_time:.4f} сек")

start_time = time.perf_counter()
Merge_Sort(random_array2)
Merge_Sort(array_with_dupes2)
Merge_Sort(sorted_array2)
Merge_Sort(reversed_array2)
end_time = time.perf_counter()
print(f"Затрачено времени: {end_time - start_time:.4f} сек")
