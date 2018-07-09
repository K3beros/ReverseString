
function reverseString(str) {
	//initialize a new variable
	var x = "";

	//Use a for loop to loop through the string
	for (i = str.length(); i >= 0; i--) {

		x += str[i];
	}

	return x;
	
}