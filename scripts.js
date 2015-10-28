var questions = [	'What does a "." represent in a jquery selector, ',
					'What does a "#" represent in a jquery selector, ',
					'What language is used to add style to a webpage, ',
					'What language is used to create the content of a webpage, ',
					'What method is used to select an id in native javascript, ',
					'How would you select an id named "wrapper" in jQuery, ',
					'What is the OS of the AWS servers we started in class, ',
					'What is the linux command to print the path to your current directory, ',
					'What is the linux command to make a directory, ',
					'How many columns does bootstrap create for a row, '];

var answers = [	"class",
				"id",
				"CSS",
				"HTML",
				".getElementById()",
				"$('#wrapper')",
				"Ubuntu",
				"pwd",
				"mkdir",
				"12"];

var difficulties = [	2,
						2,
						1,
						1,
						3,
						3,
						4,
						4,
						5,
						2	];

var students = ["Griffin",
				"Oliver",
				"Yohsuke",
				"Chance",
				"Peter",
				"Andrew",
				"Stephen",
				"Will",
				"Freddy",
				"Stuart"];

var questionArray = []

for( var i =0; i< 10; i++){
	var newObj = {
		question: questions[i],
		answer: answers[i],
		difficult: difficulties[i],
		student: students[Math.floor(Math.random()*10)],
		evaluateAnswer : function(correctBool){
			var answerDate = new Date();

			if(correctBool){
				alert('Correct! ' + answerDate.toDateString() +' '+ answerDate.toTimeString());
			} else{
				alert('Wrong! ' + answerDate.toDateString() +' '+ answerDate.toTimeString());
			}
		}
	}
	questionArray.push(newObj);
}


$(document).ready(function(){
	$('#question-button').click(function(){
		var thisQuestion = questionArray[Math.floor(Math.random()*10)];
		$('#question-header').html(thisQuestion.question + '<span id="student">' + thisQuestion.student + '</span>' + '?');
		$('.difficulty').html(thisQuestion.difficult)

	});
});


function Address(name,email,address,address2,city,state,zip,phone,website){
	this.name = name;
	this.email = email;
	this.address = address;
	this.address2 = address2;
	this.city = city;
	this.state = state;
	this.zip = zip;
	this.phone = phone;
	this.website = website;
}

var addressBook = [];
addressBook.push(new Address('Griffin', 'grifhammer@gmail.com', '4 State St.', 'Unit 1A', 'Atlanta', 'GA', '30363', '3364552913', 'none.com'))
addressBook.push(new Address('Bill', 'Bill@gmail.com', '10 Bill Ct.', '', 'Atlanta', 'GA', '30303', '5555555555', 'Bill.com'))
addressBook.push(new Address('Jim', 'Jim@gmail.com', '13 Jim St.', 'APT 1409', 'Des Moines', 'IA', '30311', '3365552913', 'jim.com'))
addressBook.push(new Address('Dave', 'Dave@gmail.com', '2510 First Ave.', '', 'West Des Moines', 'IA', '30163', '5154552913', 'dave.com'))
addressBook.push(new Address('Mike', 'Mike@gmail.com', '100 Cool Blvd.', '', 'Clive', 'IA', '50325', '5154552913', 'facebook.com'))
addressBook.push(new Address('Molly', 'Molly@gmail.com', '6 State St.', 'APT 5C', 'Greensboro', 'NC', '27410', '4001234567', 'twitter.com'))
addressBook.push(new Address('Mary', 'Mary@gmail.com', '7 State St.', 'APT 3E', 'Greensboro', 'NC', '27408', '4104552913', 'reddit.com'))
addressBook.push(new Address('Sandy', 'Sandy@gmail.com', '8 State St.', '', 'Greensboro', 'NC', '27391', '3361235555', 'google.com'))
addressBook.push(new Address('Tim', 'Tim@gmail.com', '9 State St.', '', 'Richmond', 'VA', '20000', '1234567890', 'netflix.com'))
addressBook.push(new Address('Tom', 'Tom@gmail.com', '10 State St.', '', 'Troy', 'NY', '12180', '4335558888', 'tom.com'))



