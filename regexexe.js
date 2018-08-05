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

//  Write a regex to check what will happen if /?/ to match 

		var re = /?/;

		var str1 = 'I have a pen. This pen is very good. Do you have a pen?  ';

		console.log(re.test(str1));

		1)Ans: ? The preceding token is not quantifiable

		
// 	Write a regex to match "?""

		var re = /[?]/g;

		var str1 = 'I have a pen. This pen is very good. Do you have a pen?  ';

		console.log(re.test(str1));

		

//  Write a regex to check what will happen if we give /./g to check period in test string

		
		var re = /./g;

		var str1 = 'I have a pen. This pen is very good. Do you have a pen?  ';

		console.log(re.test(str1));

		Ans: a) . matches any character (except for line terminators).
			 b) g modifier: global. All matches (don't return after first match)	

		
//  Write a regex to match "." in given string

		
		var re = /[.]/gm;

		var str1 = 'I have a pen. This pen is very good. Do you have a pen?  ';

		console.log(re.test(str1));


// 	Write a regex to to match on "car" should not match car in cartoon

		var re = /\bcar\b/gm;

		var str1 = ' I have a car. It is a beautiful car. He is watching cartoon.';

		console.log(re.test(str1));

// 	Write regex to match all spaces in string but not characters

	1)	var re = /\s/gm;

		var str1 = ' This is test string	  with a tab and spaces';

		console.log(re.test(str1));

	2)  var re = /\s/;

		var str1 = ' This is test string	  with a tab and spaces';

		console.log(re.test(str1));	

		Ans: Matchs only first space in the string

	3)  // Match all characters but not spaces or tabs


		var re = /\S/gm;

		var str1 = ' This is test string	  with a tab and spaces';

		console.log(re.test(str1)); 



// 	Write a regex to match all digits in the string without using numbers


		var	re = /\d/gm;

		var str1 = 'This is year 2018. Last year was 2017.'

		console.log(re.test(str1));


// 	Write a regex to match everything except numbers
		var	re = /\d/gm;

		var str1 = 'This is year 2018. Last year was 2017.'

		console.log(re.test(str1));