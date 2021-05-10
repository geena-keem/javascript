var person = {
    name: 'keem',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

console.log(typeof person);
console.log(person);


var empty = {};
console.log(typeof empty, empty);