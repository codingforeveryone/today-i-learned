#Prototype Chains

This is a mechanism for building objects based on other existing objects, rememember almost everything in JavaScript is an object. This is very similar to inheritance in a class-based language.  Prototype chaining makes one object behave like an another object, by delegating the field lookups from the first object to the second one.

For example Constructor functions have a property called prototype.  Adding properties and methods to the prototype property will automatically add them to all objects created by the constructor function.

Prototype chaining is an extension of this idea. The prototype property is just a regular javascript object so it’s possible to create a function’s prototype using another constructor function. When you do this, all of the properties and methods from the constructor function’s prototype are automatically added to new the prototype object. This makes it easy to create a constructor function that builds objects that are an extended version of an existing one.

For example, there is a Pet constructor with which Pet objects can be made.

	function Pet(name, species, hello){
    	this.name = name;
    	this.species = species;
    	this.hello = hello;
	}
 
	Pet.prototype = {
    	sayHello : function(){
        	alert(this.hello);
    	}
	} 

To make a Pet Cat and give it all the properties of the Pet by setting it’s prototype to be a new pet object:

	function Cat(name, hello, breed, whiskerLength){
    this.name = name;
    this.species = species;
    this.hello = hello;
    this.breed = breed;
    this.whiskerLength = whiskerLength;
	}
 
	Cat.prototype = new Pet();
		var rufus = new Cat("rufus", "miaow", "Maine Coon", 7);
	rufus.sayHello();
	
This is like creating the prototype using object literal syntax. Main difference is that instead of manually adding methods to the object literal, the Pet’s prototype does most that work for us.





	