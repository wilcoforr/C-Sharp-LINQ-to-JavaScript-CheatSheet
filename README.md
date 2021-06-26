# C# LINQ API to JavaScript array API Cheat Sheet

See the `main.js` file for some code examples to copy/paste into your console browser or elsewhere.

## C#:

```csharp
class Person 
{
    public string Name { get; set; }
    public int Age { get; set; }

    public Person(string name, int age) 
    {
        Name = name;
        Age = age;
    }
}
```

## JavaScript:

```js
class Person {
constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
```

## Our Array of People:

```js
let john = new Person("John", 25);
let frank = new Person("Frank", 33);
let anne = new Person("Anne", 28);
let betty = new Person("Betty", 42);

let people = [john, frank, anne, betty];
```

## LINQ to JavaScript Cheat Sheet Table Code Examples

C# | C# Code | JavaScript | JavaScript Code | Result
--- | --- | ---| --- | ---
All | `people.All(p => p.Age > 18);` | every | `people.every(p => p.age > 18);` | True
Any | `people.Any(p => p.Age > 18);` | some | `people.some(p => p.age > 18);` | True
First/FirstOrDefault | `people.First(p => p.Name.Contains("Bett"));` | find | `people.find(p => p.name.includes("Bett"));` | Betty Person instance
OrderBy | `people.OrderBy(p => p.Age);` | sort * | `people.sort((p1, p2) => p1.age > p2.age);` | Sorted by age Ascending
Select | `people.Select(p => p.Name);` | map | `people.map(p => p.name);` | An array of all the people's names
Where | `people.Where(p => p.Age > 30);` | filter | `people.filter(p => p.age > 30);` | An array of Frank and Betty

\* You might be wondering why there is an explicit age comparison check in the `.sort()` function in JavaScript. This is because the values are compared like strings. See https://stackoverflow.com/a/15084277 and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort for more information.


## Notes:

### If no elements are found

Will return undefined usually, however some times this is browser specific. Refer to MDN:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

### .ForEach()

Not "real" LINQ, but is handy. In .NET/C#, `.ForEach` is an extension off of the List class

```js
//C#: people.ForEach(p => Console.WriteLine(p.name + " is " + p.age + " years old"));
people.forEach(p => console.log(p.name + " is " + p.age + " years old."));

//Results:
John is 25 years old.
Anne is 28 years old.
Frank is 33 years old.
Betty is 42 years old.

//you can also use .forEach to mutate the list
people.forEach(p => p.age++);

//print out each person's incremented age
people.forEach(p => console.log(p.name + " is " + p.age + " years old."));

//Results:
John is 26 years old.
Anne is 29 years old.
Frank is 34 years old.
Betty is 43 years old.
```

### OrderByDescending

To do OrderByDescending, simply invert the predicate you pass in here is an example using a different function. Like if the comparison needed to sort was more complicated.

```js
function sortDescending(p1, p2) {
    return p1.age < p2.age;
}

people.sort((p1, p2) => sortDescending(p1, p2))
```

Result would be:

    [
        Person { name: 'Betty', age: 42 },
        Person { name: 'Frank', age: 33 },
        Person { name: 'Anne', age: 28 },
        Person { name: 'John', age: 25 } 
    ]
