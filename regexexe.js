// Write a regex which matches "car" anywhere in the test string 

var re = /\Dcar/gm;

		var str1 = 'This is a car. I like my car.Cars are for transportation ';

		console.log(re.test(str1));


// Write a regex which matches 2011

		var re = /\d2011/gm;

		var str1 = 'I Visted Australia in 2011 ';

		console.log(re.test(str1));

//  Write a regex which matches all instances of tree or Tree


		var re = /tree/gmi;

		var str1 = 'Tree provides us oxygen. I have a tree in my garden. ';

		console.log(re.test(str1));


//  Write a regex to match first occurance of "pen"


		var re = /\Dpen/;

		var str1 = 'I have a pen. This pen is very good. Do you have a pen? ';

		console.log(re.test(str1));



		var re = /learn/;

		var str1 = ' ';

		console.log(re.test(str1));
