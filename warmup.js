// High order functions.


var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];


function each(array, func) {
	for(var i = 0; i<array.length; i++) {
		func(array[i]);
	}
}


function ages(people) {
	var acc = [];

	each(people, function(person) {
		acc.push(person.age);
	});

	return acc;
}


function firstName(people) {
	var acc = [];
	each(people, function(person) {
		acc.push(person.name.first);
	});

	return acc;
}


function lastName(people) {
	var acc = [];
	each(people, function(person) {
		acc.push(person.name.last);
	});

	return acc;
}


function fullNames(people) {
	var acc = [];

	each(people, function(person) {
		acc.push(person.name.first + " " + (person.name.middle !== undefined ? person.name.middle : "") + " " + person.name.last);
	});

	return acc;
}


function averageAge(people) {
	var acc = ages(people);

	var ageTotal = 0;

	each(acc, function(age) {
		ageTotal = ageTotal + age;
	});

	var avgAge = ageTotal / acc.length;

	return avgAge;
}
