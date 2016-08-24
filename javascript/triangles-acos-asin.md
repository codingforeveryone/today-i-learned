Defining the angles and length of sides of a triangle.

To find out the length of an unknown side when dealing with a right angled triangle, Pythagoras Theroem or SOH CAH TOA would be used. Derived from the same theroem, but used in instances where a right angle is not present, the sine or cosine rule are applied to find missing sides. To find an angle with the length of two sides known the SOH CAH TOA is utilised if there is a right angle; otherwise the cosine or sine rules, dependent on the angles and lengths given, are used to calculate missing angles. 

However, Javascript does not have built-in methods for finding inverse cosine and sine. To address this issue when working out angles use:

	Math.acos((b*b + c*c - a*a)/ (2*b*c)) * 180/(Math.PI);

For example in a triangle of dimensions (7, 12, 8), the size of the smallest angle needs to be calculated. This will be the angle facing the smallest side. We will call this angle A and therefore the smallest side will be side a:

	function inverseCos(a, b, c) {
		
		var x = Math.acos((b*b + c*c - a*a)/ (2*b*c)) * 180/(Math.PI);

		return (x);
	}

	// 34.093 (3 d.p)

The Math.acos() function converts the value into radians; multiplying by 180/(Math.PI) returns the answer in degrees.

Similarly, Math.asin() function returns the arcsine (in radians) of a number. By multiplying by 180/(Math.PI) we recieve the answer in degrees.