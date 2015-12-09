You cannot multiply a string n times as follows...
```javascript
var str = "hello!",
    n   = 10;
return str*n  // returns NaN
```
...**BUT** you can create an empty array of n elements, like so:
```javascript
return Array(n) // returns [ , , , , , , , , , , ]
```
We can then use the ```.join(str)``` method on arrays to join array elements in string format, separating them with string ```str```. If we were to use ```.join(str)``` on an array of ```n``` empty elements, however the last element would come out of the array in string format (an empty string) with no strings attached (pardon the play of words!).

All we need is to add 1 element: ```Array(n+1)``` 

```javascript
var str = "hello!",
    n   = 10;
return Array(n+1).join(str) // returns 'hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!'
