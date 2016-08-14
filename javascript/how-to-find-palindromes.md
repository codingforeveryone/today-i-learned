Whilst creating a solution for Kata on codewars I found myself needing to check if a given string was a palindrome. 
My own attempt at doing so was fuctional, but very convoluted. So I turned to google to find a better solution



```javascript
function checkPalindrome(str) {
    return(str == str.split('').reverse().join(''));
}
```

This very neat piece of a code was found here
http://stackoverflow.com/questions/14813369/palindrome-check-in-javascript



It can be adapted to work with arrays like this:

```javascript
function checkPalindrom(array) {
    test = array.toString();  
    return(test == test.split('').reverse().join(''));
}    
```
