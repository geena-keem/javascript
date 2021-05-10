const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    // 1. 생성자 함수의  prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
        sayHello() {
            console.log(`Hi! My name is ${this.name}`);
        }
    };

    return Person;
}());

const me = new Person('Keem');

console.log(me.__proto__);