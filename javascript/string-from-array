Today I have been working on a Codewars kata which, to avoid any spoilers, shall remain nameless.  It involved the repetition of an input string up to a limit set by a second argument.
When presented with the challenge of a repeating output, it's tempting to go for a loop.  I opted for a different route.
I had been watching "Wat".  A talk by Gary Bernhardt.  (Highly recommended and very funny.  You can find it [here](https://www.destroyallsoftware.com/talks/wat))  In his talk, he creates an array of a fixed length using ```Array(n)```
I figured I could create an array of length: n, then use the ```.map()``` method to fill it with the string, like so:

```javascript
function repeatString(string, length) {
  return new Array(length).map(function (x){return string}).join("");
}
```

Little did I realise that this does not work in practice.  ```new Array()``` always creates an empty array.  What I missed in the "Wat" talk, and was brought to my attention by friends was that you can use the **string itself** as the joiner:

```javascript
function repeatString(string, length) {
  return new Array(n + 1).join(str);
}
```

If you need to create a string that repeats ```n``` times, creating an array of ```n + 1``` items will create ```n``` joins.  There was another constraint to this kata which I will not reveal here as it isn't relevant to this TIL and I don't want to completely spoil the kata for anyone who finds it.

I had never considered the ```.join()``` method in this way before.  I had always assumed the array elements to be the output and the joining element as a secondary thing.  It is another reminder of how important it is to think flexibly about my code, and I hope it helps others to do the same.  Thanks to Giacomo Sorbi and Gabriel Peres for opening my eyes.
