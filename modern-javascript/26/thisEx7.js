// // Bad
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHi = () => console.log(`Hi! ${this.name}`);

// const person = new Person('Keem');
// person.sayHi(); // Hi! undefined



// Good
function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function () { console.log(`Hi! ${this.name}`); };

const person = new Person('Keem');
person.sayHi(); // Hi! Keem