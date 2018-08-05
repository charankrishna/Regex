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
			 //b) g modifier: global. All matches (don't return after first match).	

		
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


		var	re = /\D/gm;

		var str1 = 'This is year 2018. Last year was 2017.'

		console.log(re.test(str1));


// 	Write a regex to match everything in the string without using a-z, 0-9, and '_'


 		var	re = /\w+/gm;

		var str1 = 'file11_123 file11_124 file11_125 ...'

		console.log(re.test(str1));


// 	Check given regex which match words given below


		var re = /.ear/g;

		var str1 = 'par zar near pear deer dear clear car war';

		console.log(re.test(str1));

		Ans: near, pear, dear, clear

// 	Check given regex which match items given below	


		var re = /45.67/;

		var str1 = '4567 45.67 45*67 45+67 45-67 45$67';

		console.log(re.test(str1));

		Ans: 45.67


//  Write a regex to match new line character 


		var	re = /\n/gm;

		var str1 = 'This is year 2018. Last year was 2017.'

		console.log(re.test(str1));


//	Check the regex to matches which items given below


		var	re = /[ne]t/g;

		var str1 = 'neg net nt et pet zet'

		console.log(re.test(str1));

		Ans: net nt et pet zet

// 	Write a regex to match affect and effect

		var	re = /\b[ae]?ffect\b/g;

		var str1 = 'affect effect'

		console.log(re.test(str1));

// 	Write a regex to match petal and pedal

		var	re = /\bpe[td]?al\b/g;

		var str1 = 'petal pedal'

		console.log(re.test(str1));

// 	Write a regex to match 121 122 123 124 125

		var	re = /\d{3}/g;

		var str1 = '121 122 123 124 125'

		console.log(re.test(str1));

// 	Write a regex to match jeep and leap

		var	re = /\b[jl]?e[ae]?p\b/g;

		var str1 = 'jeep leap'

		console.log(re.test(str1));


// 	Write a regex to match catch and hatch

		var	re = /\b[ch]?atch\b/g;

		var str1 = 'catch hatch'

		console.log(re.test(str1));


// 	Write a regex to match house and mouse

		var	re = /\b[hm]?ouse\b/g;

		var str1 = 'house mouse'

		console.log(re.test(str1));


// 	Write a regex to match catch and hatch

		var	re = /\b[bp]?ana[nm]?a\b/g;

		var str1 = 'banana panama'

		console.log(re.test(str1));


// 	Write a regex to match from 101-199

		var	re = /\b(1[0-9][1-9])\b/g;

		var str1 = ' 100 101 121 122 123 124 125 199 200'

		console.log(re.test(str1));


// 	Write a regex to match everything in the string 


 		var	re = /\b\w+.php\b/gm;

		var str1 = 'file_1.php file_2.php file_3.php file_4.php file_5.php'

		console.log(re.test(str1));


// 	Write a regex to match everything except numbers


		var	re = /\w([a-zA-z\d{2,}])/gm;

		var str1 = 'This is year 2018. Last year was 2017. 1 2 3 4 22 25 26 '

		console.log(re.test(str1));


// 	Write a regex to match everything except a-z


		var	re = /[A-Z\d{1,}]/gm;

		var str1 = 'This is year 2018. Last year was 2017. 1 2 3 4 22 25 26 '

		console.log(re.test(str1));

// 	Write a regex to match a-z A-Z _ 0-9 but should not start with digit


		var	re = /\b[^0-9]+\w+\b/gm;

		var str1 = '123alfa '

		console.log(re.test(str1));


// 	Write a regex to match flavor and flavour

		var	re = /\bflavou?r\b/g;

		var str1 = 'flavor flavour'

		console.log(re.test(str1));


// 	Write a regex to match color and colour

		var	re = /\bcolou?r\b/g;

		var str1 = 'color colour'

		console.log(re.test(str1));


// 	Write a regex to match book and books

		var	re = /\bbook?s\b/g;

		var str1 = 'book books'

		console.log(re.test(str1));


// 	Write a regex to match from 100-999

		var	re = /\b\d{3,3}\b/g;

		var str1 = ' 100 101 121 122 123 124 125 199 999'

		console.log(re.test(str1));


// 	Write a regex to match six figure salary

		var	re = /\b(\d{3,3}|\d{4,4})\b/g;

		var str1 = ' 145 658 258 7854 6589 25 37 123478 45781 25254'

		console.log(re.test(str1));


// 	Write a regex to match catch, catches, and patches

		var	re = /\b[cp]?atche?s?\b/g;

		var str1 = 'catch catches patches'

		console.log(re.test(str1));

// 	Write a regex to match actor and actress

		var	re = /\bacto?r?e?s?s?\b/g;

		var str1 = 'actor actress'

		console.log(re.test(str1));

// 	Write a regex to match everything in the string 


 		var	re = /\b\w+.html\b/gm;

		var str1 = 'truck.html truck1.html truck2.html'

		console.log(re.test(str1));


// 	Write a regex to match everything in the string 


 		var	re = /\b\w+\b/gm;

		var str1 = '1flower 2flower 33flowers'

		console.log(re.test(str1));


// 	Write a regex to match everything in the string 


 		var	re = /\bbe+\b/gm;

		var str1 = 'b be bee beee beeee'

		console.log(re.test(str1));



// 	Write a regex to match everything in the string 


 		var	re = /'([^']*)'/gm;

		var str1 = "'he has 'won' the 'match' "

		console.log(re.test(str1));