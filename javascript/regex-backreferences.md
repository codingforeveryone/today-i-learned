Today I learned about regex backreferencing and numbered capture groups.

As well as grouping a section of a regular expression, parentheses also create a numbered capture group, which can be referred to in the replacement string using a backreference.

Consider the following string:
````
var string = 'I work every day except monday, tuesday, wednesday and thursday';
````
If I want to remove the `'day'` from `'monday, tuesday, wednesday and thursday'`, I can use the `.replace()` method with a regex:

`````
var res = string.replace(/\b(\w{3,})day\b/g, '$1')
`````
`/\b(\w{3,})day\b/g` will match 'day' at the end of a 6+ letter word.
`(\w{3,})` will store the 3+ alphanumeric symbols accessed by the `\w{3,}`. That is all of the letters before `'day'` for each day of the week (so the `'mon'` of `'monday'`, the `'tues'` of `'tuesday'` etc.).
`'$1'` will backreference what was stored by the first parentheses and therefore replace `'monday'` with `'mon'`, tuesday with `'tues'` etc.

So after all that, returning `res` gives:
````
'I work every day except mon, tues, wednes and thurs'
````
`$1-$99` can backreference up to 99 sets of parentheses in JavaScript.
