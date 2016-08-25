hasOwnProperty() is a default method in the Object prototype that takes a string argument and returns a boolean indicating whether the object has the specified property.

	obj.hasOwnProperty(prop);

The hasOwnProperty determines whether the properties defined in object are a direct property of that object as opposed to checking its prototypal inheritance.

Similarly, the 'in' operator checks to see if a particular attribute is located anywhere in the object, however, this is inclusive of its prototype chain.

##Direct versus Indirect

	var object1 = {prop1: {c:1, d:2}, prop2:[1,2,3]};
	var object2 = Object.create(object1);

	"prop1" in object1
	//true
	"prop1" in object2
	//true
	object1.hasOwnProperty("prop1")
	//true
	object2.hasOwnProperty("prop2")
	//false
	object2.hasOwnProperty("prop2")
	//false
	object1.hasOWnProperty("prop2");
	//true

In the former example, object2 has an indirect relationship with prop1 and prop2 having inherited the attributes from object 1. Hence, why hasOwnProperty returns false when method called on object2. As .hasOwnProperty ignores prototypal inheritance it is often used to loop object properties:

	for (var name in obj) {
	  if (obj.hasOwnProperty(name)) {
	    // code here
	  }
	}

##Practical usage of hasOwnProperty:

For looking over an array of numbers and checking for repeated values

	function unique(a) {
		var seen = {};
		return a.filter(function(item) {
			return seen.hasOwnProperty(item) ? false : (seen[item] = true);
			});
		}

	unique([4, 5, 6, 7, 3, 5, 7]);

	//[4, 5, 6, 7, 3]
