TIL I learnt different ways of sorting items in an array. 

The most simple way to do this is using the 'Array sort()' method by adding '.sort()' to the end of the array name.

for example:

'''
var arr = [6,1,2,4]
arr.sort()
'''

Would sort the array to: [ 1, 2, 4, 6 ]

The sort method can also take a comparision function.  'sort(function(a, b){return b-a})' 

This function would then compare two items in the array for example 6,1 and then determine that 6-1 = 5, so 6 is the larger number.

for example:
'''
var arr = [6,1,2,4]
arr.sort(function(a, b){return b-a})
'''

Would return: [ 6, 4, 2, 1 ]

You can learn more about sorting of Date objects in a TIL by bradreeder at: https://github.com/codingforeveryone/today-i-learned/blob/5afbd0bb326f6b9ca0a879fc12d98a056521c01f/javascript/sort-dates.md

I also learnt about sorting via an insertion algorithm which I will write about soon. Some interesting examples can be seen here: http://www.sorting-algorithms.com/
