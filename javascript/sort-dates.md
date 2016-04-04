I've been experimenting a lot with dates recently and thought I'd share a snippet.

Say you have an array of times in the same day and you wanted to sort them in
ascending order:
```javascript
['11:30','07:13','09:58','04:30','14:34','23:14','01:23','10:46']
```
My first thought was that I would need to find a way to translate every time into
how many minutes after midnight ```('00:07' = 7)``` it represents and then sort
the array of numbers by size.

I didn't realise you can sort [Date objects](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date)! You can bypass the above a few steps by
simply converting each time into a Date object on the same day and applying the
common principles of ```Array.sort```:
```javascript
var times = ['11:30','07:13','09:58','04:30','14:34','23:14','01:23','10:46'];

times.sort(function(a, b){
    var dateA = new Date('2016-04-03T'+ a +':00');
    var dateB = new Date('2016-04-03T'+ b +':00');
    return dateA - dateB;
});
//returns ['01:23', '04:30', '07:13', '09:58', '10:46', '11:30', '14:34', '23:14']
```
or... Codewars version ;-) :
```javascript
times.sort((a,b)=>new Date('2016-04-03T'+a+':00')-new Date('2016-04-03T'+b+':00');
```
