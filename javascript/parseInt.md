The parseInt function converts strings to numbers.
The function however, does not work so well if the string-numbers are small enough to be written in scientific notation.
Try for instance typing the following commands your command line, you'll be surprised!
```javascript
parseInt("1e-20")
```
```javascript
parseInt("3.211e20")
```
