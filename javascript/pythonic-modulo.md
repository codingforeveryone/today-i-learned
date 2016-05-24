
Most mathematicians, and some programming languages (including Python), implement the modulo (%) operation to handle negative numbers as follows:

```
    N | -5 -4 -3 -2 -1  0  1  2  3  4  5
N % 5 |  0  1  2  3  4  0  1  2  3  4  0
```

Javascript, however, uses this less common (and often less useful) implementation:

```
    N | -5 -4 -3 -2 -1  0  1  2  3  4  5
N % 5 | -0 -4 -3 -2 -1  0  1  2  3  4  0
```

[Stephen Chapman suggests](http://javascript.about.com/od/problemsolving/a/modulobug.htm) fixing this by adding the following method to the Number prototype:

```javascript
  Number.prototype.mod = function(n) {
    return ((this % n) + n) % n);
  }
```

After implementing this method in your code, simply call x.mod(y) to return the 'correct' modulo result for negative values of x.
