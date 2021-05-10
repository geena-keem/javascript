function Person(name) {
    this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
};

const me = new Person('Keem');
const you = new Person('Lee');

me.sayHello(); // Hi! My name is Keem
you.sayHello(); // Hi! My name is Lee