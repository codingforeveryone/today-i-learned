###The RegExp() Object###
Until recently, I'd mostly come across regular expressions in their unicode form, mainly using the ```match``` and ```replace``` methods.
Now I've realised that the RegExp() object can also be used in a similar way, except now regular expressions can be combined with variables!
For example:

````
function charLocate(string, charax) {
	var characters = string.match(new RegExp('b'+charax+'b', 'ig'));
	console.log(charcaters);
}
charlocate("wood", "I would buy wood from the wood shop."); // returns two instances of "wood"
````
whereas you wouldn't be able to do this in unicode (this wouldn't work)...
````
function charLocate(string, charax) {
	var characters = string.match(/\b[charax]+\b/ig));
	console.log(charcaters);
}
charlocate("wood", "I would buy wood from the wood shop."); // returns undefined
`````
