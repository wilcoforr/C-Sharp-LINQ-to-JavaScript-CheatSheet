// LINQ to JavaScript Cheat Sheet
// Copyright 2019 Wilcoforr

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};

let john = new Person("John", 25);
let frank = new Person("Frank", 33);
let anne = new Person("Anne", 28);
let betty = new Person("Betty", 42);

let people = [john, frank, anne, betty];

console.log(people);

//the "p => console.log(p.name)" is short for:
//function(p) { console.log(p.name); }
//in JavaScript

//OrderBy
people.sort((p1, p2) => p1.age > p2.age);
console.log(people);

//All
let isEveryoneOver18 = people.every(p => p.age > 18);
console.log(isEveryoneOver18); //true

let isAnyoneUnder18 = people.every(p => p.age < 18);
console.log(isAnyoneUnder18); //false

//Any
let anyoneOlderThan50 = people.some(p => p.age >= 50);
console.log(anyoneOlderThan50); //false

let anyoneYoungerThan30 = people.some(p => p.age < 30);
console.log(anyoneYoungerThan30); //true

//First/FirstOrDefault
let findBetty = people.find(p => p.name.includes("Bett"));
console.log(findBetty); //Person { name: 'Betty', age: 42 }

//OrderBy
people.sort((p1, p2) => p1.age > p2.age);
console.log(people);

//To do OrderByDescending, simply invert the predicate you pass in
//heres an example using a different function. Like if the 
//comparison needed to sort was more complicated.
function sortDescending(p1, p2) {
  return p1.age < p2.age;
}
people.sort((p1, p2) => sortDescending(p1, p2))
console.log(people);

//Select
let namesOnly = people.map(p => p.name);
console.log(namesOnly);

//Where
let peopleOver30 = people.filter(p => p.age > 30);
console.log(peopleOver30);


