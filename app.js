function disemvowel(str) {

	var vowelArray = ['A','E','I','O','U','a','e','i','o','u'];

	for(var i = 0; i < vowelArray.length; i++){

//		str = str.replace(vowelArray[i], '')
		str = str.replace(new RegExp(vowelArray[i], 'g'), '');

		console.log(i);
		console.log(str);
	}
	console.log(str);
  return str;
}

function likes(names) {
  // TODO
}


//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
//Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:
//
//likes [] // must be "no one likes this"
//likes ["Peter"] // must be "Peter likes this"
//likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
//likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
//likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
//For 4 or more names, the number in and 2 others simply increases.
