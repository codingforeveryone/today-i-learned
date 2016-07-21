####The filter-length useful combination

One of the nice "tricks" I've learned while solving problems in codewars is the filter-length combination.

It's very useful when you need to count elements that pass a certain test in an array.  

for example in this [kata](https://www.codewars.com/kata/greed-is-good/solutions/javascript/me/best_practice)

Let's say you get an array of dice results, and need to count certain recurrence of numbers. 

For example I want to know how many times a person scored six. This is all I need to do:


```var count6 = result.filter(function(num) {return num===6}).length;```
```console.log(count6);```
or
```return result.filter(function(num) {return num===6}).length;```

So, for example, if this is the result array: [2,4,5,4,6,1,6,7,1,6]

The output would be 3.


